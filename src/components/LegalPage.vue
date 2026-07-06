<template>
  <div class="legal">
    <div class="wrap">
      <header>
        <RouterLink class="logo" to="/">ai—augmented<span>.ch</span></RouterLink>
        <RouterLink class="back" to="/">← Zurück</RouterLink>
      </header>
      <main>
        <slot />
      </main>
      <footer>© 2026 AI Augmented — Thomas Mannhart</footer>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<!-- Nicht scoped, damit die Styles auch für Slot-Inhalte gelten. -->
<style>
.legal { font-size: 17px; line-height: 1.65; }
.legal .wrap { max-width: 720px; margin: 0 auto; padding: 0 24px; }
.legal header { display: flex; justify-content: space-between; align-items: center; padding: 22px 0; }
.legal .logo { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.05rem; text-decoration: none; color: var(--ink); }
.legal .logo span { color: var(--cobalt); }
.legal header a.back { font-family: 'IBM Plex Mono', monospace; font-size: 0.8rem; color: var(--muted); text-decoration: none; }
.legal header a.back:hover { color: var(--cobalt); }
.legal main { padding: 48px 0 80px; }
.legal h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 2rem; letter-spacing: -0.02em; margin-bottom: 32px; }
.legal .stand { font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem; color: var(--muted); margin-bottom: 32px; }
.legal h1.has-stand { margin-bottom: 12px; }
.legal h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 1.15rem; margin: 32px 0 10px; }
.legal p, .legal li { color: var(--muted); margin-bottom: 12px; }
.legal ul { padding-left: 22px; }
.legal strong { color: var(--ink); font-weight: 500; }
.legal a { color: var(--cobalt); }
.legal .todo { background: #FFF6DC; border: 1px solid #E8D89A; border-radius: 6px; padding: 10px 14px; font-size: 0.85rem; color: #6B5B14; margin: 8px 0 16px; }
.legal footer { border-top: 1px solid var(--line); padding: 28px 0 40px; font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; color: var(--muted); }
</style>
