import { ArrowRight, Award, BookOpen, HandHeart, HeartHandshake, Megaphone, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import CircularGallery from '../components/CircularGallery'
import SectionHeading from '../components/SectionHeading'
import { galleryItems } from '../data/stories'

// The homepage intentionally shows images only. Full descriptions, sources
// and categories belong on /gallery, where visitors have chosen to explore.
const galleryPreview = galleryItems.map(({ id, photo, photoAlt, title }) => ({
  id, image: photo, photoAlt, text: title,
}))

const waysToEngage = [
  {
    title: 'See Our Impact',
    description: 'Discover the community activities and stories behind our work.',
    to: '/activities',
    action: 'Explore our work',
    icon: ShieldCheck,
  },
  {
    title: 'Join a Campaign',
    description: 'Find a cause you care about and learn how to take part.',
    to: '/campaigns',
    action: 'View campaigns',
    icon: Megaphone,
  },
  {
    title: 'Volunteer or Partner',
    description: 'Contribute your time, skills or resources to a local initiative.',
    to: '/get-involved',
    action: 'Get involved',
    icon: HandHeart,
  },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-950 py-20 text-white sm:py-24 lg:py-28" aria-labelledby="home-title">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="container-shell relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-amber-300">Nqobizitha Thabede Foundation · uPhongolo</p>
          <h1 id="home-title" className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            One Bread Can Feed <span className="text-amber-300">a Community.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/85 sm:text-lg">
            A small act of care can reach further when we act together. Join us in supporting families, opening doors for young people and celebrating community changemakers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/get-involved" className="btn-gold"><HeartHandshake size={18} strokeWidth={2.2} aria-hidden="true" /> Get Involved</Link>
            <Link to="/about" className="btn-ghost-dark">About the foundation <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="home-about-title">
        <div className="container-shell text-center">
          <SectionHeading
            eyebrow="About the foundation"
            title="Rooted in community. Driven by care."
            copy="Based in Pongola (uPhongolo), KwaZulu-Natal, the foundation focuses on community support, youth opportunity, sport and recognising people who make a difference."
            id="home-about-title"
          />
          <Link to="/about" className="btn-secondary mt-7">Learn more about us <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section-space bg-[#fbfaf6]" aria-labelledby="ways-to-engage-title">
        <div className="container-shell">
          <SectionHeading eyebrow="Take part" title="Three ways to get involved" copy="A simple first step can make a meaningful difference." id="ways-to-engage-title" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {waysToEngage.map(({ title, description, to, action, icon: Icon }) => (
              <article key={title} className="pathway-card flex flex-col items-center rounded-[1.5rem] border border-emerald-950/10 bg-white p-6 text-center shadow-sm sm:p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={27} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
                <Link to={to} className="btn-primary mt-6">{action} <ArrowRight size={16} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="home-stories-title">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Celebrate & reflect"
            title="Recognition and reflection, side by side"
            copy="Discover the people we celebrate and the values behind our community work."
            id="home-stories-title"
          />
          <div className="mx-auto mt-9 grid max-w-5xl gap-5 md:grid-cols-2">
            <article className="flex flex-col items-center rounded-[1.75rem] border border-amber-200 bg-amber-50/65 p-7 text-center sm:p-9" aria-labelledby="home-awards-title">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-200/75 p-3 text-amber-900"><Award size={27} aria-hidden="true" /></div>
              <p className="eyebrow mt-5">Community awards</p>
              <h3 id="home-awards-title" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Honouring those who make a difference</h3>
              <p className="mt-3 max-w-md flex-1 text-sm leading-7 text-slate-700">Explore the 2026 award categories and the proposed nomination process, plus a sourced archive of past recipients.</p>
              <Link to="/awards" className="btn-primary mt-6">Browse 2026 categories <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
            <article className="flex flex-col items-center rounded-[1.75rem] border border-emerald-100 bg-emerald-50/70 p-7 text-center sm:p-9" aria-labelledby="home-reflections-title">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 p-3 text-emerald-900"><BookOpen size={27} aria-hidden="true" /></div>
              <p className="eyebrow mt-5">Foundation reflections</p>
              <h3 id="home-reflections-title" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">The meaning behind the mission</h3>
              <p className="mt-3 max-w-md flex-1 text-sm leading-7 text-slate-700">Thoughtful reflections on dignity, opportunity and shared care. These are editorial reflections, not beneficiary testimonials.</p>
              <Link to="/reflections" className="btn-primary mt-6">Read reflections <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space home-gallery-section" aria-labelledby="gallery-preview-title">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Campaigns & activities gallery</p>
            <h2 id="gallery-preview-title" className="section-title">Our community in pictures</h2>
            <p className="section-copy">Swipe through the images, or explore the full collection.</p>
          </div>
          <div className="mt-9">
            <CircularGallery items={galleryPreview} bend={1} borderRadius={0.045} scrollSpeed={2} />
          </div>
          <div className="mt-7 flex justify-center">
            <Link to="/gallery" className="btn-primary min-w-[210px] px-8 py-3.5 text-center">Click to explore <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

    </>
  )
}
