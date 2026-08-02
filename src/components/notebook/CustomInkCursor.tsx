"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePen } from "@/context/PenContext";

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
  const { penColor } = usePen();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<InkParticle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("clickable"))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      createInkSplash(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [penColor]);

  const createInkSplash = (x: number, y: number) => {
    const count = 14 + Math.floor(Math.random() * 8);
    const newParticles: InkParticle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 4.5;
      newParticles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2 + Math.random() * 4.5,
        alpha: 1,
        color: penColor,
      });
    }

    particlesRef.current.push(...newParticles);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.02);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // light gravity
        p.alpha *= 0.93; // fade out

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Ink Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />

      {/* Floating Ink Nib / Custom Pen Cursor - ALWAYS VISIBLE */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-3px, -26px) scale(${isMouseDown ? 0.85 : isPointer ? 1.25 : 1})`,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Nib Top / Cap in active pen color */}
          <path
            d="M19.5 4.5L14 10L12 8L17.5 2.5C18.05 1.95 18.95 1.95 19.5 2.5C20.05 3.05 20.05 3.95 19.5 4.5Z"
            fill={penColor}
          />
          {/* Metallic Pen Body */}
          <path
            d="M12 8L4 16L3 21L8 20L16 12L12 8Z"
            fill="#1E293B"
            className="dark:fill-slate-100"
          />
          {/* Active Ink Breather Hole */}
          <circle cx="7" cy="17" r="1.2" fill={penColor} />
          {/* Active Ink Slit */}
          <path d="M7 17L3 21" stroke={penColor} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
}
