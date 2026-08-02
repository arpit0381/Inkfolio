"use client";

import React, { createContext, useContext, useState } from "react";

export type PenType = "blue" | "red" | "black" | "yellow";

interface PenContextType {
  penType: PenType;
  setPenType: (pen: PenType) => void;
  penColor: string;
  isNotebookOpened: boolean;
  openNotebook: () => void;
}

const PenContext = createContext<PenContextType | undefined>(undefined);

export function PenProvider({ children }: { children: React.ReactNode }) {
  const [penType, setPenType] = useState<PenType>("blue");
  const [isNotebookOpened, setIsNotebookOpened] = useState(false);

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
    setIsNotebookOpened(true);
  };

  return (
    <PenContext.Provider
      value={{
        penType,
        setPenType,
        penColor: getPenColor(penType),
        isNotebookOpened,
        openNotebook,
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
