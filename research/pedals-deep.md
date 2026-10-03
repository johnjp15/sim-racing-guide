# Pedals Deep Research — RESEARCH ONLY (not wiki prose)

> Purpose: source material for the wiki page the user will write themselves.
> Every price is USD, flagged with source. "Checked 2026-10-02, volatile" unless stated. Index = search results/reviews, not opened live. Live = page fetched 2026-10-02.
> Do NOT copy prices into the wiki without re-dating them.

## Suggested page slug
- `pedals` (under Components) — companion: `wheelbases` (see wheelbases-deep.md)

---

## Key facts (bulleted, sourced)

### Sensor types — what actually differs
- **Potentiometer (pot)**: measures pedal *position/travel* via a rotating resistor. Cheap, wears over time, can get noisy/dirty. Found in bundled pedals (Logitech G-series stock pedals, Moza SR-P Lite class). Fibos/MySimRig explainers (index, 2026-10-02).
- **Hall effect**: measures position magnetically, contactless — no wear, no drift. Modern default for throttle/clutch (Fanatec CSL Elite V2 Hall on throttle+clutch, fanatec.com index; Logitech RS throttle Hall, Traxion index). Position-based like a pot, just durable and precise.
- **Load cell**: measures *force/pressure* (strain gauge), usually the brake. Rated in kg (e.g. 60–200 kg). The pedal barely moves; you modulate pressure. Fanatec's own copy: "The load cell sensor measures pressure rather than position… trains your muscle memory" (CSL Elite V2, fanatec.com index; same wording on CSL LC kit).
- **Hydraulic**: real fluid cylinder for brake feel (damping, two-stage travel) — usually still read by a load cell/pressure sensor. Asetek T.H.O.R.P. II (Invicta), Simagic P2000/P1000 optional hydraulic kit. Feel upgrade, not a different measurement principle.
- **Active pedal**: a motor drives the pedal itself — programmable force/travel curves per car, plus effects (ABS pulse, TC, engine/G-force vibration). Simucube ActivePedal (originator), Moza mBooster. No springs/elastomers to swap; feel is software.
- **Haptic/reactor add-ons** (middle path): vibration motors on load-cell pedals — Simagic P-HPR reactor, Simucube ecosystem, Moza ecosystem effects. ABS feedback without full active cost.

### Why load cell matters (the core argument for the wiki)
- Real car brakes are pressure devices: the pedal is stiff, travel is short, and you judge braking by *how hard you push*, not how far. A load cell copies that; a pot/Hall brake makes you judge by ankle angle/travel — harder to repeat precisely (Fibos, MySimRig, Asetek Forte explainer — index).
- Result claimed by every source: **consistency**. Same pressure = same braking, lap after lap; muscle memory works on force, which humans reproduce better than position (Fanatec marketing + Fibos + GTPlanet user reports of "far more consistent" braking after load-cell mod — index).
- Trail braking (easing off while turning in) is where it pays most: fine pressure modulation near the threshold (Asetek Invicta T.H.O.R.P. II page, asetek.com index).
- **Cost of admission**: load-cell brakes need force (up to 65 kg Sprint / 100+ kg class at max). On carpet/floor the pedal set (or your chair!) slides; you need the pedal set braced — wall brace, wheel stand or rig. Bundled entry sets address this: Logitech RS Pedals include carpet grips + wall-brace extensions (Traxion/TechRadar, index). TweakTown's Asetek Initium review sequence: load cell upgrade is "what will make the biggest difference overall to your lap times" — after months of learning on basic pedals (index).
- Load cell ≠ automatic speed: it removes an input bottleneck; sources frame it as consistency first, lap time second (OverTake 2024 pedal roundup, index).

### Price tiers (USD, checked 2026-10-02, volatile)
- **Bundled / <$100 standalone**: pots or Hall, come with wheels (Logitech G pedals, Moza SR-P Lite — SR-P Lite clutch add-on $39.90 live Moza US). Brake feel is the weak point.
- **$149–250 entry load cell**: Moza SRP2 $149 (live, dual 100 kg); **Simagic P500 $149 (Apex Sim Racing, verified live per child research; aggregator conflict at $199)** — 100 kg LC with switchable Hall mode; Logitech RS Pedals $159.99 (75 kg LC + Hall throttle, Best Buy verified live per child research); Fanatec CSL Pedals + LC kit (kit alone **$99.99 verified live fanatec.com**; base CSL Pedals new US price TODO, refurb $97.99 index); Thrustmaster T-LCM **$249.99 (verified live thrustmaster.com US per child research)** 100 kg; Thrustmaster Raceline Pedals III LC $269.99 (verified live) or LC Upgrade $179.99 for Raceline III owners.
- **$300–500 mid**: Fanatec CSL Elite V2 **$329.99 (Best Buy verified live per child research; 90 kg)**; Logitech G Pro Pedals **$379.99 (verified live logitech.com per child research; earlier $349 snippets superseded)** 100 kg; Fanatec ClubSport V3 $429.99 (Apevie verified live per child research); Moza CRP2 $369 sale/$399 list (live, dual 200 kg); Asetek La Prima pedals $349 (Podium1 index)/$335 (review index) — 180 kg pedal-face; Asetek Forte $479 (verified live asetek.com per child research, excl. VAT).
- **$500–900 enthusiast**: Heusinkveld Sprint $589.99 (2-pedal, Micro Center index) / **$675.95 (Sim Motion, verified live per child research — sold out)**; 120 kg cell, 65 kg at plate; Asetek Invicta T.H.O.R.P. II $829 (verified live asetek.com per child research, excl. tax) — hydraulic; Simagic P1000 $469 (3-pedal, index), P1000-RS Hydraulic $579 (index); **VRS DirectForce Pro pedals $649 (2-pedal) / $848 (3-pedal) — verified live vrs.racing per child research; 140 kg, coil-spring (no elastomers), PC-only**.
- **$900+ pro**: Heusinkveld Ultimate+ 2-pedal $1,049.99 / 3-pedal $1,299.99–$1,609 (conflicting US retailer index; heusinkveld.com USD not opened — TODO); 140 kg at plate, hydraulic dampers; Cube Controls SP01 ~$976 class (index).
- **Active**: Moza mBooster $759 sale / $799 list (live Moza US); mBooster + CRP2 throttle set $949/$999 (live). Simucube ActivePedal (simucube.com US, index crawled 2026-09/10): **ActivePedal Pro $1,849** (110 kg max force, 74 mm travel, 3-yr warranty), **ActivePedal Ultimate $2,059–$2,499** (price conflict between Simucube US product pages — TODO resolve; 170 kg, 5-yr), **Co-Pedal (passive throttle/clutch) $499**; ActivePedal requires a Simucube Link Hub. Older OverTake 2024 EUR reference: ~€2,378 single. Asetek teased an active retrofit for Invicta (Traxion 2024, index — status TODO).

### Hydraulic pedals — who and what for
- Asetek Invicta (T.H.O.R.P. / II): $829 (US store index, excl. tax); S-Series $879. Claims: true brake-pressure/fluid simulation, up to 40% longer travel option on II, front adjustments. PC-only.
- Simagic P2000 (200 kg, hydraulic brake): $689 at Apex (index); P1000 can add hydraulic kit + haptic reactor (Apex/ExtremeSimRacing index).
- Asetek Initium upgrade path: hydraulic brake kit $329 on top of ~$119 pedals = $448 vs Forte $479 (TweakTown, index) — a worked example that upgrade paths can cost as much as buying right first.
- Hydraulic = feel/damping fidelity. The measured input is still force; expect diminishing performance returns vs a good load cell (synthesis; TODO find head-to-head source).

### Active pedals — who and what for
- Simucube ActivePedal: motor-driven, Pro 110 kg / Ultimate 170 kg max force (simucube.com US index); per-car profiles (travel, force, curves, ABS/G-force/RPM effects), no elastomer swaps; **Pro $1,849, Ultimate $2,059–$2,499 (conflict), Co-Pedal $499** (simucube.com US, index crawled Sep–Oct 2026); needs Link Hub; one ActivePedal can accept 2 passive load-cell pedal inputs (Heusinkveld Sprint/Ultimate+ integrate via connector cable).
- Moza mBooster: $759/$799 (live); dual 200 kg load cells + motor, 270 W peak; ABS/TC/G-force/engine effects via Pit House; native ABS translation in ACC, rFactor 2, AMS2, RaceRoom — NOT iRacing/LMU at launch coverage (Traxion, index). Works with other brands' pedals via separate USB (PC) (Traxion index).
- Reviewer reality check: Gamereactor argues Heusinkveld Ultimate+ + rumble kit gives similar feedback cheaper and "more natural" (index opinion — flag as opinion).
- Who it's for: multi-car drivers wanting per-car pedal feel without wrenching; immersion maximalists; NOT a first load-cell upgrade (price = 5–10× entry load cell).

### Console pedal compatibility (critical, often misunderstood)
- **Rule**: on PS/Xbox, pedals must be the same ecosystem as the base AND connect through the base (RJ12/USB to base, not console). The base is the only device the console sees (Fanatec manual, index). No native way to run Heusinkveld/Simagic/Asetek pedals on console with any base.
- What works natively: Fanatec pedals on Fanatec PS/Xbox setups (CSL Elite V2: via base = console, via USB = PC only — fanatec.com index); Logitech pedals on Logitech bases (incl. older pedals via Racing Adapter — Traxion index); Thrustmaster T-LCM/T3PM on Thrustmaster bases (PC & console, OverTake index); Moza pedals in the R3 Xbox bundle path (via base + ESX wheel for Xbox; OverTake index notes Moza console = via wheelbase w/ ESX).
- Turtle Beach VelocityOne includes its own load-cell pedals (Dynamic Brake Tek) for Xbox/PC ($649.99 bundle, TechPowerUp index).
- Unofficial: DriveHub (~$89.99) can put PC pedals (even Heusinkveld Ultimates) on PS5 (Traxion index) — unlicensed, PS5 support unofficial, update risk.
- PC contrast: any pedals = separate USB device, mix freely with any base.

### Mounting / ergonomics facts to carry into the wiki
- Load-cell pedal forces (tens of kg) demand a fixed pedal plate or wall brace; floor use of 100 kg-class brakes is impractical (RS Pedals brace design, Initium review — index).
- Inverted mounting (pedals hanging like a road car) is an option class: Simagic P1000i, Fanatec V3 Inverted, Moza CRP2 inversion kit (index) — comfort/realism preference, not performance.
- Adjustability axes: pedal spacing/angle/face height, brake elastomer stacks (travel vs force), load-cell max-force scaling in software (Fanatec Tuning Menu / SmartControl / Pit House), dead zones and curves (index, brand pages).

---

## Copy-ready comparison tables

### Table 1 — Brake sensor types compared
| Sensor | Measures | Wear | Feel | Where found | Price class |
|---|---|---|---|---|---|
| Potentiometer | Travel/position | Wears, can drift | Springy, travel-based | Bundled pedals (G-series, SR-P Lite) | Included |
| Hall effect | Position (magnetic) | Contactless, durable | Travel-based, precise | Modern throttles; T3PM; RS throttle | Included–$160 |
| Load cell | Force (kg) | Strain gauge, durable | Stiff, pressure-based, real-car-like | SRP2, RS Pedals, T-LCM, all mid+ | $149+ |
| Hydraulic (+load cell) | Force via fluid cylinder | Seals/dampers service | Two-stage, damped, most car-like | Asetek Invicta, Simagic P2000 | $689–879 |
| Active (motor) | Force, motor-generated resistance | No elastomers | Software-defined per car + ABS fx | Simucube ActivePedal, Moza mBooster | $759–2,400+/pedal |

### Table 2 — Pedal sets by price (USD, checked 2026-10-02, volatile)
| Product | Brake sensor / rating | Pedals | Platforms | Price USD | Source / type |
|---|---|---|---|---|---|
| Moza SR-P Lite (+clutch $39.90) | Hall/pot class | 2 (+1) | PC (via base) | bundle / $39.90 clutch | Moza US, **live** |
| Moza SRP2 | Load cell, dual 100 kg | 2 (clutch $45.90) | PC (console via Moza path TODO) | $149 | Moza US, **live** |
| Simagic P500 | Load cell 100 kg (switchable Hall mode) | 2 (clutch TODO US $) | PC | $149 ($199 aggregator conflict) | Apex Sim Racing, **verified live** (child research) |
| PXN PD HM | Hall only — **no load cell** (brake kit simulates ~20 kg resistance) | 2/3 | PC / PXN bases | $79.99 | us.e-pxn.com, **verified live** (child research) |
| Logitech RS Pedals | Load cell 75 kg, Hall throttle | 2 (clutch $44.99) | PS/Xbox/PC via Logitech base | $159.99 | Best Buy, **verified live** (child research) |
| Thrustmaster T-LCM | Load cell 100 kg | 3 | PC & console via TM base | **$249.99** | thrustmaster.com US, **verified live** (child research) |
| Thrustmaster Raceline III LC / LC Upgrade | Load cell 100 kg, 24-bit | 3 / upgrade | Console via TM base; PC USB w/ upgrade | $269.99 / $179.99 | thrustmaster.com US, **verified live** (child research) |
| Fanatec CSL Pedals LC Kit | Load cell (upgrade only; base set price TODO) | converts to 3 | PC USB / console via base | $99.99 (kit) | fanatec.com US, **verified live** (child research) |
| Fanatec CSL Elite Pedals V2 | Load cell 90 kg, Hall thr/clutch | 3 | PC USB / console via base | **$329.99** | Best Buy, **verified live** (child research) |
| Fanatec ClubSport Pedals V3 | Load cell 90 kg + vibration motors | 3 | PC USB / console via base | $429.99 | Apevie, **verified live** (child research) |
| Logitech G Pro Pedals | Load cell 100 kg | 3 | PC / console via Pro base | **$379.99** | logitech.com US, **verified live** (child research) |
| Asetek La Prima (B&T) | Load cell, 180 kg pedal-face | 2 | PC | $349 (index) / $335 (review) | Podium1 / OC Racing, index |
| VRS DirectForce Pro | Load cell 140 kg, coil-spring | 2 / 3 | PC | $649 / $848 | vrs.racing, **verified live** (child research) |
| Logitech G Pro Pedals | Load cell 100 kg | 3 | PC / console via Pro base | $349 | Traxion index |
| Moza CRP2 | Load cell dual 200 kg | 2 (clutch $99) | PC | $369 sale / $399 list | Moza US, **live** |
| Asetek Forte (B&T) | Load cell ~180 kg M.L.C.P.C. | 2 | PC | $479 | asetek.com US, index |
| Heusinkveld Sprint | Load cell 120 kg (65 kg @ plate) | 2 / 3 | PC | $589.99 / ~$769 | Micro Center / sim-seats, index |
| Simagic P2000 | Load cell 200 kg + hydraulic | 2/3 | PC | $689 | Apex (apevie), index |
| Asetek Invicta T.H.O.R.P. II | Hydraulic | 2 | PC | $829 excl. tax | asetek.com US, index |
| Heusinkveld Ultimate+ | Load cell 140 kg @ plate + dampers | 2 / 3 | PC | $1,049.99 / $1,299.99 | Micro Center, index |
| Moza mBooster Active | **Active**, dual 200 kg LC | 1 (set w/ CRP2 throttle $949) | PC | $759 sale / $799 list | Moza US, **live** |
| Simucube ActivePedal Pro / Ultimate | **Active**, 110 / 170 kg | 1 (Co-Pedal $499) | PC | $1,849 / $2,059–$2,499 | simucube.com US, index |

### Table 3 — Console pedal compatibility matrix
| Pedal set | PS5 (native) | Xbox (native) | PC | Notes |
|---|---|---|---|---|
| Fanatec CSL/Elite/ClubSport | Via Fanatec PS base | Via Fanatec base + Xbox rim | USB or via base | USB connection = PC only (fanatec.com) |
| Logitech (G / RS / Pro pedals) | Via Logitech PS base | Via Logitech Xbox base | USB/via base | Racing Adapter mixes generations |
| Thrustmaster T-LCM / T3PM | Via TM PS base | Via TM Xbox base | USB | RJ12 to base on console |
| Moza SRP2 / CRP2 | No (Moza PS bases TGS 2026 pending) | R3/ESX path only, TODO details | USB/via base | Verify Moza console routing |
| Heusinkveld / Simagic / Asetek / Simucube | **No** | **No** | USB | Console only via DriveHub (unofficial) |

---

## Options by budget (USD, checked 2026-10-02, volatile)
- **First load cell (~$150)**: Moza SRP2 $149 (live, PC); Logitech RS Pedals $159.99 (index, best console-path value); Fanatec CSL + LC kit (TODO US price).
- **Mid ($250–400)**: T-LCM $249 (index, console-friendly); CSL Elite V2 ~$299–325 (index, 3 pedals, console via base); G Pro Pedals $349 (index); CRP2 $369 (live, PC).
- **Enthusiast ($450–900)**: Asetek Forte $479 / Sprint ~$590–769 / P2000 $689 / Invicta $829 (all index) — PC-only except none; rig assumed.
- **Pro / active ($1,000+)**: Heusinkveld Ultimate+ $1,049.99+ (index); Moza mBooster $759 (live) as the "cheap active"; Simucube ActivePedal €2,378/pedal (index, USD TODO).

## Sources
**Verified live (fetched 2026-10-02):**
- Moza US pedals collection (us.mozaracing.com) — SRP2 $149, CRP2 $369/$399, mBooster $759/$799, mBooster set $949/$999, clutches/kits.
**Search-index only:**
- fanatec.com product pages (CSL Elite V2 specs/pricing language, CSL LC kit), Traxion (RS Pedals launch, mBooster FAQ/effects support, DriveHub), TechRadar/Gaming Nexus (RS50 system), OverTake 2024 pedal roundup table (T-LCM, G Pro, Sprint, Ultimate+, SP01, Asetek lines — NOTE: 2024 prices, stale), Micro Center retailer index (Heusinkveld US prices), asetek.com US store extract (Forte/Invicta/La Prima, excl. tax), Apex/apevie + ExtremeSimRacing (Simagic P1000/P2000), TweakTown (Asetek Initium upgrade economics), Fibos/MySimRig/Asetek explainers (load-cell science), Gamereactor (active-pedal scepticism, opinion).

## Unverified / TODO items
- [ ] Simucube ActivePedal Ultimate US price conflict: $2,059 vs $2,499 across simucube.com US pages (Pro $1,849 consistent) — resolve on the US store; also confirm Link Hub price (~$150 index).
- [ ] Simagic P1000/P2000 clean US list prices (found open-box $422–450 and retailer $689; simagic.com US list not captured).
- [ ] Thrustmaster T-LCM current US street price (OverTake table is 2024; Windows Central confirms $250 MSRP, date TODO).
- [ ] Fanatec US pedal prices (CSL Pedals, LC kit, CSL Elite V2, ClubSport V3) on fanatec.com US — index only.
- [ ] Asetek La Prima pedal US price ($335–453 index spread) and "console support planned" status (2024 claim, likely stale).
- [ ] Moza SRP2/CRP2 console routing: do SRP2 pedals work on the R3 Xbox bundle path / upcoming PS bases? Not confirmed.
- [ ] Asetek active pedal retrofit for Invicta — teased 2024 (Traxion); shipped? priced?
- [ ] Heusinkveld Sprint US prices ($589.99/$769 retailer index; heusinkveld.com sells EUR) — confirm US MSRP; Ultimate+ baseplate extra ($129.99 index).
- [ ] Hydraulic vs load-cell head-to-head lap-time evidence — marketing claims only so far; flag as "feel, not proven pace".
- [ ] Turtle Beach VelocityOne replacement/standalone pedal availability and specs (Dynamic Brake Tek load-cell rating kg?).
- [ ] Nacon/other 2025–26 pedal entrants (Thrustmaster Raceline Pedals III LC $399.95 AU pre-order seen — US price TODO).

