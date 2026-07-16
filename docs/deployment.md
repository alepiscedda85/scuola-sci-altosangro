# Deploy

1. Configurare `VITE_CONTACT_API_URL` solo quando il backend è disponibile.
2. Eseguire `npm ci`, quindi `npm run build`.
3. Copiare `dist/` in `/usr/share/nginx/html`.
4. Installare i file in `deploy/nginx/` nella configurazione Nginx, aggiungendo certificati TLS e percorsi specifici dell’infrastruttura.
5. Eseguire `nginx -t`, ricaricare il servizio e verificare status/redirect con curl.

La configurazione serve esclusivamente route prerenderizzate e restituisce 404 reale per URL sconosciute. Il redirect del dominio preserva path e query string attraverso `$request_uri`.
