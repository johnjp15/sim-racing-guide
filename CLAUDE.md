# Handoff: Sim Racing Equipment Guide

Written 2026-10-10. Read this first. Per-topic detail lives in the session memory files (`MEMORY.md` index).

## What this is

- Wiki for beginners getting into sim racing. MkDocs Material, hosted on GitHub Pages
- Live: https://johnjp15.github.io/sim-racing-guide/
- Source on `main`, built site on `gh-pages`. No CI: GitHub Actions is blocked on the account, so every publish is a local build
- John writes prose by hand in Obsidian. Claude does research, layout, fixes and publishing

## Hard rules

- Bullets and tables only, minimum words. No prose paragraphs
- No em dashes anywhere, including comments and commit messages
- Keep image source URLs in an HTML comment under each photo
- Sidebar nav names in `mkdocs.yml` are canonical
- New pages are allowed: tell John, and mark them with `!!! info "NEW PAGE"`
- No mention of F1 Arcade on the site, `mkdocs.yml` or README
- Spend order is John's call: direct drive wheelbase, then load cell brake, then everything else
- When sources disagree, r/simracing consensus wins
- Replies to John: concise, bullets, no filler

## John edits the same working copy

- Run `git status` before touching anything. Never overwrite, revert or silently bundle his uncommitted edits
- He commits and pushes on his own ("updated quick start guide" style commits are his)
- `docs/start/quick-start.md` and `slow-start.md` are his to write. Do not rewrite them unasked
- `docs/draft-guide.md` is his placeholder
- Pages must stay plain Markdown he can edit in Obsidian. Only `docs/components/index.md` (Rig Anatomy) is HTML and JS
- Common breakage from hand edits, fix when asked:
    - List with no blank line above it renders as one paragraph on the site
    - Nested bullets need 4 spaces, not 2
    - Obsidian wikilinks (`[[page]]`) and shortest-path links do not work. Links must be relative Markdown links

## Layout

- `mkdocs.yml`: config and nav. 27 pages, each one `.md` file in `docs/`
- `docs/index.md`: home
- `docs/start/`: Getting Started (quick-start, slow-start, games, first-setup, buying, glossary)
- `docs/builds/`: Types of Setups intro plus Tier 0 to 5
- `docs/components/`: 11 component pages plus Rig Anatomy
- `docs/assets/js/`: `rig-anatomy.js` (3D model) and vendored Three.js 0.160.1
- `docs/images/`: photos, 1200x800
- `research/` (old) and `research-v2/` (current, see its README): not published
- `site/`: build output, gitignored. Never edit

## Page conventions

- Tier pages: Cost, At a glance, Target user, Parts, What it feels like, Pros / cons, Next upgrade, Used-market alternative, Example build (table with total and buy links), Related pages
- Tier cost headings (`### $200–$400`) and the `<small>Assumes</small>` line are John's own format. Leave them
- Component pages: What / Why / When, levels, picks, By tier, Where to buy table, Related pages
- Links are reference style: `[Moza US][r5]`, definitions at the bottom of the file
- Mermaid labels must not start with `1. ` (use `First<br>...`)
- Prices are USD from live store listings, checked 2026-10-09. Many stores are Shopify: `https://<store>/products.json` and `/products/<handle>.js` give price and stock
- Component photos are maker product photos, not freely licensed. `pc.jpg` is still an older stock photo

## Build and publish

- Build check: `.venv/Scripts/python -m mkdocs build --strict`
- Publish: `.venv/Scripts/python -m mkdocs gh-deploy --strict -m "<msg>"`, then commit and `git push` `main`
- John has a PowerShell function `simpub` that runs the publish command from any folder. It does not commit
- Work happens directly on `main`
- After JS changes bump `?v=` on `rig-anatomy.js` in `docs/components/index.md`. The `OrbitControls.js` import map entry there has its own `?v=`

## Testing notes

- John views the site in Chrome at 80% page zoom (devicePixelRatio 0.8). Check interactive and layout changes there as well as at 100%
- Headless Chrome works on this machine over the DevTools Protocol from Python (stdlib only): `--remote-debugging-port`, `Emulation.setDeviceMetricsOverride`, `Input.dispatchMouseEvent`
- To read the 3D camera in a test, append `window.__rig = { camera, controls };` to a scratch copy of the built `rig-anatomy.js`
- Python's SSL bundle here is stale: fetch with `curl` via subprocess
- Reddit blocks automated fetches. Public RSS works at about one request per 35 s, or John relays prompts to a browser agent

## Recent history

- 2026-10-09: research v2, Reddit-first rewrite, full audit, F1 Arcade removed, example builds and buy tables, new layout, new component photos, Quick and Slow Start drafts
- 2026-10-09: 3D wheel zoom fixed (OrbitControls updated to three 0.160.1; the old file broke below 100% page zoom)
- 2026-10-10: John started hand-editing in Obsidian, beginning with the Quick Start Guide

## Open items

- Best Buy prices (Moza R5 bundle $349.99, Samsung G50F $249.99) are unconfirmed: its pages block direct reads
- Some example-build items were back-ordered when checked (TR80S, D-BOX bundle, Co-Pedal, GT1 Evo)
- Tier 2 example build ($1,058) sits below its cost heading; headings were left as John wrote them
- Tier photos and the PC / Console photo have not been refreshed
- The `!!! info "NEW PAGE"` boxes on five pages wait for John to keep or delete
