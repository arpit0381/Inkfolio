"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function lockScroll(lock: boolean) {
  if (typeof window === "undefined") return;
  if (lock) {
    if (window.__lenis) {
      window.__lenis.stop();
    }
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    if (window.__lenis) {
      window.__lenis.start();
    }
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }
}

export default function LenisScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    window.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
