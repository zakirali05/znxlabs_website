"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type LocomotiveScroll from "locomotive-scroll";
import type { ILenisScrollToOptions, lenisTargetScrollTo } from "locomotive-scroll";

interface SmoothScrollContextType {
  scroll: LocomotiveScroll | null;
  scrollTo: (target: lenisTargetScrollTo, options?: ILenisScrollToOptions) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollInstance, setScrollInstance] = useState<LocomotiveScroll | null>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let instance: LocomotiveScroll | null = null;
    let isCancelled = false;

    const initScroll = async () => {
      try {
        const LocomotiveScrollClass = (await import("locomotive-scroll")).default;

        if (isCancelled) return;

        instance = new LocomotiveScrollClass({
          lenisOptions: {
            duration: 1.15,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
            wheelMultiplier: 1.0,
            infinite: false,
          },
        });

        scrollRef.current = instance;
        setScrollInstance(instance);
      } catch (err) {
        console.error("Locomotive Scroll initialization failed:", err);
      }
    };

    initScroll();

    // Global smooth anchor click delegation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement && scrollRef.current) {
          e.preventDefault();
          scrollRef.current.scrollTo(targetElement, {
            offset: -90, // Accounts for fixed navigation bar
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      isCancelled = true;
      document.removeEventListener("click", handleAnchorClick);
      if (instance) {
        instance.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  // Handle route navigation: reset scroll to top and refresh calculations
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        scrollRef.current?.resize();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const scrollTo = (target: lenisTargetScrollTo, options?: ILenisScrollToOptions) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(target, options);
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ scroll: scrollInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
