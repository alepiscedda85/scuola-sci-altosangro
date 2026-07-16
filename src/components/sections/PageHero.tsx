import { useRef } from 'react'
import { useGsapPageHero } from '../../hooks/useGsapMotion'

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  const heroRef = useRef<HTMLElement>(null)
  useGsapPageHero(heroRef)
  return <section ref={heroRef} className="relative flex min-h-[66vh] items-end overflow-hidden bg-ink pb-16 pt-36 text-white lg:pb-24">
    <img src={image} alt="" className="page-hero-image absolute inset-0 h-full w-full object-cover will-change-transform" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
    <div className="page-hero-copy container-site relative"><p className="eyebrow !text-sun">{eyebrow}</p><h1 className="display mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-8xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{text}</p></div>
  </section>
}
