"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Users, ShieldCheck, Crown, Award, Sparkles } from "lucide-react";

export default function LeadershipSection() {
  const leadershipItems = RESUME_DATA.leadership;

  return (
    <section id="leadership" className="w-full h-full">
      {/* Corkboard Container - 100% Fixed Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-7 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
        {/* Header with Integrated Uncropped Page Tape */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-2.5 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-base sm:text-lg border border-purple-500/30 shrink-0">
              <Users className="w-4 h-4" />
            </span>
            <div>
              <div className="inline-block px-2 py-0.5 mb-0.5 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 font-handwritten text-[11px] sm:text-xs text-amber-950 dark:text-amber-100 font-bold rounded shadow-xs rotate-[1deg]">
                Page #06 — Leadership
              </div>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
                Leadership & Community Roles
              </h2>
            </div>
          </div>
        </div>

        {/* Leadership Grid - Mobile & Desktop Inner Scrollable Area */}
        <div className="overflow-y-auto max-h-[360px] sm:max-h-[410px] my-auto pr-1 font-handwritten custom-scrollbar py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {leadershipItems.map((item) => {
              const isPres = item.isPresident || item.role.toLowerCase().includes("president");
              return (
                <div
                  key={item.role + item.organization}
                  className={`bg-white dark:bg-[#202024] p-3.5 rounded-lg border-2 shadow-2xs relative flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    isPres
                      ? "border-amber-400 dark:border-amber-600/80 sm:col-span-2 bg-gradient-to-r from-amber-50/60 via-white to-amber-50/40 dark:from-amber-950/30 dark:via-[#202024] dark:to-amber-950/20"
                      : "border-stone-300 dark:border-stone-700"
                  }`}
                >
                  {/* Pushpin Top Corner */}
                  <div
                    className={`absolute -top-2.5 right-4 w-3.5 h-3.5 rounded-full border shadow-md ${
                      item.pinColor || (isPres ? "bg-amber-500 border-amber-700 shadow-amber-500/50" : "bg-red-600 border-red-800")
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        {isPres ? (
                          <Crown className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                        ) : (
                          <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                        )}
                        <span className="font-heading text-sm sm:text-base font-bold text-stone-900 dark:text-stone-50">
                          {item.role}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded border font-bold ${
                          item.badgeColor ||
                          (isPres
                            ? "bg-amber-100 dark:bg-amber-950 border-amber-400 text-amber-900 dark:text-amber-200"
                            : "bg-amber-100 dark:bg-amber-950 border-amber-300 text-amber-900 dark:text-amber-200")
                        }`}
                      >
                        {item.badge || (isPres ? "PRESIDENTIAL ROLE" : "OFFICIAL ROLE")}
                      </span>
                    </div>

                    <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1.5 flex items-center gap-1">
                      <span>@ {item.organization}</span>
                      {isPres && <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />}
                    </p>

                    <p className="text-xs text-stone-700 dark:text-stone-300 font-medium leading-relaxed mb-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-1.5 border-t border-stone-200 dark:border-stone-800 text-[11px] text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{isPres ? "Flagship Leadership Position" : "Verified Leadership Position"}</span>
                    </div>
                    {isPres && (
                      <span className="text-[10px] text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider hidden sm:inline-block">★ Top Leadership</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-bold shrink-0">
          <span>COMMUNITY LEADERSHIP RECORD</span>
          <span className="text-purple-600 dark:text-purple-400">
            Building tech ecosystems & student communities
          </span>
        </div>
      </div>
    </section>
  );
}
