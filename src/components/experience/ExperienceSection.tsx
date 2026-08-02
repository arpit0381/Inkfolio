"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Briefcase, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = RESUME_DATA.experiences;

  return (
    <section id="experience" className="w-full h-full">
      {/* Notebook Sheet Container - 100% Fixed Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-7 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
        {/* Header with Integrated Uncropped Page Tape */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-2.5 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-base sm:text-lg border border-emerald-500/40 shrink-0">
              <Briefcase className="w-4 h-4" />
            </span>
            <div>
              <div className="inline-block px-2 py-0.5 mb-0.5 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 font-handwritten text-[11px] sm:text-xs text-amber-950 dark:text-amber-100 font-bold rounded shadow-xs rotate-[1.5deg]">
                Page #04 — Experience Log
              </div>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
                Professional Experience
              </h2>
            </div>
          </div>
        </div>

        {/* Experience Timeline Grid - Mobile Scrollable Inner Area */}
        <div className="overflow-y-auto max-h-[350px] sm:max-h-none my-auto pr-1 font-handwritten custom-scrollbar py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="bg-white dark:bg-[#202024] p-3.5 rounded-lg border-2 border-stone-300 dark:border-stone-700 shadow-xs relative flex flex-col justify-between"
              >
                <div className="inline-block w-fit px-2 py-0.5 bg-amber-200 dark:bg-amber-950 border border-amber-300 text-amber-950 dark:text-amber-100 text-[10px] rounded font-bold mb-1">
                  {exp.period}
                </div>

                <div>
                  <h3 className="font-heading text-base sm:text-xl font-bold text-stone-900 dark:text-stone-50 mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-base text-blue-600 dark:text-blue-400 font-bold mb-2">
                    @ {exp.company} ({exp.location})
                  </p>

                  <ul className="space-y-1 text-xs text-stone-800 dark:text-stone-200 font-medium">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <ChevronRight className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-2.5 pt-1.5 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-1">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[9px] px-1.5 py-0.5 bg-stone-100 dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded text-stone-700 dark:text-stone-300 font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-bold shrink-0">
          <span>WORK HISTORY RECORDED</span>
          <span className="text-emerald-600 dark:text-emerald-400">
            Open for New Full-Stack Opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
