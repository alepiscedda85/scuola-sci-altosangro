# Scuola Sci Alto Sangro

Nuovo sito React prerenderizzato della Scuola Sci Alto Sangro.

## Avvio locale

```bash
nvm use
npm install
npm run dev
```

Se il terminale risponde `node: command not found` o `npm: command not found`, avvia direttamente:

```bash
zsh ./start-local.command
```

Lo script carica NVM, seleziona Node 22 e apre il server Vite.

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
