# Projekt-Konventionen

## Git & Commits

- **Autor jedes Commits:** `Thomas Mannhart <thomas@mannhart.ai>`.
- **Keine KI-Attribution:** Commit-Messages, PR-Titel und PR-Beschreibungen
  enthalten **niemals** Hinweise auf Claude, Anthropic oder ein KI-Tool
  (keine `Co-Authored-By: Claude`-Zeilen, keine „Generated with"-Hinweise,
  keine Session-Links).
- Entwickelt wird auf Feature-Branches; gemerged wird nach `main`.

## Projekt

Vue-3-Website (Vite + Vue Router) für ai-augmented.ch — Landing-Page,
Impressum und Datenschutz. Deployment auf GitHub Pages via
`.github/workflows/deploy.yml` bei Push auf `main`.

Befehle:

```sh
npm install
npm run dev      # Dev-Server
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal testen
```
