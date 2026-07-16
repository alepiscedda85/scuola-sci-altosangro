import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { nav, site } from '../../data/site'

export function Footer() {
  return <footer className="bg-[#061b2d] text-white">
    <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><img src="/images/logo.svg" alt="" className="h-16 w-auto" /><p className="mt-5 max-w-sm text-white/65">Lezioni di sci e snowboard e noleggio attrezzatura sulle piste di Aremogna, nel comprensorio Alto Sangro – Roccaraso.</p></div>
      <div><h2 className="font-display text-lg font-bold">Esplora</h2><ul className="mt-4 space-y-3">{nav.slice(1).map(i => <li key={i.to}><Link className="text-white/70 hover:text-sun" to={i.to}>{i.label}</Link></li>)}</ul></div>
      <div><h2 className="font-display text-lg font-bold">Contatti</h2><ul className="mt-4 space-y-4 text-sm text-white/70"><li className="flex gap-3"><MapPin size={18} className="shrink-0 text-sun" />{site.address}</li><li><a className="flex gap-3 hover:text-white" href={`tel:${site.phoneHref}`}><Phone size={18} className="text-sun" />{site.phone}</a></li><li><a className="flex gap-3 break-all hover:text-white" href={`mailto:${site.email}`}><Mail size={18} className="shrink-0 text-sun" />{site.email}</a></li></ul></div>
    </div>
    <div className="border-t border-white/10"><div className="container-site flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Scuola Sci Alto Sangro · P.IVA {site.vat}</p><p><Link to="/privacy-policy" className="hover:text-white">Privacy</Link> · <Link to="/cookie-policy" className="hover:text-white">Cookie</Link></p></div></div>
  </footer>
}
