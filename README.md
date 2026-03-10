```markdown
# Sebi — Portfolio

Portfolio personal construit ca Single Page App (SPA) cu **React + Vite**, stilizat cu **Tailwind CSS** și animat cu **Framer Motion**.

## Live
- Website: https://iamsebbi.github.io/

## Tech stack
- React (`react`, `react-dom`)
- Vite
- Tailwind CSS (+ PostCSS / Autoprefixer)
- React Router (`react-router-dom`) — rute:
  - `/` (Home)
  - `/services/:slug` (ServiceDetail)
- Framer Motion (animații)
- Lucide React (iconițe)
- ESLint (linting)

## Project structure (pe scurt)
- `index.html` — entry HTML (root container)
- `src/main.jsx` — bootstrap React + import CSS (`styles/index.css`, `styles/fonts.css`)
- `src/App.jsx` — router + scroll-to-top la schimbarea rutei
- `src/pages/` — pagini (ex. `Home`, `ServiceDetail`)
- `src/components/` / `src/sections/` — componente/sectiuni UI
- `src/styles/` — stiluri (Tailwind + fonturi)
- `public/` — assets statice (imagini + `heroVideo.mp4`)

## Requirements
- Node.js (recomandat: versiune LTS)
- npm (sau pnpm/yarn, dar repo-ul are `package-lock.json` => npm e “default”)

## Run locally
1. Instalează dependențele:
   ```bash
   npm install
   ```

2. Pornește serverul de development:
   ```bash
   npm run dev
   ```
   Deschide URL-ul afișat de Vite (de obicei `http://localhost:5173`).

## Build & preview (prod-like)
- Build:
  ```bash
  npm run build
  ```
- Preview local pe build:
  ```bash
  npm run preview
  ```

## Lint
```bash
npm run lint
```

## Assets
În `public/` există:
- `heroVideo.mp4`
- imagini: `development.jpg`, `webdesign.jpg`, `uiUxdesign.jpg`, `creativedesign.jpg`

## Deploy
Proiectul este gândit pentru GitHub Pages (link-ul live e pe `iamsebbi.github.io`).
În mod tipic flow-ul e:
1) `npm run build`
2) publici conținutul din `dist/` pe GitHub Pages (prin GitHub Actions sau branch `gh-pages`)

Dacă vrei, îți adaptez secțiunea asta exact pe setup-ul tău (spune-mi dacă folosești Actions și cum e configurat Pages în repo).

## Contact
- GitHub: https://github.com/iamsebbi
- Email: (completează)
- LinkedIn: (completează)
```
