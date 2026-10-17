import { ArrowRight, ArrowUpRight, CalendarClock, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ActivityCard from '../components/ActivityCard'
import SectionHeading from '../components/SectionHeading'
import { activities, socialLinks } from '../data/content'

export default function Activities() {
  return (
    <>
      <PageHero
        eyebrow="Community activities"
        title="Moments that bring the community together."
        copy="From boxing and recognition to long-distance charity walks, these activities create visible ways for residents and supporters to take part."
      />
      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Signature activities"
          title="More than dates on a calendar"
          copy="Some foundation activities happen annually, while others are created around a specific community need. Confirmed dates can be added here as they are announced."
        />

        <div className="mb-10 grid gap-5 rounded-[2rem] bg-emerald-950 p-7 text-white lg:grid-cols-[auto_1fr_auto] lg:items-center sm:p-9">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-300 text-emerald-950"><Trophy /></div>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-300">5th Annual • 2026</p>
            <h2 className="mt-2 text-2xl font-extrabold">Umuntu Ubongwa Esaphila Awards</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-emerald-50/70">Nominees were announced on 5 October. Voting opens 11 October, closes 15 November, and awards night takes place on 4 December 2026.</p>
          </div>
          <Link to="/awards" className="btn-gold w-fit">View awards details <ArrowRight size={16} /></Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {activities.map((item) => <ActivityCard key={item.id} activity={item} />)}
        </div>

        <div className="mt-9"><Link to="/gallery" className="btn-secondary">Explore campaigns & activities gallery <ArrowRight size={16} aria-hidden="true" /></Link></div>

        <div className="mt-12 grid gap-6 rounded-[2rem] bg-emerald-50 p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center sm:p-9">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-emerald-800 shadow-sm"><CalendarClock /></div>
          <div>
            <h2 className="text-xl font-extrabold">Waiting for the next confirmed date?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Follow the official foundation page for current announcements. Confirmed dates and participation details can be added here as they are announced.</p>
          </div>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">Check official updates <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </>
  )
}
