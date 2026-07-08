import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Volle Site-URL inkl. Base-Pfad, konfiguriert in vite.config.js.
const SITE_URL = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/+$/, '')

const DEFAULT_TITLE = 'AI Augmented — AI-Beratung für Software-Teams in Zürich'
const DEFAULT_DESCRIPTION =
  'AI-Beratung für Entwicklerteams, KMU und Software-Architekten: Workshops, AI-Architektur-Reviews und Sparring — pragmatisch, hands-on, messbar. Zürich & Deutschschweiz.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
      },
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImpressumView.vue'),
      meta: {
        title: 'Impressum — AI Augmented',
        description: 'Impressum von AI Augmented (Thomas Mannhart), Zürich.',
        noindex: true,
      },
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: () => import('../views/DatenschutzView.vue'),
      meta: {
        title: 'Datenschutzerklärung — AI Augmented',
        description: 'Datenschutzerklärung von ai-augmented.ch.',
        noindex: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

function setMeta(selector, create, content) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  return el
}

function metaByName(name, content) {
  return setMeta(`meta[name="${name}"]`, () => {
    const el = document.createElement('meta')
    el.setAttribute('name', name)
    return el
  }, content)
}

function metaByProperty(property, content) {
  return setMeta(`meta[property="${property}"]`, () => {
    const el = document.createElement('meta')
    el.setAttribute('property', property)
    return el
  }, content)
}

router.afterEach((to) => {
  const title = to.meta.title ?? DEFAULT_TITLE
  const description = to.meta.description ?? DEFAULT_DESCRIPTION
  const url = SITE_URL + (to.path === '/' ? '/' : to.path)

  document.title = title
  metaByName('description', description)
  metaByProperty('og:title', title)
  metaByProperty('og:description', description)
  metaByProperty('og:url', url)
  metaByName('twitter:title', title)
  metaByName('twitter:description', description)

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)

  const robots = document.head.querySelector('meta[name="robots"]')
  if (to.meta.noindex) {
    metaByName('robots', 'noindex')
  } else if (robots) {
    robots.remove()
  }
})

export default router
