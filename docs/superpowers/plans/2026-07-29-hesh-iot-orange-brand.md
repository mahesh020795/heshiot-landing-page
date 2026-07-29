# Hesh IoT Orange Brand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved orange-and-ink identity and connected-H mark to the balanced Hesh IoT landing page.

**Architecture:** Preserve the page structure and product content. Update the reusable `Brand` component, brand promise, footer copy, shared CSS tokens, and request-rendered metadata.

**Tech Stack:** React 19, vinext, TypeScript, CSS, Node test runner, OpenAI Sites hosting.

## Global Constraints

- Use `#F25522` for brand orange, `#121722` for ink, `#2457F5` for product cobalt, `#22A865` for online green, and `#F7F6F2` for the warm background.
- Orange primary buttons use ink text.
- Preserve the balanced technical-editorial layout and all product claims, limits, links, and workflow stages.
- Preserve tag `before-orange-brand-2026-07-29` as the rollback point.

---

### Task 1: Protect the orange identity contract

**Files:**
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the production worker from `dist/server/index.js`
- Produces: rendered-page assertions for the new identity and browser theme

- [ ] **Step 1: Add failing assertions**

```js
assert.match(html, /Make IoT simple—from first datastream to daily operation\./i);
assert.match(html, /Make IoT simple/i);
assert.match(html, /<meta(?=[^>]*name="theme-color")(?=[^>]*content="#F25522")[^>]*>/i);
```

- [ ] **Step 2: Run `npm test` and verify RED**

Expected: build succeeds and rendered HTML fails on the absent orange identity promise or theme metadata.

### Task 2: Implement the orange identity

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: existing `Brand` component and balanced page structure
- Produces: connected-H mark, two-colour wordmark, brand promise, footer tagline, and orange browser theme

- [ ] **Step 1: Update `Brand` markup**

Use a `brand-circuit` mark with two rails, a connector, and three nodes. Render `Hesh` and `IoT` in separate spans for independent ink and orange colour.

- [ ] **Step 2: Add approved copy**

Add `Make IoT simple—from first datastream to daily operation.` under the hero description and `Make IoT simple` in the footer.

- [ ] **Step 3: Apply the brand tokens**

Set the approved five colour tokens. Map existing coral marketing accents to Hesh Orange, keep cobalt product surfaces, and keep green operational status.

- [ ] **Step 4: Add orange theme metadata**

Set `themeColor: "#F25522"` in the metadata result.

- [ ] **Step 5: Verify GREEN and source hygiene**

Run `npm test` and `git diff --check`.

- [ ] **Step 6: Commit**

Commit the page, stylesheet, metadata, test, specification, and plan with message `feat: apply Hesh IoT orange identity`.

### Task 3: Publish the orange identity

**Files:**
- Verify: `.openai/hosting.json`
- Package: generated Sites archive under `work/`

**Interfaces:**
- Consumes: validated `main` commit
- Produces: synchronized GitHub and private Sites revisions

- [ ] **Step 1: Push `main` to GitHub without force-push**
- [ ] **Step 2: Push the same commit to the existing Sites source repository**
- [ ] **Step 3: Package, save, and deploy the exact validated revision privately**
- [ ] **Step 4: Open the successful live URL for handoff**

