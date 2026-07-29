# Hesh IoT Balanced Brand Landing Design

Date: 2026-07-29

## Goal

Bring the Hesh IoT landing page closer to the actual product's calm light-SaaS interface without making the marketing page look like an application screen.

## Approved direction

Use one shared design system with different intensity:

- The landing page creates interest and explains the product.
- The application supports long operational sessions.
- Both share Hesh IoT naming, cobalt, cream, ink, typography, product workflow, virtual-pin language, and live-status semantics.
- The landing page retains large editorial headlines and two bold brand moments.
- Product previews, capability cards, pricing, and FAQ use quieter surfaces that resemble the application's visual rhythm.

## Visual changes

- Replace thick black borders with thin neutral or ink borders on most components.
- Replace hard offset shadows with soft elevation on navigation, product previews, cards, and pricing.
- Remove rotations from the product preview, code panel, and floating labels.
- Reduce coral and acid-green coverage; reserve them for primary calls to action and live/healthy status.
- Use white and blue-grey product surfaces through most sections.
- Keep cobalt as the primary brand and navigation colour.
- Keep the dark developer code panel and one strong cobalt current-state section.
- Change the final acid-green poster section into a quieter dark closing section.
- Preserve responsive behaviour, focus styles, reduced motion, and all product-aligned content.

## Brand bridge

Add one short section after the capability ribbon:

- Label: `ONE BRAND / TWO MODES`
- Headline: `Bold at the door. Calm at the controls.`
- Discovery mode explains outcomes with expressive typography.
- Operation mode uses predictable product surfaces and semantic status colour.

This section makes the relationship between marketing and product feel intentional rather than accidental.

## Reversibility

The current production-aligned landing page is preserved at Git tag `before-balanced-landing-2026-07-29`, pointing to commit `d47cbc459ba1ae594ebe5999142c12b49c2c58c5`. The tag is pushed to the GitHub repository before implementation.

## Testing

The rendered page must include the brand-bridge label and headline while retaining the real product workflow, pricing, live application link, source link, metadata, and web-first limitation. The production build and rendered HTML test must pass before publishing.

