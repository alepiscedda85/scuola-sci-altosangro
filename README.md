# Scuola Sci Alto Sangro

Nuovo sito React prerenderizzato della Scuola Sci Alto Sangro.

## Avvio locale

```bash
npm install
npm run dev
```

## Verifica e build

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
npm run preview
```

Il modulo contatti non simula invii: senza `VITE_CONTACT_API_URL` mostra uno stato esplicito “non configurato”. Consultare `docs/` per audit, migrazione e deploy.
