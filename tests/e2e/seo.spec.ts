import { expect, test } from '@playwright/test'

const routes = ['/', '/lezioni', '/noleggio', '/chi-siamo', '/contatti', '/privacy-policy', '/cookie-policy']

for (const route of routes) test(`${route} has valid SEO shell`, async ({ page }) => {
  const response = await page.goto(route)
  expect(response?.status()).toBe(200)
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page).toHaveTitle(/Scuola Sci Alto Sangro|Alto Sangro/)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/www\.scuolascialtosangro\.it\//)
  await expect(page.locator('img:not([alt])')).toHaveCount(0)
})

test('SEO assets and source are clean', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml'); expect(sitemap.ok()).toBeTruthy()
  const xml = await sitemap.text(); expect(new Set(xml.match(/<loc>.*?<\/loc>/g)).size).toBe(7); expect(xml).not.toContain('misure-covid')
  const robots = await request.get('/robots.txt'); expect(robots.ok()).toBeTruthy(); expect(await robots.text()).toContain('/sitemap.xml')
  const home = await request.get('/'); const source = await home.text()
  expect(source).not.toContain('Creating Action & Admiration Through Brand Design')
  expect(source).not.toMatch(/Green Pass|covid-19/i)
  expect(source).toContain('application/ld+json')
})
