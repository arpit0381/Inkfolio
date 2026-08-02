# Inkfolio · Arpit Bajpai

## Mission
Create implementation-ready, token-driven UI guidance for Inkfolio · Arpit Bajpai that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: Inkfolio · Arpit Bajpai
- URL: https://ink-folio-craft.base44.app/
- Audience: developers and technical teams
- Product surface: dashboard web app

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Patrick Hand`, `font.family.stack=Patrick Hand, cursive`, `font.size.base=18px`, `font.weight.base=400`, `font.lineHeight.base=28.8px`
- Typography scale: `font.size.xs=10px`, `font.size.sm=12px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=24px`, `font.size.4xl=30px`
- Color palette: `color.text.primary=#e5e7eb`, `color.text.secondary=#93c5fd`, `color.text.tertiary=#9ca3af`, `color.text.inverse=#1c1c1c`, `color.surface.base=#000000`, `color.surface.muted=#e0d27a`, `color.surface.raised=#1a1a1a`, `color.border.default=#383838`, `color.border.muted=rgb(229, 231, 235) rgb(229, 231, 235) color(srgb 0.576471 0.772549 0.992157 / 0.6)`, `color.border.strong=#f87171`
- Spacing scale: `space.1=2px`, `space.2=4px`, `space.3=8px`, `space.4=9.6px`, `space.5=10px`, `space.6=12px`, `space.7=16px`, `space.8=20px`
- Radius/shadow/motion tokens: `radius.xs=2.4px`, `radius.sm=5px`, `radius.md=9999px` | `shadow.1=rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgba(0, 0, 0, 0.28) 0px 10px 22px -8px`, `shadow.2=color(srgb 0.972549 0.443137 0.443137 / 0.28) 3px 3px 0px 0px`, `shadow.3=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | `motion.duration.instant=120ms`, `motion.duration.fast=150ms`, `motion.duration.normal=200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: buttons (57), links (5), lists (3), inputs (2), cards (2), navigation (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
