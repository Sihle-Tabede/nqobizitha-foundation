import { ArrowUpRight, Award } from 'lucide-react'
import { pastWinners } from '../data/stories'

export default function PastWinners({ compact = false }) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">People recognised</p>
          <h2 className="section-title">A growing record of recognition</h2>
          <p className="section-copy">These 2024 recipients are named in published local coverage. This is a partial press-sourced record, not a complete official winners list.</p>
        </div>
      </div>
      <div className={`mt-8 grid gap-4 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
        {pastWinners.map((winner) => (
          <article className="card flex gap-4 p-6" key={winner.id}>
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-800"><Award size={26} aria-hidden="true" /></div>
            <div>
              <p className="text-xs font-bold text-emerald-800">{winner.year} · Reported recipient</p>
              <h3 className="mt-1 text-xl font-extrabold text-slate-950">{winner.name}</h3>
              <p className="mt-1 text-sm font-semibold text-slate-600">{winner.category}</p>
              <p className="mt-3 text-xs leading-5 text-slate-500">{winner.evidence}</p>
              <a className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-emerald-800 underline underline-offset-4" href={winner.sourceUrl} target="_blank" rel="noopener noreferrer">Read source <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
