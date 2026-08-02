"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Award, ShieldCheck, Paperclip } from "lucide-react";

export default function CertificationsSection() {
  const certs = RESUME_DATA.certifications;

  return (
    <section id="certifications" className="w-full h-full">
      {/* Notebook Sheet - Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
        {/* Top Paper Tape */}
        <div className="absolute -top-3.5 left-10 w-36 h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[1.5deg] shadow-sm flex items-center justify-center font-handwritten text-xs text-amber-950 dark:text-amber-100 font-bold">
          Page #08 — Credentials
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-2.5 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-base sm:text-lg border border-amber-500/40 shrink-0">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-heading text-xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                Certifications
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-[11px] sm:text-xs">
                Verified industry credentials — Infosys, Udemy & Deloitte
              </p>
            </div>
          </div>
        </div>

        {/* Credentials Grid - Mobile Scrollable Area */}
        <div className="overflow-y-auto max-h-[350px] sm:max-h-none my-auto pr-1 font-handwritten custom-scrollbar py-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="bg-white dark:bg-[#202024] p-3 sm:p-3.5 rounded-lg border-2 border-stone-300 dark:border-stone-700 shadow-xs relative flex flex-col justify-between"
              >
                {/* Paperclip top corner */}
                <div className="absolute -top-2.5 left-3 text-stone-400 dark:text-stone-500 transform -rotate-12">
                  <Paperclip className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[9px] px-1.5 py-0.5 bg-stone-100 dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded font-bold uppercase block w-fit mb-1">
                    {cert.issuer}
                  </span>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-stone-900 dark:text-stone-50 mb-0.5 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-[11px] text-stone-600 dark:text-stone-400 font-medium">
                    Issued: {cert.date}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Credential
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-bold shrink-0">
          <span>CREDENTIALS ATTACHED</span>
          <span className="text-amber-600 dark:text-amber-400">
            Continuous skill upgrading
          </span>
        </div>
      </div>
    </section>
  );
}
