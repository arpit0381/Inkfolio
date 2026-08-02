"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/lib/resumeData";
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, Download, PenTool, ExternalLink, Sparkles } from "lucide-react";

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
    <section id="contact" className="py-20 px-4 sm:px-6 relative max-w-6xl mx-auto">
      {/* Final Notebook Page Container */}
      <div className="bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-lines relative text-stone-900 dark:text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-red-600/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xl border border-red-500/30">
              <Mail className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 font-bold">
                Final Page — Get In Touch
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Let's discuss full-stack projects, collaborations & engineering roles
              </p>
            </div>
          </div>

          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>NOTEBOOK CLOSING</p>
            <p>RESPONSIVE & READY</p>
          </div>
        </div>

        {/* Handwritten Callout */}
        <div className="text-center mb-10">
          <h3 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-stone-900 dark:text-stone-50 font-bold mb-2">
            Let's Build Something Amazing.
          </h3>
          <p className="font-handwritten text-xl text-stone-700 dark:text-stone-300 font-medium">
            Leave a note in my engineering notebook or connect directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-white dark:bg-[#202024] border border-stone-200 dark:border-stone-700 rounded-lg space-y-4 font-handwritten text-lg shadow-xs">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-3 p-3 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded-lg hover:border-blue-500 transition-colors group"
              >
                <div className="p-2.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 dark:text-stone-400 block font-bold">Email Address</span>
                  <span className="font-heading text-lg text-stone-900 dark:text-stone-100 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {RESUME_DATA.personal.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="flex items-center gap-3 p-3 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded-lg hover:border-emerald-500 transition-colors group"
              >
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 dark:text-stone-400 block font-bold">Phone / WhatsApp</span>
                  <span className="font-heading text-lg text-stone-900 dark:text-stone-100 font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {RESUME_DATA.personal.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 bg-[#FFFDF8] dark:bg-[#161618] border border-stone-200 dark:border-stone-700 rounded-lg">
                <div className="p-2.5 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-full shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 dark:text-stone-400 block font-bold">Location</span>
                  <span className="font-heading text-lg text-stone-900 dark:text-stone-100 font-bold">
                    {RESUME_DATA.personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-5 bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 rounded-lg text-amber-950 dark:text-amber-100 font-handwritten text-center space-y-3 shadow-xs">
              <span className="font-heading text-xl font-bold flex items-center justify-center gap-2">
                <FileText className="w-5 h-5 text-amber-800 dark:text-amber-300" /> Official Resume PDF
              </span>
              <p className="text-sm font-medium">
                Need a copy for ATS review? Download Arpit's verified resume.
              </p>
              <a
                href="/Arpit_Bajpai_Resume_ATS.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-handwritten font-bold rounded-full text-base transition-colors shadow-md"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Handwritten Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#202024] border-2 border-stone-200 dark:border-stone-700 rounded-lg p-6 sm:p-8 relative shadow-xs">
              <span className="font-heading text-xs px-2.5 py-1 bg-blue-600 text-white rounded font-bold uppercase tracking-wider absolute -top-3 left-6 flex items-center gap-1">
                <PenTool className="w-3.5 h-3.5" /> Write in Notebook
              </span>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading text-3xl font-bold text-stone-900 dark:text-stone-50">
                    Note Received!
                  </h4>
                  <p className="font-handwritten text-xl text-stone-700 dark:text-stone-300 font-medium">
                    Thank you for leaving a note. Arpit will respond to your message promptly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-handwritten px-4 py-2 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded text-stone-800 dark:text-stone-200 hover:bg-blue-600 hover:text-white transition-colors text-base font-bold"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-handwritten text-lg">
                  <div>
                    <label className="block text-stone-900 dark:text-stone-100 mb-1 font-heading text-lg font-bold">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors text-stone-900 dark:text-stone-100 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-900 dark:text-stone-100 mb-1 font-heading text-lg font-bold">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors text-stone-900 dark:text-stone-100 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-900 dark:text-stone-100 mb-1 font-heading text-lg font-bold">
                      Your Note / Project Brief:
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your note here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-colors text-stone-900 dark:text-stone-100 font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xl rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Handwritten Note</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* REDESIGNED NOTEBOOK FOOTER - Theme Aligned & Elegant */}
        <div className="pt-8 border-t-2 border-dashed border-stone-300 dark:border-stone-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
            {/* Left: Wax Seal / Signature Stamp */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-700 text-amber-200 border-2 border-amber-400/80 flex items-center justify-center font-heading font-bold text-lg shadow-md rotate-[-6deg]">
                AB
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-stone-900 dark:text-stone-50">
                  Arpit Bajpai
                </h4>
                <p className="font-handwritten text-xs text-stone-600 dark:text-stone-300 font-bold">
                  Engineering Notebook & Official Portfolio
                </p>
              </div>
            </div>

            {/* Center: Quick Ribbon Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 font-handwritten text-sm">
              <a href="#about" className="px-3 py-1 bg-stone-200/80 dark:bg-stone-800/80 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold">
                About
              </a>
              <a href="#skills" className="px-3 py-1 bg-stone-200/80 dark:bg-stone-800/80 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold">
                Skills
              </a>
              <a href="#experience" className="px-3 py-1 bg-stone-200/80 dark:bg-stone-800/80 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold">
                Experience
              </a>
              <a href="#projects" className="px-3 py-1 bg-stone-200/80 dark:bg-stone-800/80 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold">
                Projects
              </a>
              <a href="#leadership" className="px-3 py-1 bg-stone-200/80 dark:bg-stone-800/80 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold">
                Leadership
              </a>
              <a href="#contact" className="px-3 py-1 bg-stone-200/80 dark:bg-stone-800/80 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold">
                Contact
              </a>
            </div>

            {/* Right: Quick Links */}
            <div className="flex items-center gap-3">
              <a
                href={RESUME_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold font-handwritten text-xs flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={RESUME_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 hover:bg-blue-600 hover:text-white transition-colors text-stone-800 dark:text-stone-200 font-bold font-handwritten text-xs flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="text-center pt-4 border-t border-stone-200 dark:border-stone-800 font-handwritten text-stone-600 dark:text-stone-400 text-sm">
            <p className="italic font-bold text-stone-800 dark:text-stone-200">
              "Crafting clean web architectures & digital experiences from Kanpur to the world."
            </p>
            <p className="text-xs text-stone-500 mt-1">
              © 2026 Arpit Bajpai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
