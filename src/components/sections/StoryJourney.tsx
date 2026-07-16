import { ArrowDownRight, Mountain, Route, Sparkles } from 'lucide-react'
import { LogoExperience } from '../three/LogoExperience'

const chapters = [
  { step: '01', eyebrow: 'Ascolta', title: 'La montagna detta il ritmo.', text: 'Ogni giornata comincia dal terreno, dalla neve e da ciò che vuoi imparare. Il maestro osserva e costruisce il punto di partenza insieme a te.', Icon: Mountain },
  { step: '02', eyebrow: 'Impara', title: 'Una curva alla volta.', text: 'Tecnica e fiducia crescono insieme. Dal primo equilibrio al gesto più preciso, la progressione diventa naturale e personale.', Icon: Route },
  { step: '03', eyebrow: 'Vivi', title: 'Lascia la tua traccia.', text: 'La lezione finisce, l’esperienza resta: più autonomia, più sicurezza e una montagna che senti finalmente tua.', Icon: Sparkles },
]

export function StoryJourney() {
  return <section className="story-shell relative bg-[#041725] text-white" aria-labelledby="story-title">
    <div className="story-stage relative flex min-h-screen items-center overflow-hidden py-24">
      <div className="story-orbit absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="story-logo-3d absolute -right-[18%] top-1/2 h-[62vh] w-[78vw] -translate-y-1/2 sm:-right-[8%] lg:right-[2%] lg:w-[52vw]">
        <LogoExperience />
      </div>
      <div className="container-site relative z-10 grid lg:grid-cols-2">
        <div className="max-w-xl">
          <p className="eyebrow !text-sun">La tua storia sulla neve</p>
          <h2 id="story-title" className="sr-only">Dalla montagna alla tua prima traccia</h2>
          <div className="story-chapter-stack relative mt-8 min-h-[390px]">
            {chapters.map(({ step, eyebrow, title, text, Icon }, index) => <article key={step} className={`story-chapter absolute inset-0 flex flex-col justify-center ${index ? 'invisible opacity-0' : ''}`}>
              <div className="flex items-center gap-4"><span className="text-sm font-bold text-sun">{step}</span><span className="h-px w-14 bg-sun/50" /><Icon size={22} className="text-sun" /></div>
              <p className="mt-8 text-sm font-bold uppercase tracking-[.2em] text-white/55">{eyebrow}</p>
              <h3 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">{title}</h3>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/68">{text}</p>
            </article>)}
          </div>
          <div className="mt-7 flex items-center gap-4 text-xs font-bold uppercase tracking-[.16em] text-white/50"><ArrowDownRight size={18} className="text-sun" /> Continua a scorrere</div>
        </div>
      </div>
      <div className="absolute bottom-12 right-8 top-32 hidden w-px bg-white/15 lg:block"><span className="story-progress-fill absolute inset-x-0 top-0 h-full origin-top scale-y-[.333] bg-sun" /></div>
    </div>
  </section>
}
