"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Users, ShieldCheck } from "lucide-react";

export default function LeadershipSection() {
  const leadershipItems = RESUME_DATA.leadership;

  return (
    <section id="leadership" className="w-full h-full">
      {/* Corkboard Container - Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-5 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between">
        
        {/* Top Paper Tape */}
        <div className="absolute -top-3.5 left-10 w-36 h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[1deg] shadow-sm flex items-center justify-center font-handwritten text-xs text-amber-950 dark:text-amber-100 font-bold">
          Page #06 — Leadership
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg border border-purple-500/30">
              <Users className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                Leadership & Community Roles
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-xs">
                Catalyst Crew, Logix Club, Energy Club & Ignitia Fest Head
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Grid - Fit to Page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-auto font-handwritten">
          {leadershipItems.map((item) => (
            <div
              key={item.role}
              className="bg-white dark:bg-[#202024] p-3.5 rounded-lg border-2 border-stone-300 dark:border-stone-700 shadow-2xs relative flex flex-col justify-between"
            >
              {/* Pushpin Top Corner */}
              <div className="absolute -top-2.5 right-4 w-3.5 h-3.5 rounded-full bg-red-600 border border-red-800 shadow-md" />

              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-heading text-base font-bold text-stone-900 dark:text-stone-50">
                    {item.role}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 border border-amber-300 font-bold text-amber-900 dark:text-amber-200">
                    OFFICIAL ROLE
                  </span>
                </div>

                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1.5">
                  @ {item.organization}
                </p>

                <p className="text-xs text-stone-700 dark:text-stone-300 font-medium leading-relaxed mb-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-1.5 border-t border-stone-200 dark:border-stone-800 text-[11px] text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Verified Leadership Position</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-3 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-xs text-stone-500 dark:text-stone-400 font-bold">
          <span>COMMUNITY LEADERSHIP RECORD</span>
          <span className="text-purple-600 dark:text-purple-400">
            Building tech ecosystems & student communities
          </span>
        </div>
      </div>
    </section>
  );
}
