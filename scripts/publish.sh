#!/usr/bin/env bash
# Publish the guide: build MkDocs from docs/ and push the result to the gh-pages branch.
#
# Usage (from anywhere, once you have cloned this repo):
#   ./scripts/publish.sh
#
# What it does:
#   1. Creates .venv/ (if needed) and installs mkdocs-material
#   2. Builds the site into site/
#   3. Copies site/ onto the gh-pages branch in a temporary git worktree
#   4. Commits (if anything changed) and pushes gh-pages
#
# Requirements: git (with push access to this repo), python3, network on first run.
# Notes: GitHub Actions is blocked on this account ($0 budgets need a payment method),
# so publishing is a local build + push. Your edits on main are untouched by this script —
# commit/push your docs/ edits first, then run this to update the live site.
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$(pwd)"

# 1. Build
if [ ! -x .venv/bin/mkdocs ]; then
  echo "Creating .venv and installing mkdocs-material (first run only)..."
  python3 -m venv .venv
  .venv/bin/pip install -q mkdocs-material
fi
echo "Building site..."
.venv/bin/mkdocs build

# 2. Push built site to gh-pages via a temp worktree
WT="$(mktemp -d)"
cleanup() { git worktree remove --force "$WT" >/dev/null 2>&1 || true; rm -rf "$WT"; }
trap cleanup EXIT

git fetch origin gh-pages
git worktree add -q "$WT" origin/gh-pages

# Replace gh-pages content with the new build (keep .git)
find "$WT" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a site/. "$WT"/
touch "$WT"/.nojekyll

git -C "$WT" add -A
if git -C "$WT" diff --cached --quiet; then
  echo "No changes — live site is already up to date."
  exit 0
fi

git -C "$WT" commit -q -m "Publish site ($(date '+%Y-%m-%d %H:%M'))"
git -C "$WT" push -q origin HEAD:gh-pages

echo "Published: https://johnjp15.github.io/sim-racing-guide/"
