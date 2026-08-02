"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { CheckSquare, Code, Database, Smartphone, Wrench, CheckCircle2 } from "lucide-react";
import { usePen } from "@/context/PenContext";

export default function SkillsSection() {
  const { penColor } = usePen();

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-2 sm:py-4 px-2 sm:px-4 relative max-w-6xl mx-auto">
      {/* Notebook Sheet Container */}
      <div className="bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-500/30">
              <CheckSquare className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 font-bold">
                Page #03 — Technical Skillset
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Notebook checklist — Verified competencies from resume
              </p>
            </div>
          </div>

          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>CHECKLIST STATUS: COMPLETE</p>
            <p>VERIFIED FOR PRODUCTION</p>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-8">
          {RESUME_DATA.skills.map((cat, catIdx) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-[#202024] border border-stone-200 dark:border-stone-700 rounded-lg p-6 relative shadow-xs"
            >
              {/* Category Stamp */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200 dark:border-stone-800">
                <h3 className="font-heading text-2xl text-stone-900 dark:text-stone-50 font-bold flex items-center gap-2">
                  {getCategoryIcon(catIdx)}
                  <span>{cat.category}</span>
                </h3>
                <span className="font-handwritten text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded text-stone-800 dark:text-stone-200 font-bold border border-stone-200 dark:border-stone-700">
                  {cat.skills.length} Items
                </span>
              </div>

              {/* Hand-Drawn Checkbox Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 font-handwritten text-lg sm:text-xl">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-[#FFFDF8] dark:bg-[#161618] px-3.5 py-2.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:scale-[1.02] shadow-2xs group"
                  >
                    {/* Animated Checkbox SVG */}
                    <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:scale-110 transition-transform"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="3"
                          stroke={penColor}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-80"
                        />
                        <path
                          d="M7 12.5L10.5 16L17.5 8.5"
                          stroke={penColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <span className="text-stone-900 dark:text-stone-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note footer */}
        <div className="mt-8 pt-4 border-t border-dashed border-stone-300 dark:border-stone-800 font-handwritten text-sm text-stone-600 dark:text-stone-300 flex items-center justify-between">
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> All skills actively applied in client projects & full-stack applications.
          </span>
          <span className="text-red-600 dark:text-red-400 font-bold">100% Verified</span>
        </div>
      </div>
    </section>
  );
}
