import {
  ArrowUpRight,
  Award,
  CalendarDays,
  Check,
  Clock3,
  Medal,
  Sparkles,
  Ticket,
  Trophy,
  UsersRound,
  Vote,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import PastWinners from '../components/PastWinners'
import SectionHeading from '../components/SectionHeading'
import { awards2026, socialLinks } from '../data/content'

const iconFor = {
  'Nominees announced': UsersRound,
  'Voting opens': Vote,
  'Voting closes': Clock3,
  'VIP ticket sales close': Ticket,
  'Awards night': Trophy,
}

function dateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function milestoneState(iso) {
  const today = dateKey()
  if (iso < today) return 'complete'
  if (iso === today) return 'today'
  return 'upcoming'
}

export default function Awards() {
  const today = dateKey()
  const nextMilestone = awards2026.milestones.find((item) => item.iso >= today)
  const cycleComplete = !nextMilestone

  return (
    <>
      <PageHero
        eyebrow="Umuntu Ubongwa Esaphila Awards"
        title="Celebrate people while they are still here to feel it."
        copy="An annual community recognition programme founded by Nqobizitha Thabede, honouring living people whose creativity, work, enterprise and service make a positive difference."
      />

      <section className="container-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <div>
            <p className="eyebrow">The idea behind the awards</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Recognition should not have to wait until someone is gone.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              The awards create a public moment to appreciate people who contribute to their communities while they are still alive to experience the recognition. Previous editions have brought together artists, influencers, entrepreneurs, employees, hustlers, community members and organisations around a shared celebration of positive impact.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-amber-100 px-3.5 py-2 text-xs font-extrabold text-amber-900">20+ categories recognised in the 2024 edition</span>
              <a href={socialLinks.recognitionArticle} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-extrabold text-emerald-800">Read 2024 coverage <ArrowUpRight size={15} /></a>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {awards2026.groups.map((group) => (
                <span key={group} className="rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-800">{group}</span>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden rounded-[2rem] bg-emerald-950 text-white shadow-[0_24px_70px_rgba(6,78,59,.18)]">
            <div className="p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-300">2026 edition</p>
                  <h3 className="mt-2 text-2xl font-extrabold">{awards2026.edition}</h3>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-amber-300"><Award size={24} /></div>
              </div>
              <p className="mt-4 text-sm leading-7 text-emerald-50/70">{awards2026.tagline}</p>
              <a href={socialLinks.awardsFacebook} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
                Follow official awards updates <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="border-t border-white/10 bg-white/5 px-7 py-5 text-xs leading-5 text-emerald-50/65 sm:px-9">
              Voting links, nominee profiles and ticket details should only be published here once confirmed by the organisers.
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="5th Annual Awards timeline"
            title="Every important date in one place"
            copy="This turns scattered announcements into a clear journey from nominees to voting and awards night."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {awards2026.milestones.map((item, index) => {
              const Icon = iconFor[item.label] || CalendarDays
              const state = milestoneState(item.iso)
              return (
                <article key={item.label} className={`relative rounded-3xl border p-5 ${state === 'complete' ? 'border-emerald-200 bg-emerald-50/70' : state === 'today' ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-[#fbfaf6]'}`}>
                  <div className={`grid h-11 w-11 place-items-center rounded-2xl ${state === 'complete' ? 'bg-emerald-800 text-white' : state === 'today' ? 'bg-amber-400 text-emerald-950' : 'bg-amber-100 text-amber-700'}`}>
                    {state === 'complete' ? <Check size={20} /> : <Icon size={20} />}
                  </div>
                  <p className="mt-5 text-xs font-bold text-slate-500">Step {index + 1}</p>
                  <h3 className="mt-1 text-base font-extrabold text-slate-950">{item.label}</h3>
                  <p className="mt-2 text-sm font-bold text-emerald-800">{item.date}</p>
                  {state === 'today' && <span className="mt-3 inline-flex rounded-full bg-amber-200 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-950">Today</span>}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-amber-100 via-amber-50 to-white p-7 sm:p-9">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-950 text-amber-300"><Trophy size={25} /></div>
            <p className="mt-7 eyebrow">Recognition for winners</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">A moment that feels tangible.</h2>
            <div className="mt-6 grid gap-3">
              {awards2026.recognition.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  <Medal size={17} className="shrink-0 text-amber-700" /> {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Cash-prize amounts may vary by edition or category; previously shared examples include R500 prizes.</p>
          </div>

          <div>
            <p className="eyebrow">How this belongs in the website</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Give the awards their own digital home.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">A dedicated awards area makes the annual programme easier to follow and reduces the need to search through social posts. As the platform grows, this page can become the centre for nominee profiles, verified voting, category results, ticket information and an archive of past winners.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ['Nominee profiles', 'Photo, category, short bio and why each nominee was recognised.'],
                ['Verified voting', 'One clear voting journey with opening and closing dates.'],
                ['Awards-night information', 'Venue, time, dress code and VIP ticket information when confirmed.'],
                ['Past winners archive', 'A permanent record of people and organisations recognised each year.'],
              ].map(([title, text]) => (
                <div key={title} className="card p-5">
                  <Sparkles size={18} className="text-amber-700" />
                  <h3 className="mt-3 font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-space"><div className="container-shell"><PastWinners /></div></section>

      <section className="bg-emerald-950 py-14 text-white">
        <div className="container-shell flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-300">Stay informed</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{cycleComplete ? 'The 2026 awards cycle has concluded.' : `${nextMilestone.label} — ${nextMilestone.date}`}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-emerald-50/70">Use the awards’ public page for confirmed nominee information, voting links, ticket details and event announcements.</p>
          </div>
          <a href={socialLinks.awardsFacebook} target="_blank" rel="noopener noreferrer" className="btn-gold w-fit">Open awards page <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </>
  )
}
