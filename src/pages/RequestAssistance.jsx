import { useState } from 'react'
import { CheckCircle2, HeartHandshake, LockKeyhole, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function RequestAssistance() {
  const [done, setDone] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Request assistance"
        title="Asking for help should not feel complicated."
        copy="This page gives individuals and families a respectful, structured way to explain what they need instead of depending only on calls, messages or social-media comments."
      />

      <section className="container-shell section-space grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
        <aside className="space-y-4">
          <div className="rounded-[2rem] bg-emerald-950 p-7 text-white">
            <HeartHandshake className="text-amber-300" size={28} />
            <h2 className="mt-5 text-2xl font-black">Tell the story in your own words.</h2>
            <p className="mt-4 text-sm leading-7 text-emerald-50/75">You do not need to know programme names or formal terminology. Explain what happened, where you are and what kind of support may help.</p>
          </div>
          <div className="card p-5">
            <div className="flex gap-3"><LockKeyhole size={20} className="mt-0.5 shrink-0 text-emerald-800" /><div><p className="font-black">Privacy matters</p><p className="mt-1 text-xs leading-5 text-slate-500">The live system should restrict access to assistance requests and only collect information needed to assess support.</p></div></div>
          </div>
          <div className="card p-5">
            <div className="flex gap-3"><Phone size={20} className="mt-0.5 shrink-0 text-amber-700" /><div><p className="font-black">Urgent danger?</p><p className="mt-1 text-xs leading-5 text-slate-500">This form is not an emergency service. People facing immediate danger should contact the relevant emergency services first.</p></div></div>
          </div>
        </aside>

        <div className="card p-7 sm:p-10">
          {done ? (
            <div className="py-14 text-center">
              <CheckCircle2 size={52} className="mx-auto text-emerald-700" />
              <h2 className="mt-5 text-2xl font-black">Your request was captured in the prototype</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">Nothing was actually sent or stored because the backend has not been connected yet.</p>
              <button onClick={() => setDone(false)} className="btn-secondary mt-6">Submit another request</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} className="grid gap-5">
              <div><p className="eyebrow">Support request</p><h2 className="mt-1 text-2xl font-black">How can the foundation understand your situation?</h2></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="label">Full name<input required className="field" placeholder="Your full name" /></label>
                <label className="label">Contact number<input required className="field" placeholder="e.g. 071 234 5678" /></label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="label">Email address <span className="font-normal text-slate-400">(optional)</span><input type="email" className="field" placeholder="you@example.com" /></label>
                <label className="label">Area / community<input required className="field" placeholder="e.g. Pongola" /></label>
              </div>
              <label className="label">What kind of support are you looking for?
                <select className="field" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Fire / disaster-related household support</option>
                  <option>Food or essential household support</option>
                  <option>Education-related support</option>
                  <option>Youth opportunity or skills support</option>
                  <option>Other community support</option>
                </select>
              </label>
              <label className="label">Tell us what happened<textarea required className="field min-h-40" placeholder="Share the situation in your own words, including anything you think will help the foundation understand the need." /></label>
              <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-xs leading-5 text-slate-600"><input required type="checkbox" className="mt-1" />I confirm that the information I provided is accurate and may be reviewed by authorised foundation representatives for the purpose of assessing this request.</label>
              <button className="btn-primary w-fit">Submit support request</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
