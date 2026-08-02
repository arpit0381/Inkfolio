"use client";

import React from "react";
import { usePen } from "@/context/PenContext";
import { BookOpen, RotateCcw, Feather, CheckCircle2, HeartHandshake } from "lucide-react";
import { RESUME_DATA } from "@/lib/resumeData";

export default function NotebookBackCover() {
  const { setCurrentPage } = usePen();

  return (
    <div
      onClick={() => setCurrentPage(0)}
      className="w-full h-full cursor-pointer select-none"
    >
      {/* 3D Leather Cover Book Card - 100% Equal Size Container */}
      <div
        className="w-full h-full relative rounded-l-xl sm:rounded-l-2xl rounded-r-md notebook-cover-bg p-4 sm:p-10 shadow-2xl border-y-4 border-l-6 sm:border-l-8 border-stone-900 flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.005]"
        style={{
          boxShadow:
            "15px 15px 40px rgba(0,0,0,0.85), 0 0 80px rgba(212, 175, 55, 0.2)",
        }}
      >
        {/* Leather Spine Right Hinge Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-10 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border-l-2 border-amber-900/50 flex flex-col justify-between py-6 sm:py-8 items-center">
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-600/80 border border-amber-800 shadow-inner" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-600/80 border border-amber-800 shadow-inner" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-600/80 border border-amber-800 shadow-inner" />
        </div>

        {/* Golden Metal Corners */}
        <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-t-3 border-l-3 sm:border-t-4 sm:border-l-4 border-amber-500/80 rounded-tl-xl" />
        <div className="absolute bottom-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-b-3 border-l-3 sm:border-b-4 sm:border-l-4 border-amber-500/80 rounded-bl-xl" />

        {/* Elastic Strap Bookmark */}
        <div className="absolute top-0 bottom-0 left-5 sm:left-12 w-4 sm:w-5 bg-amber-950/90 border-x border-amber-800/60 shadow-md flex items-center justify-center">
          <div className="w-0.5 sm:w-1 h-full bg-amber-500/30" />
        </div>

        {/* Main Back Cover Content */}
        <div className="h-full flex flex-col justify-between pr-4 sm:pr-10 pl-6 sm:pl-14 relative z-10 text-stone-200">
          
          {/* Top Back Stamp */}
          <div className="flex items-center justify-between border-b border-amber-800/40 pb-2 sm:pb-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Feather className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span className="font-heading text-[10px] sm:text-xs text-amber-300 tracking-wider uppercase font-bold">
                END OF NOTEBOOK • VOL. 2026
              </span>
            </div>
            <span className="font-handwritten text-[10px] text-amber-400/90 font-bold hidden sm:inline">
              MOLESKINE GENUINE BACK
            </span>
          </div>

          {/* Center Golden Seal */}
          <div className="my-auto text-center space-y-2 sm:space-y-3 py-2">
            <div className="inline-block p-2.5 sm:p-3 rounded-full bg-amber-500/10 border-2 border-amber-500/30 mb-0.5 shadow-xl">
              <BookOpen className="w-7 h-7 sm:w-10 sm:h-10 text-amber-400" />
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-wide gold-emboss">
              ARPIT BAJPAI
            </h2>

            <p className="font-handwritten text-xs sm:text-base text-amber-200/90 leading-snug font-bold">
              Full Stack Web Developer & Problem Solver
            </p>

            <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-1.5" />

            {/* Quick Contact Badge */}
            <div className="p-2 sm:p-3 bg-stone-900/80 border border-amber-800/60 rounded-lg max-w-sm mx-auto text-[11px] sm:text-xs font-handwritten text-amber-100 font-bold space-y-1">
              <p className="flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open for Hire & Technical Roles</span>
              </p>
              <p className="text-stone-400">
                {RESUME_DATA.personal.email} • {RESUME_DATA.personal.location}
              </p>
            </div>
          </div>

          {/* Barcode & Re-Open Button */}
          <div className="pt-2 sm:pt-3 border-t border-amber-800/40 text-center space-y-2">
            {/* Barcode graphic */}
            <div className="flex items-center justify-center gap-1 font-mono text-[9px] text-stone-400 tracking-widest">
              <span>||||| ||| ||||||| |||| |||||| ||| |||||</span>
            </div>
            <p className="font-mono text-[9px] text-amber-400/80 font-bold">
              ISBN 978-0-ARPIT-2026 • INKFOLIO NOTEBOOK EDITION
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage(0);
              }}
              className="w-full py-2 sm:py-2.5 px-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-heading font-bold text-xs sm:text-sm rounded-lg shadow-xl transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 border border-amber-300/60"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-950" />
              <span>FLIP BACK TO FRONT COVER (PAGE 0)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
