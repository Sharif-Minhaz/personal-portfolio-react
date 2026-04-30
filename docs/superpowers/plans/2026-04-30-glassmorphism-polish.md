# Glassmorphism Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply medium-intensity glassmorphism polish to the existing portfolio: cyan→violet palette, glass cards/sidebar, animated bg blobs, gradient CTAs. No layout, content, or dependency changes.

**Architecture:** New CSS custom properties + glass utility classes added to `src/index.css`. A single fixed blob layer mounted in `MainLayout.tsx`. Per-component edits add classNames to existing JSX. Existing `App.css` is audited for orange color removal, heading underline gradient, and ghost watermark opacity. `ThemeContext` (`body.dark` toggle) is preserved as the dark/light driver.

**Tech Stack:** React 18 + TS (Vite SWC), Bootstrap 5, custom CSS. No test runner configured (per CLAUDE.md), so per-task verification = `npm run lint` + visual check in `npm run dev`. Final task runs `npm run build` end-to-end.

**Reference spec:** `docs/superpowers/specs/2026-04-30-glassmorphism-polish-design.md`

---

## File Structure

| File | Responsibility |
|---|---|
| `src/index.css` | New design tokens (`--accent-cyan`, `--accent-violet`, `--accent-gradient`, `--glass-*`, `--blob-opacity`), glass utility classes, blob layer CSS, keyframes, reduced-motion guard |
| `src/App.css` | Audited: orange hex values replaced, section heading underlines made gradient, ghost watermark opacity reduced |
| `src/pages/layouts/MainLayout.tsx` | Mounts the `<div class="bg-blobs">` layer once at app root |
| `src/components/Navbar.tsx` | Sidebar shell + active nav state restyled to glass + gradient |
| `src/components/Home.tsx` | Hero "Welcome" gradient text, "Hire Me" gradient button |
| `src/components/About.tsx` | 4 stat tiles → glass-card, "View Resume" → btn-gradient |
| `src/components/Services.tsx` | 6 cards → glass-card |
| `src/components/Education.tsx` | Cards → glass-card |
| `src/components/Experience.tsx` | Items → glass-card |
| `src/components/Skills.tsx` | Hex tile bg → glass, "View Resume" → btn-gradient |
| `src/components/Projects.tsx` | Cards → glass-card, title→white, "Load More" → btn-gradient, tag chips glass-mini |
| `src/components/Reviews.tsx` | Cards → glass-card |
| `src/components/Blogs.tsx` | Cards → glass-card, titles white, "Read more" cyan |
| `src/components/Contact.tsx` | Info column → glass-card |
| `src/components/ContactForm.tsx` | Inputs glass styled, "Send Message" → btn-gradient |
| `src/components/Footer.tsx` | Glass strip, "Sharif" name → text-gradient |

No new files. No file deletions.

---

## Conventions for every task

1. After every code change, run `npm run lint` and confirm it exits 0 (project enforces `--max-warnings 0`).
2. Commit at the end of each task with the message shown.
3. Do NOT add `import React from "react"`. Use named imports only (project rule).
4. When a task says "find the existing X container", use grep/Read first. Do not guess class names.
5. When adding a className to a Bootstrap-classed element, append — never replace existing Bootstrap classes (`row`, `col-*`, `d-flex`, etc.) unless explicitly told.

---

## Task 1: Add design tokens to `index.css`

**Files:**
- Modify: `src/index.css` (extend existing `html body` and `html body.dark` blocks at lines 8-49)

- [ ] **Step 1: Append new CSS variables to the light block**

Insert these lines INSIDE the existing `html body { ... }` block (after `--card-bg: #f8fcfe;` on line 29, before the closing brace):

```css
  /* glassmorphism tokens */
  --bg-base: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --accent-cyan: #0891b2;
  --accent-violet: #7c3aed;
  --accent-gradient: linear-gradient(135deg, var(--accent-cyan), var(--accent-violet));
  --glass-bg: rgba(255, 255, 255, 0.55);
  --glass-bg-strong: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(15, 23, 42, 0.08);
  --glass-shadow: 0 8px 32px rgba(15, 23, 42, 0.08);
  --blob-opacity: 0.15;
```

- [ ] **Step 2: Append new CSS variables to the dark block**

Insert these lines INSIDE `html body.dark { ... }` (before the closing brace):

```css
  /* glassmorphism tokens (dark) */
  --bg-base: #0a0a14;
  --text-primary: #e5e7eb;
  --text-secondary: #94a3b8;
  --accent-cyan: #22d3ee;
  --accent-violet: #a855f7;
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-bg-strong: rgba(255, 255, 255, 0.07);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  --blob-opacity: 0.20;
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: exits 0, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "style(theme): add glassmorphism design tokens

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Add glass utility classes + blob CSS to `index.css`

**Files:**
- Modify: `src/index.css` (append new block at end of file)

- [ ] **Step 1: Append utility classes and blob layer**

Append to the END of `src/index.css`:

```css
/* ------------------- glassmorphism utilities ------------------- */
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

.glass-mini {
  background: var(--glass-bg-strong);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
  border: 1px solid var(--glass-border);
  border-radius: 999px;
}

.btn-gradient {
  background: var(--accent-gradient) !important;
  color: #0a0a14 !important;
  border: none !important;
  transition: box-shadow 200ms ease, filter 200ms ease;
}

.btn-gradient:hover,
.btn-gradient:focus {
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.4);
  filter: brightness(1.05);
  color: #0a0a14 !important;
}

.text-gradient {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass-card,
  .glass-shell,
  .glass-mini {
    background: var(--card-bg);
  }
}

/* ------------------- background blob layer ------------------- */
.bg-blobs {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.bg-blobs .blob {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: var(--blob-opacity);
  will-change: transform;
}

.bg-blobs .blob-1 {
  top: -10%;
  left: -10%;
  background: var(--accent-cyan);
  animation: blob-drift-1 28s ease-in-out infinite;
}

.bg-blobs .blob-2 {
  bottom: -15%;
  right: -10%;
  background: var(--accent-violet);
  animation: blob-drift-2 32s ease-in-out infinite;
}

.bg-blobs .blob-3 {
  top: 40%;
  left: 40%;
  background: var(--accent-cyan);
  opacity: calc(var(--blob-opacity) * 0.6);
  animation: blob-drift-3 36s ease-in-out infinite;
}

@keyframes blob-drift-1 {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(80px, 60px); }
}

@keyframes blob-drift-2 {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(-70px, -50px); }
}

@keyframes blob-drift-3 {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(40px, -60px); }
}

@media (prefers-reduced-motion: reduce) {
  .bg-blobs .blob {
    animation: none;
  }
}
```

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "style(theme): add glass utility classes and animated blob layer

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Mount blob layer in `MainLayout.tsx`

**Files:**
- Modify: `src/pages/layouts/MainLayout.tsx`

- [ ] **Step 1: Read current file**

Run: `cat src/pages/layouts/MainLayout.tsx`

You will see a small JSX returning Navbar + `<Outlet />` (and possibly other chrome).

- [ ] **Step 2: Add the blob layer**

Insert this JSX as the FIRST child of the layout's root return element (before Navbar):

```tsx
<div className="bg-blobs" aria-hidden="true">
  <span className="blob blob-1" />
  <span className="blob blob-2" />
  <span className="blob blob-3" />
</div>
```

If the layout currently returns a fragment `<>...</>`, keep the fragment — JSX siblings are fine.

- [ ] **Step 3: Run dev server, verify visually**

Run: `npm run dev` in a separate terminal. Open `http://localhost:5173/`. Confirm:
- Soft cyan glow visible top-left
- Soft violet glow visible bottom-right
- Glow drifts slowly (≥20s loop, no jumpiness)
- Toggle dark mode → blobs visible in both themes (subtler in light)

Stop the dev server.

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: exits 0.

- [ ] **Step 5: Commit**

```bash
git add src/pages/layouts/MainLayout.tsx
git commit -m "feat(layout): mount animated background blob layer

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Audit `App.css` — remove orange, gradient underline, dim watermark

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Find every orange-family color**

Run: `grep -niE '#(ff[789a-f]|f[97][0-9a-f])[0-9a-f]{2,3}' src/App.css`

Also run: `grep -niE 'orange|#f97316|#ff7849|#fb923c' src/App.css`

Note every line number returned.

- [ ] **Step 2: Replace each orange occurrence**

For each orange match found in step 1:
- If it's a text/link color, replace with `var(--accent-cyan)`.
- If it's a background-color on a button or large fill, replace with `var(--accent-cyan)` AND add a sibling rule (or extend the existing one) using the gradient: `background: var(--accent-gradient);` (only for primary CTAs — buttons labeled "Load More", "View Resume", "Send Message", "Read more"). For non-CTA orange (e.g. project tag accents, blog title), use `var(--accent-cyan)`.
- If it's a border-color, replace with `var(--accent-cyan)`.

- [ ] **Step 3: Find and update section heading underlines**

The Heading component (`src/components/Heading.tsx`) renders an underline bar. Run: `cat src/components/Heading.tsx` and identify the className used for the bar. Then in `App.css`, find the rule for that class and change `background-color: <whatever>` (likely `--change-color` or a hex) to:

```css
background: var(--accent-gradient);
```

- [ ] **Step 4: Find and dim ghost watermark text**

The big "ABOUT ME"/"SERVICES"/"SKILLS" text behind section headings is rendered as a class in `Heading.tsx` or a related rule. Run: `grep -niE 'opacity|font-size:.*[6-9][0-9]|text-stroke' src/App.css | head -50` and the rule for the watermark class. Set its `opacity` to `0.03` (down from the current value, likely 0.05-0.15).

- [ ] **Step 5: Run lint**

Run: `npm run lint`
Expected: exits 0.

- [ ] **Step 6: Visual check**

Run: `npm run dev`. Confirm:
- No orange visible anywhere on the page
- Heading underlines (e.g. under "Know Me More") show cyan→violet gradient
- Ghost watermark text behind section titles is barely visible (≤0.05 opacity)
- Dark and light modes both still readable

Stop dev server.

- [ ] **Step 7: Commit**

```bash
git add src/App.css
git commit -m "style: remove orange palette, gradient heading underlines, dim watermarks

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Sidebar + mobile nav glass treatment (`Navbar.tsx`)

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/App.css` (to remove conflicting solid backgrounds on sidebar)

- [ ] **Step 1: Read current Navbar**

Run: `cat src/components/Navbar.tsx`

Identify:
- The desktop sidebar root element's className (likely something like `aside` or `.sidebar`)
- The mobile top-bar element's className
- The active link className (likely `active-link` per `index.css:207`)
- The profile pic ring className

- [ ] **Step 2: Add `glass-shell` to sidebar root and mobile bar**

In the JSX, append `glass-shell` to the className of:
- The desktop `<aside>` (or sidebar root)
- The mobile sticky top bar

Example: `className="aside-styles"` becomes `className="aside-styles glass-shell"`.

- [ ] **Step 3: In `App.css`, remove sidebar solid background**

Find the sidebar's CSS rule (search for the className you found in step 1). Replace any `background-color: var(--aside-color)` or hex bg with:

```css
background: transparent;
```

Keep the border-right if present, but change its color to `var(--glass-border)`.

- [ ] **Step 4: Update active link style**

In `App.css`, find the `.active-link` rule (or the rule applied to the active nav item). Add:

```css
background: rgba(34, 211, 238, 0.12);
border-left: 3px solid var(--accent-cyan);
border-radius: 0 8px 8px 0;
padding-left: calc(var(--existing-padding, 1rem) - 3px);
```

If a left padding rule already exists, subtract 3px from it instead of using a CSS var.

- [ ] **Step 5: Profile pic ring → gradient**

Find the profile pic CSS (search `App.css` for the relevant className from step 1). It currently has a solid cyan border. Replace `border: Npx solid <color>` with:

```css
border: 3px solid transparent;
background: var(--accent-gradient) border-box;
-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
-webkit-mask-composite: xor;
mask-composite: exclude;
```

If that masking is fragile, the simpler fallback is:

```css
border: 3px solid var(--accent-cyan);
box-shadow: 0 0 0 1px var(--accent-violet);
```

Pick the simpler fallback if mask doesn't render correctly in Brave/Chrome.

- [ ] **Step 6: Run lint + visual check**

Run: `npm run lint && npm run dev`. Verify:
- Sidebar has frosted look, content behind shows through faintly
- Active nav link has gradient-tinted background + cyan left bar
- Profile pic has gradient ring (or cyan with violet outer ring fallback)

Stop dev server.

- [ ] **Step 7: Commit**

```bash
git add src/components/Navbar.tsx src/App.css
git commit -m "style(nav): glass sidebar shell, gradient profile ring, accent active state

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Hero (`Home.tsx`)

**Files:**
- Modify: `src/components/Home.tsx`
- Modify: `src/App.css` (hero overlay darken, "Welcome" gradient text)

- [ ] **Step 1: Read Home component**

Run: `cat src/components/Home.tsx`

Identify:
- The "Welcome" text element + its className
- The "Hire Me" button element + its className
- Any hero overlay styling (may be in App.css)

- [ ] **Step 2: Add `text-gradient` to Welcome label**

In Home.tsx, append `text-gradient` to the "Welcome" element's className.

- [ ] **Step 3: Add `btn-gradient` to Hire Me button**

In Home.tsx, append `btn-gradient` to the "Hire Me" button's className.

- [ ] **Step 4: Darken hero overlay**

In `App.css`, find the hero section background overlay (search for the className of the hero wrapper, look for `background:` with a `linear-gradient(...rgba(0,0,0,...))` or similar). Replace the dark stop with `rgba(10, 10, 20, 0.55)`.

If no overlay exists currently, add one to the hero rule:

```css
background-color: rgba(10, 10, 20, 0.55);
background-blend-mode: multiply;
```

- [ ] **Step 5: Run lint + visual check**

Run: `npm run lint && npm run dev`. Verify:
- "Welcome" label shows cyan→violet gradient text
- "Hire Me" pill button is gradient-filled, dark text, glow on hover
- Hero image still visible but darker; blobs faintly bleed through edges

Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add src/components/Home.tsx src/App.css
git commit -m "style(home): gradient welcome text, gradient hire me CTA, darker hero overlay

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: About section (`About.tsx`)

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/App.css` (remove conflicting card bg/border on stat tiles)

- [ ] **Step 1: Read About component**

Run: `cat src/components/About.tsx`

Identify:
- The 4 stat tile container className (Experience/Finished Projects/Satisfied Peoples/Company)
- The "View Resume" button className

- [ ] **Step 2: Add `glass-card` to each stat tile**

In About.tsx, append `glass-card` to each of the 4 stat tile elements. Also add inline padding via className `p-3` (Bootstrap) if tiles look cramped.

- [ ] **Step 3: Add `btn-gradient` to View Resume button**

Append `btn-gradient` to the View Resume button's className.

- [ ] **Step 4: Remove conflicting bg from App.css**

In `App.css`, find the rule for the stat tile className. Remove or comment out any `background-color`, `background:` (solid), or solid `border:` declarations. Leave layout (padding, display, gap) untouched.

- [ ] **Step 5: Run lint + visual check**

`npm run lint && npm run dev`. Verify 4 stat tiles show frosted glass with hover lift; "View Resume" is gradient.

Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add src/components/About.tsx src/App.css
git commit -m "style(about): glass stat tiles, gradient resume CTA

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Services section (`Services.tsx`)

**Files:**
- Modify: `src/components/Services.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read Services component**

Run: `cat src/components/Services.tsx`

Identify the service card container className (the element wrapping each of the 6 services).

- [ ] **Step 2: Append `glass-card` to each service card**

In Services.tsx, add `glass-card` to the card root className.

- [ ] **Step 3: Remove conflicting solid bg from App.css**

Find the corresponding rule in App.css. Remove `background-color: var(--card-bg)` or any solid bg. Keep padding/spacing.

- [ ] **Step 4: Lint + visual**

`npm run lint && npm run dev`. Verify 6 service cards are frosted, icons still visible, hover lift works. Stop dev.

- [ ] **Step 5: Commit**

```bash
git add src/components/Services.tsx src/App.css
git commit -m "style(services): glass service cards

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Education section (`Education.tsx`)

**Files:**
- Modify: `src/components/Education.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read Education component**

Run: `cat src/components/Education.tsx`. Identify the education card className.

- [ ] **Step 2: Add `glass-card` to each education card**

Append to className.

- [ ] **Step 3: Remove conflicting bg from App.css**

Same pattern as Task 8. The date pill (e.g. "2012 - 2017") should KEEP its colored background — do not change the date pill rule.

- [ ] **Step 4: Lint + visual**

Education cards frosted; date pills retain accent color. Stop dev.

- [ ] **Step 5: Commit**

```bash
git add src/components/Education.tsx src/App.css
git commit -m "style(education): glass education cards

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 10: Experience section (`Experience.tsx`)

**Files:**
- Modify: `src/components/Experience.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read + identify experience item className**

Run: `cat src/components/Experience.tsx`.

- [ ] **Step 2: Append `glass-card` to each experience item**

- [ ] **Step 3: Remove conflicting bg from App.css**

- [ ] **Step 4: Lint + visual**

Stop dev.

- [ ] **Step 5: Commit**

```bash
git add src/components/Experience.tsx src/App.css
git commit -m "style(experience): glass experience items

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 11: Skills section (`Skills.tsx`)

**Files:**
- Modify: `src/components/Skills.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read Skills**

Run: `cat src/components/Skills.tsx`. Identify:
- The hexagon tile className
- The "View Resume" button className

- [ ] **Step 2: Hex tile bg → glass**

In `App.css`, find the hex tile rule. Replace its solid `background-color` (likely a dark hex like `#1a1f24` or `var(--card-bg)`) with `var(--glass-bg)`. Add:

```css
backdrop-filter: blur(12px) saturate(140%);
-webkit-backdrop-filter: blur(12px) saturate(140%);
border: 1px solid var(--glass-border);
transition: border-color 200ms ease, box-shadow 200ms ease;
```

Add a hover rule:

```css
.hex-tile-classname:hover {
  border-color: rgba(34, 211, 238, 0.4);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.2);
}
```

(Replace `.hex-tile-classname` with the actual class.)

- [ ] **Step 3: Add `btn-gradient` to View Resume button in Skills.tsx**

- [ ] **Step 4: Lint + visual**

Hex tiles frosted, gradient hover glow, gradient button. Stop dev.

- [ ] **Step 5: Commit**

```bash
git add src/components/Skills.tsx src/App.css
git commit -m "style(skills): glass hex tiles, gradient resume CTA

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 12: Projects section (`Projects.tsx`)

**Files:**
- Modify: `src/components/Projects.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read Projects**

Run: `cat src/components/Projects.tsx`. Identify:
- Project card className
- Project title element + className
- "Load More" button className
- Tag chip className (`#react`, `#tailwind`, etc.)

- [ ] **Step 2: Append `glass-card` to each project card**

- [ ] **Step 3: Title color**

In `App.css`, find the project title rule. Change color from orange to `var(--text-primary)` (or `#fff` if currently `#fff`-equivalent for dark mode). Confirm both modes readable.

- [ ] **Step 4: "Load More" → btn-gradient**

In Projects.tsx, append `btn-gradient` to the Load More button's className.

- [ ] **Step 5: Tag chips → glass-mini**

In Projects.tsx, append `glass-mini` to each tag chip className. Per-tag text colors stay (they come from inline style or per-tag class). In `App.css`, find the tag chip rule and remove its `background-color` if any.

- [ ] **Step 6: Remove conflicting bg from project card rule**

Find the project card rule in `App.css`. Remove solid bg / heavy border.

- [ ] **Step 7: Lint + visual**

Project cards frosted; titles white/dark per theme; Load More gradient; tag chips glass pills retaining colored text. Stop dev.

- [ ] **Step 8: Commit**

```bash
git add src/components/Projects.tsx src/App.css
git commit -m "style(projects): glass project cards, gradient load-more, glass tag chips

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 13: Reviews section (`Reviews.tsx`)

**Files:**
- Modify: `src/components/Reviews.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read Reviews**

Run: `cat src/components/Reviews.tsx`. Identify the testimonial card className.

- [ ] **Step 2: Append `glass-card` to each testimonial card**

- [ ] **Step 3: Remove conflicting bg from App.css**

- [ ] **Step 4: Lint + visual**

Testimonial cards frosted, star ratings still visible. Stop dev.

- [ ] **Step 5: Commit**

```bash
git add src/components/Reviews.tsx src/App.css
git commit -m "style(reviews): glass testimonial cards

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 14: Blogs section (`Blogs.tsx`)

**Files:**
- Modify: `src/components/Blogs.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read Blogs**

Run: `cat src/components/Blogs.tsx`. Identify:
- Blog card className
- Blog title className
- "Read more" link className
- "Read More" footer button className (if any)

- [ ] **Step 2: Append `glass-card` to each blog card**

- [ ] **Step 3: Title color**

In `App.css`, change the blog title color from orange to `var(--text-primary)` (white in dark, dark in light).

- [ ] **Step 4: "Read more" link → cyan**

In `App.css`, change the per-card "Read more" link color to `var(--accent-cyan)`. Keep the arrow icon inheriting color.

- [ ] **Step 5: Footer "Read More" button (if present) → btn-gradient**

If `Blogs.tsx` has a section-footer Read More button, append `btn-gradient` to its className.

- [ ] **Step 6: Remove conflicting bg from App.css**

Same pattern.

- [ ] **Step 7: Lint + visual**

Blog cards frosted; titles readable in both themes; "Read more" links cyan. Stop dev.

- [ ] **Step 8: Commit**

```bash
git add src/components/Blogs.tsx src/App.css
git commit -m "style(blogs): glass blog cards, cyan read-more links

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 15: Contact section (`Contact.tsx` + `ContactForm.tsx`)

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/ContactForm.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read both files**

Run: `cat src/components/Contact.tsx src/components/ContactForm.tsx`.

Identify:
- Address/info column container className
- Form input classNames (Name, Email, message textarea)
- "Send Message" button className

- [ ] **Step 2: Wrap address column in `glass-card`**

In Contact.tsx, append `glass-card` to the address/info column container className. Add `p-4` (Bootstrap padding) if it looks cramped.

- [ ] **Step 3: Style form inputs**

In `App.css`, find the input rules for the contact form (likely targeting `input[type="text"]`, `input[type="email"]`, `textarea` within a contact form class). Set:

```css
background: var(--glass-bg);
border: 1px solid var(--glass-border);
color: var(--text-primary);
backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(8px);
transition: border-color 200ms ease;
```

And focus rule:

```css
.contact-input-classname:focus {
  border-color: var(--accent-cyan);
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
}
```

(Replace `.contact-input-classname` with the actual class scoping the form inputs.)

- [ ] **Step 4: Send Message → btn-gradient**

In ContactForm.tsx, append `btn-gradient` to the submit button's className.

- [ ] **Step 5: Lint + visual**

Address column frosted; inputs frosted with cyan focus ring; submit button gradient. Stop dev.

- [ ] **Step 6: Commit**

```bash
git add src/components/Contact.tsx src/components/ContactForm.tsx src/App.css
git commit -m "style(contact): glass info card, frosted form inputs, gradient submit

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 16: Footer (`Footer.tsx`)

**Files:**
- Modify: `src/components/Footer.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Read Footer**

Run: `cat src/components/Footer.tsx`.

Identify:
- Footer root className
- The "Sharif" name span/element

- [ ] **Step 2: Append `glass-shell` to footer root**

- [ ] **Step 3: Append `text-gradient` to the "Sharif" name element**

- [ ] **Step 4: Remove conflicting bg from App.css**

Find footer rule. Replace solid `background-color: var(--footer-bg)` with `background: transparent;` (the `glass-shell` class supplies the frosted bg).

- [ ] **Step 5: Lint + visual**

Footer is frosted; "Sharif" name shows gradient. Stop dev.

- [ ] **Step 6: Commit**

```bash
git add src/components/Footer.tsx src/App.css
git commit -m "style(footer): glass footer strip, gradient name accent

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 17: Final verification

**Files:** none modified — verify only

- [ ] **Step 1: Run full lint**

Run: `npm run lint`
Expected: exits 0, no errors.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: TS check passes, Vite build completes, no errors.

- [ ] **Step 3: Preview build**

Run: `npm run preview`. Open `http://localhost:4173/`. Walk through every section in order:

- [ ] Home — gradient "Welcome" + gradient Hire Me, hero readable
- [ ] About — 4 glass stat tiles, gradient View Resume
- [ ] Services — 6 glass cards
- [ ] Education — glass cards, date pills retain accent
- [ ] Experience — glass items
- [ ] Skills — frosted hex tiles, gradient resume btn
- [ ] Projects — glass cards, gradient Load More, glass tag pills, no orange titles
- [ ] Reviews — glass testimonial cards
- [ ] Blogs — glass blog cards, cyan "Read more"
- [ ] Contact — glass info column, frosted form inputs, cyan focus ring, gradient submit
- [ ] Footer — glass strip, gradient "Sharif"

- [ ] **Step 4: Toggle light mode**

Click the theme switcher. Walk every section again. Confirm:
- Glass remains visible (lighter tint)
- Text remains readable
- Blobs visible but subtler
- No orange anywhere

- [ ] **Step 5: Mobile sanity check**

In DevTools, toggle responsive view → 375px width. Confirm:
- Top nav becomes glass mobile bar
- Cards stack and remain frosted
- No horizontal scroll introduced

- [ ] **Step 6: Reduced-motion check**

In DevTools → Rendering panel → "Emulate CSS media feature prefers-reduced-motion" → "reduce". Confirm blobs freeze (no animation).

- [ ] **Step 7: Orange grep — should be empty**

Run: `grep -niE '#(ff[789a-f]|f[97][0-9a-f])[0-9a-f]{2,3}' src/App.css src/index.css`
Expected: no output (or only matches inside comments).

- [ ] **Step 8: Final commit if any straggler tweaks were made**

If verification surfaced small issues, fix them and:

```bash
git add -A
git commit -m "fix(polish): final verification tweaks

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

If everything passed cleanly, no commit needed.

---

## Done

Plan covers every spec section: foundation tokens, blob layer, glass utilities, sidebar/navbar shell, all 9 content sections, footer, color audit, and end-to-end verification across both themes plus accessibility (reduced-motion). No new dependencies, no layout shifts, no content edits.
