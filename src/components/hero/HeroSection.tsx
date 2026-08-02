"use client";

import React, { useState, useEffect } from "react";
import {
  Coffee,
  PenTool,
  Download,
  Pin,
  CheckCircle2,
} from "lucide-react";
import { RESUME_DATA } from "@/lib/resumeData";
import { usePen } from "@/context/PenContext";

interface HeroProps {
  coffeeSteamActive: boolean;
  onToggleCoffee: () => void;
  pencilSharpening: boolean;
  onSharpenPencil: () => void;
}

export default function HeroSection({
  coffeeSteamActive,
  onToggleCoffee,
  pencilSharpening,
  onSharpenPencil,
}: HeroProps) {
  const { penColor } = usePen();
  const [textIndex, setTextIndex] = useState(0);
  const fullText = RESUME_DATA.personal.headline;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  return (
    <section id="hero" className="w-full h-full">
      {/* Main Equal-Sized Notebook Sheet */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#1A1A1E] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-50 flex flex-col justify-between overflow-hidden">
        
        {/* Top Paper Tape - Uncropped */}
        <div className="absolute top-2 left-6 sm:left-10 w-32 h-6 sm:h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[-2deg] shadow-xs flex items-center justify-center font-handwritten text-[11px] sm:text-xs text-amber-950 dark:text-amber-100 font-bold z-10">
          Page #01 — Intro Log
        </div>
        
        <div className="absolute top-0 right-0 w-10 h-10 bg-stone-200 dark:bg-stone-800 pointer-events-none rounded-bl-lg border-b border-l border-stone-300 dark:border-stone-700" />

        {/* Sticky Note Top Right */}
        <div className="absolute top-2 right-4 sm:right-6 w-36 sm:w-44 p-2 bg-[#FEF9C3] dark:bg-amber-950 border border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-100 rotate-3 sticky-shadow font-handwritten text-[11px] rounded-sm hidden sm:block">
          <div className="flex items-center gap-1 font-bold text-amber-900 dark:text-amber-300 text-[10px] mb-0.5">
            <Pin className="w-3 h-3" /> QUICK MEMO
          </div>
          <p className="leading-tight font-bold">
            Open for Full-Stack & Engineering Roles
          </p>
        </div>

        {/* Top Content Area - Padded from top for uncropped tape */}
        <div className="pt-5 sm:pt-2">
          {/* Stamped Date */}
          <div className="inline-block px-2 py-0.5 mb-3 border-2 border-red-600/70 dark:border-red-500/80 text-red-600 dark:text-red-400 font-heading text-[10px] sm:text-xs tracking-widest uppercase rounded rotate-[-2deg] font-bold">
            CONFIDENTIAL • ARPIT'S NOTEBOOK • 2026
          </div>

          {/* Main Handwritten Title */}
          <div className="min-h-[90px] sm:min-h-[120px] mb-3">
            <h1 className="font-heading text-xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-stone-50 font-bold leading-snug">
              {displayedText}
              <span
                className="inline-block w-1.5 h-5 sm:h-9 ml-1 animate-pulse align-middle"
                style={{ backgroundColor: penColor }}
              />
            </h1>
          </div>

          {/* Handwritten Bio Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-stone-300/80 dark:border-stone-800 font-handwritten text-xs sm:text-lg text-stone-800 dark:text-stone-200 font-bold">
            <div className="space-y-1.5">
              <p className="flex items-start gap-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold">➢</span>
                <span className="text-stone-900 dark:text-stone-100">Crafting web apps with <strong className="text-stone-900 dark:text-stone-50 font-heading underline">React.js, Next.js 16, Node.js & PostgreSQL</strong>.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold">➢</span>
                <span className="text-stone-900 dark:text-stone-100">Based in <strong className="text-stone-900 dark:text-stone-50">Kanpur, India</strong> with a passion for REST APIs and smooth UI/UX.</span>
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-900 dark:text-stone-100">Mobile development experience in <strong className="text-stone-900 dark:text-stone-50">Flutter & Dart</strong>.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-900 dark:text-stone-100">Leadership experience as <strong className="text-stone-900 dark:text-stone-50 font-heading">Founder @ Catalyst Crew</strong> & Tech Head @ Logix Club.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Tools Row */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-stone-300 dark:border-stone-800 shrink-0">
          {/* Interactive Coffee Mug */}
          <div
            onClick={onToggleCoffee}
            className="cursor-pointer group flex items-center gap-1.5 bg-white dark:bg-[#242429] px-2.5 py-1 rounded-full border border-stone-300 dark:border-stone-700 hover:border-amber-500 transition-all shadow-xs"
          >
            <div className="relative">
              <Coffee className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400 group-hover:scale-110 transition-transform" />
              {coffeeSteamActive && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <span className="w-0.5 h-1.5 bg-amber-400/80 rounded-full animate-bounce delay-75" />
                  <span className="w-0.5 h-2 bg-amber-400/80 rounded-full animate-bounce delay-150" />
                  <span className="w-0.5 h-1 bg-amber-400/80 rounded-full animate-bounce delay-300" />
                </div>
              )}
            </div>
            <span className="font-handwritten text-[11px] sm:text-xs text-stone-900 dark:text-stone-100 font-bold">
              {coffeeSteamActive ? "Coffee Hot" : "Click Coffee"}
            </span>
          </div>

          {/* Clickable Sharpen Pencil */}
          <div
            onClick={onSharpenPencil}
            className="cursor-pointer group flex items-center gap-1.5 bg-white dark:bg-[#242429] px-2.5 py-1 rounded-full border border-stone-300 dark:border-stone-700 hover:border-blue-500 transition-all shadow-xs"
          >
            <PenTool className={`w-3.5 h-3.5 text-blue-600 dark:text-blue-400 transition-transform ${pencilSharpening ? "rotate-[360deg] scale-125 duration-500" : ""}`} />
            <span className="font-handwritten text-[11px] sm:text-xs text-stone-900 dark:text-stone-100 font-bold">
              {pencilSharpening ? "Sharpening..." : "Sharpen Pen"}
            </span>
          </div>

          {/* Quick Resume Download */}
          <a
            href="/Arpit_Bajpai_Resume_ATS.pdf"
            download
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-handwritten px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Resume PDF</span>
            <Download className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
