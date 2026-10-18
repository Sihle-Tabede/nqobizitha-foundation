import { ArrowRight, BookOpen, HeartHandshake, MessageCircleHeart } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { reflections } from '../data/stories'

export default function Reflections() {
  return (
    <>
      <PageHero eyebrow="Foundation reflections" title="Behind every act of care is a reason to keep going." copy="Editorial reflections on community care, youth opportunity and recognising everyday changemakers. These are not personal testimonies." />
      <section className="container-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div className="rounded-[2rem] bg-emerald-950 p-7 text-white sm:p-9">
            <BookOpen size={30} className="text-amber-300" aria-hidden="true" />
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[.15em] text-amber-300">Our shared perspective</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Community progress is made one act at a time.</h2>
            <p className="mt-5 text-sm leading-7 text-emerald-50/85">These are editorial reflections about the foundation’s work, not quotations or personal testimonies from beneficiaries. When community stories are published, they should be shared only with informed permission.</p>
            <Link className="btn-gold mt-7" to="/about">Learn about our purpose <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4">
            {reflections.map((story) => (
              <article key={story.id} className="card grid gap-4 p-6 sm:grid-cols-[56px_1fr] sm:p-7">
                <p className="text-3xl font-extrabold text-amber-700" aria-hidden="true">{story.number}</p>
                <div>
                  <p className="eyebrow">{story.category}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-950">{story.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{story.summary}</p>
                  <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900"><span className="sr-only">Question to reflect on:</span>{story.prompt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container-shell py-16">
        <div className="grid gap-6 rounded-[2rem] bg-amber-50 p-7 sm:p-10 md:grid-cols-[auto_1fr_auto] md:items-center">
          <MessageCircleHeart size={34} className="text-emerald-800" aria-hidden="true" />
          <div><h2 className="text-2xl font-extrabold">Have a community story worth sharing?</h2><p className="mt-2 text-sm leading-7 text-slate-700">Reach out to discuss a reflection or suggest a recognised changemaker. To share an idea, use the official contact channels; this page does not accept direct submissions.</p></div>
          <Link className="btn-primary w-fit" to="/contact">Contact the foundation <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-slate-600"><HeartHandshake size={18} className="mt-1 shrink-0 text-emerald-800" aria-hidden="true" />We will not display names, faces or private family stories as testimonials without appropriate consent and approval.</p>
      </section>
    </>
  )
}
