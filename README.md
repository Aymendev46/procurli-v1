# Procurli — landing page

Marketing site for **Procurli**, an AI spend-audit product for manufacturing supply-chain
teams (Vilnius, Lithuania). Built to match procurli.ai: a 1600px container framed by a
live border grid, large editorial type over a monochrome palette, a mono face carrying
nav, labels and buttons, with dark as the primary brand surface and a full light
counterpart.

Built with **Next.js 16 (App Router, Turbopack)**, **React 19**, **TypeScript** and
**Tailwind CSS 4**. No UI library, no runtime dependencies beyond React.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Design system

Everything is driven by CSS custom properties in `src/app/globals.css`, surfaced to
Tailwind through `@theme inline`. Changing a token changes the whole site.

| Token | Role | Dark | Light |
| --- | --- | --- | --- |
| `--bg` / `--bg-2` | Page and alternating section grounds | `#090909` / `#0c0c0c` | `#f3f3f1` / `#eeeeeb` |
| `--panel` / `--panel-2` | Cards and nested surfaces | `#101010` / `#161616` | `#fbfbfa` / `#ffffff` |
| `--line` / `--line-2` | Hairline rules and borders | 10% / 20% white | 12% / 22% black |
| `--fg` / `--muted` / `--dim` | Primary, secondary, tertiary text | `#ededee` / `#94959a` / `#82838a` | `#101011` / `#62636a` / `#6b6c73` |
| `--inv-bg` / `--inv-fg` | Inverted buttons and emphasis blocks | light on dark | dark on light |

**Type** — `Geist` for everything editorial, `JetBrains Mono` for nav, buttons, section
labels, step numbers and chart labels. Both load via `next/font` with full fallback
stacks, and the variables are declared on `<html>` — `--font-sans-stack` is built on
`:root`, and a `:root` custom property cannot read a variable defined on a descendant.
These are the closest Google-hosted stand-ins for the licensed faces on procurli.ai;
swap them in `layout.tsx` when the brand pack lands.

Sizes run off a shared scale (`--t-display` … `--t-label`), exposed as `text-display`,
`text-h2`, `text-h3`, `text-lead`, `text-body` and `text-label`. Change the scale once
and every section follows.

**Theming** — three surfaces, not two. Beyond dark and light, `.on-dark` re-declares the
token set locally so the hero chart, the case-study poster and the product mockup stay
dark in *both* themes, exactly as in the mood board. The theme resolves before first paint
via an inline script in `<head>` (stored choice wins, then `prefers-color-scheme`, then
dark), so there is no flash of the wrong surface.

**Grid** — the border system is structural, not decoration. `Rails` draws full-height
vertical hairlines locked to the container edges; sections are separated by horizontal
hairlines. Structural blocks (the hero, the customer strip) use `.container-flush` so
their internal rules land exactly on those rails — the hero's centre rule sits on the
page midline, and the strip's six cells divide the full container width. Prose sections
use `.container-x`, which adds the gutter.

The strip's dividers come from a `gap-px` grid over a line-coloured track, so they hold
at any column count without nth-child rules.

## Structure

```
src/
├── app/
│   ├── layout.tsx        fonts, metadata, pre-paint theme script, skip link
│   ├── page.tsx          section composition
│   ├── globals.css       design tokens, layout primitives, motion
│   └── icon.svg          favicon
├── components/
│   ├── layout/           SiteHeader, SiteFooter, Rails, Logo
│   ├── sections/         one file per page section, top to bottom
│   ├── graphics/         LeakageDonut, DashboardMockup, ClientLogos
│   └── ui/               Button, Section, SectionLabel, Reveal, ThemeToggle, Icons
└── lib/
    ├── content.ts        every string on the page
    └── leakage.ts        hero chart data
```

Sections in order: hero → customer logos → ERP limitations → what we review → process →
audit output + case study → security → FAQ → try us → footer.

## Editing content

All copy lives in `src/lib/content.ts` — headings, body copy, figures, FAQ entries,
footer links. Nothing is hard-coded in components, so copy changes never touch layout.

## Notes on motion and accessibility

- Scroll reveals, the donut draw-in and the logo marquee all collapse to nothing under
  `prefers-reduced-motion: reduce`.
- Reveal styles are scoped behind `html.js`, so with scripting disabled the page renders
  fully rather than staying invisible.
- Text colours meet WCAG AA (≥4.5:1) for small text in both themes, including the mono
  micro-labels.
- Keyboard: skip link, visible focus rings, FAQ accordion as real `<button>`s with
  `aria-expanded`/`aria-controls`, labelled mobile menu and theme toggle.
- The hero chart swaps its labelled ring for a ring-plus-legend below `sm`, where 9px
  labels on a scaled SVG would be unreadable.

## Placeholders to replace before launch

These are design stand-ins, marked in the source:

1. **Customer logos** (`src/components/graphics/ClientLogos.tsx`) — typographic stand-ins
   built to the proportions of the real marks. Swap for the supplied vectors.
2. **Case-study attribution and video poster** (`caseStudy` in `content.ts`,
   `AuditOutput.tsx`) — the name and role are filler, and the poster is a placeholder
   surface with a non-functional play button. Wire it to the real still and player.
3. **Figures and copy** — the recovery numbers, captions and FAQ answers are transcribed
   or approximated from the mood board. They need a commercial and legal pass. A
   disclaimer already sits in the footer.
4. **Links** — `Book a demo` and `Contact us` point at `mailto:hello@procurli.ai`; the
   header phone link and `/terms`, `/privacy` are placeholders.
5. **Social preview** — Open Graph metadata is set, but no OG image is generated yet.
