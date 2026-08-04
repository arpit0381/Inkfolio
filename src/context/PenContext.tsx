"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PenType = "blue" | "red" | "black" | "yellow";

export const TOTAL_PAGES = 10; // Pages 0 (Front Cover) to 10 (Back Cover)

export const PAGE_TITLES: { [key: number]: string } = {
  0: "Notebook Cover",
  1: "Hero & Introduction",
  2: "About Me & Journey",
  3: "Technical Skillset",
  4: "Professional Experience",
  5: "Featured Projects Desk",
  6: "Leadership & Activities",
  7: "Academic Report Card",
  8: "Certifications & Credentials",
  9: "Contact Page",
  10: "Back Cover",
};

export interface DrawnPoint {
  x: number;
  y: number;
}

export interface DrawnStroke {
  id: string;
  points: DrawnPoint[];
  color: string;
  width: number;
  alpha: number;
  page: number;
}

interface PenContextType {
  penType: PenType;
  setPenType: (pen: PenType) => void;
  penColor: string;
  penWidth: number;
  penAlpha: number;
  isNotebookOpened: boolean;
  openNotebook: () => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  isDrawingMode: boolean;
  setIsDrawingMode: React.Dispatch<React.SetStateAction<boolean>>;
  strokes: DrawnStroke[];
  addStroke: (stroke: DrawnStroke) => void;
  clearDrawings: () => void;
  undoLastStroke: () => void;
}

const PenContext = createContext<PenContextType | undefined>(undefined);

export function PenProvider({ children }: { children: React.ReactNode }) {
  const [penType, setPenType] = useState<PenType>("blue");
  const [currentPage, setCurrentPage] = useState(0); // Starts at Cover Page 0
  const [isDrawingMode, setIsDrawingMode] = useState<boolean>(true);
  const [strokes, setStrokes] = useState<DrawnStroke[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const getPenColor = (type: PenType, dark: boolean) => {
    switch (type) {
      case "blue":
        return dark ? "#60A5FA" : "#2563EB";
      case "red":
        return dark ? "#F87171" : "#DC2626";
      case "black":
        return dark ? "#F3F4F6" : "#111111";
      case "yellow":
        return "#EAB308";
      default:
        return dark ? "#60A5FA" : "#2563EB";
    }
  };

  const getPenWidth = (type: PenType) => {
    return type === "yellow" ? 14 : 3.5;
  };

  const getPenAlpha = (type: PenType) => {
    return type === "yellow" ? 0.45 : 0.95;
  };

  const openNotebook = () => {
    setCurrentPage(1);
  };

  const setPage = (page: number) => {
    if (page >= 0 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const addStroke = (stroke: DrawnStroke) => {
    setStrokes((prev) => [...prev, stroke]);
  };

  const clearDrawings = () => {
    setStrokes([]);
  };

  const undoLastStroke = () => {
    setStrokes((prev) => prev.slice(0, -1));
  };

  return (
    <PenContext.Provider
      value={{
        penType,
        setPenType,
        penColor: getPenColor(penType, isDark),
        penWidth: getPenWidth(penType),
        penAlpha: getPenAlpha(penType),
        isNotebookOpened: currentPage > 0,
        openNotebook,
        currentPage,
        setCurrentPage: setPage,
        nextPage,
        prevPage,
        isDrawingMode,
        setIsDrawingMode,
        strokes,
        addStroke,
        clearDrawings,
        undoLastStroke,
      }}
    >
      {children}
    </PenContext.Provider>
  );
}

export function usePen() {
  const context = useContext(PenContext);
  if (!context) {
    throw new Error("usePen must be used within a PenProvider");
  }
  return context;
}
