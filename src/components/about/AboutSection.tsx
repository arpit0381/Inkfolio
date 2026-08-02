"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Calendar, MapPin, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-2 sm:py-4 px-2 sm:px-4 relative max-w-6xl mx-auto">
      {/* Diary Page Container */}
      <div className="bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100">
        
        {/* Paper Bookmark Ribbon Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-red-600/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xl border border-red-500/30">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 font-bold">
                Page #02 — About Me
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Engineering story, roots & development approach
              </p>
            </div>
          </div>
          
          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>ENTRY: KANPUR, INDIA</p>
            <p>LOGGED BY: ARPIT BAJPAI</p>
          </div>
        </div>

        {/* Content Layout: Polaroid Photo + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Polaroid Style Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative bg-white dark:bg-[#202024] p-4 pb-6 rounded shadow-xl border border-stone-200 dark:border-stone-700 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 max-w-sm w-full">
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200 dark:bg-amber-900/80 border border-yellow-300 dark:border-amber-700 rotate-1 shadow-sm flex items-center justify-center font-handwritten text-[10px] text-amber-950 dark:text-amber-100 font-bold">
                Washi Tape #09
              </div>

              {/* Photo Area */}
              <div className="w-full h-64 bg-[#FDFBF7] dark:bg-[#161618] rounded border border-stone-200 dark:border-stone-700 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                <div className="w-24 h-24 rounded-full bg-blue-600 text-white font-heading text-4xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-105 transition-transform">
                  AB
                </div>
                <span className="font-heading text-xl text-stone-900 dark:text-stone-100 font-bold">
                  Arpit Bajpai
                </span>
                <span className="font-handwritten text-sm text-stone-600 dark:text-stone-300 font-bold">
                  Full Stack Web & Mobile Dev
                </span>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-handwritten text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-700 font-bold">
                  <MapPin className="w-3.5 h-3.5" /> Kanpur, UP, India
                </div>
              </div>

              {/* Polaroid Handwritten Caption */}
              <p className="mt-3 font-handwritten text-center text-stone-800 dark:text-stone-200 text-base italic font-bold">
                "Turning ideas into clean code & user-first web apps."
              </p>
            </div>
          </div>

          {/* Right Column: Handwritten Narrative */}
          <div className="lg:col-span-7 space-y-4 font-handwritten text-lg sm:text-xl leading-relaxed text-stone-900 dark:text-stone-100">
            <div className="p-5 bg-amber-50/90 dark:bg-[#202024] rounded-lg border border-amber-200 dark:border-stone-700 relative shadow-xs">
              <span className="absolute -top-3 left-4 bg-amber-200 dark:bg-amber-950 text-amber-950 dark:text-amber-200 px-2.5 py-0.5 font-heading text-xs font-bold rounded border border-amber-300 dark:border-amber-700">
                PERSONAL STORY
              </span>
              <p className="mt-1 text-stone-900 dark:text-stone-100 font-medium">
                {RESUME_DATA.personal.summary}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-heading text-2xl text-stone-900 dark:text-stone-50 font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Core Engineering Pillars</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                <li className="flex items-center gap-2 bg-white dark:bg-[#202024] p-3 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-medium">Full Stack Architecture (React, Next.js, Node)</span>
                </li>
                <li className="flex items-center gap-2 bg-white dark:bg-[#202024] p-3 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-medium">Relational & NoSQL (PostgreSQL, MongoDB)</span>
                </li>
                <li className="flex items-center gap-2 bg-white dark:bg-[#202024] p-3 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-medium">Cross-Platform Apps (Flutter & Dart)</span>
                </li>
                <li className="flex items-center gap-2 bg-white dark:bg-[#202024] p-3 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-medium">Team Leadership & Strategic Growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Below: Hand-Drawn Timeline */}
        <div className="pt-6 border-t-2 border-stone-300 dark:border-stone-800">
          <h3 className="font-heading text-2xl text-stone-900 dark:text-stone-50 font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-red-600 dark:text-red-400" />
            <span>Handwritten Journey Timeline</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-[#202024] rounded-lg border border-stone-200 dark:border-stone-700 relative group hover:border-blue-500 transition-colors shadow-xs">
              <span className="font-heading font-bold text-red-600 dark:text-red-400 text-lg">
                2024 – 2027
              </span>
              <h4 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">
                BCA @ PSIT
              </h4>
              <p className="font-handwritten text-sm text-stone-700 dark:text-stone-300">
                Pursuing BCA at Pranveer Singh Institute of Technology, Kanpur.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-[#202024] rounded-lg border border-stone-200 dark:border-stone-700 relative group hover:border-blue-500 transition-colors shadow-xs">
              <span className="font-heading font-bold text-blue-600 dark:text-blue-400 text-lg">
                Jan 2024 – Jan 2025
              </span>
              <h4 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">
                Sales Captain @ Posterwa
              </h4>
              <p className="font-handwritten text-sm text-stone-700 dark:text-stone-300">
                Exceeded sales targets by 200% across regional events in 2 months.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-[#202024] rounded-lg border border-stone-200 dark:border-stone-700 relative group hover:border-blue-500 transition-colors shadow-xs">
              <span className="font-heading font-bold text-amber-600 dark:text-amber-400 text-lg">
                July 2024 – Present
              </span>
              <h4 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">
                Website Developer @ Sulax Solar
              </h4>
              <p className="font-handwritten text-sm text-stone-700 dark:text-stone-300">
                Building full-stack Next.js solar web platform & lead engines.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-[#202024] rounded-lg border border-stone-200 dark:border-stone-700 relative group hover:border-blue-500 transition-colors shadow-xs">
              <span className="font-heading font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                Leadership Roles
              </span>
              <h4 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">
                Founder @ Catalyst Crew
              </h4>
              <p className="font-handwritten text-sm text-stone-700 dark:text-stone-300">
                Leading student tech teams, Logix Club & Ignitia website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
