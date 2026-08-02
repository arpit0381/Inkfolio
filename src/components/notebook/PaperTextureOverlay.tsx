"use client";

import React from "react";

export default function PaperTextureOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40 dark:opacity-20">
      {/* Left Margin Red Line */}
      <div className="absolute top-0 bottom-0 left-12 md:left-24 w-[1px] bg-red-400/40 dark:bg-red-500/30" />

      {/* Binder Ring Holes */}
      <div className="absolute top-0 bottom-0 left-3 md:left-8 flex flex-col justify-around py-12">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#E5E0D8] dark:bg-[#1A1A1A] border border-stone-300 dark:border-stone-700 shadow-inner"
          />
        ))}
      </div>

      {/* Coffee Ring Stain (Top Right) */}
      <div className="absolute top-10 right-10 md:right-20 opacity-30 dark:opacity-10 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#8B4513"
            strokeWidth="4"
            strokeDasharray="12 4 8 3 15 2"
            className="blur-[0.5px]"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#A0522D"
            strokeWidth="1.5"
            strokeDasharray="5 3 20 2"
          />
        </svg>
      </div>

      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
