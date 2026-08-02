"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Briefcase, MapPin, Calendar, CheckCircle2, PenTool } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-2 sm:py-4 px-2 sm:px-4 relative max-w-6xl mx-auto">
      {/* Notebook Sheet Container */}
      <div className="bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-amber-600/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-500/30">
              <Briefcase className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 font-bold">
                Page #04 — Professional Experience
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Notebook Timeline — Roles, Impact & Achievements
              </p>
            </div>
          </div>

          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>TOTAL ROLES: 2</p>
            <p>PROVEN GROWTH RECORD</p>
          </div>
        </div>

        {/* Experience Timeline Pages */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-stone-300 dark:border-stone-800 space-y-12">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <div key={exp.company} className="relative group">
              {/* Timeline Pin Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-md ring-4 ring-[#FFFDF8] dark:ring-[#161618]">
                0{idx + 1}
              </div>

              {/* Notebook Experience Sheet */}
              <div className="bg-white dark:bg-[#202024] border border-stone-200 dark:border-stone-700 rounded-lg p-6 relative hover:border-blue-500 transition-all shadow-xs">
                {/* Paper Fold Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-stone-100 dark:bg-stone-800 pointer-events-none rounded-bl-md border-b border-l border-stone-200 dark:border-stone-700" />

                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                      {exp.role} <span className="text-blue-600 dark:text-blue-400">@ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-handwritten text-stone-600 dark:text-stone-300 mt-1 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-red-500" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                    </div>
                  </div>

                  <span className="font-handwritten text-xs px-3 py-1 bg-amber-100 dark:bg-amber-950 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700 rounded-full font-bold">
                    Resume Verified
                  </span>
                </div>

                {/* Achievements List */}
                <ul className="space-y-2.5 my-4 font-handwritten text-lg sm:text-xl text-stone-900 dark:text-stone-100">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Applied Skills Tags */}
                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-2">
                  <span className="font-handwritten text-xs text-stone-500 dark:text-stone-400 font-bold">
                    Stack / Focus:
                  </span>
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="font-handwritten text-xs px-2.5 py-0.5 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded text-stone-800 dark:text-stone-200 font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
