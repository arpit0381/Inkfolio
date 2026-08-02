"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Flame, Sparkles, X, PenTool } from "lucide-react";

export default function EasterEggs() {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [helloTriggered, setHelloTriggered] = useState(false);
  const [typedBuffer, setTypedBuffer] = useState("");

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === konamiCode.length) {
          triggerKonamiFire();
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }

      const newBuffer = (typedBuffer + e.key.toLowerCase()).slice(-5);
      setTypedBuffer(newBuffer);
      if (newBuffer === "hello") {
        setHelloTriggered(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#DC2626", "#FFF176"],
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex, typedBuffer]);

  const triggerKonamiFire = () => {
    setKonamiActivated(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors: ["#DC2626", "#F97316", "#FACC15"],
    });

    setTimeout(() => {
      setKonamiActivated(false);
    }, 6000);
  };

  return (
    <>
      {/* Konami Burning Notebook Overlay */}
      {konamiActivated && (
        <div className="fixed inset-0 z-50 bg-red-950/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white text-center animate-in fade-in duration-300">
          <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center animate-bounce mb-4 shadow-2xl">
            <Flame className="w-16 h-16 text-yellow-300 animate-pulse" />
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-yellow-300 font-bold mb-2">
            EASTER EGG UNLOCKED!
          </h2>
          <p className="font-handwritten text-2xl max-w-lg mb-6">
            You typed the legendary Konami Code! The notebook caught fire with creative energy.
          </p>
          <button
            onClick={() => setKonamiActivated(false)}
            className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-red-950 font-heading font-bold text-xl rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Extinguish Fire & Return to Notebook
          </button>
        </div>
      )}

      {/* Secret "hello" banner */}
      {helloTriggered && (
        <div className="fixed bottom-6 right-6 z-40 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 p-4 rounded-lg shadow-2xl border-2 border-blue-500 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 max-w-sm">
          <Sparkles className="w-6 h-6 text-yellow-400 shrink-0" />
          <div className="font-handwritten text-base">
            <strong className="font-heading text-lg flex items-center gap-1 text-blue-400 dark:text-blue-600">
              <PenTool className="w-4 h-4" /> Pen Writes Automatically
            </strong>
            "Hello friend! Thanks for exploring Arpit's notebook easter eggs."
          </div>
          <button
            onClick={() => setHelloTriggered(false)}
            className="p-1 hover:bg-stone-800 dark:hover:bg-stone-200 rounded shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
