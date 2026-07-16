import { ArrowDown, Baby, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/common/ButtonLink'
import { BrandBadge } from '../components/common/BrandBadge'
import { SectionHeading } from '../components/common/SectionHeading'
import { JsonLd } from '../components/seo/JsonLd'
import { StoryJourney } from '../components/sections/StoryJourney'
import { disciplines } from '../data/disciplines'
import { site } from '../data/site'
import { useGsapHomeStory } from '../hooks/useGsapMotion'
import '../styles/story.css'

export function HomePage() {
  const storyRef = useRef<HTMLDivElement>(null)
  useGsapHomeStory(storyRef)
  const structured = { '@context': 'https://schema.org', '@type': ['LocalBusiness', 'SportsActivityLocation'], name: site.name, url: `${site.domain}/`, image: `${site.domain}/images/hero.jpg`, telephone: site.phone, email: site.email, address: { '@type': 'PostalAddress', streetAddress: 'Via Aremogna s.n.c.', postalCode: '67037', addressLocality: 'Roccaraso', addressRegion: 'AQ', addressCountry: 'IT' }, areaServed: 'Alto Sangro – Roccaraso' }
  return <div ref={storyRef}>
    <JsonLd data={structured} />
    <BrandBadge />
    <section className="story-hero relative flex min-h-screen items-end overflow-hidden bg-ink pb-12 pt-36 text-white lg:pb-20">
      <img src="/images/hero.jpg" alt="Sciatore sulle piste innevate del comprensorio Alto Sangro" className="story-hero-image absolute inset-0 h-full w-full object-cover will-change-transform" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/75 to-transparent" />
      <div className="story-hero-copy container-site relative">
        <p className="eyebrow !text-sun">Aremogna · Roccaraso</p>
        <h1 className="display mt-4 max-w-5xl text-5xl sm:text-7xl lg:text-[6.8rem]">La montagna.<br /><span className="text-sun">Il tuo ritmo.</span></h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">Lezioni di sci e snowboard per ogni livello, maestri qualificati e noleggio direttamente sulle piste dell’Alto Sangro.</p>
        <div className="mt-8 flex flex-wrap gap-3"><ButtonLink to="/lezioni">Scopri le lezioni</ButtonLink><ButtonLink to="/noleggio" secondary>Noleggia l’attrezzatura</ButtonLink></div>
        <a href="#scuola" className="story-scroll-cue mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"><ArrowDown size={18} /> Esplora la scuola</a>
      </div>
    </section>

    <section id="scuola" className="section-pad mountain-grid bg-snow"><div className="container-site grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end"><SectionHeading eyebrow="Sciare, davvero" title="Impara sulla neve. Porta a casa l’emozione." text="La Scuola Sci Alto Sangro accoglie adulti e bambini ad Aremogna. Lezioni individuali o in gruppo, dal primo approccio alla ricerca di una tecnica più evoluta." /><div className="motion-card-grid grid grid-cols-2 gap-3"><div className="rounded-3xl bg-ink p-6 text-white"><Sparkles className="text-sun" /><p className="mt-10 text-xl font-bold">Percorsi per ogni livello</p></div><div className="rounded-3xl bg-sun p-6 text-ink"><ShieldCheck /><p className="mt-10 text-xl font-bold">Sicurezza e progressione</p></div></div></div></section>

    <StoryJourney />

    <section className="section-pad bg-ink text-white"><div className="container-site"><SectionHeading eyebrow="Disciplina e libertà" title="Scegli la tua traccia" text="Dalle prime curve allo snowboard, troviamo insieme il percorso più adatto alla tua esperienza." light /><div className="motion-card-grid mt-12 grid gap-5 md:grid-cols-2">{disciplines.map((d, i) => <article key={d.name} className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] ${i === 0 ? 'md:col-span-2 md:min-h-[480px]' : ''}`}><img src={d.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 sm:p-10"><p className="text-sm font-bold text-sun">0{i + 1}</p><h3 className="mt-2 font-display text-3xl font-bold">{d.name}</h3><p className="mt-3 max-w-xl text-white/75">{d.description}</p></div></article>)}</div></div></section>

    <section className="section-pad bg-glacier"><div className="container-site grid gap-6 md:grid-cols-2"><article className="overflow-hidden rounded-[2rem] bg-white shadow-lift"><img src="/images/lessons.jpg" alt="Lezione di sci sulle piste" loading="lazy" className="aspect-[16/10] w-full object-cover" /><div className="p-8"><p className="eyebrow">Uno a uno</p><h2 className="mt-3 font-display text-3xl font-bold">Lezioni private</h2><p className="mt-4 text-ink/65">55 minuti con un maestro dedicato. Il percorso ideale per progredire con attenzione individuale.</p><Link to="/lezioni#private" className="mt-6 inline-block font-bold underline decoration-sun decoration-4 underline-offset-4">Come funzionano</Link></div></article><article className="overflow-hidden rounded-[2rem] bg-sun shadow-lift"><img src="/images/families.jpg" alt="Bambini al campo scuola sulla neve" loading="lazy" className="aspect-[16/10] w-full object-cover" /><div className="p-8"><p className="eyebrow !text-ink/60">Insieme</p><h2 className="mt-3 font-display text-3xl font-bold">Bambini e famiglie</h2><p className="mt-4 text-ink/70">Gruppi per età e livello, campetto scuola e tappeto mobile gratuito per gli allievi alle prime esperienze.</p><Link to="/lezioni#group" className="mt-6 inline-block font-bold underline decoration-white decoration-4 underline-offset-4">Scopri le collettive</Link></div></article></div></section>

    <section className="section-pad bg-white"><div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center"><div className="relative"><img src="/images/rental.jpg" alt="Attrezzatura da sci disponibile per il noleggio" loading="lazy" className="rounded-[2rem] shadow-lift" /><div className="absolute -bottom-5 -right-2 rounded-2xl bg-sun px-5 py-4 font-display text-xl font-bold sm:right-8">Direttamente in pista</div></div><div><SectionHeading eyebrow="Noleggio" title="Pronti, dalla prima discesa" text="Sci, snowboard, scarponi e casco. Il team del noleggio ti aiuta a scegliere l’attrezzatura in base al tuo livello, direttamente presso la scuola." /><div className="mt-8"><ButtonLink to="/noleggio">Scopri il noleggio</ButtonLink></div></div></div></section>

    <section className="bg-pine py-16 text-white"><div className="container-site flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div className="flex items-start gap-4"><MapPin className="mt-1 shrink-0 text-sun" /><div><p className="eyebrow !text-sun">Dove siamo</p><h2 className="mt-2 font-display text-3xl font-bold">Nel cuore dell’Aremogna</h2><p className="mt-2 text-white/70">{site.address}</p></div></div><ButtonLink to="/contatti" secondary>Contattaci</ButtonLink></div></section>

    <section className="section-pad bg-snow"><div className="container-site"><SectionHeading eyebrow="Domande frequenti" title="Prima di mettere gli sci" /><div className="mt-10 grid gap-4 lg:grid-cols-3">{[
      ['Serve prenotare?', 'Per le lezioni private è richiesta la prenotazione. Per le collettive il sito storico indica il ritiro anticipato del biglietto in segreteria: verifica la disponibilità prima di arrivare.'],
      ['Skipass e attrezzatura sono inclusi?', 'No. Skipass e noleggio non sono inclusi nel costo della lezione.'],
      ['Dove si trova il noleggio?', 'Il noleggio è presso l’unica sede della scuola, direttamente sulle piste di Aremogna.'],
    ].map(([q,a]) => <article key={q} className="rounded-3xl border border-ink/10 bg-white p-7"><Baby className="text-pine" /><h3 className="mt-8 font-display text-xl font-bold">{q}</h3><p className="mt-3 text-sm leading-6 text-ink/65">{a}</p></article>)}</div></div></section>
  </div>
}
