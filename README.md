# Sim Racing Equipment Guide

Wiki-style sim racing equipment guide. Built with MkDocs Material.

- Live: https://johnjp15.github.io/sim-racing-guide/
- Source: `main`. Published site: `gh-pages`.

## Layout

- `mkdocs.yml`: config and nav
- `docs/index.md`: home
- `docs/builds/`: Tier 0 to 5 setup pages
- `docs/components/`: component pages, plus the 3D Rig Anatomy page (`index.md`)
- `docs/assets/js/rig-anatomy.js`: 3D model (Three.js 0.160.1 vendored alongside)
- `docs/images/`: photos, source URLs in comments under each image
- `research/`: research library, not part of the built site

## Preview

```bash
pip install mkdocs-material
mkdocs serve
```

## Publish

```bash
mkdocs gh-deploy
```

Builds the site and pushes it to `gh-pages`. Commit and push `main` separately.

## Conventions

- Bullets only, minimum words
- No em dashes anywhere
- One topic per file; add or rename pages in `mkdocs.yml` nav too
- Bump `?v=` on `rig-anatomy.js` in `docs/components/index.md` after every JS change
- Updating Three.js: also bump `?v=` on the `OrbitControls.js` import map entry there
