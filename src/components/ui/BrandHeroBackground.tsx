import React from "react";

interface BrandHeroBackgroundProps {
  className?: string;
}

/**
 * BrandHeroBackground
 * Replicates the exact background lighting and gradient effect from the
 * services section on the home page (CorePillars).
 * Includes:
 *  - Radial dark gradient base with smooth edge mask
 *  - Skewed fading brand burgundy & deep vine color streak beams (#71334B & #8C3C5C)
 *  - Subtle noise texture
 *  - Subtle dot pattern overlay
 *  - Subtle radial brand glow
 */
export function BrandHeroBackground({ className = "" }: BrandHeroBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Radial dark gradient base with mask */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: "radial-gradient(100% 100% at 0% 0%, #191316 0%, #090708 100%)",
          WebkitMaskImage:
            "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        {/* Skewed fading brand color streaks */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
            maskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
            transform: "skewX(45deg)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
            maskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
            transform: "skewX(45deg)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(rgba(140, 60, 92, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
            maskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
            transform: "skewX(45deg)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.47) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
            maskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.47) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
            transform: "skewX(45deg)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(rgba(140, 60, 92, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
            maskImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
            transform: "skewX(45deg)",
          }}
        />
      </div>

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage:
            'url("https://cdn.21st.dev/assets/mirror/f5/f55dfc553c100e6da0ad95258a042b4100f0ff4bb03a5313d1f541984275e262.png")',
          backgroundSize: "149.76px",
        }}
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(246, 240, 235, 0.3) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Subtle radial brand glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(113, 51, 75, 0.25) 0%, rgba(73, 35, 50, 0.08) 50%, transparent 80%)",
        }}
      />
    </div>
  );
}
