import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/forms/ContactForm'
import { PageHero } from '../components/sections/PageHero'
import { site } from '../data/site'

export function ContactPage() { return <>
  <PageHero eyebrow="Parliamo della tua giornata sulla neve" title="Contatta la Scuola Sci Alto Sangro" text="Scrivici o chiamaci per verificare disponibilità, orari e condizioni di lezioni e noleggio." image="/images/hero.jpg" />
  <section className="section-pad bg-snow"><div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><aside><p className="eyebrow">Recapiti</p><h2 className="display mt-4 text-4xl">Ci trovi ad Aremogna</h2><div className="mt-8 space-y-4"><a href={`tel:${site.phoneHref}`} className="flex gap-4 rounded-2xl bg-white p-5 hover:shadow-lift"><Phone className="text-pine" /><span><small className="block text-ink/50">Segreteria</small><strong>{site.phone}</strong></span></a><a href={`mailto:${site.email}`} className="flex gap-4 rounded-2xl bg-white p-5 hover:shadow-lift"><Mail className="shrink-0 text-pine" /><span className="break-all"><small className="block text-ink/50">Email</small><strong>{site.email}</strong></span></a><div className="flex gap-4 rounded-2xl bg-white p-5"><MapPin className="shrink-0 text-pine" /><span><small className="block text-ink/50">Sede</small><strong>{site.address}</strong></span></div></div></aside><div className="rounded-[2rem] bg-white p-7 shadow-lift sm:p-10"><h2 className="font-display text-3xl font-bold">Richiedi informazioni</h2><p className="mt-3 mb-8 text-ink/60">L’invio online richiede la configurazione del backend. Nel frattempo usa telefono o email.</p><ContactForm /></div></div></section>
  </> }
