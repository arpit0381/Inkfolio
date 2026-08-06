"use client";

import React from "react";

export default function WoodenDeskBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden wooden-table-surface">
      {/* Warm Ambient Desk Lamp Overhead Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-amber-400/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Wooden Desk Plank Lines */}
      <div className="absolute inset-0 opacity-25 dark:opacity-15 flex flex-col justify-between">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[1px] bg-amber-950/60 dark:bg-black/80 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          />
        ))}
      </div>

      {/* Subtle Wood Texture Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Desk Corners Soft Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />
    </div>
  );
}
