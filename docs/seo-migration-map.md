# Mappa di migrazione SEO

| URL precedente | Status attuale | Nuova URL | Azione | Status finale | Motivo |
| --- | ---: | --- | --- | ---: | --- |
| `/` | 200 | `/` | Mantieni | 200 | Homepage strategica |
| `/lezioni` | 200 | `/lezioni` | Mantieni | 200 | Servizio strategico |
| `/noleggio` | 200 | `/noleggio` | Mantieni | 200 | Servizio strategico |
| `/chi-siamo` | 200 | `/chi-siamo` | Mantieni | 200 | Pagina istituzionale |
| `/contatti` | 200 | `/contatti` | Mantieni | 200 | Conversione |
| `/cookie-policy` | 200 | `/cookie-policy` | Mantieni e aggiorna | 200 | Documento legale |
| `/privacy-policy` | 404 | `/privacy-policy` | Crea | 200 | Documento necessario |
| `/misure-covid` | 200 | — | Rimuovi | 410 | Contenuto 2020 obsoleto, nessun equivalente attuale |
| `/*/` | 301 | `/*` | Mantieni redirect | 301 | Canonical senza slash |
| `/index.html` | non rilevato | `/` | Redirect | 301 | Duplicato homepage |

Dominio canonico: `https://www.scuolascialtosangro.it`. HTTP e non-www devono raggiungerlo in un solo 301, conservando path e query string.
