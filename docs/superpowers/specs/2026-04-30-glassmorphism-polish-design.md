# Glassmorphism Polish — Design Spec

**Date:** 2026-04-30
**Project:** personal-portfolio-react
**Goal:** Visual polish of the existing portfolio with a medium-intensity glassmorphism aesthetic. No layout changes, no new sections, no new dependencies.

## Problem

The portfolio reads as "average" — generic dark theme with cyan + orange accents, flat panels, no visual hierarchy beyond Bootstrap defaults. Goal is a professional, modern dev-portfolio look that signals craft to recruiters and clients without crossing into showy/gimmicky territory.

## Non-Goals

- Layout shifts (sidebar stays, section order unchanged)
- New components or sections
- Content changes (copy, images, data in `src/constants/index.ts`)
- New dependencies
- Routing changes
- Re-architecture of theming (`ThemeContext` stays as-is)

## Approach

Apply a cohesive glassmorphism design system on top of the existing structure via:

1. CSS custom properties for the new palette + glass tokens
2. New utility classes (`.glass-card`, `.glass-shell`, `.btn-gradient`, `.text-gradient`) added to `src/index.css`
3. Targeted `className` additions in section components (~10 files)
4. A fixed-position blob layer rendered once at the app root

Pure CSS. No JS animations, no new libraries.

## Design Tokens

Added to `:root` and `body.dark` in `src/index.css`:

```css
:root {
  --bg-base: #f1f5f9;
  --bg-elevated: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --accent-cyan: #0891b2;
  --accent-violet: #7c3aed;
  --accent-gradient: linear-gradient(135deg, var(--accent-cyan), var(--accent-violet));
  --glass-bg: rgba(255, 255, 255, 0.55);
  --glass-border: rgba(15, 23, 42, 0.08);
  --glass-shadow: 0 8px 32px rgba(15, 23, 42, 0.08);
  --blob-opacity: 0.15;
}

body.dark {
  --bg-base: #0a0a14;
  --bg-elevated: #11111c;
  --text-primary: #e5e7eb;
  --text-secondary: #94a3b8;
  --accent-cyan: #22d3ee;
  --accent-violet: #a855f7;
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  --blob-opacity: 0.20;
}
```

The cyan→violet gradient replaces every current orange usage (project titles, "Read more", resume buttons, blog titles).

## Background Blob Layer

A single fixed-position element placed at the app root (rendered once in `App.tsx` or `MainLayout.tsx` — preferred: `MainLayout.tsx` so it sits inside the theme provider but above all routed content's z-stacking).

```html
<div className="bg-blobs" aria-hidden="true">
  <span className="blob blob-1" />
  <span className="blob blob-2" />
  <span className="blob blob-3" />
</div>
```

CSS:

```css
.bg-blobs {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}
.blob {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: var(--blob-opacity);
  will-change: transform;
}
.blob-1 { top: -10%;  left: -10%; background: var(--accent-cyan);   animation: drift1 28s ease-in-out infinite; }
.blob-2 { bottom: -15%; right: -10%; background: var(--accent-violet); animation: drift2 32s ease-in-out infinite; }
.blob-3 { top: 40%;   left: 40%;  background: var(--accent-cyan);   animation: drift3 36s ease-in-out infinite; opacity: calc(var(--blob-opacity) * 0.6); }

@keyframes drift1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(80px, 60px); } }
@keyframes drift2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-70px, -50px); } }
@keyframes drift3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(40px, -60px); } }

@media (prefers-reduced-motion: reduce) {
  .blob { animation: none; }
}
```

## Glass Utilities

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  box-shadow: var(--glass-shadow);
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}
.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.35);
  box-shadow: 0 12px 40px rgba(34, 211, 238, 0.12);
}

.glass-shell {
  background: var(--glass-bg);
  backdrop-filter: blur(24px) saturate(140%);
  -webkit-backdrop-filter: blur(24px) saturate(140%);
  border: 1px solid var(--glass-border);
}

.btn-gradient {
  background: var(--accent-gradient);
  color: #0a0a14;
  border: none;
  transition: box-shadow 200ms ease, filter 200ms ease;
}
.btn-gradient:hover {
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.4);
  filter: brightness(1.05);
}

.text-gradient {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@supports not (backdrop-filter: blur(1px)) {
  .glass-card, .glass-shell {
    background: var(--bg-elevated);
  }
}
```

## Per-Section Changes

All changes are className swaps or additions. No structural JSX edits.

| Section | Change |
|---|---|
| `pages/layouts/MainLayout.tsx` | Mount `<div class="bg-blobs">` once at root, above `<Outlet />` |
| `components/Navbar.tsx` | Holds both desktop sidebar + mobile top bar. Sidebar root → `glass-shell` + right border. Profile pic ring → gradient stroke. Active nav link bg → `rgba(34,211,238,0.12)`, left-border 3px gradient. Mobile top bar → `glass-shell` sticky |
| `Home.tsx` | "Welcome" label → `text-gradient`. "Hire Me" btn → `btn-gradient`. Hero overlay darkened to `rgba(10,10,20,0.55)` so blobs are visible |
| `About.tsx` | 4 stats tiles → `glass-card`. "View Resume" btn → `btn-gradient`. Section heading underline → gradient bar |
| `Services.tsx` | 6 service cards → `glass-card`. Icon tile bg → glass mini |
| `Education.tsx` | Cards → `glass-card`. Date pill keeps its color but bg becomes glass |
| `Experience.tsx` | Items → `glass-card` |
| `Skills.tsx` | Tech hexagons: dark fill → `var(--glass-bg)`, hover border becomes gradient stroke. "View Resume" btn → `btn-gradient` |
| `Projects.tsx` | Cards → `glass-card`. Title color: orange → white (or `text-gradient` on hover). "Load More" btn → `btn-gradient`. Tag chips → glass mini-pill, per-tag text colors retained |
| `Reviews.tsx` | Cards → `glass-card` |
| `Blogs.tsx` | Cards → `glass-card`. Title orange → white, gradient on hover. "Read more" → cyan with arrow keeping cyan |
| `Contact.tsx` | Info column wrapped in `glass-card`. Form inputs: `background: var(--glass-bg)`, border `var(--glass-border)`, focus border cyan. "Send Message" btn → `btn-gradient` |
| `Footer.tsx` | `glass-shell` strip. "Sharif" name → `text-gradient` |
| Section heading underlines | All sections that show a small bar under H2/H3: solid cyan → gradient |
| Ghost watermark text behind headings | Opacity → `0.03` (currently visible too strong) |

## Color Removal

Every existing orange (`#ff7849`, `#f97316`, or whatever the current value resolves to in `App.css`) gets removed and replaced by either solid cyan (`var(--accent-cyan)`) or the gradient. Audit step: grep `App.css` and `index.css` for orange hex values; replace.

## Light Mode

Every glass rule is theme-token-driven, so light mode works automatically. Spot checks needed:
- Glass cards on light bg need stronger shadow (already covered by `--glass-shadow` token)
- Gradient button text (`#0a0a14`) stays readable in both modes since the gradient itself is the same brightness band
- Blob opacity drops to `0.15` in light mode (already in tokens)

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| `backdrop-filter` perf on weak GPUs | Cap blur at 16px on cards (24px only on sidebar/navbar — fewer instances). `@supports not` fallback to solid bg. |
| Safari `backdrop-filter` prefix | `-webkit-backdrop-filter` on every glass rule |
| Reduced-motion users | `@media (prefers-reduced-motion: reduce)` disables blob animation |
| Glass-on-image readability (hero) | Hero overlay darkened to `rgba(10,10,20,0.55)` |
| Orange removal misses | Grep `App.css`/`index.css` for `#ff` and `f97` patterns during implementation |

## Files Touched

- `src/index.css` — tokens, `.glass-*`, `.btn-gradient`, `.text-gradient`, blob keyframes (bulk of work)
- `src/App.css` — orange removal, heading underline gradient, ghost watermark opacity
- `src/pages/layouts/MainLayout.tsx` — mount blob layer
- `src/components/Navbar.tsx` — sidebar + mobile top bar live here
- `src/components/ContactForm.tsx` — glass form inputs
- `src/components/Home.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/Education.tsx`
- `src/components/Experience.tsx`
- `src/components/Skills.tsx`
- `src/components/Projects.tsx`
- `src/components/Reviews.tsx`
- `src/components/Blogs.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

No new files. No file deletions.

## Success Criteria

1. `npm run lint` passes with `--max-warnings 0`
2. `npm run build` succeeds (TS + Vite)
3. Visual check in dev (`npm run dev`) — both dark and light modes:
   - Blobs visible but unobtrusive behind content
   - All cards have consistent glass treatment
   - No orange remaining
   - Hero text remains readable
   - Sidebar active state uses gradient accent
4. No layout shifts — page heights and section positions match pre-change screenshots
5. `prefers-reduced-motion` disables blob animation (verify via DevTools rendering panel)
