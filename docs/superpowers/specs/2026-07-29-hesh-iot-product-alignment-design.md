# Hesh IoT Product-Aligned Landing Page Design

Date: 2026-07-29

## Goal

Rework the Hesh IoT landing page so its story, visuals, pricing, and proof points are traceable to the current SparkIoT product while retaining a distinctive public brand that does not resemble Blynk's marketing site.

## Product evidence

The landing page may claim the following because the inspected SparkIoT repository implements or documents them:

- A Template Studio with Setup, Blynk migration, Datastreams, Dashboard, Notifications, Code, and Simulator steps.
- A customer path of Template -> Project -> Datastreams -> Device -> Code -> Board Test -> Live Dashboard.
- ESP32, ESP8266, Arduino Client-compatible, Raspberry Pi Pico, and STM32 template choices.
- An installable SparkIoT Arduino library with `virtualWrite`, command handlers, acknowledgements, and status publishing.
- MQTT and HTTP telemetry ingestion with WebSocket realtime delivery.
- Device provisioning with one-time tokens and token rotation.
- Dashboard widgets for gauges, values, switches, GPS, camera URLs, schedules, tank level, flood level, threshold monitoring, power, and event logs.
- Schedules, notification rules, in-app notifications, browser push foundations, telemetry history, filtering, and CSV export.
- A demo workspace separated from authenticated tenant data.
- Free, Plus, Pro, Max, and Enterprise plans priced at RM0, RM25, RM49, RM99, and contact sales.

The page must not imply native mobile apps, camera transcoding, completed paid billing, AI prediction, white-label availability outside Enterprise, or production operations managed by Hesh IoT.

## Selected visual direction

Use a product-led editorial system: warm cream background, dark ink typography, electric cobalt accents, coral calls to action, and acid-green status highlights. Keep the expressive Hesh IoT brand, thick outlines, and offset shadows, but replace the abstract hero signal machine with an authentic product canvas inspired by the inspected SparkIoT interface.

The product canvas is a responsive HTML/CSS composition, not a screenshot. It shows:

- A compact Hesh IoT sidebar.
- A `Smart Irrigation` workspace title.
- A horizontal builder rail with Template, Datastreams, Device, Code, Test, and Live stages.
- Real telemetry cards for temperature, soil moisture, and tank level.
- A live device status and a board-to-cloud trace.

This composition should clearly resemble the product's actual light SaaS interface without copying its full dashboard or using Blynk's visual language.

## Information architecture

### Navigation

Navigation links point to Product, Workflow, Proof, Pricing, and the live application. The primary navigation call to action is `Open Hesh IoT`.

### Hero

Headline: `From board idea to live dashboard.`

Supporting promise: Hesh IoT gives developers one guided path to model a device, define datastreams, generate Arduino code, test the board loop, and operate a live dashboard.

Primary call to action: `Build your first device`.

Secondary call to action: `See the product flow`.

### Product workflow

Present six stages, using the real product sequence:

1. Shape a reusable template.
2. Define virtual-pin datastreams.
3. Provision a device and copy its token.
4. Generate Arduino code.
5. Prove telemetry and commands in Board Test.
6. Operate the live dashboard.

### Product proof

Use three proof groups:

- Build: templates, project presets, datastreams, Arduino code generation.
- Operate: realtime dashboards, controls, schedules, alerts, browser notifications.
- Understand: telemetry history, filters, CSV exports, smart level widgets, GPS and camera URL views.

### Developer bridge

Show one short authentic code line:

```cpp
SparkIoT.virtualWrite("V0", 29.4, "C");
```

Pair it with the MQTT topic pattern and explain that the library is a convenience layer rather than transport lock-in.

### Honest current-state section

Use `Built now, not someday` and list the implemented capabilities. Add a visible note that the current release is web-first and that native apps and managed production operations are not part of this release.

### Pricing

Use the actual plan names and limits:

- Free — RM0/month: 1 user, 1 project, 1 device, 40,000 messages/month, 7-day history, no automation.
- Plus — RM25/month: 1 user, 3 projects, 3 devices, 1,000,000 messages/month, 30-day history, 5 automations.
- Pro — RM49/month: 1 user, 10 projects, 10 devices, 10,000,000 messages/month, 90-day history, 20 automations, API access.
- Max — RM99/month: 10 users, 30 projects, 30 devices, 50,000,000 messages/month, 365-day history, 100 automations.
- Enterprise — contact sales: custom limits, white-label, custom domain, dedicated support, and optional dedicated infrastructure.

### FAQ and final call to action

Answer transport compatibility, supported boards, Blynk migration, and self-hosting honestly. End with `Your board. One clear path to live.` and a link to the live application.

## Branding boundary

The public landing page uses `Hesh IoT`. The inspected application source still uses `Spark IoT` and `SparkIoT` identifiers. This landing-page task does not rename the application repository, Arduino library, MQTT topic namespace, API identifiers, or deployment assets. Those changes require a separate migration plan to preserve device compatibility.

## Responsive and accessibility requirements

- The page must work from 360px mobile width through wide desktop layouts.
- Product canvas details may condense on mobile but the six-stage workflow must remain readable.
- Links and buttons require visible focus states and touch-friendly targets.
- Decorative shapes must be hidden from assistive technology.
- Motion must stop under `prefers-reduced-motion`.
- Text must preserve usable contrast across cream, cobalt, coral, acid, and ink surfaces.

## Metadata

Use the title `Hesh IoT | From board idea to live dashboard` and an accurate description about templates, datastreams, Arduino code, board testing, and realtime dashboards. Preserve the existing bespoke social card unless its headline becomes misleading; metadata alt text must describe it accurately.

## Testing

The rendered HTML contract must assert:

- The new title, headline, and product promise.
- The six workflow stages.
- Authentic product vocabulary and proof points.
- The actual Free, Plus, Pro, Max, and Enterprise plan names and prices.
- The live app and source repository links.
- The web-first limitation.
- Absence of the old Signal Playground headline and abstract journey language.

Run the production build and rendered HTML test before commit, push, and deployment.

