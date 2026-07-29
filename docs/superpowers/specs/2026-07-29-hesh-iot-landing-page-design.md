# Hesh IoT Landing Page Design

## Objective

Create a single-page, responsive landing site for Hesh IoT that converts makers, developers, students, freelancers, and small teams into product users. The site must reflect capabilities already present in the Spark IoT repository while presenting the product under the Hesh IoT brand.

## Positioning

Hesh IoT is a developer-friendly, affordable platform for connecting hardware, building live dashboards, automating device actions, and monitoring telemetry without assembling a custom backend.

Primary promise: **Build connected products without building the IoT backend.**

The page may use Blynk's clear platform-story structure as inspiration, but it must not claim unsupported mobile apps, OTA updates, global fleet scale, SLAs, or certifications.

## Audience and Conversion

- Primary audience: ESP32 and ESP8266 makers, developers, students, freelancers, and small businesses.
- Primary CTA: **Start building free**, linking to `http://iot.rectronx.com`.
- Secondary CTA: **View on GitHub**, linking to `https://github.com/mahesh020795/sparkiot`.
- Supporting CTA: **Explore the platform**, scrolling to the workflow section.

## Visual Direction

Use a near-black midnight canvas, warm off-white type, electric chartreuse as the main signal color, and small sky-blue accents. The page should feel like a precise instrument panel rather than generic neon technology artwork. Use a bold display headline, monospaced labels, fine grid lines, rounded cards, and a CSS-built dashboard mockup with live-status indicators and charts. Avoid stock imagery and model-authored SVG illustrations.

Motion should be subtle and purposeful: status pulse, flowing signal line, and gentle hover transitions. Respect `prefers-reduced-motion`.

## Page Structure

1. Sticky navigation with brand, section links, GitHub, and Start free CTA.
2. Hero with product promise, supporting copy, CTAs, compatibility chips, and dashboard mockup.
3. Credibility strip describing WebSockets, MQTT, virtual pins, and board support without fabricated customer counts.
4. Three-step workflow: connect a board, compose a dashboard, automate and monitor.
5. Platform capability grid covering dashboard widgets, reusable templates, realtime control, history export, notifications, schedules, device provisioning, and Arduino library.
6. Developer section with a concise real Arduino API example and supported hardware/protocol labels.
7. Pricing preview for Free, Plus, Pro, and Max using the repository's Malaysian Ringgit plan values and limits.
8. FAQ addressing hardware, protocols, free tier, self-hosting, and current mobile experience.
9. Final CTA and compact footer with product and repository links.

## Accessibility and Responsive Behavior

- Semantic landmarks and ordered heading hierarchy.
- Visible keyboard focus styles and descriptive accessible labels.
- Color contrast suitable for dark backgrounds.
- Touch targets at least 44px where practical.
- Mobile navigation remains simple and does not require client-side state.
- Layout adapts from two-column hero and grids to a single column below tablet widths.

## Technical Shape

Implement the site in the existing vinext starter using one server-rendered `app/page.tsx` and `app/globals.css`. Use CSS shapes and inline HTML for the product mockup. Keep JavaScript-free interactions to anchors and native `details` elements. Replace starter metadata, favicon, preview component, and skeleton dependency. Add a rendered-output test that checks the brand, conversion links, sections, and absence of starter markers.

## Validation

- The rendered route returns HTML successfully.
- Required brand, CTA, workflow, pricing, developer, and FAQ content appears in server-rendered HTML.
- Starter preview metadata and dependency are absent.
- Production build and rendered-output tests pass.
- The exact validated source is committed, packaged, saved, and privately deployed with Sites.

