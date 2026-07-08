<template>
  <div class="wrap">
    <header>
      <RouterLink class="logo" to="/">ai—augmented<span>.ch</span></RouterLink>
      <nav aria-label="Hauptnavigation">
        <a href="#angebot">Angebot</a>
        <a href="#ueber">Über mich</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>

    <main>
    <section class="hero" style="border-top:none;">
      <div>
        <div class="eyebrow">AI-Beratung für Software-Teams · Zürich</div>
        <h1>Euer Team kann mit AI mehr. <em>Zeigen wir es.</em></h1>
        <p class="lead">Ich helfe Entwicklerteams, Firmen und Software-Architekten, AI-Tools und -Workflows so einzuführen, dass messbar bessere Software schneller entsteht — nicht nur Demos.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="#kontakt">Kostenloses Erstgespräch</a>
          <a class="btn btn-ghost" href="#angebot">Was ich anbiete</a>
        </div>
      </div>

      <div class="diff-card" aria-label="Vorher-Nachher-Vergleich als Code-Diff">
        <div class="diff-bar">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span>team_workflow.diff</span>
        </div>
        <div class="diff-body">
          <div class="diff-line ctx">@@ euer Entwicklungsalltag @@</div>
          <div class="diff-line del">- AI-Tools lizenziert, kaum genutzt</div>
          <div class="diff-line del">- jeder promptet auf eigene Faust</div>
          <div class="diff-line del">- Reviews bremsen, Doku veraltet</div>
          <div class="diff-line add">+ Team-Standards für AI-gestütztes Arbeiten</div>
          <div class="diff-line add">+ Agents in CI, Reviews &amp; Refactorings</div>
          <div class="diff-line add">+ Architektur, die AI-ready ist</div>
        </div>
        <div class="diff-caption">Der Unterschied zwischen «wir haben Copilot» und «wir arbeiten AI-augmented».</div>
      </div>
    </section>

    <section id="angebot">
      <div class="kicker">Angebot</div>
      <h2>Drei Wege, wie wir zusammenarbeiten</h2>
      <div class="cards">
        <div class="card">
          <span class="tag">Workshop · 1–2 Tage</span>
          <h3>AI-Enablement fürs Team</h3>
          <p>Hands-on-Training direkt in eurer Codebase: Prompting-Patterns, Agents, Tooling-Setup und Team-Standards, die nach dem Workshop bleiben.</p>
        </div>
        <div class="card">
          <span class="tag">Review · 2–4 Wochen</span>
          <h3>AI-Architektur-Review</h3>
          <p>Wo gehören LLMs in eure Systemlandschaft — und wo nicht? Bewertung von Use Cases, Risiken, Kosten und ein konkreter Umsetzungsplan.</p>
        </div>
        <div class="card">
          <span class="tag">Sparring · laufend</span>
          <h3>Begleitung &amp; Sparring</h3>
          <p>Regelmässiges Sparring für Engineering Leads und Architekten: Entscheidungen absichern, Trends einordnen, Momentum halten.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="kicker">Für wen</div>
      <h2>Für Teams, die liefern müssen</h2>
      <div class="audience">
        <div class="aud">
          <strong>Entwicklerteams</strong>
          <span>die AI-Tools produktiv statt punktuell einsetzen wollen.</span>
        </div>
        <div class="aud">
          <strong>Firmen &amp; KMU</strong>
          <span>die wissen wollen, wo AI in ihrer Software-Entwicklung echten Return bringt.</span>
        </div>
        <div class="aud">
          <strong>Software-Architekten</strong>
          <span>die AI-Komponenten sauber und wartbar in bestehende Systeme integrieren.</span>
        </div>
      </div>
    </section>

    <section id="ueber">
      <div class="kicker">Über mich</div>
      <div class="about-grid">
        <h2 style="margin-bottom:0;">Thomas Mannhart</h2>
        <div>
          <p>Professional AI Engineer aus Zürich. Ich entwerfe und baue massgeschneiderte AI-Lösungen für Probleme, die ohne AI bisher unlösbar oder extrem aufwendig waren. Bei bbv Software Services habe ich mit meinem Team den Swiss AI Hub aufgebaut — eine AI-Plattform für Organisationen jeder Grösse.</p>
          <p>Meine Leidenschaft: den AI-augmented Development Process in Teams bringen — keine Folien-Beratung, sondern Arbeit in eurem Code, mit euren Leuten, an euren echten Problemen. Mein Wissen gebe ich auch als Dozent an der FHNW (Fachhochschule Nordwestschweiz) weiter.</p>
          <p>Basis: Zürich. Einsätze in der ganzen Deutschschweiz, remote oder vor Ort. Mehr über mich: <a href="https://mannhart.ai" style="color:var(--cobalt);">mannhart.ai</a></p>
        </div>
      </div>
    </section>

    <section id="kontakt" class="final-cta">
      <div class="kicker">Kontakt</div>
      <h2>30 Minuten, die sich lohnen: Erstgespräch vereinbaren</h2>
      <div class="cta-row">
        <a class="btn btn-primary" href="mailto:thomas@mannhart.ai?subject=Erstgespräch%20AI%20Augmented">E-Mail schreiben</a>
      </div>
      <p class="note">thomas@mannhart.ai — Wir schauen uns euren Kontext an, ich sage euch ehrlich, ob und wie ich helfen kann. Kein Pitch-Deck, kein Verkaufsdruck.</p>
    </section>
    </main>

    <footer>
      <div>© 2026 AI Augmented — Thomas Mannhart</div>
      <div>
        <RouterLink to="/impressum">Impressum</RouterLink> ·
        <RouterLink to="/datenschutz">Datenschutz</RouterLink>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

/* Header */
header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 22px 0;
}
.logo {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700; font-size: 1.05rem; letter-spacing: -0.01em;
  text-decoration: none; color: var(--ink);
}
.logo span { color: var(--cobalt); }
header nav a {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem; color: var(--muted); text-decoration: none;
  margin-left: 22px;
}
header nav a:hover, header nav a:focus-visible { color: var(--cobalt); }

/* Hero */
.hero {
  display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px;
  align-items: center; padding: 72px 0 88px;
}
.eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--cobalt); margin-bottom: 18px;
}
h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700; font-size: clamp(2.1rem, 4.6vw, 3.3rem);
  line-height: 1.08; letter-spacing: -0.025em; margin-bottom: 22px;
}
h1 em { font-style: normal; color: var(--cobalt); }
.hero p.lead { color: var(--muted); font-size: 1.08rem; max-width: 46ch; margin-bottom: 32px; }
.cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
.btn {
  display: inline-block; text-decoration: none;
  font-family: 'Space Grotesk', sans-serif; font-weight: 500;
  padding: 14px 26px; border-radius: 6px; font-size: 1rem;
  transition: transform 120ms ease, box-shadow 120ms ease;
}
.btn-primary { background: var(--cobalt); color: #fff; box-shadow: 0 2px 0 rgba(16,21,26,0.25); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 14px rgba(47,75,255,0.35); }
.btn-ghost { color: var(--ink); border: 1.5px solid var(--line); background: transparent; }
.btn-ghost:hover { border-color: var(--ink); }

/* Signature: the diff card */
.diff-card {
  background: var(--card); border: 1px solid var(--line); border-radius: 10px;
  box-shadow: 0 14px 40px rgba(16,21,26,0.08);
  overflow: hidden;
  font-family: 'IBM Plex Mono', monospace; font-size: 0.82rem;
}
.diff-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 11px 16px; border-bottom: 1px solid var(--line);
  color: var(--muted); font-size: 0.74rem;
}
.dot { width: 10px; height: 10px; border-radius: 50%; background: var(--line); }
.diff-body { padding: 14px 0 18px; }
.diff-line { padding: 3px 18px; white-space: pre-wrap; }
.diff-line.del { background: var(--diff-del-bg); color: var(--diff-del); text-decoration: line-through; text-decoration-thickness: 1px; }
.diff-line.add { background: var(--diff-add-bg); color: var(--diff-add); }
.diff-line.ctx { color: var(--muted); }
.diff-caption {
  border-top: 1px solid var(--line); padding: 12px 18px;
  font-family: 'IBM Plex Sans', sans-serif; font-size: 0.82rem; color: var(--muted);
}

/* Sections */
section { padding: 72px 0; border-top: 1px solid var(--line); }
.kicker {
  font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted);
  margin-bottom: 14px;
}
h2 {
  font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2.1rem); letter-spacing: -0.02em;
  margin-bottom: 36px; max-width: 24ch;
}
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card {
  background: var(--card); border: 1px solid var(--line); border-radius: 10px;
  padding: 26px 24px;
}
.card h3 {
  font-family: 'Space Grotesk', sans-serif; font-weight: 500;
  font-size: 1.12rem; margin-bottom: 10px;
}
.card p { color: var(--muted); font-size: 0.95rem; }
.card .tag {
  display: inline-block; font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem; color: var(--cobalt); border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 10px; margin-bottom: 14px;
}

/* Audience */
.audience { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.aud {
  border-left: 3px solid var(--cobalt); padding: 4px 0 4px 18px;
}
.aud strong { font-family: 'Space Grotesk', sans-serif; font-weight: 500; display: block; margin-bottom: 4px; }
.aud span { color: var(--muted); font-size: 0.95rem; }

/* About */
.about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; align-items: start; }
.about-grid p { color: var(--muted); margin-bottom: 14px; }

/* CTA */
.final-cta { text-align: left; }
.final-cta h2 { max-width: 30ch; }
.note {
  font-size: 0.85rem; color: var(--muted); margin-top: 18px; max-width: 52ch;
}

footer {
  border-top: 1px solid var(--line); padding: 28px 0 40px;
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; color: var(--muted);
}
footer a { color: var(--muted); }

@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; padding: 40px 0 56px; gap: 36px; }
  .cards, .audience { grid-template-columns: 1fr; }
  .about-grid { grid-template-columns: 1fr; gap: 20px; }
  section { padding: 52px 0; }
  header nav a { margin-left: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover { transform: none; }
}
</style>
