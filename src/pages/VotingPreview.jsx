import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, CircleAlert, LockKeyhole, Vote } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { awardCategories2026 } from '../data/awardCategories2026'

// Presentation-only ballot. There are no approved nominee records, votes, vote totals or election endpoints.
const placeholders = ['Nominee position 1', 'Nominee position 2', 'Nominee position 3']

export default function VotingPreview() {
  const [params] = useSearchParams()
  const starting = awardCategories2026.find(x => String(x.number) === params.get('category'))?.number ?? awardCategories2026[0].number
  const [number, setNumber] = useState(starting)
  const [choice, setChoice] = useState(null)
  const [review, setReview] = useState(false)
  const [completed, setCompleted] = useState(false)
  const selected = useMemo(() => awardCategories2026.find(category => category.number === number), [number])

  function changeCategory(value) { setNumber(Number(value)); setChoice(null); setReview(false); setCompleted(false) }
  function choose(index) { setChoice(index); setReview(false); setCompleted(false) }
  function reset() { setChoice(null); setReview(false); setCompleted(false) }

  return <>
    <PageHero eyebrow="Umuntu Ubongwa Esaphila Awards · 2026" title="A voting experience the community can trust." copy="Explore how the ballot will work: choose a category, review approved nominees, and confirm a single selection." />
    <section className="section-space bg-[#fbfaf6]" aria-labelledby="voting-experience-heading">
      <div className="container-shell">
        <SectionHeading id="voting-experience-heading" eyebrow="Ballot interface" title="Simple, clear and accessible" copy="The ballot below demonstrates the interaction only. Nominee positions are placeholders, not the final candidate list." />
        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_15px_40px_rgba(6,56,42,0.06)] sm:p-10">
          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950" role="note"><CircleAlert className="mt-0.5 shrink-0" size={20} aria-hidden="true"/><p><strong>Ballot preview only.</strong> No voting is open. Your selection is not recorded, counted, stored or submitted to the foundation.</p></div>
          <div className="mt-8"><label htmlFor="vote-category" className="block text-center text-sm font-extrabold text-emerald-950">Choose an award category</label>
            <select id="vote-category" className="field mt-3" value={number} onChange={event => changeCategory(event.target.value)}>
              {awardCategories2026.map(item => <option key={item.number} value={item.number}>{item.number}. {item.title}</option>)}
            </select>
          </div>
          <div className="mt-8 text-center"><span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-extrabold text-emerald-900"><Vote size={17} aria-hidden="true"/> Category {selected.number}</span><h2 className="mt-4 text-2xl font-extrabold text-emerald-950">{selected.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">Choose one position to explore the ballot interaction.</p></div>
          <fieldset className="mt-7 grid gap-3"><legend className="sr-only">Select a sample nominee position</legend>
            {placeholders.map((label,index) => <label key={index} className={`flex min-h-20 cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 transition-colors ${choice === index ? 'border-emerald-700 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'}`}>
              <input type="radio" name="sample-nominee" className="h-5 w-5 shrink-0 accent-emerald-700" checked={choice === index} onChange={() => choose(index)}/>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-100 font-extrabold text-emerald-900">{index+1}</span>
              <span><strong className="block text-sm text-emerald-950">{label}</strong><span className="mt-1 block text-xs text-slate-600">Example slot · not an official 2026 nominee</span></span>
            </label>)}
          </fieldset>
          {!review ? <div className="mt-7 flex justify-center"><button className="btn-primary" disabled={choice === null} type="button" onClick={() => setReview(true)}>Review selection <ArrowRight size={17} aria-hidden="true"/></button></div> : <div className="mt-7 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center" role="status"><CheckCircle2 className="mx-auto text-emerald-800" size={27} aria-hidden="true"/><h3 className="mt-3 text-xl font-extrabold text-emerald-950">Review your selection</h3><p className="mt-2 text-sm leading-7 text-slate-700">{selected.title} · {placeholders[choice]}</p><p className="mt-2 text-xs leading-6 text-slate-600">In the future, eligible voters will see the approved nominee’s name and confirm before submitting an actual ballot.</p>{!completed ? <div className="mt-5 flex flex-wrap justify-center gap-3"><button type="button" className="btn-secondary" onClick={() => setReview(false)}><ArrowLeft size={16} aria-hidden="true"/> Change choice</button><button type="button" className="btn-primary" onClick={() => setCompleted(true)}>Finish preview <CheckCircle2 size={17} aria-hidden="true"/></button></div> : <><p className="mt-4 text-sm font-bold text-emerald-800">Preview finished. No vote was submitted or counted.</p><button type="button" className="btn-secondary mt-4" onClick={reset}>Start again</button></>}</div>}
          <div className="mt-8 rounded-2xl bg-[#f1f5f0] p-4 text-center text-xs leading-6 text-slate-600"><LockKeyhole className="mx-auto mb-2 text-emerald-800" size={20} aria-hidden="true"/> When enabled, casting a real ballot will require an approved community voter identity and secure, one-vote-per-category checks.</div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/awards/eligibility" className="btn-primary">Voter eligibility guide <ArrowRight size={17} aria-hidden="true"/></Link><Link to="/awards/nominate" className="btn-secondary">Nomination form</Link></div>
      </div>
    </section>
  </>
}
