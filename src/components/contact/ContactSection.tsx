"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, Download, PenTool, ExternalLink } from "lucide-react";

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
      {/* Final Notebook Page Container - Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-5 sm:p-8 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100 flex flex-col justify-between">
        
        {/* Top Paper Tape */}
        <div className="absolute -top-3.5 left-10 w-36 h-7 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 rotate-[-1deg] shadow-sm flex items-center justify-center font-handwritten text-xs text-amber-950 dark:text-amber-100 font-bold">
          Page #09 — Contact Page
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-red-600/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-lg border border-red-500/30">
              <Mail className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold">
                Get In Touch & Leave Note
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-xs">
                Discuss full-stack opportunities, engineering roles & collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Main Contact Grid - Fit to Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start my-auto">
          
          {/* Left Column: Direct Contact Cards & Resume */}
          <div className="lg:col-span-5 space-y-3 font-handwritten">
            <div className="p-3 bg-white dark:bg-[#202024] border border-stone-200 dark:border-stone-700 rounded-lg space-y-2.5 text-xs font-bold shadow-2xs">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-2.5 p-2 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded hover:border-blue-500 transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-stone-900 dark:text-stone-100 truncate">{RESUME_DATA.personal.email}</span>
              </a>

              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="flex items-center gap-2.5 p-2 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded hover:border-emerald-500 transition-colors group"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-stone-900 dark:text-stone-100">{RESUME_DATA.personal.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 p-2 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded">
                <MapPin className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span className="text-stone-900 dark:text-stone-100">{RESUME_DATA.personal.location}</span>
              </div>
            </div>

            {/* Resume Download */}
            <div className="p-3 bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 rounded-lg text-amber-950 dark:text-amber-100 text-center space-y-1.5 shadow-2xs">
              <span className="font-heading text-sm font-bold flex items-center justify-center gap-1">
                <FileText className="w-4 h-4 text-amber-800 dark:text-amber-300" /> Official ATS Resume PDF
              </span>
              <a
                href="/Arpit_Bajpai_Resume_ATS.pdf"
                download
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-800 hover:bg-amber-900 text-white font-handwritten font-bold rounded-full text-xs transition-colors shadow-xs"
              >
                <span>Download Resume PDF</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#202024] border-2 border-stone-200 dark:border-stone-700 rounded-lg p-4 relative shadow-2xs">
              <span className="font-heading text-[10px] px-2 py-0.5 bg-blue-600 text-white rounded font-bold uppercase tracking-wider absolute -top-2.5 left-4 flex items-center gap-1">
                <PenTool className="w-3 h-3" /> Write Note
              </span>

              {submitted ? (
                <div className="py-6 text-center space-y-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-heading text-xl font-bold">Note Submitted!</h4>
                  <p className="font-handwritten text-sm text-stone-600 dark:text-stone-300 font-bold">
                    Thank you! Arpit will reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5 font-handwritten text-xs sm:text-sm">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3 py-1.5 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded outline-none focus:border-blue-600 font-medium text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3 py-1.5 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded outline-none focus:border-blue-600 font-medium text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      rows={2}
                      placeholder="Write your note here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3 py-1.5 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-300 dark:border-stone-700 rounded outline-none focus:border-blue-600 font-medium text-stone-900 dark:text-stone-100 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm rounded shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Send Handwritten Note</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Notebook Footer Banner - Clean Equal Height Footer */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-xs text-stone-600 dark:text-stone-400 font-bold">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-700 text-amber-200 border border-amber-400 flex items-center justify-center text-[10px] font-heading font-bold">
              AB
            </span>
            <span>Arpit Bajpai © 2026</span>
          </div>

          <p className="italic text-[11px] hidden sm:block">
            "Crafting clean web architectures from Kanpur to the world."
          </p>

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
