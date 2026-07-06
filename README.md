# AI Augmented — Website

Vue-3-Website (Vite + Vue Router) für [ai-augmented.ch](https://ai-augmented.ch): Landing-Page, Impressum und Datenschutzerklärung.

## Entwicklung

```sh
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal testen
```

## Deployment

Jeder Push auf `main` deployt automatisch via GitHub Actions auf GitHub Pages
(`.github/workflows/deploy.yml`).

Einmalige Einrichtung im Repository: **Settings → Pages → Source: „GitHub Actions"**.

Die Seite läuft dann unter `https://<user>.github.io/ai-augmented/`. Der Base-Pfad
ist in `vite.config.js` konfiguriert — bei Umstellung auf die eigene Domain
(ai-augmented.ch als Custom Domain) im Workflow `VITE_BASE=/` setzen oder die
Config anpassen.
