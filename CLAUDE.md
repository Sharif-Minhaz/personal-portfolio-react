# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR (SWC plugin).
- `npm run build` — type-check (`tsc`) then production build.
- `npm run lint` — ESLint over `ts,tsx`, fails on any warning (`--max-warnings 0`).
- `npm run preview` — preview built bundle.

No test runner configured.

## Environment

`ContactForm` reads three Vite env vars from `import.meta.env` for EmailJS:

- `VITE_EMAIL_SERVICE_ID`
- `VITE_EMAIL_TEMPLATE_ID`
- `VITE_EMAIL_PUBLIC_KEY`

Missing values silently break form submit. Add to `.env.local` for local dev.

## Architecture

Single-page portfolio. All visible content is one long scrollable page composed of section components.

Render tree:

`main.tsx` → `BrowserRouter` → `ThemeContextProvider` → `App` → `Routers` (single `/` route) → `MainLayout` (Navbar + Outlet) → `RootPage` (renders Home, About, Services, Education, Skills, Experience, Projects, Reviews, Blogs, Contact, Footer in order).

Key cross-cutting pieces:

- **`src/contexts/ThemeContext.tsx`** — owns `theme` (`dark`/`light`, persisted to `localStorage`, toggles `body.dark` class) and `active` nav link id. Sole global state.
- **`src/hooks/useActiveLink.ts`** — each section calls this with its id; uses `react-intersection-observer` (threshold 0.2) to push the in-view section id into `ThemeContext.active`, which Navbar reads to highlight the current link.
- **`src/components/index.tsx`** — barrel export. Add new components here so `RootPage` / `App` imports keep working.
- **`src/constants/index.ts`** — large central data file (~700 lines): `basicInfo`, `navLinks`, `sidebarSocials`, skills, projects, blogs, experience, etc. Section components are mostly presentational and read from here. Image assets imported from `src/assets/...` at the top.
- **`src/utils/index.ts`** — `getAge` plus framer-motion variant factories (`textVariant`, `fadeIn`, `zoomIn`, `slideIn`, `staggerContainer`). `src/helpers/variants.ts` holds additional motion variants.

Routing is nominal — only `/` exists. `AnimatePresence` wraps `Routes` for future page transitions.

Styling: Bootstrap 5 + custom CSS in `src/App.css` and `src/index.css`. Dark mode via `body.dark` class; sections style off that.

## Conventions

- React imports: named only (`import { useState } from "react"`). No default `React` import. JSX runtime handles it.
- New page section: create `src/components/Foo.tsx`, call `useActiveLink("#foo")` and spread `ref` on the section root, export from `components/index.tsx`, add to `RootPage.tsx`, and add a nav entry in `constants/index.ts` `navLinks`.
- Strings/data (links, labels, lists) belong in `constants/index.ts`, not inline in components.
