Product Requirements Document (PRD)
Inkfolio — Handwritten Portfolio Experience
Version: 1.0
Product Owner: Arpit Bajpai
Tech Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + GSAP + Lenis + Framer Motion + ShadCN UI
1. Vision

Create India's most beautiful handwritten developer portfolio, where the visitor feels like they are reading the personal notebook of a developer rather than browsing a website.

The website should combine the emotional feel of handwritten notes with premium Apple-style animations and smooth storytelling.

The objective is not simply to showcase projects but to tell Arpit Bajpai's story through immersive interactions.

2. Design Philosophy
Theme

A Developer's Notebook

Imagine opening someone's engineering notebook.

Every page contains

handwritten notes
sketches
highlighted words
coffee stains
paper folds
sticky notes
doodles
arrows
signatures
stamped dates

Instead of cards, everything looks written by hand.

3. Design Language
Inspiration

Apple

Linear

Notion

Obsidian

Sketchbook

Moleskine Journal

Paper Notebook

Color Palette

Background

#FDFBF7

Paper

#FFFDF8

Ink

#111111

Blue Pen

#2563EB

Red Marker

#DC2626

Pencil

#666666

Highlight Yellow

#FFF176
Typography

Primary

Patrick Hand

Secondary

Caveat

Code

JetBrains Mono

Headings

Kalam

Cursor

Custom Ink Pen

Whenever user clicks

Ink splash appears

Background

Notebook paper

Subtle paper texture

Moving grain

Random pencil marks

Smooth Scrolling

Use Lenis

Every section should feel floating.

Never abrupt.

Scrolling should feel like turning notebook pages.

Animation Stack

GSAP

Framer Motion

Lenis

SplitType

GSAP ScrollTrigger

4. Home Section

Hero opens like

Closed notebook

↓

Notebook opens

↓

First page appears

Handwritten

Hello,

I'm Arpit Bajpai.

Full Stack Developer.
Problem Solver.
Builder.
Dreamer.

Each word writes itself.

Like someone writing live.

Below

Hand-drawn arrow

↓

"Keep Scrolling"

Hero animation

Notebook opens

Paper folds

Ink spreads

Pen writes

Coffee cup appears

Sticky notes fall

5. About Me

Looks like diary page.

Top

About Me

written by pen.

Left

Polaroid image

Right

Handwritten paragraph.

Resume content should be used.

Professional Summary should be transformed into storytelling while keeping all factual details from the resume.

Below

Timeline drawn by hand.

6. Skills Section

Looks like notebook checklist.

Instead of progress bars

Hand-drawn checkboxes.

Example

☑ Next.js

☑ React

☑ TypeScript

☑ PostgreSQL

☑ MongoDB

☑ Node.js

☑ Flutter

☑ Python

☑ Git

☑ Linux

☑ REST APIs

☑ Tailwind

☑ Express

☑ Power BI

The complete skills list should come from the resume's Core Skills section.

Each tick animates while scrolling.

7. Experience

Notebook timeline.

Looks like

2024
↓

Sulax Solar

↓

Posterwa

↓

Today

Each company becomes a notebook page with handwritten summaries and achievements sourced from the resume, including the website development work at Sulax Solar and the Sales Captain role at Posterwa.

8. Projects

Looks like sticky notes.

Each project

Yellow sticky note.

Hover

Sticky lifts.

Click

Full notebook page opens.

Projects (from resume)

FormStuff
LifeReceipt
Sulax Solar Website
Om Power Solution
PSIT Ignitia 2K26 Website
ClubSphere

Each project should include:

Problem
Solution
Tech Stack
Live link (where available)
GitHub (if available)
Key outcomes

Base the project list and stacks on the resume.

9. Leadership

Looks like achievement certificates pinned to a board.

Include:

Founder & CEO — Catalyst Crew

Technical Head — Logix Club

Secretary — Energy Club

Joint Website Head — Ignitia

These roles should match the resume.

10. Education

Looks like report card.

BCA

PSIT

Handwritten marks

CGPA

Notebook stamp

Use only the education information present in the resume.

11. Certifications

Looks like printed certificates pasted into notebook.

Each certificate

Paper clip animation.

Use all certifications listed in the resume.

12. Contact

Looks like final notebook page.

Handwritten

Let's Build Something Amazing.

Then

Email

Phone

GitHub

LinkedIn

Portfolio

Information should match the resume contact details.

13. Easter Eggs

Konami Code

↓

Notebook catches fire

↓

Reload

Typing

"hello"

↓

Pen writes automatically

Coffee mug

↓

Steam animation

Click pencil

↓

It sharpens

Click paper

↓

Fold animation

Dark mode

↓

Black notebook

White ink

14. Animation Requirements

Hero

Notebook opening

Pen writing

Paper folding

Ink spreading

Sticky notes falling

Scroll reveal

Split text

Magnetic buttons

Cursor follower

Paper tilt

Handwritten stroke animation

Section transitions

Parallax

Hover physics

Page turn animation

Ink splash clicks

Everything should maintain 60 FPS.

15. Folder Structure
app/

components/
  notebook/
  hero/
  about/
  skills/
  projects/
  experience/
  leadership/
  certifications/
  contact/
  ui/

hooks/

lib/

styles/

public/
  papers/
  doodles/
  icons/
  textures/
  fonts/
  sounds/
16. Libraries
Next.js 16
React 19
TypeScript
Tailwind CSS v4
GSAP
GSAP ScrollTrigger
Lenis
Framer Motion
ShadCN UI
Lucide React
SplitType
clsx
class-variance-authority
17. Performance Goals
Lighthouse Score ≥ 95
First Contentful Paint < 1.5s
Fully Responsive
SEO Optimized
Accessible (WCAG)
Motion-safe fallbacks
Mobile-first design
18. Final User Experience

The visitor should feel like they found Arpit Bajpai's personal engineering notebook, flipping through pages filled with sketches, handwritten notes, real projects, leadership experiences, and technical achievements. Every scroll should reveal another chapter of the journey with premium Apple-like smoothness, while all factual content—skills, experience, projects, certifications, leadership, education, and contact information—remains faithful to the resume.

Target reaction: "This isn't just a portfolio—it's an unforgettable interactive story.