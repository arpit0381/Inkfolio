"use client";

import React, { useState } from "react";
import { PenProvider } from "@/context/PenContext";
import LenisScrollProvider from "@/components/notebook/LenisScrollProvider";
import CustomInkCursor from "@/components/notebook/CustomInkCursor";
import PaperTextureOverlay from "@/components/notebook/PaperTextureOverlay";
import NotebookHeader from "@/components/notebook/NotebookHeader";
import NotebookCoverIntro from "@/components/notebook/NotebookCoverIntro";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import LeadershipSection from "@/components/leadership/LeadershipSection";
import EducationSection from "@/components/education/EducationSection";
import CertificationsSection from "@/components/certifications/CertificationsSection";
import ContactSection from "@/components/contact/ContactSection";
import EasterEggs from "@/components/notebook/EasterEggs";

export default function Home() {
  const [coffeeSteamActive, setCoffeeSteamActive] = useState(true);
  const [pencilSharpening, setPencilSharpening] = useState(false);

  const handleToggleCoffee = () => {
    setCoffeeSteamActive((prev) => !prev);
  };

  const handleSharpenPencil = () => {
    setPencilSharpening(true);
    setTimeout(() => {
      setPencilSharpening(false);
    }, 1000);
  };

  return (
    <PenProvider>
      <LenisScrollProvider>
        {/* Custom Pen Cursor Systemwide */}
        <CustomInkCursor />

        {/* 3D Leather Cover Intro Page */}
        <NotebookCoverIntro />

        {/* Paper texture, grid lines, margin rules */}
        <PaperTextureOverlay />

        {/* Ribbon Header Navigation */}
        <NotebookHeader
          onToggleCoffee={handleToggleCoffee}
          onSharpenPencil={handleSharpenPencil}
        />

        {/* Notebook Pages Content */}
        <main className="relative z-10 space-y-12">
          <HeroSection
            coffeeSteamActive={coffeeSteamActive}
            onToggleCoffee={handleToggleCoffee}
            pencilSharpening={pencilSharpening}
            onSharpenPencil={handleSharpenPencil}
          />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <LeadershipSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Easter Egg Event Listener */}
        <EasterEggs />
      </LenisScrollProvider>
    </PenProvider>
  );
}
