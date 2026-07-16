import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const routes = ['/', '/lezioni', '/noleggio', '/chi-siamo', '/contatti', '/privacy-policy', '/cookie-policy', '/404']
const { render, seoByPath, headMarkup } = await import('../.prerender/entry-server.js')
const template = await readFile(resolve('dist/index.html'), 'utf8')

for (const route of routes) {
  const html = render(route)
  const page = template.replace('<!--app-head-->', headMarkup(seoByPath[route])).replace('<!--app-html-->', html)
  if (route === '/') await writeFile(resolve('dist/index.html'), page)
  else if (route === '/404') await writeFile(resolve('dist/404.html'), page)
  else { const dir = resolve(`dist${route}`); await mkdir(dir, { recursive: true }); await writeFile(resolve(dir, 'index.html'), page) }
}
await rm(resolve('.prerender'), { recursive: true, force: true })
