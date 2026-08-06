"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Trash2, Sparkles } from "lucide-react";

export interface CoffeeStain {
  id: string;
  relX: number; // percentage inside paper (0-100%)
  relY: number; // percentage inside paper (0-100%)
  scale: number;
  rotation: number;
  variant: number;
  droplets: { dx: number; dy: number; r: number; opacity: number }[];
  timestamp: number;
}

interface PouringMug {
  id: string;
  startX: number; // starting viewport x (e.g. navbar icon)
  startY: number; // starting viewport y
  targetX: number; // landing viewport x (inside paper)
  targetY: number; // landing viewport y (inside paper)
}

interface SheetBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

// Helper function to trigger a spill from anywhere in the application
export function triggerCoffeeSpill(x?: number, y?: number) {
  if (typeof window !== "undefined") {
    const posX = x !== undefined ? x : window.innerWidth / 2;
    const posY = y !== undefined ? y : window.innerHeight / 2;
    window.dispatchEvent(
      new CustomEvent("inkfolio-coffee-spill", {
        detail: { x: posX, y: posY },
      })
    );
  }
}

export default function CoffeeSpillOverlay() {
  const [stains, setStains] = useState<CoffeeStain[]>([]);
  const [pouringMug, setPouringMug] = useState<PouringMug | null>(null);
  const [isWiping, setIsWiping] = useState(false);
  const [sheetBounds, setSheetBounds] = useState<SheetBounds | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Update notebook sheet bounds relative to viewport
  const updateSheetBounds = useCallback(() => {
    const sheetEl = document.getElementById("active-notebook-sheet");
    if (sheetEl) {
      const rect = sheetEl.getBoundingClientRect();
      setSheetBounds({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });
      return rect;
    }
    return null;
  }, []);

  useEffect(() => {
    updateSheetBounds();
    window.addEventListener("resize", updateSheetBounds);
    window.addEventListener("scroll", updateSheetBounds);
    return () => {
      window.removeEventListener("resize", updateSheetBounds);
      window.removeEventListener("scroll", updateSheetBounds);
    };
  }, [updateSheetBounds]);

  // Play realistic liquid splash sound using Web Audio API
  const playSplashSound = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(200, now + 0.15);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
    } catch {
      // Audio fallback
    }
  }, []);

  // Add coffee spill with mug gliding into active notebook page
  const addSpill = useCallback(
    (clickX: number, clickY: number) => {
      const rect = updateSheetBounds();
      if (!rect) return;

      const isInsideSheet =
        clickX >= rect.left &&
        clickX <= rect.right &&
        clickY >= rect.top &&
        clickY <= rect.bottom;

      let targetX: number;
      let targetY: number;

      if (isInsideSheet) {
        // Clicked directly on the paper sheet: spill at click location (with margin clamping)
        const marginX = Math.min(60, rect.width * 0.15);
        const marginY = Math.min(60, rect.height * 0.15);
        targetX = Math.max(rect.left + marginX, Math.min(rect.right - marginX, clickX));
        targetY = Math.max(rect.top + marginY, Math.min(rect.bottom - marginY, clickY));
      } else {
        // Clicked outside (e.g. Navbar icon): Target center-upper area of the book page!
        targetX = rect.left + rect.width * (0.35 + Math.random() * 0.3);
        targetY = rect.top + rect.height * (0.25 + Math.random() * 0.4);
      }

      // Calculate relative % inside the notebook sheet container
      const relX = ((targetX - rect.left) / rect.width) * 100;
      const relY = ((targetY - rect.top) / rect.height) * 100;

      const mugId = "mug-" + Date.now();
      setPouringMug({
        id: mugId,
        startX: clickX,
        startY: clickY,
        targetX,
        targetY,
      });

      // Play sound when mug arrives and spills
      setTimeout(() => {
        playSplashSound();
      }, 250);

      // Spawn stain inside notebook page after mug glides and tips over (~500ms)
      setTimeout(() => {
        const dropletsCount = 6 + Math.floor(Math.random() * 6);
        const droplets = Array.from({ length: dropletsCount }).map(() => {
          const angle = Math.random() * Math.PI * 2;
          const dist = 30 + Math.random() * 55;
          return {
            dx: Math.cos(angle) * dist,
            dy: Math.sin(angle) * dist,
            r: 2 + Math.random() * 4.5,
            opacity: 0.4 + Math.random() * 0.45,
          };
        });

        const newStain: CoffeeStain = {
          id: "stain-" + Date.now() + "-" + Math.random(),
          relX,
          relY,
          scale: 0.8 + Math.random() * 0.35,
          rotation: Math.floor(Math.random() * 360),
          variant: Math.floor(Math.random() * 3),
          droplets,
          timestamp: Date.now(),
        };

        setStains((prev) => [...prev, newStain]);

        setTimeout(() => {
          setPouringMug(null);
        }, 400);
      }, 500);
    },
    [playSplashSound, updateSheetBounds]
  );

  // Listen to custom spill events
  useEffect(() => {
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ x: number; y: number }>;
      if (customEvent.detail) {
        addSpill(customEvent.detail.x, customEvent.detail.y);
      }
    };

    window.addEventListener("inkfolio-coffee-spill", handleCustomEvent);
    return () => {
      window.removeEventListener("inkfolio-coffee-spill", handleCustomEvent);
    };
  }, [addSpill]);

  // Wipe / clean stains with napkin swipe
  const handleWipeStains = () => {
    setIsWiping(true);
    setTimeout(() => {
      setStains([]);
      setIsWiping(false);
    }, 600);
  };

  return (
    <>
      {/* Persistent Spilled Coffee Stains Layer - STRICTLY CLIPPED INSIDE NOTEBOOK PAGE */}
      {sheetBounds && (
        <div
          style={{
            position: "fixed",
            left: `${sheetBounds.left}px`,
            top: `${sheetBounds.top}px`,
            width: `${sheetBounds.width}px`,
            height: `${sheetBounds.height}px`,
          }}
          className="pointer-events-none z-20 overflow-hidden rounded-lg select-none"
        >
          {stains.map((stain) => (
            <motion.div
              key={stain.id}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: stain.scale, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: `${stain.relX}%`,
                top: `${stain.relY}%`,
                transform: `translate(-50%, -50%) rotate(${stain.rotation}deg)`,
              }}
              className="select-none mix-blend-multiply dark:mix-blend-normal dark:opacity-85"
            >
              {/* Main Coffee Spill & Ring SVG */}
              <svg
                width="220"
                height="220"
                viewBox="0 0 200 200"
                fill="none"
                className="drop-shadow-xs"
              >
                <defs>
                  {/* Coffee Fluid Radial Gradient */}
                  <radialGradient
                    id={`coffee-grad-${stain.id}`}
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="40%"
                    fy="40%"
                  >
                    <stop offset="0%" stopColor="#4A2912" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#6E3D19" stopOpacity="0.35" />
                    <stop offset="85%" stopColor="#8C5023" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#3B1E0A" stopOpacity="0.75" />
                  </radialGradient>

                  <radialGradient
                    id={`coffee-ring-${stain.id}`}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop offset="70%" stopColor="#4A2912" stopOpacity="0" />
                    <stop offset="88%" stopColor="#5E3314" stopOpacity="0.6" />
                    <stop offset="96%" stopColor="#301808" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#4A2912" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Variant 0: Coffee Mug Base Ring & Spill Stream */}
                {stain.variant === 0 && (
                  <g>
                    {/* Irregular Main Fluid Puddle */}
                    <path
                      d="M100 35 C135 30, 165 55, 160 95 C155 135, 130 165, 95 160 C60 155, 30 130, 35 90 C40 50, 65 40, 100 35 Z"
                      fill={`url(#coffee-grad-${stain.id})`}
                    />
                    {/* Outer Mug Ring Outline */}
                    <circle
                      cx="100"
                      cy="100"
                      r="58"
                      fill={`url(#coffee-ring-${stain.id})`}
                    />
                    <path
                      d="M 45 100 A 55 55 0 1 0 155 100 A 55 55 0 1 0 45 100"
                      stroke="#3E200C"
                      strokeWidth="2.5"
                      strokeOpacity="0.65"
                      strokeDasharray="18 6 35 4 12 8"
                    />
                    <path
                      d="M 54 100 A 46 46 0 1 0 146 100 A 46 46 0 1 0 54 100"
                      stroke="#5A3215"
                      strokeWidth="1.5"
                      strokeOpacity="0.4"
                      strokeDasharray="8 12 24 5"
                    />
                  </g>
                )}

                {/* Variant 1: Splattered Coffee Splash */}
                {stain.variant === 1 && (
                  <g>
                    <path
                      d="M95 25 C140 20, 175 60, 155 110 C140 150, 80 170, 45 140 C15 115, 25 65, 55 40 C70 28, 80 30, 95 25 Z"
                      fill={`url(#coffee-grad-${stain.id})`}
                    />
                    <path
                      d="M 95 25 Q 115 5, 125 0"
                      stroke="#4A2912"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeOpacity="0.5"
                    />
                    <path
                      d="M 155 110 Q 180 125, 195 130"
                      stroke="#4A2912"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeOpacity="0.5"
                    />
                    <circle
                      cx="95"
                      cy="95"
                      r="52"
                      fill={`url(#coffee-ring-${stain.id})`}
                    />
                  </g>
                )}

                {/* Variant 2: Double Coffee Ring Stain */}
                {stain.variant === 2 && (
                  <g>
                    <ellipse
                      cx="95"
                      cy="95"
                      rx="62"
                      ry="58"
                      fill={`url(#coffee-grad-${stain.id})`}
                    />
                    <ellipse
                      cx="95"
                      cy="95"
                      rx="58"
                      ry="54"
                      stroke="#3E200C"
                      strokeWidth="3"
                      strokeOpacity="0.75"
                      strokeDasharray="25 8 40 5 15 10"
                    />
                    <ellipse
                      cx="110"
                      cy="105"
                      rx="50"
                      ry="46"
                      stroke="#5A3215"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      strokeDasharray="12 10 30 6"
                    />
                  </g>
                )}

                {/* Coffee Droplets Splattered Around */}
                {stain.droplets.map((drop, idx) => (
                  <ellipse
                    key={idx}
                    cx={100 + drop.dx}
                    cy={100 + drop.dy}
                    rx={drop.r}
                    ry={drop.r * (0.8 + (idx % 3) * 0.15)}
                    fill="#4A2912"
                    fillOpacity={drop.opacity}
                  />
                ))}
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      {/* Animated Gliding Coffee Mug & Downward Pouring Liquid */}
      <AnimatePresence>
        {pouringMug && (
          <motion.div
            key={pouringMug.id}
            initial={{
              x: pouringMug.startX,
              y: pouringMug.startY,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              x: pouringMug.targetX,
              y: pouringMug.targetY - 35,
              opacity: 1,
              scale: 1.15,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: pouringMug.targetY + 20,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              transform: "translate(-50%, -100%)",
            }}
            className="z-50 pointer-events-none flex flex-col items-center"
          >
            {/* Tipping Coffee Cup Icon */}
            <motion.div
              animate={{ rotate: [0, -30, 50, 20] }}
              transition={{ duration: 0.55, times: [0, 0.25, 0.7, 1] }}
              className="p-3 bg-amber-900 text-amber-100 rounded-full shadow-2xl border-2 border-amber-500 relative"
            >
              <Coffee className="w-8 h-8 text-amber-200" />
              {/* Steam Particles */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1">
                <span className="w-1 h-3 bg-amber-300/80 rounded-full animate-bounce" />
                <span className="w-1 h-4 bg-amber-200/80 rounded-full animate-bounce delay-75" />
                <span className="w-1.5 h-2.5 bg-amber-300/80 rounded-full animate-bounce delay-150" />
              </div>
            </motion.div>

            {/* Downward Liquid Pour Stream */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 45, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="w-2.5 bg-gradient-to-b from-amber-900 via-amber-950 to-[#3B1E0A] rounded-b-full shadow-md"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Napkin Wipe Animation Effect overlay when cleaning */}
      {isWiping && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-y-0 w-full z-50 bg-gradient-to-r from-transparent via-amber-100/90 dark:via-stone-200/90 to-transparent pointer-events-none flex items-center justify-center"
        >
          <div className="bg-white/90 px-6 py-3 rounded-full shadow-2xl font-handwritten text-xl font-bold text-amber-900 border-2 border-amber-400 flex items-center gap-2">
            <span>🧻 Wiping Book Page Clean...</span>
          </div>
        </motion.div>
      )}

      {/* Floating Coffee Control Bar (Appears when stains exist) */}
      <AnimatePresence>
        {stains.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-white/95 dark:bg-[#202024]/95 backdrop-blur-md border-2 border-amber-700/60 dark:border-amber-600/60 p-1.5 pl-3 rounded-full shadow-xl font-handwritten text-xs sm:text-sm text-stone-800 dark:text-stone-100 font-bold"
          >
            <div className="flex items-center gap-1.5 text-amber-900 dark:text-amber-300">
              <Coffee className="w-4 h-4 text-amber-700 dark:text-amber-400 animate-pulse" />
              <span>
                {stains.length} Coffee Spill{stains.length > 1 ? "s" : ""} on Page
              </span>
            </div>

            <button
              onClick={() => triggerCoffeeSpill()}
              className="flex items-center gap-1 px-2.5 py-1 bg-amber-100 dark:bg-amber-900/60 hover:bg-amber-200 text-amber-900 dark:text-amber-200 rounded-full transition-all border border-amber-300 dark:border-amber-700"
              title="Spill More Coffee!"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spill More</span>
            </button>

            <button
              onClick={handleWipeStains}
              className="flex items-center gap-1 px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow-xs"
              title="Wipe Paper Clean"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Wipe Clean 🧻</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
