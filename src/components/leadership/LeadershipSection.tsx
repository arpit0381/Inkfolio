"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Award, Users, ShieldCheck, Flame, Medal } from "lucide-react";

export default function LeadershipSection() {
  const getLeadershipIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Flame className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 1:
        return <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 relative max-w-6xl mx-auto">
      {/* Corkboard Background */}
      <div className="bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl border border-purple-500/30">
              <Medal className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 font-bold">
                Page #06 — Leadership & Activities
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Pinned Board — Organization management, mentorship & initiative building
              </p>
            </div>
          </div>

          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>4 LEADERSHIP POSITIONS</p>
            <p>PSIT CAMPUS COMMUNITY</p>
          </div>
        </div>

        {/* Pinned Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.leadership.map((item, idx) => (
            <div
              key={item.role}
              className="bg-white dark:bg-[#202024] border-2 border-stone-200 dark:border-stone-700 rounded-lg p-6 relative shadow-xs hover:border-purple-500 transition-colors group"
            >
              {/* Metallic Pushpin top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border border-amber-700 shadow-md group-hover:scale-125 transition-transform" />

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFFDF8] dark:bg-[#161618] rounded-full border border-stone-300 dark:border-stone-700 shrink-0">
                  {getLeadershipIcon(idx)}
                </div>

                <div>
                  <span className="font-handwritten text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">
                    {item.organization}
                  </span>
                  <h3 className="font-heading text-2xl text-stone-900 dark:text-stone-50 font-bold mt-0.5">
                    {item.role}
                  </h3>
                  <p className="font-handwritten text-lg text-stone-900 dark:text-stone-100 font-medium mt-2 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Stamp */}
              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
                <span className="font-heading text-xs px-2.5 py-0.5 border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300 rounded uppercase font-bold">
                  Verified Role
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
