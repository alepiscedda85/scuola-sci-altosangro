# Audit del sito attuale

Audit eseguito il 16 luglio 2026 sul sito Webflow pubblico. Gli status sono stati verificati con richieste HTTP reali. La sitemap espone 7 URL.

| URL | Status | Title | Meta description | H1 | Canonical | Indexability | Contenuto | Problemi |
| --- | -----: | ----- | ---------------- | -- | --------- | ------------ | --------- | -------- |
| `/` | 200 | Scuola Sci Alto Sangro — Lezioni Sci e Snowboard Roccaraso | Presente | Creating Action & Admiration Through Brand Design | assente/non rilevato | indicizzabile | quasi vuoto | H1 demo estraneo, link Webflow/style guide, messaggio obsoleto |
| `/lezioni` | 200 | Lezioni Sci e Snowboard Roccaraso — Scuola Sci Alto Sangro | Presente | LEZIONI | non-www | indicizzabile | lezioni e listini | annualità 2021–2026 mescolate, duplicati, COVID, prezzi contraddittori |
| `/noleggio` | 200 | Noleggio Sci e Snowboard Roccaraso — Scuola Sci Alto Sangro | Presente | NOLEGGIO | non-www | indicizzabile | attrezzatura e prezzi da | placeholder inglesi, form non coerenti, LogoIpsum |
| `/chi-siamo` | 200 | Chi Siamo — Scuola Sci Alto Sangro | Presente | CHI SIAMO + I NOSTRI MAESTRI | non-www | indicizzabile | scuola e maestri | due H1, intere sezioni duplicate, dichiarazioni da confermare |
| `/contatti` | 200 | Contatti — Scuola Sci Alto Sangro | Presente | Contattaci | non-www | indicizzabile | recapiti e form | testo Lorem ipsum, form incompleto, LogoIpsum |
| `/cookie-policy` | 200 | Cookie Policy — Scuola Sci Alto Sangro | assente | Cookie Policy | non-www | indicizzabile | policy estesa | riferimenti normativi e servizi da aggiornare |
| `/misure-covid` | 200 | Misure Covid 19 — Scuola Sci Alto Sangro | non rilevata | non coerente | non-www | indicizzabile e in sitemap | misure 2020 e form demo | totalmente obsoleto, snippet di codice e contenuti demo |
| `/privacy-policy` | 404 | Not Found - Mimosa - Webflow HTML website template | assente | non rilevato | `/404` non-www | non indicizzabile | 404 | policy autonoma assente, title template |

## Risposte e redirect

- `http://www...` → HTTPS www in un passaggio.
- `https://non-www...` → HTTPS www in un passaggio.
- `http://non-www...` passa prima a HTTPS non-www e poi a www: catena di due redirect da eliminare.
- Le varianti con slash finale reindirizzano alla versione senza slash.
- Una URL inesistente restituisce 404 reale.
- I canonical delle pagine interne puntano a `https://scuolascialtosangro.it` senza www, in conflitto con il dominio finale servito.
- `robots.txt` contiene soltanto il riferimento alla sitemap e non blocca risorse.

## Asset e collegamenti

Le immagini sono ospitate sulla CDN Webflow; il sito espone JPG/PNG e SVG, senza una strategia moderna AVIF/WebP uniforme. Non sono emersi PDF dalla sitemap. Collegamenti di template (`Image Licensing`, `Changelog`, `Style Guide`) e riferimenti Webflow sono presenti in homepage.
