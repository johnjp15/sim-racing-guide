# Cockpits, Mounting & Seating — Deep Research

> RESEARCH ONLY — not wiki prose. User will write the wiki in their own voice from this.
> All prices USD, checked October 2026 unless noted. Prices are volatile — re-check and re-date on import.
> Source tags: **[VL]** = verified live by fetching the manufacturer/retailer page · **[SI]** = search-index result (page not fetched) · **[EST]** = estimate, never publish as fact.
> Never copy a price into the wiki without its source + check date.

## Suggested page slug
`components/cockpits-mounting` (already in scaffold nav) — candidate split pages:
- `components/cockpits-mounting` — category overview, desk vs stand vs foldable vs profile
- `components/seating-positions` — Formula vs GT vs rally/truck geometry (also feeds `disciplines/` pages)
- `components/seats` — seat types and buying (could stay a section of cockpits page)

## Key facts

### The four mounting tiers (what changes between them)
- **Desk/table clamp** — wheelbase clamps to desk edge; pedals on floor against a wall/skirting or in a pedal tray. Zero footprint cost, zero rigidity gain. Failure modes in order: (1) pedals slide under braking, (2) desk chair rotates/slides under load-cell braking, (3) clamp flex with direct-drive torque, (4) desk height = wheel height wrong for most people.
- **Wheel stand** (no seat) — a steel frame holding wheel + pedals; you sit in your own chair. Solves pedal sliding and clamp flex; chair movement remains (stands with a chair cradle/tray that captures chair castors mitigate this).
- **Foldable cockpit** (seat integrated, folds away) — Playseat Challenge family / NLR F-GT Lite. Solves chair problem, stores in a closet. Trade-offs: flex under high-torque DD and heavy load-cell braking, fabric/hammock seat comfort varies, limited shifter mounting.
- **Fixed cockpit** — tubular steel (NLR F-GT / F-GT Pro, Playseat Trophy class) or aluminium profile ("8020 rig"). Profile is the endgame standard: every mount is a T-slot, so wheel/pedal/seat/monitor/shifter positions are continuously adjustable and third-party accessories bolt on.

### Aluminium profile sizes (the numbers to teach)
- Profile is named by cross-section in mm: **40×40, 80×40 (a.k.a. "8020"), 120×40, 160×40**. Bigger cross-section = stiffer, heavier, more expensive. [SI — Sim-Lab P1X Pro parts list, sim-lab.us]
- Sim-Lab P1X Pro (verified from manufacturer parts list): base rails **160×40**, uprights **120×40**, pedal-deck pieces 160×40/80×40. Overall **1350 × 580 (widest 680) × 770 mm**. [SI — sim-lab.us product page, crawled 2026-10-02]
- Sim-Lab GT1 Pro: **80×40-class (40×80)** frame, same 1350 × 580 × 770 mm footprint class. [SI — prior research pack, simracingsetup.com / sim-lab.eu, 2026-10-02]
- Budget profile rigs (Marada/Anman class on Amazon) are 80×40 with bundled reclining seats — functional, but check upright thickness and pedal-plate stiffness before pairing with >12 Nm bases or >60 kg load-cell brakes. [SI — Amazon listings, 2026-10-02]
- Rule of thumb for the wiki: flex shows up first at the **pedal plate under load-cell braking** and at the **wheel uprights under DD torque transients**, not in the base rails. A rig that feels solid with a gear/belt wheel can still flex once a 60–100 kg load-cell brake is fitted.

### Flex — what to say (evidence-based, no invented Nm limits)
- Manufacturer torque ratings where published: NLR Wheel Stand Lite 2.0 rated **up to 10 Nm**; NLR F-GT Pro handles DD "up to **25 Nm**" (Ø50 mm tube chassis). [VL — nextlevelracing.com F-GT Pro page, fetched 2026-10-02; SI for Wheel Stand Lite 2.0 via GigaParts/idealo specs]
- Foldables and light stands are happiest with entry DD (2–9 Nm class). Nobody publishes a deflection standard — treat any "handles X Nm" beyond the manufacturer's own claim as unverified.
- Practical flex test for readers: hard braking zones and fast direction changes; if the wheel rim moves relative to the monitor, that's flex (or loose bolts — check bolts first).

### Dimensions / footprints (copy into tables below)
- Playseat Challenge X: **140 × 60 × 105 cm**, **11.1 kg** (some listings 11.6 kg), folds flat, driver height 120–220 cm, max 163 kg. [SI — Playseat spec sheet via Bed Bath & Beyond PDF + PC Gamer specs, 2026-10-02]
- NLR F-GT (NLR-S010): Formula **170 × 60 × 100 cm**; GT **140 × 60 × 125 cm**; box 96 × 50 × 40 cm, ~45 kg. Max user 130 kg. [SI — fullpush/novatech spec listings, 2026-10-02]
- NLR F-GT Lite: GT 68.5 in long (~174 cm), Formula 64.5 in (~164 cm), width 29.5 in (~75 cm) both. [SI — Micro Center listing, 2026-10-02]
- NLR Wheel Stand 2.0: 92.5 × 57.5 × 78.5 cm, 22 kg. Wheel Stand Lite 2.0: 73 × 57 × 67–75 cm, 11.7 kg. [SI — NLR specs via bsimracing/GigaParts, prior research]
- Sim-Lab P1X Pro / GT1 Pro: 1350 × 580 (680 widest) × 770 mm. [SI — sim-lab.us]
- ASR 3 (Gen 2): base 50 in (127 cm) long × 22 in (56 cm) wide, height 28 in, ~71 lb; profile 3 in × 1.5 in. ASR 4: 50 × 22 in, 29 in, ~116 lb, 4.5 in × 1.5 in profile. [SI — The Racers Mark / Maxwell Sim Racing index, prior research — US store prices in USD, ASR's own store lists CAD, flag currency]
- Trak Racer TR120: 1400 mm long × 580 mm wide, 120×40 profile. [SI — digoptions, prior research]
- Triple-monitor reality check: a triple 32 in setup is ~**65 in (165 cm) wide** at typical angles and needs ~36 in (91 cm) depth for the stand — wider than most cockpits are long. Budget floor space for the screens, not just the rig. [SI — ASR freestanding triple stand notes, prior research]

### Seating geometry — Formula vs GT vs rally/truck
Teach it as three variables: **seat-back recline, seat-base tilt (front edge height vs rear), and pedal height relative to seat base.**

| Position | Back recline | Seat base | Pedals vs seat base | Wheel | Feels like |
|---|---|---|---|---|---|
| Formula | Most reclined (~40° from vertical class; "feet raised, legs stretched, backside as low as possible") | Front edge raised well above rear (Fanatec ClubSport GT manual: front **3 slots higher** than rear) | High — pedals up near seat-base height, heels high | Low, close, tilted toward driver | Lying back, legs up |
| GT | Moderate recline (~30° class) | Front edge slightly raised (Fanatec: front **1–2 slots higher**) | Low — pedals on floor line, heels low | Mid height | Sports car |
| Rally / truck | Most upright | Near parallel (Fanatec rally style: seat parallel) | Low, pedals more vertical face | High, larger rim, closer to vertical column | Sitting up at a desk / truck cab |

Sources: Demon Tweeks seat guide (GT ~30° recline class) [SI]; RTR Sports F1 seating explainer [SI]; Fanatec ClubSport GT Cockpit manual slot guidance [SI — prior research]. Exact degree numbers vary by source and seat — present as ranges/class, not gospel.

- **GT is the best all-rounder position** — every discipline is drivable from GT; Formula position is a commitment (pedal height + recline make rally/truck awkward); rally/truck upright suits long trucking sessions and H-pattern work.
- **A 300 mm round rim is the do-everything compromise** (from rims research); position matters more than rim for cross-discipline comfort.

### Why Formula ↔ GT switching is genuinely hard
Switching position is NOT just tilting the seat. A true conversion changes **four things**:
1. **Seat angle** (back recline + base tilt) — often unbolting the seat from its brackets, not a lever.
2. **Pedal position AND height** — Formula raises the whole pedal tray; GT drops it to the floor line. On the NLR F-GT the manual procedure is: remove pedal plate from the pedal angle bar, add/remove GT support posts, re-mount pedal plate to the front plate, then re-check seat/wheel angles. [SI — NLR F-GT manual via s-bol PDF, prior research]
3. **Wheel height/angle/distance** — Formula wants the wheel low and angled; GT wants it higher.
4. **Monitor position** (screen users) — eye line drops dramatically in Formula; a fixed monitor mount ends up wrong for one of the two positions. VR users skip this problem.

Community reality (OverTake position-change thread): most owners of dual-position rigs set one position (usually GT) and leave it; conversions are a bolt-and-measure job, and each switch costs re-dialling everything. [SI — prior research]

### Convertible rigs — what switching actually involves

| Rig | Positions claimed | What switching involves | Time | Price |
|---|---|---|---|---|
| NLR F-GT (NLR-S010) | Formula + GT ("true racing positions for both") | Unbolt pedal plate from angle bar, fit/remove GT support posts, re-mount pedal plate to front plate; seat angle + wheel angle/position "may need adjustment" | "Up to 10 minutes" (Novatech listing) — first time will be longer | **$599** [VL 2026-10-02 prior session] · $599.99 B&H [SI] |
| NLR F-GT Pro | Formula / GT / Hybrid, 5 levels of adjustment | Tool-free seat angle, pedal height/tilt, wheel position adjustments (manufacturer claim) | Minutes (claim) | **USD $1,199** [VL — nextlevelracing.com, fetched 2026-10-02] |
| NLR F-GT Elite (+ ERS3 bundle) | Formula/GT/Hybrid + truck on Elite line | Profile-rig bolt work: seat brackets, pedal tray, wheel deck all move on T-slots | Bolt work, not a lever | F-GT Elite/ERS3 bundle **$999** [VL prior session]; F-GT Elite iRacing Ed. $1,078.58 at AVADirect (OOS) [SI] |
| Sim-Lab P1X Pro / GT1 Pro (profile) | Any position you build | Full bolt work: seat mounts, pedal deck height, upright angle. Most flexible, slowest to change | 30+ min realistically | P1X Pro **$849 US**; GT1 Pro **$699** [SI — Micro Center / Sim-Lab US comparisons, prior research] |
| Fanatec ClubSport GT Cockpit | GT + "Formula style" via seat slots | Seat front raised 3 slots (Formula) vs 1–2 slots (GT) vs parallel (rally) — seat-base tilt only; not a full Formula conversion | Minutes for the seat step | UNVERIFIED price — see below |
| Playseat Challenge X / NLR F-GT Lite (foldable) | 6 seating positions (Challenge X X-Adapt hinges) | Lever/hinge adjustment of seat angle within a street-car-to-single-seater range; not true Formula pedal height | Seconds–minutes | Challenge X **$299** [SI spec sheet/Best Buy] |

### Seats
- **Reclining seat (double recliner)** — easiest in/out, adjustable back angle, the default recommendation for multi-discipline and shared rigs. Watch flex: cheap recliners twist under load-cell braking; a double-locking recliner mechanism is the spec to look for. NLR ERS3 Elite reclining: **$249.99** (B&H/Dell) / $279.99 (Best Buy), 331 lb (150 kg) capacity, ~37.5 lb. [SI — prior research]
- **Fixed bucket (fibreglass/FRP)** — stiffest, lightest, best lateral support; fixed back angle means position changes = bracket changes. NRG Prisma FRP bucket **$360** [SI — multiple US retailers]; NRG reclinable Prisma pair $829 [SI — getnrg.com]. Budget Amazon-class buckets exist well under that — UNVERIFIED quality/flex, do not recommend a specific SKU without checking.
- **Real car seat (used, e.g. from a wrecker)** — cheapest comfort per dollar, often with sliders fitted; heavy, mounting rails vary, airbag/seat-electronics irrelevant but present. No price — used market, flag as estimate territory.
- **Seat sliders** matter more than seat choice for shared rigs and for Formula↔GT experiments (fore-aft is the one adjustment you'll make daily).
- Sabelt S99 note (Boosted Media review): a seat with plenty of GT adjustment can still struggle to reach true formula (reclined + feet-high) geometry with a standard pedal tray — the pedal side limits the conversion as much as the seat. [SI — prior research]

### Desk mounts and stands — specifics
- Desk clamps ship with most entry wheels (Logitech G923 class, Thrustmaster, Moza desk clamp optional). Fine up to entry-DD torque on a solid desk; particleboard desk tops + 8 Nm+ is asking for trouble.
- Wheel stands worth naming (prices from prior research, re-check): NLR Wheel Stand 2.0 **$279**, Wheel Stand Lite 2.0 **$149** [SI]. GT Omega Apex-class stands compete here — US price UNVERIFIED in current pass.
- Chair cradle (stand has a tray/channel that captures office-chair castors) is the single most useful stand feature under load-cell brakes.

## Copy-ready tables

### Table A — Mounting options compared
| Option | Typical cost (USD, Oct 2026) | Footprint | Stores away? | Handles load-cell brake? | Handles strong DD (12 Nm+)? | Biggest weakness |
|---|---|---|---|---|---|---|
| Desk clamp | $0 (included) | None extra | n/a | Poorly — pedals slide | No — clamp/desk flex | Everything moves |
| Wheel stand | $149–$279 | ~90 × 60 cm | Folds/flat-ish, some | Yes (stand side); chair still moves without cradle | Light stands rated ~10 Nm; heavy stands better | Your chair |
| Foldable cockpit | $299–$599 | ~140 × 60 cm in use | Yes — closet-flat | Moderately — frame flex | Entry DD only | Flex + fabric seat |
| Tubular fixed cockpit | $599–$1,199 | 140–170 × 60 cm | No | Yes | F-GT Pro rated to 25 Nm | Position changes = bolts (except Pro) |
| Aluminium profile rig | $400–$1,150+ (frame only) | ~135 × 58–68 cm | No | Yes — stiffest pedal plates | Yes — endgame standard | Seat/monitors extra; bolt-work adjustments |

Prices: Playseat Challenge X $299 [SI spec sheet]; NLR F-GT $599 [VL prior]; F-GT Pro $1,199 [VL 2026-10-02]; ASR 3 $549.99 / ASR 4 from $849.99 [SI US index]; Sim-Lab GT1 Pro $699 / P1X Pro $849 [SI]; RigMetal Plus $539 [SI rigmetal.com]. Frames only unless noted; seats extra on profile rigs.

### Table B — Profile rig frames (frame only, seat extra unless noted)
| Rig | Profile | Footprint (L×W×H) | US price (Oct 2026) | Source tag |
|---|---|---|---|---|
| Advanced Sim Racing ASR 3 (Gen 2) | 3 in × 1.5 in | 50 × 22 in, 28 in H, ~71 lb | $549.99 | [SI] Maxwell Sim Racing US index — ASR's own store is CAD, check currency |
| Advanced Sim Racing ASR 4 | 4.5 in × 1.5 in | 50 × 22 in, 29 in H, ~116 lb | from $849.99 | [SI] same |
| Advanced Sim Racing ASR 6 | — | — | from $949.99 | [SI] same |
| Sim-Lab GT1 Pro | 80×40 (40×80) | 1350 × 580 (680) × 770 mm | $699 | [SI] Micro Center/Sim-Lab US comparisons |
| Sim-Lab P1X Pro | 160×40 base, 120×40 uprights | 1350 × 580 (680) × 770 mm | $849 | [SI] sim-lab.us parts/specs |
| RigMetal Plus | 4080 | base lengths 135 cm class | $539 (+$30 flat US shipping) | [SI] rigmetal.com |
| Trak Racer TR120 | 120×40 | 1400 × 580 mm | UNVERIFIED US street (TR120S V2 $513 index hit — do not publish without checking trakracer.com US) | [SI] |
| GT Omega PRIME | 160×40 | — | $1,130.93 index — treat as UNVERIFIED until checked on gtomega.com US | [SI] |

### Table C — Seats
| Seat | Type | Price (Oct 2026) | Notes | Tag |
|---|---|---|---|---|
| NLR ERS3 Elite | Reclining, double recliner | $249.99 (B&H/Dell) – $279.99 (Best Buy) | 150 kg capacity, ~37.5 lb | [SI] |
| NRG Prisma | FRP fixed bucket | $360 | Multiple US retailers | [SI] |
| Sparco GT | Reclining | $379.88 sale / $489 list (Sparktec) | Real-car-seat ergonomics | [SI] |
| Trak Racer TR Series GT Pro seat | Seat only / +bracket | $419 / $449 | Carbon-texture GT seat $549/$599 | [SI] trakracer.com |
| Used real car seat | — | EST only — varies by wrecker/marketplace | Best comfort/$; check rails + weight | [EST] |

## Options by budget (cockpit only, USD, Oct 2026)
- **$0** — Desk clamp + pedals against the wall; put the pedal set on a non-slip mat or in a tray; lock/brake the office chair (castor cups or shoes over castors — the classic trick).
- **~$150** — NLR Wheel Stand Lite 2.0 ($149 [SI], rated to 10 Nm) — for gear/belt wheels and entry DD, apartment-friendly.
- **~$280–300** — NLR Wheel Stand 2.0 ($279 [SI]) or Playseat Challenge X ($299 [SI]) — stand if you have a good chair, foldable if you don't / must store it.
- **~$550–600** — ASR 3 ($549.99 [SI]) frame-only profile entry, or NLR F-GT ($599 [VL]) with seat included and dual-position marketing that is real but bolt-based.
- **~$700–850** — Sim-Lab GT1 Pro ($699 [SI]) or P1X Pro ($849 [SI]) + budget seat (ERS3 $249.99 [SI]) ≈ $950–1,100 all-in.
- **~$1,200** — NLR F-GT Pro ($1,199 [VL]) if tool-free Formula↔GT switching is the actual requirement; otherwise a P1X Pro-class profile rig + a better seat wins on stiffness per dollar.

## Sources
**Verified live (page fetched):**
- Next Level Racing F-GT Pro product page (nextlevelracing.com) — USD $1,199, Ø50 mm tube, up to 25 Nm, 5-level tool-free position adjustment, not motion-ready without Motion Adaptor Frame. Fetched 2026-10-02.
- NLR F-GT $599 — verified live in prior session 2026-10-02 (see research pack § components/cockpits).

**Search-index (not fetched this pass — re-verify before publishing prices):**
- sim-lab.us P1X Pro product page + instruction-manual parts list (160×40 base, 120×40 uprights, 1350×580×770 mm).
- fullpush.com / novatech.co.uk NLR F-GT listings (Formula 170×60×100 cm, GT 140×60×125 cm, "up to 10 minutes" change, max 130 kg); bhphotovideo.com F-GT $599.99.
- Micro Center NLR F-GT Lite listing (GT 68.5 in / Formula 64.5 in lengths).
- Playseat Challenge X spec sheet PDF via bedbathandbeyond.com (140×60×105 cm, 11.1 kg, MSRP $299) + PC Gamer review specs ($300/£260, same dims, 11.6 kg in some listings).
- Maxwell Sim Racing / The Racers Mark (ASR 3/4/6 US prices + dimensions) — prior research; ASR official store prices are CAD.
- rigmetal.com (RigMetal Plus $539, Plus Super Bundle $1,119), trakracer.com (TR120 dims, TR Series seats), gtomega.com (PRIME $1,130.93 index hit).
- Demon Tweeks seat-position guide; RTR Sports F1 seating explainer; Fanatec ClubSport GT Cockpit manual (seat slot guidance); OverTake forums position-change thread; Boosted Media Sabelt S99 review.

## Unverified / TODO
- [ ] Fanatec ClubSport GT Cockpit US price + full dims — not checked this pass.
- [ ] GT Omega US prices (Hybrid/PRIME index hits looked anomalous vs EU pricing — €549.95 class vs $1,128+; do not publish until checked on the US store).
- [ ] Trak Racer TR120 US street price (one index hit at $513 for "TR120S V2" from a third-party seller — suspicious, verify at trakracer.com).
- [ ] Exact seat-rail/slider prices (Sim-Lab/ASR/Trak Racer seat sliders) — needed for the "shared rig" advice.
- [ ] Playseat Trophy US price/dims — named in most foldable-vs-fixed comparisons, not yet sourced.
- [ ] NLR F-GT Pro footprint dimensions (page fetched for price/features; spec-sheet dims not captured).
- [ ] Motion-platform compatibility per rig (NLR Motion Plus, D-BOX, Qubic) — deliberately out of scope here; Tier 5 research covers motion, cross-link when written.
- [ ] Used-market seat/rig prices — all [EST]; if the wiki gives numbers, label them estimates with a "checked Oct 2026, your market varies" note.
