# Coffee Atlas Taiwan｜台灣精品咖啡圖鑑

Mobile-first cafe discovery MVP, built with React + Vite.

## Features
- 26 starter listings from the conversation (11 Asia Top 100, 4 World Top 100)
- Region, ranking, keyword and specialty filters
- Ranking distinction: global, Asia, candidate, competition credentials
- Favorites and visited checkboxes, saved locally on your device
- Google Maps search links and official ranking references
- Responsive layouts

## Start
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```
Deploy on Vercel with `Framework Preset: Vite`, `Build Command: npm run build`, `Output Directory: dist`.

## Important data disclaimer
Seed rankings are based on previous conversation and **have not been independently verified** against complete official records. Before publicly promoting ranking claims, verify the 2026 lists and award histories, update `src/data.js`, and ideally add per-entry source citations. Images are deliberate graphic placeholders, not photographs of the listed cafes. The Google Maps link is a search query and not a verified address. Local storage is device-specific and doesn't sync.

## Data maintenance
Edit `src/data.js`: `global` and `asia` are ranks (numeric), `null` means not confirmed / not ranked. `extra` identifies competition provenance, not cafe rankings. Do not assume competition wins by founders are the shop's awards.

Sources: [Global Top 100](https://theworlds100bestcoffeeshops.com/top-100-coffee-shops/) | [Asia Top 100](https://theworlds100bestcoffeeshops.com/top-100-coffee-shops-asia/) | [Taiwan candidates](https://theworlds100bestcoffeeshops.com/asia-pacific-100-best-coffee-shops/taiwan/) | [World Coffee Championships](https://wcc.coffee/)
