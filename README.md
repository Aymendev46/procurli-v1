# Procurli — landing page

Marketing site for **Procurli**, an AI spend-audit product for manufacturing supply-chain
teams (Vilnius, Lithuania). Built to the supplied mood board: monochrome, hairline grid,
editorial typography, with dark as the primary brand surface and a full light counterpart.

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
| `--bg` / `--bg-2` | Page and alternating section grounds | `#0a0a0b` / `#0d0d0f` | `#f3f3f1` / `#eeeeeb` |
| `--panel` / `--panel-2` | Cards and nested surfaces | `#101012` / `#151517` | `#fbfbfa` / `#ffffff` |
| `--line` / `--line-2` | Hairline rules and borders | 10% / 20% white | 12% / 22% black |
| `--fg` / `--muted` / `--dim` | Primary, secondary, tertiary text | `#ededee` / `#94959a` / `#82838a` | `#101011` / `#62636a` / `#6b6c73` |
| `--inv-bg` / `--inv-fg` | Inverted buttons and emphasis blocks | light on dark | dark on light |

**Type** — `Inter Tight` for everything editorial (headings sit at `-0.035em` tracking),
`Geist Mono` for the bracketed section labels, step numbers and micro-captions. Both are
loaded via `next/font` with full fallback stacks.

**Theming** — three surfaces, not two. Beyond dark and light, `.on-dark` re-declares the
token set locally so the hero chart, the case-study poster and the product mockup stay
dark in *both* themes, exactly as in the mood board. The theme resolves before first paint
via an inline script in `<head>` (stored choice wins, then `prefers-color-scheme`, then
dark), so there is no flash of the wrong surface.

**Grid** — `Rails` draws full-height vertical hairlines locked to the container edges;
sections are separated by horizontal hairlines and framed blocks get corner ticks
(`.ticks`). This is what gives the page its blueprint feel.

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

1. **Customer logos** (`src/components/graphics/ClientLogos.tsx`) — typographic wordmarks
   built to the right optical weight. Swap for the supplied vectors.
2. **Case-study attribution and video poster** (`caseStudy` in `content.ts`,
   `AuditOutput.tsx`) — the name and role are filler, and the poster is a placeholder
   surface with a non-functional play button. Wire it to the real still and player.
3. **Figures and copy** — the recovery numbers, captions and FAQ answers are transcribed
   or approximated from the mood board. They need a commercial and legal pass. A
   disclaimer already sits in the footer.
4. **Links** — `Book a demo` and `Contact us` point at `mailto:hello@procurli.ai`; the
   header phone link and `/terms`, `/privacy` are placeholders.
5. **Social preview** — Open Graph metadata is set, but no OG image is generated yet.
