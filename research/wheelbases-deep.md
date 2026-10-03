# Wheelbases Deep Research — RESEARCH ONLY (not wiki prose)

> Purpose: source material for the wiki page the user will write themselves.
> Every price is USD, flagged with source. "Checked 2026-10-02, volatile" unless a different check date is stated. Index = found in search results / reviews, not opened live on the manufacturer's US store. Live = page fetched 2026-10-02.
> Do NOT copy prices into the wiki without re-dating them.

## Suggested page slug
- `wheelbases` (under Components) — companion: `pedals` (see pedals-deep.md)

---

## Key facts (bulleted, sourced)

### Drive types — what they are and why they feel different
- **Gear drive** (Logitech G29/G920/G923): two small motors drive the wheel shaft through helical gears. Cheapest mature tech; ~2.1–2.3 Nm; noisy, notchy/"coggy" feel, some backlash. Sources: Logitech comparison table (Amazon.ca index, 2026-10-02) lists G923/G920/G29 at up to 2.3 Nm, gear drive; TechTimes 2026-09-10 says G923 adds TRUEFORCE over same dual-motor helical system.
- **Belt drive** (Thrustmaster T300/TX/T-GT II): motor drives shaft via belt(s). Smoother and quieter than gears, more detail, still some elasticity/compliance. T300 RS class ~3.9 Nm (widely indexed; TODO verify on Thrustmaster US).
- **Hybrid gear+belt** (Thrustmaster T248/T248R, TX-era): compromise; T248R 3.1 Nm peak, $349.99 list (TechRadar review, search index 2026-10-02).
- **Direct drive (DD)** (everything Fanatec/Moza/Simagic/Simucube/Asetek/Logitech G Pro/RS50, Thrustmaster T598/T818, Turtle Beach VelocityOne): wheel shaft is the motor shaft — no gears/belts. Strongest, fastest, most detailed; price floor has collapsed to ~$279–399 bundles (Moza R3/R5 US store, live 2026-10-02).
- **Axial-flux DD** (Thrustmaster T598): magnets parallel to axis; Thrustmaster claims zero cogging and "controlled overshoot" — 5 Nm constant with boost to ~10 Nm for transient spikes. Sources: PC Gamer / TechRadar / Tom's Guide reviews (index, 2026-10-02).
- **TRUEFORCE** (Logitech): extra high-frequency vibration layer from game physics/audio on top of normal FFB; G923, RS50, G Pro. Support is per-game (ACC, iRacing, F1, DiRT Rally 2.0; NOT Forza Horizon 6 at launch — TechTimes 2026-09-10, index).

### Torque (Nm) — real-world meaning
- Nm = twisting force at the wheel shaft. A 10 N force at a 1 m lever = 10 Nm (physics explainer, Team-BHP index).
- Everyday road cars with electric power steering: roughly **1–6 Nm at the wheel**, modern EPS ~2 Nm typical (ZLeague/Reddit summary, index — treat as ballpark, TODO find better source).
- Sim bases are sold by **peak** torque; some quote constant/sustained (Thrustmaster T598 5 Nm constant + overshoot; T818 10 Nm constant, OverTake index). Peak vs constant vs "overshoot" numbers are NOT directly comparable across brands.
- Why headroom matters even if you run low force: a higher-torque base run at 50% (e.g. DD2 25 Nm at 52%) has clipping headroom and calmer control (Gamereactor blog, index). Clipping = game asks for more force than base can deliver; detail is lost exactly at the limit (cornering peaks).
- Practical bands (synthesis of sources above + existing report): 2–3 Nm = entry gear/belt; 5–6 Nm = first DD, enough to need a sturdy desk clamp/rig; 8–12 Nm = sweet spot for most; 15 Nm+ = diminishing returns for most users, rig required; 25 Nm+ = pro/headroom/luxury.
- Wheel rim diameter changes perceived torque (same Nm feels stronger on a smaller rim) — TODO source properly before wiki use.

### Platform compatibility & licensing mechanism (the single most confusing topic)
- **PlayStation**: the Sony security/licensing chip must be in the **wheelbase**. Fanatec forum (index): "Playstation authenticates through the wheel base"; a wheel is only "PS Ready" until paired with a PS-licensed base. Consequence: a PC/Xbox Fanatec CSL DD can never work on PS5; you need GT DD Pro / ClubSport DD+ (PS-licensed bases). Same logic for Logitech: PS version of RS50 base costs +$100 ($449.99 vs $349.99 PC-only — Traxion/Logitech blog, index 2026-10-02).
- **Xbox**: the Microsoft security chip is in the **steering wheel (rim/hub)**, not the base (Fanatec forum index; Eurogamer 2014 explainer). Consequence: any Fanatec base + an Xbox-licensed rim (e.g. McLaren GT3 V2 ~$200, or ClubSport Universal Hub V2 for Xbox ~$350 — Fanatec forum prices, index, TODO re-verify) makes the whole setup Xbox-compatible. Moza works the same way: ESX is Moza's only Xbox-licensed wheel; it unlocks Xbox on any Moza base R3–R25 (Simufy product page, index 2026-10-02).
- **Thrustmaster/Logitech** sell separate PS and Xbox variants of the same wheel (G29=PS, G920=Xbox; T300=PS, TX=Xbox; T598 PS and T598-X Xbox). One wheel rarely does both consoles.
- **PC**: no licensing. Any USB wheel/pedals/shifter can be mixed across brands, each as its own USB device. This is the core PC advantage.
- **Pedals/shifters on console must connect THROUGH the wheelbase**; the base is the only device plugged into the console (Fanatec manual, PDF index 2026-10-02: "peripherals like pedals or shifters on consoles must be connected to the Fanatec wheel base and the wheel base is the only device connected to the console"). So a Heusinkveld/Simucube pedal set cannot work on PS5/Xbox natively, on any base.
- **Unofficial workaround**: Collective Minds DriveHub (~$89.99, Eurogamer index) spoofs a licensed device and lets many PC wheels/pedals work cross-console, incl. Heusinkveld Ultimates + Fanatec DD1 on PS5 (Traxion, index). Not officially supported by Sony/Microsoft; PS5 support unofficial (DriveHub officially lists PS4/Xbox, Traxion index). GIMX is a DIY alternative. Flag as unofficial in wiki.
- **Logitech mixing**: Logitech G Racing Adapter lets older Logitech pedals/shifters work with RS/PRO bases, incl. on console (Traxion 2025-09, index). Logitech RS Wheel Hub contains platform electronics too — a PS Pro base + Xbox RS Hub gives all three platforms (Arcader review, index).

### Ecosystem lock-in
- Buying a base = buying its quick-release + rim catalogue: Fanatec QR2, Moza QR, Simagic QR-A (70mm pattern, third-party rims supported via adapter — PRNewswire Simagic EVO launch, index), Simucube SQR + Simucube 3's new QR, Asetek QR (open ecosystem adapters, Asetek index), Thrustmaster ecosystem (T818/T598 share QR; older rims need QR upgrade adapter — Traxion T598 review, index).
- On PC, lock-in is soft: pedals/shifters from any brand work via USB; third-party rims work on many bases with USB wheels + QR adapters. On console, lock-in is hard: everything must be same-ecosystem and route through the base (Fanatec manual, above).
- Fanatec note: pedals connected via base = console OK; same pedals via USB = PC only (CSL Elite V2 product page, fanatec.com index 2026-10-02).
- Corporate: Fanatec is now Corsair-owned (post-2024); prices were SLASHED effective Feb 2 (2026) per Traxion (index) — US CSL DD 5Nm $399.99, 8Nm $479.99, ClubSport DD $699.99, DD+ $899.99, GT DD Pro base $599.99. Fanatec US direct prices were NOT live-verified 2026-10-02 (see Unverified).

### Brand / line notes (Oct 2026 state of play)
- **Logitech**: G923 (gear, 2.3 Nm, $299–349 street; Provantage $349.99 live-index 2026-10-02) is the entry default. **RS50** (Sep 17 2025 launch): 8 Nm DD, PC base $349.99 / PS base $449.99 / console Systems $699.99; RS Pedals $159.99 (75 kg load cell); RS50 McLaren bundle $899.99 (GamingIdeology, 2026-09-22 index). **G Pro** wheel: 11 Nm DD, $999.99–$1,199.99 by variant (existing report, Logitech US live 2026-10-02 in prior session). RS50 is the new mid-tier; G Pro remains flagship.
- **Thrustmaster**: T248R $349.99 (hybrid, 3.1 Nm, PS/PC); **T598 $499.99** (axial DD 5 Nm + overshoot, PS or Xbox versions, includes 2-pedal set — TechRadar/PC Gamer index); **T818 $649.99–$750** (10 Nm constant / 11 Nm listed, PC-only base, wheel+pedals extra; price conflict $649.99 launch vs $750 MSRP Windows Central — TODO). T300 RS GT price TODO.
- **Fanatec**: CSL DD 5/8 Nm (from $399.99 US post-cut, index), GT DD Pro (PS, 5/8 Nm, base $599.99 post-cut index), ClubSport DD 12 Nm / DD+ (PS) ($699.99/$899.99 post-cut index); **new flagship Podium DD (2026): 25 Nm genuine holding / 33 Nm peak overshoot, $1,199.99 US** (Traxion pricing article, index) replacing DD1/DD2 (legacy 20/25 Nm). **Conflict**: ClubSport DD+ quoted 15 Nm in Fanatec's own comparison guide (updated Mar 11 2026) but 18 Nm in newer TGS-2026-era articles — possible silent spec bump, unverified. Summer 2026 sale bundles indexed (Traxion): CSL DD R2R bundles from $489.99. All Fanatec US prices index-only — re-verify.
  - Ratings language: Fanatec ClubSport/Podium quote **holding** torque; CSL quotes peak. QR2 across current line. Desk clamp OK at 5 Nm; ClubSport/Podium side+front mount.
- **Moza**: US store live 2026-10-02 — R3 bundle PC $279 / Xbox $339 (3.9 Nm); R5 bundle $379 sale / $599 list (5.5 Nm); R5 Pro bundle $399 (6 Nm, 21-bit); R9 V3 + wheel + SRP2 bundles $559 (9 Nm); R12 V2 bundles $649 (12 Nm); R21 Ultra bundles from $1,317; R25 Ultra from $1,507. **PlayStation: Moza's FIRST PS-licensed products (R5S Pro, R16S Ultra, R16S Ultra base) debuted at Tokyo Game Show 2026 (Sep 2026), with Polyphony/GT7 partnership; pricing/release unknown, Sony final approval pending at announcement** (IGN via TechNewsVision/EGamers, index 2026-10-02). Until those ship, Moza = PC + Xbox only.
- **Simagic**: Alpha EVO Sport 9 Nm $399 / EVO 12 Nm $549 / EVO Pro 18 Nm $699 (official store index, crawled 2026-10-02); EVO Ultra 28 Nm $969 (TweakTown review index). Open ecosystem: 70mm bolt pattern + QR-A, third-party wheels OK. PC-only.
- **Simucube**: Simucube 3 is current gen — Sport 15 Nm $1,399 excl. tax / Pro 25 Nm $1,599 / Ultimate 35 Nm $3,299, PLUS mandatory-ish Link Hub ~$150 sold separately (Traxion, index 2026-10-02, sourcing simucube.com US). Simucube 2 (17/25/32 Nm) legacy; slew rates 4.8/8.0/9.5 Nm/ms (Simucube comparison PDF, index). PC-only, premium pricing, 3-yr (Sport/Pro) / 5-yr (Ultimate) warranties.
- **Asetek SimSports**: US store index 2026-10-02 (excl. tax) — La Prima 12 Nm $407.40 sale (list $679, TODO suspicious discount) / Forte 18 Nm $949 / Invicta 27 Nm $1,349; Initium bundle (PC) $599 — new entry line. PC-only (console support "planned" for pedals per OverTake 2024 — stale, TODO).
- **Turtle Beach**: VelocityOne Race $649.99 MSRP (7.2 Nm DD, Xbox/PC, load-cell brake pedals included ~50 kgf class; TechPowerUp/Best Buy index). **KD3 (2025) is a smaller cut-down model: 3.2 Nm peak DD, 2-pedal Hall set (no load cell), $449.99** (turtlebeach.com via child research, index) — do not confuse with the 7.2 Nm original.
- **PXN**: budget; V99 gear ~3.2 Nm bundle ~$135–147 wholesale index (retail TODO); new VD series DD — VD4/VD6/VD10 with constant (not peak) ratings 4/6/10 Nm class (Traxion index). **VD6 bundle verified on PXN US store (child research): $391.99, 6 Nm constant / 7 Nm peak, PC-only, includes 3-pedal Hall set (PD HM).** Console support claims for PXN lines appear to rely on adapter passthrough (N5/ZX1) — unverified, TODO.
- **VRS**: uDFP20 upgradable-torque base $449 (6 Nm) → $847 (20 Nm unlock), DFP15/DFP20 (vrs.racing live-index 2026-10-02). PC-only, enthusiast niche.
- **Cammus**: C12 12 Nm all-in-one $599 (cammusracing.com index); C5 entry. PC-only niche, support/availability TODO.
- **Hori / Nacon**: Hori entry wheels (no/low FFB class) and Nacon Revosim mentioned in 2025–26 roundups (GamesRadar index) — prices/specs TODO, low priority.

### Mounting by torque class (what the base demands from furniture)
| Torque | Minimum sensible mount | Sources |
|---|---|---|
| 3–6 Nm | Desk clamp OK | Moza R3/R5 bundles ship clamps (live); Cammus C5 clamp included (index) |
| 5–8 Nm | Sturdy desk or wheel stand | CSL DD 8 Nm / GT DD Pro class (index) |
| 8–12 Nm | Wheel stand minimum, cockpit preferred | Simline Moza guide via child research (index) |
| 12–18 Nm | Rigid cockpit, aluminium profile preferred | ClubSport DD+/Forte/SC2 Sport class (index) |
| 18 Nm+ | Aluminium-profile cockpit, front-mount ideal | Invicta/SC3/Podium DD class (index) |
- Cheap tubular frames flex under high torque: GT Omega ART-class frame sweet spot ~6–7 Nm in one test; 20+ Nm base on a ~15 Nm-rated steel frame flexes (simracingpicks / Tech-Insider via child research, index — TODO verify).

### Tech specs worth a sidebar (from child research, search-index 2026-10-02)
- Slew rate (Nm/ms, how fast torque can change): Simucube 2 Sport/Pro/Ultimate 4.8 / 8.0 / 9.5; Asetek La Prima/Forte/Invicta 4.0 / 6.7 / 9.4; Moza R25 Ultra claims ≥10. Many users limit slew for smoothness.
- Encoders: 15-bit = 32,768 steps (Moza R3/R5), 21-bit ≈ 2.1M (Moza Ultra/Simagic EVO/VRS), 22-bit ≈ 4.2M (Simucube 2, Asetek), 24-bit Hiperface (SC2 Ultimate). Beyond ~21-bit, filtering/cogging matter more than bit count.
- Reviewer data point: setting Simagic EVO Pro, Simucube 2 Ultimate and Asetek Invicta all to 14 Nm made them hard to tell apart — $/Nm is a misleading shopping metric (RigWise/Boosted Media via child research, index).

---

## Copy-ready comparison tables

### Table 1 — Drive types compared
| Drive type | How it works | Typical torque | Feel | Example products | Price class (USD, checked 2026-10-02, volatile) |
|---|---|---|---|---|---|
| Gear | Motor via helical gears | ~2.3 Nm | Notchy, noisy, cheap & proven | Logitech G923 | $299–349 (Provantage index) |
| Belt | Motor via belt | ~3.9 Nm | Smooth, quiet, some flex | Thrustmaster T300 RS (TODO price) | TODO |
| Hybrid gear+belt | Combined | ~3.1 Nm | Middle ground | Thrustmaster T248R | $349.99 (TechRadar index) |
| Axial-flux DD | Axial magnets, DD | 5 Nm const + ~10 Nm overshoot | Zero cogging claim, spiky transients | Thrustmaster T598 | $499.99 bundle (TechRadar index) |
| Direct drive | Shaft = motor | 3.9–35 Nm | Strongest, fastest, most detailed | Moza R3→Simucube 3 Ultimate | $279 bundle → $3,299 base (see Table 2) |

### Table 2 — Wheelbases / bundles by brand (USD; all checked 2026-10-02, volatile)
| Product | Torque | Type | Platforms | Price USD | Source / type |
|---|---|---|---|---|---|
| Hori Racing Wheel Apex | None (no FFB, 270°) | Spring wheel | PS5/PS4/PC | $119.99 (seen $99.99) | TechRadar, index |
| Logitech G29 / G920 | 2.3 Nm | Gear | PS/PC (G29) / Xbox/PC (G920) | **$229.99 sale / $299.99 list** | logitechg.com, **verified live** (child research) |
| Logitech G923 | 2.3 Nm | Gear | PS/PC or Xbox/PC (variants) | **$299.99** (also $349.99 Provantage index) | logitechg.com, **verified live** (child research) |
| Thrustmaster T300 RS GT | ~3.9 Nm (TODO verify) | Belt | PS/PC | $399.99 historical MSRP; current US TODO | Tom's Hardware 2016, index (stale) |
| Thrustmaster T300 RS (Amazon comparison) | ~3.9–4.0 Nm | Belt | PS/PC | $449.99 | Amazon TM comparison table, index (child research) |
| Logitech RS50 base | 8 Nm | DD | PC $349.99 / PS+PC $449.99 | 349.99 / 449.99 | Traxion + Logitech blog, index |
| Logitech RS50 System | 8 Nm | DD | Xbox/PC or PS/PC, wheel+clamp (no pedals) | **$599.99–$699.99 by variant** | logitechg.com, **verified live** (child research) |
| Thrustmaster T128 | ~2 Nm | Hybrid | PS/PC or Xbox/PC | $199.99 MSRP | TechRadar, index |
| PXN VD6 bundle | 6 Nm const / 7 pk | DD | PC (bundle w/ 3-pedal Hall set) | $391.99 | us.e-pxn.com, **verified live** (child research) |
| Logitech G Pro Wheel | 11 Nm | DD | PS/PC or Xbox/PC variants | $999.99–1,199.99 (index; CA store CAD $1,199.99–1,499.99) | Reviews index — US page unresolved, TODO |
| Thrustmaster T248R | 3.1 Nm pk | Hybrid | PS/PC | $349.99 | TechRadar, index |
| Thrustmaster T598 | 5 Nm const (+10 over.) | Axial DD | PS/PC or Xbox/PC | $499.99 (bundle w/ pedals) | TechRadar/PC Gamer, index |
| Thrustmaster T818 | 10 Nm const | DD | PC | $649.99 (launch) / $750 MSRP conflict | Traxion vs Windows Central, index — TODO |
| Fanatec CSL DD 5 Nm | 5 Nm | DD | PC, Xbox-ready | $399.99 (post Feb-2026 cut) | Traxion price-cut table, index |
| Fanatec CSL DD 8 Nm | 8 Nm | DD | PC, Xbox-ready | $479.99 | Traxion, index |
| Fanatec GT DD Pro base | 5/8 Nm | DD | **PS**/PC, Xbox-ready | $599.99 (8 Nm class) | Traxion, index |
| Fanatec ClubSport DD / DD+ | 12 / 15 Nm (DD+ also quoted 18 Nm — conflict) | DD | PC / **PS** (DD+) | $699.99 / $899.99 | Traxion, index |
| Fanatec Podium DD (2026) | 25 Nm hold / 33 pk | DD | PC, Xbox-ready | $1,199.99 | Traxion, index |
| Simucube 2 Sport (legacy) | 17 Nm, slew 4.8 Nm/ms | DD | PC | $999 (one US retailer) | Apevie via child research, index |
| Asetek Initium base | 5.5 Nm (→8 Nm $89 boost) | DD | PC | $349 (bundle $599) | Asetek US, live/index |
| Moza R3 bundle | 3.9 Nm | DD | PC $279 / Xbox $339 | 279 / 339 | us.mozaracing.com, **live** |
| Moza R5 bundle | 5.5 Nm | DD | PC | $379 sale ($599 list) | Moza US, **live** |
| Moza R5 Pro bundle | 6 Nm | DD | PC | $399 | Moza US, **live** |
| Moza R9 V3 bundle (wheel+SRP2) | 9 Nm | DD | PC | $559 ($777 list) | Moza US, **live** |
| Moza R12 V2 bundle (wheel+SRP2) | 12 Nm | DD | PC | $649 ($897 list) | Moza US, **live** |
| Moza R21/R25 Ultra bundles | 21/25 Nm | DD | PC | from $1,317 / $1,507 | Moza US, **live** |
| Simagic Alpha EVO Sport / EVO / Pro | 9 / 12 / 18 Nm | DD | PC | $399 / $549 / $699 | simagic.com, index |
| Simagic Alpha EVO Ultra | 28 Nm | DD | PC | $969 | TweakTown, index |
| Simucube 3 Sport / Pro / Ultimate | 15 / 25 / 35 Nm | DD | PC | $1,399 / $1,599 / $3,299 excl. tax (+~$150 Link Hub) | Traxion ex simucube.com, index |
| Asetek La Prima / Forte / Invicta | 12 / 18 / 27 Nm | DD | PC | $407.40 sale? / $949 / $1,349 excl. tax | asetek.com US, index — TODO La Prima |
| Turtle Beach VelocityOne Race | 7.2 Nm | DD | Xbox/PC (bundle w/ LC pedals) | $649.99 | TechPowerUp/Best Buy, index |
| VRS uDFP20 | 6→20 Nm unlock | DD | PC | $449→$847 | vrs.racing, index |
| Cammus C12 | 12 Nm | DD | PC | $599 | cammusracing.com, index |

### Table 3 — Platform licensing cheat sheet
| Platform | Where the licence lives | What it means | Example |
|---|---|---|---|
| PlayStation 5/4 | Chip in the **wheelbase** | Base must be PS-licensed; rim choice free (same brand) | GT DD Pro, DD+, RS50 PS, T598-PS, G29 |
| Xbox Series/One | Chip in the **wheel/rim/hub** | Base is free; need Xbox-licensed rim to unlock | Fanatec + McLaren rim; Moza + ESX wheel; G920 |
| PC | None | Mix any brands via USB; pedals/shifters independent | Heusinkveld pedals + Simucube base OK |
| Console pedals rule | — | Pedals must plug into the base; base is the only USB device | Fanatec manual (index) |
| Cross-console hack | DriveHub ~$89.99 | Unofficial, may break with updates | Eurogamer/Traxion (index) |

### Table 4 — Torque bands in plain language
| Band | Class | Mounting implication | Who it's for |
|---|---|---|---|
| ~2–3 Nm | Gear/belt entry | Desk clamp fine | First wheel, console casual |
| 4–6 Nm | Entry DD | Solid desk or wheel stand | The 2026 default start (R5/T598) |
| 8–12 Nm | Mid DD | Wheel stand / rig recommended | Sweet spot; likely "final" base for many |
| 15–18 Nm | High DD | Rig required | Enthusiast headroom |
| 25–35 Nm | Pro DD | Serious rig, safety torque-off | Pro/luxury; run turned down |

---

## Options by budget (wheelbase-first, USD, checked 2026-10-02, volatile)
- **Under $300**: Logitech G923 $299–349 (PS/Xbox variants, gear); Moza R3 PC bundle $279 (live) — cheapest DD; used G29/T300 market (existing report, Est.).
- **$300–500**: Moza R5 bundle $379 sale (live) / R5 Pro $399 (live); Fanatec CSL DD 5 Nm $399.99 (index, base only — needs rim+pedals); Logitech RS50 PC base $349.99 (index, base only); Thrustmaster T598 $499.99 (index, console DD bundle); Simagic EVO Sport $399 (index, base only).
- **$500–800**: Fanatec CSL DD 8 Nm $479.99 / GT DD Pro PS base $599.99 (index); Moza R9/R12 bundles $559/$649 (live); Simagic EVO 12 $549 / Pro 18 $699 (index); Turtle Beach VelocityOne $649.99 Xbox bundle (index); Asetek La Prima (TODO).
- **$800–1,500**: Logitech G Pro $999.99+ (live prior); Fanatec ClubSport DD+ PS $899.99 (index); Simagic EVO Ultra $969 (index); Asetek Forte $949 (index); Simucube 3 Sport $1,399 + hub (index).
- **$1,500+**: Simucube 3 Pro $1,599 / Ultimate $3,299 (index); Asetek Invicta $1,349 (index); Fanatec DD2-class legacy (index, TODO current US).

## Sources
**Verified live (fetched 2026-10-02):**
- Moza US bundles + pedals collections (us.mozaracing.com) — R3/R5/R5 Pro/R9/R12/R21/R25 bundle prices, pedal prices.
- Simucube.com product/compare data via Traxion Simucube 3 article (US $ excl. tax) — fetched as search extract; treat as near-live index.
**Search-index only (not opened on manufacturer US store 2026-10-02):**
- Traxion (Fanatec Feb-2026 US price cuts; RS50 launch; T818 launch; Simagic EVO Ultra via TweakTown), TechRadar/PC Gamer/Tom's Guide (T598, T248R), Logitech blog via screenhacker (RS50 price list), Fanatec forum (licensing mechanism), Fanatec manual PDF (console pedal rule), Eurogamer (DriveHub, security-chip history), Simufy (Moza ESX), IGN-derived TGS 2026 reports (Moza PS), Asetek US store extract, VRS/Cammus stores, Provantage (G923 $349.99), TechTimes (G920/G923, TRUEFORCE game support).

## Unverified / TODO items
- [ ] Fanatec US direct-store prices (fanatec.com US) — all Fanatec figures above are Traxion/review index; Corsair-era pricing is volatile. Re-check before wiki.
- [ ] Thrustmaster T818 US price: $649.99 (2022 launch, Traxion) vs $750 MSRP (Windows Central review) — resolve on thrustmaster.com US.
- [ ] Thrustmaster T300 RS / TX / T-GT II current US prices and status (current-gen or clearance?).
- [ ] Asetek La Prima US price: $407.40 "sale" vs $679 list in asetek.com extract looks like a promo or data error — verify; also La Prima standalone vs bundle-only status (Traxion launch article said bundle-only originally).
- [ ] Moza PlayStation line (R5S Pro / R16S Ultra): price, release date, whether existing Moza rims/pedals work with the new PS bases, GT7-only or broader PS5 support. Announced TGS Sep 2026, Sony approval pending.
- [ ] PXN VD4/VD10 US retail prices (VD6 bundle $391.99 verified); PXN console adapter-passthrough claims (N5/ZX1) unverified — check e-pxn.com manuals. PXN V99 US retail (only wholesale index found).
- [ ] Simucube 2 vs 3 availability: is SC2 discontinued? US retailer prices for SC2 Sport/Pro.
- [ ] Everyday-car steering torque figure (~2 Nm EPS) needs a stronger source than a Reddit summary.
- [ ] Rim-diameter vs perceived-torque explainer needs a citable source.
- [ ] Turtle Beach VelocityOne KD3 specs vs full Race (Best Buy $449.99 index) — what's cut?
- [ ] Nacon Revosim / Hori current US pricing (low priority).
- [ ] Fanatec Xbox rim prices (McLaren GT3 V2, Universal Hub V2 Xbox) — forum-indexed ~$200/~$350, verify on fanatec.com US.

