# Hesh IoT Signal Playground Redesign

## Objective

Replace the Blynk-like dark SaaS landing page with a distinctive Hesh IoT identity built around the journey of a device signal. The page should feel energetic, approachable, technically credible, and memorable to makers and small product teams.

## Creative Concept

**Signal Playground** treats every telemetry value as a tangible object that moves from hardware to a useful outcome. The visual language combines an editorial cream canvas, cobalt blue fields, coral actions, acid-lime live states, black type, thick borders, offset shadows, and modular signal blocks.

The site must avoid black-and-green dashboard marketing, generic platform feature grids, enterprise fleet claims, and the previous Blynk-inspired phrasing.

## Messaging

- Primary headline: **Your hardware has something to say.**
- Supporting promise: **Hesh IoT turns device signals into dashboards, decisions, and actions.**
- Primary CTA: **Send your first signal**, linking to `http://iot.rectronx.com`.
- Secondary CTA: **See how it flows**, scrolling to the signal journey.
- GitHub link: `https://github.com/mahesh020795/sparkiot`.

## Page Story

1. Editorial navigation and an asymmetric hero dominated by a CSS-built signal machine rather than a software dashboard screenshot.
2. A four-stage signal journey: sense, transport, understand, act.
3. Project recipe cards for smart irrigation, energy monitoring, GPS tracking, and relay control.
4. A “What works today” trust section that states current web, hardware, protocol, automation, notification, history, and export capabilities without roadmap claims.
5. A developer connection recipe showing the exact sequence from template to live dashboard.
6. Pricing reframed as capacity bands—Try, Build, Ship, Scale—rather than a conventional comparison table.
7. Compact FAQ and a strong final invitation.

## Visual and Interaction Rules

- Cream `#f4f0e6`, cobalt `#1545ff`, coral `#ff5c47`, acid `#c7ff3d`, and ink `#101010` form the core palette.
- Typography is oversized, compact, and editorial with monospaced micro-labels.
- Use thick 2px borders, imperfect-looking offset shadows, rounded capsules, and geometric CSS-only illustrations.
- Motion represents data travel: signal dots move across rails, meters pulse, and selected chips float slightly. Motion must stop under `prefers-reduced-motion`.
- The first viewport must not resemble a web-console screenshot.
- Use no stock imagery, no generated SVG illustration, and no unsupported feature claims.

## Responsive and Accessibility Rules

- Preserve semantic landmarks, heading order, keyboard-visible focus, and descriptive labels.
- All interactive controls remain anchors or native `details` elements.
- Collapse the signal machine into a vertical flow on mobile while preserving its meaning.
- Keep minimum practical touch targets of 44px.
- Maintain strong contrast on all palette combinations.

## Validation

The rendered HTML must contain the new headline, promise, signal journey, four recipes, current-capability section, connection recipe, capacity pricing, and CTAs. It must not contain the previous headline, “Connect. Compose. Control.”, the dashboard-preview label, or the previous Blynk-like section heading.

