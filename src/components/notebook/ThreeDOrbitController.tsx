"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePen } from "@/context/PenContext";

interface ThreeDOrbitControllerProps {
  children: React.ReactNode;
}

// Global 3D Orbit dispatch helper
export function set3DOrbitState(options: {
  isOrbitActive?: boolean;
  isAutoSpinning?: boolean;
  rotX?: number;
  rotY?: number;
  scale?: number;
}) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("inkfolio-3d-orbit-change", {
        detail: options,
      })
    );
  }
}

export default function ThreeDOrbitController({ children }: ThreeDOrbitControllerProps) {
  const { currentPage, scale, setScale } = usePen();
  const [rotX, setRotX] = useState<number>(0);
  const [rotY, setRotY] = useState<number>(0);
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

  // AUTO-DISABLE 3D ORBIT WHEN BOOK OPENS (currentPage > 0) - PERSIST SCALE
  useEffect(() => {
    if (currentPage > 0) {
      setIsOrbitActive(false);
      setIsAutoSpinning(false);
      setRotX(0);
      setRotY(0);
    }
  }, [currentPage]);

  // Global event listener for 3D state changes from header / drawer
  useEffect(() => {
    const handle3DEvent = (e: Event) => {
      const custom = e as CustomEvent<{
        isOrbitActive?: boolean;
        isAutoSpinning?: boolean;
        rotX?: number;
        rotY?: number;
        scale?: number;
      }>;
      if (!custom.detail) return;
      if (custom.detail.isOrbitActive !== undefined) setIsOrbitActive(custom.detail.isOrbitActive);
      if (custom.detail.isAutoSpinning !== undefined) setIsAutoSpinning(custom.detail.isAutoSpinning);
      if (custom.detail.rotX !== undefined) setRotX(custom.detail.rotX);
      if (custom.detail.rotY !== undefined) setRotY(custom.detail.rotY);
      if (custom.detail.scale !== undefined) setScale(custom.detail.scale);
    };

    window.addEventListener("inkfolio-3d-orbit-change", handle3DEvent);
    return () => {
      window.removeEventListener("inkfolio-3d-orbit-change", handle3DEvent);
    };
  }, []);

  // Auto 360 Spin Showcase Loop
  useEffect(() => {
    if (isAutoSpinning && currentPage === 0) {
      const spin = () => {
        setRotY((prev) => (prev + 0.8) % 360);
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
  }, [isAutoSpinning, currentPage]);

  // Wheel Zoom Control (Works across all pages)
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (e.ctrlKey || e.altKey || isOrbitActive) {
        e.preventDefault();
        const delta = e.deltaY * -0.0015;
        setScale((prev) => Math.min(1.6, Math.max(0.55, prev + delta)));
      }
    },
    [isOrbitActive]
  );

  useEffect(() => {
    const container = document.getElementById("threed-orbit-wrapper");
    if (!container) return;
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // Pointer Drag Handlers for 360° Orbit
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isOrbitActive || currentPage > 0) return;
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
    if (!isDragging || !isOrbitActive || currentPage > 0) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    const newRotX = Math.min(70, Math.max(-70, dragStartRef.current.rotX - dy * 0.4));
    const newRotY = (dragStartRef.current.rotY + dx * 0.5) % 360;

    setRotX(newRotX);
    setRotY(newRotY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    }
  };

  return (
    <div
      id="threed-orbit-wrapper"
      className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-visible"
    >
      {/* 3D Perspective Stage Container */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`w-full h-full flex items-center justify-center relative [perspective:1400px] ${
          isOrbitActive && currentPage === 0
            ? isDragging
              ? "cursor-grabbing"
              : "cursor-grab"
            : ""
        }`}
        style={{
          touchAction: isOrbitActive && currentPage === 0 ? "none" : "auto",
        }}
      >
        <div
          style={{
            transform:
              currentPage === 0
                ? `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`
                : `scale(${scale})`,
            transformStyle: "preserve-3d",
            willChange: "transform",
            transition:
              isDragging || isAutoSpinning
                ? "none"
                : "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="w-full h-full flex items-center justify-center"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
