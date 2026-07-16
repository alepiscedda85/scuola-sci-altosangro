import { Link } from 'react-router-dom'

export function BrandBadge() {
  return <Link to="/" aria-label="Scuola Sci Alto Sangro, homepage" className="absolute left-[max(1rem,calc((100vw-1180px)/2))] top-3 z-[60] flex items-center gap-3 rounded-2xl border border-white/20 bg-[#061b2d] p-1.5 pr-4 shadow-[0_14px_40px_rgba(3,18,29,.28)] transition hover:border-sun/70">
    <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white"><img src="/images/logo.svg" alt="" className="h-11 w-11 object-contain" /></span>
    <span className="hidden leading-none sm:block"><strong className="block font-display text-[11px] tracking-[.14em] text-white">SCUOLA SCI</strong><span className="mt-1 block text-[10px] font-bold tracking-[.18em] text-sun">ALTO SANGRO</span></span>
  </Link>
}
