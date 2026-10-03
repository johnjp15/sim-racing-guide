# Research: Motion, High-End Hardware & Immersion Accessories

> RESEARCH ONLY — not wiki prose. User will write the wiki in their own voice from this.
> Prices checked: 2026-10-02 (America/Los_Angeles), USD unless a currency is stated. Prices are volatile; re-date on import.
> Reliability labels: **Verified-live** = manufacturer/official store page fetched 2026-10-02. **Search-crawl** = price/spec captured in search-result crawl dated within days of 2026-10-02 (not a live fetch by this session). **Index** = retailer/roundup/review listing. **Anecdotal** = forum/video report.
> Currency traps are flagged inline — several big-ticket listings are CAD, AUD or EUR, not USD.
> Suggested wiki slugs this feeds: components/motion, components/tactile, components/active-pedals, components/pro-tier, builds/tier-5, buying/diminishing-returns

---

## 1. Motion — platform types

### Copy-ready table: the three architectures
| Type | What moves | Typical DOF | Strengths | Limits |
|---|---|---|---|---|
| Seat mover | Seat only | 2 (pitch/roll), sometimes +yaw/traction-loss | Fast, compact, cheap end of motion; strong cueing per dollar | Wheel/pedals/screens stay still — hands/feet don't move with body |
| Full platform | Whole cockpit on a moving base | 2–3 (pitch/roll/heave or yaw) | Everything moves together | Larger footprint, cost, lower speed than seat movers |
| Actuator (3–4 linear actuators at cockpit corners) | Whole cockpit, per-corner | 3–4 DOF (heave, pitch, roll, + traction loss/yaw on some) | Current high-end standard; fine detail + road texture via actuators | Cost, noise, setup/tuning time, floor transmission |

Vocabulary for wiki fact boxes: DOF = degrees of freedom. Pitch = nose up/down, roll = lean left/right, heave = whole rig up/down, yaw/traction-loss = rear stepping out. Home systems cannot sustain real g-forces; they tilt the body so gravity fakes the cue, then wash out below perception.

### 1a. Products, prices, specs

#### Next Level Racing (NLR)
| Product | Type | Price | Source / date | Notes |
|---|---|---|---|---|
| Motion Platform V3 | Seat mover | **$2,799 USD** | **Verified-live** NLR US store, 2026-10-02 (sold out at fetch time) | Pitch+roll only, ±10°, 20°/s, 360°/s², up to 130 kg user, built-in PSU, acoustic panels, marketed as quiet |
| Motion Plus Platform | Full platform | $2,999.99 USD | B&H listing, **Index** (search 2026-10-02) | Heave/pitch/roll. Australian listing AUD $4,499.95 — do not conflate |

#### DOF Reality
| Product | Type | Price | Source / date | Notes |
|---|---|---|---|---|
| H3 (Hero) | Platform, 3-axis | $3,299–$4,646 USD (range across US retailers) | Apevie / TruSimPlay listings, **Index** (search 2026-10-02) | Price varies by retailer/options — verify before publishing a single figure |
| P3 Universal 3-Axis PRO | Platform | **$5,999 USD** | Manufacturer site fetched 2026-10-02 | Pitch/roll/yaw+traction loss, 20° range, 75 cm/s, 750 W peak, footprint 3 × 5.2 ft, up to 440 lb |
| Add-on: SRS UShake6 | Tactile | $429 | Listed as DOF Reality option, fetched 2026-10-02 | See §2 |
| Add-on: SRS Hurricane Wind | Wind | $399 | Listed as DOF Reality option, fetched 2026-10-02 | See §3 |

#### Sigma Integrale (US-made linear actuators)
| Product | Price | Source / date | Notes |
|---|---|---|---|
| DK2 (3 or 4 actuators) | **$3,950 USD** (starting) | Manufacturer sigmaintegrale.com, **Search-crawl** 10 days before 2026-10-02 | 2" (50 mm) travel; billet aluminium/steel; includes actuators, brackets, controller, cables; 3-yr electrical / 1-yr mechanical warranty |
| DK2 via RacingCockpits (US retailer) | 3-actuator $4,400 / 4-actuator $5,600 USD | racingcockpits.com, **Search-crawl** 1 day before 2026-10-02 | Retailer pricing differs from manufacturer-direct — show both, dated |
| DK2+ (premium, 3 or 4 actuators) | **$7,460 USD** | Manufacturer, **Search-crawl** 3 days before 2026-10-02; same price at Apevie US | 2" (50 mm) travel, premium off-road/rally/F1 positioning per manufacturer |
| DK2 (Canada, Pit Lane Sim Racing) | CAD $7,990 (sale, sold out) | pitlanesimracing.com, Search-crawl 5 days before 2026-10-02 | **CAD, not USD** — currency trap |

Video review price context (older, Anecdotal): a DK2 review put the 4-actuator DK2 at $5,145 USD and the D-BOX 4250i (via Sim-Lab) at $9,540 USD equivalent. Dated video transcript — useful as historical spread, not a current price.

#### Qubic System (Motion Systems) — PRICES IN EUR
| Product | Price | Source / date | Notes |
|---|---|---|---|
| QS-210 Intro 2DOF set | **€3,515 EUR net** (2× 60 mm actuators + MC6 controller €350 + QS-210 €3,165) | Manufacturer site fetched 2026-10-02 | Tax/duty excluded |
| QS-210 3DOF set | **€6,680 EUR net** (4 actuators) | Manufacturer, fetched 2026-10-02 | Tax/duty excluded |
| QS-210 5DOF set | **€16,480 EUR net** (+ QS-CH2 chassis) | Manufacturer, fetched 2026-10-02 | Tax/duty excluded |
| QS-220 5DOF set | **€18,680 EUR net** | Manufacturer, fetched 2026-10-02 | Tax/duty excluded |

#### D-BOX
| Product | Price | Source / date | Notes |
|---|---|---|---|
| G5 actuator (single) | $1,380 USD | Trak Racer US, **Index** (search 2026-10-02) | Systems need multiple actuators + controller |
| 4250i 4-actuator system | CAD $7,985.70 | Trak Racer CA, **Index** | **CAD, not USD** |
| TR160 cockpit + D-BOX bundle | $6,384 USD | Trak Racer US, **Index** | Bundle contents/shipping unverified — see TODO |

### Key facts: motion buying traps (for wiki)
- Entry motion (NLR V3 $2,799, seat mover) and actuator motion (Sigma DK2 from $3,950) are different products solving different problems; price alone misleads.
- Actuator travel is small (Sigma: 50 mm) by design — speed and detail, not range, create the cue.
- Floor transmission and actuator noise matter in apartments (cross-ref setup-tuning-ergonomics.md §8). NLR markets the V3 as quiet (manufacturer claim, not measured).
- Motion requires per-game telemetry support and tuning (washout, smoothing); it is the highest setup-time accessory in this file.
- Turnkey installed systems exist at an order of magnitude more: SimCoaches 2026 guide (**Index**, fetched 2026-10-02) lists static Pro $23,970, 3DOF Omega $29,990, 6DOF Elite $49,995 as complete installed US systems.

---

## 2. Tactile transducers / bass shakers

### Key facts (sourced)
- A bass shaker is a voice-coil transducer bolted to seat/rig: it plays low-frequency vibration (engine, kerbs, road texture), typically driven from sim telemetry via SimHub or from game audio.
- Localises to the seat **if isolated** from the floor (HomeTheaterForum isolator thread, Anecdotal — see setup file §8).

### Copy-ready table: tactile options
| Option | Price | Source / date | Notes |
|---|---|---|---|
| ButtKicker Gamer PLUS | **$279.95 USD** | **Verified-live** thebuttkicker.com, 2026-10-02 | Current production haptic kit |
| ButtKicker Gamer PRO | $329.95 USD | Traxion.gg, **Index** (2022 launch pricing — stale, re-verify) | Larger transducer |
| ButtKicker HaptiConnect software | Standard $29.99 / Ultimate $59.99 USD | **Index** | Optional telemetry layer |
| SRS UShake6 | $429 | DOF Reality options list, fetched 2026-10-02 | Multi-shaker kit |
| DIY: Dayton Audio BST-1 (~$50) + Nobsound amp (~$35) + wire (~$10) | **Under $100 total** | YouTube project list, **Index/Anecdotal** (2026-10-02) | The standard budget recipe |
| Dayton Audio BST-2 | List $49.99 | Amazon product data, Index | 35 W RMS, 10–80 Hz — spec anchor for DIY shopping |

### Wiki fact points
- Two signal routes: audio-based (cheap, muddier) vs telemetry-based via SimHub ShakeIt (per-effect: kerbs, engine RPM, gear shift, wheel slip). SimHub route is the community standard.
- Placement hierarchy by community consensus: under seat first, then pedal plate (brake/throttle feel), then corners for 4-shaker "chassis mode".
- Shaker + isolators is an apartment purchase, not two separate ones (§8 of setup file).

---

## 3. Wind simulation

### Copy-ready table: wind options
| Option | Price | Source / date | Notes |
|---|---|---|---|
| SRS Hurricane Wind | $399 | DOF Reality options list, fetched 2026-10-02 | Listed accessory price |
| SRS Power Wind "Double-the-fan" kit | $189 | 2018 review — **dated Index** | Re-verify current model/price before publishing |
| SRS blower kit | ~$300 | Forum report — **Anecdotal** | |
| Etsy third-party kits | $65–$214 range | Etsy listings, **Index** (2026-10-02) | Wide quality spread |
| DIY via SimHub ShakeIt Wind | Fan/Arduino parts cost only | SimHub ecosystem | Speed-mapped fan control is the standard DIY route |

### Wiki fact points
- Wind speed maps to car speed via telemetry (SimHub or vendor software); open-cockpit cars benefit most, closed GT cars least — it is a speed cue, not cooling (though it also cools the driver in endurance stints, a genuine secondary benefit reported by users, Anecdotal).
- Noise: fans/blowers are the loudest per dollar of any accessory here; relevant for shared rooms.

---

## 4. Active pedals

Active pedals use a motor to push back: programmable brake force, ABS pulsing, traction-control vibration, per-car pedal maps. They are the newest pro-tier category.

### Copy-ready table: active pedals
| Product | Price | Source / date | Notes |
|---|---|---|---|
| Simucube ActivePedal Pro | **From $1,849 USD** (single) | **Verified-live** simucube.com US store collection, 2026-10-02 | Pedal sets from $2,998 |
| Simucube ActivePedal Ultimate | **From $2,059 USD** (single) | **Verified-live** simucube.com US, 2026-10-02 | Higher force/spec tier |
| Simucube Co-Pedal (passive companion) | $499 USD | **Verified-live** simucube.com US, 2026-10-02 | Pairing pedal |
| MOZA mBooster Active Pedal | **$1,099 CAD** on manufacturer page | MOZA manufacturer page fetched 2026-10-02 — **CAD, not USD** | Dual 200 kg load cell per comparison sources |
| MOZA mBooster (US figures in circulation) | $799 USD (simracingsetup comparison) / from $759, $949 with CRP2 throttle (simracingcockpit.gg 2026) | **Index** | Currency/kit contents differ per source — verify US SKU pricing before publishing one number |

**Superseded figure, do not publish as current:** an older simracingsetup guide listed a single Simucube ActivePedal at $2,299. Manufacturer US store 2026-10-02 shows Pro from $1,849 / Ultimate from $2,059. Prices moved; always re-date.

### Wiki fact points
- Force comparison in circulation: Simucube 150 kg vs MOZA dual 200 kg load cell (Index, simracingsetup) — sensor rating is not pedal feel; software and motor response define the product.
- Active effects with real information content: ABS pulse through the pedal, brake-force curves per car, clutch bite point. Everything else is immersion.
- One active brake + passive throttle is the common cost-controlled configuration (Co-Pedal at $499 exists for this).

---

## 5. Pro-tier gear (non-active)

### Copy-ready table: pro wheelbases and pedals
| Product | Spec | Price | Source / date |
|---|---|---|---|
| Simucube 2 Pro wheelbase | 25 Nm, up to 8.0 Nm/ms slew, 22-bit class encoder | **$1,274.25 USD** | simucube.com US product page, **Search-crawl** 2026-10-02; Apevie US $1,299 (Index) |
| Asetek Invicta wheelbase | 27 Nm | **$1,349.00 USD excl. sales tax** | asetek.com US, **Search-crawl** 1 day before 2026-10-02 |
| Asetek Forte wheelbase | 18 Nm | $949.00 USD excl. sales tax | asetek.com US, Search-crawl 2026-10-02 |
| Asetek Invicta pedals (THORP II) | Load-cell/hydraulic-style brake | $829.00 USD excl. sales tax | asetek.com US, Search-crawl 2026-10-02 |
| Asetek Invicta Formula Button Box | — | $1,249.99 USD excl. sales tax | asetek.com US, Search-crawl 2026-10-02 (shows pro wheels cost as much as bases) |
| Heusinkveld Sprint pedals, 2-pedal | Load cell | $589.99 (Micro Center US) / $585 (RacingCockpits US) | **Index**, searched 2026-10-02 |
| Heusinkveld Sprint, 3-pedal | Load cell | $699 (RacingCockpits US) | Index |
| Heusinkveld Ultimate+ , 2-pedal | Load cell, higher spec | $1,049.99 (Micro Center US) | Index |
| Heusinkveld Ultimate 3-pedal Black | — | $1,299.99 (Micro Center US) | Index |
| Asetek Invicta pedals (launch-era) | — | $849 USD ex-tax at launch announcement; $759–$899 range in roundups | InvestingNews/Asetek release + simracingsetup, **Index/dated** — superseded by $829 US store figure above |

### What "pro-tier" actually buys (fact points for wiki)
- Torque headroom and slew rate (how fast torque changes), not usable steady force — see §7 diminishing returns.
- Encoder resolution and filtering quality (detail through the rim, less cogging/notchiness).
- Pedal: stiffer, more adjustable brake (elastomer/hydraulic feel), higher load-cell ratings, machined construction, better potentiometer/Hall longevity.
- Ecosystem lock-in is real at this tier: wheel rims, quick releases and pedal software are brand-siloed (Asetek wheel at $1,249.99 vs base at $1,349 is the clearest price illustration, sourced above).

---

## 6. What money buys at $5k / $10k / $20k

Anchor totals from the tier research (same numbers as the builds pack — do not fork them): Tier 3 sweet spot **$1,998**; Tier 4 triples/VR **$5,467 with new PC / $3,467 existing PC**; Tier 5 motion **$12,797 with new PC**; Sigma DK2+ variant ~$17,458. All checked 2026-10-02, volatile.

### Copy-ready table: spend levels (incremental logic, prices from §§1–5)
| Level | What the money typically adds over the level below | Example sourced components | What it does NOT buy |
|---|---|---|---|
| ~$2k (Tier 3 anchor) | Load-cell consistency + 12 Nm-class DD + fixed rig + ultrawide | Anchor build $1,998 | Motion, tactile, triples |
| ~$5k | Triples or high-end VR + PC to drive them; OR first motion | Tier 4 anchor $5,467 w/ new PC ($3,467 existing); NLR V3 $2,799 as bolt-on motion | Lap time proportional to spend (see §7) |
| ~$10k | Actuator motion + pro wheelbase/pedals | Sigma DK2 from $3,950 (+ existing Tier 3/4 base); Simucube 2 Pro $1,274.25 + Heusinkveld Ultimate+ $1,049.99 | Sustained g; plug-and-play (tuning time grows) |
| ~$20k | Full actuator motion (premium) + active pedals + triples + turnkey touches | DK2+ $7,460; Simucube ActivePedal set from $2,998; Tier 5 DK2+ variant ~$17,458; turnkey installed systems $23,970–$49,995 (SimCoaches Index) | A different sport — returns are immersion, not pace |

### Cost-stacking warnings (sourced)
- Motion is never just the motion price: actuator systems need a rigid aluminium-profile cockpit rated for them, plus (apartment) isolation.
- Active pedals are priced **per pedal** at Simucube ($1,849 Pro single) — a 2-pedal active set starts at $2,998 (Verified-live).
- Pro wheels rival pro bases in price (Asetek Invicta Formula Button Box $1,249.99 vs Invicta base $1,349.00, both excl. tax, Search-crawl 2026-10-02).
- EUR/CAD pricing traps: Qubic quotes EUR net ex-tax; Sigma Canada listing is CAD; MOZA mBooster manufacturer page showed CAD. Budget in USD only after conversion + tax/duty.

---

## 7. Diminishing returns — evidence

### Key facts (sourced)
- OverTake.gg hardware ranking (crawled 2026-10-02): "8 Nm is plenty for most things"; realistic GT3 peaks ~10–15 Nm with power steering; jumps of ~10 Nm are what you feel; stronger bases give more information but play a **minor lap-time role**.
- Fanatec forum users report running 7.5–12 Nm actual output even on 15–25 Nm bases (Anecdotal).
- Established pack finding: the load-cell brake (from ~$149) is the biggest consistency upgrade in the hobby — a ~$149 pedal change outranks thousand-dollar torque increases for consistency.
- Pedals before torque is the pack's buying-order rule; nothing found in Oct 2026 research contradicts it.

### Copy-ready table: where the curve flattens
| Component | Sweet-spot evidence | Past-the-curve spend buys |
|---|---|---|
| Wheelbase torque | 8 Nm plenty; GT3 peaks 10–15 Nm (OverTake) | Headroom/detail, not pace |
| Pedals | Load cell = the consistency step (from ~$149) | Stiffness range, materials, active effects ($1,849+/pedal) |
| Displays | Correct FOV + closeness beats raw size (setup file §1) | Triples/VR immersion; PPD >60 is sharp (setup file) |
| Motion | Seat mover $2,799 gives the core cue | Actuator detail/travel ($3,950–$7,460+) |
| Tactile | <$100 DIY shaker gives most of the effect | Multi-zone telemetry effects ($279.95–$429 kits) |

### Honest framing for the wiki (facts, not prose)
- No controlled study found (Oct 2026) measuring lap-time delta per dollar above the load-cell + mid-DD tier. Claims that pro gear makes you faster are marketing/community belief, **not measured evidence** — say so.
- What high spend measurably buys: torque headroom without clipping, slew rate, pedal force range/repeatability, motion travel/speed specs, warranty and materials.

---

## Sources

### Verified-live (manufacturer/official fetched 2026-10-02)
| Source | Used for |
|---|---|
| Next Level Racing US store (store-us.nextlevelracing.com) | Motion Platform V3 $2,799, specs |
| DOF Reality (manufacturer) | P3 $5,999, specs, UShake6 $429, Hurricane Wind $399 |
| Qubic System (manufacturer) | QS-210/QS-220 EUR pricing |
| Simucube US store (simucube.com) | ActivePedal Pro $1,849 / Ultimate $2,059 / Co-Pedal $499 / sets from $2,998 |
| MOZA (manufacturer) | mBooster $1,099 CAD (currency flagged) |
| ButtKicker (thebuttkicker.com) | Gamer PLUS $279.95 |

### Search-crawl (price captured in dated search crawl, Oct 2026)
| Source | Used for |
|---|---|
| sigmaintegrale.com | DK2 $3,950, DK2+ $7,460 |
| racingcockpits.com | DK2 3-act $4,400 / 4-act $5,600 |
| asetek.com US | Invicta base $1,349, Forte $949, Invicta pedals $829, Formula Button Box $1,249.99 (all excl. tax) |
| simucube.com US product page | Simucube 2 Pro $1,274.25, 25 Nm, 8.0 Nm/ms |
| pitlanesimracing.com | DK2 CAD $7,990 (currency trap example) |

### Index (retailer/roundup/review)
| Source | Used for |
|---|---|
| B&H | NLR Motion Plus $2,999.99 |
| Trak Racer US/CA | D-BOX G5 $1,380, 4250i CAD $7,985.70, TR160 bundle $6,384 |
| Micro Center US; RacingCockpits US | Heusinkveld Sprint $585–$589.99, 3-pedal $699, Ultimate+ $1,049.99, Ultimate Black $1,299.99 |
| simracingsetup; simracingcockpit.gg | mBooster US figures, Simucube/ MOZA force comparison, superseded $2,299 Simucube figure |
| Traxion.gg | ButtKicker Gamer PRO $329.95 (2022) |
| SimCoaches 2026 guide | Turnkey systems $23,970 / $29,990 / $49,995 |
| OverTake.gg | Diminishing-returns torque evidence |
| InvestingNews / Asetek release | Invicta pedals launch $849 ex-tax |

### Anecdotal
- DK2 review video pricing ($5,145 4-act DK2 vs $9,540 D-BOX 4250i, dated).
- SRS blower ~$300 forum figure. DIY shaker recipe totals. Wind endurance-cooling benefit.

---

## Unverified / TODO
- [ ] Sigma DK2 US manufacturer price: confirm whether $3,950 is 3-actuator starting price and current 4-actuator direct price (retailer shows $4,400/$5,600).
- [ ] D-BOX US direct pricing for a complete 4-actuator G5 system (only per-actuator Index and CAD system price found); TR160 bundle contents/shipping.
- [ ] DOF Reality H3 single canonical US price (retailers ranged $3,299–$4,646).
- [ ] Sim-Lab / Trak Racer motion bundle pricing (cockpit + actuators) as US SKUs.
- [ ] MOZA mBooster US SKU pricing and kit contents (sources split $759–$799, one CAD figure on manufacturer page).
- [ ] Simucube 3 pricing/availability — not confirmed Oct 2026; do not publish.
- [ ] Asetek Invicta pedal current US price conflict: $829 (US store crawl) vs $759–$899 roundups vs $849 launch — publish only the dated store figure.
- [ ] ButtKicker Gamer PRO current price (only 2022 $329.95 found).
- [ ] NLR Motion Plus heave spec confirmation from NLR directly (B&H Index only).
- [ ] Any measured (instrumented) noise data for actuator systems for apartment guidance — none found; keep qualitative.
- [ ] Controlled lap-time-vs-spend study — none found Oct 2026; keep §7 framing.
