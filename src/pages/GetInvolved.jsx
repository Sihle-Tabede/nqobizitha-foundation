import { useState } from 'react'
import { ArrowRight, CheckCircle2, GraduationCap, HandHeart, Heart, Medal, Trophy, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const ways = [
  [Heart, 'Donate to a cause', 'Support a campaign or contribute to practical community work.', '/donate'],
  [HandHeart, 'Volunteer your time', 'Offer practical help, admin support, event assistance or professional skills.', '#volunteer'],
  [UsersRound, 'Sponsor an initiative', 'Partner around a youth activity, event, relief campaign or community project.', '#partner'],
  [Medal, 'Nominate someone doing good', 'Help the foundation discover community members whose contribution deserves recognition.', '#nominate'],
  [Trophy, 'Join a community activity', 'Take part in sport, boxing, charity walks and other public activities.', '/events'],
  [GraduationCap, 'Share an opportunity', 'Connect young people with training, education, mentorship or skills-development opportunities.', '/contact'],
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
          copy="The prototype keeps each pathway simple so people can move from interest to action without having to hunt for the right contact person."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ways.map(([Icon, title, text, to]) => (
            <article key={title} className="card p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700"><Icon size={21} /></div>
              <h2 className="mt-5 text-xl font-black tracking-tight">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              {to.startsWith('/') ? (
                <Link to={to} className="mt-5 inline-flex items-center gap-1 text-sm font-black text-emerald-800">Continue <ArrowRight size={15} /></Link>
              ) : (
                <a href={to} className="mt-5 inline-flex items-center gap-1 text-sm font-black text-emerald-800">Continue <ArrowRight size={15} /></a>
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
              <p className="text-sm font-black text-emerald-900">Good volunteer matches can include:</p>
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
                <h2 className="mt-5 text-2xl font-black">Thanks for raising your hand.</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">This is still a frontend prototype, so your information has not been sent or stored yet.</p>
                <button onClick={() => setDone(false)} className="btn-secondary mt-6">Submit another interest</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} className="grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="label">Full name<input className="field" required placeholder="Your full name" /></label>
                  <label className="label">Contact number<input className="field" required placeholder="e.g. 071 234 5678" /></label>
                </div>
                <label className="label">Email address<input className="field" type="email" placeholder="you@example.com" /></label>
                <label className="label">How would you like to help?
                  <select className="field" defaultValue="">
                    <option value="" disabled>Select an area</option>
                    <option>Community outreach</option>
                    <option>Events and charity walks</option>
                    <option>Youth development</option>
                    <option>Sport and boxing activities</option>
                    <option>Administration or digital support</option>
                    <option>Professional skills / mentorship</option>
                  </select>
                </label>
                <label className="label">Tell us a little more<textarea className="field min-h-32" placeholder="Your availability, skills, or the kind of support you can offer" /></label>
                <button className="btn-primary w-fit">Submit volunteer interest</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="partner" className="container-shell py-16 scroll-mt-28">
        <div className="rounded-[2rem] bg-amber-50 p-7 sm:p-10">
          <p className="eyebrow">Partnerships & sponsorship</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Bring resources, reach or opportunity into the work.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">Businesses, training providers, community organisations and individual sponsors can support activities with funding, equipment, venues, transport, training opportunities or professional services.</p>
          <Link to="/contact" className="btn-primary mt-6">Start a conversation <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section id="nominate" className="container-shell pb-8 scroll-mt-28">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10">
          <p className="eyebrow">Community recognition</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Know someone whose good work deserves to be seen?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">A future nomination form can collect a short story about the person, what they have done for the community and how the foundation can verify the nomination.</p>
        </div>
      </section>
    </>
  )
}
