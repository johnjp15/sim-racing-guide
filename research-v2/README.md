# Research v2

From-scratch research, 2026-10-09. The older `research/` folder was not read and is kept as is. Not part of the built site.

## Files

| File | Topic | Method |
|---|---|---|
| 01-wheelbases-rims.md | Wheelbases, rims, ecosystems | Web research: maker, retailer, reviewer pages |
| 02-pedals-shifters-handbrakes.md | Pedals, shifters, handbrakes | Same |
| 03-chassis-seats-motion.md | Mounting, rigs, seats, tactile, motion | Same |
| 04-displays-pc-console-audio-accessories.md | Displays, VR, PC, console, audio, button boxes | Same |
| 05-tier-builds-used-market.md | Tier 0 to 5 builds, F1 Arcade hardware, used market | Same |
| 06-games-setup-beginner-context.md | Games, setup basics, FAQ, glossary | Same |
| 07-reddit-wheelbases-rims.md | Community view | See "Reddit" below |
| 08-reddit-pedals-shifters-handbrakes.md | Community view | See "Reddit" below |
| 09-reddit-chassis-seats-tactile-motion.md | Community view | See "Reddit" below |
| 10-reddit-displays-pc-buying-advice.md | Community view | See "Reddit" below |
| 11-refresh-2026-10-vr-motion-immersion.md | Oct 2026 refresh: Pimax Dream Air, Steam Frame, Moza HMA150, 3DOF vs 6DOF, shakers, belts, wind | Web research |
| 12-reddit-2026-10-threads-read.md | r/simracing threads read directly: 28 questions, consensus, dissent, prices paid, quotes with URLs | Second agent (Muse) with a browser. Spot-checked over Reddit RSS |

## Reddit

- Goal: ground the research in r/simracing
- Result: almost no Reddit content could be read
    - reddit.com refuses automated fetches (403)
    - The PullPush archive refuses agents
    - The search tool does not return reddit.com results
    - The session's web search budget ran out partway through
    - The blocks were not worked around
- Files 07 to 10 therefore rest on other forums (GTPlanet, OC Racing forum, Simucube forum), reviewer comment sections, and recalled community consensus, each claim tagged
- Fixed 2026-10-09: file 12 holds real threads. Where 12 and the G / S claims in 07 to 10 disagree, 12 wins
- Reddit access that works: public RSS with an honest User-Agent, ~1 request per 35 s. Or a browser agent
- Still thin in 12: triple monitor models, beginner regrets, used prices, wind

## Known conflicts between files

| Item | Values seen | Used on the site |
|---|---|---|
| Moza R3 bundle | $259 / $279 PC, $319 / $339 Xbox | Ranges |
| Moza R5 bundle | $379, $399 (R5 Pro) | ~$380 |
| Fanatec CSL DD | Base $400 / $480, bundle $640 / $710 | Both, labeled |
| D-BOX G5 4-actuator kit | $5,990 to $8,249 | $6,000 to $8,250 |
| Pro-Sim H-pattern | "$1,095" was GBP | ~$1,350 to $1,550 |
| Junkyard seat | $20 to $30 (EU), $52 to $75 (US) | $50 to $75 |
| Logitech RS50 | Base $350 to $450, system $600 to $700 | Not priced per console |
| Qubic QS-210 | EUR 6,680 ex tax (11), EUR 4,000 to 5,000 + tax (12, Reddit) | EUR 6,680 |
| Qubic QS-BT1 | $1,452 to $1,830 (11), "$2,500" (12, disputed in the same thread) | $1,450 to $1,830 |
| PS VR2 | $399 (04), ~$500 (12, Reddit) | $399 |
| 6DOF entry price | $6,999 DOF Reality H6 (11), ~$4,500 + rig eRacing Lab (12) | $4,500+ |
| First shaker effects | Slip and ABS (03), RPM and shifts, avoid slip (12) | 12 |
| RTX 5090 | ">$7,000" street (12, two Reddit mentions). Not checked | "Far above list" |

## Audit, 2026-10-09

- Spend order on the site is John's call: direct drive wheelbase, then load cell brake, then everything else
- Checked on the web during the audit
    - Pimax Dream Air and Dream Air SE, base-station versions: base stations and controllers are not in the box. One SteamVR Base Station 2.0 listed at $458 at Knox Labs; a third-party estimate says ~$300 to $350 new
        - https://www.knoxlabs.com/products/pimax-dream-air-ultra-lightweight-pcvr-headset
        - https://eu.pimax.com/blogs/highlights/pimax-dream-air-lighthouse-version-who-should-buy-it-and-how-much-do-you-actually-save
    - AOC CQ32G4VE (the triple pick from file 12): 31.5", 1440p, VA, 1500R curve. Refresh listed as 150 to 180 Hz, the Reddit post said 144
        - https://directcomputers.co.uk/products/aoc-31-5-va-monitor-curved-cq32g4ve
        - https://multitronic.fi/en/products/4390249
    - Moza R5 Pro bundle: 6 Nm, 21-bit encoder, ES Lite wheel, SR-P Lite2 pedals with Hall sensors, two pedals, $399. Not a load cell. File 12 says "better load-cell pedals": wrong on the sensor
        - https://boxthislap.org/moza-r5-pro-bundle-review/
        - https://simxpro.com/pages/moza-r5-vs-r5-pro-which-racing-bundle-should-you-choose
- Fixed on the site, were wrong or contradicted another page
    - Dream Air prices read as "with base stations". They are extra
    - Tier 1 "Tier 2 costs little more". It costs double
    - Tier 3 brake "60 to 100 kg" vs Pedals "nobody brakes above 60 to 80 kg"
    - Tier 3 "better than the venue's" vs "close to what F1 Arcade uses". Now "match or beat" (file 05)
    - Tier 5 "seat mover" was the NLR Motion Plus, which moves the whole rig (file 03)
    - Tier 0 "setup 10 to 15 min each time" was the first-assembly time in file 05
    - VRS DirectForce Pro (20 Nm) sat in the 25 Nm+ row
    - Console at Tier 4: PS VR2 with Gran Turismo 7 was missing
- Removed as noise: weight estimates on tier pages, desk depth and box size estimates, single-owner anecdotes, research notes in page text ("thin data", "sources disagree")

## Listings and buy links, 2026-10-09

- Example builds on tier pages and "Where to buy" tables on component pages use live listings
- Method: the stores' public Shopify catalogs (`/products.json`, `/products/<handle>.js`) give title, price and stock. Read for Moza US, Apex Sim Racing, Sim-Lab US, Trak Racer, RigMetal, Simagic, Next Level Racing US, GT Omega, Podium1, Sim Motion, Simsonn, RaceKraft, ButtKicker, Fosi, Sennheiser, Simucube, eRacing Lab, Knox Labs
- Other prices: web search the same day (Best Buy, Amazon, Parts Express, SHH, Staples). Best Buy and Amazon pages block direct reads, so those prices rest on the search result
- All 211 external links were requested once: 199 returned 200, 12 returned a bot-check page (Best Buy, Etsy, Micro Center, Cube Controls, Sparco, GPR Direct, Crew Chief, Amazon.de, one Simagic rate limit). None returned 404
- Not verified by opening the listing: Best Buy prices (Moza R5 bundle $349.99, Samsung G50F $249.99), Playseat Trophy price, DOF Reality and SimXperience prices
- Changed against older files: Moza R9 V3 $299 and R12 V2 $399 (were $329 / $429), Sim-Lab GT1 Evo $449 and P1X Ultimate $999 in the US store, D-BOX G5 4250i $5,990 new at Trak Racer (a $4,990 listing was open box), Qubic QS-210 / QS-220 $8,671 / $11,330 at Podium1, RaceKraft wind kit $650, Simsonn Plus X from $192 on its own store
- Component photos are maker product images (Simucube, Sim-Lab, Moza, Trak Racer, Apex, Sennheiser), not freely licensed. Source URLs are in a comment under each image

## Weakest data

- Used prices: nearly all estimates. No eBay sold listings were read
- Footprints and weights marked "est"
- Accessory, amp and budget headset prices
- Anything tagged L, G or "est" in the files
