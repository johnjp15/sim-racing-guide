# PC specs, PC build costs & games economics — deep research

**Type: RESEARCH ONLY — not wiki prose.** Facts, tables, and options for the author to write from.
**Checked: 2026-10-02 (US, USD). Prices are volatile; re-verify before publishing.**
**Source key:** ✅ Verified live (manufacturer/store page read 2026-10-02) · ◐ Index (search result / secondary site / manufacturer listing only, not opened and confirmed) · ⚠️ Unverified/TODO (could not confirm — do not publish as fact).

Related files: `existing-pack/13-displays-vr.md`, `existing-pack/14-pc-console.md`, `existing-pack/15-games-starter-path.md`, `research/displays-vr-deep.md` (when available).

---

## 1. Key facts (sourced)

### How sim racing scales with resolution
- Pixel load drives GPU demand more than anything else. Rough pixel counts (author can quote):
  - Single 1080p ≈ 2.1M px · Single 1440p ≈ 3.7M px · 34″ ultrawide 3440×1440 ≈ 5.0M px · Single 4K ≈ 8.3M px
  - Triple 1080p ≈ 6.2M px · Triple 1440p ≈ 11.1M px · Triple 4K ≈ 24.9M px
  - VR (Quest 3 class) ≈ 4.6M px per eye (≈9.1M px total) plus VR rendering overhead; VR headsets also need *locked* high frame rates (72/90/120 Hz) — dips are far more noticeable than on a monitor.
- Rule of thumb supported by sources below: a GPU that is comfortable at triple-1440p is generally comfortable for high-end VR, and vice versa. Triple 4K is the extreme case — even flagship GPUs need settings compromises in several sims.
- CPU matters more in sims than in most games: physics + AI traffic + draw calls are single-thread heavy. iRacing is repeatedly flagged as CPU/single-thread-bound; X3D (3D V-Cache) CPUs consistently top sim benchmarks in the sources found. (◐ simracingmanual.com, simracingcockpit.gg benchmark articles, read 2026-10-02.)

### Official minimum / recommended specs (Steam / developer pages, read 2026-10-02 ✅)

| Sim | Minimum (official) | Recommended (official) | Notes |
|---|---|---|---|
| **iRacing** | 4-core CPU (i5-6600 / Ryzen 3 4300G), 6 GB GPU (GTX 1070 / RX 5600 XT), 16 GB RAM, 40 GB storage | 6-core (i5-11600 / Ryzen 5 5600X), 8 GB GPU (RTX 2070 / RX 5700 XT), 16 GB RAM; high-end tier: 8+ core (i7-14700 / Ryzen 7 9700X), 10 GB+ GPU (RTX 4070 / RX 6800 XT / RX 9070), 32 GB RAM, 225 GB for all content | ✅ iRacing official system requirements page, read 2026-10-02. Windows 11 64-bit only (Windows 10 support ended Oct 2025). VR supported. |
| **Assetto Corsa Competizione (ACC)** | i5-4460 / FX-8120, 4 GB RAM, GTX 460 / HD 7770, 50 GB | i5-8600K / Ryzen 5 2600X, 16 GB RAM, GTX 1070 / RX 580 | ✅ via Steam spec listing, read 2026-10-02. **Caution:** official "recommended" is old and does NOT mean high settings/full grids/VR — community consensus is ACC is one of the most demanding sims (see §3). |
| **Le Mans Ultimate (LMU)** | i5-8400 / Ryzen 5 2600, 8 GB RAM, GTX 1060 6 GB / RX 580, 45 GB | i5-10600 / Ryzen 5 5600X, 16 GB RAM, RTX 2070-class 8 GB (Steam lists "GTX 2070"), 45 GB | ✅ Steam store page, read 2026-10-02. Steam itself notes minimum = "minimal settings at 1080p single class" — i.e., official specs describe *playable*, not *pretty*. v1.0 released 22 Jul 2025. |
| **Assetto Corsa (original, 2014)** | Very low (DX11-era) | Modded AC (Custom Shaders Patch + rain/sol etc.) is far heavier than vanilla — budget for a modern mid-range GPU if running heavy mods at high res/VR | ◐ Community/secondary. Original AC is the easiest "serious" sim to run unmodded. |
| **Automobilista 2 (AMS2)** | Modest (Madness engine, broadly similar class to Project CARS 2 era hardware) | Scales well; VR performance is a widely praised strength of AMS2 | ◐ Secondary/community consensus, 2026-10-02. TODO: pin exact Steam spec text before publishing (see TODO list). |
| **rFactor 2** | Modest on paper | Known for long load times and variable optimisation; CPU + fast storage help | ◐ Secondary. TODO: pin exact Steam spec text before publishing. |
| **RaceRoom Racing Experience** | Low — free-to-play, older engine | Runs on modest hardware; VR + triple-screen support included | ✅ Steam store page, read 2026-10-02. |

**Trap to warn readers about:** "Recommended" on a Steam page usually targets 1080p/60 at medium settings on a single screen. It says almost nothing about triples, ultrawide, 4K, or VR. The tables in §3 are the useful version.

---

## 2. What you actually need: GPU/CPU by display type (synthesis of sources, 2026-10-02)

Performance reference point found (◐ single secondary benchmark, treat as indicative not gospel):
- Triple 1440p (7680×1440) in iRacing at High settings: RTX 4090 + Ryzen 7 9800X3D ≈ 168 FPS avg; 7800X3D ≈ 150; i9-14900K ≈ 146; Ryzen 5 7600X ≈ 120. Single 1440p with 9800X3D ≈ 285 FPS. (simracingcockpit.gg, read 2026-10-02.)
- Same source: at Quest 3 VR @120 Hz, only the 9800X3D consistently held 120 FPS on full grids; VR at high settings needs roughly RTX 4070 Ti-class GPU or better to avoid being GPU-bound.
- CPU effect: X3D parts held 1% lows at ~85–90% of average FPS vs ~75–80% for non-X3D in that test — i.e., smoother, not just faster. (◐ same source.)

### Copy-ready table: sensible GPU tiers by setup (Oct 2026 cards)

| Display target | Comfortable GPU class (new, Oct 2026) | CPU guidance | RAM | Notes |
|---|---|---|---|---|
| Single 1080p / 1440p, 60–144 Hz | RTX 5060 / RX 9060 XT and up | Any modern 6-core (Ryzen 5 7600 / i5-12400F class and up) | 16 GB min, 32 GB preferred | Every modern sim runs well here; this is the cheap entry point. |
| 34″ ultrawide (3440×1440) | RTX 5060 Ti 16 GB / RX 9070 and up | 6–8 core modern; X3D nice-to-have | 32 GB preferred | Sweet-spot single-screen setup. VRAM: prefer 16 GB cards for headroom. |
| Single 4K / high-refresh 1440p | RTX 5070 / RX 9070 XT and up | X3D recommended for sims | 32 GB | ACC/LMU at 4K with big grids is where mid cards start to struggle. |
| Triple 1080p | RTX 5060 Ti 16 GB / RX 9070 class minimum sensible | X3D strongly recommended (iRacing) | 32 GB | Pixel load ≈ single 4K; older GTX 1070-era "recommended" specs do not apply. |
| Triple 1440p | RTX 5070 Ti / RX 9070 XT minimum sensible; RTX 5080 comfortable | Ryzen 7 7800X3D / 9800X3D class | 32 GB | Benchmark above: this is RTX 4090 territory for high settings + high FPS — set expectations accordingly. |
| Triple 4K | RTX 5080 / 5090; expect settings compromises | 9800X3D class | 32 GB (64 GB unnecessary) | Extreme niche; most triple-4K users run reduced settings or DLSS/FSR where supported. |
| VR (Quest 3 / PSVR2-on-PC class) | RTX 4070 Ti / RX 9070 XT class and up for high settings; RTX 5060 Ti 16 GB workable at reduced settings | X3D strongly recommended | 32 GB | Locked frame rate matters more than peak FPS. iRacing VR is comparatively efficient; ACC VR is notoriously heavy — same PC, very different experience. |
| VR (high-end: Pimax/Bigscreen class) | RTX 5080 / 5090 | 9800X3D class | 32 GB | ⚠️ Headset prices unverified — see TODO. User's own setup (Pimax Dream Air) is not priced here. |

Engine notes worth one line each in the wiki:
- **iRacing:** CPU-bound; NVIDIA SMP (Simultaneous Multi-Projection) helps triples on RTX cards; supports OpenXR foveated rendering on RTX. No DLSS; AMD FSR only; no frame generation. (◐ boxthislap.org / tech-insider, read 2026-10-02.)
- **ACC:** Unreal Engine 4; heavy in VR and with large AI grids; upscaling (DLSS/FSR) is close to mandatory at 4K/triples/VR. (◐ community consensus.)
- **LMU / rFactor 2 engine:** lighter than ACC at same resolution; official recommended spec is honest for single-screen 1080p–1440p. (✅ Steam specs + ◐ DLC guide.)
- **AMS2:** frequently cited as best-performing VR sim per GPU tier. (◐ community consensus — TODO: find a citable benchmark before publishing superlatives.)
- **VRAM guidance (new builds):** ≥12 GB VRAM minimum sensible, 16 GB preferred for triples/VR. (◐ tech-insider, read 2026-10-02.)

---

## 3. Example PC build costs (USD, Oct 2026 — sourced, dated, volatile)

**Framing fact (sourced):** GPU street prices in Oct 2026 are well above launch MSRP amid a memory shortage; multiple outlets report no near-term relief. Any build total below is an *index estimate built from the sourced component/prebuilt prices listed* — arithmetic by this research, not a single verified product page, unless marked prebuilt. (◐ club386 / TechSpot price trackers, read 2026-10-02.)

### GPU street prices, Oct 2026 (◐ club386 / TechSpot, read 2026-10-02)

| Card | Launch MSRP (reference) | Oct 2026 street (reported) |
|---|---|---|
| RTX 5090 | $1,999 | $5,000+ reported Sep 2026 (⚠️ single secondary source — treat cautiously) |
| RTX 5080 | $999 | Above MSRP; exact street ⚠️ TODO |
| RTX 5070 Ti | $749 / 16 GB | ~$800± in prebuilt context; standalone street ⚠️ TODO |
| RTX 5070 | $549 / 12 GB | ≈ $800–820 (≈ $250 over MSRP) |
| RX 9070 XT | $599 / 16 GB | ≈ $730–750 |
| RX 9070 | $549-class / 16 GB | ≈ $649 |
| RTX 5060 Ti 16 GB | $429-class | ≈ $788 reported (⚠️ volatile, single tracker) |
| RX 9060 XT 16 GB | $349-class | ≥ $519 reported |
| Intel Arc B580 | $249-class | ≈ $309.99 — repeatedly cited as the only budget card worth buying at Oct 2026 prices |

### Prebuilt reference points (◐ retailer/deal-site listings, read 2026-10-02)

| Prebuilt class | Example found | Price (as listed, Oct 2026) |
|---|---|---|
| RTX 5060 Ti (8 GB) / i5-14400F / 16 GB | KOTIN (Newegg coupon listing) | $1,199.99 (coupon valid to 4 Oct 2026) |
| RTX 5060 Ti (8 GB) / Ryzen 7 8700F / 16 GB DDR5 | CyberPowerPC Gamer Master (Amazon) | $1,349.99 (−10% listing) |
| RTX 5060 Ti **16 GB** / Ryzen 7 7800X3D / 32 GB DDR5 | Skytech Archangel (deal listing) | $1,599 |
| RTX 5070 Ti / Ryzen 7 8700F / 16 GB | MSI Codex Z2 (sale listing) | $1,699 (from $2,300) |
| RTX 5070 Ti / Ryzen 7 9800X3D / 32 GB / 2 TB | Skytech Azure 3 / Andromeda Insights V3 (Newegg) | ≈ $2,523–2,700 |

⚠️ Prebuilt traps to warn about: 8 GB GPU variants sold under the same card name ("5060 Ti" exists in 8 GB and 16 GB — for sims, the 16 GB is the one to get), single-stick 16 GB RAM, and undersized PSUs limiting upgrades.

### Copy-ready table: example sim PCs (estimates from sourced prices above, Oct 2026)

| Build | Target | Indicative spec | Est. total (USD) | Basis |
|---|---|---|---|---|
| **A. Starter single-screen** | 1080p/1440p single, all sims | 6-core CPU, RTX 5060 Ti 16 GB *or* RX 9060 XT 16 GB, 32 GB RAM, 1–2 TB NVMe | **≈ $1,100–1,300** (prebuilt anchor $1,199.99) | Prebuilt listings above; DIY arithmetic from street GPU prices. Estimate — re-price before publishing. |
| **B. Ultrawide / VR-capable sweet spot** | 3440×1440 UW, triples 1080p, Quest 3 VR at sensible settings | Ryzen 7 7800X3D, RTX 5060 Ti 16 GB (or RX 9070), 32 GB RAM | **≈ $1,600** (prebuilt anchor $1,599 Skytech/7800X3D) | Prebuilt listing above. Best value tier in Oct 2026 market conditions. |
| **C. Triples 1440p / high-end VR** | Triple 1440p, high-refresh VR | Ryzen 7 9800X3D, RTX 5070 Ti (RX 9070 XT alternative), 32 GB RAM, 2 TB NVMe | **≈ $2,500–2,700** | Prebuilt listings $2,523–2,700 above. DIY may land lower/higher with GPU street volatility. |
| **D. No-compromise** | Triple 4K, flagship VR | 9800X3D, RTX 5080/5090 | **$3,500–6,000+** ⚠️ | GPU street prices unverified at this tier; do not publish a firm total without re-checking. |

Notes for the author:
- X3D CPUs (7800X3D/9800X3D) are the single most-repeated sim-specific CPU recommendation across sources. For a *sim-only* PC, CPU choice matters unusually much; for a mixed gaming PC it matters less.
- 32 GB RAM is the sensible default in 2026 builds (iRacing high-end spec itself lists 32 GB+). 16 GB still works for single-screen.
- Storage: iRacing full content install ≈ 225 GB per official high-end spec; sims + DLC add up — 2 TB NVMe is the comfortable default. (✅ iRacing.)
- A used GPU market exists but no used prices were verified in this pass — see `research/used-market-buying.md` and TODO list. Do not quote used prices from this file.

---

## 4. Games catalogue: prices & total cost of ownership

All Steam US prices read 2026-10-02 ✅ unless marked. **Steam prices change with sales constantly** — the "typical sale" column is the strategically important one.

### 4.1 iRacing — the subscription sim (PC only)

**CONFIRMED price increase (supersedes older "rumoured" notes):** iRacing raised subscription prices effective **18 Aug 2026**. (✅ iRacing.com official "Subscription Pricing Update – July 2026", read 2026-10-02; corroborated by boxthislap.org, trophi.ai, overtake.gg, traxion.gg, all read 2026-10-02.)

| Plan | Old | New (from 18 Aug 2026) |
|---|---|---|
| 1 month | $13.00 | **$14.75** |
| 3 months | $33.00 | **$37.50** |
| 12 months | $110.00 | **$124.50** |
| 24 months | $199.00 | **$222.50** |

- Car/track prices did **not** change. Base subscription now includes "more than 30 cars and over 25 tracks". (✅ iRacing.com.)
- Reported subscriber count: 350,000 (June 2026, via overtake.gg ◐).
- Steam-bought subscriptions increase similarly; buying direct vs Steam has historically differed in sale eligibility — ⚠️ TODO verify current new-member offers before publishing (iRacing frequently runs new-member discounts; do not quote a % without a live check).

**Content pricing & discounts** (✅ iRacing.com Volume Discounts page, read 2026-10-02; structure corroborated by BoxThisLap 2026 guide):
- Cars/tracks typically **$11.95 / $14.95** each.
- Buy 3–5 items in one purchase: **10% off**. 6+ items: **15% off**. Own 40 eligible pieces: **permanent 20% loyalty discount**. Own everything eligible: **30%**.
- Exclusions: items ≤$5, Legacy content, and Tech Tracks don't get discounts and don't count toward the 40-piece loyalty threshold.

**Copy-ready: iRacing total cost of ownership scenarios (maths from sourced prices above; scenario content spend is illustrative — label as such)**

| Scenario | Year 1 | Year 2 | What's included |
|---|---|---|---|
| Base only (rookie content) | $124.50 (12-mo plan) | $124.50 renewal | 30+ cars / 25+ tracks included; enough for Rookie and some D-class series |
| One series focus (e.g. GT3 or F4) | $124.50 + ≈ $100–180 content | $124.50 + ≈ $50–100 more tracks | Car ($11.95–14.95) + 8–12 tracks bought in 3–6-item batches at 10–15% off |
| Multi-series enthusiast | $124.50 + $250–400 content | $124.50 + $100–200 | Approaching the 40-piece / 20% loyalty threshold |
| "Own everything" whale path | $124.50 + four figures | Maintenance only | 30% tier; total catalogue cost ⚠️ TODO (do not guess) |

Honest framing for readers: iRacing is the only major sim where the *software* alone is a recurring three-figure annual cost. Budget-hardware advice that ignores this misleads beginners. Equally: the included base content is genuinely enough to race competitively for months.

### 4.2 Buy-once sims: all-in costs (Steam US, read 2026-10-02 ✅)

| Game | Base (list) | All-in / Ultimate path | Sale behaviour (sourced) |
|---|---|---|---|
| **Assetto Corsa Competizione** | $39.99 | Ultimate Edition bundle: $169.90 bought separately → bundle ≈ $51.00 (−30% bundle discount; seen $45.47 in a sale) | Frequently −75% (base seen at $9.99, offer ending 8 Oct 2026; historically as low as $3.99–4 — ⚠️ historic lows unverified in this pass). 9 DLC packs ($8.99–$19.99 each: British GT, American Track, 24h Nürburgring, Intercontinental GT, Challengers, GT2, GT4, 2020 GTWC, 2023 GTWC). |
| **Assetto Corsa (2014)** | $19.99 | Ultimate Edition: $79.88 separately → bundle **$24.00** (11 DLC, 178 cars, 19 circuits) | −75% in Steam Autumn Sale 2026 (€4.99 base / €17.87 Ultimate, EUR — overtake.gg 2026-10-01 ◐). The default "buy this first" recommendation: Ultimate on sale is the cheapest route to a deep sim + modding scene. |
| **AC EVO** | $39.99 | Early Access; DLC model TBC | −20% Autumn Sale 2026 (€31.99 ◐). Still Early Access as of v0.9 (Aug 2026); 1.0 expected sometime Jan–Jun 2027 per publisher financial outlook (⚠️ publisher expectation, not a Kunos commitment — univers-simu.com reporting on Digital Bros results, read 2026-10-02). |
| **AC Rally** | ≈ $29.99 class (⚠️ exact US list TODO) | Early Access since 13 Nov 2025 | −20% Autumn Sale (€23.99 ◐). PC only. |
| **Le Mans Ultimate** | **$39.99** | All DLC bought separately > $200; via Season/Track Passes ≈ $162; **or** RaceControl Pro+ subscription $84/year includes all DLC *while subscribed* (access lapses if subscription ends) | Base −45% Autumn Sale (€21.99 ◐). DLC: ELMS Season Pass $28.99, ELMS packs $11.99 each, US Track Pass $44.99 (28 Jul 2026), 2024 packs ≈ $7.49–19.99. Maths worth showing readers: by year 2, Pro+ ($168 cumulative) costs more than owning the passes ($162) — subscription only wins if you play < ~2 years or value the other Pro+ features. (✅ Steam store + ◐ Overtake DLC guide, read 2026-10-02.) |
| **Automobilista 2** | ≈ $39.99 list (⚠️ confirm US list on Steam before publishing) | All-Inclusive Bundle: $236.99 list → seen $118.40 (−50% sale) | −50% base in Autumn Sale 2026 (€18.49 ◐). DLC model: track packs + car packs; "All-Inclusive for SP Owners" bundle exists for Season Pass holders. |
| **rFactor 2** | $29.99 | Large paid DLC catalogue (BTCC, Formula E, tracks) — ⚠️ all-in total TODO | Seen −85% ($4.49, Jun 2026 price-tracker data ◐). **Not free-to-play** — a common misconception worth explicitly correcting. (✅ Steam store search, read 2026-10-02.) |
| **RaceRoom** | **Free to download** | Pay-per-car/track catalogue; test-drive any car free before buying; weekly free car+track combo; ranked multiplayer included | The strongest genuinely-free starter: zero-cost way to learn on a wheel before spending on content. (✅ Steam store, read 2026-10-02.) |
| **BeamNG.drive** | $24.99 | No DLC model of consequence | −20% Autumn Sale (€18.00 ◐). Sandbox/physics, not a racing-structure sim. |
| **Live for Speed** | Free demo (unlimited time, Blackwood + 3 cars) | Paid licence tiers | Old but still one of the best zero-cost wheel feel tests. (◐ secondary.) |

### 4.3 Sales patterns — the money-saving section

Sourced pattern (overtake.gg Steam Autumn Sale roundup, published 2026-10-01, read 2026-10-02 ◐; corroborated by live Steam pages read same day ✅):
- Steam seasonal sales (Autumn/Summer/Winter/Spring) routinely cut major sims **50–75%**: Autumn 2026 examples — ACC −75%, AC −75%, AMS2 −50%, LMU −45%, DiRT Rally 2.0 GOTY −50%, ATS −75%.
- Practical rules for readers:
  1. Never buy ACC, AC, or AMS2 at list price unless you need them *today* — a 50%+ sale is never far away.
  2. Bundles (AC Ultimate $24, ACC Ultimate ≈ $51, AMS2 All-Inclusive on sale) beat buying DLC piecemeal almost always.
  3. iRacing is the exception: content rarely discounts beyond the standing volume/loyalty structure, so batch purchases (3–5 or 6+ items) are the optimisation, not waiting.
  4. LMU's optimisation is the passes-vs-Pro+ maths above, not sale-waiting (DLC does appear in sales — ELMS pass −24% seen, ending 8 Oct 2026 ✅).
  5. Wishlist everything; Steam emails on discounts. Third-party key stores sometimes undercut Steam — ⚠️ legitimacy/region guidance TODO if the author wants to cover this (grey-market risk needs care).

### 4.4 Free / cheap starter path (copy-ready sequence)

| Step | Cost | What it teaches |
|---|---|---|
| 1. RaceRoom (free) | $0 | Real FFB, ranked online racing, test-drive any car free; confirms you enjoy structured sim racing before spending |
| 2. Live for Speed demo | $0 | Lightweight, excellent low-end FFB test on any PC |
| 3. AC Ultimate on sale | $24.00 list bundle, often less | The modding universe (tracks, cars, traffic servers like No Hesi), drifting, cruising — broadest content per dollar in sim racing |
| 4. ACC base on sale | $9.99 seen (sale) | Best-in-class GT3 racing + strong ranked-ish online via LFM (⚠️ LFM details TODO) |
| 5. iRacing 3-month taster | $37.50 (new Aug 2026 pricing) | The serious online ladder; decide about the $124.50/year commitment with experience, not hype |
| 6. LMU base | $39.99 (−45% seen) | Endurance/WEC racing, strong default online; add passes later |

Total for steps 1–4 in a sale window: **under ~$35** for three full sims. That is the single most useful number for a beginner page.

---

## 5. Sources

**Verified live (read 2026-10-02):** iRacing.com (subscription pricing update July 2026; volume discounts; system requirements) · Steam store pages (ACC + Ultimate bundle + DLC list; AC Ultimate bundle; LMU base/DLC; RaceRoom; rFactor 2 listing) · Fanatec forum (console licensing mechanics — see console file).

**Index / secondary (read 2026-10-02, not manufacturer-confirmed):** overtake.gg (Autumn Sale roundup 2026-10-01; subscriber count; DLC guide) · boxthislap.org (iRacing pricing/content guides; GPU guidance) · simracingcockpit.gg (triple/VR CPU benchmark) · simracingmanual.com (iRacing CPU-bound analysis) · club386 / TechSpot (GPU street prices) · pcguide / deal listings (prebuilt prices) · traxion.gg, trophi.ai (iRacing price corroboration) · univers-simu.com (AC EVO 1.0 outlook) · steambase.io (rF2 price history).

**Weak sources to treat with extra caution:** several Oct 2026 "price tracker" and AI-aggregator pages returned inconsistent figures (e.g., RTX 5090 "$5,000+", RTX 5060 Ti 16 GB "$788" vs MSRP $429-class). GPU street prices are directionally "well above MSRP amid memory shortage" across multiple outlets, but any *specific* street price needs a same-week retailer check before publishing.

## 6. Unverified / TODO

- ⚠️ Fanatec-style "exact US street price" for RTX 5070 Ti / 5080 standalone cards; RTX 5090 street price (single secondary source claimed $5,000+).
- ⚠️ AMS2 exact US base list price and exact Steam minimum/recommended spec text — open the Steam page and transcribe.
- ⚠️ rFactor 2 exact Steam spec text and current all-in DLC total.
- ⚠️ AC Rally exact US list price; LMU "own everything" total; iRacing full-catalogue total and current new-member promotional pricing (check iRacing.com promotions page live).
- ⚠️ AC EVO 1.0 date — publisher outlook only (Jan–Jun 2027), not a release commitment.
- ⚠️ Historic-low prices (e.g., ACC $3.99) — verify on SteamDB before quoting.
- ⚠️ LFM (Low Fuel Motorsport) for ACC/LMU: how it works, cost (free?), current status — needs its own check before recommending.
- ⚠️ Pimax / Bigscreen Beyond headset US prices (displays file may cover; not priced here).
- ⚠️ Used GPU/CPU price bands — deliberately not quoted; needs a dedicated used-market pass.
- ⚠️ Whether iRacing direct vs Steam purchase differs on renewal discounts in Oct 2026.

*End of research file. Author: re-date all prices on import into wiki pages.*
