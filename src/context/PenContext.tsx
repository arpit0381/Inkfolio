"use client";

import React, { createContext, useContext, useState } from "react";

export type PenType = "blue" | "red" | "black" | "yellow";

export const TOTAL_PAGES = 9; // Pages 0 (Cover) to 9 (Contact)

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
  9: "Contact & Closing Note",
};

interface PenContextType {
  penType: PenType;
  setPenType: (pen: PenType) => void;
  penColor: string;
  isNotebookOpened: boolean;
  openNotebook: () => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const PenContext = createContext<PenContextType | undefined>(undefined);

export function PenProvider({ children }: { children: React.ReactNode }) {
  const [penType, setPenType] = useState<PenType>("blue");
  const [currentPage, setCurrentPage] = useState(0); // Starts at Cover Page 0

  const getPenColor = (type: PenType) => {
    switch (type) {
      case "blue":
        return "#2563EB";
      case "red":
        return "#DC2626";
      case "black":
        return "#111111";
      case "yellow":
        return "#EAB308";
      default:
        return "#2563EB";
    }
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

  return (
    <PenContext.Provider
      value={{
        penType,
        setPenType,
        penColor: getPenColor(penType),
        isNotebookOpened: currentPage > 0,
        openNotebook,
        currentPage,
        setCurrentPage: setPage,
        nextPage,
        prevPage,
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
