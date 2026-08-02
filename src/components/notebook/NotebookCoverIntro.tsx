"use client";

import React, { useState } from "react";
import { usePen } from "@/context/PenContext";
import { BookOpen, Sparkles, Feather, ChevronRight, Lock } from "lucide-react";

export default function NotebookCoverIntro() {
  const { isNotebookOpened, openNotebook } = usePen();
  const [isOpening, setIsOpening] = useState(false);

  if (isNotebookOpened) return null;

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      openNotebook();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0F0D0C] flex items-center justify-center p-4 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-amber-900/20 via-transparent to-black pointer-events-none" />

      {/* 3D Leather Cover Container */}
      <div
        className={`relative w-full max-w-xl aspect-[3/4] sm:aspect-[4/5] rounded-r-2xl rounded-l-md notebook-cover-bg p-8 sm:p-12 shadow-2xl border-y-4 border-r-8 border-stone-900 transition-all duration-700 transform ${
          isOpening
            ? "rotate-y-[-110deg] scale-90 opacity-0 origin-left"
            : "rotate-0 scale-100 opacity-100"
        }`}
        style={{
          boxShadow:
            "-20px 20px 50px rgba(0,0,0,0.9), 0 0 100px rgba(212, 175, 55, 0.15)",
        }}
      >
        {/* Leather Spine Left Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border-r-2 border-amber-900/40 flex flex-col justify-between py-8 items-center">
          <div className="w-2 h-2 rounded-full bg-amber-700/60 shadow-inner" />
          <div className="w-2 h-2 rounded-full bg-amber-700/60 shadow-inner" />
          <div className="w-2 h-2 rounded-full bg-amber-700/60 shadow-inner" />
        </div>

        {/* Golden Metal Corners */}
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-amber-500/80 rounded-tr-xl" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-amber-500/80 rounded-br-xl" />

        {/* Bookmark Elastic Strap */}
        <div className="absolute top-0 bottom-0 right-12 w-6 bg-amber-950/80 border-x border-amber-800/50 shadow-md flex items-center justify-center">
          <div className="w-1 h-full bg-amber-600/30" />
        </div>

        {/* Main Embossed Content */}
        <div className="h-full flex flex-col justify-between pl-6 sm:pl-8 pr-12 relative z-10 text-stone-200">
          
          {/* Top Stamp */}
          <div className="flex items-center justify-between border-b border-amber-800/40 pb-4">
            <div className="flex items-center gap-2">
              <Feather className="w-5 h-5 text-amber-400" />
              <span className="font-heading text-sm text-amber-300 tracking-widest uppercase font-bold">
                VOL. 2026 • OFFICIAL LOG
              </span>
            </div>
            <span className="font-handwritten text-xs text-stone-400">
              MOLESKINE SPEC
            </span>
          </div>

          {/* Center Golden Title */}
          <div className="my-auto text-center space-y-4">
            <div className="inline-block p-3 rounded-full bg-amber-500/10 border border-amber-500/30 mb-2">
              <BookOpen className="w-10 h-10 text-amber-400 animate-pulse" />
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-wide gold-emboss">
              ARPIT BAJPAI
            </h1>

            <p className="font-handwritten text-xl sm:text-2xl text-amber-200/90 leading-snug">
              Engineering Notebook & Full Stack Portfolio
            </p>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-4" />

            <p className="font-handwritten text-sm text-stone-400 italic">
              "React • Next.js 16 • Node.js • PostgreSQL • Mobile Dev"
            </p>
          </div>

          {/* Interactive Open Button */}
          <div className="pt-6 border-t border-amber-800/40 text-center">
            <button
              onClick={handleOpen}
              disabled={isOpening}
              className="w-full py-4 px-6 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-heading font-bold text-xl rounded-xl shadow-xl transition-all transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3 group border border-amber-300/60"
            >
              <span>{isOpening ? "Opening Notebook..." : "CLICK TO OPEN NOTEBOOK"}</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="font-handwritten text-xs text-stone-500 mt-2">
              Click anywhere on the cover to flip to page 1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
