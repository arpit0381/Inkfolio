<div align="center">

# ✍️ Inkfolio — Arpit Bajpai's Handwritten Developer Notebook

**India's Most Beautiful & Interactive Engineering Notebook Portfolio**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

[🌐 **GitHub Repository**](https://github.com/arpit0381/Inkfolio) • [📄 **Download Resume PDF**](/public/Arpit_Bajpai_Resume_ATS.pdf) • [📧 **Contact Arpit**](mailto:arpitbajpai038@gmail.com)

---

</div>

## 📖 Overview

**Inkfolio** is a state-of-the-art handwritten developer portfolio built for **Arpit Bajpai**, Full Stack Web & Mobile Developer. Inspired by Moleskine engineering journals, Apple-like micro-interactions, and Notion/Obsidian aesthetics, Inkfolio transforms a standard portfolio website into an immersive personal engineering logbook.

Every section feels written by hand with fountain pen strokes, coffee stains, sticky note project cards, paper clips, pushpins, and animated SVG checkmarks—all powered by **Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lenis, and GSAP**.

---

## ✨ Key Interactive Features

### 📖 1. 3D Moleskine Notebook Cover Intro
- A realistic leather/linen 3D notebook cover featuring golden embossed typography (*"ARPIT BAJPAI — VOL. 2026 OFFICIAL LOG"*), brass corners, and an elastic strap.
- Clicking **"CLICK TO OPEN NOTEBOOK"** triggers a 3D cover-flip rotation revealing Page #01.

### 🖊️ 2. Custom Fountain Pen Cursor System
- Default OS mouse cursor is completely hidden (`cursor: none !important`).
- An interactive fountain pen nib follows user movement with fluid HTML5 Canvas ink particle splashes on every click.

### 🎨 3. Live Pen Color Switcher
- Switch between **Blue Pen** (`#2563EB`), **Red Pen** (`#DC2626`), **Black Ink** (`#111111`), and **Yellow Highlighter** (`#EAB308`).
- The cursor nib color and click particle splashes immediately update to match the active pen!

### 📌 4. Sticky Note Corkboard Projects Desk
- Projects are presented as yellow sticky notes that lift with paper shadow physics on hover.
- Clicking any note unfolds a full notebook breakdown modal detailing **The Problem**, **The Solution**, **Tech Stack**, **Key Outcomes**, and **Live URLs**.

### ☑️ 5. Hand-Drawn SVG Skill Checkboxes
- Over 20+ verified technical skills from Arpit's resume formatted as notebook checklists with animated hand-drawn SVG checkmarks.

### 🎓 6. Academic Report Card & Pinned Board
- **Report Card**: Formal BCA degree record at **Pranveer Singh Institute of Technology (PSIT), Kanpur** with official stamped grade seals.
- **Pinned Board**: Metallic pushpins holding leadership roles for **Catalyst Crew**, **Logix Club**, **Energy Club**, and **Ignitia**.

### 🎮 7. Secret Easter Eggs
- **Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`)**: Notebook catches fire with burning paper ember animations.
- **Secret Type `"hello"`**: Activates an auto-writing ink pen greeting banner.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Vanilla CSS Design Tokens |
| **Typography** | Google Fonts (`Kalam`, `Patrick Hand`, `Caveat`, `JetBrains Mono`) |
| **Animations** | GSAP, Framer Motion, Lenis Smooth Scroll, Canvas Confetti |
| **Icons** | Lucide React, Custom SVG Notebook Stamps |

---

## 📂 Folder Structure

```
inkfolio/
├── public/
│   ├── Arpit_Bajpai_Resume_ATS.pdf # Official ATS Resume PDF
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css              # Paper textures, grid lines, leather textures, cursor rules
│   │   ├── layout.tsx               # Root layout, Google Fonts, SEO Metadata
│   │   └── page.tsx                 # Main Inkfolio Single Page Experience
│   ├── components/
│   │   ├── notebook/
│   │   │   ├── NotebookCoverIntro.tsx # 3D Leather Cover intro screen
│   │   │   ├── CustomInkCursor.tsx    # Fountain pen follower & ink particle canvas
│   │   │   ├── NotebookHeader.tsx     # Ribbon bookmark navigation & pen color selector
│   │   │   ├── PaperTextureOverlay.tsx# Lined paper, red margin line & coffee stains
│   │   │   ├── LenisScrollProvider.tsx# 60 FPS smooth scrolling
│   │   │   └── EasterEggs.tsx         # Konami code fire effect & auto-pen listener
│   │   ├── hero/
│   │   │   └── HeroSection.tsx        # Handwritten typewriter intro & interactive coffee cup
│   │   ├── about/
│   │   │   └── AboutSection.tsx       # Polaroid photo frame & journey timeline
│   │   ├── skills/
│   │   │   └── SkillsSection.tsx      # SVG hand-drawn animated checkbox list
│   │   ├── experience/
│   │   │   └── ExperienceSection.tsx  # Timeline pages (Sulax Solar, Posterwa)
│   │   ├── projects/
│   │   │   └── ProjectsSection.tsx    # Sticky note corkboard desk & modal detail
│   │   ├── leadership/
│   │   │   └── LeadershipSection.tsx  # Metallic pushpin pinned board
│   │   ├── education/
│   │   │   └── EducationSection.tsx   # PSIT Kanpur academic report card
│   │   ├── certifications/
│   │   │   └── CertificationsSection.tsx # Paper-clipped credentials
│   │   └── contact/
│   │       └── ContactSection.tsx     # Closing page & handwritten message form
│   ├── context/
│   │   └── PenContext.tsx             # State for pen colors & cover opening
│   └── lib/
│       ├── resumeData.ts              # Verified ATS resume details
│       └── utils.ts
└── package.json
```

---

## ⚡ Quickstart & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/arpit0381/Inkfolio.git
cd Inkfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive notebook.

### 4. Build for Production
```bash
npm run build
```

---

## 👤 Developer Details

**Arpit Bajpai**  
*Full Stack Web Developer | React.js • Next.js • Node.js • PostgreSQL • Flutter*  
📍 **Location:** Kanpur, UP, India  
📧 **Email:** [arpitbajpai038@gmail.com](mailto:arpitbajpai038@gmail.com)  
📱 **Phone:** +91 9235823255  
🌐 **Repository:** [https://github.com/arpit0381/Inkfolio](https://github.com/arpit0381/Inkfolio)

---

<div align="center">

*Designed like a notebook, built for production excellence.*

</div>