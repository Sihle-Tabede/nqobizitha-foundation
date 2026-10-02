import { ArrowUpRight, MapPin } from 'lucide-react'
import { socialLinks } from '../data/content'

export default function EventCard({ event }) {
  return (
    <article className="group card overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <img src={event.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-800 shadow-sm">
          {event.type}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold text-amber-700">{event.status}</p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">{event.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>
        <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500"><MapPin size={15} className="text-emerald-700" />{event.location}</p>
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-black text-emerald-800">Watch for updates <ArrowUpRight size={15} /></a>
      </div>
    </article>
  )
}
