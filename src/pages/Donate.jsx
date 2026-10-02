import { useState } from 'react'
import { CheckCircle2, Footprints, Heart, ShieldCheck, Target } from 'lucide-react'
import PageHero from '../components/PageHero'

const amounts = [100, 250, 500, 1000]

export default function Donate() {
  const [amount, setAmount] = useState(250)
  const [done, setDone] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Support a cause"
        title="Make giving feel clear, simple and connected to a purpose."
        copy="This prototype demonstrates the donation journey. It does not process a real payment yet, but the UI is prepared for a secure payment integration later."
      />

      <section className="container-shell section-space grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div className="overflow-hidden rounded-[2rem] bg-emerald-950 text-white">
          <div className="relative h-56">
            <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85" alt="People walking together" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/35 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-amber-300">Journey to the Promise Land</p>
              <h2 className="mt-2 text-2xl font-black">370+ km for two families rebuilding after fire.</h2>
            </div>
          </div>
          <div className="p-7">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4"><Target size={19} className="text-amber-300" /><p className="mt-3 text-xs text-emerald-50/65">Fundraising target</p><p className="mt-1 text-xl font-black">R300,000</p></div>
              <div className="rounded-2xl bg-white/10 p-4"><Footprints size={19} className="text-amber-300" /><p className="mt-3 text-xs text-emerald-50/65">Route</p><p className="mt-1 text-xl font-black">Pongola → Durban</p></div>
            </div>
            <div className="mt-5 flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <ShieldCheck size={19} className="mt-0.5 shrink-0 text-amber-300" />
              <p className="text-xs leading-5 text-emerald-50/70">Real payments should only be enabled after the foundation confirms its payment provider, banking process and receipt requirements.</p>
            </div>
          </div>
        </div>

        <div className="card p-7 sm:p-9">
          {done ? (
            <div className="py-14 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 size={30} /></div>
              <h2 className="mt-5 text-2xl font-black">Donation journey completed in the prototype</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">No payment was charged and no donor information was stored.</p>
              <button onClick={() => setDone(false)} className="btn-secondary mt-6">Try another amount</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-50 text-rose-600"><Heart size={20} fill="currentColor" /></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Prototype giving form</p><h2 className="text-2xl font-black">Choose your support</h2></div>
              </div>

              <label className="label mt-7 block">Support destination
                <select className="field">
                  <option>Journey to the Promise Land campaign</option>
                  <option>General foundation community work</option>
                </select>
              </label>

              <div className="mt-6">
                <p className="label">Choose an amount</p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {amounts.map((value) => (
                    <button
                      type="button"
                      key={value}
                      onClick={() => setAmount(value)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-black transition ${amount === value ? 'border-emerald-700 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}
                    >
                      R{value}
                    </button>
                  ))}
                </div>
              </div>

              <label className="label mt-5 block">Custom amount<input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" min="10" className="field" /></label>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="label">Full name<input required className="field" placeholder="Your name" /></label>
                <label className="label">Email address<input required type="email" className="field" placeholder="you@example.com" /></label>
              </div>

              <button className="btn-primary mt-6 w-full">Continue with R{amount || 0}</button>
              <p className="mt-3 text-center text-xs leading-5 text-slate-400">Prototype only — no payment gateway is connected and no transaction will take place.</p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
