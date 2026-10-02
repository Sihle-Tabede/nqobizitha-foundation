import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Footprints,
  HandHeart,
  Heart,
  Camera,
  MapPin,
  Medal,
  ShieldCheck,
  Trophy,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CampaignCard from '../components/CampaignCard'
import EventCard from '../components/EventCard'
import SectionHeading from '../components/SectionHeading'
import { campaigns, communityPromises, initiatives, programmes, socialLinks } from '../data/content'

export default function Home() {
  const featured = campaigns[0]

  return (
    <>
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="container-shell relative grid min-h-[690px] gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:py-20">
          <div className="max-w-3xl">
            <div className="human-chip w-fit"><MapPin size={13} /> uPhongolo, KwaZulu-Natal</div>
            <p className="mt-7 text-[11px] font-black uppercase tracking-[0.25em] text-amber-300">Community • Youth • Action</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Rooted in Pongola. <span className="text-amber-300">Built around people.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              A community-driven foundation bringing people together around relief, youth opportunity, education, sport and practical acts of care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate" className="btn-gold"><Heart size={17} fill="currentColor" /> Support a cause</Link>
              <Link to="/programmes" className="btn-ghost-dark">See what we do <ArrowRight size={16} /></Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-emerald-50/65">
              <span className="inline-flex items-center gap-2"><UsersRound size={15} /> Grassroots community action</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} /> Transparent campaign information</span>
              <span className="inline-flex items-center gap-2"><HandHeart size={15} /> Simple ways to participate</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/10 p-2 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1500&q=85"
                alt="Community volunteers working together"
                className="h-[430px] w-full rounded-[1.8rem] object-cover"
              />
              <div className="absolute inset-2 rounded-[1.8rem] bg-gradient-to-t from-emerald-950/85 via-emerald-950/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">People helping people</p>
                <p className="mt-2 max-w-md text-2xl font-black leading-tight">Community support feels stronger when everyone can see where to show up.</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-2 max-w-[260px] rounded-[1.5rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl sm:-left-8">
              <div className="flex items-center justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-700"><Footprints size={20} /></div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-800">Signature campaign</span>
              </div>
              <p className="mt-4 text-sm font-black">Journey to the Promise Land</p>
              <div className="mt-3 flex gap-4 text-xs text-slate-500"><span><strong className="block text-lg text-slate-950">370+</strong> km</span><span><strong className="block text-lg text-slate-950">R300k</strong> target</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-1 bg-[#fbfaf6] section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why this platform matters"
            title="One clear place for community action"
            copy="The foundation already does meaningful work. The website makes that work easier to discover, follow and support — without asking people to search through old posts and messages."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {communityPromises.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={22} /></div>
                <h3 className="mt-5 text-xl font-black tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Local needs. Practical action."
              copy="The foundation’s work spans immediate relief and long-term opportunity — from helping families rebuild to creating spaces where young people can grow."
            />
            <Link to="/programmes" className="btn-secondary w-fit">Explore all focus areas <ArrowRight size={16} /></Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programmes.slice(0, 4).map((programme) => {
              const Icon = programme.icon
              return (
                <article key={programme.id} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#fbfaf6]">
                  <div className="relative h-44 overflow-hidden">
                    <img src={programme.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-emerald-800 shadow-lg"><Icon size={19} /></div>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-700">{programme.category}</p>
                    <h3 className="mt-2 text-lg font-black tracking-tight">{programme.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{programme.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 section-space text-white">
        <div className="container-shell">
          <SectionHeading
            light
            eyebrow="Featured campaign"
            title="A long walk with a very human purpose"
            copy="The Journey to the Promise Land campaign turns endurance into practical support for two Pongola families whose homes were destroyed by fire."
          />
          <div className="mt-10 text-slate-950"><CampaignCard campaign={featured} featured /></div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-amber-100 via-amber-50 to-emerald-50 p-8 sm:p-10">
            <div className="soft-dots absolute inset-0 opacity-50" />
            <div className="relative">
              <div className="grid h-20 w-20 place-items-center rounded-[1.4rem] bg-emerald-950 text-3xl font-black text-white shadow-xl">N<span className="text-amber-300">.</span></div>
              <p className="mt-8 eyebrow">About the founder</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Nqobizitha “Nqoba” Thabede</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">A digital creator, teacher, author, entrepreneur, actor and motivational speaker whose community work is closely connected to youth development, education and local upliftment in KwaZulu-Natal.</p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-emerald-800">Read the foundation story <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="The bigger picture"
              title="Relief today. Opportunity tomorrow."
              copy="The foundation’s work responds to immediate hardship while also speaking to the bigger challenge facing local youth: access to education, practical skills and pathways into work."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [HandHeart, 'Relief', 'Support families when hardship cannot wait.'],
                [Trophy, 'Participation', 'Use sport and community events to keep young people connected.'],
                [BookOpenCheck, 'Opportunity', 'Advocate for stronger education and skills-development access.'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Icon size={20} className="text-emerald-800" />
                  <h3 className="mt-4 font-black">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Signature activities"
              title="Where the community comes together"
              copy="Not every initiative is a once-off project. Some activities create recurring moments for sport, recognition, fundraising and connection."
            />
            <Link to="/events" className="btn-secondary w-fit">See community activities <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {initiatives.map((item) => <EventCard key={item.id} event={item} />)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-emerald-950 p-7 text-white sm:p-10 lg:p-12">
            <div className="hero-grid absolute inset-0 opacity-20" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-300">Be part of it</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">There is more than one way to show up.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/75">Donate to a cause, volunteer your time, sponsor an activity, nominate someone doing good, or ask the foundation for support when your family needs it.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/get-involved" className="btn-gold">Choose how to help <ArrowRight size={16} /></Link>
                  <Link to="/request-assistance" className="btn-ghost-dark">Request assistance</Link>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  [Heart, 'Donate', 'Back a campaign or community cause.'],
                  [HandHeart, 'Volunteer', 'Give time, skills or practical support.'],
                  [Medal, 'Nominate', 'Help recognise someone doing good.'],
                  [UsersRound, 'Sponsor', 'Partner around an event or programme.'],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <Icon size={20} className="text-amber-300" />
                    <p className="mt-3 font-black">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-emerald-50/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell">
          <div className="flex flex-col gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Stay close to the work</p>
              <h3 className="mt-1 text-xl font-black tracking-tight">Follow official foundation updates.</h3>
              <p className="mt-1 text-sm text-slate-500">Campaign updates and direct community outreach are regularly shared on social media.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="btn-primary">Facebook <ArrowUpRight size={15} /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="btn-secondary"><Camera size={16} /> Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
