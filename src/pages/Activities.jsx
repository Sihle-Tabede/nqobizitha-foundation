import { ArrowUpRight, CalendarClock } from 'lucide-react'
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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {activities.map((item) => <ActivityCard key={item.id} activity={item} />)}
        </div>

        <div className="mt-12 grid gap-6 rounded-[2rem] bg-emerald-50 p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center sm:p-9">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-emerald-800 shadow-sm"><CalendarClock /></div>
          <div>
            <h2 className="text-xl font-extrabold">Waiting for the next confirmed date?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Follow the official foundation page for current announcements. Confirmed dates and participation details can be added here as they are announced.</p>
          </div>
          <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="btn-primary w-fit">Check official updates <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </>
  )
}
