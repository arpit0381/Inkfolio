"use client";

import React from "react";
import Image from "next/image";
import { RESUME_DATA } from "@/lib/resumeData";
import { User, MapPin, GraduationCap, Award, Compass, HeartHandshake, Sparkles } from "lucide-react";

export default function AboutSection() {
  const summary = RESUME_DATA.personal.summary;

  return (
    <section id="about" className="w-full h-full">
      {/* Diary Page Container - 100% Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-7 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
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
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
                About Arpit & Background
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-[11px] sm:text-xs">
                Personal narrative, philosophy & core values
              </p>
            </div>
          </div>
        </div>

        {/* Content Layout - Mobile Scrollable Area */}
        <div className="overflow-y-auto max-h-[360px] sm:max-h-none my-auto pr-1 custom-scrollbar py-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            
            {/* Left Column: Authentic Polaroid Photo Card */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="bg-white dark:bg-[#222226] p-3 pb-2.5 border-2 border-stone-300 dark:border-stone-700/80 shadow-lg rotate-[-2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 w-full max-w-[230px] sm:max-w-[260px] rounded relative group">
                
                {/* Washi Tape at Top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-200/90 dark:bg-amber-800/80 border border-amber-300/80 dark:border-amber-700/70 rotate-[2deg] shadow-xs z-20 pointer-events-none" />

                {/* Photo Container */}
                <div className="relative w-full aspect-square overflow-hidden rounded border border-stone-200 dark:border-stone-800 bg-stone-900 shadow-inner">
                  <Image
                    src="/profile.jpg"
                    alt="Arpit Bajpai - Full Stack Developer"
                    fill
                    sizes="(max-width: 768px) 260px, 260px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle Cyber Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-stone-900/80 backdrop-blur-xs px-1.5 py-0.5 rounded border border-cyan-500/30">
                    <Sparkles className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
                    <span>SYSTEM HACK v2.0</span>
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="pt-2 text-center">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight">
                    Arpit Bajpai
                  </h3>
                  <p className="font-handwritten text-xs text-blue-600 dark:text-blue-400 font-bold -mt-0.5">
                    Full Stack Developer & Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Story & Highlights */}
            <div className="md:col-span-7 space-y-3 font-handwritten text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">
              <p className="leading-relaxed text-xs sm:text-sm bg-stone-50/50 dark:bg-stone-900/30 p-3 rounded-lg border border-stone-200/60 dark:border-stone-800">
                {summary}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs font-bold">
                <div className="p-2 bg-white dark:bg-[#202024] rounded-md border border-stone-200 dark:border-stone-700/80 flex items-center gap-2 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>Kanpur, UP, India</span>
                </div>
                <div className="p-2 bg-white dark:bg-[#202024] rounded-md border border-stone-200 dark:border-stone-700/80 flex items-center gap-2 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>BCA @ PSIT Kanpur</span>
                </div>
                <div className="p-2 bg-white dark:bg-[#202024] rounded-md border border-stone-200 dark:border-stone-700/80 flex items-center gap-2 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Founder @ Catalyst</span>
                </div>
                <div className="p-2 bg-white dark:bg-[#202024] rounded-md border border-stone-200 dark:border-stone-700/80 flex items-center gap-2 shadow-2xs">
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
