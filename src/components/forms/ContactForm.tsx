import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { submitContact } from '../../services/contactService'

const schema = z.object({
  name: z.string().min(2, 'Inserisci il nome'), surname: z.string().min(2, 'Inserisci il cognome'),
  email: z.string().email('Inserisci un’email valida'), phone: z.string().min(6, 'Inserisci il telefono'),
  service: z.string().min(1, 'Scegli un servizio'), discipline: z.string().min(1, 'Scegli una disciplina'),
  lessonType: z.string(), participants: z.coerce.number().min(1).max(20), age: z.string(), level: z.string(), date: z.string(), message: z.string().min(10, 'Scrivi almeno 10 caratteri'),
  privacy: z.literal(true, { errorMap: () => ({ message: 'Devi accettare la privacy' }) }),
})
type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [notice, setNotice] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { lessonType: '', age: '', level: '', date: '', participants: 1 } })
  const submit = async (data: FormData) => { const result = await submitContact(data); setNotice(result.ok ? 'Richiesta inviata.' : 'Il modulo è pronto, ma l’invio online non è ancora configurato. Contattaci via telefono o email.') }
  const field = 'mt-2 min-h-12 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink'
  const Error = ({ name }: { name: keyof FormData }) => errors[name] ? <p className="mt-1 text-sm text-red-700" role="alert">{errors[name]?.message}</p> : null
  return <form onSubmit={handleSubmit(submit)} className="grid gap-5 sm:grid-cols-2" noValidate>
    <label>Nome *<input className={field} {...register('name')} /><Error name="name" /></label><label>Cognome *<input className={field} {...register('surname')} /><Error name="surname" /></label>
    <label>Email *<input className={field} type="email" {...register('email')} /><Error name="email" /></label><label>Telefono *<input className={field} type="tel" {...register('phone')} /><Error name="phone" /></label>
    <label>Servizio *<select className={field} {...register('service')}><option value="">Seleziona</option><option>Lezione</option><option>Noleggio</option><option>Altro</option></select><Error name="service" /></label>
    <label>Disciplina *<select className={field} {...register('discipline')}><option value="">Seleziona</option><option>Sci</option><option>Snowboard</option><option>Altro</option></select><Error name="discipline" /></label>
    <label>Tipo lezione<select className={field} {...register('lessonType')}><option value="">Non specificato</option><option>Privata</option><option>Collettiva</option></select></label>
    <label>Partecipanti<input className={field} type="number" min="1" max="20" {...register('participants')} /><Error name="participants" /></label>
    <label>Età<input className={field} {...register('age')} /></label><label>Livello<select className={field} {...register('level')}><option value="">Seleziona</option><option>Principiante</option><option>Intermedio</option><option>Avanzato</option></select></label>
    <label className="sm:col-span-2">Data preferita<input className={field} type="date" {...register('date')} /></label>
    <label className="sm:col-span-2">Messaggio *<textarea className={`${field} min-h-32`} {...register('message')} /><Error name="message" /></label>
    <label className="sm:col-span-2 flex items-start gap-3"><input type="checkbox" className="mt-1 h-5 w-5" {...register('privacy')} /><span>Ho letto e accetto la <a href="/privacy-policy" className="underline">Privacy Policy</a>. *</span></label><div className="sm:col-span-2"><Error name="privacy" /></div>
    <div className="sm:col-span-2"><button disabled={isSubmitting} className="min-h-12 rounded-full bg-sun px-7 py-3 font-bold text-ink disabled:opacity-50">{isSubmitting ? 'Invio…' : 'Invia la richiesta'}</button>{notice && <p className="mt-4 rounded-xl bg-glacier p-4" role="status">{notice}</p>}</div>
  </form>
}
