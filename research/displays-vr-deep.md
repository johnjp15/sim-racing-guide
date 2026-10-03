# Displays & VR — Deep Research

> RESEARCH ONLY — not wiki prose. User will write the wiki in their own voice from this.
> All prices USD, checked October 2026 unless noted. GPU/monitor prices are the most volatile numbers in the guide — re-check and re-date on import.
> Source tags: **[VL]** = verified live by fetching the manufacturer/retailer page · **[SI]** = search-index result · **[EST]** = estimate.
> Never copy a price into the wiki without its source + check date.

## Suggested page slug
`components/displays-vr` (already in scaffold nav) — candidate split pages:
- `components/displays-vr` — single vs ultrawide vs triples vs VR decision
- `components/fov-setup` — FOV math, calculators, per-game settings (could fold into setup/tuning chapter)
- `components/vr-headsets` — headset buyer's table (2026 lineup moves fast; keep on its own page so it can be re-dated)

## Key facts

### The four display paths
- **Single monitor** — cheapest, works on console, zero setup beyond FOV. A 32 in 1440p at ~70 cm gives roughly 45–60° horizontal FOV (see FOV math) — you see the windscreen, not the cars beside you.
- **Ultrawide (34 in 21:9 / 49 in 32:9)** — one panel, no bezels, no multi-monitor config; 49 in 32:9 approximates "triples-lite" width without the side-panel wrap. Console caveat: PS5/Xbox do not output ultrawide resolutions properly — ultrawide is effectively PC-only for sim racing.
- **Triples** — the competitive-track standard. True peripheral vision (you see cars alongside without turning your head), visible controls/button boxes, no battery/heat, works for hours. Costs: 3× panels + stand, ~165 cm width, and roughly **4K-class GPU load or more** (triple 1440p = 7680×1440 ≈ 11.1 MP vs 4K's 8.3 MP).
- **VR** — true depth and scale, look-to-apex head movement, smallest footprint (a headset on a desk vs 165 cm of screens), usually cheaper than good triples. Costs: heat, weight on the face, can't see your physical button boxes, motion sickness for some people, per-game VR support is not universal, and PC VR needs a locked frame rate to feel right.

### FOV math (teach this properly)
- Formula: **hFOV = 2 × arctan( (screen width ÷ 2) ÷ eye distance )** — same formula with screen height for vFOV. Width must be the *viewable* width, and for triples you measure the **outer edges of the outer screens including bezels**, with side screens angled (typically 45–60°) — triples are NOT 3× the single-screen angle. [SI — nicholasxuu/fov-calculator (updated 2026-09-10), fovcalculator.net]
- Curvature helps a little: a curved panel wraps the edges closer. Worked example from calculator data: 34 in at 70 cm ≈ 59.1° flat → 63.7° at 1000R. [SI — fovcalculator.net]
- Sharpness (PPD): 32 in 1440p at 70 cm ≈ **44 PPD**. Guidance: <30 PPD looks coarse, 40–60 comfortable, >60 diminishing returns. [SI — fovcalculator.net] This is why "bigger + closer" beats raw resolution for immersion per dollar.
- Games disagree on what the FOV setting means — some use vFOV, some hFOV, some an offset slider (F1 series: −20…+20 around ~77°h; WRC: 0–100 from ~18°v). Always tell readers to use a calculator (fovcalculator.net / nicholasxuu) and enter *their* screen size + eye distance. [SI]
- Correct FOV feels "slow and zoomed" at first. That's normal — it's geometrically correct; the sense of speed returns as you adapt, and judging distances/braking points gets *more* consistent, which is the actual point.

### GPU load — the numbers that drive the PC budget
- Pixel counts: single 1440p = 3.7 MP · single 4K = 8.3 MP · triple 1440p (7680×1440) = **11.1 MP** · triple 4K (11520×2160) = **24.9 MP** (3× 4K — the wiki author's own setup class; flagship-GPU territory) · Quest 3 render target ≈ 2064×2208 ×2 eyes ≈ 9.1 MP before distortion oversampling (VR render targets are typically rendered ~1.3–1.5× panel res — effective load is higher than the raw MP number) · Pimax Crystal Light 2880×2880 ×2 = 16.6 MP raw.
- Community/guide recommendations (Sep 2026, index — treat as guidance, not benchmarks): triple 1440p → RX 9070 XT / RTX 5070 Ti / RTX 5080 class; high-res VR → RTX 5070 Ti/5080; 4K triples or Crystal Super-class VR → RTX 5090. [SI — BoxThisLap / Tech-Insider Sep 2026]
- iRacing official GPU guidance: min 6 GB VRAM / recommended 8 GB / high-end 10 GB+, high-end example RTX 4070 / RX 9070 class. [SI — iRacing system requirements, prior research]
- Sep 2026 street prices (VOLATILE, index): RTX 5070 Ti ~$1,149, RTX 5080 ~$1,579, RX 9070 XT ~$739, RTX 5090 $5,000+. [SI — prior research] Do not publish without a fresh check; GPU pricing was distorted by the 2026 memory shortage.
- VR-specific: the frame-rate target is the headset refresh (72/90/120 Hz) and it must be *locked*. Reprojection/motion-smoothing kicking in and out (e.g. oscillating 45↔90 fps) is the #1 cause of "VR feels awful" — worse than a lower-but-steady rate.

### Monitor picks by class (prices Oct 2026, all [SI] unless noted)
- **32 in 1440p** (the triples sweet spot): Samsung Odyssey G55C 32 in 2560×1440 165 Hz 1000R — **$189.99** (Neowin deal report 2026-09-28, was $329.99). Three = ~$570 in panels at deal pricing. 1440p at 32 in ≈ 44 PPD at 70 cm — the value pick for triples.
- **34 in ultrawide 1440p**: ASUS TUF VG34 class under $300 (blog index — verify model/price); MSI MPG 341CQPX QD-OLED 34 in 240 Hz $719.99–$899.99 (PCWorld index) — OLED ultrawide is the premium single-screen path.
- **49 in super-ultrawide**: Samsung Odyssey G9 VA 5120×1440 144 Hz — **$649.99** (Neowin 2026-09-28, was $999.99); OLED G9 49 in $899.99 (30-day low, PC Guide index).
- Triple stands: Trak Racer triple floor stand **$359** [SI trakracer.com]; NLR Elite Freestanding Triple Add-on **$179** (requires the Elite single stand) [SI]; ASR Freestanding Triple (to 32 in) **CAD $469.99** / Advanced VESA CAD $649.99 — **CAD, flag currency** [SI]. Integrated (rig-mounted) stands are stiffer; freestanding stands survive cockpit swaps and Formula↔GT seat moves (screen stays put).
- Monitor specs that matter for sim racing, in order: size + how close you can mount it (FOV), refresh ≥120 Hz for competitive, panel response, then resolution. A 27 in is not "a bit smaller than 32" for triples — at the same distance it's meaningfully less wrap; 32 in is the community-standard triple size.

### VR headsets 2026 — what changed this year
- **Valve Steam Frame launched 2026-09-14** — the new entrant. $1,059 (256 GB) / $1,299 (1 TB); Snapdragon 8 Gen 3, 16 GB RAM, 2160×2160/eye LCD pancake, 72–144 Hz (144 experimental), ~110° FOV, eye tracking, inside-out, 185 g core / ~440 g with strap, SteamOS, bundled 6 GHz wireless adapter for PCVR streaming, reservation/lottery sales from 2026-09-18; **no power adapter in the box** (45W+ USB-C, Valve's own is $29). [SI — GeekWire 2026-09-14, theshortcut, TechSpot, skarredghost 2026-09-21] For sim racing the pitch is wireless PCVR without a cable and Index-successor tracking quality; native standalone sim support is limited (streaming-first design).
- **Meta Quest 3** — the default recommendation. $599.99 (512 GB) US as of 2026-09-23 (Meta raised prices effective 2026-04-19), 2064×2208/eye LCD pancake, 110°H×96°V, up to 120 Hz, 515 g, inside-out, battery ~1.5–3 h (plan on a battery strap or cable for endurance races). [SI — prior research, Meta pricing reports] Quest 3S: $349.99 (128 GB)/$449.99 (256 GB) Sep 2026, 1832×1920/eye Fresnel — the budget VR door-opener.
- **PSVR2** — $399.99 (permanent cut Mar 2025), OLED 2000×2040/eye, ~110°, 90/120 Hz, eye tracking on PS5; PC adapter $59.99 with reduced features on PC (no eye tracking/HDR/advanced haptics). Sep 2026 reports of US stock-outs at PlayStation Direct/Target — availability UNVERIFIED. [SI — prior research] Only VR option for Gran Turismo 7 (PS5), which keeps it relevant despite the PC compromises.
- **Pimax Crystal Light** — $899 US [VL — store.pimax.com fetched 2026-10-02: "$899.00 USD" with a struck-through "$599.00" also rendered on the page — flag this pricing-format confusion in the wiki], 2880×2880/eye, 35 PPD, 110°H, 72/90/120 Hz, glass aspheric lenses, IPD 58–72 mm, **no eye tracking**, ~815 g, wired DisplayPort, inside-out (Lighthouse faceplate optional). Pimax's own sim guidance: RTX 4070/3080 class = medium settings for racing sims; RTX 4070 Ti–4090 class = best experience. [VL — store.pimax.com]
- **Pimax Crystal Super** — 3840×3840/eye, 50/57 PPD variants, eye tracking, ~$1,735 [SI — Pimax comparison page; verify]. **Pimax Dream Air** — $1,999 Lighthouse version (2026-09-11 report [SI]), 3840×3552/eye micro-OLED, <170 g, ~110°H, 72/90 Hz, eye tracking. Dream Air SE from $899 (2560×2560 class, <140 g) [SI — 5thscape Sep 2026, single-source details].
- **Bigscreen Beyond 2** — from $959 US [VL — store.bigscreenvr.com fetched 2026-10-02; some Sep 2026 sources cite $1,019 base/$1,219 2e — flag discrepancy], 2560×2560/eye micro-OLED, **107 g headset-only**, 116° diagonal FOV (108°H × 96°V), 75/90 Hz, 32 PPD; Beyond 2e (+$200) adds eye tracking → dynamic foveated rendering in iRacing/DCS/MSFS. **Requires SteamVR base stations + (for most uses) controllers — neither included**; sim racers can skip controllers. Custom-fit cushion +$120 / universal +$60 class pricing (verify at configurator). No onboard audio/compute — wired PC-only. [VL — store.bigscreenvr.com]
- Weight is the comfort spec nobody reads: Beyond 2 at 107 g vs Crystal Light ~815 g vs Quest 3 515 g is the difference between "forget it's on" and neck breaks every 30 minutes. For endurance racing, weight + strap matter more than the last 10% of resolution.

### Motion sickness (write this section carefully — no medical claims)
- Mechanism (community/clinical consensus): sickness comes from **visual motion disagreeing with the vestibular (inner-ear) signal**, made worse by latency and frame-time spikes. Sim racing is one of the *better* VR genres because you're seated and the cockpit gives a stable reference frame. [SI — community consensus, prior research]
- Mitigations with broad agreement: lock frame rate to native refresh (avoid reprojection oscillation), correct IPD, re-centre the view at session start, start with short sessions and build tolerance over days, stop *before* you feel properly ill (pushing through makes the association worse), keep the room cool / a fan helps many people.
- Horizon-lock / camera-lock settings: individual — helps some, worsens others. Present as "try both," not a recommendation.
- Some people never fully adapt. The wiki should say plainly: buy VR from somewhere with a return window and test it in week one (Bigscreen: 14-day returns [VL]; Meta/retail similar — verify current windows before publishing).

### VR vs triples — the honest trade-off table
| | Triples | VR |
|---|---|---|
| Peripheral vision | True wrap, see cars alongside | ~110° class FOV on most headsets; look-to-apex compensates |
| Depth perception | Flat — judged by size/motion cues | Real stereoscopic depth |
| Seeing your controls | Yes — button boxes, keyboard, drinks | No (passthrough glimpses only) |
| Session length | Unlimited | Heat/battery (Quest ~1.5–3 h); wired headsets unlimited but face fatigue |
| Space | ~165 cm wide + stand depth | Desk-chair footprint |
| Cost (display only, Oct 2026) | 3× 32 in 1440p ≈ $570 (deal) + stand $179–359 | Quest 3 $599.99 / Beyond 2 $959+ (+base stations) / Crystal Light $899 |
| GPU load | 11.1 MP (triple 1440p) | ~9.1 MP raw (Quest 3) to 16.6 MP (Crystal Light) + VR overhead |
| Console | Single screen only in practice | PSVR2 on PS5 only |
| Setup friction | Bezel alignment, per-game multi-monitor config | Per-game VR toggles, recentering, cable/battery management |
| Motion sickness | None | Possible — see above |

Community signal: OverTake's 2026 community poll/reporting shows persistent splits — triples win for competitive convenience and long sessions; VR wins for immersion and space. There is no consensus "best" — present both, keyed to discipline and session length. [SI — prior research]

## Copy-ready tables

### Table A — Display paths compared
| Path | Panel/display cost (Oct 2026) | Extra hardware | hFOV at typical distance | GPU tier needed | Console? |
|---|---|---|---|---|---|
| Single 27–32 in 1440p | $150–300 (index; 32 in G55C class $189.99 deal) | Desk/rig mount | ~40–60° | Entry (RTX 4060/RX 7600 class) | Yes |
| 34 in ultrawide | <$300 VA class – $899.99 QD-OLED | Mount | ~60–70° | Mid | Effectively no |
| 49 in super-ultrawide | $649.99 VA / $899.99 OLED | Mount + width (~120 cm) | ~90–100° | Mid-high | No |
| Triple 32 in 1440p | ~$570 (3× deal price) | Stand $179–359 | ~140–180° (angled) | High (5070 Ti/9070 XT class+) | No |
| VR (Quest 3) | $599.99 | Battery strap/cable ~EST | ~110°H | Mid-high (VR overhead) | PSVR2 only ($399.99 + PS5) |
| VR (enthusiast) | $899–$1,999 | Base stations (Bigscreen/Lighthouse) | ~110–116° | High–flagship | No |

### Table B — VR headsets, October 2026
| Headset | Price (USD) | Resolution/eye | Panel/optics | FOV | Refresh | Tracking | Eye tracking | Weight | Sim-racing notes | Tag |
|---|---|---|---|---|---|---|---|---|---|---|
| Meta Quest 3S | $349.99 (128 GB) / $449.99 (256 GB) | 1832×1920 | LCD Fresnel | 96°H×90°V | ≤120 Hz | Inside-out | No | ~514 g | Budget entry; softer optics than Quest 3 | [SI] |
| Meta Quest 3 | $599.99 (512 GB) | 2064×2208 | LCD pancake | 110°H×96°V | ≤120 Hz | Inside-out | No | 515 g | Default pick; battery strap for enduros | [SI] |
| PSVR2 (+PC adapter $59.99) | $399.99 | 2000×2040 | OLED | ~110° | 90/120 Hz | Inside-out | PS5 only | ~560 g [EST — verify] | GT7's only VR; PC features reduced | [SI] |
| Valve Steam Frame | $1,059 (256 GB) / $1,299 (1 TB) | 2160×2160 | LCD pancake | ~110° | 72–144 Hz | Inside-out | Yes | 185 g core / ~440 g strapped | NEW Sep 2026; wireless PCVR via bundled 6 GHz adapter; no PSU in box (+$29) | [SI] |
| Pimax Crystal Light | $899 | 2880×2880 | QLED-class LCD, glass aspheric | 110°H | 72/90/120 Hz | Inside-out (Lighthouse faceplate opt.) | No | ~815 g | 35 PPD clarity pick; wired DP; heavy | [VL] |
| Pimax Crystal Super | ~$1,735 | 3840×3840 | — | 106–140° by variant | 72/90 Hz | Inside-out | Yes | — | 50/57 PPD flagship; RTX 5090 territory | [SI] verify |
| Pimax Dream Air | $1,999 (Lighthouse) | 3840×3552 | Micro-OLED | ~110°H | 72/90 Hz | Lighthouse (SE: inside-out class) | Yes | <170 g | Dream Air SE from $899 (2560-class) | [SI] |
| Bigscreen Beyond 2 / 2e | from $959 / +$200 (2e) | 2560×2560 | Micro-OLED pancake | 116° diag (108H×96V) | 75/90 Hz | SteamVR base stations (not incl.) | 2e only | 107 g (headset only) | Lightest by far; DFR via 2e in iRacing; controllers skippable for racing | [VL] |

### Table C — Pixel load cheat sheet (for the PC-requirements page)
| Setup | Total pixels | vs 4K (8.3 MP) | Sensible GPU class (Oct 2026 guidance) |
|---|---|---|---|
| Single 1440p | 3.7 MP | 0.44× | RTX 4060 / RX 7600 |
| Single 4K | 8.3 MP | 1× | RTX 4070 / RX 7800 XT |
| Triple 1440p | 11.1 MP | 1.33× | RTX 5070 Ti / RX 9070 XT and up |
| Triple 4K | 24.9 MP | 3× | RTX 5080/5090; expect settings compromises below 5090 |
| Quest 3 VR | ~9.1 MP raw (+ oversampling) | ~1.1×+ | RTX 4070 class for locked 90 Hz in most sims |
| Crystal Light VR | 16.6 MP raw | 2× | RTX 4070 Ti–4080 class (Pimax "best experience" tier) |

## Options by budget (display only, USD, Oct 2026)
- **~$190–300** — Single 32 in 1440p 165 Hz (Odyssey G55C class, $189.99 deal [SI]) or a 34 in VA ultrawide (<$300 class [SI]). Console players: stay single-screen.
- **~$570–930** — Triple 32 in 1440p at deal pricing (~$570 panels [SI]) + stand ($179–359 [SI]); alternatively single QD-OLED ultrawide ($719.99–899.99 [SI]).
- **~$400–600** — VR entry: PSVR2 $399.99 (PS5 owners) or Quest 3 $599.99 (PC) [SI]. Quest 3S $349.99 if budget is hard-capped.
- **~$900–1,100** — Pimax Crystal Light $899 [VL] for clarity, Bigscreen Beyond 2 from $959 [VL] if you own/can add base stations, Steam Frame $1,059 [SI] for wireless PCVR.
- **$1,700+** — Crystal Super ~$1,735 [SI verify] / Dream Air $1,999 [SI] — flagship clarity; budget the GPU to match or the headset is wasted.

## Sources
**Verified live (pages fetched 2026-10-02):**
- store.pimax.com Crystal Light — $899.00 USD (page also renders a struck-through "$599.00" — pricing-format confusion flagged), 2880×2880/eye, 35 PPD, 110°H, 72/90/120 Hz, no eye tracking, IPD 58–72, Pimax GPU tiers (RTX 4070/3080 class medium sim settings; 4070 Ti–4090 best).
- store.bigscreenvr.com Beyond 2 — from $959.00 USD, 2e +$200, 2560×2560/eye micro-OLED, 116°D/108°H/96°V, 75/90 Hz, 32 PPD, 107 g headset-only, SteamVR base stations required and not included, controllers skippable for sim racing, DFR via 2e in iRacing/DCS/MSFS, 14-day returns.
- nextlevelracing.com F-GT Pro (display-adjacent: integrated monitor mount ecosystem) — fetched for cockpits file.

**Search-index (not fetched this pass — re-verify prices before publishing):**
- GeekWire (2026-09-14), theshortcut.com, TechSpot, skarredghost.com (2026-09-21) — Valve Steam Frame launch: $1,059/$1,299, Snapdragon 8 Gen 3, 2160×2160, 72–144 Hz, eye tracking, bundled 6 GHz adapter, no PSU in box ($29), reservation sales from 2026-09-18.
- Meta Quest 3 $599.99 (512 GB) / Quest 3S $349.99–$449.99 Sep 2026 pricing reports (Meta increase effective 2026-04-19).
- Neowin deal reports 2026-09-28 — Samsung Odyssey G55C 32 in $189.99; Odyssey G9 49 in VA $649.99. PCWorld/PC Guide — MSI MPG 341CQPX QD-OLED $719.99–$899.99; OLED G9 $899.99.
- fovcalculator.net + nicholasxuu fov-calculator (updated 2026-09-10) — hFOV formula, curvature example (34 in @ 70 cm: 59.1° flat → 63.7° 1000R), PPD guidance (32 in 1440p @ 70 cm ≈ 44 PPD).
- BoxThisLap / Tech-Insider Sep 2026 GPU guides; iRacing official system requirements (6/8/10+ GB VRAM tiers).
- PSVR2 $399.99 permanent pricing + $59.99 PC adapter (Mar 2025 cut; Sep 2026 stock-out reports unverified).
- Pimax comparison page (Crystal Super ~$1,735, 3840×3840, 50/57 PPD); ad-hoc-news 2026-09-11 (Dream Air $1,999 Lighthouse); 5thscape Sep 2026 (Dream Air SE from $899).
- OverTake community VR-vs-triples poll/reporting (2026); Boosted Media VR coverage.

## Unverified / TODO
- [ ] Pimax US store pricing format: Crystal Light page shows both $899 and struck-through $599 — confirm actual checkout price before the wiki cites either.
- [ ] Bigscreen Beyond 2 base price discrepancy: $959 [VL store] vs $1,019/$1,219 cited by some Sep 2026 sources — cite the store price and date it.
- [ ] PSVR2 US availability (Sep 2026 stock-out reports) and exact headset weight.
- [ ] Steam Frame: sim-specific reviews (iRacing/ACC over the 6 GHz link, latency measurements) — headset launched 2026-09-14; dedicated sim-racing coverage may not exist yet. Also confirm whether eye-tracked DFR works in iRacing on Frame.
- [ ] Crystal Super / Dream Air / Dream Air SE US checkout prices (index-only so far).
- [ ] GPU street prices — distorted by the 2026 memory shortage; re-check within days of publishing, and date-stamp.
- [ ] Monitor deal prices ($189.99 G55C, $649.99 G9) are sale prices from 2026-09-28 reports — will expire; wiki should cite MSRP + "seen at" deal price.
- [ ] Per-game VR support matrix (which 2026 sims support VR: iRacing/ACC/LMU/AC Rally/DiRT/WRC/AMS2 etc.) — belongs with the disciplines research; cross-check AC Rally VR status (v0.6 VR unconfirmed in prior research).
- [ ] Console display rules: confirm current PS5/Xbox ultrawide and 1440p output behaviour before stating console display advice as fact.
