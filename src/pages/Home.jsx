import AdaptiveImage from '../components/AdaptiveImage'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Footprints,
  HandHeart,
  Heart,
  Camera,
  MapPin,
  Megaphone,
  Medal,
  ShieldCheck,
  Trophy,
  Vote,
  CalendarDays,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CampaignCard from '../components/CampaignCard'
import ActivityCard from '../components/ActivityCard'
import PastWinners from '../components/PastWinners'
import CircularGallery from '../components/CircularGallery'
import { reflections, galleryItems } from '../data/stories'
import SectionHeading from '../components/SectionHeading'
import { awards2026, campaigns, activities, programmes, socialLinks } from '../data/content'

const galleryPreview = galleryItems.map(({ id, photo, photoAlt, category, title }) => ({
  id, image: photo, photoAlt, category, text: title,
}))

const pathways = [
  {
    number: '01', Icon: ShieldCheck, label: 'See Our Impact',
    title: 'See what community action looks like.',
    copy: 'Explore campaign purposes, documented activities and recognition stories. We distinguish published evidence from goals still in progress.',
    primary: { to: '/#impact', text: 'Explore our impact' },
    theme: 'emerald',
  },
  {
    number: '02', Icon: Megaphone, label: 'Join a Campaign',
    title: 'Find a cause worth standing behind.',
    copy: 'Learn what a campaign aims to achieve and use the foundation’s public channels to ask how you can support it.',
    primary: { to: '/campaigns', text: 'Explore campaigns' },
    theme: 'amber',
  },
  {
    number: '03', Icon: HandHeart, label: 'Become a Volunteer or Partner',
    title: 'Your time and skills matter too.',
    copy: 'Help at events, share professional skills, or explore sponsorships and partnerships with the foundation.',
    primary: { to: '/get-involved#volunteer', text: 'Become a volunteer' },
    secondary: { to: '/get-involved#partner', text: 'Explore partnerships' },
    theme: 'emerald',
  },
]

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
            <div className="human-chip w-fit"><MapPin size={13} /> Pongola (uPhongolo), KwaZulu-Natal</div>
            <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[0.25em] text-amber-300">Community • Youth • Action</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Community grows when <span className="text-amber-300">we show up together.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
              From family relief and youth opportunity to boxing and community awards, explore the work, find a cause and take part in building a stronger Pongola.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/campaigns" className="btn-gold"><Megaphone size={17} aria-hidden="true" /> Join a campaign <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link to="/#impact" className="btn-ghost-dark">See our impact <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link to="/get-involved#volunteer" className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-amber-200 underline underline-offset-4 hover:text-white">Volunteer or partner <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-emerald-50/65">
              <span className="inline-flex items-center gap-2"><UsersRound size={15} /> Grassroots community action</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} /> Clear goals, no invented impact totals</span>
              <span className="inline-flex items-center gap-2"><HandHeart size={15} /> Simple ways to participate</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur">
              <AdaptiveImage
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1050&q=70"
                alt="Illustrative stock photograph of volunteers working together"
                className="h-[430px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-emerald-950/85 via-emerald-950/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300">People helping people</p>
                <p className="mt-2 max-w-md text-2xl font-extrabold leading-tight">Community support feels stronger when everyone can see where to show up.</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-2 max-w-[260px] rounded-[1.5rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl sm:-left-8">
              <div className="flex items-center justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-700"><Footprints size={20} /></div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">Signature campaign</span>
              </div>
              <p className="mt-4 text-sm font-extrabold">Journey to the Promise Land</p>
              <div className="mt-3 flex gap-4 text-xs text-slate-500"><span><strong className="block text-lg text-slate-950">370+</strong> km</span><span><strong className="block text-lg text-slate-950">R300k</strong> target</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Put the three clearest actions directly after the first impression. */}
      <section id="take-action" className="relative bg-[#fbfaf6] section-space scroll-mt-24" aria-labelledby="take-action-title">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Choose your way in</p>
            <h2 id="take-action-title" className="section-title">Three meaningful ways to be part of the change.</h2>
            <p className="section-copy">Whether you are here to understand the work or ready to contribute, start with the step that fits you.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pathways.map(({ number, Icon, label, title, copy, primary, secondary, theme }) => (
              <article key={number} className="pathway-card group flex flex-col rounded-[1.75rem] border border-emerald-950/10 bg-white p-6 shadow-[0_16px_46px_rgba(10,49,37,.06)] sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-[.19em] text-emerald-800">{label}</span>
                  <span className="text-sm font-extrabold text-slate-400" aria-hidden="true">{number}</span>
                </div>
                <div className={`mt-6 grid h-14 w-14 place-items-center rounded-2xl ${theme === 'amber' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-900'}`}><Icon size={27} aria-hidden="true" /></div>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight text-slate-950">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{copy}</p>
                <div className="mt-7 flex flex-col items-start gap-3">
                  <Link to={primary.to} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-extrabold text-white transition-colors hover:bg-emerald-700">{primary.text}<ArrowRight size={17} aria-hidden="true" /></Link>
                  {secondary && <Link to={secondary.to} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-extrabold text-emerald-800 underline underline-offset-4 hover:text-emerald-600">{secondary.text}<ArrowRight size={15} aria-hidden="true" /></Link>}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm leading-6 text-slate-600"><ShieldCheck size={17} className="mr-1 inline text-emerald-800" aria-hidden="true" /> No account needed to explore. Participation enquiries go through the foundation’s public contact channels, not an unconnected demo form.</p>
        </div>
      </section>

      <section id="impact" className="scroll-mt-24 bg-emerald-950 section-space text-white" aria-labelledby="impact-title">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-amber-300">See our impact</p>
              <h2 id="impact-title" className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">Real community stories. Clear about what is documented.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/80">We share what an initiative is about and link to available public reporting. Fundraising totals, attendance and outcomes will only be published as verified figures become available.</p>
            </div>
            <Link to="/reflections" className="btn-ghost-dark w-fit">Read community reflections <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <article className="impact-card rounded-3xl border border-white/15 bg-white/10 p-6">
              <Trophy className="text-amber-300" size={25} aria-hidden="true" />
              <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-amber-200">Youth & sport</p>
              <h3 className="mt-2 text-xl font-extrabold">Nqobizitha Boxing Tournament</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-50/75">A community sports event covered by independent reporting. Explore the story without presenting stock photos as event documentation.</p>
              <a href={galleryItems[0].sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 font-extrabold text-amber-200 underline underline-offset-4">Read published coverage <ArrowUpRight size={16} aria-hidden="true" /></a>
            </article>
            <article className="impact-card rounded-3xl border border-white/15 bg-white/10 p-6">
              <Medal className="text-amber-300" size={25} aria-hidden="true" />
              <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-amber-200">Community recognition</p>
              <h3 className="mt-2 text-xl font-extrabold">Umuntu Ubongwa Esaphila Awards</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-50/75">Explore the 2024 reporting and the partial, attributed recipient archive while the full official records are being verified.</p>
              <Link to="/awards" className="mt-5 inline-flex min-h-11 items-center gap-2 font-extrabold text-amber-200 underline underline-offset-4">Explore award stories <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
            <article className="impact-card rounded-3xl border border-white/15 bg-white/10 p-6">
              <HandHeart className="text-amber-300" size={25} aria-hidden="true" />
              <p className="mt-5 text-[11px] font-extrabold uppercase tracking-widest text-amber-200">Practical family relief</p>
              <h3 className="mt-2 text-xl font-extrabold">Journey to the Promise Land</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-50/75">Discover the charity walk’s purpose and fundraising target; unverified donations or completed repairs are not counted as achieved impact.</p>
              <Link to="/campaigns" className="mt-5 inline-flex min-h-11 items-center gap-2 font-extrabold text-amber-200 underline underline-offset-4">Understand the campaign <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      {/* Curved carousel inspired by the supplied CircularGallery component. */}
      <section className="bg-[#f7f4ea] section-space" aria-labelledby="gallery-preview-title">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Campaigns & activities gallery</p>
            <h2 id="gallery-preview-title" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">A closer look at the moments that bring us together.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">Browse boxing, awards, campaigns and youth-focused activities in a curved, swipeable gallery. Photographs are illustrative until approved foundation event images are available.</p>
          </div>
          <div className="mt-8"><CircularGallery items={galleryPreview} bend={3} borderRadius={0.07} scrollSpeed={2} /></div>
          <div className="mt-7 flex justify-center">
            <Link to="/gallery" className="btn-primary min-w-[210px] px-8 py-3.5 text-center">Click to explore <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">Opens the full gallery with filters and individual activity stories.</p>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Our programmes"
              title="Local needs. Practical action."
              copy="The foundation’s work spans immediate relief and long-term opportunity — from helping families rebuild to creating spaces where young people can grow."
            />
            <Link to="/programmes" className="btn-secondary w-fit">Explore all programmes <ArrowRight size={16} /></Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programmes.slice(0, 4).map((programme) => {
              const Icon = programme.icon
              return (
                <article key={programme.id} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#fbfaf6]">
                  <div className="relative h-44 overflow-hidden">
                    <AdaptiveImage src={programme.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-emerald-800 shadow-lg"><Icon size={19} /></div>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-amber-700">{programme.category}</p>
                    <h3 className="mt-2 text-lg font-extrabold tracking-tight">{programme.title}</h3>
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
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 via-amber-50 to-emerald-50 p-8 sm:p-10">
            <div className="soft-dots absolute inset-0 opacity-50" />
            <div className="relative">
              <div className="grid h-20 w-20 place-items-center rounded-[1.4rem] bg-emerald-950 text-3xl font-extrabold text-white shadow-xl">N<span className="text-amber-300">.</span></div>
              <p className="mt-8 eyebrow">About the founder</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Nqobizitha “Nqoba” Thabede</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">A digital creator, teacher, author, entrepreneur, actor and motivational speaker whose community work is closely connected to youth development, education and local upliftment in KwaZulu-Natal.</p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-800">Read the foundation story <ArrowRight size={16} /></Link>
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
                [Trophy, 'Participation', 'Use sport and community activities to keep young people connected.'],
                [BookOpenCheck, 'Opportunity', 'Advocate for stronger education and skills-development access.'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Icon size={20} className="text-emerald-800" />
                  <h3 className="mt-4 font-extrabold">{title}</h3>
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
            <Link to="/activities" className="btn-secondary w-fit">See community activities <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {activities.map((item) => <ActivityCard key={item.id} activity={item} />)}
          </div>
        </div>
      </section>


      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Reflections" title="The purpose behind the programmes" copy="Consider the values at the centre of community support. These are editorial reflections, not invented beneficiary testimonials." />
            <Link to="/reflections" className="btn-secondary w-fit">Read reflections <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reflections.map((reflection) => (
              <article key={reflection.id} className="card p-6"><p className="eyebrow">{reflection.category}</p><h3 className="mt-3 text-xl font-extrabold">{reflection.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{reflection.summary}</p></article>
            ))}
          </div>
          <div className="mt-12"><PastWinners compact /></div>
        </div>
      </section>

      <section className="section-space bg-amber-50/70">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-[2rem] border border-amber-200/70 bg-white shadow-[0_24px_70px_rgba(80,55,10,.08)] lg:grid-cols-[.95fr_1.05fr]">
            <div className="bg-emerald-950 p-7 text-white sm:p-10 lg:p-12">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-300">2026 community recognition</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Umuntu Ubongwa Esaphila Awards</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/75">{awards2026.tagline} The 5th annual edition celebrates artists, entrepreneurs, employees, influencers, hustlers, community leaders and others making a positive difference.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/awards" className="btn-gold">Explore the 2026 awards <ArrowRight size={16} /></Link>
                <a href={socialLinks.awardsFacebook} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">Official awards page <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Current edition</p>
                  <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">The road to awards night</h3>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700"><Trophy size={22} /></div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <CalendarDays size={18} className="text-emerald-800" />
                  <p className="mt-3 text-xs font-bold text-slate-500">Nominees announced</p>
                  <p className="mt-1 font-extrabold text-slate-950">5 October 2026</p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4">
                  <Vote size={18} className="text-amber-700" />
                  <p className="mt-3 text-xs font-bold text-slate-500">Voting opens</p>
                  <p className="mt-1 font-extrabold text-slate-950">11 October 2026</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-bold text-slate-500">Voting closes</p>
                  <p className="mt-1 font-extrabold text-slate-950">15 November 2026</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-bold text-slate-500">Awards night</p>
                  <p className="mt-1 font-extrabold text-slate-950">4 December 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 p-7 text-white sm:p-10 lg:p-12">
            <div className="hero-grid absolute inset-0 opacity-20" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-300">Be part of it</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">There is more than one way to show up.</h2>
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
                  [Medal, 'Awards', 'Celebrate local people whose contribution deserves to be seen.'],
                  [UsersRound, 'Sponsor', 'Partner around an event or programme.'],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <Icon size={20} className="text-amber-300" />
                    <p className="mt-3 font-extrabold">{title}</p>
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
          <div className="flex flex-col gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Stay close to the work</p>
              <h3 className="mt-1 text-xl font-extrabold tracking-tight">Follow official foundation updates.</h3>
              <p className="mt-1 text-sm text-slate-500">Campaign updates and direct community outreach are regularly shared on social media.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">Facebook <ArrowUpRight size={15} /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Camera size={16} /> Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
