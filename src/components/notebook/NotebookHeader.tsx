"use client";

import React, { useState, useEffect } from "react";
import { usePen, PenType } from "@/context/PenContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  PenTool,
  Coffee,
  Palette,
  Check,
  Pencil,
  Eraser,
  Undo2,
  Box,
  Rotate3d,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Play,
  Pause,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { triggerCoffeeSpill } from "@/components/notebook/CoffeeSpillOverlay";
import { set3DOrbitState } from "@/components/notebook/ThreeDOrbitController";

interface HeaderProps {
  onToggleCoffee?: () => void;
  onSharpenPencil?: () => void;
}

export default function NotebookHeader({
  onToggleCoffee,
}: HeaderProps) {
  const {
    penType,
    setPenType,
    penColor,
    currentPage,
    setCurrentPage,
    isDrawingMode,
    setIsDrawingMode,
    strokes,
    clearDrawings,
    undoLastStroke,
    scale,
    zoomIn,
    zoomOut,
    resetZoom,
  } = usePen();

  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPenMenu, setShowPenMenu] = useState(false);
  const [show3DBar, setShow3DBar] = useState(false);
  const [isOrbitActive, setIsOrbitActive] = useState(false);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (currentPage > 0) {
      setShow3DBar(false);
      setIsOrbitActive(false);
      setIsAutoSpinning(false);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const penOptions: { type: PenType; label: string; color: string }[] = [
    { type: "blue", label: "Blue Pen", color: "#2563EB" },
    { type: "red", label: "Red Pen", color: "#DC2626" },
    { type: "black", label: "Black Ink", color: "#111111" },
    { type: "yellow", label: "Highlighter", color: "#EAB308" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFDF8]/95 dark:bg-[#161618]/95 backdrop-blur-md border-b border-stone-300 dark:border-stone-800 shadow-xs py-2"
          : "bg-transparent py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Notebook Brand Stamp */}
        <button
          onClick={() => setCurrentPage(1)}
          className="flex items-center gap-1.5 sm:gap-2 group font-heading font-bold text-lg sm:text-xl md:text-2xl text-stone-900 dark:text-stone-50 tracking-wide text-left shrink-0"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:rotate-12 transition-transform">
            <PenTool className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          <span className="relative">
            Inkfolio{" "}
            <span className="text-[10px] sm:text-xs font-handwritten text-red-600 dark:text-red-400 ml-0.5 font-bold">
              v1.0
            </span>
          </span>
        </button>

        {/* DESKTOP TOOLBAR (md and above) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Write Mode Toggle Button */}
          <button
            onClick={() => setIsDrawingMode((prev) => !prev)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-handwritten font-bold transition-all shadow-2xs ${
              isDrawingMode
                ? "bg-blue-600 text-white border-blue-700 dark:bg-blue-600 dark:border-blue-500 shadow-sm"
                : "bg-white dark:bg-[#202024] border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-blue-500"
            }`}
            title="Toggle Notebook Hand-Writing / Drawing"
          >
            <Pencil className={`w-3.5 h-3.5 ${isDrawingMode ? "text-white" : "text-stone-500"}`} />
            <span>{isDrawingMode ? "Write Mode" : "Read Mode"}</span>
            <span
              className={`w-2 h-2 rounded-full ${
                isDrawingMode ? "bg-emerald-400 animate-pulse" : "bg-stone-400/50"
              }`}
            />
          </button>

          {/* Pen Color Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPenMenu((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] text-stone-900 dark:text-stone-100 hover:border-blue-500 font-handwritten text-sm font-bold transition-all shadow-2xs"
              title="Change Active Pen Color"
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-white/50"
                style={{ backgroundColor: penColor }}
              />
              <span className="capitalize">{penType} Pen</span>
              <Palette className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </button>

            {/* Pen Options Popup */}
            {showPenMenu && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#202024] border-2 border-stone-300 dark:border-stone-700 rounded-lg p-2 shadow-xl z-50 font-handwritten text-sm animate-in fade-in zoom-in-95 duration-150">
                <div className="text-xs text-stone-500 dark:text-stone-400 px-2 py-1 uppercase font-bold border-b border-stone-200 dark:border-stone-800 mb-1">
                  Select Ink Pen:
                </div>
                {penOptions.map((opt) => (
                  <button
                    key={opt.type}
                    onClick={() => {
                      setPenType(opt.type);
                      setIsDrawingMode(true);
                      setShowPenMenu(false);
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-400"
                        style={{ backgroundColor: opt.color }}
                      />
                      <span>{opt.label}</span>
                    </div>
                    {penType === opt.type && (
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Undo & Eraser Buttons (Visible when ink strokes exist) */}
          {strokes.length > 0 && (
            <div className="flex items-center gap-1">
              <button
                onClick={undoLastStroke}
                className="p-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] text-stone-700 dark:text-stone-300 hover:text-blue-600 transition-colors"
                title="Undo Last Stroke"
              >
                <Undo2 className="w-4 h-4" />
              </button>
              <button
                onClick={clearDrawings}
                className="p-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] text-stone-700 dark:text-stone-300 hover:text-red-600 transition-colors"
                title="Clear All Ink Drawings"
              >
                <Eraser className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Coffee Mug Quick Trigger */}
          <button
            onClick={(e) => {
              if (onToggleCoffee) onToggleCoffee();
              triggerCoffeeSpill(e.clientX, e.clientY);
            }}
            title="Spill Coffee onto Notebook!"
            className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-950 text-amber-800 dark:text-amber-400 hover:scale-110 transition-all active:scale-95 border border-amber-300 dark:border-amber-700/60 bg-white dark:bg-[#202024]"
          >
            <Coffee className="w-4 h-4 animate-pulse" />
          </button>

          {/* 3D Desk Studio Toggle Button (Visible only on Cover Page 0) */}
          {currentPage === 0 && (
            <button
              onClick={() => setShow3DBar((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-handwritten text-sm font-bold transition-all shadow-2xs ${
                show3DBar || isOrbitActive
                  ? "bg-amber-600 text-white border-amber-700 shadow-sm"
                  : "bg-white dark:bg-[#202024] border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:border-amber-500"
              }`}
              title="Toggle 3D Desk View Controls"
            >
              <Box className="w-4 h-4 text-amber-500" />
              <span>3D Studio</span>
            </button>
          )}

          {/* Persistent Notebook Zoom Controller (Visible on ALL pages) */}
          <div className="flex items-center gap-1 border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] rounded-full px-2 py-1 shadow-2xs font-handwritten text-xs font-bold text-stone-800 dark:text-stone-100">
            <button
              onClick={zoomOut}
              className="p-1 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 transition-colors"
              title="Zoom Out (Chota)"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span
              onClick={resetZoom}
              className="px-1 text-[11px] font-mono text-amber-700 dark:text-amber-400 cursor-pointer hover:underline"
              title="Click to Reset Zoom (100%)"
            >
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-1 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-blue-600 transition-colors"
              title="Zoom In (Bada)"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] text-stone-900 dark:text-stone-100 hover:border-blue-500 font-handwritten text-sm font-bold transition-all shadow-2xs"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Paper Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600" />
                <span>Dark Notebook</span>
              </>
            )}
          </button>
        </div>

        {/* MOBILE COMPACT HEADER CONTROLS (< md screens) */}
        <div className="flex md:hidden items-center gap-1.5">
          {/* Quick Coffee Spill Icon */}
          <button
            onClick={(e) => {
              if (onToggleCoffee) onToggleCoffee();
              triggerCoffeeSpill(e.clientX, e.clientY);
            }}
            className="p-1.5 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300"
            title="Spill Coffee"
          >
            <Coffee className="w-4 h-4" />
          </button>

          {/* Quick Zoom Controller Pill */}
          <div className="flex items-center gap-0.5 border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] rounded-full px-1.5 py-0.5 font-handwritten text-[11px] font-bold text-stone-800 dark:text-stone-100">
            <button onClick={zoomOut} className="p-0.5 text-stone-600 dark:text-stone-400">
              <ZoomOut className="w-3 h-3" />
            </button>
            <span onClick={resetZoom} className="px-0.5 font-mono text-[10px] text-amber-700 dark:text-amber-400">
              {Math.round(scale * 100)}%
            </span>
            <button onClick={zoomIn} className="p-0.5 text-stone-600 dark:text-stone-400">
              <ZoomIn className="w-3 h-3" />
            </button>
          </div>

          {/* Quick Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] text-stone-800 dark:text-stone-100"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>

          {/* Mobile All Controls Drawer Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`p-1.5 rounded-full border transition-all ${
              isMobileMenuOpen
                ? "bg-blue-600 text-white border-blue-700"
                : "bg-white dark:bg-[#202024] border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-100"
            }`}
            title="All Mobile Controls"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
          </button>
        </div>
      </div>

      {/* MOBILE ALL CONTROLS POPUP DRAWER (< md screens) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-md mx-auto mt-2 px-3 font-handwritten"
          >
            <div className="bg-white/95 dark:bg-[#1E1E22]/95 backdrop-blur-xl border-2 border-stone-300 dark:border-stone-700 rounded-2xl p-3.5 shadow-2xl space-y-3 font-bold text-xs text-stone-900 dark:text-stone-100">
              
              {/* Section 1: Notebook Mode */}
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                <span className="text-stone-500 dark:text-stone-400 uppercase text-[10px] tracking-wider">
                  Notebook Mode:
                </span>
                <button
                  onClick={() => setIsDrawingMode((prev) => !prev)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                    isDrawingMode
                      ? "bg-blue-600 text-white border-blue-700"
                      : "bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  }`}
                >
                  <Pencil className="w-3.5 h-3.5" />
                  <span>{isDrawingMode ? "Write Mode Active" : "Read Mode Active"}</span>
                </button>
              </div>

              {/* Section 2: Pen Colors */}
              <div className="space-y-1.5 border-b border-stone-200 dark:border-stone-800 pb-2">
                <span className="text-stone-500 dark:text-stone-400 uppercase text-[10px] tracking-wider block">
                  Select Ink Pen Color:
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {penOptions.map((opt) => (
                    <button
                      key={opt.type}
                      onClick={() => {
                        setPenType(opt.type);
                        setIsDrawingMode(true);
                      }}
                      className={`flex items-center gap-2 p-1.5 rounded-lg border transition-all ${
                        penType === opt.type
                          ? "bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-700 dark:text-blue-300"
                          : "bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-400 shrink-0"
                        style={{ backgroundColor: opt.color }}
                      />
                      <span className="truncate">{opt.label}</span>
                      {penType === opt.type && <Check className="w-3.5 h-3.5 ml-auto text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 3: Interactive Features */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-stone-200 dark:border-stone-800 pb-2">
                {/* Coffee Spill */}
                <button
                  onClick={(e) => {
                    if (onToggleCoffee) onToggleCoffee();
                    triggerCoffeeSpill(e.clientX, e.clientY);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700"
                >
                  <Coffee className="w-3.5 h-3.5 text-amber-700" />
                  <span>Spill Coffee ☕</span>
                </button>

                {/* 3D Studio (Cover Page 0) */}
                {currentPage === 0 && (
                  <button
                    onClick={() => {
                      setShow3DBar((prev) => !prev);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-600 text-white border border-amber-700"
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D Studio 📦</span>
                  </button>
                )}

                {/* Eraser / Undo */}
                {strokes.length > 0 && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={undoLastStroke}
                      className="p-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800"
                      title="Undo"
                    >
                      <Undo2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={clearDrawings}
                      className="p-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                      title="Clear"
                    >
                      <Eraser className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Section 4: Zoom Controls */}
              <div className="flex items-center justify-between">
                <span className="text-stone-500 dark:text-stone-400 uppercase text-[10px] tracking-wider">
                  Notebook Zoom:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    className="px-2 py-1 rounded bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span onClick={resetZoom} className="font-mono text-amber-700 dark:text-amber-400">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="px-2 py-1 rounded bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="px-2 py-1 rounded bg-stone-200 dark:bg-stone-700 text-[10px]"
                  >
                    Reset
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean Bottom-Right Floating 3D Controls Bar (Only shows when 3D Studio button is clicked) */}
      {show3DBar && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 bg-white/95 dark:bg-[#202024]/95 backdrop-blur-md border-2 border-stone-300 dark:border-stone-700/80 p-1.5 rounded-full shadow-2xl font-handwritten text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <button
            onClick={() => {
              const next = !isOrbitActive;
              setIsOrbitActive(next);
              if (isAutoSpinning) setIsAutoSpinning(false);
              set3DOrbitState({ isOrbitActive: next, isAutoSpinning: false });
            }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all border ${
              isOrbitActive
                ? "bg-amber-600 text-white border-amber-700 shadow-md"
                : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-amber-500"
            }`}
            title="Toggle 360° Drag Rotation"
          >
            <Rotate3d className="w-4 h-4" />
            <span>{isOrbitActive ? "360° Orbit ON" : "3D Drag Orbit"}</span>
          </button>

          <button
            onClick={() => {
              const next = !isAutoSpinning;
              setIsAutoSpinning(next);
              if (!isOrbitActive) setIsOrbitActive(true);
              set3DOrbitState({ isAutoSpinning: next, isOrbitActive: true });
            }}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all border ${
              isAutoSpinning
                ? "bg-blue-600 text-white border-blue-700"
                : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-blue-500"
            }`}
            title="Auto 360° Showcase Spin"
          >
            {isAutoSpinning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-blue-600" />}
            <span>Auto 360°</span>
          </button>

          <button
            onClick={zoomOut}
            className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 transition-colors border border-stone-300 dark:border-stone-700"
            title="Zoom Out (Chota)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-mono font-bold px-1 text-amber-700 dark:text-amber-400">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={zoomIn}
            className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 transition-colors border border-stone-300 dark:border-stone-700"
            title="Zoom In (Bada)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setIsOrbitActive(false);
              setIsAutoSpinning(false);
              resetZoom();
              set3DOrbitState({
                isOrbitActive: false,
                isAutoSpinning: false,
                rotX: 0,
                rotY: 0,
                scale: 1,
              });
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all shadow-xs"
            title="Reset View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      )}
    </header>
  );
}
