import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Info, RotateCcw, ShieldAlert } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { awardCategories2026, getAwardCategory2026, nomineeLabelForKind } from '../data/awardCategories2026'
import { useDemoAuth } from '../context/DemoAuth'

const initialDraft = {
  category: '', nominating: 'other', nomineeName: '', nomineeCommunity: '', nomineeRole: '', reason: '', agreesToReview: false,
}

function NominationNotice() {
  return (
    <div className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950" role="note">
      <ShieldAlert size={22} className="mt-0.5 shrink-0" aria-hidden="true" />
      <p><strong>Nomination form review only.</strong> Signing in here does not verify identity or submit official nominations or votes. Do not enter private contact details, ID numbers, photographs or sensitive personal information. Drafts remain in this page's memory until you leave or refresh.</p>
    </div>
  )
}

function FormField({ label, name, hint, children }) {
  return (
    <div>
      <label htmlFor={name} className="label block">{label} <span className="text-red-700" aria-label="required">*</span></label>
      {hint && <p className="mt-1 text-xs leading-5 text-slate-500" id={`${name}-hint`}>{hint}</p>}
      {children}
    </div>
  )
}

export default function Nominate() {
  const [params] = useSearchParams()
  const requested = getAwardCategory2026(params.get('category'))
  const { user } = useDemoAuth()
  const [draft, setDraft] = useState(() => ({ ...initialDraft, category: requested ? String(requested.number) : '' }))
  const [checked, setChecked] = useState([])
  const [review, setReview] = useState(false)
  const [error, setError] = useState('')
  const category = useMemo(() => getAwardCategory2026(draft.category), [draft.category])
  const isIndividual = !category || category.kind === 'person'
  const nomineeType = nomineeLabelForKind(category?.kind)
  const missingChecks = (category?.requirements.length || 0) - checked.length
  const allConfirmed = !!category && missingChecks === 0

  function update(name, value) {
    setDraft(previous => ({ ...previous, [name]: value }))
    setError('')
  }
  function changeCategory(value) {
    setDraft(previous => ({ ...previous, category: value, nominating: 'other', nomineeName: '', nomineeRole: '' }))
    setChecked([])
    setError('')
    setReview(false)
  }
  function submit(event) {
    event.preventDefault()
    if (!category) { setError('Select an award category.'); return }
    if (draft.nomineeName.trim().length < 3 || draft.nomineeName.trim().length > 100) { setError('Enter a nominee name between 3 and 100 characters.'); return }
    if (draft.nomineeCommunity.trim().length < 2 || draft.nomineeCommunity.trim().length > 100) { setError('Enter a valid uPhongolo/Pongola community or area.'); return }
    if (draft.nomineeRole.trim().length < 3 || draft.nomineeRole.trim().length > 120) { setError('Briefly describe the nominee’s work, role or activity.'); return }
    if (draft.reason.trim().length < 40 || draft.reason.trim().length > 600) { setError('Please explain why the nominee deserves recognition in 40–600 characters.'); return }
    if (!allConfirmed) { setError('Review and confirm all five proposed eligibility requirements.'); return }
    if (!draft.agreesToReview) { setError('Please acknowledge that this is a local preview, not an official submission.'); return }
    setError('')
    setReview(true)
    requestAnimationFrame(() => document.getElementById('nomination-review')?.focus())
  }
  function restart() {
    setReview(false)
    setChecked([])
    setDraft({ ...initialDraft, category: draft.category })
    setError('')
    requestAnimationFrame(() => document.getElementById('nomination-form-title')?.focus())
  }

  return (
    <>
      <PageHero eyebrow="Umuntu Ubongwa Esaphila Awards · 2026" title="Nominate someone worth celebrating." copy="Find the right category, check eligibility, and explain why this person or organisation deserves recognition." />
      <section className="container-shell py-10 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Link className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-emerald-800 hover:underline" to="/awards"><ArrowLeft size={16} aria-hidden="true" /> Back to award categories</Link>
          <NominationNotice />

          <p className="mt-5 text-center text-sm font-semibold text-emerald-900" role="status">Signed in as {user?.name || 'participant'} · Test access only</p>
          {review ? (
            <div className="mt-8 rounded-[2rem] border border-emerald-200 bg-white p-7 shadow-sm sm:p-10" id="nomination-review" tabIndex={-1} aria-labelledby="nomination-review-title">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-800"><CheckCircle2 size={27} aria-hidden="true" /></span>
              <p className="eyebrow mt-5">Not submitted</p>
              <h2 id="nomination-review-title" className="section-title">Your nomination review</h2>
              <p className="section-copy">This is only a local review of the information you entered. No nomination was transmitted, registered, approved or counted.</p>
              <dl className="mt-8 divide-y divide-slate-100 rounded-2xl border border-slate-200 px-5 text-sm">
                {[
                  ['Category', `${category.number}. ${category.title}`],
                  ['Nomination type', draft.nominating === 'self' ? 'Self nomination' : 'Nominating someone / another group'],
                  [nomineeType, draft.nomineeName.trim()],
                  ['Community / area', draft.nomineeCommunity.trim()],
                  ['Work or activity', draft.nomineeRole.trim()],
                  ['Why they deserve recognition', draft.reason.trim()],
                  ['Eligibility', '5 proposed requirements self-checked; not independently verified'],
                ].map(([label, value]) => <div className="grid gap-1 py-4 sm:grid-cols-[170px_1fr]" key={label}><dt className="font-semibold text-slate-500">{label}</dt><dd className="min-w-0 break-words text-slate-900">{value}</dd></div>)}
              </dl>
              <p className="mt-5 rounded-xl bg-amber-50 p-4 text-center text-xs font-semibold text-amber-950">Nothing has been submitted or saved to a foundation server. Leave or refresh this page to discard your entries.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3"><button type="button" className="btn-primary" onClick={() => setReview(false)}>Edit details</button><button type="button" className="btn-secondary" onClick={restart}><RotateCcw size={16} aria-hidden="true" /> Start again</button></div>
            </div>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,50,38,.07)] sm:p-9">
              <p className="eyebrow">Step 1 · Nomination details</p>
              <h2 id="nomination-form-title" tabIndex={-1} className="section-title">Nomination details</h2>
              <p className="section-copy">Fields marked * are required. Do not include contact details or sensitive information.</p>
              <form className="mt-8 space-y-7" onSubmit={submit} noValidate>
                <FormField label="Award category" name="nomination-category">
                  <select className="field" id="nomination-category" required value={draft.category} onChange={event => changeCategory(event.target.value)}>
                    <option value="">Select a category</option>
                    {awardCategories2026.map(item => <option key={item.number} value={String(item.number)}>{item.number}. {item.title}</option>)}
                  </select>
                </FormField>

                {category && <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-center"><strong className="text-sm text-emerald-950">Category {category.number}: {category.title}</strong><p className="mt-1 text-xs text-emerald-900/75">The criteria below are proposed, not official.</p></div>}

                <fieldset>
                  <legend className="label">Who are you nominating? *</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      ['self', isIndividual ? 'Myself' : `My own ${nomineeType.toLowerCase()}`],
                      ['other', isIndividual ? 'Another person' : `Another ${nomineeType.toLowerCase()}`],
                    ].map(([value, label]) => (
                      <label className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold ${draft.nominating === value ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-slate-200 text-slate-700'}`} key={value}>
                        <input type="radio" name="nomination-type" value={value} checked={draft.nominating === value} onChange={() => update('nominating', value)} /> {label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label={`${nomineeType} name`} name="nominee-name" hint="Use only a name suitable for a future public awards listing.">
                    <input className="field" id="nominee-name" type="text" autoComplete="off" required maxLength={100} minLength={3} value={draft.nomineeName} onChange={event => update('nomineeName', event.target.value)} placeholder={isIndividual ? 'Nominee’s name' : `${nomineeType} name`} />
                  </FormField>
                  <FormField label="Community or area in uPhongolo/Pongola" name="nominee-area" hint="For example, a local neighbourhood or village—no street address.">
                    <input className="field" id="nominee-area" type="text" autoComplete="off" required maxLength={100} value={draft.nomineeCommunity} onChange={event => update('nomineeCommunity', event.target.value)} placeholder="Area or community" />
                  </FormField>
                </div>
                <FormField label="Profession, organisation or relevant activity" name="nominee-role">
                  <input className="field" id="nominee-role" type="text" autoComplete="off" required maxLength={120} value={draft.nomineeRole} onChange={event => update('nomineeRole', event.target.value)} placeholder="Briefly describe their role or work" />
                </FormField>
                <FormField label="Why does this nominee deserve to win?" name="nominee-reason" hint="Write 40–600 characters about a specific contribution or achievement. Avoid private information.">
                  <textarea className="field min-h-32 resize-y" id="nominee-reason" required maxLength={600} minLength={40} value={draft.reason} onChange={event => update('reason', event.target.value)} aria-describedby="nominee-reason-hint nominee-reason-count" placeholder="Explain the difference they have made in the community..." />
                  <p className="mt-1 text-right text-xs text-slate-500" id="nominee-reason-count" aria-live="off">{draft.reason.trim().length} / 600 characters</p>
                </FormField>

                {category && <fieldset className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                  <legend className="px-2 text-sm font-extrabold text-emerald-950">Check the five proposed eligibility requirements *</legend>
                  <p className="mt-2 text-xs leading-5 text-slate-600">These checks are self-declarations, not proof of eligibility or approval. Official verification will be performed by organisers later.</p>
                  <div className="mt-4 space-y-4">
                    {category.requirements.map((requirement, index) => <label key={requirement} className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700">
                      <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-emerald-800" checked={checked.includes(index)} onChange={event => setChecked(current => event.target.checked ? [...current, index] : current.filter(value => value !== index))} />
                      <span><strong className="text-emerald-900">{index + 1}.</strong> {requirement}</span>
                    </label>)}
                  </div>
                  <p className="mt-4 text-xs font-bold text-emerald-900" aria-live="polite">{checked.length} of 5 reviewed</p>
                </fieldset>}

                <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm leading-6 text-slate-700">
                  <input className="mt-1 h-5 w-5 shrink-0 accent-emerald-800" type="checkbox" checked={draft.agreesToReview} onChange={event => update('agreesToReview', event.target.checked)} />
                  <span>I understand this form is for review only. An official nomination requires identity checks, organiser approval and the nominee’s permission.</span>
                </label>
                {error && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-900" role="alert">{error}</p>}
                <button type="submit" className="btn-primary w-full">Review nomination details <ArrowRight size={17} aria-hidden="true" /></button>
                <p className="text-center text-xs text-slate-500">No information will be sent to the foundation. This is not an official submission button.</p>
              </form>
            </div>
          )}
          <div className="mx-auto mt-8 flex max-w-xl items-start gap-3 text-xs leading-6 text-slate-600"><Info size={18} className="mt-1 shrink-0 text-emerald-800" aria-hidden="true" /><p>When the backend is introduced, the intended workflow is verified sign-in → nomination → eligibility review → organiser approval. Live public voting will be developed separately and will not be inferred from nominations.</p></div>
        </div>
      </section>
    </>
  )
}
