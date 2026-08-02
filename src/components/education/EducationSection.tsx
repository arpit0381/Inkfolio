"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const edu = RESUME_DATA.education;

  return (
    <section id="education" className="w-full h-full">
      {/* Report Card Container - 100% Fixed Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-7 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
        {/* Header with Integrated Uncropped Page Tape */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-2.5 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base sm:text-lg border border-blue-500/30 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </span>
            <div>
              <div className="inline-block px-2 py-0.5 mb-0.5 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 font-handwritten text-[11px] sm:text-xs text-amber-950 dark:text-amber-100 font-bold rounded shadow-xs rotate-[-1deg]">
                Page #07 — Academic Log
              </div>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
                Academic Background
              </h2>
            </div>
          </div>
        </div>

        {/* Degree Report Card Box - Fit to Page */}
        <div className="my-auto bg-white dark:bg-[#202024] p-4 sm:p-5 rounded-lg border-2 border-stone-300 dark:border-stone-700 shadow-xs font-handwritten relative max-w-2xl mx-auto w-full">
          {/* Stamped Seal */}
          <div className="absolute top-3 right-3 w-14 h-14 rounded-full border-2 border-dashed border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 flex flex-col items-center justify-center rotate-[-12deg] font-heading font-bold text-[9px] leading-tight text-center">
            <span>VERIFIED</span>
            <span className="text-[7px]">GRADUATE</span>
          </div>

          <div className="mb-3">
            <span className="text-[11px] sm:text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-bold">
              {edu.period}
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50 mt-1">
              {edu.degree}
            </h3>
            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 font-bold flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>{edu.institution} ({edu.location})</span>
            </p>
          </div>

          {/* Key Coursework */}
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
            <h4 className="font-heading text-sm sm:text-base font-bold mb-2 text-stone-900 dark:text-stone-50">
              Core Computer Science Foundations:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs font-bold">
              <div className="p-1.5 bg-[#FFFDF8] dark:bg-[#161618] rounded border border-stone-300 dark:border-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Data Structures</span>
              </div>
              <div className="p-1.5 bg-[#FFFDF8] dark:bg-[#161618] rounded border border-stone-300 dark:border-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Web Architecture</span>
              </div>
              <div className="p-1.5 bg-[#FFFDF8] dark:bg-[#161618] rounded border border-stone-300 dark:border-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>DBMS & SQL</span>
              </div>
              <div className="p-1.5 bg-[#FFFDF8] dark:bg-[#161618] rounded border border-stone-300 dark:border-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>OOP & Java</span>
              </div>
              <div className="p-1.5 bg-[#FFFDF8] dark:bg-[#161618] rounded border border-stone-300 dark:border-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Software Eng.</span>
              </div>
              <div className="p-1.5 bg-[#FFFDF8] dark:bg-[#161618] rounded border border-stone-300 dark:border-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Operating Sys.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-bold shrink-0">
          <span>ACADEMIC CREDENTIAL VERIFIED</span>
          <span className="text-blue-600 dark:text-blue-400">
            Bachelor of Computer Applications
          </span>
        </div>
      </div>
    </section>
  );
}
