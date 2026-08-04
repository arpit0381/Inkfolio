"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePen, DrawnStroke, DrawnPoint } from "@/context/PenContext";

interface InkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export default function CustomInkCursor() {
  const {
    penColor,
    penWidth,
    penAlpha,
    isDrawingMode,
    currentPage,
    strokes,
    addStroke,
  } = usePen();

  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<InkParticle[]>([]);
  const activePointsRef = useRef<DrawnPoint[]>([]);
  const isDrawingActiveRef = useRef<boolean>(false);

  // Splash particle creator
  const createInkSplash = useCallback(
    (x: number, y: number) => {
      const count = 12 + Math.floor(Math.random() * 6);
      const newParticles: InkParticle[] = [];

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.0 + Math.random() * 4.0;
        newParticles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.8 + Math.random() * 3.5,
          alpha: 1,
          color: penColor,
        });
      }

      particlesRef.current.push(...newParticles);
    },
    [penColor]
  );

  // Pointer & Mouse Handlers for Zero-Lag Ink Drawing
  useEffect(() => {
    const isInteractive = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      return (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        !!target.closest("button") ||
        !!target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable")
      );
    };

    const handlePointerMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      setIsPointer(isInteractive(target));

      if (isDrawingActiveRef.current) {
        activePointsRef.current.push({ x: e.clientX, y: e.clientY });
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Only process primary mouse button / touch contact
      if (e.button !== 0 && e.pointerType === "mouse") return;

      const target = e.target as HTMLElement | null;
      const interactive = isInteractive(target);

      setIsMouseDown(true);
      createInkSplash(e.clientX, e.clientY);

      if (isDrawingMode && !interactive) {
        isDrawingActiveRef.current = true;
        activePointsRef.current = [{ x: e.clientX, y: e.clientY }];
      }
    };

    const handlePointerUp = () => {
      setIsMouseDown(false);

      if (isDrawingActiveRef.current && activePointsRef.current.length > 0) {
        const newStroke: DrawnStroke = {
          id: Math.random().toString(36).substring(2, 9),
          points: [...activePointsRef.current],
          color: penColor,
          width: penWidth,
          alpha: penAlpha,
          page: currentPage,
        };
        addStroke(newStroke);
      }

      isDrawingActiveRef.current = false;
      activePointsRef.current = [];
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDrawingMode, currentPage, penColor, penWidth, penAlpha, createInkSplash, addStroke]);

  // Canvas 60fps/120fps Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const drawStrokePath = (
      points: DrawnPoint[],
      color: string,
      width: number,
      alpha: number
    ) => {
      if (!points || points.length === 0) return;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (points.length === 1) {
        ctx.beginPath();
        ctx.arc(points[0].x, points[0].y, width / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const midX = (points[i].x + points[i + 1].x) / 2;
          const midY = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
        }

        ctx.lineTo(
          points[points.length - 1].x,
          points[points.length - 1].y
        );
        ctx.stroke();
      }
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render all saved strokes for current page
      for (const stroke of strokes) {
        drawStrokePath(stroke.points, stroke.color, stroke.width, stroke.alpha);
      }

      // 2. Render active stroke in real time
      if (isDrawingActiveRef.current && activePointsRef.current.length > 0) {
        drawStrokePath(
          activePointsRef.current,
          penColor,
          penWidth,
          penAlpha
        );
      }

      // 3. Render splash particles
      particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.02);
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.alpha *= 0.92;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId);
    };
  }, [strokes, penColor, penWidth, penAlpha]);

  return (
    <>
      {/* Fullscreen Interactive Canvas for Zero-Lag Drawing */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[90]"
      />

      {/* Floating Ink Nib / Custom Pen Cursor */}
      <div
        className="fixed pointer-events-none z-[100] transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-3px, -26px) scale(${
            isMouseDown ? 0.85 : isPointer ? 1.25 : 1
          })`,
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          <path
            d="M19.5 4.5L14 10L12 8L17.5 2.5C18.05 1.95 18.95 1.95 19.5 2.5C20.05 3.05 20.05 3.95 19.5 4.5Z"
            fill={penColor}
          />
          <path
            d="M12 8L4 16L3 21L8 20L16 12L12 8Z"
            fill="#1E293B"
            className="dark:fill-slate-100"
          />
          <circle cx="7" cy="17" r="1.2" fill={penColor} />
          <path
            d="M7 17L3 21"
            stroke={penColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
