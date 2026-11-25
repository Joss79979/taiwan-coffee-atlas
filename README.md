# Coffee Atlas Taiwan｜台灣精品咖啡圖鑑

Mobile-first cafe discovery MVP, built with React + Vite.

## Features
- 27 distinct café profiles, with 11 in the 2026 Asia-Pacific Top 100 and 4 in the 2026 World Top 100
- Region, ranking, keyword and specialty filters
- Per-location evidence for published rankings, historic editorial lists, candidate listings, and competition results
- Favorites and visited checkboxes, saved locally on your device
- Google Maps search links, verified source references, and attributed cover images
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

## Editorial maintenance

See `src/data.js` for the audited sources, source date, award scope, and storefront names. The 2026 global and Asia-Pacific rankings come from the organizer. Historic Big 7 Travel lists are editorial rankings. FLTR selections are unranked. Competition results name the award recipient. Rufous's original shop and second shop have separate profiles.

Cover photography is attributed on the site. The Simple Kaffa flagship and Fika Fika Cafe storefront photos are provided by the Taiwan Visitors Association through the Open Government Data License v1. Generic coffee photography from Unsplash is labeled as illustrative. Google Maps links search for each shop by name. Favorites and visit history remain device-specific.
