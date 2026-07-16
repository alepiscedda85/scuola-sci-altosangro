import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { nav, site } from '../../data/site'

export function Footer() {
  return <footer className="border-t border-ink/10 bg-white text-ink">
    <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><img src="/images/logo.svg" alt="Scuola Sci Alto Sangro" className="h-16 w-auto" /><p className="mt-5 max-w-sm text-ink/65">Lezioni di sci e snowboard e noleggio attrezzatura sulle piste di Aremogna, nel comprensorio Alto Sangro – Roccaraso.</p></div>
      <div><h2 className="font-display text-lg font-bold">Esplora</h2><ul className="mt-4 space-y-3">{nav.slice(1).map(i => <li key={i.to}><Link className="text-ink/70 transition hover:text-pine" to={i.to}>{i.label}</Link></li>)}</ul></div>
      <div><h2 className="font-display text-lg font-bold">Contatti</h2><ul className="mt-4 space-y-4 text-sm text-ink/70"><li className="flex gap-3"><MapPin size={18} className="shrink-0 text-pine" />{site.address}</li><li><a className="flex gap-3 transition hover:text-pine" href={`tel:${site.phoneHref}`}><Phone size={18} className="text-pine" />{site.phone}</a></li><li><a className="flex gap-3 break-all transition hover:text-pine" href={`mailto:${site.email}`}><Mail size={18} className="shrink-0 text-pine" />{site.email}</a></li></ul></div>
    </div>
    <div className="border-t border-ink/10 bg-snow"><div className="container-site flex flex-col gap-3 py-6 text-xs text-ink/55 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Scuola Sci Alto Sangro · P.IVA {site.vat}</p><p><Link to="/privacy-policy" className="transition hover:text-pine">Privacy</Link> · <Link to="/cookie-policy" className="transition hover:text-pine">Cookie</Link></p></div></div>
  </footer>
}
