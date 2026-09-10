# Pomoć kod izvršitelja Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build the first responsive public landing page for people facing enforcement officers in Serbia, with a high-attention opening, a clear path to paid help, and a visual transition from alarm to relief.

**Architecture:** Keep the first release as one server-rendered route in the existing Vinext starter. Use semantic HTML, Tailwind utility classes, and lucide-react icons already present in the project. Keep copy and content data local to `app/page.tsx`; do not add authentication, uploads, payments, database state, or extra routes until the landing-page flow is validated.

**Tech Stack:** Next/Vinext starter, React 19, TypeScript, Tailwind CSS 4, lucide-react, Cloudflare-compatible Sites build.

**Spec:** `docs/superpowers/specs/2026-09-09-izvrsitelji-site-design.md`

## Global Constraints

- The first viewport must immediately identify problems with izvršitelji and expose the primary CTA.
- The visual story must move from dark graphite/red alarm to calmer blue/green clarity and hope.
- Serbian copy must be plain, specific, and human; avoid guaranteed outcomes and official-institution claims.
- SEO phrases must be used naturally in headings, cards, and article topics; do not keyword-stuff.
- Main body text must remain at least 16px and controls/labels at least 14px.
- The first release must not introduce authentication, document uploads, payments, persistence, or speculative routes.
- Preserve the existing starter package manager, lockfile, build scripts, and `.openai/hosting.json` project identity.

### Task 1: Replace the starter screen with the first product slice

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- `app/layout.tsx` provides Serbian document metadata and `lang="sr"`.
- `app/page.tsx` provides one accessible, responsive landing-page route with in-page anchor targets `#problemi`, `#kako-radimo`, `#o-nama`, and `#kontakt`.

- [x] **Step 1: Remove the generated placeholder UI**

Delete the starter skeleton from `app/page.tsx` and replace it with semantic sections: header, hero, problem cards, process, about, SEO topic cards, transparency note, and final CTA.

- [x] **Step 2: Add product-specific copy and icons**

Use Serbian copy beginning with a direct alert such as `Imate problem sa izvršiteljem?` and include problem cards for blocked accounts, salary/pension enforcement, unknown debt, property inventory/sale, limitation, and received decisions. Import only icons that communicate those meanings from `lucide-react`.

- [x] **Step 3: Add meaningful anchor links and accessible labels**

Make the main CTA point to `#kontakt`, the secondary CTA point to `#kako-radimo`, give every icon decorative or descriptive treatment, and ensure buttons are actual links with visible focus styles.

- [x] **Step 4: Update metadata**

Set a Serbian title and description focused on help with izvršitelji, add `sr` language metadata, and remove the starter-only preview wording from the metadata.

- [x] **Step 5: Run the type/build check**

Run `npm run build` from `/workspace/sites/pomoc-izvrsitelji`.

Expected: the site build completes without TypeScript, route, or asset errors.

- [x] **Step 6: Commit the first product slice**

```bash
git add app/page.tsx app/layout.tsx
git commit -m "feat: add executors support landing page"
```

### Task 2: Apply the alarm-to-relief visual system

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Shared theme tokens define the page background, foreground, border, accent, and focus colors.
- Page-specific classes in `app/page.tsx` use the shared palette and responsive utilities without changing component-library source files.

- [x] **Step 1: Replace starter theme tokens**

Set deliberate light and dark-compatible tokens for graphite, off-white, signal red, platinum blue, and relief green. Keep contrast high for text and controls.

- [x] **Step 2: Add reusable visual utilities**

Add only small global utilities needed by the page, such as a soft grid/noise background treatment, a highlighted text gradient, and a consistent focus ring. Keep representational imagery in CSS out of scope; use gradients and geometry only for non-representational accents.

- [x] **Step 3: Verify responsive typography and overflow**

Check the page CSS for minimum readable sizes, safe line heights, mobile stacking, and no fixed-width element that can create horizontal scrolling.

- [x] **Step 4: Run the build again**

Run `npm run build`.

Expected: the build remains successful after the theme changes.

- [x] **Step 5: Commit the visual system**

```bash
git add app/globals.css
git commit -m "style: establish alarm to relief visual system"
```

### Task 3: Produce and inspect the first render

**Files:**
- Inspect: `app/page.tsx`
- Inspect: `app/globals.css`
- Inspect: generated build output under `dist/`

**Interfaces:**
- The built route renders the same product slice locally and in the Sites build.
- The visual check is limited to the requested first render; no extra product features are added during QA.

- [x] **Step 1: Start the supported supervised preview only for visual QA**

Run `sites-preview start /workspace/sites/pomoc-izvrsitelji` using the environment’s preview command because the user explicitly requested a render.

- [x] **Step 2: Inspect the first viewport and one scrolled section**

Verify that the title, primary CTA, alarm styling, and first problem cards are visible and that the transition toward the calmer sections is legible on desktop and mobile widths.

- [x] **Step 3: Fix only blocking visual or runtime issues**

Correct compilation, clipped text, unreadable contrast, broken anchors, or horizontal overflow. Do not add new sections or application functionality during this pass.

- [x] **Step 4: Stop the preview and run the final build**

Stop the supervised preview with its supported teardown command, then run `npm run build` once more.

Expected: the final build succeeds and the first render is coherent at both target widths.

### Task 4: Add the case-check route behind the primary CTA

**Files:**
- Create: `app/provera-slucaja/page.tsx`
- Modify: `app/page.tsx`
- Modify: `scripts/test-landing-page.mjs`

**Interfaces:**
- `/provera-slucaja` is a client-side guided three-step intake preview.
- The landing-page primary CTA and problem/topic links navigate to `/provera-slucaja`.

- [x] **Step 1: Add the route contract test**

Extend the existing contract check to require the new route, its three-step label, a representative problem, and the `Nastavite` control.

- [x] **Step 2: Build the guided intake**

Implement local-only state for problem selection, urgency selection, review, and a transparent completion screen. Do not transmit or persist personal data.

- [x] **Step 3: Connect the landing page CTA**

Point the main `Proverite svoj slučaj` action and relevant supporting links to `/provera-slucaja`.

- [x] **Step 4: Verify the route visually and functionally**

Use the supervised preview to confirm the initial route, select a problem, advance to the second step, and verify the completion layout renders without runtime errors.

### Task 5: Prepare the repository for GitHub and tomorrow’s domain transfer

**Files:**
- Inspect: `.openai/hosting.json`
- Inspect: `README.md`
- Modify: `README.md` only if the starter instructions still describe the placeholder site.

**Interfaces:**
- `.openai/hosting.json` keeps the registered Sites project ID unchanged.
- The repository remains portable so it can be pushed to the user’s GitHub repository and later connected to the final Lopija domain.

- [x] **Step 1: Confirm repository state**

Run `git status --short`, verify that only intended source and documentation files are changed, and confirm `.openai/hosting.json` still contains the registered project ID.

- [x] **Step 2: Add a concise project README**

Replace starter-only description text with the current purpose, local run/build commands, and a note that the final domain is configured later through Lopija. Do not include credentials or tokens.

- [x] **Step 3: Commit repository handoff documentation**

```bash
git add README.md
git commit -m "docs: prepare repository handoff"
```

- [x] **Step 4: Report GitHub handoff requirement**

Before pushing, obtain the user’s exact GitHub repository URL or have the user create/select the destination repository. Use per-command authentication and never store tokens in the repository.
