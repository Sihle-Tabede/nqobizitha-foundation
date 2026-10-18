import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, CheckCircle2, CircleAlert, ClipboardList, FileCheck2, ShieldCheck, Vote } from 'lucide-react'
import { awardCategories2026 } from '../data/awardCategories2026'

const STORAGE_KEY = 'nqobizitha-election-schedule-draft-v1'
const blank = { nominationsOpen: '', nominationsClose: '', registrationClose: '', votingOpen: '', votingClose: '' }
const fields = [
  ['nominationsOpen', 'Nominations open'],
  ['nominationsClose', 'Nominations close'],
  ['registrationClose', 'Voter registration closes'],
  ['votingOpen', 'Voting opens'],
  ['votingClose', 'Voting closes'],
]
function loadDraft() {
  try {
    const data = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
    return Object.fromEntries(Object.keys(blank).map(key => [key, typeof data[key] === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data[key]) ? data[key] : '']))
  } catch { return { ...blank } }
}
function validate(form) {
  const ordered = fields.map(([key]) => form[key]).filter(Boolean)
  if (ordered.some((date, index) => index > 0 && date < ordered[index - 1])) return 'The chosen dates must follow the intended sequence.'
  return ''
}
export default function AdminElections() {
  const [form, setForm] = useState(loadDraft)
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState('')

  function save(event) {
    event.preventDefault()
    const result = validate(form)
    if (result) { setError(result); setFeedback(''); return }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
      setFeedback('Planning dates saved in this browser only. No election schedule was published.')
      setError('')
    } catch { setError('This browser could not save the planning dates.'); setFeedback('') }
  }
  function reset() {
    setForm({ ...blank })
    try { window.localStorage.removeItem(STORAGE_KEY) } catch { /* No persistent storage available */ }
    setError(''); setFeedback('Local date draft cleared. No public election information was affected.')
  }

  return <div className="admin-stack">
    <section className="admin-welcome" aria-labelledby="election-admin-title">
      <div className="admin-welcome-art" aria-hidden="true" />
      <div className="relative z-10 max-w-2xl"><p className="admin-overline !text-amber-300">Umuntu Ubongwa Esaphila Awards · 2026</p><h2 id="election-admin-title" className="admin-welcome-title">Prepare a fair community election.</h2><p className="admin-welcome-text">Plan dates, review the required voter checks, and examine the future ballot experience. All fields here are planning drafts—not real election settings.</p><Link to="/awards/vote" className="admin-cta-white">Open ballot preview <ArrowRight size={17} aria-hidden="true" /></Link></div>
      <div className="admin-welcome-mark" aria-hidden="true"><Vote size={90} strokeWidth={1}/></div>
    </section>

    <section className="admin-grid-stats" aria-label="Election overview">
      {[{ Icon: ClipboardList, label: '2026 award categories', value: String(awardCategories2026.length), foot: 'Based on the supplied list' },{ Icon: FileCheck2, label: 'Approved nominee records', value: '—', foot: 'Not linked to a database' },{ Icon: ShieldCheck, label: 'Verified voters', value: '—', foot: 'Verification service pending' },{ Icon: Vote, label: 'Recorded votes', value: '—', foot: 'Voting service not connected' }].map(({ Icon,label,value,foot }) => <article className="admin-stat-card" key={label}><div className="admin-stat-icon admin-stat-emerald"><Icon size={22} aria-hidden="true"/></div><p className="admin-stat-label">{label}</p><p className="admin-stat-value">{value}</p><p className="admin-stat-foot">{foot}</p></article>)}
    </section>

    <div className="admin-two-column">
      <section className="admin-panel admin-pad" aria-labelledby="election-dates-heading">
        <div className="flex items-center gap-3"><div className="admin-action-icon"><CalendarDays size={22} aria-hidden="true"/></div><h3 className="admin-panel-title" id="election-dates-heading">Election dates — planning</h3></div>
        <p className="mt-3 text-sm leading-7 text-slate-600">Draft possible dates before announcing them. Saving here only changes your current browser.</p>
        <form onSubmit={save} className="mt-6 grid gap-4">
          {fields.map(([key,label]) => <label key={key} className="grid gap-1.5 text-xs font-bold text-emerald-950">{label}<input type="date" className="field !mt-0" value={form[key]} onChange={event => { setForm(previous=>({...previous,[key]:event.target.value})); setError(''); setFeedback('') }}/></label>)}
          {error && <p role="alert" className="text-xs font-semibold text-red-700">{error}</p>}
          {feedback && <p role="status" className="text-xs font-semibold text-emerald-800">{feedback}</p>}
          <div className="flex flex-wrap gap-3"><button type="submit" className="admin-btn-primary">Save local draft</button><button type="button" onClick={reset} className="admin-btn-outline">Clear dates</button></div>
        </form>
      </section>
      <section className="admin-panel admin-pad" aria-labelledby="election-policy-heading">
        <div className="flex items-center gap-3"><div className="admin-action-icon"><ShieldCheck size={22} aria-hidden="true"/></div><h3 className="admin-panel-title" id="election-policy-heading">Community eligibility policy</h3></div>
        <p className="mt-3 text-sm leading-7 text-slate-600">Agreed eligibility scope for the awards; final documentary standards and appeal rules still require approval.</p>
        <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
          {[
            'Current residents of uPhongolo Local Municipality can apply for voter verification.',
            'Former residents with verifiable community ties can apply through an additional review process.',
            'Account registration and contact verification are not the same as eligibility approval.',
            'Voting requires one eligible voter identity per category, with auditable results and review procedures.',
          ].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={18} aria-hidden="true"/><span>{item}</span></li>)}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3"><Link to="/awards/eligibility" className="admin-btn-outline">Preview eligibility</Link><Link to="/awards" className="admin-btn-outline">Review categories</Link></div>
      </section>
    </div>
    <div className="admin-panel admin-pad"><div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-6 text-amber-950"><CircleAlert size={22} className="shrink-0" aria-hidden="true"/><div><strong>Election administration is still frontend-only.</strong> No public registration, identity checks, candidate approval, ballot casting, tallying, result publication or real administrator security can be performed from this page. Do not enter personal voter information in planning fields.</div></div></div>
  </div>
}
