"use client";

import React, { useState } from "react";
import { PenProvider } from "@/context/PenContext";
import LenisScrollProvider from "@/components/notebook/LenisScrollProvider";
import CustomInkCursor from "@/components/notebook/CustomInkCursor";
import PaperTextureOverlay from "@/components/notebook/PaperTextureOverlay";
import NotebookHeader from "@/components/notebook/NotebookHeader";
import NotebookCoverIntro from "@/components/notebook/NotebookCoverIntro";
import FlipBookContainer from "@/components/notebook/FlipBookContainer";
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

        {/* Paper texture, grid lines, margin rules */}
        <PaperTextureOverlay />

        {/* Brand & Pen Toolbar Header */}
        <NotebookHeader
          onToggleCoffee={handleToggleCoffee}
          onSharpenPencil={handleSharpenPencil}
        />

        {/* 3D Interactive Flip Book Engine */}
        <main className="relative z-10">
          <FlipBookContainer>
            {/* Page 0: Leather Cover */}
            <NotebookCoverIntro />
            {/* Page 1: Hero Intro */}
            <HeroSection
              coffeeSteamActive={coffeeSteamActive}
              onToggleCoffee={handleToggleCoffee}
              pencilSharpening={pencilSharpening}
              onSharpenPencil={handleSharpenPencil}
            />
            {/* Page 2: About */}
            <AboutSection />
            {/* Page 3: Skills */}
            <SkillsSection />
            {/* Page 4: Experience */}
            <ExperienceSection />
            {/* Page 5: Projects Desk */}
            <ProjectsSection />
            {/* Page 6: Leadership */}
            <LeadershipSection />
            {/* Page 7: Education */}
            <EducationSection />
            {/* Page 8: Certifications */}
            <CertificationsSection />
            {/* Page 9: Contact */}
            <ContactSection />
          </FlipBookContainer>
        </main>

        {/* Easter Egg Event Listener */}
        <EasterEggs />
      </LenisScrollProvider>
    </PenProvider>
  );
}
