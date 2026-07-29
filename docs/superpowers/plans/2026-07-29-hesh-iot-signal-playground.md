# Hesh IoT Signal Playground Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Blynk-like landing page with a distinctive Signal Playground experience and publish it as the next private Sites version.

**Architecture:** Keep the one-page server-rendered vinext structure. `app/page.tsx` owns the editorial content and semantic flow; `app/globals.css` owns the palette, signal-machine illustration, responsive layout, and motion; the rendered HTML test protects the new identity.

**Tech Stack:** React 19, vinext, TypeScript, CSS, Node test runner, Sites hosting

## Global Constraints

- Use the headline “Your hardware has something to say.”
- Use cream, cobalt, coral, acid-lime, and ink; do not use a black-and-green dashboard aesthetic.
- Primary CTA is “Send your first signal” and links to `http://iot.rectronx.com`.
- Use no stock imagery or generated SVG illustration.
- State only capabilities proven in the repository.
- Respect keyboard navigation, mobile layouts, and reduced-motion preferences.

---

### Task 1: Redesign contract

**Files:**
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: server-rendered output from `dist/server/index.js`
- Produces: assertions that distinguish Signal Playground from the previous page

- [ ] **Step 1: Write the failing redesign test**

Assert the new headline and promise; sense, transport, understand, and act stages; four recipe names; “What works today”; “Template to live dashboard”; Try, Build, Ship, and Scale capacity labels; new CTA; and absence of the previous headline and section phrases.

- [ ] **Step 2: Verify the test fails**

Run `npm test`. Expected result: the new headline assertion fails against the current page.

### Task 2: Signal Playground page

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: native anchors, details elements, CSS media queries, and the existing product URLs
- Produces: a complete responsive one-page Hesh IoT marketing experience

- [ ] **Step 1: Replace the current semantic page structure**

Implement editorial navigation, asymmetric hero, signal journey, project recipes, current-capability statement, connection recipe, capacity pricing, FAQ, final CTA, and footer.

- [ ] **Step 2: Replace the visual system**

Implement the cream/cobalt/coral/acid palette, thick borders, offset shadows, signal rails, responsive grids, accessible focus styles, and reduced-motion rules.

- [ ] **Step 3: Update metadata**

Change the title and description to match “Your hardware has something to say” and the signal-first product promise.

- [ ] **Step 4: Verify the redesign test passes**

Run `npm test`. Expected result: one passing rendered-page test and zero failures.

### Task 3: Social preview and publishing

**Files:**
- Create: `public/og.png` if the generated card passes text inspection
- Modify: `app/layout.tsx` if the generated card passes inspection

**Interfaces:**
- Consumes: the approved Signal Playground palette and messaging
- Produces: one cohesive social card and a privately deployed Sites version

- [ ] **Step 1: Generate exactly one Signal Playground social card**

Request a landscape card containing “HESH IOT” and “Your hardware has something to say.” in the cream/cobalt/coral/acid visual system. Inspect all rendered text and omit the asset if unusable.

- [ ] **Step 2: Run final build and test verification**

Run `npm test` and require one passing test, zero failures, and a successful production build.

- [ ] **Step 3: Commit, push, package, save, and deploy privately**

Commit the exact validated source, push the branch head, package it with the Sites helper, save one new version, deploy privately, and poll until successful.

