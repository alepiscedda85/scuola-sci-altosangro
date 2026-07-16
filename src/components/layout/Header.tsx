import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav } from '../../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 bg-ink/15 text-white backdrop-blur-sm">
    <a href="#main" className="absolute left-4 top-3 -translate-y-20 rounded bg-sun px-4 py-2 font-bold text-ink focus:translate-y-0">Vai al contenuto</a>
    <div className="container-site flex min-h-20 items-center justify-between">
      <Link to="/" aria-label="Scuola Sci Alto Sangro, homepage"><img src="/images/logo.svg" alt="Scuola Sci Alto Sangro" className="h-14 w-auto" /></Link>
      <button className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/40 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Chiudi menu' : 'Apri menu'}>{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" aria-label="Navigazione principale" className={`${open ? 'flex' : 'hidden'} absolute left-4 right-4 top-20 flex-col gap-1 rounded-2xl bg-ink p-4 shadow-lift md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0 md:shadow-none`}>
        {nav.map(item => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-white/10 ${isActive ? 'bg-white text-ink hover:bg-white' : ''}`} end={item.to === '/'}>{item.label}</NavLink>)}
        <Link to="/contatti" className="mt-2 rounded-full bg-sun px-5 py-3 text-center text-sm font-bold text-ink md:ml-3 md:mt-0">Prenota</Link>
      </nav>
    </div>
  </header>
}
