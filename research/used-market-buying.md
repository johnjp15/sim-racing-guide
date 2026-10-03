# Used-Market Buying — Research Notes (not wiki copy)

> **Audience:** the wiki author. Research only. Prices US USD, sourced and dated **October 2026**, volatile. **Every discount range below is labelled either "sourced" (specific evidence) or "estimate" (typical asking-price spread — never present as transaction data).** Used listings shown in search results are *asking* prices unless a sold listing was actually opened; eBay sold-price verification was not possible this pass (connection resets + 103 byte/sec connection against aggressive search rate spacing) — **no sold-price figure in this file should be published as a sold price.**
>
> **Honesty rule for this file:** US eBay *sold* prices could not be verified this pass (fetches failed); **UK eBay sold prices were captured** and are labelled UK. US figures are asking prices, listing "sold counters," or factory-channel prices — never present a US figure here as a transacted price.
>
> **Carried from the earlier buying research pass (pack section 15)** where this file overlaps: channels, checks, wear points, red flags, new-vs-used calls, bundle discounts. New this pass: official refurb channels (Fanatec Certified Refurbished, Simucube Pre-owned) with sourced prices/terms; warranty-period table; depreciation-anchors; asking-price snapshots.

---

## 1. Channels — where used sim gear actually changes hands

| Channel | Best for | Pricing pattern (all "estimate" unless sourced) | Buyer protection / caveats |
|---|---|---|---|
| **Facebook Marketplace (local)** | Cockpits, rigs, seats, stands, monitors — bulky = local-only | Lowest prices: sellers avoid eBay fees + shipping hassle; full-rig deals common | Inspect/test in person; fraud profile is well-documented (§6). South San Francisco/Bay Area note: bring a laptop to test under load |
| **Community classifieds** (iRacing forums, OverTake.gg marketplace, RaceDepartment, GTPlanet classifieds) | High-end: Simucube, Heusinkveld, Simagic, Fanatec Podium | Closer to fair value; sellers are hobbyists who graded cockpit time honestly | Account age/post history is the vetting tool; rare but real grading honesty ("light use since 2022" with receipts) |
| **eBay** | Rare/older gear: Fanatec belt bases, Thrustmaster sets, Heusinkveld Ultimate | Broad range; check **Sold listings → Item Location → US Only** for real transaction prices. (Method only — sold verification failed this pass; asking-vs-sold honesty maintained above) | Buyer protection strongest; shipping on heavy rigs can erase the saving |
| **Amazon Resale ("Used – Like New")** | Entry wheels (G29/G920) at steep discounts | G29 like-new at **$119.99–$127.39 vs $300 list** (Slickdeals posts 30 Aug + 13 Sep 2026, *index* — resale snapshots, still directional for US Oct 2026) | No seller history visibility; returns easy |
| **Fanatec Certified Refurbished (official)** | Fanatec bases/pedals/rims with warranty | **Up to 30% off new; 2-year warranty** (fanatec.com, verified-live fetch of the guarantee/store pages Oct 2026 — see §4) | US store examples (model attribution *not* captured — do not pin a price to a model without opening the page): $244.99 ($349.99), $279.99 ($319.99), $215.99 ($269.99), $139.99 ($199.99), $383.99 |
| **Simucube Pre-owned (official)** | Simucube 2 Sport/Pro, ActivePedal, Throttle, Valo/Tahko rims | Each unit inspected/tested/refurbished, sold direct with **2-year manufacturer warranty** (Traxion, *index*; official press release, *index*). **Return window CONFLICTS: 14 days (most coverage) vs 30 days (Traxion)** — check at checkout | "Minor signs of use" grading; launch-period EUR prices only so far (SC2 Pro pre-owned €947.99–€1,053.32 vs €1,504.75 new — May 2025 coverage, *index*); Oct 2026 US storefront prices TODO |
| **MOZA Refurbished (official US)** | R3 bundles, HGP shifter | Refurb R3 PC bundle **$199 vs $279 new (−28%), 1-year warranty** (Slickdeals 2026-06-16, *index*; official product pages, *index*); R3 Xbox $239 | MOZA's only official refurb channel found |
| **Logitech refurb outlets** | G923 / G PRO wheel | Official logitech.com refurb + **official Logitech eBay outlet**: G923 Certified Refurbished **$249.99 ASK** (eBay, "88 sold" counter — that's units moved at that price, not a sold-listing sample); PRO Racing Wheel refurb $609.99–$799.99 (logitech.com, *index*). Refurb warranty language is internally ambiguous (1-year refurb vs 2-year gaming-products) — UNVERIFIED which applies | Third-party refurb (Woot etc.) can be as thin as **90-day** warranties |
| **Ascher Racing refurbished** | McLaren Artura-class wheels | Excellent/Good tiers via official channels; Artura Pro €993.65 refurb vs €1,129 new (May 2025 coverage, *index*) | EU-centric; US availability TODO |
| **Craigslist / OfferUp / Mercari / local sim shops** | As-found | Wild-west; occasionally excellent bundles | Cash/local/test rules apply doubly |

**Platform legality check that applies to every used purchase:** the base's licence travels with the hardware SKU, not the seller's account. A used PS5 "GT DD Pro" works on PS5 because the PlayStation chip is *in the base*; a used PC-only Fanatec CSL DD will never light up on PS5/Xbox no matter what rim you attach. Xbox needs an Xbox-licensed rim (or an Xbox base SKU for other brands). **A used listing that says "Xbox compatible" because the *rim* has an Xbox logo is a trap** — compatibility lives in the base-side licence, and for Fanatec the licensed component is the *rim* paired to a PS-licensed base. Verify the licence on the maker's compatibility chart, model by model, before money moves. (Carried from earlier pass; licence-mechanics details stay in the wheelbase research file.)

---

## 2. What a fair used price looks like (read this before any number below)

- **Asking ≠ sold.** On Marketplace the opening ask commonly sits 10–20% above the price that actually moves (**estimate**); on eBay the *listed* price of a niche item can sit unsold for months.
- **Bundle maths is where used wins.** A local rig+bundled-base listing frequently prices the base at 50–65% of new because the seller wants one buyer and one trip. (**Estimate**, consistent with the build-guide resale band below.)
- **Refurb is the price ceiling.** A private used unit with ≤12 months of warranty left should price *below* Fanatec Certified Refurbished (up to 30% off + 2-year warranty) or Simucube Pre-owned — otherwise the factory channel is strictly better.

### 2a. Anchored asking/resale evidence (sourced, with honesty flags)

| Evidence | What it is | Label |
|---|---|---|
| "A two-year-old Fanatec or MOZA base in good condition typically sells for **50–65% of its original price**" | Sept 2026 build guide (Tech-Insider, *index* crawl 2026-10-02) | **Index guide claim** — resale band for DD bases, not transaction-verified |
| G29 "Used – Like New" **$119.99–$127.39 vs $300 list** | Amazon Resale deal snapshots (Slickdeals, 30 Aug + 13 Sep 2026) | **Index** — resale channel snapshot, not a market rate |
| MOZA R5 bundle listing at **$299.99 ASK + $25 ship**, "574–584 sold" counter | eBay US active listing (crawled 1–13 days before 2026-10-02) — counter = units moved at/near that ask over time, **not** a completed-listings sample | **Asking price only — do not cite as sold.** R5 bundle new was $379 (MOZA US, verified live 2026-10-02), so the ask ≈ 79% of new current street (asking, *not* sold) |
| **Genuine SOLD prices (UK, ebay.co.uk):** CSL DD 8 Nm QR2 **£186.58** (2 Sep 2026); CSL DD 5 Nm **£173.77** (29 Jul 2026); CSL DD QR1 Ready2Race + Boost Kit + load-cell pedals **£361.42** (19 Sep 2026, Best Offer accepted); Boost Kit 180 PSU alone **£52.25** (6 Sep 2026) | eBay UK completed listings (item IDs in §9) | **SOLD — UK market.** Converted: DO NOT auto-convert to USD in the wiki; UK used prices run below US. The lesson that travels: the 8 Nm PSU alone is a £52–100 part (see §6) |
| Simucube 2 Pro asking: **€750** (reduced from €899, 1 yr old, "under warranty two more") / **£600** (Apr 2026) | OverTake marketplace listings (*index*) | **Asking.** Factory pre-owned ceiling: €947.99–€1,053.32 (May 2025). A $850 *marked-sold* 2023 US listing is **historical — do not use as current** |
| Simucube ActivePedal Pro pre-owned **€1,342.92 vs €2,508.75 new** (≈46% off) | Traxion (*index*) | **EUR, sourced from Traxion** — direction only for US buyers |

### 2b. Discount ranges by component family (labelled estimates)

| Component | Typical used discount vs current new | Why it lands there |
|---|---|---|
| Entry gear-drive (G29/G920/G923, T150/TMX) | 40–60% off (**estimate**; Amazon Resale snapshots sit at the deep end) | Huge supply, frequent new-sale pricing compresses used |
| Belt-drive (T300/TX, T-GT, Fanatec CSL Elite) | 35–55% off (**estimate**) | Superseded by cheap DD; belt/fan/clamp wear fears |
| Mid DD bases (CSL DD, MOZA R5/R9, Simagic Alpha Mini) | 30–50% off (2-yr-old at 50–65%-of-original ⇒ 35–50% off) — **estimate guided by §2a** | QR/version churn (QR1 vs QR2), firmware state, bundle competition |
| High-end DD (Simucube 2, DD1/DD2, Podium) | 25–40% off (**estimate**); factory Pre-owned sets the ceiling | Durability + warranty channels keep values up |
| Load-cell pedals (Heusinkveld Sprint/Ultimate, VRS, CSL Elite V2) | 25–45% off (**estimate**) | No perishables except elastomers; software support is long |
| Hydraulic/active pedals (ActivePedal) | Factory Pre-owned ≈46% off new (EUR, §2a); private sales — *insufficient evidence, TODO* | New tech, factory channel dominates |
| Aluminium-profile rigs | 30–50% off (**estimate**) | "Essentially no wear parts"; sellers discount for local pickup only (build guide, *index*) |
| Foldable rigs (Playseat Challenge) | 40–60% off (**estimate**) | Fabric/hinge fatigue is visible; cheap new |
| Rims | 25–45% off (**estimate**) | Grip wear is cosmetic-honest; licensed rims hold more |
| Shifters/handbrakes (TH8A, MOZA HGP/SGP/HBP) | 20–40% off (**estimate**) | Simple, repairable; bent-lever checks matter |
| VR headsets | 35–55% off (**estimate**, tech-cycle driven) | Battery/lens/panel lottery; new model launches reset values |
| Monitors/triples | 30–50% off (**estimate**) | Local-only realistically; dead-pixel risk |

These ranges are **asking-price guidance for the author**, to be re-based against live sold listings when the wiki page is written. Do not publish a range without spot-checking eBay Sold for that model that week.

---

## 3. What wears out (and what doesn't)

| Component | Wears | Evidence / note | Buyer test |
|---|---|---|---|
| **Pedal potentiometers (Logitech G25–G923 pedal sets)** | **The best-documented wear item in sim racing**: dirty/worn pots → oscillation, flutter, ghost braking, not reaching 100% | BoxThisLap: pots "cheap and not very resistant to use"; contact cleaner is temporary; Hall-sensor kits €20–50 fix it permanently. G923-specific video: pedals "unusable" after years. iFixit cleaning guide exists | Watch the pedal trace at rest + full range: jitter/ghost input = worn pots; budget a Hall kit or walk |
| Belt bases (T300) | Belt wear **3–5 years**; PSU failure "relatively common after 2–3 years"; heat fade on >2 h sessions; fan ramps loudly ~45 min in | RacingRigGuide synthesis + reviews (*index*) | 30+ min high-FFB run: feel for fade, listen for belt squeak/rub; confirm original PSU (non-original PSU voids TM warranty) |
| Gear bases (G29 family) | Wheel sensor is Hall-effect (non-contact, doesn't wear); gear notchiness is *design*, not wear; wear concentrates in the pedals + cables | Logitech spec copies (*index*) | Centre test; ignore inherent notchiness; test pedals per row 1 |
| Direct-drive bases | Drive path essentially wear-free ("no cogs or belts… dust buildup is the only issue"); residual risks: bearings (Simucube: repairable, factory-return), electronics/encoder, fans where fitted, PSU | PC Tech Magazine explainer + OverTake (*index*) | Powered-on under load; fan spin-up check; no-grinding rule |
| Load-cell pedals | Load cells rarely fail; **elastomer stack is the consumable** | Heusinkveld: new-spec elastomers "near zero failure rate… no performance degradation even after **1 million cycles**"; kit = 4 elastomers, cheap to replace | Ask which elastomer spec is fitted; smooth pressure curve; budget an elastomer kit on high-hour sets |
| Fanatec QR1 | Play, clunking, rattling on direction changes; QR2 "completely eliminate[s] any perceivable flex". **QR1 ≠ QR2 compatible** — both sides must match (official) | Boosted Media review + Fanatec (*index*) | Wobble test; photograph **both** QR sides before paying |
| CSL DD / GT DD Pro shaft clamp | Stock clamp "does not provide even clamping force… shaft loose over time… steering wobble… shaft pulling out of the USB-C port" | Marketplace listing text (*index*) — seller marketing, but the failure mode is widely reported | Shaft play/pull test |
| Playseat Challenge / fabric rigs | Hinge play, fabric wear | Community | Sit-and-load test |
| Seats | Faux-leather tearing is the documented complaint (NLR GTtrack seat "micro thin"); bolster wear; recliner play under load-cell braking | OverTake thread (*index*) | Sit test, recline under brake load, seam inspection |
| Aluminium profile rigs | Almost nothing (scratches only) | Build guide (*index*) | Bolt/thread check, slot-nut count |
| VR | Battery health, lens scratches, OLED burn-in | General consumer-electronics pattern (labelled as such) | Through-lens check in daylight scene |

**Doesn't wear:** DD motors (no brushes/belts), aluminium profile, button boxes, USB handbrakes — these are the safe used categories.

---

## 4. Warranty — periods and transfer (the section that needs the most care)

**Framing for the author:** "Transferable" has three different meanings in seller listings — (a) the maker honours remaining warranty to a second owner with the original invoice, (b) the maker only serves the original purchaser of record, (c) a retailer/factory **refurb** warranty that starts fresh at *your* purchase. Listings blur all three. Rules that survive every brand: **no invoice ≈ no warranty; remaining period runs from the original purchase date, never reset by resale.**

### 4a. Periods that are sourced (Oct 2026)

| Brand | Period (sourced wording) | Source / label |
|---|---|---|
| Fanatec | **US/Canada default: 1 year** "on all Fanatec products, unless otherwise indicated on the individual product page"; EU **2 years**; AU/JP 1 year | **fanatec.com consumer-guarantee page — VERIFIED-LIVE fetched Oct 2026 (§4b)**. *Conflict:* Traxion reports new Fanatec now carries **3 years** post-Corsair — the guarantee page's "unless otherwise indicated" clause is the resolution path; **verify per-SKU at purchase** |
| Fanatec Certified Refurbished | **2 years** | Fanatec store (verified-live fetch Oct 2026) |
| Fanatec pre-Corsair | Corsair "will honour all existing Fanatec warranties" (Sep 2024) | Traxion (*index*) |
| Simucube 2 | Sport/Pro **24 months**, Ultimate **60 months**; Simucube 3: Pro/Sport 3 yr, Ultimate 5 yr | Official user guide / simucube.com (*index*) |
| Simucube factory Pre-owned | **2-year warranty**; returns 14 vs 30 days **CONFLICTED** | Press release + coverage (*index*) |
| MOZA | Bases: **main body 24 months** / PSU 12 / cable 6 / accessories none; wheels 12; pedals 12; shifter/handbrake 12 | MOZA after-sales policy (*index*). Note: a retailer mirror says PSU 24 months — **internal conflict, flagged** |
| Logitech G | G923: **2-year** limited hardware warranty | Best Buy Q&A answered by Logitech (*index*) |
| Thrustmaster | EU **2 years** from delivery; else local/fallback 1 year; batteries 6 months | Manual mirrors (*index*, official page not fetched) |
| Simagic | **24 months from original date of purchase** (post-2023-07-15 units); S/N is "the primary identifier for aftersales support" | Manuals (*index*) |
| Asetek | **2 years from date of shipment**; modification voids | US Purchase Terms Feb 2025 v.3 (*index*) |
| Heusinkveld | **24 months from date of delivery** | General T&Cs Jun 2023 (*index*) |

### 4b. Transferability — what is actually known (rewritten Oct 2026 with primary evidence)

| Brand | Verdict | Evidence |
|---|---|---|
| **Fanatec** | **NON-TRANSFERABLE — official** | Guarantee page, verbatim: warranty is "bound to the person of the first buyer… and is **not transferable**"; territory = country of first purchase; period runs from **invoice-by-delivery date**; claim needs the **original invoice** (unchanged PDF) + serial number. **VERIFIED-LIVE fetch, Oct 2026.** In practice, forum reports say support has helped second owners holding the original invoice — **goodwill, not a right**; explainer phrasing: the "still under Fanatec warranty" sales argument "is worth ZERO" contractually |
| **Logitech** | **NON-TRANSFERABLE — official text** | "Except where prohibited by applicable law, this warranty is **nontransferable** and is limited to the original purchaser and the country in which the product was purchased"; dated receipt required. logitech.com (*index*, multiple corroborating copies) |
| **Thrustmaster** | **NON-TRANSFERABLE — manual text** | "This warranty is nontransferable"; excludes modified/opened products, commercial use, auction purchases. Manual mirrors (*index*) |
| **MOZA** | **UNVERIFIED** — no transfer clause found in any retrieved MOZA text | Official texts instead impose a **channel lock** ("applies only to purchases made through MOZA official channels and authorized distributors") — grey-market units may be warranty-orphaned |
| **Simucube** | **UNVERIFIED officially**; anecdote suggests invoice-forwarding works ("Warranty can be transferred. The invoice will be forwarded" — 2020 marketplace listing); factory Pre-owned gives the *refurb buyer* a fresh 2-year warranty (that's not a transfer) | OverTake listing + limited-warranty page (receipt required) (*index*) |
| **Simagic** | **UNVERIFIED**; S/N-primary support suggests second-owner service may work in practice — **inference, flagged** | Manuals (*index*) |
| **Asetek** | **UNVERIFIED** (terms "shipment to you" wording; invoice+serial required by retailer) | US terms PDF (*index*) |
| **Heusinkveld** | **UNVERIFIED officially**; one strong goodwill anecdote (second owner emailed expecting to buy parts; HE shipped all parts free, next day, free shipping) — anecdote, not policy | Studio-397 forum (*index*) |

**Author-safe summary sentence:** for the three biggest entry/mid brands (Fanatec, Logitech, Thrustmaster) the factory warranty dies with the first buyer as a contractual matter; everywhere else, treat "warranty included" as unproven until the seller produces the original invoice, the serial matches, and the remaining period is calculated from the *original invoice date*.

**Practical guidance (author can state this):** get the original invoice, the serial number, and a photo of the unit powered on. With an invoice, most makers will at minimum do paid repairs; without proof of purchase date, remaining-warranty maths is unprovable and the listing's warranty is worth $0 in negotiations.

---

## 5. Best-value used picks (and when new beats used)

### Used sweet spots (rationale-first; prices are estimates to re-base at writing time)

| Pick | Why used wins |
|---|---|
| Entry wheel (G29/G920) at the Amazon Resale / Marketplace low band | Try-the-hobby price; DD upgrade path doesn't reuse it, so don't overpay — the 40–60% off band is where it makes sense |
| Belt→DD on a budget: MOZA R5/R9, CSL DD at bundle-junkyard prices | The jump buyers actually feel; target the 50–65%-of-original band (§2a) and walk if there's no invoice |
| Heusinkveld Sprint / VRS pedals | No perishables that matter, software still updated; classic hold-value purchase |
| Aluminium-profile rig, local pickup | No wear parts; seller discounts for pickup; inspect threads and go |
| Simucube 2 Sport/Pro via factory Pre-owned | 2-year factory warranty compresses the private-sale advantage — benchmark every private listing against it |

### New beats used when…

- **The platform licence is the product** (PS5/Xbox) — a wrong-SKU used base is a 100% loss; buy the licensed SKU new or refurb.
- **Fanatec/Simucube factory channel has your item** — 2-year warranty + 30-day returns beats a private sale within ~10–15% of the refurb price (**estimate** threshold).
- **It's a headset** — hygiene, battery, lens and panel lottery; used VR discounts must be deep (>45%) to clear the risk.
- **Cockpit/seat comfort gear** — foam and recliners are body-specific and unreturnable used.
- **New-sale pricing is live** — Fanatec's Black Friday-style events and MOZA bundle pricing regularly compress used asking prices to within warranty-not-included distance of new.

---

## 6. Scams and red flags

- **The missing-PSU trap (best-documented sim-specific risk):** an "8 Nm CSL DD" exists only with the 180 W Boost Kit brick; bundles with it *exclude* the 90 W PSU, so a listing with the wrong brick is a 5 Nm unit and one with **no brick is a paperweight**. Third-party PSUs are officially NO ("will damage your wheel base and void its warranty" — Fanatec FAQ, *index*). Replacement cost evidence: Boost Kit PSU **£52.25 SOLD** (UK) to £99.95 asking — price the gap before you buy. Same trap in miniature: MOZA manuals prohibit non-standard PSUs.
- **QR generation mismatch:** QR1 wheels do not fit QR2 bases and vice versa (official). Missing-QR listings shift real upgrade cost to you; Fanatec refurbs have shipped with QR1 fitted — confirm generation **in writing**. A bare Simucube base may lack the wheel-side QR kit.
- **Serial/invoice dead units:** Fanatec claims need the unchanged original invoice PDF + serial; Simagic support is serial-primary. No serial photo, or a serial that doesn't match the box — walk. **No brand-run stolen-serial registry was found** (UNVERIFIED whether makers check serials pre-purchase).
- **"Still under warranty" as a sales claim:** for Fanatec/Logitech/Thrustmaster the warranty is contractually first-buyer-only (§4b) — the claim is worth $0 unless goodwill lands. Price accordingly.
- **Open-box wrong contents:** a Micro Center open-box MOZA R12 box contained an R9 (manager made it right with an R16 discount — *index* anecdote). Verify model + serial at the counter, anywhere.
- **Too-good bundle pricing on a new-ish DD kit** with stock photos / screenshots of someone else's rig. Ask for a photo with a handwritten note + today's date next to the powered-on base, plus the serial plate.
- **"Warranty included" with no invoice** — worth $0; see §4.
- **Licence mislabelling** — "works on PS5" because a PS-button rim is attached to a PC-only base; "Xbox wheel" where only the rim is licensed. Verify the base SKU's licence on the maker's chart.
- **Old-QR silent downgrade** — refurb CSL DD example ships with QR1 while new is QR2 (Traxion, *index*): read the exact configuration, not the headline price.
- **Shipping-heavy heavy items** — rig+seat freight can exceed the used saving; local pickup is a pricing feature, not a preference.
- **Parted-out bundles missing the small box** — pedal USB cables, power supplies (MOZA/Fanatec bricks are model-specific), QR hardware, pedal heel plates. Photograph the full cable set before paying.
- **No under-load demo** — FFB faults (clipping scream, fan, drift) only appear hot. Video-call test > static photos.
- **Marketplace classics** — advance-payment/deposit asks, "my brother will ship it", gift-card/payment-app friends-and-family pressure. Platform payment or cash in person; meet where you can plug in.
- **Serial-number swap / grey imports** — MOZA/Simagic grey-market units may route warranty to the region of sale; serial photo before payment.

---

## 7. Depreciation and resale-floor logic (for sellers reading the wiki too)

- **Value cliff #1:** the moment a newer version/QR/firmware generation lands (QR1→QR2, R5 bundles repricing). Sell *before* announced refreshes.
- **Value cliff #2:** new-sale events — used asks must clear the discounted-new price minus warranty value; sellers who anchor to MSRP sit unsold.
- **What holds:** Simucube/Heusinkveld-class hardware and aluminium profile (durability + long software support; ActivePedal factory pre-owned at ~46% off new in EUR evidences even new-tech holds a floor via the factory channel — Traxion, *index*).
- **What doesn't:** entry gear-drive wheels (superseded + wear), fabric foldable rigs, last-gen VR, proprietary accessories orphaned by a QR change.
- **Practical rule (estimate):** hobby-exit recovery of ~50–65% on DD bases / ~40–60% on entry wheels bought *at street (not launch) prices* within 2 years — treat as planning guidance, not a market statistic.

---

## 8. TODO / unverified (do not publish)

- [ ] **US eBay SOLD prices** for CSL DD, MOZA R5 bundle, Simucube 2 Pro, Heusinkveld Sprint, G923 — UK sold prices captured (§2a); a US live-browser pass over eBay's Sold filter is still required. Do not present UK prices as US.
- [ ] **Transfer clauses:** MOZA, Simagic, Asetek, Simucube, Heusinkveld — no official transfer language retrieved (periods in §4a are sourced; transferability is genuinely unanswered, not an oversight).
- [ ] Fanatec new-product length: guarantee page (US 1-yr default) vs reported 3-year product-page terms — verify on the specific product page at writing time.
- [ ] MOZA PSU warranty: 12 months (support policy) vs 24 months (retailer mirror) — internal conflict unresolved.
- [ ] Simucube Pre-owned: Oct 2026 US storefront prices + settle the 14-vs-30-day return conflict at the store itself.
- [ ] Logitech refurb: which warranty (1-yr refurb vs 2-yr gaming) applies per SKU.
- [ ] Fanatec Certified Refurbished **model names** for the crawled prices (§1) — open the page and map examples properly; check QR1-vs-QR2 per listing.
- [ ] ActivePedal private-market depth — too new for a used market? State so if evidence stays thin.
- [ ] Bay Area local benchmarks: a handful of current SF Bay Marketplace/CL asking prices for G923/T300/R5 to localise §2b for the author (asking, labelled).

## 9. Sources

**Verified-live official fetch (Oct 2026):** Fanatec Consumer Guarantee (fanatec.com/us-en/fanatec-consumer-guarantee) — non-transferable clause, US 1-year default, invoice+serial requirement, country lock. Fanatec Certified Refurbished store (fanatec.com/us/en/c/certified-refurbished) — "up to 30% off… 2-year warranty" + refurb definition + prices in §1.
**Index:** Traxion — Fanatec certified store https://traxion.gg/fanatec-opens-certified-used-sim-racing-equipment-store/ ; Traxion — Simucube Pre-owned https://traxion.gg/pre-ownedsimucube-sim-racing-equipment/ ; Traxion — Simucube durability https://traxion.gg/how-simucube-creates-forever-products-sim-racing-equipment-that-lasts/ ; Traxion — Corsair honouring warranties https://traxion.gg/corsair-acknowledges-fanatecs-customer-service-failings-as-sale-concluded/ ; Tech-Insider build guide https://tech-insider.org/how-to-build-a-sim-racing-rig-2026/ ; Slickdeals/Amazon Resale G29 (30 Aug + 13 Sep 2026); MOZA US prices verified live 2026-10-02 in tier research (R5 bundle $379; HBP $99; SGP $129; HGP $149); Heusinkveld Sprint $495–599 (velocityprosims 2026, context only).
**Deep-dive pass (index unless marked):** MOZA after-sales policy https://support.mozaracing.com/en/support/solutions/articles/70000627718-after-sales-policy ; MOZA EU warranty https://eu.mozaracing.com/pages/warranty-policy ; Logitech warranty https://www.logitech.com/en-gb/tos/limited-hardware-warranty ; Thrustmaster manual mirrors (manualsdir/manuals.plus); Simucube warranty pages + SC2 user guide (granitedevices.com); Simagic manuals (manuals.plus/Shopify CDN); Asetek US Terms Feb 2025 v.3 (asetek.com); Heusinkveld T&Cs Jun 2023 (heusinkveld.com); Simucube Pre-Owned press release https://simucube.com/blogs/news/press-release-introducing-simucube-pre-owned (return-window conflict sources: simracingsetup.com, boxthislap.org, overtake.gg, traxion.gg); MOZA refurb https://us.mozaracing.com/products/moza-r3-racing-wheel-and-pedals-for-pc-refurbished + Slickdeals 2026-06-16; Logitech refurb https://www.logitech.com/en-us/shop/p/pro-racing-wheel-refurb + eBay outlet item 800090835732; wear: BoxThisLap pedal pots https://boxthislap.org/g27-g29-pedal-oscillations/ ; iFixit G29 pedals https://www.ifixit.com/Guide/How+to+Fix+Faulty+Logitech+G29+Pedals/148265 ; T300 longevity https://racingrigguide.com/blog/logitech-g29-vs-thrustmaster-t300-which-first-wheel ; Heusinkveld elastomer kit (simulation1.ca mirror); DD wear explainer https://pctechmag.com/2022/09/direct-drive-wheels-is-the-ideal-default-for-sim-racers/ ; QR1/QR2 (boostedmedia.net, simufy.com, fanatec.com official QR pages); eBay UK sold items 206218314813 / 336699301550 / 198525469979 / 198126702722; OverTake marketplace (Simucube 2 Pro asking threads 290963, 295175; marked-sold 254038 — 2023, historical); Fanatec Boost Kit FAQ https://www.fanatec.com/us/en/s/faq-boost-kit-180-third-party-power-supply-csl-dd-base ; Micro Center open-box anecdote (zleague.gg).
Carried from the earlier buying pass (pack §15, mixed live/index): channel/checklist logic, licence warnings, new-vs-used calls.
