"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, Download, PenTool } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full h-full">
      {/* Final Notebook Page Container - 100% Fixed Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-7 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
        {/* Header with Integrated Uncropped Page Tape */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-2.5 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-600/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-base sm:text-lg border border-red-500/30 shrink-0">
              <Mail className="w-4 h-4" />
            </span>
            <div>
              <div className="inline-block px-2 py-0.5 mb-0.5 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 font-handwritten text-[11px] sm:text-xs text-amber-950 dark:text-amber-100 font-bold rounded shadow-xs rotate-[-1deg]">
                Page #09 — Contact Page
              </div>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
                Get In Touch
              </h2>
            </div>
          </div>
        </div>

        {/* Main Contact Area - Mobile Scrollable Area */}
        <div className="overflow-y-auto max-h-[350px] sm:max-h-none my-auto pr-1 custom-scrollbar py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            
            {/* Left Column: Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-2.5 font-handwritten">
              <div className="p-2.5 bg-white dark:bg-[#202024] border border-stone-200 dark:border-stone-700 rounded-lg space-y-2 text-xs font-bold shadow-2xs">
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="flex items-center gap-2 p-1.5 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded hover:border-blue-500 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-stone-900 dark:text-stone-100 truncate text-[11px] sm:text-xs">{RESUME_DATA.personal.email}</span>
                </a>

                <a
                  href={`tel:${RESUME_DATA.personal.phone}`}
                  className="flex items-center gap-2 p-1.5 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded hover:border-emerald-500 transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-stone-900 dark:text-stone-100 text-[11px] sm:text-xs">{RESUME_DATA.personal.phone}</span>
                </a>

                <div className="flex items-center gap-2 p-1.5 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded">
                  <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                  <span className="text-stone-900 dark:text-stone-100 text-[11px] sm:text-xs">{RESUME_DATA.personal.location}</span>
                </div>
              </div>

              {/* Resume Download */}
              <div className="p-2.5 bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 rounded-lg text-amber-950 dark:text-amber-100 text-center space-y-1 shadow-2xs">
                <span className="font-heading text-xs font-bold flex items-center justify-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-amber-800 dark:text-amber-300" /> ATS Resume PDF
                </span>
                <a
                  href="/Arpit_Bajpai_Resume_ATS.pdf"
                  download
                  className="inline-flex items-center gap-1 px-3 py-1 bg-amber-800 hover:bg-amber-900 text-white font-handwritten font-bold rounded-full text-[11px] transition-colors shadow-xs"
                >
                  <span>Download Resume PDF</span>
                  <Download className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#202024] border-2 border-stone-200 dark:border-stone-700 rounded-lg p-3 relative shadow-2xs">
                <span className="font-heading text-[9px] px-2 py-0.5 bg-blue-600 text-white rounded font-bold uppercase tracking-wider absolute -top-2.5 left-3 flex items-center gap-1">
                  <PenTool className="w-2.5 h-2.5" /> Write Note
                </span>

                {submitted ? (
                  <div className="py-4 text-center space-y-1 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    <h4 className="font-heading text-base font-bold">Note Submitted!</h4>
                    <p className="font-handwritten text-xs text-stone-600 dark:text-stone-300 font-bold">
                      Thank you! Arpit will reply.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2 font-handwritten text-xs">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-2.5 py-1 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded outline-none focus:border-blue-600 font-medium text-stone-900 dark:text-stone-100 text-xs"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-2.5 py-1 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded outline-none focus:border-blue-600 font-medium text-stone-900 dark:text-stone-100 text-xs"
                      />
                    </div>

                    <div>
                      <textarea
                        required
                        rows={2}
                        placeholder="Write note here..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-2.5 py-1 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded outline-none focus:border-blue-600 font-medium text-stone-900 dark:text-stone-100 resize-none text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs rounded shadow-md transition-all flex items-center justify-center gap-1"
                    >
                      <span>Send Handwritten Note</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Notebook Footer Banner */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-[11px] text-stone-600 dark:text-stone-400 font-bold shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-red-700 text-amber-200 border border-amber-400 flex items-center justify-center text-[9px] font-heading font-bold">
              AB
            </span>
            <span>Arpit Bajpai © 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href={RESUME_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
