import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ButtonLink({ to, children, secondary = false }: { to: string; children: React.ReactNode; secondary?: boolean }) {
  const style = secondary ? 'border border-white/40 bg-white/10 text-white hover:bg-white hover:text-ink' : 'bg-sun text-ink hover:bg-white'
  return <Link to={to} className={`inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${style}`}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>
}
