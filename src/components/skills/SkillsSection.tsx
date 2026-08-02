"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { CheckSquare, Square, Wrench, Code2, Database, Layout, Smartphone } from "lucide-react";

export default function SkillsSection() {
  const categories = RESUME_DATA.skills;

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    "React.js": true,
    "Next.js 16": true,
    "Node.js": true,
    "PostgreSQL": true,
  });

  const toggleCheck = (skillName: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [skillName]: !prev[skillName],
    }));
  };

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes("Languages")) return <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    if (categoryName.includes("Frameworks")) return <Layout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    if (categoryName.includes("Database")) return <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    if (categoryName.includes("Developer Tools")) return <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    return <Smartphone className="w-4 h-4 text-red-600 dark:text-red-400" />;
  };

  return (
    <section id="skills" className="w-full h-full">
      {/* Notebook Sheet Container - Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-5 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between">
        
        {/* Top Paper Tape */}
        <div className="absolute -top-3.5 left-10 w-32 h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[-1deg] shadow-sm flex items-center justify-center font-handwritten text-xs text-amber-950 dark:text-amber-100 font-bold">
          Page #03 — Skill Matrix
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/30">
              <CheckSquare className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                Technical Skillset & Checklist
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-xs">
                Hand-drawn interactive skill checkboxes — Click any skill to toggle
              </p>
            </div>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-[#202024] p-3.5 rounded border border-stone-300 dark:border-stone-700 shadow-2xs font-handwritten"
            >
              <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2 mb-2">
                {getCategoryIcon(cat.category)}
                <h3 className="font-heading text-base font-bold text-stone-900 dark:text-stone-50">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm font-bold">
                {cat.skills.map((skill) => {
                  const isChecked = checkedItems[skill.name] ?? skill.checked;
                  return (
                    <li
                      key={skill.name}
                      onClick={() => toggleCheck(skill.name)}
                      className="cursor-pointer flex items-center gap-2 text-stone-800 dark:text-stone-200 hover:text-blue-600 transition-colors select-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                      <span className={isChecked ? "line-through opacity-80" : ""}>
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Status */}
        <div className="pt-3 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-xs text-stone-500 dark:text-stone-400 font-bold">
          <span>INTERACTIVE SKILL CHECKLIST</span>
          <span className="text-blue-600 dark:text-blue-400">
            Click checkboxes to test pen state
          </span>
        </div>
      </div>
    </section>
  );
}
