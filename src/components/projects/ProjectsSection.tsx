"use client";

import React, { useState, useEffect } from "react";
import { RESUME_DATA, ProjectItem } from "@/lib/resumeData";
import { ExternalLink, X, Layers, CheckCircle2, ArrowRight, Pin, AlertCircle } from "lucide-react";
import { lockScroll } from "@/components/notebook/LenisScrollProvider";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Strictly lock Lenis smooth scroll and body overflow when modal is active
  useEffect(() => {
    if (selectedProject) {
      lockScroll(true);
    } else {
      lockScroll(false);
    }
    return () => {
      lockScroll(false);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-2 sm:py-4 px-2 sm:px-4 relative max-w-6xl mx-auto">
      {/* Notebook Desk Container */}
      <div className="bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-6 sm:p-12 notebook-shadow paper-grid relative text-stone-900 dark:text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b-2 border-stone-300 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-yellow-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-xl border border-amber-500/40">
              <Pin className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 font-bold">
                Page #05 — Featured Projects
              </h2>
              <p className="font-handwritten text-stone-600 dark:text-stone-300 text-sm">
                Sticky Notes Desk — Click any note to unfold full engineering details
              </p>
            </div>
          </div>

          <div className="hidden sm:block font-handwritten text-stone-500 dark:text-stone-400 text-right text-xs">
            <p>6 PROJECTS LOGGED</p>
            <p>CLICK STICKY TO OPEN</p>
          </div>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.projects.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className={`cursor-pointer p-6 rounded-sm border ${proj.stickyColor} sticky-shadow transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:scale-105 relative group flex flex-col justify-between min-h-[220px]`}
              style={{
                transform: `rotate(${(idx % 3 === 0 ? -1.5 : idx % 2 === 0 ? 2 : -2)}deg)`,
              }}
            >
              {/* Pushpin at top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border border-red-800 shadow-md group-hover:scale-125 transition-transform" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-heading text-xs px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 uppercase tracking-wider font-bold">
                    Project #0{idx + 1}
                  </span>
                  {proj.domain && (
                    <span className="font-handwritten text-xs font-bold underline">
                      {proj.domain}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-2xl font-bold mb-1 leading-snug">
                  {proj.title}
                </h3>
                <p className="font-handwritten text-sm font-medium line-clamp-2 mb-4">
                  {proj.subtitle}
                </p>
              </div>

              {/* Bottom Tech Tags & Click prompt */}
              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {proj.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-handwritten text-[11px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-handwritten text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Note <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Notebook Detail Modal - Positioned clearly below header with optimized compact font sizing */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center pt-20 sm:pt-24 pb-6 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFDF8] dark:bg-[#1A1A1E] border-2 border-stone-300 dark:border-stone-700 rounded-xl p-4 sm:p-6 max-w-xl w-full notebook-shadow paper-lines relative max-h-[82vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 text-stone-900 dark:text-stone-100 shadow-2xl space-y-3"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors z-10"
              title="Close Note"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Tag */}
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-200 dark:bg-amber-950 text-amber-950 dark:text-amber-100 font-handwritten text-xs rounded border border-amber-300 font-bold">
              <Pin className="w-3 h-3" /> NOTEBOOK BREAKDOWN — {selectedProject.title}
            </div>

            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
                {selectedProject.title}
              </h3>
              <p className="font-handwritten text-base text-blue-600 dark:text-blue-400 font-bold">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 gap-2.5 font-handwritten text-sm text-stone-900 dark:text-stone-100">
              <div className="p-3 bg-red-50 dark:bg-red-950/60 rounded-lg border border-red-200 dark:border-red-900">
                <strong className="text-red-700 dark:text-red-300 font-heading text-base flex items-center gap-1 font-bold">
                  <AlertCircle className="w-4 h-4" /> THE PROBLEM:
                </strong>
                <p className="font-medium text-xs sm:text-sm leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg border border-emerald-200 dark:border-emerald-900">
                <strong className="text-emerald-700 dark:text-emerald-300 font-heading text-base flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> THE SOLUTION:
                </strong>
                <p className="font-medium text-xs sm:text-sm leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
              <h4 className="font-heading text-base text-stone-900 dark:text-stone-50 font-bold mb-1.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Tech Stack Used:</span>
              </h4>
              <div className="flex flex-wrap gap-1.5 font-handwritten text-xs">
                {selectedProject.stack.map((st) => (
                  <span
                    key={st}
                    className="px-2.5 py-0.5 bg-white dark:bg-[#242429] rounded-full border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 font-bold shadow-2xs"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h4 className="font-heading text-base text-stone-900 dark:text-stone-50 font-bold mb-1.5">
                Key Outcomes & Deliverables:
              </h4>
              <ul className="space-y-1 font-handwritten text-xs sm:text-sm text-stone-900 dark:text-stone-100 font-medium">
                {selectedProject.outcomes.map((oc, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{oc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            {selectedProject.liveUrl && (
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex justify-end">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-handwritten text-sm rounded-full shadow-md transition-colors font-bold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit Live Demo ({selectedProject.domain || "Website"})</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
