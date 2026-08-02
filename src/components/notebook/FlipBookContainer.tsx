"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePen, TOTAL_PAGES, PAGE_TITLES } from "@/context/PenContext";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

interface FlipBookProps {
  children: React.ReactNode[];
}

export default function FlipBookContainer({ children }: FlipBookProps) {
  const { currentPage, setCurrentPage, nextPage, prevPage, isNotebookOpened } = usePen();
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Keyboard Navigation: ArrowLeft & ArrowRight
  useEffect(() => {
    if (!isNotebookOpened) return;

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
  }, [currentPage, isNotebookOpened]);

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
      // Swipe left -> Next Page
      handleNext();
    } else if (diff < -50) {
      // Swipe right -> Prev Page
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
    if (currentPage > 1) {
      setDirection("prev");
      prevPage();
    }
  };

  const activeChild = children[currentPage - 1];

  // 3D Page Flip Motion Variants
  const pageVariants: Variants = {
    enter: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? 45 : -45,
      opacity: 0,
      scale: 0.97,
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
      rotateY: dir === "next" ? -45 : 45,
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.35,
      },
    }),
  };

  if (!isNotebookOpened) return null;

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen pt-24 pb-28 px-2 sm:px-6 relative flex flex-col justify-between overflow-x-hidden"
    >
      {/* 3D Book Container */}
      <div className="w-full max-w-5xl mx-auto my-auto [perspective:1400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ transformOrigin: direction === "next" ? "left center" : "right center" }}
            className="w-full shadow-2xl"
          >
            {activeChild}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating 3D Page Turner Ribbon Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#FFFDF8]/95 dark:bg-[#1A1A1E]/95 backdrop-blur-md border-2 border-stone-300 dark:border-stone-700 rounded-full px-4 py-2 shadow-2xl flex items-center gap-3 sm:gap-6 font-handwritten select-none max-w-[95vw]">
        {/* Previous Page Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all text-sm sm:text-base font-bold ${
            currentPage === 1
              ? "opacity-30 border-stone-300 dark:border-stone-800 text-stone-400 cursor-not-allowed"
              : "bg-white dark:bg-[#242429] border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:border-blue-500 hover:scale-105 shadow-xs"
          }`}
          title="Previous Page (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
          <span className="hidden sm:inline">Prev Page</span>
        </button>

        {/* Current Page Title & Number Indicator */}
        <div className="flex items-center gap-2 text-center px-2">
          <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
            <span className="text-blue-600 dark:text-blue-400">Page {currentPage} of {TOTAL_PAGES}</span>
            <span className="mx-1 opacity-40">•</span>
            <span className="hidden md:inline">{PAGE_TITLES[currentPage]}</span>
          </div>
        </div>

        {/* Next Page Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === TOTAL_PAGES}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all text-sm sm:text-base font-bold ${
            currentPage === TOTAL_PAGES
              ? "opacity-30 border-stone-300 dark:border-stone-800 text-stone-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 border-blue-600 text-white hover:scale-105 shadow-md"
          }`}
          title="Next Page (Right Arrow)"
        >
          <span className="hidden sm:inline">Next Page</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
