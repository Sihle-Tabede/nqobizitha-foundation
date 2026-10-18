export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16 text-center text-white sm:py-20">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="container-shell relative flex flex-col items-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-300">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">{title}</h1>
        {copy && <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/85 sm:text-lg">{copy}</p>}
      </div>
    </section>
  )
}
