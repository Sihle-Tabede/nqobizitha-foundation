import AdaptiveImage from '../components/AdaptiveImage'
import { ArrowUpRight, BookOpenCheck, HandHeart, MapPin, Sparkles, Target, UsersRound } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { socialLinks } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the foundation"
        title="A community foundation shaped by what Pongola needs."
        copy="The Nqobizitha Thabede Foundation is a community-based initiative centred on practical support, youth empowerment and local action in and around Pongola (uPhongolo), KwaZulu-Natal."
      />

      <section className="container-shell section-space grid gap-12 lg:grid-cols-[1.03fr_.97fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="Grassroots work, organised around people"
            copy="The foundation brings together charitable campaigns, community recognition, youth-centred sport, disaster relief and advocacy for stronger local access to education and skills development."
          />
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-slate-600">
            Much of this work has grown through direct community relationships and social media. Bringing the information together in one place makes it easier for a parent, young person, donor, volunteer or sponsor to understand what is happening and find a practical next step.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800">Community upliftment</span>
            <span className="rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-amber-800">Youth empowerment</span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">Grassroots philanthropy</span>
          </div>
        </div>

        <div className="relative">
          <AdaptiveImage
            className="h-[470px] w-full rounded-[2rem] object-cover shadow-[0_25px_70px_rgba(20,45,31,.14)]"
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1050&q=70"
            alt="Illustrative stock photograph of people volunteering together"
          />
          <div className="absolute -bottom-7 left-4 right-4 rounded-[1.5rem] bg-emerald-950 p-5 text-white shadow-xl sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-amber-300">Rooted here</p>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold"><MapPin size={16} /> Pongola (uPhongolo), KwaZulu-Natal</p>
            <p className="mt-2 text-xs leading-5 text-emerald-50/65">Local challenges deserve solutions people can actually reach and participate in.</p>
          </div>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-shell">
          <SectionHeading centered eyebrow="What guides the work" title="Care that is practical, visible and connected" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [HandHeart, 'Respond with dignity', 'Support should feel human. The platform uses clear language and simple pathways for people asking for help.'],
              [Target, 'Make action visible', 'Campaign goals, purpose and verified progress should be easy for supporters to understand.'],
              [UsersRound, 'Build with the community', 'Volunteers, youth, families, donors and sponsors are participants in the work — not just an audience.'],
            ].map(([Icon, title, text]) => (
              <article key={title} className="card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={21} /></div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-950 to-emerald-800 text-white lg:grid-cols-[.8fr_1.2fr]">
          <div className="soft-dots relative min-h-[300px] p-8 sm:p-10">
            <div className="grid h-24 w-24 place-items-center rounded-[1.5rem] bg-white text-4xl font-extrabold text-emerald-950 shadow-2xl">N<span className="text-amber-500">.</span></div>
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Founder spotlight</p>
            <p className="mt-2 text-sm text-emerald-50/70">Community leadership, creativity and advocacy.</p>
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Sindiswa Sthole Nqobizitha “Nqoba” Thabede</h2>
            <p className="mt-5 max-w-2xl leading-8 text-emerald-50/80">
              Nqoba is a digital creator, teacher, author, entrepreneur, actor and motivational speaker. Through the foundation, that public-facing work is channelled into community mobilisation, charitable support, youth-focused activities and advocacy for better access to skills and education in uPhongolo.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4"><Sparkles size={18} className="text-amber-300" /><p className="mt-3 text-sm font-bold">Community mobilisation and charitable campaigns</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4"><BookOpenCheck size={18} className="text-amber-300" /><p className="mt-3 text-sm font-bold">Education and skills-development advocacy</p></div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn-gold">Official Facebook <ArrowUpRight size={15} /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">Instagram <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-6">
        <div className="flex flex-col gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Community recognition</p>
            <h3 className="mt-1 text-xl font-extrabold tracking-tight">Celebrating good deeds is part of the work too.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">The foundation’s local recognition activities have highlighted people helping to build inclusion, unity and positive community action in Pongola.</p>
          </div>
          <a href={socialLinks.recognitionArticle} target="_blank" rel="noopener noreferrer" className="btn-secondary w-fit">Read the local coverage <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell rounded-[2rem] border border-amber-200 bg-amber-50 p-7 sm:p-10">
          <p className="eyebrow">A long-term local ambition</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">More education and skills access closer to home</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">One of the foundation’s public advocacy themes is improved access to post-school training in uPhongolo — including the ambition for a local TVET college and dedicated skills-development centres that can help address youth unemployment.</p>
        </div>
      </section>
    </>
  )
}
