import { MapPin } from 'lucide-react'

export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16 text-white sm:py-20">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="container-shell relative">
        <div className="human-chip mb-7 w-fit"><MapPin size={13} /> Pongola (uPhongolo), KwaZulu-Natal</div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-300">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">{copy}</p>
      </div>
    </section>
  )
}
