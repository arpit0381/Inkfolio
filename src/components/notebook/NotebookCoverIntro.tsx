"use client";

import React from "react";
import { usePen } from "@/context/PenContext";
import { BookOpen, Feather, ChevronRight, PenTool } from "lucide-react";

export default function NotebookCoverIntro() {
  const { nextPage } = usePen();

  return (
    <div
      onClick={nextPage}
      className="w-full max-w-5xl mx-auto cursor-pointer select-none py-2 sm:py-4"
    >
      {/* 3D Leather Cover Book Card */}
      <div
        className="w-full relative rounded-r-2xl rounded-l-md notebook-cover-bg p-6 sm:p-12 shadow-2xl border-y-4 border-r-8 border-stone-900 transition-all duration-300 transform hover:scale-[1.01]"
        style={{
          boxShadow:
            "-20px 20px 50px rgba(0,0,0,0.85), 0 0 100px rgba(212, 175, 55, 0.2)",
        }}
      >
        {/* Attached Fountain Pen on Right Side Loop */}
        <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-30 transform rotate-6 scale-75 sm:scale-100 drop-shadow-2xl hover:scale-105 transition-transform duration-300">
          <svg width="46" height="260" viewBox="0 0 40 220" fill="none">
            {/* Pen Loop Strap */}
            <rect x="0" y="80" width="14" height="40" rx="3" fill="#3A281C" stroke="#78350F" strokeWidth="1" />
            {/* Pen Body - Metallic Gold & Obsidian */}
            <rect x="10" y="10" width="18" height="180" rx="9" fill="url(#penGoldGradCover)" stroke="#B45309" strokeWidth="1.5" />
            {/* Metallic Clip */}
            <rect x="16" y="25" width="4" height="60" rx="2" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
            {/* Fountain Pen Gold Nib */}
            <path d="M10 190 L19 215 L28 190 Z" fill="url(#nibGoldGradCover)" stroke="#B45309" strokeWidth="1.5" />
            <line x1="19" y1="190" x2="19" y2="208" stroke="#1E293B" strokeWidth="1.5" />
            <circle cx="19" cy="200" r="1.5" fill="#1E293B" />
            {/* Gradients */}
            <defs>
              <linearGradient id="penGoldGradCover" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#78350F" />
                <stop offset="35%" stopColor="#F59E0B" />
                <stop offset="70%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="nibGoldGradCover" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="50%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Leather Spine Left Hinge Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border-r-2 border-amber-900/50 flex flex-col justify-between py-8 sm:py-12 items-center">
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-600/80 border border-amber-800 shadow-inner" />
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-600/80 border border-amber-800 shadow-inner" />
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-600/80 border border-amber-800 shadow-inner" />
        </div>

        {/* Golden Metal Corners */}
        <div className="absolute top-0 right-0 w-10 sm:w-14 h-10 sm:h-14 border-t-4 border-r-4 border-amber-500/80 rounded-tr-xl" />
        <div className="absolute bottom-0 right-0 w-10 sm:w-14 h-10 sm:h-14 border-b-4 border-r-4 border-amber-500/80 rounded-br-xl" />

        {/* Elastic Strap Bookmark */}
        <div className="absolute top-0 bottom-0 right-8 sm:right-14 w-5 sm:w-7 bg-amber-950/90 border-x border-amber-800/60 shadow-md flex items-center justify-center">
          <div className="w-1 h-full bg-amber-500/30" />
        </div>

        {/* Main Embossed Cover Content */}
        <div className="flex flex-col justify-between pl-6 sm:pl-12 pr-10 sm:pr-16 relative z-10 text-stone-200 min-h-[380px] sm:min-h-[460px]">
          
          {/* Top Stamp */}
          <div className="flex items-center justify-between border-b border-amber-800/40 pb-3">
            <div className="flex items-center gap-2">
              <Feather className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="font-heading text-xs sm:text-base text-amber-300 tracking-widest uppercase font-bold">
                VOL. 2026 • OFFICIAL ENGINEERING LOG
              </span>
            </div>
            <span className="font-handwritten text-xs text-stone-400 font-bold hidden sm:inline">
              MOLESKINE SPEC
            </span>
          </div>

          {/* Center Golden Title */}
          <div className="my-auto text-center space-y-3 sm:space-y-4 py-4">
            <div className="inline-block p-3 rounded-full bg-amber-500/10 border border-amber-500/30 mb-1 shadow-lg">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 animate-pulse" />
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide gold-emboss">
              ARPIT BAJPAI
            </h1>

            <p className="font-handwritten text-xl sm:text-3xl text-amber-200/90 leading-snug font-bold">
              Engineering Notebook & Full Stack Portfolio
            </p>

            <div className="w-28 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-3" />

            <p className="font-handwritten text-sm sm:text-base text-stone-400 italic font-bold">
              "React • Next.js 16 • Node.js • PostgreSQL • Mobile Dev"
            </p>
          </div>

          {/* Interactive Open Button */}
          <div className="pt-4 border-t border-amber-800/40 text-center">
            <button
              type="button"
              className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-heading font-bold text-xl sm:text-2xl rounded-xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group border border-amber-300/60"
            >
              <PenTool className="w-6 h-6 text-stone-950" />
              <span>CLICK TO OPEN NOTEBOOK (PAGE 1)</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="font-handwritten text-xs text-stone-400 mt-2 font-bold">
              Click anywhere on the cover to flip open Page #01
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
