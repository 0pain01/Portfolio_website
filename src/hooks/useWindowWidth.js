// ─────────────────────────────────────────────────────────────────
//  useWindowWidth.js
//  ► Returns live window.innerWidth, updating on resize.
//  ► Use this in components to switch between mobile/tablet/desktop
//    layouts where CSS alone isn't sufficient.
//
//  Breakpoints (match global.css):
//    mobile  → width < 640
//    tablet  → 640 ≤ width < 1024
//    desktop → width ≥ 1024
// ─────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
}

/** Convenience booleans */
export function useBreakpoints() {
  const w = useWindowWidth();
  return {
    isMobile:  w < 640,
    isTablet:  w >= 640 && w < 1024,
    isDesktop: w >= 1024,
    width: w,
  };
}
