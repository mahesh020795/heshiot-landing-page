# Hesh IoT Balanced Brand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the product-aligned Hesh IoT landing page into a calmer technical-editorial expression that shares the product's visual DNA.

**Architecture:** Preserve the single-route vinext site, content data, metadata, and product workflow. Add one semantic brand-bridge section in `page.tsx`, then make the visual balance change entirely through `globals.css`.

**Tech Stack:** React 19, vinext, TypeScript, CSS, Node test runner, OpenAI Sites hosting.

## Global Constraints

- Preserve all product claims, workflow stages, plan names, prices, links, and web-first limitations.
- Use cobalt as the primary brand colour, coral for primary calls to action, and acid green for live/healthy status.
- Use thin borders and soft elevation for most interface-adjacent surfaces.
- Preserve the dark developer panel and one strong cobalt proof section.
- Preserve mobile, keyboard, touch, contrast, and reduced-motion behaviour.
- Preserve Git tag `before-balanced-landing-2026-07-29` as the exact rollback point.

---

### Task 1: Add the brand bridge test

**Files:**
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the production worker from `dist/server/index.js`
- Produces: a public rendered-page contract for the balanced brand message

- [ ] **Step 1: Add failing assertions**

```js
assert.match(html, /ONE BRAND \/ TWO MODES/i);
assert.match(html, /Bold at the door\. Calm at the controls\./i);
assert.match(html, /Discovery mode/i);
assert.match(html, /Operation mode/i);
```

- [ ] **Step 2: Run `npm test` and verify RED**

Expected: the build succeeds and the rendered HTML test fails because the brand-bridge content is absent.

### Task 2: Implement the calmer technical-editorial expression

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the existing product-led page structure
- Produces: the brand bridge plus the balanced visual expression

- [ ] **Step 1: Add the semantic brand bridge**

Add a `brand-bridge` section after the capability ticker with the approved label, headline, Discovery mode, and Operation mode copy.

- [ ] **Step 2: Calm global surfaces**

Change header, buttons, product preview, proof cards, workflow, plans, and FAQ to thin borders, restrained radii, no rotations, and soft elevation.

- [ ] **Step 3: Rebalance colour**

Use white and blue-grey surfaces for most content; retain cobalt for navigation and the current-state section, coral for calls to action, acid green for live status, and ink for the developer and closing sections.

- [ ] **Step 4: Verify GREEN**

Run `npm test`.

Expected: production build succeeds and the rendered HTML test passes.

- [ ] **Step 5: Verify source hygiene**

Run `git diff --check` and confirm the worktree includes only the approved page, stylesheet, test, spec, and plan changes.

- [ ] **Step 6: Commit**

```powershell
git add app/page.tsx app/globals.css tests/rendered-html.test.mjs docs/superpowers/specs/2026-07-29-hesh-iot-balanced-brand-design.md docs/superpowers/plans/2026-07-29-hesh-iot-balanced-brand.md
git commit -m "feat: balance Hesh IoT marketing and product styles"
```

### Task 3: Publish the reversible revision

**Files:**
- Verify: `.openai/hosting.json`
- Package: generated Sites archive under `work/`

**Interfaces:**
- Consumes: the validated `main` commit
- Produces: synchronized GitHub and private Sites revisions

- [ ] **Step 1: Push `main` to GitHub**

Run `git push origin main` without force-push.

- [ ] **Step 2: Push the same commit to the existing Sites source repository**

Use a short-lived Sites source credential and per-command authentication.

- [ ] **Step 3: Package, save, and deploy privately**

Package the exact validated build, save one new version, deploy it privately, and poll until the deployment succeeds or fails.

- [ ] **Step 4: Open the successful deployment URL**

Open the exact URL returned by the successful deployment for handoff.

