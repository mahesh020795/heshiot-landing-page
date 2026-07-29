# Hesh IoT Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a conversion-focused Hesh IoT landing page grounded in the product's existing capabilities.

**Architecture:** A server-rendered one-page vinext site keeps delivery fast and dependency-light. The page component owns semantic content and the stylesheet owns the visual system, responsive layout, mock dashboard, and motion.

**Tech Stack:** React 19, vinext, TypeScript, CSS, Node test runner, Sites hosting

## Global Constraints

- Use only proven repository capabilities and the Hesh IoT name.
- Primary CTA links to `http://iot.rectronx.com`; GitHub CTA links to `https://github.com/mahesh020795/sparkiot`.
- Use no stock imagery or authored SVG illustrations in the page.
- Respect reduced-motion preferences and keyboard accessibility.
- Keep the site to one route without client state.

---

### Task 1: Rendered landing-page contract

**Files:** `tests/rendered-html.test.mjs`

**Interfaces:** Consumes the vinext worker output at `dist/server/index.js`; produces assertions for Hesh IoT content, links, sections, and starter removal.

- [ ] Replace the starter tests with a product contract that asserts the response is HTML, includes the Hesh IoT title and headline, primary and GitHub links, workflow, capability, pricing, developer, FAQ, and footer copy, and excludes starter markers.
- [ ] Run `npm test` and verify it fails because the starter output does not contain Hesh IoT.

### Task 2: Product page and visual system

**Files:** `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `public/favicon.svg`, `app/_sites-preview/*`, `package.json`, `package-lock.json`

**Interfaces:** Consumes native anchor navigation and CSS media queries; produces the complete server-rendered `/` route.

- [ ] Build the navigation, hero, proof strip, workflow, capability grid, Arduino example, pricing, FAQ, final CTA, and footer in `app/page.tsx`.
- [ ] Create the midnight/chartreuse design tokens, typography, product mockup, grids, card styling, responsive breakpoints, focus states, and reduced-motion behavior in `app/globals.css`.
- [ ] Set Hesh IoT metadata, replace the favicon, remove the preview directory, and remove `react-loading-skeleton`.
- [ ] Run `npm test` and verify all rendered-output assertions pass.

### Task 3: Validate and publish

**Files:** `.openai/hosting.json`

**Interfaces:** Consumes the committed vinext source and production build; produces a saved and privately deployed Sites version.

- [ ] Run `npm run build`, `npm run lint`, and `node --test tests/rendered-html.test.mjs`; require zero failures.
- [ ] Commit the validated product source, docs, tests, and hosting metadata.
- [ ] Package the committed build, save it against the commit SHA, deploy privately, and poll until successful.

