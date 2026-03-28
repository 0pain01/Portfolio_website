// ─────────────────────────────────────────────────────────────────
//  useMouseDotGrid.js
//  ► Config + hook for the mouse-reactive dot grid background.
//  ► Tweak DOT_CONFIG values to adjust the visual effect.
// ─────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

/* ── CONFIG — edit these to tune the dot grid ─────────────────── */
export const DOT_CONFIG = {
  spacing:     22,        // px between dots  (smaller = denser)
  dotSize:     "1px",     // rendered dot diameter
  glowRadius:  110,       // px radius of mouse spotlight
  baseColor:   "#2a2a33", // resting dot colour
  glowColor:   "#8ff5ff", // lit dot colour
  baseOpacity: 0.4,       // opacity of always-visible base grid
  glowOpacity: 0.55,      // opacity of the glow layer
  smoothing:   0.12,      // lerp factor  0 = max lag · 1 = instant
};

/**
 * useMouseDotGrid()
 * Attaches a rAF loop that smoothly moves the CSS spotlight vars
 * (--mx, --my) on the glow layer element, and suppresses the glow
 * whenever the cursor enters the footer.
 *
 * @returns {{ spotRef: React.RefObject }}
 */
export function useMouseDotGrid() {
  const spotRef   = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    // Lazily locate the footer so the glow hides there
    footerRef.current = document.querySelector("footer");

    let raf;
    let tx = -9999, ty = -9999;
    let cx = -9999, cy = -9999;
    let inFooter = false;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        inFooter = ty >= rect.top;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      cx += (tx - cx) * DOT_CONFIG.smoothing;
      cy += (ty - cy) * DOT_CONFIG.smoothing;
      el.style.setProperty("--mx", inFooter ? "-9999px" : `${cx}px`);
      el.style.setProperty("--my", inFooter ? "-9999px" : `${cy}px`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { spotRef };
}
