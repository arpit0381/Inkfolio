"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { GraduationCap, Award, BookOpen, CheckCircle2, PenTool } from "lucide-react";

export default function EducationSection() {
  const edu = RESUME_DATA.education;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative max-w-6xl mx-auto">
      {/* Report Card Container */}
      <div className="bg-[#FFFDF8] dark:bg-[#1A1A1C] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
                Page #07 — Academic Report Card
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Formal Degree & Technical Education Record
              </p>
            </div>
          </div>

          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>INSTITUTE: PSIT KANPUR</p>
            <p>DEGREE IN PROGRESS</p>
          </div>
        </div>

        {/* Report Card Design Sheet */}
        <div className="bg-stone-100/90 dark:bg-stone-900/90 border-2 border-stone-300 dark:border-stone-800 rounded-lg p-6 sm:p-8 relative">
          
          {/* Stamped Seal */}
          <div className="absolute top-6 right-6 w-24 h-24 rounded-full border-4 border-red-600/60 dark:border-red-500/70 flex flex-col items-center justify-center text-center rotate-12 opacity-90 pointer-events-none select-none font-heading text-red-600 dark:text-red-400 text-xs font-bold leading-tight">
            <span>OFFICIAL</span>
            <span>REPORT</span>
            <span>★ PASSED ★</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-300 dark:border-emerald-800">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div>
              <span className="font-handwritten text-sm text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                DEGREE PROGRAM:
              </span>
              <h3 className="font-heading text-3xl font-bold text-stone-900 dark:text-stone-100">
                {edu.degree}
              </h3>
              <p className="font-handwritten text-lg text-stone-700 dark:text-stone-300">
                {edu.institution} — {edu.location}
              </p>
            </div>
          </div>

          {/* Academic Stats Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-handwritten text-lg mb-6">
            <div className="p-4 bg-[#FFFDF8] dark:bg-[#1C1C1E] border border-stone-300 dark:border-stone-700 rounded">
              <span className="text-xs text-stone-500 dark:text-stone-400 block uppercase font-bold">Duration</span>
              <span className="font-heading text-xl text-stone-900 dark:text-stone-100 font-bold">
                {edu.period}
              </span>
            </div>

            <div className="p-4 bg-[#FFFDF8] dark:bg-[#1C1C1E] border border-stone-300 dark:border-stone-700 rounded">
              <span className="text-xs text-stone-500 dark:text-stone-400 block uppercase font-bold">Academic Status / CGPA</span>
              <span className="font-heading text-xl text-blue-600 dark:text-blue-400 font-bold">
                {edu.cgpa}
              </span>
            </div>

            <div className="p-4 bg-[#FFFDF8] dark:bg-[#1C1C1E] border border-stone-300 dark:border-stone-700 rounded">
              <span className="text-xs text-stone-500 dark:text-stone-400 block uppercase font-bold">Specialization</span>
              <span className="font-heading text-xl text-emerald-600 dark:text-emerald-400 font-bold">
                Computer Applications
              </span>
            </div>
          </div>

          {/* Handwritten Examiner Notes */}
          <div className="p-4 bg-amber-50 dark:bg-amber-950/60 rounded border border-amber-200 dark:border-amber-900/60 font-handwritten text-lg text-amber-950 dark:text-amber-100">
            <strong className="font-heading text-xl flex items-center gap-1.5 mb-1">
              <PenTool className="w-4 h-4 text-amber-700 dark:text-amber-300" /> Faculty Note:
            </strong>
            {edu.handwrittenNotes}
          </div>
        </div>
      </div>
    </section>
  );
}
