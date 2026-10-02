import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Camera, MapPin, MessageCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import DemoNotice from '../components/DemoNotice'
import { socialLinks } from '../data/content'

export default function Contact() {
  const [done, setDone] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A clearer way to reach the foundation."
        copy="Reach out about partnerships, volunteering, community opportunities, media enquiries or other ways to connect with the foundation."
      />

      <section className="container-shell section-space grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
        <div className="space-y-4">
          <div className="card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><MapPin size={20} /></div>
            <h3 className="mt-4 font-extrabold">Community base</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Pongola (uPhongolo), KwaZulu-Natal, South Africa</p>
          </div>

          <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="card block p-6 transition hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-4">
              <div><div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700"><MessageCircle size={20} /></div><h3 className="mt-4 font-extrabold">Official Facebook</h3><p className="mt-2 text-sm leading-6 text-slate-600">Community outreach, campaign updates and public announcements.</p></div>
              <ArrowUpRight size={18} className="text-slate-400" />
            </div>
          </a>

          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="card block p-6 transition hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-4">
              <div><div className="grid h-11 w-11 place-items-center rounded-2xl bg-fuchsia-50 text-fuchsia-700"><Camera size={20} /></div><h3 className="mt-4 font-extrabold">Instagram</h3><p className="mt-2 text-sm leading-6 text-slate-600">Follow Nqoba’s public updates and community activity.</p></div>
              <ArrowUpRight size={18} className="text-slate-400" />
            </div>
          </a>
        </div>

        <div className="card p-7 sm:p-9">
          {done ? (
            <div className="py-14 text-center">
              <CheckCircle2 size={52} className="mx-auto text-emerald-700" />
              <h2 className="mt-5 text-2xl font-extrabold">Thanks for testing the contact form</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">This demo does not send messages yet, so nothing has been delivered to the foundation.</p>
              <button onClick={() => setDone(false)} className="btn-secondary mt-6">Write another message</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} className="grid gap-5">
              <div><p className="eyebrow">General enquiry</p><h2 className="mt-1 text-2xl font-extrabold">What would you like to talk about?</h2></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="label">Full name<input required className="field" placeholder="Your full name" /></label>
                <label className="label">Email address<input required type="email" className="field" placeholder="you@example.com" /></label>
              </div>
              <label className="label">Reason for contacting us
                <select className="field" defaultValue="" required>
                  <option value="" disabled>Select a reason</option>
                  <option>General enquiry</option>
                  <option>Sponsorship / partnership</option>
                  <option>Volunteer support</option>
                  <option>Community opportunity</option>
                  <option>Media / collaboration</option>
                </select>
              </label>
              <label className="label">Message<textarea required className="field min-h-40" placeholder="Tell us what you would like the foundation to know." /></label>
              <DemoNotice>Demo only — this message will not be sent yet.</DemoNotice>
              <button className="btn-primary w-fit">Send enquiry</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
