import { writeFile } from 'node:fs/promises'
const domain = 'https://www.scuolascialtosangro.it'
const routes = ['/', '/lezioni', '/noleggio', '/chi-siamo', '/contatti', '/privacy-policy', '/cookie-policy']
const urls = routes.map(path => `  <url><loc>${domain}${path}</loc></url>`).join('\n')
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
