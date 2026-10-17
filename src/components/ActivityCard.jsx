import AdaptiveImage from './AdaptiveImage'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../data/content'

export default function ActivityCard({ activity }) {
  return (
    <article className="group card overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <AdaptiveImage src={activity.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 shadow-sm">
          {activity.type}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold text-amber-700">{activity.status}</p>
        <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">{activity.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{activity.description}</p>
        <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500"><MapPin size={15} className="text-emerald-700" />{activity.location}</p>
        {activity.to ? (
          <Link to={activity.to} className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-emerald-800">Explore this activity <ArrowUpRight size={15} /></Link>
        ) : (
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-emerald-800">View official updates <ArrowUpRight size={15} /></a>
        )}
      </div>
    </article>
  )
}
