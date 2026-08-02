"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { User, MapPin, GraduationCap, Award, Compass, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  const summary = RESUME_DATA.personal.summary;

  return (
    <section id="about" className="w-full h-full">
      {/* Diary Page Container - Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-5 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between">
        
        {/* Top Paper Tape */}
        <div className="absolute -top-3.5 left-10 w-32 h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[1deg] shadow-sm flex items-center justify-center font-handwritten text-xs text-amber-950 dark:text-amber-100 font-bold">
          Page #02 — About Me
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-lg border border-amber-500/40">
              <User className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                About Arpit & Background
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-xs">
                Personal narrative, philosophy & core values
              </p>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start my-auto">
          {/* Left Column: Polaroid Style Card */}
          <div className="md:col-span-4 flex justify-center">
            <div className="bg-white dark:bg-[#202024] p-3 border-2 border-stone-300 dark:border-stone-700 shadow-md rotate-[-2deg] hover:rotate-0 transition-transform duration-300 w-full max-w-xs rounded-xs text-center">
              <div className="w-full aspect-[4/3] bg-stone-800 dark:bg-stone-950 rounded-xs mb-3 flex flex-col items-center justify-center text-amber-400 p-4 border border-stone-700">
                <span className="font-heading text-xl font-bold tracking-wide">
                  ARPIT BAJPAI
                </span>
                <span className="font-handwritten text-xs text-stone-300 font-bold">
                  Full Stack Developer
                </span>
                <span className="font-handwritten text-[11px] text-amber-300/80 mt-1">
                  Kanpur, Uttar Pradesh
                </span>
              </div>
              <p className="font-handwritten text-stone-800 dark:text-stone-200 text-xs font-bold leading-tight">
                "Driven by curiosity & clean code"
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Story & Highlights */}
          <div className="md:col-span-8 space-y-3 font-handwritten text-base text-stone-800 dark:text-stone-200 font-medium">
            <p className="leading-relaxed text-sm sm:text-base">
              {summary}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-300/70 dark:border-stone-800 text-xs font-bold">
              <div className="p-2 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Kanpur, UP, India</span>
              </div>
              <div className="p-2 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                <span>BCA @ PSIT Kanpur</span>
              </div>
              <div className="p-2 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Founder @ Catalyst</span>
              </div>
              <div className="p-2 bg-stone-100 dark:bg-[#242429] rounded border border-stone-200 dark:border-stone-700 flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Full-Stack & Mobile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Ribbon */}
        <div className="pt-3 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between text-xs font-handwritten text-stone-500 dark:text-stone-400 font-bold">
          <span>LOGGED IN NOTEBOOK VOL. 2026</span>
          <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
            <HeartHandshake className="w-3.5 h-3.5" /> Ready for collaboration
          </span>
        </div>
      </div>
    </section>
  );
}
