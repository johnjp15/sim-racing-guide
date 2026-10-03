# Research: Setup, Tuning & Ergonomics

> RESEARCH ONLY — not wiki prose. User will write the wiki in their own voice from this.
> Prices/facts checked: 2026-10-02 (America/Los_Angeles). Prices are volatile; re-date on import.
> Reliability labels: **Verified-live** = manufacturer/official page fetched 2026-10-02. **Index** = search-result / retailer / roundup listing, not fetched line-by-line. **Derived** = calculated here from a sourced formula (arithmetic shown). **Anecdotal** = forum/community report, not evidence-grade.
> Suggested wiki slugs this feeds: setup/fov, setup/seating-ergonomics, setup/ffb-tuning, setup/pedal-calibration, setup/room-planning, buying/beginner-mistakes

---

## 1. FOV — calculation, correct values, why it matters

### Key facts (sourced)
- Correct formula (nicholasxuu/fov-calculator guide, updated 2026-09-10; fetched via search 2026-10-02):
  `FOV = 2 × arctan( screen_dimension ÷ 2 ÷ eye_to_screen_distance )`
- Use screen **height** in the formula for vertical FOV (vFOV); screen **width** for horizontal FOV (hFOV).
- Use **visible panel size only** — not diagonal marketing size, not bezel.
- Worked examples from same source: 32" 16:9 at 70 cm ≈ 32° vFOV / 54° hFOV; 27" at 60 cm ≈ 31° vFOV / 53° hFOV.
- Sitting closer is the cheapest FOV increase. Same source: on a 34" at 70 cm, the whole flat-to-800R curved range adds only +5.4° hFOV — less than moving the seat 10 cm closer (~7°).
- PPD (pixels per degree, same source, 32" at 70 cm): 1080p = 33.1, 1440p = 44.1, 4K = 66.2. Guide bands from same source: <30 coarse, 40–60 comfortable, >60 sharp.
- Different sims ask for different FOV types (some hFOV, some vFOV). **Do not assert a per-title convention without checking that title's current menu** — see Unverified/TODO.

### Copy-ready table: computed FOV by screen size and eye distance (Derived)
Calculated 2026-10-02 from the formula above. 16:9 unless stated. Distances are eye-to-panel.

| Screen | Eye distance | hFOV | vFOV |
|---|---:|---:|---:|
| 24" 16:9 | 60 cm | 47.8° | 28.0° |
| 27" 16:9 | 60 cm | 53.0° | 31.3° |
| 27" 16:9 | 70 cm | 46.2° | 27.0° |
| 32" 16:9 | 60 cm | 61.1° | 36.7° |
| 32" 16:9 | 70 cm | 53.7° | 31.8° |
| 32" 16:9 | 80 cm | 47.8° | 28.0° |
| 34" 21:9 ultrawide | 70 cm | 59.1° | 27.3° |
| 49" 32:9 super-ultrawide | 80 cm | 73.7° | 23.8° |

### Copy-ready table: triples (Derived, upper bound)
Flat-panel arithmetic overstates triples because side screens are angled toward the driver. Use as ceiling, not target.

| Triple setup | Eye distance | Single-screen hFOV | Flat 3× width hFOV (ceiling) |
|---|---:|---:|---:|
| 3× 27" 16:9 | 60 cm | 53.0° | ~112° |
| 3× 27" 16:9 | 70 cm | 46.2° | ~104° |
| 3× 32" 16:9 | 60 cm | 61.1° | ~121° |
| 3× 32" 16:9 | 70 cm | 53.7° | ~113° |

Practical note for wiki (fact to state, not prose): real angled-triple rendered FOV depends on side angle, bezel correction and the sim's triple-screen settings; measure eye distance to the **centre** panel and let the sim's calculator handle the sides.

### Copy-ready table: resolution vs sharpness, 32" at 70 cm (Derived from sourced PPD figures)
| Resolution | PPD at 70 cm | Band (source guide) |
|---|---:|---|
| 1920×1080 | 33.1 | Coarse–comfortable boundary |
| 2560×1440 | 44.1 | Comfortable |
| 3840×2160 (4K) | 66.2 | Sharp |

### Measurement checklist (for wiki conversion)
1. Measure eye-to-panel distance in cm, seated, head in normal driving position (not leaning in).
2. Measure visible panel width and height (inside bezels).
3. Compute both hFOV and vFOV; enter whichever the sim asks for.
4. Consistency anchor beginners can use: if the in-car dash / wheel size looks wildly bigger or smaller than the real wheel in front of you, FOV is wrong.

---

## 2. Seating ergonomics — measurements and method

### Key facts (sourced)
- Asetek SimSports seating/ergonomics guides (crawled 2026-10-02): elbows **slightly bent** holding wheel at 9-and-3; wrists should reach the top of the wheel **without stretching**; shoulders relaxed; no leaning forward to reach the wheel.
- Pedals (same source): you must be able to press the brake **fully** with the knee **still slightly bent**, and your lower back must stay against the seat while doing it.
- Lumbar support / padding recommended by same source.
- No clinical-grade, sim-specific measurement standard was found. Numbers below are **starting points to test**, not prescriptions.

### Copy-ready table: setup method, in order
| Step | What to set | Pass test (sourced where noted) |
|---|---|---|
| 1. Seat base / pedal distance | Move seat or pedal tray until full brake press is possible | Knee still slightly bent at full brake; lower back stays on seat (Asetek guide) |
| 2. Wheel reach | Adjust wheelbase position / column angle | Elbows slightly bent at 9-and-3; wrists reach wheel top without stretching (Asetek guide) |
| 3. Wheel height / angle | Rim centre roughly chest height, column angled so rim plane faces chest/face line | Shoulders relaxed, no forward lean (Asetek guide) |
| 4. Screen position | Screen as close as practical behind/above wheelbase without interference | Use FOV table §1 at the resulting distance; closer = more correct FOV |
| 5. Lumbar | Add lumbar support/padding if seat shell leaves a gap | No lower-back gap under braking load (padding recommended, Asetek guide) |
| 6. Re-check after 20 min | Pain or numbness = geometry wrong, not "getting used to it" | See §7 injury notes |

### Ergonomics traps specific to sims (evidence level noted)
- Pedals raised too high / seat too low → lower-back complaints (forum-level, Anecdotal).
- Wheel too far → pulling on the wheel, wrist/forearm pain (forum-level, Anecdotal).
- Fixed bucket seat with no lumbar → padding gap under load-cell braking forces (Anecdotal + Asetek padding recommendation).
- Formula-style reclined seating increases pedal-tray and screen-angle constraints; GT/upright is the all-rounder starting position (see disciplines/seating research file in pack).

---

## 3. Force feedback (FFB) theory — gain, clipping, per-game philosophy

### Key facts (sourced)
- **Clipping** (iRacing support article "Controller Setup and Calibration", crawled 2026-10-02): loss of detail/resolution when the sim demands more force than the wheel can output at maximum — signal saturates, distinct forces feel identical.
- iRacing "Auto" (same source): after several laps, sets Strength to the maximum **non-clipping** value for that car/session.
- iRacing "Use linear mode" (same source): recommended for direct-drive wheels.
- iRacing Auto often feels **too strong** on powerful direct-drive bases; turning it down is normal, not wrong (same source).
- Match in-game peak force (Nm) to the base's rated torque so the sim's scale maps to real output (tech-insider.org rig guide, Index, searched 2026-10-02).
- Community/expert consensus on usable torque (OverTake.gg hardware ranking, crawled 2026-10-02): "8 Nm is plenty for most things"; realistic GT3 peaks ~10–15 Nm with power steering; steps of ~10 Nm are what a driver actually feels; stronger bases add information/headroom but play a **minor lap-time role**. Fanatec forum users report running 7.5–12 Nm actual even on 15–25 Nm bases (Anecdotal).

### Copy-ready table: FFB concepts
| Term | What it means | Beginner action |
|---|---|---|
| Gain / Strength | Overall multiplier from sim signal to wheel output | Start conservative; raise until just below clipping |
| Peak torque (Nm) | Maximum the base can physically output | Tell the sim the real value if it asks; don't fake it for "more feel" |
| Clipping | Sim asks for more than peak; detail flattens, wheel feels like one constant weight in long corners | Lower gain; use the sim's clipping meter/Auto if present |
| Linear mode (iRacing) | Linear torque mapping for direct drive | On for DD (iRacing support) |
| Damping / friction / inertia | Filters that add weight/stability | Add only to fix oscillation; they mask detail if overused |
| Per-car gain | Per-car multiplier layered on global gain | Expect to tune per car class; saving per-car settings is normal |

### Per-game philosophy notes (for wiki fact-checking)
- iRacing: Auto = non-clipping ceiling (sourced above). Powerful DD → manually reduce afterwards (sourced).
- General principle across titles (Index, tech-insider.org): set base driver strength to 100%, shape in-game; avoid stacking max gain in both driver and game (double-gain = clipping risk). **Label as community-standard practice, not a manufacturer rule.**
- TODO: verify current FFB menu names/paths per title (iRacing, ACC, LMU, GT7) before publishing step-by-step instructions.

---

## 4. Pedal calibration

### Key facts (sourced)
- Deadzone 1–2% is a typical starting range (mysimrig.nl load-cell guide, crawled 2026-10-02).
- Saturation / max force: calibrate to the maximum force **you can comfortably apply repeatedly**, not necessarily the sensor's maximum (mysimrig.nl guide).
- Logitech G Pro pedals: brake force default 30 kg, adjustable to 100 kg (Logitech G Pro manual via manuals.plus, fetched 2026-10-02).
- Sim-Lab XP1 manual: calibrate in pedal software; do not stack game deadzones on top of pedal-software deadzones (manual, fetched 2026-10-02).
- Load-cell brake = pressure-based (force), potentiometer/Hall brake = travel-based (position). This is the core calibration difference beginners miss.

### Copy-ready table: calibration sequence
| Step | Action | Why |
|---|---|---|
| 1 | Calibrate in the pedal maker's software first | Game sees a clean 0–100% signal |
| 2 | Set small deadzone (~1–2%, Index) | Kills rest-foot false input without eating travel |
| 3 | Set max force to comfortable repeatable max, not sensor max | Consistency over heroic peak force (mysimrig.nl) |
| 4 | Remove/zero deadzones inside the game | Prevents stacked deadzones (Sim-Lab XP1 manual) |
| 5 | Test: 10 laps, check brake traces for spikes at rest and saturation at max press | Spikes = deadzone; never hitting 100% = max force set too high |
| 6 | Revisit after 2 weeks | Leg strength/technique changes; recalibration is normal |

---

## 5. Common beginner mistakes — with evidence level

| # | Mistake | Consequence | Evidence |
|---|---|---|---|
| 1 | FFB gain maxed in driver AND game | Clipping; wheel feels heavy but vague | iRacing support clipping definition (§3) |
| 2 | Default wide FOV (e.g. 90°+ on a small single screen) | Sense of speed inflated, braking points misjudged | FOV math §1 (Derived) |
| 3 | Screen far away (desk monitor at office distance on a rig) | Correct FOV becomes a tiny letterbox; users compensate with wrong FOV | FOV table §1 |
| 4 | Buying torque before load-cell pedals | Consistency bottleneck stays at the brake | Pack finding: load-cell from ~$149 is the biggest consistency upgrade |
| 5 | Pedals calibrated to sensor maximum | Never reaching 100% braking, or inconsistent threshold braking | mysimrig.nl (§4) |
| 6 | Deadzones set in both pedal software and game | Dead travel at top of brake | Sim-Lab XP1 manual (§4) |
| 7 | Ignoring console licensing when buying a wheelbase | Wheel physically cannot work on PlayStation/Xbox | Pack §console: PS chip in base (Fanatec), separate PS SKUs (Logitech/Thrustmaster), most DD brands PC-only |
| 8 | Monitor mounted to a surface the wheel vibrates | Screen shake, loosened mounts | Freestanding monitor stands recommended to avoid FFB vibration transfer (rig guides, Index §8) |
| 9 | Sitting through pain | Repetitive strain risk compounds | §7 (EU-OSHA/OSHA) |
| 10 | Unpowered USB hub for everything | Dropouts under load | Forum reports (§9, Anecdotal) |

---

## 6. Room & space planning

### Key facts (sourced)
- Standard stationary cockpit footprint ≈ 5 ft × 2.5 ft (archynewsy / tech-insider.org 2026 rig guide, Index, searched 2026-10-02).
- Triples need substantially wider clearance than a single screen (same source).
- Freestanding monitor stands avoid FFB vibration transfer from rig to screens (rig guides, Index).

### Copy-ready table: space checklist
| Item | Plan for |
|---|---|
| Footprint | ~5 × 2.5 ft for a fixed cockpit (Index); foldable rigs: add unfolding + storage space |
| Triples width | Full 3-screen span plus stand feet; measure before buying stands |
| Door / walkway | Rig + seat entry path; you climb in from the side |
| Screen distance | Rig position is set by §1 FOV math, not by where the desk already is |
| Power | PC + monitors + wheelbase + accessories on one circuit: check strip/PSU nameplate ratings; don't daisy-chain strips (general electrical safety) |
| Floor | Hard floor transmits vibration (see §8); carpet/rug dampens |
| Heat/noise | PC exhaust, wheelbase fan (belt bases), motion actuators (see motion research file) |

---

## 7. Ergonomics injuries & repetitive strain

> Not medical advice. This section is sourced general guidance for the wiki to summarise with a disclaimer.

### Key facts (sourced)
- Prolonged sitting risk; get up every 20–30 min; maximum ~2 h continuous sitting (EU-OSHA guidance summarised in IOSH Magazine; OSHA Technical Manual Section VII Ch. 1; searched/crawled 2026-10-02).
- Microbreaks of 1–2 min every 30 min; dynamic sitting and stretching recommended (same sources).
- Sim-specific pain reports are forum-level: wrist/forearm pain linked to wheel too far / pulling the wheel; lower-back pain linked to raised pedals and no lumbar support (1-HP gaming pain library + sim forums — **Anecdotal, not clinical evidence**).
- No clinical study of sim-racing-specific RSI incidence was found. **Do not publish incidence claims.**

### Copy-ready table: break discipline
| Interval | Action | Source |
|---|---|---|
| Every 20–30 min | Stand up, move | EU-OSHA via IOSH summary |
| Every 30 min | 1–2 min microbreak / stretch | EU-OSHA summary |
| 2 h | Hard stop on continuous sitting | EU-OSHA summary |
| Any session | Pain/numbness = stop and fix geometry (§2) | General guidance |

---

## 8. Noise & vibration — apartments and neighbours

### Key facts (sourced)
- Structure-borne transmission (through floor/frame) is the key path for rig noise, not airborne sound (Audio Science Review forum; HomeTheaterForum bass-shaker isolator thread; general soundproofing sources, searched 2026-10-02 — Index/Anecdotal).
- Rubber isolators under a rig/couch dramatically reduce floor transmission in user reports (HomeTheaterForum thread, Anecdotal).
- Bass shakers localise vibration to the seat **if isolated** from the floor (same thread, Anecdotal).
- Acoustic foam does **not** stop low-frequency structure-borne noise (general soundproofing sources, Index).

### Copy-ready table: mitigation ladder
| Measure | Targets | Evidence level |
|---|---|---|
| Rug / mat under rig | Footfall, caster and pedal thumps | Anecdotal |
| Rubber isolators under rig feet / seat | Structure-borne FFB and shaker transmission | Anecdotal (HomeTheaterForum) |
| Isolate shaker to seat only, not floor-coupled frame | Neighbour-below complaints | Anecdotal |
| Freestanding monitor stand | Screen rattle from FFB | Index (rig guides) |
| Play-hour awareness / pedal force moderation at night | Load-cell brake stomps are impact noise | General |
| Acoustic foam panels | Airborne echo only — will not fix floor thump | Index |

---

## 9. Cable management

### Key facts (sourced)
- Rig-mounted power strip kits exist to leave **one power cord** running to the wall (Apex Sim Racing rig-mounted power strip/USB kit, $30.00, Shop listing crawled 2026-10-02, sold out at crawl; user reviews Dec 2023–Dec 2024 confirm the one-cord benefit — Index).
- Forum consensus pattern: powered USB hub velcro-mounted to the rig works for wheel/pedals/headset dongles; unpowered hubs are the dropout risk (OverTake.gg USB hub thread, Anecdotal).
- 8020-profile cable channels/clips are a solved accessory category (SimSportGadget cable-management pro pack, Etsy listing: clips, channels, cable boxes, USB holders; listing price $219.99 crawled 2026-10-02 — Index; individual clips/channels sell separately for far less, check listing).

### Copy-ready table: cable rules of thumb
| Rule | Detail | Evidence |
|---|---|---|
| One power drop | Rig-mounted strip → single cord to wall outlet | Apex product/reviews (Index) |
| One USB drop (if hub used) | Powered hub on rig → single long USB to PC; keep it within USB length limits | OverTake thread (Anecdotal) |
| Wheel/pedals priority | If dropouts occur, move wheelbase/pedals to direct motherboard ports first | Forum practice (Anecdotal) |
| Strain relief | Loop slack at wheelbase (wheel rotation) and pedal tray (adjustment) | General practice |
| Channels over zip ties | 8020 channels/clips allow re-routing when gear changes | Etsy category (Index) |
| Label both ends | USB devices re-enumerate; labels save re-plugging roulette | General practice |

---

## Sources

### Verified-live / directly fetched 2026-10-02
| Source | Page | Used for |
|---|---|---|
| nicholasxuu/fov-calculator (GitHub guide, updated 2026-09-10) | FOV calculator guide | Formula, worked examples, curved-monitor and PPD figures |
| Asetek SimSports | Seating/ergonomics guides | §2 pass tests, lumbar |
| iRacing Support | "Controller Setup and Calibration" | Clipping, Auto, linear mode |
| mysimrig.nl | Load-cell pedal guide | Deadzone range, comfortable-max calibration |
| Logitech (via manuals.plus) | G Pro pedals manual | 30 kg default / 100 kg max brake force |
| Sim-Lab | XP1 pedal manual | No stacked deadzones |

### Index (search/retailer/roundup, not line-verified)
| Source | Used for |
|---|---|
| tech-insider.org 2026 rig guide | Peak-Nm matching, cockpit footprint, triples clearance |
| archynewsy rig guide | Cockpit footprint |
| OverTake.gg | Torque consensus article; USB hub thread |
| EU-OSHA via IOSH Magazine; OSHA Technical Manual VII Ch.1 | Break intervals |
| 1-HP gaming pain library | Gaming pain patterns |
| Audio Science Review forum; HomeTheaterForum | Structure-borne noise, isolators |
| Apex Sim Racing (Shop listing) $30.00 | Rig-mounted power strip |
| SimSportGadget (Etsy) $219.99 pro pack | Cable channel/clip category |
| Sim-Lab and rig-guide roundups | Freestanding monitor stands |

### Anecdotal (label as such in wiki)
- Fanatec forum users running 7.5–12 Nm on 15–25 Nm bases.
- Wrist/forearm and lower-back pain geometry links (§2, §7).
- Isolator effectiveness reports (§8). USB hub dropout reports (§9).

---

## Unverified / TODO
- [ ] Per-title FOV convention in current builds: iRacing (hFOV vs vFOV entry), ACC, LMU, GT7, AMS2, EA WRC / AC Rally — check each title's current graphics menu before publishing numbers per game.
- [ ] Current FFB menu names/paths per title for step-by-step wiki instructions (menus change with patches).
- [ ] Any clinical or survey-grade source on sim-racing-specific injury rates — none found 2026-10-02; keep wiki to general sitting/RSI guidance with disclaimer.
- [ ] Quantified dB / floor-transmission measurements for isolators — only anecdotal reports found; do not publish dB reduction numbers.
- [ ] Apex power strip availability (sold out at crawl 2026-10-02) and whether a US retailer stocks it.
- [ ] Numeric seat/wheel measurement ranges from a manufacturer manual (Asetek guide is qualitative) — check Sim-Lab / Trak Racer cockpit manuals before publishing any cm ranges as recommendations.
