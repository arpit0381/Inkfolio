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
    <section id="projects" className="w-full h-full">
      {/* Notebook Desk Container - 100% Fixed Equal Size */}
      <div className="w-full h-full bg-[#FFFDF8] dark:bg-[#161618] border-2 border-stone-300 dark:border-stone-700/80 rounded-lg p-4 sm:p-7 notebook-shadow paper-grid relative text-stone-900 dark:text-stone-100 flex flex-col justify-between overflow-hidden">
        
        {/* Header with Integrated Uncropped Page Tape */}
        <div className="flex items-center justify-between border-b-2 border-stone-300 dark:border-stone-800 pb-2.5 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-yellow-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-base sm:text-lg border border-amber-500/40 shrink-0">
              <Pin className="w-4 h-4" />
            </span>
            <div>
              <div className="inline-block px-2 py-0.5 mb-0.5 bg-amber-200 dark:bg-amber-900/80 border border-amber-300 dark:border-amber-700 font-handwritten text-[11px] sm:text-xs text-amber-950 dark:text-amber-100 font-bold rounded shadow-xs rotate-[-1deg]">
                Page #05 — Projects Desk
              </div>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-stone-900 dark:text-stone-50 font-bold leading-tight">
                Featured Projects Desk
              </h2>
            </div>
          </div>
        </div>

        {/* Sticky Notes Inner Grid - Mobile Scrollable Area */}
        <div className="overflow-y-auto max-h-[350px] sm:max-h-none my-auto pr-1 font-handwritten custom-scrollbar py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RESUME_DATA.projects.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`cursor-pointer p-3.5 rounded-sm border ${proj.stickyColor} sticky-shadow transform transition-all duration-300 hover:-translate-y-1 hover:rotate-1 hover:scale-102 relative group flex flex-col justify-between min-h-[125px] sm:min-h-[145px]`}
                style={{
                  transform: `rotate(${(idx % 3 === 0 ? -1.5 : idx % 2 === 0 ? 1.5 : -1)}deg)`,
                }}
              >
                {/* Pushpin at top center */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-red-600 border border-red-800 shadow-md group-hover:scale-125 transition-transform" />

                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-heading text-[10px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 uppercase tracking-wider font-bold">
                      Project #0{idx + 1}
                    </span>
                    {proj.domain && (
                      <span className="font-handwritten text-[10px] font-bold underline truncate max-w-[110px]">
                        {proj.domain}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold mb-0.5 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="font-handwritten text-[11px] sm:text-xs font-medium line-clamp-2 mb-2">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Bottom Tech Tags */}
                <div className="pt-1.5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.stack.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="font-handwritten text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="font-handwritten text-[10px] font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Note <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Note */}
        <div className="pt-2 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between font-handwritten text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-bold shrink-0">
          <span>6 PROJECTS LOGGED</span>
          <span className="text-blue-600 dark:text-blue-400">
            Click sticky note card for breakdown
          </span>
        </div>
      </div>

      {/* Project Notebook Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center pt-16 sm:pt-24 pb-6 px-3"
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
