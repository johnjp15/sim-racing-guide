# Sim Racing Equipment Guide

A beginner-friendly wiki for friends getting into sim racing after trying F1 Arcade.
Built as Markdown for **GitHub Wiki / MkDocs Material** — linkable pages, tier tables, and example builds that can be updated as prices change.

## Two-layer structure

This wiki has two layers so both kinds of reader are served:

- **Quick Start (Concise)** — `docs/quick/`: the skim layer. A 5-Minute Guide, an Equipment Finder, and Builds At A Glance that summarise the options and link into the detail. Start here if you just want equipment fast.
- **Full Guide — Detailed Chapters** — `docs/01-*.md` … `docs/10-*.md`, plus multi-page sections in `docs/components/` (one page per component category) and `docs/builds/` (one page per tier/build): the full reasoning, component deep-dive, buying logic, and the detailed example builds.

Prices and parts tables live **only** in the detailed build pages (`docs/builds/`) as the single source of truth. The concise layer summarises and links — it does not duplicate price tables, so the two layers can never drift into conflicting copies.

> **Status:** Scaffold only. Outline and structure are complete.
> Product picks and prices are marked **preliminary — verify in research phase**.
> Deep research comes next.

## Project Structure

```
sim-racing-guide/
├── mkdocs.yml              # MkDocs Material config + navigation (edit nav here to restructure)
├── README.md               # This file
└── docs/
    ├── index.md            # Home — two entry paths: Quick Start vs Full Guide
    ├── quick/              # CONCISE LAYER (skim / equipment finder)
    │   ├── quick-start.md        # 5-Minute Guide: the 5 decisions in order
    │   ├── equipment-finder.md   # Decision flow + quick picks (by budget/platform/space)
    │   └── builds-at-a-glance.md # Tier 0-5 summary table (links to builds/ for prices)
    ├── 01-what-is-sim-racing.md      # ─┐
    ├── 02-why-sim-race.md            #  │
    ├── 03-who-is-this-for.md         #  │
    ├── 04-where-and-when.md          #  ├─ FULL GUIDE (detailed chapters)
    ├── 05-how-it-works.md            #  │
    ├── 06-types-of-setups.md         #  │
    ├── 09-buying-smart.md            #  │
    ├── 10-first-setup-tuning-and-games.md # ─┘
    ├── components/         # COMPONENTS (multi-page, one category per file)
    │   ├── index.md              # Overview: how components fit together
    │   ├── wheelbases.md
    │   ├── pedals.md
    │   ├── wheel-rims.md
    │   ├── shifters-handbrakes.md
    │   ├── cockpits-mounting.md
    │   ├── displays-vr.md
    │   └── pc-audio-accessories.md
    ├── builds/             # EXAMPLE BUILDS (multi-page, one tier per file) <- source of truth for build prices
    │   ├── index.md              # Overview + how to read a build page
    │   ├── tier-0-desk-starter.md
    │   ├── tier-1-foldable-apartment.md
    │   ├── tier-2-first-dedicated-rig.md
    │   ├── tier-3-sweet-spot-enthusiast.md
    │   ├── tier-4-triples-vr-enthusiast.md
    │   └── tier-5-motion-pro.md
    ├── glossary.md
    └── faq.md
```

## Preview Locally

### 1. Install MkDocs Material

```bash
pip install mkdocs-material
```

> Tip: use a virtual environment if you prefer:
> `python -m venv .venv && source .venv/bin/activate`

### 2. Serve the site

From this project root (where `mkdocs.yml` lives):

```bash
mkdocs serve
```

Then open http://127.0.0.1:8000 in your browser. Edits to files in `docs/` hot-reload.

### 3. Build static HTML (optional)

```bash
mkdocs build
```

Output goes to `site/` (generated — do not edit by hand, and typically gitignored).

## Host on GitHub Pages

This project is set up for the Actions-based GitHub Pages deploy (not the `gh-pages` branch). The workflow is in `.github/workflows/deploy.yml`.

1. Create a **public** GitHub repo — on the free plan, GitHub Pages only works with public repos.
2. Push this folder as the repo root (the folder containing `mkdocs.yml`, `README.md`, `docs/`, and `.github/` should be the top of the repo).
3. Replace the `OWNER/REPO` placeholders in `mkdocs.yml`:
   - `site_url: https://OWNER.github.io/REPO/`
   - `repo_name: OWNER/REPO`
   - `repo_url: https://github.com/OWNER/REPO`
   Use your actual GitHub username/owner and repo name.
4. In the GitHub repo, go to **Settings -> Pages -> Build and deployment** and set **Source = GitHub Actions**.
5. Push to the `main` branch (or run the workflow manually from the Actions tab via *workflow_dispatch*).
6. GitHub Actions builds the site with MkDocs Material and deploys it. When the workflow finishes, the site is live at:

   `https://OWNER.github.io/REPO/`

Local preview is unchanged: `pip install mkdocs-material` then `mkdocs serve` (see "Preview Locally" above).

A custom domain is optional later via **Settings -> Pages -> Custom domain** — not required to launch, you can add it any time.

> Note: the research pack and flowchart files (`sim-racing-research-pack`, `sim-racing-decision-flowchart`) are separate downloads and are **not** part of this site unless you copy content from them into `docs/` yourself.

## Deploy

Deployed via GitHub Actions to GitHub Pages — see "Host on GitHub Pages" above.

- [x] GitHub Pages via `.github/workflows/deploy.yml` (Actions-based)
- [ ] Replace `OWNER/REPO` placeholders in `mkdocs.yml` and push to your own repo
- [ ] Optional: add a custom domain in Settings -> Pages

## Structure & Editing

The outline is **flexible by design** — it is expected to change.

- **One topic = one file.** Components live in `docs/components/`, builds in `docs/builds/`, concise pages in `docs/quick/`, and numbered chapters as individual files in `docs/`.
- **To add a page:** create the `.md` file, then add one line for it in the `nav:` section of `mkdocs.yml`.
- **To remove or rename a page:** delete/rename the file, edit its one nav line in `mkdocs.yml`, and update any relative Markdown links that point to it (search the repo for its filename).
- **To reorder:** just reorder lines in `mkdocs.yml` nav — no file moves needed.
- Internal links are relative Markdown links (e.g. `[Pedals](../components/pedals.md)` from `docs/builds/`), so they work in both MkDocs and GitHub Wiki.

## Writing Conventions

- One topic per file; keep nav in `mkdocs.yml` in sync when adding/removing/renaming pages.
- Two layers: concise pages live in `docs/quick/` and only summarise + link; detailed build pages in `docs/builds/` carry the facts and prices. Never copy a price table into the quick layer — link to the build page instead.
- Mark unfinished prices/products as `TODO` / **preliminary**.
- Link related pages at the bottom of each chapter — see the “Related pages” section in each scaffold.
- Prefer tables for tiers, components, and builds.

## Roadmap

- [x] Outline v2 + scaffold
- [x] Two-layer structure (Quick Start concise layer + detailed chapters)
- [ ] Research phase: verify products, prices, and compatibility per chapter
- [ ] Fill in Example Builds (`docs/builds/`)
- [x] Choose + document deployment (GitHub Pages, Actions-based)
- [ ] Publish

## Publishing (live site)

Site: https://johnjp15.github.io/sim-racing-guide/ (GitHub Pages, `gh-pages` branch)

GitHub Actions is blocked on this account, so publishing is a local build + push:

1. Edit pages under `docs/` (on GitHub web or locally) and push to `main`.
2. From a clone of this repo, run: `./scripts/publish.sh`

That builds MkDocs and pushes the result to `gh-pages`. First run creates a Python venv and installs MkDocs Material; later runs take seconds. If nothing changed, it says so and pushes nothing.
