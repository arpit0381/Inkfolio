"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePen, TOTAL_PAGES, PAGE_TITLES } from "@/context/PenContext";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

import ThreeDOrbitController from "@/components/notebook/ThreeDOrbitController";

interface FlipBookProps {
  children: React.ReactNode[];
}

export default function FlipBookContainer({ children }: FlipBookProps) {
  const { currentPage, nextPage, prevPage } = usePen();
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Keyboard Navigation: ArrowLeft & ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger page flip if user is typing in form inputs
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  // Touch Swipe Navigation for Mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const handleNext = () => {
    if (currentPage < TOTAL_PAGES) {
      setDirection("next");
      nextPage();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection("prev");
      prevPage();
    }
  };

  const activeChild = children[currentPage];

  // 3D Page Flip & Desk Entrance Motion Variants
  const pageVariants: Variants = {
    enter: (dir: "next" | "prev") =>
      currentPage === 0
        ? {
            rotateX: 20,
            rotateY: -12,
            scale: 0.9,
            opacity: 0,
            y: 40,
          }
        : {
            rotateY: dir === "next" ? 50 : -50,
            opacity: 0,
            scale: 0.98,
          },
    center: {
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: currentPage === 0 ? 0.75 : 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-[calc(100vh-70px)] pt-16 sm:pt-20 pb-6 px-1.5 sm:px-6 flex flex-col justify-between items-center select-none"
    >
      {/* 3D Fixed Uniform Equal-Sized Notebook Container with 360° Free Orbit & Scale Controller */}
      <ThreeDOrbitController>
        <div className="w-full max-w-4xl mx-auto my-auto h-[530px] sm:h-[640px] relative [perspective:1400px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              id="active-notebook-sheet"
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformOrigin: direction === "next" ? "left center" : "right center" }}
              className="w-full h-full shadow-2xl flex flex-col relative rounded-lg"
            >
              {activeChild}
            </motion.div>
          </AnimatePresence>
        </div>
      </ThreeDOrbitController>

      {/* Clean Mobile-Responsive Page Turner Bar */}
      <div className="mt-3 w-full max-w-4xl mx-auto bg-[#FFFDF8] dark:bg-[#1A1A1E] border-2 border-stone-300 dark:border-stone-700/80 rounded-full px-3 sm:px-4 py-2 shadow-lg flex items-center justify-between font-handwritten shrink-0">
        {/* Previous Page Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border transition-all text-xs sm:text-sm font-bold ${
            currentPage === 0
              ? "opacity-30 border-stone-300 dark:border-stone-800 text-stone-400 cursor-not-allowed"
              : "bg-white dark:bg-[#242429] border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:border-blue-500 hover:scale-105 shadow-xs"
          }`}
          title="Previous Page (Left Arrow)"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
          <span>{currentPage === 0 ? "Cover" : "Prev"}</span>
        </button>

        {/* Current Page Title & Number Indicator */}
        <div className="flex items-center gap-1.5 text-center px-1">
          <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <div className="text-[11px] sm:text-sm font-bold text-stone-900 dark:text-stone-100">
            {currentPage === 0 ? (
              <span className="text-amber-600 dark:text-amber-400">Front Cover • Tap Next</span>
            ) : currentPage === TOTAL_PAGES ? (
              <span className="text-amber-600 dark:text-amber-400">Back Cover • Re-Open</span>
            ) : (
              <>
                <span className="text-blue-600 dark:text-blue-400">P.{currentPage}/10</span>
                <span className="mx-1 opacity-40">•</span>
                <span className="truncate max-w-[120px] sm:max-w-none inline-block align-bottom">{PAGE_TITLES[currentPage]}</span>
              </>
            )}
          </div>
        </div>

        {/* Next Page Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === TOTAL_PAGES}
          className={`flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border transition-all text-xs sm:text-sm font-bold ${
            currentPage === TOTAL_PAGES
              ? "opacity-30 border-stone-300 dark:border-stone-800 text-stone-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 border-blue-600 text-white hover:scale-105 shadow-md"
          }`}
          title="Next Page (Right Arrow)"
        >
          <span>{currentPage === 0 ? "Open" : "Next"}</span>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}
