"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePen, TOTAL_PAGES, PAGE_TITLES } from "@/context/PenContext";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

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

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
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

  // 3D Page Flip Motion Variants
  const pageVariants: Variants = {
    enter: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
      },
    },
    exit: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
      },
    }),
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-[calc(100vh-80px)] pt-20 pb-10 px-2 sm:px-6 flex flex-col justify-between items-center select-none"
    >
      {/* 3D Fixed Uniform Equal-Sized Notebook Container */}
      <div className="w-full max-w-4xl mx-auto my-auto h-[580px] sm:h-[640px] relative [perspective:1400px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ transformOrigin: direction === "next" ? "left center" : "right center" }}
            className="w-full h-full shadow-2xl flex flex-col"
          >
            {activeChild}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Clean Page Turner Bar - Positioned BELOW the notebook (No Overlapping!) */}
      <div className="mt-4 w-full max-w-4xl mx-auto bg-[#FFFDF8] dark:bg-[#1A1A1E] border-2 border-stone-300 dark:border-stone-700/80 rounded-full px-4 py-2.5 shadow-lg flex items-center justify-between font-handwritten shrink-0">
        {/* Previous Page Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full border transition-all text-xs sm:text-sm font-bold ${
            currentPage === 0
              ? "opacity-30 border-stone-300 dark:border-stone-800 text-stone-400 cursor-not-allowed"
              : "bg-white dark:bg-[#242429] border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:border-blue-500 hover:scale-105 shadow-xs"
          }`}
          title="Previous Page (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{currentPage === 0 ? "Cover" : "Prev Page"}</span>
        </button>

        {/* Current Page Title & Number Indicator */}
        <div className="flex items-center gap-2 text-center px-2">
          <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
            {currentPage === 0 ? (
              <span className="text-amber-600 dark:text-amber-400">Notebook Cover • Press Next to Open</span>
            ) : (
              <>
                <span className="text-blue-600 dark:text-blue-400">Page {currentPage} of {TOTAL_PAGES}</span>
                <span className="mx-1.5 opacity-40">•</span>
                <span>{PAGE_TITLES[currentPage]}</span>
              </>
            )}
          </div>
        </div>

        {/* Next Page Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === TOTAL_PAGES}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full border transition-all text-xs sm:text-sm font-bold ${
            currentPage === TOTAL_PAGES
              ? "opacity-30 border-stone-300 dark:border-stone-800 text-stone-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 border-blue-600 text-white hover:scale-105 shadow-md"
          }`}
          title="Next Page (Right Arrow)"
        >
          <span>{currentPage === 0 ? "Open Book" : "Next Page"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
