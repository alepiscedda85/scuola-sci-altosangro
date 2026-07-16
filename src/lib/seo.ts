import { site } from '../data/site'

export type SeoData = { title: string; description: string; path: string; image?: string; noindex?: boolean }

export const seoByPath: Record<string, SeoData> = {
  '/': { title: 'Scuola Sci Alto Sangro | Lezioni a Roccaraso', description: 'Lezioni di sci e snowboard, corsi per bambini e noleggio sulle piste di Aremogna, nel comprensorio Alto Sangro – Roccaraso.', path: '/' },
  '/lezioni': { title: 'Lezioni Sci e Snowboard a Roccaraso | Alto Sangro', description: 'Lezioni private e collettive di sci e snowboard a Roccaraso, per bambini e adulti. Scopri discipline, modalità e informazioni utili.', path: '/lezioni', image: '/images/lessons.jpg' },
  '/noleggio': { title: 'Noleggio Sci e Snowboard a Roccaraso | Alto Sangro', description: 'Noleggia sci, snowboard, scarponi, casco e attrezzatura direttamente sulle piste di Aremogna a Roccaraso.', path: '/noleggio', image: '/images/rental.jpg' },
  '/chi-siamo': { title: 'Scuola Sci Alto Sangro a Roccaraso | I maestri', description: 'Conosci la Scuola Sci Alto Sangro, i maestri e i servizi per imparare e vivere la neve ad Aremogna, Roccaraso.', path: '/chi-siamo', image: '/images/about.jpg' },
  '/contatti': { title: 'Contatti Scuola Sci Alto Sangro | Aremogna', description: 'Contatta la Scuola Sci Alto Sangro per informazioni su lezioni e noleggio ad Aremogna, Roccaraso.', path: '/contatti' },
  '/privacy-policy': { title: 'Privacy Policy | Scuola Sci Alto Sangro', description: 'Informativa sul trattamento dei dati personali della Scuola Sci Alto Sangro.', path: '/privacy-policy' },
  '/cookie-policy': { title: 'Cookie Policy | Scuola Sci Alto Sangro', description: 'Informazioni sull’uso dei cookie nel sito della Scuola Sci Alto Sangro.', path: '/cookie-policy' },
  '/404': { title: 'Pagina non trovata | Scuola Sci Alto Sangro', description: 'La pagina richiesta non è disponibile.', path: '/404', noindex: true },
}

export function headMarkup(data: SeoData) {
  const url = `${site.domain}${data.path === '/' ? '/' : data.path}`
  const image = `${site.domain}${data.image ?? '/images/hero.jpg'}`
  const robots = data.noindex ? 'noindex, nofollow' : 'index, follow'
  return `<title>${data.title}</title>
<meta name="description" content="${data.description}">
<meta name="robots" content="${robots}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${data.title}">
<meta property="og:description" content="${data.description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${data.title}">
<meta name="twitter:description" content="${data.description}">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#08243b">`
}
