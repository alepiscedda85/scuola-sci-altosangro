import { Check, Phone } from 'lucide-react'
import { ButtonLink } from '../components/common/ButtonLink'
import { SectionHeading } from '../components/common/SectionHeading'
import { PageHero } from '../components/sections/PageHero'
import { JsonLd } from '../components/seo/JsonLd'
import { rentalPricing } from '../data/pricing'
import { site } from '../data/site'

const skiLevels = [
  { number: '01', name: 'Beginner', text: 'Per chi è alle prime curve e cerca un approccio semplice e controllabile.' },
  { number: '02', name: 'Intermediate', text: 'Per chi scia con continuità e vuole progredire con maggiore precisione.' },
  { number: '03', name: 'Advanced', text: 'Per sciatori esperti che cercano più risposta e stabilità sulla neve.' },
  { number: '04', name: 'Pro', text: 'La gamma superiore, da scegliere con il team in base alle esigenze tecniche.' },
]

export function RentalPage() { return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: 'Noleggio sci e snowboard', provider: { '@type': 'LocalBusiness', name: site.name, telephone: site.rentalPhone }, areaServed: 'Aremogna, Roccaraso' }} />
  <PageHero eyebrow="Equipaggiati in pista" title="Noleggio sci e snowboard ad Aremogna" text="Attrezzatura per adulti e bambini, disponibile presso l’unica sede della scuola direttamente sulle piste." image="/images/rental.jpg" />
  <section className="section-pad bg-snow"><div className="container-site"><SectionHeading eyebrow="Scegli, indossa, scia" title="L’attrezzatura giusta per il tuo livello" text="Il team del noleggio è a disposizione per orientarti tra sci beginner, intermediate, advanced, pro e snowboard." /><div className="mt-12 grid gap-6 md:grid-cols-2">{rentalPricing.map((p, i) => <article key={p.item} className={`rounded-[2rem] p-8 ${i ? 'bg-sun' : 'bg-ink text-white'}`}><p className={`eyebrow ${i ? '!text-ink/60' : '!text-sun'}`}>{i ? 'Junior' : 'Adulto'}</p><h2 className="mt-4 font-display text-3xl font-bold">{p.item}</h2><p className={`mt-4 ${i ? 'text-ink/70' : 'text-white/70'}`}>{p.includes}</p><p className="mt-10 text-2xl font-bold">{p.price} <span className="block text-xs font-normal opacity-60">Tariffa rilevata sul sito storico, da confermare per la stagione corrente.</span></p></article>)}</div></div></section>

  <section className="section-pad bg-white"><div className="container-site grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
    <div className="lg:sticky lg:top-28"><SectionHeading eyebrow="I nostri sci" title="Una gamma, quattro livelli" text="Non esiste uno sci giusto in assoluto: esiste quello più adatto al modo in cui vivi la pista. Il personale del noleggio ti aiuta a scegliere sul posto." /><img src="/images/rental-skis.jpg" alt="Sci disponibili presso il noleggio" loading="lazy" className="mt-10 aspect-[16/10] w-full rounded-[2rem] object-cover shadow-lift" /></div>
    <ol className="border-t border-ink/15">{skiLevels.map(level => <li key={level.name} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-ink/15 py-8 sm:grid-cols-[4.5rem_10rem_1fr] sm:items-baseline"><span className="text-sm font-bold text-pine">{level.number}</span><h2 className="font-display text-2xl font-bold sm:text-3xl">{level.name}</h2><p className="col-start-2 text-sm leading-6 text-ink/60 sm:col-start-auto">{level.text}</p></li>)}</ol>
  </div></section>

  <section className="bg-ink text-white"><div className="grid lg:grid-cols-2"><img src="/images/rental-snowboard.jpg" alt="Snowboard disponibile per il noleggio" loading="lazy" className="h-full min-h-[420px] w-full object-cover" /><div className="flex items-center px-6 py-20 sm:px-12 lg:px-[max(3rem,calc((100vw-1180px)/2))]"><div className="max-w-xl"><p className="eyebrow !text-sun">Snowboard</p><h2 className="display mt-5 text-5xl sm:text-6xl">Anche la tavola ha il suo ritmo.</h2><p className="mt-6 text-lg leading-8 text-white/68">Sono disponibili set completi snowboard per adulti e bambini. Misura, scarponi e configurazione vengono verificati direttamente dal personale del noleggio.</p></div></div></div></section>

  <section className="section-pad bg-glacier"><div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Oltre il completo" title="Servizi utili, direttamente in pista" text="Tutto ciò che serve per organizzare la giornata senza spostarsi dalla sede di Aremogna." /><div><ul className="grid border-t border-ink/15 sm:grid-cols-2">{['Attrezzatura da alpinismo · sci, scarponi e pelli di foca','Ciaspole','Servizio deposito','Ski test nuova stagione','Casco incluso per i minori di 18 anni'].map(i => <li key={i} className="flex gap-3 border-b border-ink/15 py-5 pr-6"><Check className="shrink-0 text-pine" />{i}</li>)}</ul><p className="mt-5 text-sm text-ink/60">Disponibilità, condizioni, orari e dettagli dei servizi devono essere confermati con il noleggio.</p></div></div></section>
  <section className="bg-pine py-16 text-white"><div className="container-site flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow !text-sun">Linea diretta noleggio</p><a href={`tel:${site.rentalPhoneHref}`} className="mt-3 flex items-center gap-3 font-display text-3xl font-bold hover:text-sun"><Phone />{site.rentalPhone}</a></div><ButtonLink to="/contatti" secondary>Richiedi informazioni</ButtonLink></div></section>
  </> }
