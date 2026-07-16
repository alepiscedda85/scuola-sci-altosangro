# Architettura

## Stack

React 18, Vite, TypeScript, React Router, Tailwind CSS, Framer Motion, React Hook Form, Zod, Lucide React, Vitest/Testing Library e Playwright.

## Prerendering scelto

È stato scelto un prerendering controllato in fase di build. Dopo il bundle Vite, `scripts/prerender.mjs` carica l’entry SSR tramite Vite, renderizza ogni route pubblica con `StaticRouter` e genera un `index.html` completo nella directory corrispondente. Il browser esegue poi hydration con `BrowserRouter`.

Questa soluzione mantiene un progetto Vite semplice, genera contenuti e heading nell’HTML iniziale e non dipende da JavaScript per l’indicizzazione. Titoli, description, canonical, Open Graph e Twitter Card sono prodotti dalla mappa centralizzata `src/lib/seo.ts`.

Route prerenderizzate: `/`, `/lezioni`, `/noleggio`, `/chi-siamo`, `/contatti`, `/privacy-policy`, `/cookie-policy`; viene inoltre generato `/404.html` con `noindex`.

## Deploy e fallback

La cartella `dist/` va pubblicata come sito statico con la configurazione Nginx fornita. Solo le route note vengono servite; non esiste un fallback indiscriminato verso `index.html`. Le URL sconosciute producono 404 reale tramite `error_page`.

## Limitazioni

Ogni nuova route pubblica deve essere aggiunta alla configurazione del router, allo script di prerender, alla mappa SEO, alla sitemap e alla allowlist Nginx. Il modulo contatti richiede un endpoint esterno configurato con `VITE_CONTACT_API_URL`.
