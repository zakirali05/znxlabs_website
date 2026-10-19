"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Shield, Zap } from "lucide-react";

export function InteractiveSystemMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<"neural" | "vector" | "deterministic">("neural");
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [metrics, setMetrics] = useState({ latency: 12, throughput: "99.98%", activeNodes: 48 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create interconnected dynamic nodes
    const nodeCount = 38;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseRadius: number;
    }[] = [];

    const colors = [
      "#F6F0EB", // Warm Ivory
      "#71334B", // Burgundy Highlight
      "#492332", // Deep Vine
      "#d6acc1", // Light Burgundy
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.5,
        baseRadius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background radial glow from mouse
      if (mousePos.x > 0 && mousePos.y > 0) {
        const gradient = ctx.createRadialGradient(
          mousePos.x,
          mousePos.y,
          0,
          mousePos.x,
          mousePos.y,
          220
        );
        gradient.addColorStop(0, "rgba(113, 51, 75, 0.18)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from walls
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction: gentle repulsion / attraction
        const dx = mousePos.x - node.x;
        const dy = mousePos.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
          node.radius = node.baseRadius * 1.6;
        } else {
          node.radius = node.baseRadius;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const cdx = other.x - node.x;
          const cdy = other.y - node.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          const maxDist = activeMode === "neural" ? 130 : activeMode === "vector" ? 170 : 100;

          if (cdist < maxDist) {
            const alpha = (1 - cdist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle =
              node.color === "#71334B" || other.color === "#71334B"
                ? `rgba(113, 51, 75, ${alpha * 1.3})`
                : `rgba(246, 240, 235, ${alpha * 0.7})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }

      // Draw center geometric focal point
      const centerX = width / 2;
      const centerY = height / 2;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(frame * 0.003);

      ctx.strokeStyle = "rgba(113, 51, 75, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-60, -60, 120, 120);

      ctx.rotate(-frame * 0.006);
      ctx.strokeStyle = "rgba(246, 240, 235, 0.2)";
      ctx.strokeRect(-40, -40, 80, 80);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeMode, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-6 sm:p-8 overflow-hidden shadow-2xl backdrop-blur-xl group"
    >
      {/* Top Header / Mode Switcher */}
      <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(246,240,235,0.08)]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#71334B] animate-pulse" />
          <span className="font-mono text-xs text-[#F6F0EB] font-semibold tracking-wider uppercase">
            ZNX Neural Architecture Core
          </span>
          <span className="text-[11px] font-mono text-[#B8ADB2] hidden md:inline">
            • Interactive Telemetry
          </span>
        </div>

        {/* Interactive Mode Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090708] border border-[rgba(246,240,235,0.1)] self-start sm:self-auto">
          {(["neural", "vector", "deterministic"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => {
                setActiveMode(mode);
                setMetrics((m) => ({
                  ...m,
                  latency: mode === "deterministic" ? 6 : mode === "vector" ? 18 : 12,
                  activeNodes: mode === "vector" ? 64 : mode === "neural" ? 48 : 32,
                }));
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all capitalize cursor-pointer ${
                activeMode === mode
                  ? "bg-[#492332] text-[#F6F0EB] font-bold border border-[#71334B]"
                  : "text-[#B8ADB2] hover:text-[#F6F0EB]"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="relative h-72 sm:h-96 w-full cursor-crosshair">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#110D0F] via-transparent to-transparent pointer-events-none" />

        {/* Floating Telemetry Tags */}
        <div className="absolute top-4 left-4 z-10 hidden sm:block p-3 rounded-xl bg-[#090708]/80 border border-[rgba(246,240,235,0.08)] backdrop-blur-md text-[11px] font-mono space-y-1">
          <div className="text-[#B8ADB2] flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#71334B]" />
            <span>Execution Model:</span>
            <span className="text-[#F6F0EB] font-bold uppercase">{activeMode}</span>
          </div>
          <div className="text-[#B8ADB2] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#d6acc1]" />
            <span>Inference Latency:</span>
            <span className="text-[#F6F0EB] font-bold">{metrics.latency}ms</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10 hidden sm:block p-3 rounded-xl bg-[#090708]/80 border border-[rgba(246,240,235,0.08)] backdrop-blur-md text-[11px] font-mono space-y-1">
          <div className="text-[#B8ADB2] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#71334B]" />
            <span>Isolation:</span>
            <span className="text-[#F6F0EB]">Private Sovereign VPC</span>
          </div>
          <div className="text-[#B8ADB2] flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#d6acc1]" />
            <span>System Reliability:</span>
            <span className="text-[#F6F0EB] font-bold">{metrics.throughput}</span>
          </div>
        </div>
      </div>

      {/* Bottom Live Metrics Bar */}
      <div className="relative z-20 pt-4 border-t border-[rgba(246,240,235,0.08)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
        <div>
          <span className="text-[#B8ADB2] text-[10px] uppercase block">Routing Latency</span>
          <span className="text-[#F6F0EB] font-bold text-sm">{metrics.latency}ms average</span>
        </div>
        <div>
          <span className="text-[#B8ADB2] text-[10px] uppercase block">Active Vector Nodes</span>
          <span className="text-[#F6F0EB] font-bold text-sm">{metrics.activeNodes} Nodes Mesh</span>
        </div>
        <div>
          <span className="text-[#B8ADB2] text-[10px] uppercase block">Security Governance</span>
          <span className="text-[#d6acc1] font-bold text-sm">SOC2 / Zero Retention</span>
        </div>
        <div>
          <span className="text-[#B8ADB2] text-[10px] uppercase block">Engine Throughput</span>
          <span className="text-[#F6F0EB] font-bold text-sm">{metrics.throughput} Uptime</span>
        </div>
      </div>
    </div>
  );
}
