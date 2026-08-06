"use client";

import React, { useState, useEffect } from "react";
import { usePen, PenType } from "@/context/PenContext";
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
} from "lucide-react";
import { triggerCoffeeSpill } from "@/components/notebook/CoffeeSpillOverlay";
import { set3DOrbitState } from "@/components/notebook/ThreeDOrbitController";

interface HeaderProps {
  onToggleCoffee?: () => void;
  onSharpenPencil?: () => void;
}

export default function NotebookHeader({
  onToggleCoffee,
  onSharpenPencil,
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
  } = usePen();

  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPenMenu, setShowPenMenu] = useState(false);
  const [show3DBar, setShow3DBar] = useState(false);
  const [isOrbitActive, setIsOrbitActive] = useState(false);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [scale, setScale] = useState(1);

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
          ? "bg-[#FFFDF8]/95 dark:bg-[#161618]/95 backdrop-blur-md border-b border-stone-300 dark:border-stone-800 shadow-xs py-2.5"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Notebook Brand Stamp */}
        <button
          onClick={() => setCurrentPage(1)}
          className="flex items-center gap-2 group font-heading font-bold text-xl md:text-2xl text-stone-900 dark:text-stone-50 tracking-wide text-left"
        >
          <span className="w-9 h-9 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:rotate-12 transition-transform">
            <PenTool className="w-5 h-5" />
          </span>
          <span className="relative">
            Inkfolio{" "}
            <span className="text-xs font-handwritten text-red-600 dark:text-red-400 ml-1 font-bold">
              v1.0
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </span>
        </button>

        {/* Actions & Pen Selector */}
        <div className="flex items-center gap-2">
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
            <span className="hidden sm:inline">
              {isDrawingMode ? "Write Mode" : "Read Mode"}
            </span>
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
              <span className="hidden sm:inline capitalize">{penType} Pen</span>
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
            className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-950 text-amber-800 dark:text-amber-400 hover:scale-110 transition-all active:scale-95"
          >
            <Coffee className="w-5 h-5 animate-pulse" />
          </button>

          {/* 3D Desk Studio Toggle Button */}
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
            <span className="hidden sm:inline">3D Studio</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#202024] text-stone-900 dark:text-stone-100 hover:border-blue-500 font-handwritten text-sm font-bold transition-all shadow-2xs"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Paper Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">Dark Notebook</span>
              </>
            )}
          </button>
        </div>
      </div>

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
            onClick={() => {
              const newScale = Math.max(0.55, scale - 0.15);
              setScale(newScale);
              set3DOrbitState({ scale: newScale });
            }}
            className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 transition-colors border border-stone-300 dark:border-stone-700"
            title="Zoom Out (Chota)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-mono font-bold px-1 text-amber-700 dark:text-amber-400">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={() => {
              const newScale = Math.min(1.6, scale + 0.15);
              setScale(newScale);
              set3DOrbitState({ scale: newScale });
            }}
            className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 transition-colors border border-stone-300 dark:border-stone-700"
            title="Zoom In (Bada)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setIsOrbitActive(false);
              setIsAutoSpinning(false);
              setScale(1);
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
