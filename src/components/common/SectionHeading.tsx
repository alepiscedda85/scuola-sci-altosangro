export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className="max-w-3xl">
    <p className={`eyebrow ${light ? '!text-sun' : ''}`}>{eyebrow}</p>
    <h2 className={`display mt-4 text-4xl sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
    {text && <p className={`mt-6 max-w-2xl text-lg leading-8 ${light ? 'text-white/75' : 'text-ink/70'}`}>{text}</p>}
  </div>
}
