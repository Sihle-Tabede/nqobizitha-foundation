import { ArrowRight, ArrowUpRight, CheckCircle2, GraduationCap, HandHeart, Heart, Medal, Trophy, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { socialLinks } from '../data/content'
import SectionHeading from '../components/SectionHeading'

const ways = [
  [Heart, 'Donate to a cause', 'Support a campaign or contribute to practical community work.', '/donate', 'Support a cause'],
  [HandHeart, 'Volunteer your time', 'Offer practical help, admin support, activity assistance or professional skills.', '#volunteer', 'Volunteer'],
  [UsersRound, 'Sponsor an initiative', 'Partner around a youth activity, relief campaign or community project.', '#partner', 'Partner with us'],
  [Medal, 'Celebrate someone doing good', 'Follow the Umuntu Ubongwa Esaphila Awards and future opportunities to nominate community members whose contribution deserves recognition.', '/awards', 'Explore the awards'],
  [Trophy, 'Join a community activity', 'Take part in sport, boxing, charity walks and other public activities.', '/activities', 'View activities'],
  [GraduationCap, 'Share an opportunity', 'Connect young people with training, education, mentorship or skills-development opportunities.', '/contact', 'Contact us'],
]

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Show up in the way that makes sense for you."
        copy="You do not have to be a donor to make a difference. Time, skills, introductions, sponsorship and participation can all move community work forward."
      />

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Ways to participate"
          title="Choose your next step"
          copy="Each pathway is kept simple so people can move from interest to action without having to hunt for the right contact person."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ways.map(([Icon, title, text, to, action]) => (
            <article key={title} className="card p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700"><Icon size={21} /></div>
              <h2 className="mt-5 text-xl font-extrabold tracking-tight">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              {to.startsWith('/') ? (
                <Link to={to} className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-emerald-800">{action} <ArrowRight size={15} /></Link>
              ) : (
                <a href={to} className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-emerald-800">{action} <ArrowRight size={15} /></a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="volunteer" className="bg-white section-space scroll-mt-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Volunteer interest"
              title="Tell us how you would like to help"
              copy="Keep it simple. The foundation mainly needs to know who you are, how to reach you and what kind of contribution you would like to make."
            />
            <div className="mt-7 rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm font-extrabold text-emerald-900">Good volunteer matches can include:</p>
              <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                {['Event and outreach assistance', 'Professional or digital skills', 'Youth mentorship and facilitation', 'Sport and community activities'].map((item) => (
                  <li key={item} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-700" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card p-7 sm:p-9">
            <p className="eyebrow">Start with a conversation</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Ready to offer your time?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Tell the foundation, through its public channels, what you would like to help with: outreach, boxing events, youth mentorship, skills, or practical campaign support.</p>
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="font-extrabold text-emerald-950">Three simple steps</p>
              <ol className="mt-3 grid gap-3 text-sm leading-6 text-emerald-950/80">
                <li><strong>1.</strong> Browse the activities or campaigns that interest you.</li>
                <li><strong>2.</strong> Reach out through an official foundation channel to check opportunities.</li>
                <li><strong>3.</strong> Agree on a role and practical arrangements with the organisers before attending.</li>
              </ol>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">Reach out on official Facebook <ArrowUpRight size={16} aria-hidden="true" /></a>
              <Link to="/activities" className="btn-secondary">Explore activities <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <p className="mt-5 text-xs leading-6 text-slate-600">This website does not yet receive volunteer applications. Please do not publish identity numbers, personal documents or banking information in public comments. Confirm account authenticity before sharing contact details privately.</p>
          </div>
        </div>
      </section>

      <section id="partner" className="container-shell py-16 scroll-mt-28">
        <div className="rounded-[2rem] bg-amber-50 p-7 sm:p-10">
          <p className="eyebrow">Partnerships & sponsorship</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Bring resources, reach or opportunity into the work.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">Businesses, training providers, community organisations and individual sponsors can support activities with funding, equipment, venues, transport, training opportunities or professional services.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">Contact via official Facebook <ArrowUpRight size={16} aria-hidden="true" /></a>
            <Link to="/contact" className="btn-secondary">See contact options <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Avoid sending financial information or identity documents until you have verified the recipient and a secure process is provided.</p>
        </div>
      </section>

      <section id="nominate" className="container-shell pb-8 scroll-mt-28">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10">
          <p className="eyebrow">Community recognition</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Celebrate people while they are still here to feel it.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">The Umuntu Ubongwa Esaphila Awards recognise living people whose work, enterprise, creativity and service strengthen the community. The 2026 nominees have been announced, with voting opening on 11 October.</p>
          <Link to="/awards" className="btn-secondary mt-6">Explore the 2026 awards <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
