# Hesh IoT Orange Brand Landing Design

Date: 2026-07-29

## Goal

Apply the approved Hesh IoT orange-and-ink identity to the balanced landing page while retaining cobalt as the product-interface colour and green as the connected-status colour.

## Brand system

- Hesh Orange: `#F25522` for the connected-H mark, primary marketing actions, and select emphasis.
- Hesh Ink: `#121722` for typography, structure, developer content, and dark closing surfaces.
- Product Cobalt: `#2457F5` for workflow, links, selected product states, and interface previews.
- Online Green: `#22A865` for healthy, online, and successful device status.
- Warm Background: `#F7F6F2` for the page environment.

Orange buttons use ink text for strong contrast. Cobalt remains the product colour so the landing page does not become uniformly orange.

## Logo treatment

Replace the existing circular signal-bar CSS mark with a compact flat connected-H circuit mark constructed from HTML and CSS. It must use consistent strokes, two vertical rails, one centred connector, and three nodes. The small mark appears in the header, footer, and product preview; the full stacked raster concept is not embedded because it is not a production vector asset.

The visible wordmark uses `Hesh` in ink and `IoT` in orange with a clear space. The header and application preview omit the tagline. The footer includes `Make IoT simple` as supporting brand copy.

## Copy and metadata

Keep the headline `From board idea to live dashboard.` Add the supporting line `Make IoT simple—from first datastream to daily operation.` without competing with the main headline.

Add browser theme colour `#F25522`. Preserve current title, description, absolute Open Graph image URL, product workflow, pricing, source link, application link, and web-first limitation.

## Reversibility

Tag `before-orange-brand-2026-07-29` points to balanced-brand commit `d045d110ec8c501b304325d1c8214ca38a7cadbe` and is pushed to GitHub before implementation.

## Testing

The rendered page must include the new hero brand promise, visible `Hesh IoT` wordmark, `Make IoT simple` footer message, and orange browser theme metadata. The production build and rendered HTML test must pass before publishing.

