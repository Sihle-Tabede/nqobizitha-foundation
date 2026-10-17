import { useState } from 'react'
import { ArrowRight, CheckCircle2, GraduationCap, HandHeart, Heart, Medal, Trophy, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import DemoNotice from '../components/DemoNotice'
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
  const [done, setDone] = useState(false)

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
            {done ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 size={30} /></div>
                <h2 className="mt-5 text-2xl font-extrabold">Thanks for raising your hand.</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">Thanks for testing the volunteer form. This demo does not send or store your information yet.</p>
                <button onClick={() => setDone(false)} className="btn-secondary mt-6">Submit another interest</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} className="grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="label">Full name<input className="field" required placeholder="Your full name" /></label>
                  <label className="label">Contact number<input className="field" type="tel" required placeholder="e.g. 071 234 5678" /></label>
                </div>
                <label className="label">Email address<input className="field" type="email" placeholder="you@example.com" /></label>
                <label className="label">How would you like to help?
                  <select className="field" defaultValue="" required>
                    <option value="" disabled>Select an area</option>
                    <option>Community outreach</option>
                    <option>Activities and charity walks</option>
                    <option>Youth development</option>
                    <option>Sport and boxing activities</option>
                    <option>Administration or digital support</option>
                    <option>Professional skills / mentorship</option>
                  </select>
                </label>
                <label className="label">Tell us a little more<textarea className="field min-h-32" placeholder="Your availability, skills, or the kind of support you can offer" /></label>
                <DemoNotice>Demo only — this form does not send or store information yet.</DemoNotice>
                <button className="btn-primary w-fit">Submit volunteer interest</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="partner" className="container-shell py-16 scroll-mt-28">
        <div className="rounded-[2rem] bg-amber-50 p-7 sm:p-10">
          <p className="eyebrow">Partnerships & sponsorship</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Bring resources, reach or opportunity into the work.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">Businesses, training providers, community organisations and individual sponsors can support activities with funding, equipment, venues, transport, training opportunities or professional services.</p>
          <Link to="/contact" className="btn-primary mt-6">Start a conversation <ArrowRight size={16} /></Link>
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
