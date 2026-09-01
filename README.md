# Alejandro Morales — Portfolio

A Next.js + TypeScript + Tailwind implementation of "The Brief" — a portfolio
site framed as a literal marketing brief, built around three cases: L'Oréal
(trade marketing), EPA (consumer insight → product), and Trivela (independent
brand & content).

## Before you deploy: fill in the real content

This code ships with **honest placeholders**, not invented facts. Open
`lib/cases.ts` and search for `[pending]` and `[...]` — those are the spots
where real numbers, dates, and specifics need to go in before this goes live
to a recruiter. Nothing here was fabricated; everything bracketed is waiting
on you to confirm it.

Also update:
- `app/layout.tsx` — the `metadataBase` URL (once you know your final
  `.vercel.app` address, or a custom domain).
- `app/page.tsx` — the hero portrait block (currently a placeholder gradient
  + stamp) and the footer email address.

## Running it locally (optional)

You don't need to run this locally to deploy it — Vercel builds it for you
(see below). But if you want to preview it on your own machine first, you'll
need [Node.js](https://nodejs.org) 18 or newer installed, then:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploying to Vercel for free (no local setup needed)

This is the path that costs $0 and doesn't require installing anything on
your computer.

**1. Put the code on GitHub**
   - Create a free account at [github.com](https://github.com) if you don't
     have one.
   - Click **New repository**, name it something like `alejandro-portfolio`,
     keep it **Public** or **Private** (either works), and click **Create
     repository** — leave it empty (don't add a README there).
   - On the new repo's page, click **uploading an existing file**, then drag
     in every file and folder from this project (keep the folder structure —
     `app/`, `components/`, `lib/`, plus the config files at the root).
   - Commit the upload.

**2. Import it into Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up using **Continue with
     GitHub** — this links the two accounts automatically.
   - Click **Add New… → Project**.
   - Find your `alejandro-portfolio` repo in the list and click **Import**.
   - Vercel auto-detects Next.js — leave the default settings as they are.
   - Click **Deploy**.

**3. Wait ~1–2 minutes**
   - Vercel installs the dependencies and builds the site. You'll see a
     build log; if something's red, copy the error and we'll fix it.
   - When it finishes, you'll get a free URL like
     `alejandro-portfolio.vercel.app`.

**4. Future updates**
   - Any time you (or I) push a new version of the files to that same GitHub
     repo, Vercel automatically rebuilds and redeploys — no extra steps.

## Project structure

```
app/
  layout.tsx          site-wide fonts + metadata
  page.tsx             homepage
  work/[slug]/page.tsx case study template (one route, three cases)
  globals.css
components/
  ColorStripe.tsx      cobalt/coral/mustard 5px header stripe
  FieldLabel.tsx        "— LABEL" section headers
  Stamp.tsx             the "A.M. / REVIEWED" rubber-stamp mark
  ExhibitTile.tsx        photo/video proof tile used in galleries
  Icons.tsx
lib/
  cases.ts              all case-study content lives here as data
```

## Design system reference

Colors, type, and rationale are documented in the project's
`portfolio-creative-direction-v2.md`. Short version:

- **Cream** `#F4EEDF` background, **Ink Navy** `#14181F` for dark bands
  (header, hero, footer).
- **Cobalt** `#2B4EA8` = L'Oréal, **Coral** `#E2492B` = EPA (also the fixed
  "team result" flag color everywhere), **Mustard** `#D9A62E` = Trivela.
- **Space Grotesk** for display/UI, **Source Serif 4** for narrative body
  text, **Caveat** for the handwritten signature accent.
