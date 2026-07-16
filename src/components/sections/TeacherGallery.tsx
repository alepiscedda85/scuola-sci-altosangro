import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { teachers, type Teacher } from '../../data/teachers'

export function TeacherGallery() {
  const [selected, setSelected] = useState<Teacher | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selected && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  const close = () => {
    dialogRef.current?.close()
    document.body.style.overflow = ''
    setSelected(null)
  }

  return <>
    <div className="motion-card-grid mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {teachers.map((teacher, index) => <motion.button
        key={teacher.name}
        type="button"
        onClick={() => setSelected(teacher)}
        className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink text-left shadow-lift focus-visible:outline-sun"
        whileHover={{ y: -6 }}
        transition={{ duration: .25, ease: 'easeOut' }}
        aria-label={`Scopri ${teacher.name}`}
      >
        <img src={teacher.image} alt={teacher.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
        <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent" />
        <span className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-ink/25 text-xs font-bold text-white backdrop-blur-md">{String(index + 1).padStart(2, '0')}</span>
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
          <span><span className="block text-xs font-bold uppercase tracking-[.16em] text-sun">Maestro</span><span className="mt-2 block font-display text-2xl font-bold leading-tight">{teacher.name}</span></span>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sun text-ink transition group-hover:rotate-45"><ArrowUpRight size={20} /></span>
        </span>
      </motion.button>)}
    </div>

    <dialog
      ref={dialogRef}
      onCancel={(event) => { event.preventDefault(); close() }}
      onClick={(event) => { if (event.target === event.currentTarget) close() }}
      className="m-auto w-[calc(100%_-_2rem)] max-w-[920px] overflow-visible rounded-[2rem] bg-transparent p-0 text-ink backdrop:bg-ink/85 backdrop:backdrop-blur-md"
      aria-labelledby="teacher-dialog-title"
    >
      <AnimatePresence>
        {selected && <motion.article
          key={selected.name}
          initial={{ opacity: 0, y: 28, scale: .97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: .98 }}
          transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid max-h-[90vh] overflow-auto rounded-[2rem] bg-white shadow-[0_40px_120px_rgba(0,0,0,.4)] md:grid-cols-[.9fr_1.1fr]"
        >
          <button type="button" onClick={close} autoFocus className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-lg transition hover:rotate-90 hover:bg-sun" aria-label="Chiudi scheda maestro"><X /></button>
          <div className="relative min-h-[340px] overflow-hidden md:min-h-[590px] md:rounded-l-[2rem]">
            <img src={selected.image} alt={selected.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent md:hidden" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.16em] text-pine"><BadgeCheck className="text-sun" /> Il nostro team</div>
            <h2 id="teacher-dialog-title" className="display mt-6 text-5xl sm:text-6xl">{selected.name}</h2>
            <p className="mt-5 text-lg font-semibold text-ink">Maestro della Scuola Sci Alto Sangro</p>
            <p className="mt-5 leading-7 text-ink/65">Passione per la montagna, attenzione alla sicurezza e un percorso costruito sul livello di ogni allievo. Per conoscere discipline insegnate e disponibilità individuale, contatta la segreteria.</p>
            <Link to="/contatti" onClick={close} className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-sun px-6 py-4 font-bold text-ink transition hover:-translate-y-1 hover:shadow-lift">Chiedi disponibilità <ArrowUpRight size={19} /></Link>
          </div>
        </motion.article>}
      </AnimatePresence>
    </dialog>
  </>
}
