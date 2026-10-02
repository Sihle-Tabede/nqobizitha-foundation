import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { programmes } from '../data/content'

export default function Programmes() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Community initiatives with a real local purpose."
        copy="The foundation’s work moves between urgent needs and long-term opportunity — helping families through hardship while creating positive pathways for young people."
      />

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Focus areas"
          title="A broader picture of community support"
          copy="These areas bring the foundation’s current public activities into one clear structure, making it easier for community members and partners to understand where they can participate."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => {
            const Icon = programme.icon
            return (
              <article key={programme.id} className="group card overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img src={programme.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-white text-emerald-800 shadow-xl"><Icon size={22} /></div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-700">{programme.category}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight">{programme.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{programme.description}</p>
                  <p className="mt-5 flex items-start gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-xs font-semibold leading-5 text-slate-600"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-700" />{programme.detail}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-emerald-950 py-14 text-white">
        <div className="container-shell flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-300">Want to take part?</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Find the role that fits how you can help.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-emerald-50/70">Volunteer, sponsor an initiative, support a campaign, or connect the foundation with a community opportunity.</p>
          </div>
          <Link to="/get-involved" className="btn-gold w-fit">Get involved <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
