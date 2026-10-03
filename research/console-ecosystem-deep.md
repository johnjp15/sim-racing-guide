# Console ecosystem deep research — PS5 / Xbox Series licensing, compatibility, games, traps

**Type: RESEARCH ONLY — not wiki prose.** Facts, tables, and options for the author to write from.
**Checked: 2026-10-02 (US, USD). Prices are volatile; re-verify before publishing.**
**Source key:** ✅ Verified live (manufacturer/store page read 2026-10-02) · ◐ Index (search result / secondary site / manufacturer listing only) · ⚠️ Unverified/TODO (do not publish as fact).

Related files: `existing-pack/14-pc-console.md`, `research/pc-games-economics.md`, `research/wheelbases-deep.md`.

---

## 1. The core fact: console wheels are a licensing problem, not a technology problem

Every console-compatible wheel contains an **officially licensed authentication/security chip**. The chip handshakes with the console; without it, a wheel simply does not work — this has been true since PS4/Xbox One (2013–14) and did not change with PS5/Xbox Series. (◐ Eurogamer / PlayStation Lifestyle historical reporting on the PS4 security-chip requirement, read 2026-10-02; mechanism unchanged per current licensing sources below.)

Consequences a beginner must understand:
1. **PC-only gear is PC-only forever.** No firmware update will ever add PlayStation support to a base that lacks the Sony chip. (Simucube, Asetek, Simagic, most Moza = PC-only.)
2. **PlayStation and Xbox license differently** — where the chip lives depends on the platform (see §2). This is *the* thing that determines cross-platform compatibility.
3. **The same product name can hide different SKUs.** A "Logitech G923" or "Fanatec ClubSport DD" can be console-compatible or not depending on variant. Buying the wrong variant is the #1 console beginner mistake (see §6 traps).

---

## 2. How licensing works, brand by brand

### Fanatec — the clearest model (✅ Fanatec official forum, read 2026-10-02)

Fanatec's own definitions (quote-ready):
- **PlayStation authenticates through the wheel base.** A PS-licensed base contains the Sony chip; with one connected, essentially the whole Fanatec ecosystem (any rim, pedals through the base, shifters) works on PS4/PS5.
- **Xbox authenticates through the steering wheel itself.** An Xbox-licensed rim/hub contains the Microsoft chip; fit one to *any* Fanatec base and that base works on Xbox One/Series.
- Product labels: **"PS"** = licensed, authenticates, works standalone. **"PS Ready"** = works only when attached to a PS-licensed base. **"Xbox"** = licensed rim, authenticates Xbox. **"Xbox Ready"** = needs an Xbox-authenticating rim/hub attached.

The killer combination this creates (corroborated ◐ traxion.gg, gamesradar.com, read 2026-10-02):
> **PS-licensed base + Xbox-licensed rim = PC + PS4/PS5 + Xbox One/Series — all three platforms from one rig.** The ClubSport DD+ carries "a Sony-approved chip inside the base", and with an Xbox-compatible wheel fitted it also works on Xbox.

Cheapest Xbox-authenticating Fanatec rims cited (◐ Fanatec forum prices, re-check before publishing): McLaren GT3 V2 or WRC wheel ≈ $200; ClubSport Universal Hub V2 for Xbox ≈ $350.

**Fanatec console-compatible bases (Oct 2026):**

| Base | Platform reach | Price signal (Oct 2026) | Notes |
|---|---|---|---|
| Gran Turismo DD Pro (5 Nm; 8 Nm w/ Boost Kit) | PS4/PS5 + PC (+ Xbox with Xbox rim) | Base ≈ $599.99 after price cut (was $739.99); bundle ≈ $799.99 (◐ traxion/simracingsetup, read 2026-10-02) | The default PS5 DD recommendation for years. ⚠️ US direct-store price not verified live (fanatec.com) — TODO. |
| ClubSport DD+ (15 Nm → **18 Nm after firmware upgrade**) | PS4/PS5 + PC (+ Xbox with Xbox rim) | Base ≈ $899.99 (was $1,179.99); GT DD Extreme 18 Nm bundle ≈ $1,219.99 (◐ secondary) | Price cuts attributed to Corsair-takeover cost efficiencies (◐ traxion). ⚠️ Verify on fanatec.com. |
| ClubSport DD (12 Nm, **no +**) | **PC/Xbox only — NOT PlayStation** | ≈ $699.99 (◐) | ⚠️ THE trap: DD vs DD+ is one letter and an entire platform. See §6. |
| Podium DD1 / DD2 | PC/Xbox only | — | The PS-compatible Podium F1 bundle is discontinued; used-market only. |
| CSL DD | PC/Xbox only (via Xbox rim) | — | No PlayStation variant exists. |

### Logitech — historically separate SKUs; new modular RS system changes the maths

**Classic model:** Logitech sells *separate PlayStation and Xbox versions* of the same wheel. A PS G923 does not work on Xbox and vice versa — the licence is baked into the integrated wheel unit.
- G923: PS version and Xbox version, sold separately. US list $349.99 (as of Aug 2026 ◐ tech-insider read 2026-10-02); frequently on sale $249.99–$299 (◐ deal listings). ⚠️ Verify current logitech.com US price before publishing.
- G Pro Racing Wheel: three variants — PC-only ($699.99), PlayStation/PC, Xbox/PC (≈ $899.99–999.99 depending on sale) (◐ logitech.com/slickdeals, read 2026-10-02). Buying the PC-only variant for console use is an expensive mistake.

**New model — Logitech RS50 system (2025/26, ✅ logitech.com product pages, read 2026-10-02):**
- RS50 base: **PC-only $349.99** · **PlayStation version $449.99** (the $100 delta is literally the Sony licence living in the base — a clean illustration of §2's principle).
- **RS Wheel Hub for Xbox** carries the Xbox authentication. Logitech's own line: *"Pair the RS50 base for PlayStation with the RS Wheel Hub for Xbox, and you're ready for the track across PC, PlayStation, and Xbox"* — i.e., Logitech has adopted the Fanatec playbook: PS in the base, Xbox in the hub.
- RS50 System bundle (base + hub + round wheel, **no pedals**): $699.99, sold in PS and Xbox variants. 8 Nm direct drive, TRUEFORCE, settings stored on the base and carried to console.
- RS Pedals: 75 kg load cell, $159.99; RS Clutch available separately.
- Why this matters for the guide: RS50 PS base + RS50 System economics make Logitech a genuine mid-tier console DD option for the first time, and the PS-base + Xbox-hub combo is the cheapest *new* triple-platform path found in this research (⚠️ total-with-pedals maths: $699.99 system + $159.99 pedals ≈ $860 before any second hub — author's arithmetic from ✅ list prices, label as such).

### Thrustmaster — separate console-specific bases, no cross-console base

- Model: each base is built for one console family. There is **no** Thrustmaster base that does both PS and Xbox; cross-platform Thrustmaster users own two bases or switch ecosystems.
- **T598** (Direct Axial Drive, 5 Nm constant): PlayStation PS5/PS4/PC bundle, list $499.99 (◐ TechRadar) — ⚠️ a $599.99 figure also appears (TweakTown review unit with extras); **verify US store price before publishing**. Includes wheel + 2-pedal Raceline set; load-cell upgrade $179.99; GT Wheel Add-On $299.99.
- **T598-X** is the Xbox variant. ⚠️ Reported NATIVE/LEGACY mode quirks in F1 games on Xbox (◐ BoxThisLap, read 2026-10-02) — flag as a known-annoyance TODO to verify with more sources.
- **T818**: PC-only direct drive — do not recommend to console buyers.
- Legacy belt-drive (still sold, fine on a budget): T300 / T-GT II = PlayStation; TX / TS-XW = Xbox. Belt feel is a generation behind DD; only buy at deep discount in 2026 (author judgement — label as opinion if used).

### Moza — PC-first; exactly one console product

- **Moza R3 Racing Bundle for Xbox & PC: $399 US list** (✅ Moza official store, read 2026-10-02). 3.9 Nm DD, ESX Xbox wheel (carries the Xbox licence), SR-P Lite 2-pedal set, table clamp included. Officially licensed for Xbox Series X|S; listed support includes Forza Horizon 5, Forza Motorsport, F1 on Xbox.
- **No PlayStation Moza base exists** as of 2026-10-02 research. Every other Moza base (R5/R9/R12/…) is PC-only. "Moza on PS5" product listings or videos implying otherwise should be treated as misinformation or adapter-based (see DriveHub below).
- Moza accessories (handbrake $99, sequential shifter $129, H-pattern $149 — ✅ Moza US store, read 2026-10-02) connect through Moza bases on PC; console functionality only via the R3's ecosystem on Xbox (⚠️ confirm per-accessory Xbox support on Moza's compatibility page before publishing specifics).

### Everyone else (one-line verdicts for a table)

| Brand | Console status (Oct 2026) |
|---|---|
| Simucube | PC only. No console path, none announced found. |
| Simagic | PC only. |
| Asetek | PC only (console teases unverified — ⚠️ do not publish as roadmap). |
| VRS, Heusinkveld, etc. | PC only; standalone USB pedals/devices do **not** work on console unless routed through a compatible base within the same ecosystem (Fanatec/Logitech/Thrustmaster console bases accept their own pedals via the base). |
| HORI | Licensed budget wheels for both consoles (e.g., Overdrive on Xbox list for Forza) — non-FFB or basic FFB; fine for arcade games, not a sim recommendation. |

### Unofficial workaround: adapters (DriveHub etc.)

- Collective Minds **DriveHub ($89.99** ◐ Eurogamer listing, read 2026-10-02) sits between wheel and console and spoofs authentication, letting e.g. a Fanatec wheel run on the "wrong" console.
- Status for the guide: **unofficial, unsupported by Sony/Microsoft/brand**, and historically vulnerable to console firmware/game updates breaking compatibility. ⚠️ TODO: verify DriveHub's exact PS5 / Xbox Series status as of late 2026 with current sources before mentioning beyond a flagged footnote. Do not present adapters as a buying strategy for beginners.

---

## 3. Compatibility matrix (copy-ready, Oct 2026)

| Wheel / base | PS5 (& PS4) | Xbox Series/One | PC | Mechanism |
|---|---|---|---|---|
| Fanatec GT DD Pro | ✅ | With Xbox rim | ✅ | PS chip in base |
| Fanatec ClubSport DD+ / GT DD Extreme | ✅ | With Xbox rim | ✅ | PS chip in base |
| Fanatec ClubSport DD / CSL DD | ❌ | With Xbox rim | ✅ | Xbox chip in rim |
| Fanatec Podium DD1/DD2 | ❌ | With Xbox rim | ✅ | Xbox chip in rim |
| Logitech RS50 (PS base) | ✅ | With RS Wheel Hub Xbox | ✅ | PS in base, Xbox in hub |
| Logitech RS50 (PC base) | ❌ | ❌ | ✅ | No console chip — $100 cheaper for a reason |
| Logitech G Pro (PS / Xbox variants) | Variant only | Variant only | ✅ | Licence fixed per SKU |
| Logitech G923 / G920 / G29 | Variant only (G923 PS, G29) | Variant only (G923 Xbox, G920) | ✅ | Licence fixed per SKU |
| Thrustmaster T598 | ✅ | ❌ | ✅ | Console-specific base |
| Thrustmaster T598-X | ❌ | ✅ | ✅ | Console-specific base |
| Thrustmaster T300 / T-GT II | ✅ | ❌ | ✅ | Console-specific base |
| Thrustmaster TX / TS-XW | ❌ | ✅ | ✅ | Console-specific base |
| Thrustmaster T818 | ❌ | ❌ | ✅ | PC only |
| Moza R3 (Xbox bundle) | ❌ | ✅ | ✅ | Xbox licence in ESX wheel |
| Moza R5/R9/R12 etc. | ❌ | ❌ | ✅ | PC only |
| Simucube / Simagic / Asetek | ❌ | ❌ | ✅ | PC only |

Reading rule for beginners (quote-ready): **On PlayStation, the base decides. On Xbox, the wheel/hub decides. On PC, everything works.**

---

## 4. Console games & platform state (Oct 2026)

### PlayStation
- **Gran Turismo 7** — still PlayStation-exclusive, no PC port as of Oct 2026. US list $69.99 (PS5) (◐ secondary/price trackers; ⚠️ verify PS Store US live). PSVR2 support: the full game is playable in VR on PS5 — GT7+PSVR2 is the cheapest *quality* VR sim racing path that exists (see §5). Online play requires PS Plus (✅ PlayStation official page, read 2026-10-02). Not in the PS Plus Extra/Premium catalogue — must be bought.
- **PSVR2**: $399.99 after permanent cut from $549.99 (◐ secondary); PC adapter $59.99 + DisplayPort 1.4 cable $15–25 if also using on PC. Per-eye 2000×2040 OLED (vs Quest 3 2064×2208 LCD).
- **ACC / F1 / WRC etc. on PS5:** current-gen versions exist and take wheels natively per the licensing rules above; exact per-title wheel lists live on each game's support pages (⚠️ TODO per-title confirmation if the wiki names specific titles). LMU console version is **not** out — announced window early-to-mid 2027 (from prior research; re-verify).

### Xbox
- **Forza Motorsport (2023)** — Standard $69.99, included with Game Pass (◐ Xbox store/traxion, read 2026-10-02). Official Xbox Series wheel support list includes Fanatec CSL DD/DD1/DD2/ClubSport lines, Logitech G920/G923/G Pro, Thrustmaster TX/TMX/TS-XW/T128/T248, HORI Overdrive (✅/◐ Forza Support via secondary reporting). PC wheel list is wider (Moza R9 + CS/GS wheels listed; Simucube/VRS/Asetek notably absent natively — DirectInput workarounds exist).
- **Forza Horizon 6** — announced, Japan setting, launching 2026; Xbox first (day-one Game Pass Ultimate), PS5 later (◐ fextralife reporting, read 2026-10-02). ⚠️ Verify against Xbox Wire before publishing date/setting specifics.
- **Forza Horizon 5** — already cross-platform (PS5 version exists); Moza R3 lists FH5 Xbox support explicitly (✅ Moza store).
- **Game Pass Ultimate pricing is genuinely unsettled:** sources read 2026-10-02 conflict — $29.99 (insider-gaming), $23/mo after an April 2026 cut from a $30 Oct 2025 peak (GameSpot), $22.99 (Engadget via aggregator, 29 Sep 2026). **Publish only as "≈$23/month, changed twice in a year — check xbox.com"** ⚠️. For guide maths, Game Pass matters because Forza Motorsport is effectively "$0 extra" for subscribers.

### Subscription-to-play-online costs (both consoles)
- PS5 online multiplayer: PS Plus Essential required. ◐ Secondary table seen: $131.88/year equivalent — ⚠️ **unverified**, get the official US price from PlayStation before publishing.
- Xbox online: Game Pass Core/Essential-tier equivalent required for most online play; Ultimate includes it. Same ⚠️ verify-officially status.
- Guide point that survives regardless of exact price: **console online racing carries a $60–130/year platform tax that PC racing does not.** Include it in any console-vs-PC cost comparison (with iRacing's subscription on the PC side for fairness).

### 2026 console hardware prices — the "console is cheap" assumption is eroding (◐ secondary, verify officially)
Reported 2026 increases (pushsquare / tech-insider reporting, read 2026-10-02 — ⚠️ confirm on Sony/Microsoft official pages before publishing):
- Sony (from 2 Apr 2026): PS5 disc $649.99 · PS5 Digital $599.99 · PS5 Pro $899.99.
- Microsoft (from 1 Aug 2026): Xbox Series X disc $799.99 · X Digital $749.99 · Series S 512 GB $499.99 · S 1TB $599.99.
- Implication for readers: a Series S + Moza R3 ($499.99 + $399 ≈ $899) remains the cheapest DD console route *if* the Series S price holds; a PS5 + GT DD Pro bundle starts at ≈ $1,450 before a TV. A $1,200 gaming PC (§ PC file, Build A) now undercuts high-end console paths while running every sim — the console value argument in 2026 rests on simplicity, GT7/Forza exclusives, and PSVR2, not raw price.

---

## 5. What a console-only buyer should buy, by budget (copy-ready)

All gear prices Oct 2026, sourced per §2; ✓ = confidence. Console + display not included unless stated.

### PlayStation (goal: GT7 first, ACC/F1 second)

| Budget | Buy | Total (gear) | Notes |
|---|---|---|---|
| ~$250–350 | Logitech G923 **PlayStation version** (on sale $249.99–299 ◐) | ≈ $250–300 | Cheapest real-FFB entry. Confirm PS SKU twice before checkout. No upgrade path within Logitech classic line beyond G Pro. |
| ~$500 | Thrustmaster T598 PS bundle ($499.99 ◐ ⚠️ verify) | ≈ $500 | Entry direct drive with pedals included; load-cell upgrade $179.99 later. The cheapest *DD* on PS5. |
| ~$700–860 | Logitech RS50 System PS ($699.99 ✅) + RS Pedals ($159.99 ✅) | ≈ $860 | 8 Nm DD + 75 kg load cell. Add RS Wheel Hub Xbox later → triple-platform. |
| ~$800 | Fanatec GT DD Pro bundle ($799.99 ◐ ⚠️ verify fanatec.com) | ≈ $800 | The ecosystem play: any Fanatec rim/pedal/shifter works on PS5 through this base; Xbox rim later → triple-platform. 8 Nm via Boost Kit (⚠️ confirm bundle contents/price). |
| ~$900–1,220 | Fanatec ClubSport DD+ base ($899.99 ◐) or GT DD Extreme bundle ($1,219.99 ◐) | $900+ (base-only needs rim+pedals) | 18 Nm flagship PS path. Overkill for GT7 alone; justified for ACC PS5 + future PC. |
| + VR | PSVR2 ($399.99 ◐) | +$400 | GT7 in full VR. Cheapest quality VR sim racing that exists; also works on PC with $59.99 adapter. |

### Xbox (goal: Forza Motorsport/Horizon first)

| Budget | Buy | Total (gear) | Notes |
|---|---|---|---|
| ~$250–350 | Logitech G923 **Xbox version** (sale $249.99–299 ◐) | ≈ $250–300 | Same wheel, opposite SKU trap. |
| **$399** | **Moza R3 Xbox bundle** ($399 ✅ Moza store) | **$399** | Best-value console DD found in this research: 3.9 Nm DD + pedals + clamp, officially licensed. Entry torque is modest; everything else in class costs $100+ more. |
| ~$500 | Thrustmaster T598-X (⚠️ US price verify; PS twin lists $499.99) | ≈ $500 | 5 Nm DD; note reported F1-game mode quirks (⚠️ verify). |
| ~$700–860 | Logitech RS50 System Xbox ($699.99 ✅) + RS Pedals ($159.99 ✅) | ≈ $860 | Same hardware story as PS; PS hub path reverses (add PS hub compatibility ⚠️ confirm RS50 Xbox base + PS hub cross-support wording on logitech.com). |
| $800+ | Fanatec: CSL DD or ClubSport DD + Xbox rim (McLaren GT3 V2 ≈ $200 ◐) | Varies ⚠️ | Most expandable Xbox path; PS5 later requires swapping to a PS base (the base is the PS licence — you cannot rim-swap your way onto PS5). |

### Both consoles (or console now, PC later)
1. **Fanatec route:** PS base (GT DD Pro / DD+) + Xbox rim → all three platforms, one rig. Most mature ecosystem.
2. **Logitech RS route:** PS RS50 base + Xbox RS Wheel Hub → all three platforms; newer ecosystem, fewer rims/shifters ⚠️ (check shifter availability before promising).
3. **Everyone else:** pick your primary console; there is no Thrustmaster or Moza path to both consoles.
4. PC-later insurance: every base in the tables above also works on PC — console-first buyers lose nothing when they add a PC. The reverse is false (PC-only bases never gain console support). **This asymmetry is the single most important console-buying fact in the guide.**

---

## 6. Console-only traps (copy-ready warning list)

1. **DD vs DD+ (Fanatec):** ClubSport DD (12 Nm) = PC/Xbox only. ClubSport DD**+** = PlayStation. One letter, one platform, ~$900 mistake.
2. **Moza on PlayStation:** does not exist. R5/R9/R12 listings near PS5 keywords are PC kit; only the **R3 bundle** does console at all, and only Xbox.
3. **Wrong-SKU Logitech:** G923/G Pro ship as separate PS and Xbox versions that do not cross over. The box art's console logo is the whole game — check it, then check it again at checkout.
4. **"PS Ready" ≠ PlayStation compatible (Fanatec):** a PS Ready rim on a PC-only base gives you a PC-only rig. The *base* must carry the licence.
5. **Thrustmaster T818 / Simucube / Simagic / Asetek on console:** no. Not with adapters as a beginner strategy, not with future firmware.
6. **Standalone USB pedals/shifters on console:** Heusinkveld-style USB devices don't plug into a PS5/Xbox. Console peripherals must route through the licensed base, within brand.
7. **T598-X Xbox F1 quirks:** reported NATIVE/LEGACY mode oddities in F1 titles (⚠️ single-source — verify before publishing as fact; still worth a "check current firmware notes" line).
8. **The online tax:** PS Plus / Game Pass Core is required for online racing on console; budget it alongside any iRacing-style subscription maths for fairness.
9. **Game Pass price churn:** Ultimate changed price twice within a year per Oct 2026 reporting; any Game Pass-based "cheap racing" maths must carry a date and a "verify" note.
10. **Console price hikes ≠ wheel price hikes:** wheels didn't get cheaper when consoles got more expensive in 2026; total console-rig budgets from pre-2026 guides are stale in both directions.
11. **DriveHub-style adapters:** unofficial authentication spoofing; can break with any console update; support is a forum thread. Fine as a hobbyist footnote, never as the plan.
12. **GT7 is PlayStation-only and not in PS Plus:** budget the $69.99 (or wait for the frequent sales ⚠️ verify US sale cadence on PS Store) on top of any PS5 wheel budget.

---

## 7. Sources

**Verified live (read 2026-10-02):** Fanatec official forum (licensing definitions; PS-in-base / Xbox-in-wheel) · Moza official store (R3 Xbox bundle $399; accessory prices) · Logitech product pages (RS50 pricing/variants; RS Pedals; PS-base + Xbox-hub statement) · PlayStation official (GT7 PS Plus requirement, PSVR2 support).

**Index / secondary (read 2026-10-02):** traxion.gg (Fanatec pricing/DD+ chip reporting; Forza pricing) · gamesradar.com (Fanatec cross-platform summary) · simracingsetup (GT DD Pro pricing) · TechRadar / TweakTown (T598 pricing — conflicting) · BoxThisLap (T598-X notes) · Eurogamer (DriveHub $89.99; PS4 chip history) · PlayStation Lifestyle (PS4 security chip) · fextralife (Horizon 6) · GameSpot / insider-gaming / Engadget (Game Pass pricing — conflicting) · pushsquare / tech-insider (2026 console hardware prices) · Forza Support wheel lists via secondary reporting.

**Source-quality caution for the author:** several Oct 2026 aggregator/"price tracker" pages in this space are low-quality and internally inconsistent (Game Pass and console-price figures especially). Anything marked ⚠️ below needs an official-page check before it goes in the wiki.

## 8. Unverified / TODO

- ⚠️ Fanatec US direct-store prices (GT DD Pro base/bundle, DD+, GT DD Extreme) — open fanatec.com US and transcribe; secondary sources agree on direction (cuts) not audited figures.
- ⚠️ Thrustmaster T598 / T598-X exact US list price ($499.99 vs $599.99 conflict) — check thrustmaster.com US store.
- ⚠️ Logitech G923 / G Pro current US list prices and sale cadence — check logitech.com US.
- ⚠️ PS Plus Essential and Game Pass (Core/Ultimate) official US prices — check playstation.com / xbox.com; publish dated.
- ⚠️ GT7 US PS Store price and sale frequency.
- ⚠️ DriveHub PS5 / Xbox Series compatibility status, late 2026 (firmware, per-game notes).
- ⚠️ Forza Horizon 6 release date/setting/platforms — confirm via Xbox Wire.
- ⚠️ LMU console release window (early-to-mid 2027 prior reporting) — re-confirm; BeamNG PS5 Early Access is dated 19 Oct 2026 (prior research) — confirm post-launch wheel support.
- ⚠️ RS50 Xbox-base + PlayStation-hub cross-support exact wording (mirror of the PS-base + Xbox-hub claim).
- ⚠️ Moza R3 per-accessory (shifter/handbrake) Xbox compatibility specifics.
- ⚠️ 2026 console hardware prices — official Sony/Microsoft confirmation.
- ⚠️ T598-X F1 NATIVE/LEGACY issue — second source or Thrustmaster firmware notes.

*End of research file. Author: re-date all prices on import into wiki pages.*
