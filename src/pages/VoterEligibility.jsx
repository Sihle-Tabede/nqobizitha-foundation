import { useMemo, useState } from 'react'
import { ArrowRight, BadgeCheck, CircleAlert, ClipboardCheck, FileCheck2, HandHeart, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const evidence = [
  { id: 'residence', title: 'Evidence of residence', detail: 'An acceptable letter, statement or other official document connecting you to the municipal area.' },
  { id: 'school', title: 'School or education record', detail: 'A suitable record showing a past or present connection to a local school or educational institution.' },
  { id: 'community', title: 'Community reference', detail: 'An independently verifiable local organisation or community reference.' },
  { id: 'work', title: 'Work or activity record', detail: 'A relevant employer, organisation or programme record connected with uPhongolo.' },
]

export default function VoterEligibility() {
  const [route, setRoute] = useState('current')
  const [chosen, setChosen] = useState([])
  const [confirmed, setConfirmed] = useState(false)
  const required = route === 'former' ? 2 : 1
  const ready = chosen.length >= required
  const detail = useMemo(() => route === 'current'
    ? 'Current residents will need to demonstrate that they presently live within the foundation’s approved uPhongolo municipal boundary.'
    : 'Former residents will need to demonstrate past residence and a meaningful continuing connection to the community. Two distinct authorised reviewers are proposed for the final decision.', [route])

  function toggle(id) {
    setChosen(previous => previous.includes(id) ? previous.filter(value => value !== id) : [...previous, id])
    setConfirmed(false)
  }

  return <>
    <PageHero eyebrow="Community voting · Eligibility" title="Your community connection matters." copy="Understand the proposed verification process for current and former uPhongolo residents before awards voting begins." />
    <section className="section-space bg-white" aria-labelledby="eligibility-routes-heading">
      <div className="container-shell">
        <SectionHeading id="eligibility-routes-heading" eyebrow="Who can participate" title="Two fair pathways to verification" copy="An account alone does not make someone eligible to vote. Each applicant’s identity and community connection must be reviewed." />
        <div className="mx-auto mt-9 grid max-w-4xl gap-4 md:grid-cols-2" role="group" aria-label="Choose your connection to uPhongolo">
          {[{ id: 'current', title: 'I currently live in uPhongolo', Icon: HandHeart, note: 'Show evidence of current local residence.' }, { id: 'former', title: 'I previously lived in uPhongolo', Icon: Users, note: 'Show past residence and continuing community ties.' }].map(({ id, title, Icon, note }) => <button key={id} onClick={() => { setRoute(id); setChosen([]); setConfirmed(false) }} type="button" aria-pressed={route === id} className={`rounded-3xl border-2 p-7 text-center transition-colors focus-visible:outline focus-visible:outline-amber-600 ${route === id ? 'border-emerald-700 bg-emerald-50' : 'border-slate-200 bg-[#fbfaf6] hover:border-emerald-300'}`}>
            <Icon size={30} className="mx-auto text-emerald-800" aria-hidden="true" />
            <strong className="mt-4 block text-lg text-emerald-950">{title}</strong>
            <span className="mt-2 block text-sm leading-6 text-slate-600">{note}</span>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-emerald-800">{route === id ? <><BadgeCheck size={17} aria-hidden="true"/> Selected</> : 'Select pathway'}</span>
          </button>)}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-600">{detail}</p>
      </div>
    </section>
    <section className="section-space bg-[#edf5ed]" aria-labelledby="eligibility-checklist-heading">
      <div className="container-shell">
        <SectionHeading id="eligibility-checklist-heading" eyebrow="Prepare your application" title="What evidence might you need?" copy={`Select ${required === 1 ? 'at least one type' : 'at least two types'} of evidence you could provide. This is a preparation checklist, not an application.`} />
        <div className="mx-auto mt-9 max-w-3xl rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-9">
          <div className="grid gap-3">
            {evidence.map(item => <label key={item.id} className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 ${chosen.includes(item.id) ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200'}`}>
              <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-emerald-700" checked={chosen.includes(item.id)} onChange={() => toggle(item.id)}/>
              <span><strong className="block text-sm text-emerald-950">{item.title}</strong><span className="mt-1 block text-sm leading-6 text-slate-600">{item.detail}</span></span>
            </label>)}
          </div>
          <div className="mt-6 rounded-2xl bg-[#f5f7f2] p-5 text-center" aria-live="polite">
            <p className="text-sm font-bold text-emerald-950">{chosen.length} of {required} suggested evidence types selected</p>
            <p className="mt-2 text-sm text-slate-600">{ready ? 'You can review the proposed next steps.' : 'Choose additional evidence types to continue.'}</p>
            <button type="button" className="btn-primary mt-5" disabled={!ready} onClick={() => setConfirmed(true)}>Review next steps <ArrowRight size={16} aria-hidden="true"/></button>
          </div>
          {confirmed && <div role="status" className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-950">
            <div className="flex items-center gap-2 font-extrabold"><ClipboardCheck size={20} aria-hidden="true" /> Your preparation checklist</div>
            <p className="mt-2">You selected the {route === 'current' ? 'current resident' : 'former resident'} pathway and {chosen.length} evidence type(s). When applications open, identity checks, evidence review and an eligibility decision will still be required. This checklist has not been sent or saved.</p>
          </div>}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><CircleAlert size={21} className="shrink-0" aria-hidden="true"/><p>Do not upload ID documents, share ID numbers, or enter private addresses here. Acceptable evidence and appeals procedures remain subject to foundation approval.</p></div>
        </div>
      </div>
    </section>
    <section className="section-space bg-white" aria-labelledby="eligibility-journey-heading"><div className="container-shell">
      <SectionHeading id="eligibility-journey-heading" eyebrow="How verification will work" title="A clear decision, with a right to review" />
      <div className="mt-9 grid gap-4 md:grid-cols-3">{[
        { Icon: FileCheck2, title: '1. Apply securely', detail: 'A real account and supporting evidence will be submitted through an encrypted service.' },
        { Icon: ShieldCheck, title: '2. Receive a decision', detail: 'Authorised reviewers will check identity, residency evidence and potential duplicate records.' },
        { Icon: BadgeCheck, title: '3. Vote once approved', detail: 'Only eligible voters will receive ballot access. Rejected applicants will have an appeal pathway.' },
      ].map(({ Icon, title, detail }) => <article key={title} className="rounded-3xl border border-emerald-100 bg-[#fbfaf6] p-7 text-center"><Icon className="mx-auto text-emerald-800" size={26} aria-hidden="true"/><h3 className="mt-4 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{detail}</p></article>)}</div>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/awards/vote" className="btn-primary">See the voting interface <ArrowRight size={16} aria-hidden="true"/></Link><Link to="/awards" className="btn-secondary">All award categories</Link></div>
    </div></section>
  </>
}
