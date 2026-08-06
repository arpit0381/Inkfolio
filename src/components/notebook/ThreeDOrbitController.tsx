"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rotate3d,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Play,
  Pause,
  Move3d,
  Layers,
} from "lucide-react";

interface ThreeDOrbitControllerProps {
  children: React.ReactNode;
}

export default function ThreeDOrbitController({ children }: ThreeDOrbitControllerProps) {
  const [rotX, setRotX] = useState<number>(0);
  const [rotY, setRotY] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [isOrbitActive, setIsOrbitActive] = useState<boolean>(false);
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragStartRef = useRef<{ x: number; y: number; rotX: number; rotY: number }>({
    x: 0,
    y: 0,
    rotX: 0,
    rotY: 0,
  });

  const autoSpinRef = useRef<number | null>(null);

  // Auto 360 Spin Showcase Loop
  useEffect(() => {
    if (isAutoSpinning) {
      const spin = () => {
        setRotY((prev) => (prev + 0.75) % 360);
        autoSpinRef.current = requestAnimationFrame(spin);
      };
      autoSpinRef.current = requestAnimationFrame(spin);
    } else if (autoSpinRef.current) {
      cancelAnimationFrame(autoSpinRef.current);
    }

    return () => {
      if (autoSpinRef.current) {
        cancelAnimationFrame(autoSpinRef.current);
      }
    };
  }, [isAutoSpinning]);

  // Wheel Zoom Control (Scale in/out)
  const handleWheel = useCallback((e: WheelEvent) => {
    // Only zoom if Ctrl key is pressed or Orbit Mode active to prevent accidental page scroll interference
    if (e.ctrlKey || e.altKey || isOrbitActive) {
      e.preventDefault();
      const delta = e.deltaY * -0.0015;
      setScale((prev) => Math.min(1.8, Math.max(0.5, prev + delta)));
    }
  }, [isOrbitActive]);

  useEffect(() => {
    const container = document.getElementById("threed-orbit-wrapper");
    if (!container) return;
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // Pointer / Mouse Drag Handlers for 360° Orbit
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isOrbitActive) return;
    setIsDragging(true);
    if (isAutoSpinning) setIsAutoSpinning(false);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX,
      rotY,
    };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !isOrbitActive) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    // Pitch (X rotation) clamped between -75 and 75 deg, Yaw (Y rotation) free 360 deg
    const newRotX = Math.min(75, Math.max(-75, dragStartRef.current.rotX - dy * 0.45));
    const newRotY = (dragStartRef.current.rotY + dx * 0.55) % 360;

    setRotX(newRotX);
    setRotY(newRotY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    }
  };

  const handleReset = () => {
    setIsAutoSpinning(false);
    setIsOrbitActive(false);
    setRotX(0);
    setRotY(0);
    setScale(1);
  };

  const zoomIn = () => setScale((prev) => Math.min(1.8, prev + 0.15));
  const zoomOut = () => setScale((prev) => Math.max(0.5, prev - 0.15));

  return (
    <div
      id="threed-orbit-wrapper"
      className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-visible"
    >
      {/* Floating 3D Orbit & Zoom Controls Bar (Top Right) */}
      <div className="fixed top-16 right-4 sm:right-8 z-40 flex items-center gap-1.5 bg-white/95 dark:bg-[#202024]/95 backdrop-blur-md border-2 border-stone-300 dark:border-stone-700/80 p-1.5 rounded-full shadow-2xl font-handwritten text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-100">
        {/* Toggle 3D Orbit Drag Mode */}
        <button
          onClick={() => {
            setIsOrbitActive((prev) => !prev);
            if (isAutoSpinning) setIsAutoSpinning(false);
          }}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all border ${
            isOrbitActive
              ? "bg-amber-600 text-white border-amber-700 shadow-md animate-pulse"
              : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-amber-500"
          }`}
          title="Toggle 360° Drag Rotation Mode"
        >
          <Rotate3d className={`w-4 h-4 ${isOrbitActive ? "rotate-45 transition-transform" : ""}`} />
          <span className="hidden sm:inline">
            {isOrbitActive ? "360° Orbit ON" : "3D Drag Orbit"}
          </span>
        </button>

        {/* Auto 360 Spin Showcase */}
        <button
          onClick={() => {
            setIsAutoSpinning((prev) => !prev);
            if (!isOrbitActive) setIsOrbitActive(true);
          }}
          className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all border ${
            isAutoSpinning
              ? "bg-blue-600 text-white border-blue-700"
              : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-blue-500"
          }`}
          title="Auto 360° Showcase Spin"
        >
          {isAutoSpinning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
          <span className="hidden md:inline">Auto 360°</span>
        </button>

        {/* Zoom Out Button */}
        <button
          onClick={zoomOut}
          className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors border border-stone-300 dark:border-stone-700"
          title="Zoom Out (Chota)"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        {/* Scale Percentage Indicator */}
        <span className="text-[11px] font-mono font-bold px-1 text-amber-700 dark:text-amber-400">
          {Math.round(scale * 100)}%
        </span>

        {/* Zoom In Button */}
        <button
          onClick={zoomIn}
          className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors border border-stone-300 dark:border-stone-700"
          title="Zoom In (Bada)"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Reset View Button */}
        {(rotX !== 0 || rotY !== 0 || scale !== 1 || isOrbitActive) && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all shadow-xs"
            title="Reset to Flat View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
      </div>

      {/* 3D Orbit Mode Hint Badge when active */}
      <AnimatePresence>
        {isOrbitActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 z-40 bg-amber-500 text-stone-950 px-4 py-1 rounded-full text-xs font-handwritten font-bold shadow-xl border border-amber-300 flex items-center gap-2 pointer-events-none"
          >
            <Move3d className="w-4 h-4 animate-bounce" />
            <span>360° Orbit Active: Drag anywhere to rotate in 3D • Scroll wheel to Zoom</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Perspective Stage Container */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`w-full h-full flex items-center justify-center relative [perspective:1400px] transition-cursor ${
          isOrbitActive ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
        }`}
        style={{
          touchAction: isOrbitActive ? "none" : "auto",
        }}
      >
        <div
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`,
            transformStyle: "preserve-3d",
            willChange: "transform",
            transition: isDragging || isAutoSpinning ? "none" : "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="w-full h-full flex items-center justify-center"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
