---
title: Beginner Sim Racing Equipment Guide — US, October 2026
date_context: Prices checked 2026-10-02, US USD. Prices are date-sensitive; MSRP vs street/sale labelled.
price_policy: One anchor price per primary build. Concise tables in Part A are summaries of Part B detail tables — same numbers, do not edit one without the other.
---

# How to split this into a MkDocs wiki

| Wiki page (suggested) | Source section in this report |
|---|---|
| `index.md` / Equipment Finder | Part A — Concise Layer (all of it) |
| `tiers/tier-0-desk.md` … `tiers/tier-5-motion.md` | Part B, §B1–B6, one section each |
| `components/wheelbases.md` | §C1 |
| `components/pedals.md` | §C2 |
| `components/rims-shifters.md` | §C3 + §C4 |
| `components/cockpits.md` | §C5 |
| `components/displays-vr.md` | §C6 |
| `components/pc-console.md` | §C7 |
| `games/starter-path.md` | Part D |
| `buying/buying-smart.md` | Part E |
| `setup/setup-basics.md` | Part F |
| `reference/sources-and-uncertainty.md` | Part G + per-section Source boxes |

Each Part B/C section is self-contained: it repeats the specs/prices it depends on and carries its own Source box, so pages can be moved/renamed without breaking other pages.

---
# PART A — CONCISE LAYER (Equipment Finder)

## A1. 5-minute summary

| Question | Short answer |
|---|---|
| What did F1 Arcade give you that home gear won't at first? | Full-motion seat, huge screen, zero setup, social head-to-head. Home Tier 0–1 will feel *less* spectacular; Tier 2+ beats it on force-feedback detail, braking consistency and seat time. Standard racing at F1 Arcade Chicago (1 W Grand Ave, opened Aug 2026, 61 full-motion sims) starts ~$19/session [S-F1] |
| Cheapest real start | $339–350 for a complete wheel+pedals you clamp to a desk (Tier 0) if you already own PC/PS5/Xbox + TV/monitor |
| The one upgrade that makes you faster | A **load-cell brake pedal**, not more wheel torque. Available from ~$149–160 as a pedal set (Moza SR-P2 / Logitech RS Pedals) |
| The trap | Console licensing. PlayStation chip lives in the *wheelbase* (Fanatec/Logitech/Thrustmaster PS SKUs); Xbox chip lives in the *wheel rim* (Fanatec) or is a separate Xbox SKU (Logitech/Moza R3). Moza/Simagic/Simucube/Asetek (except Moza R3-Xbox) are **PC-only** |
| Sweet spot for most friends | Tier 2 (~$1,459, existing PC) or Tier 3 (~$1,998, existing PC). Buy once, don't re-buy cockpit/pedals |
| When do you need a gaming PC? | For iRacing, triples, VR, Assetto Corsa mods, Le Mans Ultimate. PS5 = Gran Turismo 7 + ACC + F1 only, no triples, no iRacing |

## A2. Tier-at-a-glance (summary of Part B — same prices)

| Tier | Primary build (anchor) | Anchor total* | Space in use | Platform | Feels vs F1 Arcade | Next upgrade |
|---|---|---:|---|---|---|---|
| 0 Desk-clamp | Logitech G923 (PS or Xbox SKU) | **$350** | Existing desk | PC/PS/Xbox (pick SKU) | Wheel only, no motion, pedals slide | Load-cell pedals / wheel stand |
| 1 Foldable | Moza R5 bundle (PC) + Playseat Challenge X | **$678** (street ~$608) | 140×60 cm, folds away | PC (console variant in §B2) | Proper seat position, still flex | Fixed rig |
| 2 First fixed rig | Moza R9+KS+SR-P2 bundle + ASR 1 + seat + 32″ | **$1,459** | ~130×65 cm fixed | PC | Beats Arcade on brake + FFB detail, no motion | 12 Nm base / ultrawide |
| 3 Sweet-spot | Moza R12+KS+SR-P2 + alu rig + seat + 34″ UW | **$1,998** | ~140×70 cm fixed | PC | Clearly above Arcade except motion/screen size | Triples or VR |
| 4 Triples/VR | Moza R21 Ultra bundle + heavy alu rig + triples | **$5,467** with new PC / $3,467 existing PC | ~150×140 cm (triples) | PC only | Immersion ≥ Arcade, no motion | Motion / haptics |
| 5 Motion showpiece | Asetek Invicta bundle + Motion V3 + belt tensioner + triples | **$12,797** with new PC | Dedicated room, clearance on all sides | PC only | Closest to / beyond Arcade motion | Sigma DK2+ (+$4,661) |

\* Anchor total = primary build in Part B. PC/console and display included/excluded exactly as in the Part B table for that tier. Do not reuse these totals without that note.

## A3. Quick-pick by budget + platform + space

| Budget (gear only, existing PC/console+TV) | PC | PlayStation 5 | Xbox Series X\|S | No permanent space |
|---|---|---|---|---|
| <$400 | Moza R5 bundle $379 [S-MOZA] | Logitech G923 PS $350 / Thrustmaster T598 $466–500 | Moza R3 Xbox $339 [S-MOZA] / G923 Xbox $350 | Same wheel + desk clamp; store in closet |
| $400–800 | Moza R5 $379 + Challenge X $299 = $678 | T598 $466–500 + Challenge X $299 = ~$765–799 | Moza R3 $339 + Challenge X $299 = $638 | Playseat Challenge X (folds, 11 kg) |
| $800–1,500 | Tier 2 build $1,459 (with monitor) | Fanatec GT DD Pro 5 Nm $750–800 + wheel stand/rig (est.) | Fanatec CSL DD + Xbox wheel (Xbox chip in rim) — verify bundle price §G | NLR Wheel Stand 2.0 $279 (folds flat-ish, heavy) |
| $1,500–3,000 | Tier 3 build $1,998 | Logitech RS50 PS System $700 + RS Pedals $160 = $860, or G Pro $1,000 + Pro Pedals ~$350 | RS50 Xbox System $700 + RS Pedals $160 | Not recommended >8 Nm on foldables |
| $3,000+ | Tier 4/5, PC mandatory | No PS path to triples/VR sims — switch to PC | No Xbox path to triples/VR sims — switch to PC | — |

## A4. Decision flow

```
START
 ├─ Platform? ── PS5 only ──► must buy PS-licensed base (Fanatec GT DD Pro / ClubSport DD+,
 │                             Logitech G923-PS / RS50-PS / G Pro-PS, Thrustmaster T598/T248-PS)
 │              ├─ Xbox only ─► Xbox SKU / Xbox rim (Moza R3-Xbox, G923-Xbox, RS50-Xbox, Fanatec+Xbox rim)
 │              └─ PC / PC later ─► any ecosystem (Moza/Simagic best value) ──► continue
 ├─ Space? ── Must fold away ──► Tier 0 desk or Tier 1 Challenge X / wheel stand. STOP at ≤5.5–8 Nm.
 │           └─ Fixed corner/room ─► continue
 ├─ Budget (gear)? ── <$700 ─► Tier 0/1 ── $1.2–1.6k ─► Tier 2 ── $1.8–2.5k ─► Tier 3
 │                    └─ $3.5k+ and PC ─► Tier 4 triples/VR ── $10k+ ─► Tier 5 motion
 └─ Games? ── iRacing / triples / VR / mods ─► PC required, budget Tier 2 PC spec §C7
             └─ GT7 only ─► PS5 Tier 1–3 console builds are enough
```

---
# PART B — SETUP TIERS (one wiki page per tier)

> Conventions for every Part B table: **MSRP** = manufacturer list; **Sale/street** = retailer price seen 2026-10-02; **Est.** = range, not verified for that exact SKU (see Part G). Totals use anchor prices only.

## B1. Tier 0 — Desk-clamp starter

**Who it's for:** You own a desk, chair, PC/PS5/Xbox and a TV/monitor. You want to know if you like wheels at all.
**Footprint:** Your existing desk (~120×60 cm). Wheel clamps to desk edge; pedals on floor against a wall/box.
**Feels vs F1 Arcade:** Much less motion/screen, grainier force feedback, but *your own* unlimited seat time. Expect to be slower than on a controller for the first week.

| Part | Primary pick | Price | Options in category |
|---|---|---|---|
| Platform | Existing PC / PS5 / Xbox + display | $0 (assumed existing) | — |
| Wheelbase+rim+pedals (bundle) | Logitech G923 — gear drive, ~2.3 Nm, TRUEFORCE, 3 pedals, potentiometer brake with progressive spring | **$350 MSRP/street** ($399 historic MSRP; G920 Xbox predecessor $200 on sale Sep 2026) | Moza R3 bundle 3.9 Nm direct drive, PC $279–299 / **Xbox $339** — PC/Xbox only, no PS; Thrustmaster T248 ~3.5 Nm hybrid belt/gear, PS or Xbox SKU, $240–400 street; Thrustmaster T128 $200 MSRP, 2 pedals |
| Cockpit/mount | Desk clamp (included) + pedal stop (wall/shoebox) | $0 | Logitech Driving Force Shifter $50–60 if you want H-pattern later |
| Display | Existing TV/monitor | $0 | — |
| **Total** |  | **$350** | Xbox DD variant (R3): $339 |

**Pros:** Cheapest, resellable, works on console, zero space. **Cons:** Gear notchiness, weak brake feel, desk/chair flex, pedals slide under load-cell-level braking (don't buy load cells yet — they'll push across the floor).
**Next upgrade:** Wheel stand (Tier 1) *before* stronger pedals.
**Used alternative (Est., not a verified listing):** Logitech G29 (PS) / G920 (Xbox) used ~$150–200; check potentiometer pedal jitter and worn gear slack. Avoid used G27 (no PS5/Xbox native support).

> **Sources (§B1):** Logitech G923 $349.99 US list, Aug 2026 summary and G920 $199.99 Sep 2026 — TechTimes/Tech-Insider via search index 2026-10-02. Moza R3/R5 prices — MOZA Racing US, *verified live* 2026-10-02: https://us.mozaracing.com/collections/racing-bundles . Product: https://us.mozaracing.com/products/r5-racing-bundle ($379 sale / $599 reg, 5.5 Nm). T248 $399.99 retail chart — Amazon Thrustmaster chart via index.

## B2. Tier 1 — Foldable / wheel-stand apartment setup

**Who it's for:** Apartment, shared room, rig must disappear. First *proper seating position*.
**Footprint:** Playseat Challenge X: **140×60×105 cm in use** (55.1×23.6 in), 11.1 kg, folds with wheel attached [spec sheet, §C5]. Wheel Stand 2.0: your own chair + ~100×60 cm, folds flatter but ~heavy steel.
**Feels vs F1 Arcade:** Seat and pedal geometry transform consistency vs a desk chair. Still visible flex at the wheel deck above ~8 Nm.

| Part | Primary pick | Price | Options |
|---|---|---|---|
| Platform | Existing PC (console variant below) | $0 | — |
| Wheelbase+rim+pedals | Moza R5 Bundle — 5.5 Nm direct drive, ES rim, SR-P Lite 2-pedal Hall (table clamp included) | **$379 sale** / $599 MSRP [verified live] (Best Buy $349.99 on 2026-10-01) | Console: G923 $350 (PS/Xbox); PS direct drive: Thrustmaster T598 5 Nm $466 Best Buy / $500 MSRP |
| Cockpit/mount | Playseat Challenge X — Logitech G Edition, carbon steel, foldable | **$299 MSRP** (street $229 Walmart / $239 Amazon) | Next Level Racing Wheel Stand 2.0 **$279 MSRP** (use your chair; upgradeable to full cockpit with GTSeat add-on); NLR Wheel Stand Lite 2.0 $149, rated to 10 Nm |
| Display | Existing TV/monitor (rig faces TV) | $0 | Playseat TV stand — price not verified, see Part G |
| **Total (anchor, MSRP cockpit)** |  | **$678** (street ≈ $608 at $229 cockpit) | PS variant: T598+Challenge X ≈ $765–799 |

**Pros:** Folds away, real driving position, R5 is genuine direct drive for $379. **Cons:** Challenge seat flex with load-cell braking and >8 Nm bases; no monitor mount; stand users still fight office-chair castors (NLR stand has a chair-cradle tray).
**Next upgrade:** Keep the R5, move it to a Tier 2 fixed rig; add Moza SR-P2 load-cell pedals ($149) once hard-mounted.
**Used alternative (Est.):** Used Challenge (original) ~$120–180; inspect ActiFit fabric straps and the plastic wheel-deck clamp — the known wear point.

> **Sources (§B2):** Moza US bundles/pedals, verified live 2026-10-02 (URL §B1). Playseat Challenge X $299 MSRP, 140×60×105 cm, 11.1 kg — Playseat spec sheet via index: https://www.bedbathandbeyond.com/downloads/pdf/1519569887_d1566664-1073-3e10-a248-43de03c3217d.pdf . NLR Wheel Stand 2.0 $279 — Next Level Racing official: https://nextlevelracing.com/products/racing-wheel-stand-2-0/?srsltid=AfmBOopEo121sPrQOsU3-RkyoFCfc__95O4AT3VHCOqsgcDNxlaxcnAb . T598 $465.99 — Best Buy: https://www.bestbuy.com/product/thrustmaster-t598-racing-wheel-pedals-5nm-direct-drive-force-feedback-sim-racing-wheel-for-ps5-ps4-windows-black/JXLH4643YG/sku/6594092

## B3. Tier 2 — First dedicated fixed rig

**Who it's for:** You have a permanent corner. This is the first tier that *beats F1 Arcade on driving feel* (load-cell brake + rigid seat + direct drive).
**Footprint:** ~130×65 cm fixed (ASR-class profile rig + seat), plus monitor. Plan 170×80 cm with walk-around.
**Feels vs F1 Arcade:** No motion and a smaller screen, but sharper FFB, repeatable braking, and your own FOV-calibrated setup (§F).

| Part | Primary pick | Price | Options (2–3 per category) |
|---|---|---|---|
| Platform | Existing gaming PC | $0 (assumed; spec §C7) | PS5 variant: Fanatec GT DD Pro (below) |
| Wheelbase+rim+pedals | **Moza R9 V3 + KS wheel + SR-P2 pedals bundle** — 9 Nm DD, SR-P2 = load-cell brake (100 kg class) | **$559 sale / $777 reg** [verified live] | Fanatec CSL DD Ready2Race 5 Nm (8 Nm w/ Boost Kit) $400–540 (price varies, §G) + CSL Elite Pedals V2 $280 sale/$330; Simagic Alpha Evo Sport 9 Nm **base only $399** + wheel/pedals extra; Logitech RS50 System 8 Nm $700 + RS Pedals $160 (best console+PC cross-over) |
| Cockpit/mount | Advanced SimRacing ASR 1 (Gen 2) aluminium profile, frame only | **$400** ($399.99 US retailer) | Playseat Trophy $499–529 street (tube+abric, DD-ready, 140×58 cm); NLR Wheel Stand 2.0 + GTSeat add-on (price §G) |
| Seat | Used real car seat / entry bucket | **$250 Est.** (range $150–400, not verified SKU) | NRG/Sparco entry buckets in same Est. range |
| Display | Samsung Odyssey G5/G55C 32″ 1440p 165 Hz | **$250 new** ($190–200 on sale Oct 2026) | 27″ 1440p 165 Hz class Est. $180–250; your existing 1080p TV $0 |
| Other required | USB hub, surge strip, pedal/rig bolts | included in Est. seat/rig allowance | — |
| **Total** |  | **$1,459** (existing PC) |  |

Arithmetic: 559 + 400 + 250 + 250 = **$1,459**.

**Pros:** Load-cell brake from day one, 9 Nm is enough headroom to avoid clipping (§F3), profile rig accepts every future upgrade. **Cons:** PC-only ecosystem at this price (Moza/Simagic), seat is the wildcard cost, single screen FOV ~40–50°.
**Next upgrade:** Tier 3 ultrawide or a 12 Nm base — keep rig, pedals, seat.
**Used alternative (Est.):** Used alu-profile rigs resell well (~60–75% of new, they don't wear out); used Fanatec CSL DD 5 Nm ~$200–260 seen on eBay index — verify QR2 and PSU (Boost Kit PSU is the 8 Nm unlock, budget $120–150 if missing).

> **Sources (§B3):** Moza bundle $559 — verified live (URL §B1). Simagic Alpha Evo Sport 9 Nm $399 — Simagic: https://simagic.com/products/simagic-alpha-evo-wheel-base-9nm-12nm-18nm?utm_source=organic&utm_medium=pressrelease&utm_campaign=overtake&utm_id=evo . ASR 1 from $399.99 — The Racers Mark US: https://theracersmark.com/products/advanced-simracing-asr-1-gt-chassis . Samsung 32″ $249.99 new / $199 sale — Best Buy / Tom's Hardware: https://www.tomshardware.com/monitors/gaming-monitors/samsung-32-inch-165-hz-1440p-curved-gaming-monitor-is-at-its-lowest-price-of-usd199-save-up-to-usd130-on-the-odyssey-g55c . Fanatec CSL Elite V2 $329.99 — Best Buy: https://bestbuy.com/product/fanatec-csl-elite-sim-racing-pedals-v2-load-cell-brake-90kg-pc-ps5-ps4-xbox-via-wheel-base/J39TSCS36T

## B4. Tier 3 — Sweet-spot enthusiast

**Who it's for:** Weekly league racing. The last tier where money still buys lap time.
**Footprint:** ~140×70 cm rig + 34″ ultrawide; ~180×90 cm comfortable.
**Feels vs F1 Arcade:** Better in every driving input; only motion and screen sheer size still favour the Arcade.

| Part | Primary pick | Price | Options |
|---|---|---|---|
| Platform | Existing gaming PC (mid spec §C7) | $0 | — |
| Wheelbase+rim+pedals | **Moza R12 V2 + KS wheel + SR-P2 bundle** — 12 Nm DD + load-cell pedals | **$649 sale / $897 reg** [verified live] | Simagic Alpha Evo 12 Nm base $549 + GT Neo-class wheel + P1000 pedals ($469–549) ≈ $1,300–1,500 total (Est. assembly); Fanatec ClubSport DD 12 Nm $699 base-only (2026 price cuts, index) + Elite V2 $280; Logitech G Pro 11 Nm **$1,000 sale / $1,200 MSRP** [verified live] + Pro Pedals ~$350 (console-compatible path) |
| Cockpit | Mid alu-profile rig (ASR 3 / Trak Racer TR80 class) | **$650 Est.** (range $550–750; ASR 1 $400 is the verified floor) | Heavier 4080/40120 profile if motion is planned later |
| Seat | Entry FIA-style bucket / recliner | **$300 Est.** ($250–400) | Used real seat $150 Est. |
| Display | 34″ 3440×1440 ultrawide (Gigabyte M34WQ class) | **$399** (index) | Samsung 49″ G9 5120×1440 **$650 sale / $1,000 MSRP** (Sep 2026); 32″ 1440p $250 (§B3) |
| **Total** |  | **$1,998** (existing PC) | 649+650+300+399 = $1,998 |

**Pros:** 12 Nm run at 60–80% = detail without clipping; ultrawide FOV ~90–100° without triple-screen PC load. **Cons:** Diminishing returns start here; console players pay the Logitech/Fanatec premium for the same torque.
**Next upgrade:** Do *not* buy a stronger base. Buy triples/VR (Tier 4) or pedal haptics ($49 Simagic P-HPR).
**Used alternative (Est.):** Heusinkveld Sprint pedals hold value — used ~$400–475 vs $575 new (index); check elastomer wear. Used 34″ ultrawides ~$200–280 Est.

> **Sources (§B4):** Moza R12 bundle — verified live (URL §B1). Logitech G Pro $999.99/$1,199.99, 11 Nm — Logitech US, *verified live* 2026-10-02: https://www.logitech.com/en-us/shop/p/pro-racing-wheel.941-000175 . Simagic P1000 $469 — Extreme Sim Racing: https://extremesimracing.com/products/simagic-p1000-modular-pedals . Samsung G9 $649.99 — Neowin, 2026-09-28: https://www.neowin.net/deals/samsung-odyssey-g9-49-inch-monitor-drops-to-64999/

## B5. Tier 4 — Triple-monitor / VR enthusiast

**Who it's for:** PC sim racing as a hobby centrepiece (iRacing/ACC/LMU leagues, endurance races).
**Footprint:** Triples: rig ~140 cm long, screen arc **~130–150 cm wide**, total ~180×150 cm. VR variant: rig footprint only (~140×70 cm) + 2×2 m clear play area.
**Feels vs F1 Arcade:** Triples/VR immersion meets or beats the Arcade; still no motion unless Tier 5.

| Part | Primary pick | Price | Options |
|---|---|---|---|
| Platform | **New gaming PC** — Ryzen 9800X3D-class + RTX 5070 (prebuilt) | **$2,000 sale** (Best Buy CyberPower, index) — or $0 if existing PC meets §C7 triples/VR spec | 5070 Ti prebuilt also $1,999 (Yeyian/Best Buy index); RTX 5080 builds $2,350–3,000 |
| Wheelbase+rim+pedals | **Moza R21 Ultra + RS V2 + CRP2 bundle** (~21 Nm class DD, CRP2 load-cell 200 kg) | **$1,317 sale / $1,437 reg** [Moza US index] | Simagic Alpha Evo Pro 18 Nm $699 base + P1000 $469–549 + wheel Est.; Simucube 2 Pro 25 Nm ~$1,380 base-only (index) + wheel Est. $400–700; Asetek Forte 18 Nm $800–950 |
| Cockpit | Heavy alu-profile rig | **$800 Est.** ($700–900) | Motion-ready now if Tier 5 is plausible (§C5) |
| Seat | Bucket seat | **$350 Est.** | — |
| Display | 3× Samsung 32″ 1440p 165 Hz ($250 ea) + triple stand | **$750 + $250 Est. stand** | **VR swap:** Meta Quest 3 512 GB **$599.99** (Meta, from 2026-04-19) replaces screens+stand (−$400); high-end PCVR (Pimax/Bigscreen class) — prices §G unresolved |
| **Total** |  | **$5,467 with new PC / $3,467 existing PC** (triples) · VR variant $5,067 / $3,067 | 1317+800+350+750+250+2000 = $5,467 |

**Pros:** ~150–180° FOV on triples, or true depth perception in VR; 15–25 Nm bases run at half power = maximum detail headroom. **Cons:** PC cost is half the build; triples need bezel/angle setup and a GPU with 3× DisplayPort; VR = heat, battery, no visible button boxes.
**Next upgrade:** Haptics (ButtKicker $280, §C-adjacent Tier 5) before motion.
**Used alternative (Est.):** Used triple 32″ 1440p sets are common (~$450–600 Est.); used RTX 4070 Ti/4080-class GPUs — verify VRAM ≥12 GB for triples (§C7). Used Simucube 2 Pro ~$900–1,100 Est., they have no belts/consumables.

> **Sources (§B5):** Quest 3 $599.99 — Meta official blog (price rise 2026-04-19): https://www.meta.com/blog/update-meta-quest-pricing/ . PC $1,999 — HotHardware/Best Buy 9800X3D+RTX 5070, index 2026-10-02. Moza/Asetek/Simucube prices — index sources in §C1 Source box (repeated there for page independence).

## B6. Tier 5 — Motion / pro showpiece

**Who it's for:** Dedicated room, content creation, training, or "F1 Arcade at home, but better."
**Footprint:** Rig + motion actuators need **clearance in every direction the rig moves** (pitch/roll); plan a 250×200 cm zone, reinforced floor consideration, cable management for moving parts. PC-only, always.
**Feels vs F1 Arcade:** This is the only tier that replicates the Arcade's full-motion seat — and adds belt tension under braking, pedal haptics and triples/OLED that the Arcade doesn't have.

| Part | Primary pick | Price | Options |
|---|---|---|---|
| Platform | **New high-end PC** — 9800X3D + RTX 5080 build | **$3,000** (Andromeda/Best Buy class, index) | RTX 5090 — $5,000+ GPU alone Sep 2026 (index); only for 4K triples/high-end VR |
| Wheelbase+rim+pedals | **Asetek Pro DD27 Bundle** — Invicta 27 Nm base + Forte Formula wheel + Invicta hydraulic (T.H.O.R.P. II) pedals | **$2,449 excl. tax** (Asetek US) | Simucube 2 Pro 25 Nm ~$1,380 + Heusinkveld Sprint $575 + wheel Est.; Moza R25 Ultra 25 Nm $899 base (TweakTown table, index) |
| Cockpit | Motion-ready heavy profile rig | **$1,000 Est.** ($900–1,400) | Must be motion-platform compatible *before* purchase (§C5) |
| Seat | FIA bucket (harness-compatible for belt tensioner) | **$400 Est.** | — |
| Motion | **Next Level Racing Motion Platform V3** — pitch+roll seat mover, ≤130 kg user | **$2,799 MSRP** (NLR official) | **Sigma Integrale DK2+ $7,460** (4-actuator full-chassis, 50 mm travel, manufacturer-direct US) — swap adds $4,661; D-BOX / Qubic full systems — quote-only, §G |
| Belt/haptics | Qubic QS-BT1 belt tensioner **$1,799** + ButtKicker Gamer PRO **$350** | **$2,149** | Simagic P-HPR pedal reactors $49 each (needs P1000/P2000 + PSU) |
| Display | Triples as Tier 4 ($750 + $250 stand) | **$1,000** | 49″ OLED G9 class $1,200–1,500 (index) or VR |
| **Total** |  | **$12,797 with new PC** (Sigma variant ≈ $17,458) | 2449+1000+400+2799+1799+350+750+250+3000 = $12,797 |

**Pros:** Motion + belt tension is transformative for braking feel; nothing left to upgrade except screens. **Cons:** Cost of a real track car season; motion needs per-game tuning (SimHub/Platform Manager), adds latency/noise/maintenance; resale is thin and local.
**Used alternative:** Essentially none safe — used motion actuators without warranty are a five-figure risk. Buy motion new, buy the *rig/seat/screens* used.

> **Sources (§B6):** NLR Motion V3 $2,799 — Next Level Racing: https://nextlevelracing.com/products/next-level-racing-motion-platform-v3/ . Sigma DK2+ $7,460 — Sigma Integrale: https://www.sigmaintegrale.com/products/dk2-plus-billet-motion-system . Qubic QS-BT1 from $1,799 — Trak Racer US: https://trakracer.com/products/qubic-system-qs-bt1-direct-drive-seat-belt-tensioner-with-trak-racer-seat-harness-red . Asetek DD27 $2,449 — Asetek US: https://www.asetek.com/simsports/us/product/pro-dd27-bundle/

---
# PART C — COMPONENT DEEP-DIVES (one wiki page per category)

## C1. Wheelbases

| Drive type | How it works | Typical torque | Feel | Examples / price anchor |
|---|---|---:|---|---|
| Gear | Motor → gear reduction | ~2.3 Nm | Notchy, loud, cheap, reliable | Logitech G923 **$350** |
| Belt / hybrid belt+gear | Motor → belt pulleys | ~3.5–6 Nm | Smoother, belt stretch/wear over years | Thrustmaster T248 (~3.5 Nm, $240–400), T300 RS GT ($450 MSRP) |
| Direct drive (DD) | Rim bolts to motor shaft | 3.9–35 Nm | No slack, fastest detail, needs rigid mount | Moza R3 3.9 Nm $339 → Simucube-class 25 Nm ~$1,380–1,600 |

**What Nm actually feels like:** Nm is *peak holding torque*, not quality. 2–3 Nm = toy-like but informative. 5–6 Nm = strong enough to fight you in a kart. 8–12 Nm run at 70% = the practical sweet spot — headroom so big hits don't clip (§F3). 15–25 Nm is almost always turned *down*; you buy it for slew rate/detail headroom, not arm-wrestling. Detail (encoder resolution — Simagic Evo advertises 21-bit, slew rate, filtering) matters more than peak Nm once past ~8 Nm.

| Ecosystem | Positioning (2026) | Console licence trap |
|---|---|---|
| Logitech G / RS / Pro | Easiest retail buy; G 2.3 Nm $350, RS50 8 Nm ($350 PC base / $450 PS base / $700 System), Pro 11 Nm $1,000–1,200 [live] | Separate PS and Xbox SKUs at every level. PS base costs +$100 (RS50) |
| Thrustmaster | PS-friendly; T598 5 Nm axial DD $466–500 is the PS value pick | T598 comes in PS and Xbox versions — check the box suffix (P vs X) |
| Moza | Best PC $/Nm; R3/R5/R9/R12 bundles $279–649 [live] | **PC-only except R3 Xbox bundle.** No PlayStation Moza exists |
| Fanatec (Corsair) | Widest console path; CSL DD 5 Nm ($400–540), GT DD Pro PS, ClubSport DD 12 Nm $699 / DD+ 15 Nm PS | **PS chip = in the wheelbase** (GT DD Pro/DD+ only; CSL DD can *never* do PS). **Xbox chip = in the rim** (any base + Xbox rim = Xbox) [Fanatec official compatibility text] |
| Simagic | PC enthusiast value; Alpha Evo 9/12/18 Nm = $399/$549/$699, open QR | PC-only |
| Asetek | PC premium; Forte 18 Nm, Invicta 27 Nm, bundles to $2,449 | PC-only |
| Simucube | PC reference standard; 2 Pro 25 Nm ~$1,380, 3 Pro $1,599 (index) | PC-only, base-only pricing — wheel/QR extra |

> **Sources (§C1):** Moza live (URL §B1); Logitech live (URL §B4); RS50 pricing — Traxion, 2025-09-17: https://traxion.gg/logitech-rs50-confirmed-as-8nm-direct-drive-pc-and-console-racing-wheel/ ; Fanatec compatibility (PS not possible on CSL DD; Xbox via licensed wheel) — Fanatec official product page via index: https://www.fanatec.com/jp/en/p/sim-racing-bundles/r2r_csl_dd_qr2_wrc_5nm_jp/csl-dd-qr2-ready2race-wrc-bundle-5nm-jp ; Simagic Evo $399–699 — PR Newswire/Simagic (URL §B3); T598 — Best Buy (URL §B2).

## C2. Pedals

**Why load-cell is the biggest consistency upgrade:** A potentiometer/Hall brake measures *pedal travel* — your leg must remember a position. A load cell measures *force* — your leg remembers pressure, like a real brake, and humans are far more repeatable at force. This is the single change most drivers credit for braking consistency (Heusinkveld/iRacing guidance indexed).

| Sensor | Measures | Used in | Verdict |
|---|---|---|---|
| Potentiometer | Rotation (contact, wears) | Logitech G923/G29 pedals | Fine to start; jitter when worn |
| Hall (contactless) | Rotation, no wear | Moza SR-P Lite throttle, Fanatec CSL pedals | Great for throttle/clutch, not brake feel |
| Load cell | Force (kg) | Moza SR-P2 $149 / CRP2 $369, Logitech RS Pedals $160 (75 kg), Fanatec Elite V2 $280–330 (90 kg), Simagic P1000 $469–549 (100 kg), Heusinkveld Sprint $575 (65 kg) | **Buy this first** |
| Hydraulic (+ load cell) | Real fluid damping | Simagic P1000 hydraulic option, Asetek Invicta pedals (in $2,449 bundle), Heusinkveld Ultimate class (price §G) | Feel/luxury, diminishing lap-time returns |

**2 vs 3 pedals:** Modern GT/F1/rally cars are 2-pedal (paddle shift). Buy 2-pedal load-cell now; add clutch ($40–99: Moza SR-P Lite clutch $39.90, CRP2 clutch $99) only if you drive H-pattern road cars/trucks. Load-cell pedals **require a rigid mount** — on carpet they will push you/your chair backwards.

> **Sources (§C2):** Moza pedals $149 SR-P2 / $369 CRP2 — Moza US: https://us.mozaracing.com/collections/pedals (index 2026-10-02, collection also seen live). Fanatec Elite V2 (URL §B3). P1000 $469 (URL §B4). RS Pedals $159.99 / 75 kg — Traxion RS50 (URL §C1). Sprint $575/65 kg — SimRacingCompare index.

## C3. Wheel rims

| Rim type | Diameter | Use | Notes |
|---|---|---|---|
| Round | 280–330 mm | Road, rally, drift, trucks | One rim to do everything; Logitech RS Round, Moza ES/CS |
| GT (cut-top/bottom) | 280–300 mm | GT3/GT4, general sim | Moza KS/CS, Fanatec McLaren GT3 class |
| Formula (open) | 270–280 mm | F1, prototypes, GT with many controls | More encoders/buttons; terrible for rally/trucking |

**Quick-release ecosystems are not cross-compatible:** Fanatec QR2, Moza QR, Simagic QR (D1-spec, most open to 3rd-party 70 mm wheels), Logitech Pro QR, Thrustmaster screw/QR — a rim only works on its own base family without adapters. Budget a button box ($100–250 Est., not verified) only when your rim lacks controls; most beginners don't need one in year one.

## C4. Shifters & handbrakes

| Device | When you actually need it | Picks / price |
|---|---|---|
| H-pattern | Manual road cars, older race cars, trucks (ETS2/ATS), drifting | Logitech Driving Force Shifter $50–60 (Logitech wheels only); Moza HGP $139–199; Thrustmaster TH8A $188–210 (metal, H+sequential plates) |
| Sequential | Rally, older GT, V8 Supercars | Moza SGP ~$99–109 (index); Fanatec ClubSport Shifter SQ $260 class (§G verify) |
| Handbrake | Rally/drift only — **not** for circuit beginners | Moza/Fanatec handbrakes $120–200 class (§G verify) |

Rule: paddles cover 95% of beginner racing. A shifter is an *immersion* purchase, not a speed purchase.

## C5. Cockpits / mounting

| Mount | Safe torque | Flex reality | Price anchor | Footprint |
|---|---|---|---|---|
| Desk clamp | ≤5 Nm comfortable | Desk dependent; monitor shake | Included | Desk |
| Wheel stand (NLR 2.0) | ~8–10 Nm (Lite 2.0 rated 10 Nm) | Good wheel deck, chair still moves | **$279** / Lite $149 | ~100×60 cm |
| Foldable (Challenge X) | ≤5.5–8 Nm, light load-cell use | Seat/wheel flex is the design trade | **$299 MSRP**, 140×60 cm, 11 kg | Folds to closet |
| Steel tube fixed (Playseat Trophy) | DD-ready (maker claim) | Better than foldable, less adjustable than profile | $499–529 | 140×58 cm |
| Alu profile 4020/4080 ("8020") | 25 Nm+ when 4080 uprights | The buy-once standard; infinite adjustment | ASR 1 **$400** floor; mid rigs $650 Est. | ~130×60 cm + seat |

**Seat types:** Fabric foldable (Challenge) < recliner < fixed bucket (best for load-cell braking — your back must not flex). Rigidity rule: *pedal rigidity matters more than wheel rigidity* — a flexing pedal tray destroys load-cell consistency. Motion (Tier 5) must be decided before the rig: NLR motion fits NLR/Elite cockpits, Sigma/D-BOX need heavy profile; retrofitting is expensive.

> **Sources (§C5):** NLR/ASR/Playseat anchors (URLs §B2–B3). ASR Pro dimensions example (142×64–74 cm class) — ASR via index. Profile (40-series/4080) guidance — DIY rig sources indexed, treated as general knowledge, no single price claimed.

## C6. Displays & VR

| Display | FOV* | PC load | Price anchor | Pros/cons |
|---|---|---|---|---|
| Single 27–32″ 1440p | ~40–55° | Low (RTX 5060 Ti/5070 class) | 32″ **$250** (URL §B3) | Cheap, sharp; mirrors are a guess |
| 34″ UW 3440×1440 | ~90–100° | Medium | **$399** (M34WQ index) | Best single-screen compromise |
| 49″ SUW 5120×1440 | ~100–110° | Medium-high | **$650 sale** (URL §B4) | One panel, no bezels; stretched edges |
| Triples 3×32″ 1440p | ~150–180° | High (3× DP, 12 GB+ VRAM) | $750 screens + $250 Est. stand | Best peripheral vision; setup/bezel faff, desk width 130–150 cm |
| VR Quest 3 | ~110° H (maker) | High (needs locked 72–90 fps) | **$599.99** (Meta 2026) | True depth/scale, look-to-apex; heat, ~1.5–2.5 h battery, no visible controls, motion sickness for some |

\*FOV at typical 60–70 cm eye distance; calculate yours in §F2. **Refresh/response:** 120 Hz+ and ≤5 ms GtG is the floor for sim use; 165 Hz 1440p panels above already exceed it. OLED improves blacks/response but costs 2–3× (45″ OLED $1,500–1,700 index).

> **Sources (§C6):** §B3–B5 display/VR URLs. Quest 3 2064×2208/eye, 110° H — Meta/Tom's via index.

## C7. PC / console requirements

**iRacing official (iracing.com, accessed via index 2026-10-02):** Windows 11; Minimum 4-core CPU / 16 GB / 6 GB GPU (GTX 1070); Recommended 6-core / 16 GB / 8 GB (RTX 2070); High-end 8+ cores / 32 GB / 10 GB+ (RTX 4070, RX 9070); 40 GB min, 225 GB all content.

| Use case (2026 buying guide, synthesis — Est.) | CPU | GPU | RAM |
|---|---|---|---|
| Single 1080p/1440p (iRacing/ACC/AMS2) | Ryzen 5 7600 / i5-12400 class | RTX 5060 Ti 16 GB / RX 9060 XT | 16 GB (32 preferred) |
| 34–49″ ultrawide | Ryzen 7 7800X3D class favoured (iRacing is CPU-heavy) | RTX 5070 / RX 9070 | 32 GB |
| Triples 1440p | 7800X3D/9800X3D | RTX 5070 Ti / 5080, **Nvidia favoured for iRacing SMP multi-projection** | 32 GB |
| VR (Quest 3 PCVR) | 7800X3D/9800X3D | RTX 5070 Ti / 5080 (foveated rendering on RTX in iRacing) | 32 GB |

Prebuilt anchors: 9800X3D + RTX 5070 **$1,999.99** (Best Buy sale, index); RTX 5080 desktops from **$2,349.99**; 9800X3D+5080 $2,999.99 (Andromeda/Newegg index). GPU prices rose through 2026 (memory shortage) — treat all PC prices as the most volatile in this guide.

**Console limits:** PS5 — GT7, ACC, F1, WRC; PS-licensed wheels only; single TV screen; PSVR2 works with GT7 only in this list. Xbox — Forza Motorsport/Horizon, ACC, F1; Xbox-licensed wheels only. **No console runs iRacing, AMS2, LMU (PC), triples, or mixed-brand USB pedals** — on console, pedals must work through the wheelbase.

> **Sources (§C7):** iRacing system requirements: https://www.iracing.com/membership/system-requirements/ . SMP/foveated notes — BoxThisLap/Tech-Insider GPU guides, index Sep–Oct 2026 (secondary, flagged).

---
# PART D — GAMES / SOFTWARE STARTER PATH

| Game | Type | Platform | Cost model (US, Oct 2026) | Wheel notes |
|---|---|---|---|---|
| Gran Turismo 7 | Simcade | **PS5 only** | One-time (~$70 MSRP, frequent sales §G) | PS-licensed wheels only; best beginner path on PS5 |
| Forza Horizon 5/6 | Arcade | Xbox/PC | One-time / Game Pass | Any Xbox/PC wheel |
| Forza Motorsport | Simcade | Xbox/PC | One-time / Game Pass | — |
| F1 25 / F1 26 | Simcade | PC/PS/Xbox | Annual one-time release | Closest to the F1 Arcade vibe |
| Assetto Corsa (2014) + mods | Sim | PC (console ver. limited) | One-time; Steam sales to ~$5 (Autumn 2026 sale index) | PC version is the mod platform |
| Assetto Corsa Competizione | Sim (GT) | PC/PS5/Xbox | $39.99 MSRP, **$9.99 at −75%** Steam (Oct 2026) | Great GT3 teacher; heavy on PC |
| Automobilista 2 | Sim | **PC only** | One-time, ~−50% on Steam sales | Best VR value, friendly AI |
| Le Mans Ultimate | Sim (WEC) | **PC only** (2026) | ~$30–38 (index; §G) | The 2026 endurance sim to watch |
| iRacing | Sim (online service) | **PC only** | **Subscription $13/mo, $33/3 mo, $110/yr, $199/2 yr** + cars **$11.95** / tracks **$14.95**; 25+ cars/30 tracks included | Best organised online racing; budget $200–400/yr all-in typical. 2026 reports of a subscription price rise — exact new price **unresolved** (§G) |

**Beginner progression:** (1) GT7 or F1 or Forza — learn tracks without punishment → (2) ACC or AMS2 — real tyre/brake behaviour, AI racing → (3) iRacing Rookie (included cars/tracks are free) — only buy content for one series at a time → (4) LMU/ACC leagues.
**Cost trap example:** A competitive iRacing GT3 season can need 8–12 tracks × $14.95 ≈ $120–180 in content *on top of* subscription. ACC's entire game costs less than two iRacing tracks on sale.

> **Sources (Part D):** iRacing pricing — https://simracingfan.org/iracing-articles/how-much-does-iracing-cost/ and Trophi 2026 comparison (index). ACC $39.99/$9.99 — Steam: https://store.steampowered.com/app/805550/_Assetto_Corsa_Competizione/?snr=1_1056_4_1056_curatorfeatureddiscount&curator_clanid=6866589 . Steam Autumn Sale 2026 — Overtake.gg index.

---
# PART E — BUYING SMART

**Buy in this order (saves the most money):**
1. Wheel bundle for *your* platform (Tier 0/1) — confirm licence before paying.
2. Mount (stand/foldable) — before any pedal upgrade.
3. Load-cell pedals — first performance upgrade, buy once (SR-P2 $149 / Elite V2 $280 / P1000 $469 tiers).
4. Fixed profile rig + seat — buy once, sized for the base you *will* own (4080 if >12 Nm or motion planned).
5. Display/VR — after rig position is fixed (FOV depends on it, §F).
6. Base torque — last. A 5 Nm base on a rigid rig beats 15 Nm on a desk.

**New vs used:**
| Buy new | Buy used (Est. savings) |
|---|---|
| Load-cell pedals (elastomers/sensors wear, warranty matters), VR headsets (batteries/lenses), motion actuators | Alu profile rigs (don't wear out, −25–40%), bucket seats, monitors, Simucube/Moza DD bases (no consumables, check QR play + PSU), Heusinkveld pedals |
| Anything console-licensed if unsure of SKU history | Logitech G29/G920 starter kits (~$150–200) |

**Used risks:** worn belts (Thrustmaster T300 — check for slack/grinding), dead pedal potentiometers (jitter), Fanatec QR1 play (QR2 is current), missing Boost Kit PSU (halves a CSL DD to 5 Nm), Moza/Fanatec resale is strong so "bargains" are often scams — meet locally, test under load.
**Hidden-cost checklist:** Boost Kit ~$120–150 · monitor stand for triples $200–300 Est. · seat (rigs are frame-only!) $150–400 · shifter mount plates · powered USB hub · longer DP cables for triples · iRacing subscription+content · ButtKicker software tiers · PC itself ($1,150–3,000 prebuilt index range). Budget **+15%** over the wheel price for cables/mounts/small parts, every tier.

**Beginner mistakes:** Buying PC-only Moza/Simagic for a PS5 · buying the Xbox G923 for PlayStation (same name, wrong SKU) · load-cell pedals on carpet/office chair · 20 Nm base on a foldable · triples on a console · judging by peak Nm · buying a formula rim as your only rim then trying rally/trucks.

---
# PART F — SETUP BASICS

**F1. Ergonomics (seat–wheel–pedal triangle):** Seat like a road car, slightly reclined; pedals so your knee keeps a bend at full brake; wheel rim centre ~chest height, arms ~90–120° at elbows with hands at 9-and-3 without leaning forward; screen as close as possible (50–70 cm) with its centre at eye level. Load-cell braking is a *leg* exercise — if your seat or chair back flexes, fix that before adding brake force.

**F2. FOV principle:** Correct FOV makes the virtual world life-size: 
`horizontal FOV = 2 × arctan( (screen width ÷ 2) ÷ eye distance )` (use an online FOV calculator, set it in-game, then *don't* change it). Too-wide FOV feels fast but shrinks braking markers; too-narrow removes mirrors/peripheral cars — that's what triples/VR solve physically.

**F3. FFB clipping:** The game sends a force signal; if your base can't reproduce the peak, everything above it flattens to the same max force = clipping (detail lost in big kerb hits/crashes). Fix: turn *game* FFB down until peaks rarely clip (use the sim's FFB meter), run the *base* at 80–100%. This is why 9–12 Nm driven at 70% feels better than 5 Nm at 100%.

**F4. Pedal calibration:** Set brake deadzone ~2–5%, calibrate max force so *your* comfortable full press = 100% (start ~30–40 kg on a load cell, build up), throttle 0% deadzone at rest. Re-calibrate after changing elastomers/seat position.

---
# PART G — COULD NOT VERIFY / UNCERTAIN

| Item | Status |
|---|---|
| Fanatec US direct-store current prices (CSL DD Ready2Race, GT DD Pro) | Fanatec US store not verified live 2026-10-02; $400–800 range from reviews/Traxion/Best Buy index. **Re-check fanatec.com US before publishing prices** |
| Exact seat prices (NRG/Sparco/Trak Racer seats) and triple monitor stands | Given as labelled Est. ranges; no single US retailer SKU verified |
| iRacing 2026 subscription price *increase* | Multiple 2026 articles claim an increase is coming; official new schedule not confirmed — report uses the widely-indexed $13/$110 schedule |
| Le Mans Ultimate exact US Steam price; GT7 current US price | Indexed ~$30 / ~$70 class only |
| D-BOX / Qubic full motion system US pricing | Quote-only; only seat-mover/belt-tensioner anchors verified ($2,799 / $1,799) |
| Pimax / Bigscreen Beyond 2 current US prices | Mentioned in 2026 comparisons ($1,019 Beyond 2) — not verified, excluded from build totals |
| ASR 3 US price | Advanced SimRacing lists CAD; ASR 1 $399.99 US is the verified anchor, mid-rig $650 is Est. |
| All "Used" prices | Estimates from eBay/marketplace index snapshots, not live listings — label as Est. in wiki |

Price volatility note: Moza US runs aggressive sales (R5 $379 vs $599 reg seen live); GPU/Quest prices rose in 2026 on memory costs. Re-date every price on wiki import.

## Master source list (publisher — product/fact — access)
Verified live 2026-10-02 (real browser): MOZA Racing US bundles https://us.mozaracing.com/collections/racing-bundles · Logitech US PRO Racing Wheel https://www.logitech.com/en-us/shop/p/pro-racing-wheel.941-000175
Index 2026-10-02 (search index, reputable publisher/retailer): Moza pedals https://us.mozaracing.com/collections/pedals · Simagic https://simagic.com/products/simagic-alpha-evo-wheel-base-9nm-12nm-18nm?utm_source=organic&utm_medium=pressrelease&utm_campaign=overtake&utm_id=evo · Fanatec compatibility https://www.fanatec.com/jp/en/p/sim-racing-bundles/r2r_csl_dd_qr2_wrc_5nm_jp/csl-dd-qr2-ready2race-wrc-bundle-5nm-jp · Best Buy T598 (URL §B2) · Best Buy Fanatec Elite V2 (URL §B3) · NLR stands/motion https://nextlevelracing.com/products/next-level-racing-motion-platform-v3/ · Playseat spec (URL §B2) · ASR 1 https://theracersmark.com/products/advanced-simracing-asr-1-gt-chassis · Samsung monitors (URLs §B3–B4) · Meta Quest pricing https://www.meta.com/blog/update-meta-quest-pricing/ · Sigma https://www.sigmaintegrale.com/products/dk2-plus-billet-motion-system · Qubic https://trakracer.com/products/qubic-system-qs-bt1-direct-drive-seat-belt-tensioner-with-trak-racer-seat-harness-red · Asetek https://www.asetek.com/simsports/us/product/pro-dd27-bundle/ · iRacing requirements https://www.iracing.com/membership/system-requirements/ · iRacing cost https://simracingfan.org/iracing-articles/how-much-does-iracing-cost/ · F1 Arcade Chicago http://f1arcade.com/us/families · ACC Steam (URL Part D) · Logitech RS50 https://traxion.gg/logitech-rs50-confirmed-as-8nm-direct-drive-pc-and-console-racing-wheel/
