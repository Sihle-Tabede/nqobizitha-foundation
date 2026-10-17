import AdaptiveImage from './AdaptiveImage'
import { ArrowRight, Footprints, Home, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const money = (n) =>
  new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(n)

export default function CampaignCard({ campaign, featured = false, showDetailsLink = true }) {
  return (
    <article className={`card overflow-hidden ${featured ? 'lg:grid lg:grid-cols-[1.05fr_.95fr]' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'min-h-[320px]' : 'h-56'}`}>
        <AdaptiveImage src={campaign.image} alt="Illustrative stock photograph of people on a walk, not an actual campaign photo" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-transparent to-transparent" />
        {featured && (
          <div className="absolute left-5 top-5 rounded-full bg-amber-400 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-950">
            Featured campaign
          </div>
        )}
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
          <span className="human-chip"><Footprints size={14} /> {campaign.distance}</span>
          <span className="human-chip"><Target size={14} /> {money(campaign.goal)} target</span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-600">{campaign.subtitle}</p>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">{campaign.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{campaign.description}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-emerald-50 p-4">
            <Target className="text-emerald-800" size={20} />
            <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Fundraising goal</p>
            <p className="mt-1 text-xl font-extrabold text-slate-950">{money(campaign.goal)}</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4">
            <Home className="text-amber-700" size={20} />
            <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Purpose</p>
            <p className="mt-1 text-sm font-extrabold text-slate-950">{campaign.purpose}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
          <p className="text-xs font-bold text-slate-700">Funding progress</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Amount-raised progress will appear here once it has been confirmed by the foundation.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/donate" className="btn-primary">Support this campaign <ArrowRight size={16} /></Link>
          {showDetailsLink && <Link to="/campaigns" className="btn-secondary">Campaign details</Link>}
        </div>
      </div>
    </article>
  )
}
