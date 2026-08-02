"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  Coffee,
  Sparkles,
  PenTool,
  Download,
  Pin,
  CheckCircle2,
  ChevronRight,
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
  const { penColor, isNotebookOpened } = usePen();
  const [textIndex, setTextIndex] = useState(0);
  const fullText = RESUME_DATA.personal.headline;
  const [displayedText, setDisplayedText] = useState("");

  // ONLY start live typewriter handwriting after notebook cover is opened by user
  useEffect(() => {
    if (!isNotebookOpened) return;

    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, isNotebookOpened, fullText]);

  return (
    <section
      id="hero"
      className="py-2 sm:py-4 flex flex-col justify-center items-center relative px-2 sm:px-4 overflow-hidden"
    >
      {/* Notebook Sheet Perspective */}
      <div
        className={`w-full max-w-4xl mx-auto transition-all duration-1000 transform ${
          isNotebookOpened
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-6 scale-95 opacity-0"
        }`}
      >
        {/* Main Notebook Sheet */}
        <div className="relative bg-[#FFFDF8] dark:bg-[#1A1A1E] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-50">
          
          {/* Top Paper Tape - Clearly separated from header bar */}
          <div className="absolute -top-3.5 left-12 w-32 h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[-2deg] shadow-sm flex items-center justify-center font-handwritten text-xs text-amber-950 dark:text-amber-100 font-bold">
            Page #01 — Intro Log
          </div>
          
          <div className="absolute top-0 right-0 w-12 h-12 bg-stone-200 dark:bg-stone-800 pointer-events-none rounded-bl-lg border-b border-l border-stone-300 dark:border-stone-700" />

          {/* Sticky Note Top Right */}
          <div className="absolute -top-6 -right-3 sm:right-8 w-40 sm:w-48 p-3 bg-[#FEF9C3] dark:bg-amber-950 border border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-100 rotate-3 sticky-shadow font-handwritten text-sm rounded-sm hidden sm:block wiggle-hover">
            <div className="flex items-center gap-1 font-bold text-amber-900 dark:text-amber-300 text-xs mb-1">
              <Pin className="w-3.5 h-3.5" /> QUICK MEMO
            </div>
            <p className="leading-tight text-xs font-bold">
              Status: Open for Full-Stack & Engineering Roles
            </p>
          </div>

          {/* Stamped Date */}
          <div className="inline-block px-3 py-1 mb-6 border-2 border-red-600/70 dark:border-red-500/80 text-red-600 dark:text-red-400 font-heading text-xs tracking-widest uppercase rounded rotate-[-3deg] font-bold">
            CONFIDENTIAL • ARPIT'S NOTEBOOK • 2026
          </div>

          {/* Main Handwritten Title */}
          <div className="min-h-[140px] sm:min-h-[160px] mb-8">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
              {displayedText}
              <span
                className="inline-block w-1.5 h-8 sm:h-12 ml-1 animate-pulse align-middle"
                style={{ backgroundColor: penColor }}
              />
            </h1>
          </div>

          {/* Handwritten Bio Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-300/80 dark:border-stone-800 font-handwritten text-lg sm:text-xl text-stone-800 dark:text-stone-200 font-bold">
            <div className="space-y-3">
              <p className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">➢</span>
                <span className="text-stone-900 dark:text-stone-100">Crafting web apps with <strong className="text-stone-900 dark:text-stone-50 font-heading underline">React.js, Next.js 16, Node.js & PostgreSQL</strong>.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">➢</span>
                <span className="text-stone-900 dark:text-stone-100">Based in <strong className="text-stone-900 dark:text-stone-50">Kanpur, India</strong> with a passion for REST APIs and smooth UI/UX.</span>
              </p>
            </div>

            <div className="space-y-3">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-900 dark:text-stone-100">Mobile development experience in <strong className="text-stone-900 dark:text-stone-50">Flutter & Dart</strong>.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-900 dark:text-stone-100">Leadership experience as <strong className="text-stone-900 dark:text-stone-50 font-heading">Founder @ Catalyst Crew</strong> & Tech Head @ Logix Club.</span>
              </p>
            </div>
          </div>

          {/* Interactive Tools Row */}
          <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-stone-300 dark:border-stone-800">
            {/* Interactive Coffee Mug */}
            <div
              onClick={onToggleCoffee}
              className="cursor-pointer group flex items-center gap-3 bg-white dark:bg-[#242429] px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 hover:border-amber-500 transition-all shadow-xs"
            >
              <div className="relative">
                <Coffee className="w-5 h-5 text-amber-800 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                {coffeeSteamActive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-0.5">
                    <span className="w-0.5 h-2.5 bg-amber-400/80 rounded-full animate-bounce delay-75" />
                    <span className="w-0.5 h-3.5 bg-amber-400/80 rounded-full animate-bounce delay-150" />
                    <span className="w-0.5 h-2 bg-amber-400/80 rounded-full animate-bounce delay-300" />
                  </div>
                )}
              </div>
              <span className="font-handwritten text-sm text-stone-900 dark:text-stone-100 font-bold">
                {coffeeSteamActive ? "Coffee Hot (Click to sip)" : "Click Coffee Mug"}
              </span>
            </div>

            {/* Clickable Sharpen Pencil */}
            <div
              onClick={onSharpenPencil}
              className="cursor-pointer group flex items-center gap-2 bg-white dark:bg-[#242429] px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 hover:border-blue-500 transition-all shadow-xs"
            >
              <PenTool className={`w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform ${pencilSharpening ? "rotate-[360deg] scale-125 duration-500" : ""}`} />
              <span className="font-handwritten text-sm text-stone-900 dark:text-stone-100 font-bold">
                {pencilSharpening ? "Sharpening Pen..." : "Sharpen Pen"}
              </span>
            </div>

            {/* Quick Resume Download */}
            <a
              href="/Arpit_Bajpai_Resume_ATS.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-handwritten px-5 py-2 rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Download Resume PDF</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Vector Arrow Scroll Indicator */}
      <div className="mt-12 text-center flex flex-col items-center gap-2 animate-bounce">
        <span className="font-heading text-xl text-stone-800 dark:text-stone-200 font-bold">
          Keep Scrolling
        </span>
        <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
    </section>
  );
}
