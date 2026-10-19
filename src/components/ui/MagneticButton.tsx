"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "subtle";
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#492332] text-[#F6F0EB] hover:bg-[#5f2d40] border border-[#71334B]/70 shadow-lg shadow-[#492332]/30";
      case "secondary":
        return "bg-[rgba(246,240,235,0.04)] text-[#F6F0EB] hover:bg-[rgba(246,240,235,0.08)] border border-[rgba(246,240,235,0.12)]";
      case "subtle":
        return "bg-transparent text-[#B8ADB2] hover:text-[#F6F0EB] border border-transparent hover:border-[rgba(246,240,235,0.1)]";
      default:
        return "";
    }
  };

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`btn-shine relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-colors duration-200 cursor-pointer overflow-hidden group select-none ${getVariantStyles()} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block no-shine" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block no-shine">
      {content}
    </button>
  );
}

// Convenient alias
export const ShineButton = MagneticButton;
