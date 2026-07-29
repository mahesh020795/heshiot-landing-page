# Hesh IoT Product Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Hesh IoT landing page around the inspected SparkIoT product workflow, capabilities, and pricing while preserving Hesh IoT's distinctive public visual identity.

**Architecture:** Keep the existing single-route vinext site. The server-rendered page owns all product copy and semantic structure, `globals.css` owns the responsive product-led visual system, and the rendered HTML integration test protects the public claims and links.

**Tech Stack:** React 19, vinext, TypeScript, CSS, Node test runner, OpenAI Sites hosting.

## Global Constraints

- Public branding is `Hesh IoT`; do not rename SparkIoT application identifiers in this repository.
- Advertise only capabilities listed in the approved product-alignment specification.
- Use the actual Free, Plus, Pro, Max, and Enterprise pricing and limits.
- Preserve the live application URL `http://iot.rectronx.com` and source URL `https://github.com/mahesh020795/sparkiot`.
- Keep the site responsive from 360px through wide desktop layouts.
- Preserve visible focus styles and reduced-motion behavior.
- Use a responsive HTML/CSS product canvas; do not add a screenshot dependency.

---

### Task 1: Protect the product-aligned public contract

**Files:**
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: the production worker exported from `dist/server/index.js`
- Produces: a rendered HTML contract for the page title, workflow, proof, pricing, links, limitations, and removed legacy copy

- [ ] **Step 1: Write the failing rendered HTML test**

Replace the existing test body with assertions equivalent to:

```js
assert.match(html, /<title>Hesh IoT \| From board idea to live dashboard<\/title>/i);
assert.match(html, /From board idea to live dashboard/i);
for (const stage of ["Template", "Datastreams", "Device token", "Arduino code", "Board Test", "Live Dashboard"]) {
  assert.match(html, new RegExp(stage, "i"));
}
for (const proof of ["Smart Irrigation", "Tank Level", "Flood Level", "Threshold Monitor", "CSV export", "MQTT", "HTTP"]) {
  assert.match(html, new RegExp(proof, "i"));
}
for (const plan of ["Free", "Plus", "Pro", "Max", "Enterprise", "RM0", "RM25", "RM49", "RM99"]) {
  assert.match(html, new RegExp(plan, "i"));
}
assert.match(html, /web-first/i);
assert.doesNotMatch(html, /Your hardware has something to say/i);
assert.doesNotMatch(html, /One tiny value\.\s*Four useful moments/i);
```

- [ ] **Step 2: Run the test to verify RED**

Run:

```powershell
npm test
```

Expected: FAIL because the current page still renders the Signal Playground title and headline.

- [ ] **Step 3: Confirm the failure catches the intended break**

Verify the first assertion failure names the missing product-aligned title or headline, not a build or import error.

### Task 2: Build the authentic product-led page

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `appUrl`, `repoUrl`, workflow data, proof-group data, and plan data declared in `app/page.tsx`
- Produces: the server-rendered Hesh IoT route and accurate page metadata

- [ ] **Step 1: Replace the page data with inspected product facts**

Define literal arrays shaped as:

```ts
type WorkflowStage = { index: string; name: string; label: string; detail: string };
type ProofGroup = { label: string; title: string; items: string[] };
type Plan = { name: string; price: string; audience: string; facts: string[]; featured?: boolean };
```

Use six workflow stages, three proof groups, and five pricing plans from the specification.

- [ ] **Step 2: Replace the hero with a product canvas**

Render a semantic hero containing:

```tsx
<h1>From board idea<br />to live dashboard.</h1>
<p>Model the device, define datastreams, generate Arduino code, prove the board loop, and operate it live—all in one guided workspace.</p>
```

Build the visual canvas from HTML elements representing the Hesh IoT sidebar, workflow rail, live status, three telemetry cards, and a board-to-cloud trace.

- [ ] **Step 3: Render the real workflow and proof sections**

Map the six workflow stages into an ordered rail and the three proof groups into product capability cards. Include the authentic code sample and MQTT topic shape in the developer section.

- [ ] **Step 4: Render honest current-state and pricing sections**

Add `Built now, not someday`, the web-first limitation, and all five real pricing plans. Do not include unimplemented native-app or managed-operations claims.

- [ ] **Step 5: Update metadata**

Set:

```ts
const title = "Hesh IoT | From board idea to live dashboard";
const description = "Model devices, define datastreams, generate Arduino code, test real boards, and run realtime IoT dashboards with Hesh IoT.";
```

Preserve absolute request-derived Open Graph and X image URLs and change the image alt text to `Hesh IoT product workflow`.

- [ ] **Step 6: Replace the stylesheet with the product-led visual system**

Keep the cream/cobalt/coral/acid/ink palette and expressive Hesh typography. Add focused styles for the product canvas, workflow rail, proof grid, developer bridge, current-state board, pricing stack, FAQ, mobile collapse, focus states, and reduced motion.

- [ ] **Step 7: Run the test to verify GREEN**

Run:

```powershell
npm test
```

Expected: production build succeeds and the rendered HTML test passes.

- [ ] **Step 8: Check source hygiene**

Run:

```powershell
git diff --check
rg -n "Your hardware has something to say|One tiny value" app tests
```

Expected: no whitespace errors or retired primary copy.

- [ ] **Step 9: Commit the validated implementation**

```powershell
git add app/page.tsx app/globals.css app/layout.tsx tests/rendered-html.test.mjs docs/superpowers/plans/2026-07-29-hesh-iot-product-alignment.md
git commit -m "feat: align Hesh IoT landing with the product"
```

### Task 3: Publish the aligned site

**Files:**
- Verify: `.openai/hosting.json`
- Package: generated deployment archive under `work/`

**Interfaces:**
- Consumes: the validated `main` commit and existing Sites project ID
- Produces: synchronized GitHub `main` and a private Sites deployment

- [ ] **Step 1: Push the validated commit to GitHub**

```powershell
git push origin main
```

Expected: `origin/main` advances to the validated commit without force-push.

- [ ] **Step 2: Push the validated commit to the Sites source repository**

Obtain a fresh write credential when necessary and push the same `main` commit to the existing Sites source repository.

- [ ] **Step 3: Package and deploy the exact validated source**

Use the Sites packaging helper, save one new version using the pushed commit SHA, deploy privately, and poll until deployment reports `succeeded`.

- [ ] **Step 4: Open the deployed URL and stop temporary servers**

Open the exact successful deployment URL in Codex and stop the temporary SparkIoT inspection server.
