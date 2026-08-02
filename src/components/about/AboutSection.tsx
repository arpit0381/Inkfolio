"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { User, MapPin, GraduationCap, Award, Compass, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  const summary = RESUME_DATA.personal.summary;

  return (
    <section id="about" className="w-full h-full">
      {/* Diary Page Container - 100% Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
        {/* Top Paper Tape - Uncropped Positioning */}
        <div className="absolute top-2 left-6 sm:left-10 w-32 sm:w-36 h-6 sm:h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[1deg] shadow-xs flex items-center justify-center font-handwritten text-[11px] sm:text-xs text-amber-950 dark:text-amber-100 font-bold z-10">
          Page #02 — About Me
        </div>

        {/* Header - Padded from top to give space for tape */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-2.5 pt-5 sm:pt-2 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-base sm:text-lg border border-amber-500/40 shrink-0">
              <User className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-heading text-xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                About Arpit & Background
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-[11px] sm:text-xs">
                Personal narrative, philosophy & core values
              </p>
            </div>
          </div>
        </div>

        {/* Content Layout - Mobile Scrollable Area */}
        <div className="overflow-y-auto max-h-[350px] sm:max-h-none my-auto pr-1 custom-scrollbar py-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Left Column: Polaroid Style Card */}
            <div className="md:col-span-4 flex justify-center">
              <div className="bg-white dark:bg-[#202024] p-2.5 border-2 border-stone-300 dark:border-stone-700 shadow-md rotate-[-2deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[220px] sm:max-w-xs rounded-xs text-center">
                <div className="w-full aspect-[4/3] bg-stone-800 dark:bg-stone-950 rounded-xs mb-2 flex flex-col items-center justify-center text-amber-400 p-2.5 border border-stone-700">
                  <span className="font-heading text-base sm:text-xl font-bold tracking-wide">
                    ARPIT BAJPAI
                  </span>
                  <span className="font-handwritten text-[11px] text-stone-300 font-bold">
                    Full Stack Developer
                  </span>
                  <span className="font-handwritten text-[10px] text-amber-300/80 mt-0.5">
                    Kanpur, Uttar Pradesh
                  </span>
                </div>
                <p className="font-handwritten text-stone-800 dark:text-stone-200 text-[11px] sm:text-xs font-bold leading-tight">
                  "Driven by curiosity & clean code"
                </p>
              </div>
            </div>

            {/* Right Column: Narrative Story & Highlights */}
            <div className="md:col-span-8 space-y-2.5 font-handwritten text-xs sm:text-base text-stone-800 dark:text-stone-200 font-medium">
              <p className="leading-relaxed text-xs sm:text-sm">
                {summary}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-stone-300/70 dark:border-stone-800 text-[10px] sm:text-xs font-bold">
                <div className="p-1.5 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>Kanpur, UP, India</span>
                </div>
                <div className="p-1.5 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>BCA @ PSIT Kanpur</span>
                </div>
                <div className="p-1.5 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Founder @ Catalyst</span>
                </div>
                <div className="p-1.5 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Full-Stack & Mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Ribbon */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between text-[11px] sm:text-xs font-handwritten text-stone-500 dark:text-stone-400 font-bold shrink-0">
          <span>LOGGED IN NOTEBOOK VOL. 2026</span>
          <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
            <HeartHandshake className="w-3.5 h-3.5" /> Ready for collaboration
          </span>
        </div>
      </div>
    </section>
  );
}
