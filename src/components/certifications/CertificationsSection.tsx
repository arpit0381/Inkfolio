"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Paperclip, Award, CheckCircle2 } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-2 sm:py-4 px-2 sm:px-4 relative max-w-6xl mx-auto">
      {/* Notebook Sheet */}
      <div className="bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-500/30">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 font-bold">
                Page #08 — Certifications & Verification
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Paper-Clipped Credentials — Infosys, Udemy, Deloitte
              </p>
            </div>
          </div>

          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>6 CREDENTIALS VERIFIED</p>
            <p>PASTED IN NOTEBOOK</p>
          </div>
        </div>

        {/* Paper-Clipped Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-[#202024] border-2 border-stone-200 dark:border-stone-700 rounded-lg p-5 relative shadow-xs hover:border-blue-500 transition-all hover:scale-[1.02] group"
            >
              {/* Paper Clip Icon top left */}
              <div className="absolute -top-4 left-6 text-stone-400 dark:text-stone-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Paperclip className="w-6 h-6 rotate-45" />
              </div>

              <div className="pt-2">
                <span className="font-handwritten text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 rounded font-bold border border-blue-200 dark:border-blue-800">
                  {cert.issuer}
                </span>

                <h3 className="font-heading text-xl font-bold text-stone-900 dark:text-stone-50 mt-2 leading-tight">
                  {cert.title}
                </h3>

                <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between font-handwritten text-xs text-stone-600 dark:text-stone-400">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Certified
                  </span>
                  <span>Credential #0{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
