"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Briefcase, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = RESUME_DATA.experiences;

  return (
    <section id="experience" className="w-full h-full">
      {/* Notebook Sheet Container - Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-5 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between">
        
        {/* Top Paper Tape */}
        <div className="absolute -top-3.5 left-10 w-36 h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[1.5deg] shadow-sm flex items-center justify-center font-handwritten text-xs text-amber-950 dark:text-amber-100 font-bold">
          Page #04 — Experience Log
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-lg border border-emerald-500/40">
              <Briefcase className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                Professional Experience
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-xs">
                Sulax Solar Industries & Posterwa — Full stack & Web Development Roles
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white dark:bg-[#202024] p-4 rounded-lg border-2 border-stone-300 dark:border-stone-700 shadow-xs font-handwritten flex flex-col justify-between relative"
            >
              <div className="absolute -top-2.5 right-4 px-2 py-0.5 bg-amber-200 dark:bg-amber-950 border border-amber-300 text-amber-950 dark:text-amber-100 font-handwritten text-[11px] rounded font-bold">
                {exp.period}
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-stone-900 dark:text-stone-50 mb-0.5">
                  {exp.role}
                </h3>
                <p className="font-handwritten text-base text-blue-600 dark:text-blue-400 font-bold mb-2">
                  @ {exp.company} ({exp.location})
                </p>

                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 pt-2 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-1">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-0.5 bg-stone-100 dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded text-stone-700 dark:text-stone-300 font-bold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-3 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-xs text-stone-500 dark:text-stone-400 font-bold">
          <span>WORK HISTORY RECORDED</span>
          <span className="text-emerald-600 dark:text-emerald-400">
            Open for New Full-Stack Opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
