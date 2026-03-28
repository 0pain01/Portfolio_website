// ─────────────────────────────────────────────────────────────────
//  MouseDotGrid.jsx
//  ► Renders two fixed full-viewport layers:
//      1. Base dot grid   — always visible at low opacity
//      2. Glow dot grid   — revealed only under the cursor spotlight
// ─────────────────────────────────────────────────────────────────

import { DOT_CONFIG, useMouseDotGrid } from "../hooks/useMouseDotGrid";

export default function MouseDotGrid() {
  const { spotRef } = useMouseDotGrid();
  const bgSize = `${DOT_CONFIG.spacing}px ${DOT_CONFIG.spacing}px`;

  return (
    <>
      {/* 1. Base grid — always visible */}
      <div style={{
        position:        "fixed",
        inset:           0,
        zIndex:          0,
        pointerEvents:   "none",
        backgroundImage: `radial-gradient(circle, ${DOT_CONFIG.baseColor} ${DOT_CONFIG.dotSize}, transparent ${DOT_CONFIG.dotSize})`,
        backgroundSize:  bgSize,
        opacity:         DOT_CONFIG.baseOpacity,
      }} />

      {/* 2. Glow grid — masked to cursor spotlight */}
      <div
        ref={spotRef}
        style={{
          position:        "fixed",
          inset:           0,
          zIndex:          0,
          pointerEvents:   "none",
          "--mx":          "-9999px",
          "--my":          "-9999px",
          backgroundImage: `radial-gradient(circle, ${DOT_CONFIG.glowColor} ${DOT_CONFIG.dotSize}, transparent ${DOT_CONFIG.dotSize})`,
          backgroundSize:  bgSize,
          WebkitMaskImage: `radial-gradient(circle ${DOT_CONFIG.glowRadius}px at var(--mx) var(--my), black 0%, transparent 100%)`,
          maskImage:       `radial-gradient(circle ${DOT_CONFIG.glowRadius}px at var(--mx) var(--my), black 0%, transparent 100%)`,
          opacity:         DOT_CONFIG.glowOpacity,
        }}
      />
    </>
  );
}
