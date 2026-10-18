import { useMemo, useState } from 'react'
import { ArrowRight, Award, BookOpenCheck, CheckCircle2, ChevronDown, Clock3, Search, ShieldCheck, UsersRound, Vote } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PastWinners from '../components/PastWinners'
import SectionHeading from '../components/SectionHeading'
import { awardCategories2026, awardGroups2026 } from '../data/awardCategories2026'

export default function Awards() {
  const [search, setSearch] = useState('')
  const [group, setGroup] = useState('All categories')
  const visible = useMemo(() => awardCategories2026.filter(category =>
    (group === 'All categories' || category.group === group) &&
    `${category.title} ${category.number} ${category.group}`.toLowerCase().includes(search.toLowerCase().trim()),
  ), [search, group])

  return (
    <>
      <PageHero
        eyebrow="Umuntu Ubongwa Esaphila Awards · 2026"
        title="Celebrate the people who lift our community."
        copy="Explore the 2026 award categories, understand the proposed eligibility criteria, and review the nomination form."
      />

      <section className="container-shell pt-10 pb-4 sm:pt-14" aria-labelledby="awards-intro-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Community recognition</p>
          <h2 id="awards-intro-heading" className="section-title">Recognition begins with a nomination.</h2>
          <p className="section-copy">The Umuntu Ubongwa Esaphila Awards recognise creativity, service, enterprise and community leadership. Anyone exploring the categories can read the rules; submitting a real nomination will require a verified account once the secure service launches.</p>
        </div>
        <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-3">
          <Link to="/awards/nominate" className="btn-primary">Review nomination form <ArrowRight size={17} aria-hidden="true" /></Link>
          <a href="#award-categories" className="btn-secondary">View 2026 categories <ChevronDown size={17} aria-hidden="true" /></a>
          <Link to="/awards/vote" className="btn-secondary">Voting preview <Vote size={17} aria-hidden="true" /></Link>
          <Link to="/awards/eligibility" className="btn-secondary">Who can vote? <ShieldCheck size={17} aria-hidden="true" /></Link>
        </div>
        <div className="mx-auto mt-7 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950" role="note">
          <ShieldCheck size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p><strong>Requirements pending approval.</strong> The category names and numbering were provided for the 2026 awards. The five eligibility requirements per category are proposed for organiser review. This frontend does not accept official nominations or votes.</p>
        </div>
      </section>

      <section id="award-categories" className="section-space scroll-mt-24" aria-labelledby="award-categories-heading">
        <div className="container-shell">
          <SectionHeading id="award-categories-heading" eyebrow="2026 award categories" title="Find the right category" copy="Choose a category to see its five proposed eligibility requirements. Browse the requirements before reviewing a nomination form." />

          <div className="mx-auto mt-9 grid max-w-4xl gap-3 md:grid-cols-[1fr_260px]" role="search" aria-label="Filter award categories">
            <label className="relative block">
              <span className="sr-only">Search award categories</span>
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true" />
              <input className="field !mt-0 pl-11" type="search" placeholder="Search categories..." value={search} onChange={event => setSearch(event.target.value)} />
            </label>
            <label>
              <span className="sr-only">Filter by category group</span>
              <select className="field !mt-0" value={group} onChange={event => setGroup(event.target.value)}>
                {awardGroups2026.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
            </label>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500" aria-live="polite">Showing {visible.length} of {awardCategories2026.length} categories</p>

          {visible.length ? (
            <div className="mt-7 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visible.map(category => (
                <article key={category.number} className="card flex h-full flex-col overflow-hidden p-6" aria-labelledby={`award-category-${category.number}`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-900"><Award size={14} aria-hidden="true" /> Category {category.number}</span>
                    <span className="text-right text-[11px] font-semibold text-slate-500">{category.group}</span>
                  </div>
                  <h3 id={`award-category-${category.number}`} className="mt-5 min-h-12 text-center text-lg font-extrabold leading-snug text-slate-950">{category.title}</h3>
                  <details className="awards-requirements mt-5 rounded-2xl border border-slate-200 bg-[#fbfaf6] px-4 py-3">
                    <summary className="cursor-pointer list-none text-sm font-extrabold text-emerald-900">View 5 eligibility requirements <ChevronDown size={18} className="inline-block align-middle transition-transform" aria-hidden="true" /></summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-700">
                      {category.requirements.map(requirement => <li key={requirement}>{requirement}</li>)}
                    </ol>
                  </details>
                  <Link to={`/awards/nominate?category=${category.number}`} className="btn-primary mt-5 w-full">Nominate in this category <ArrowRight size={16} aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-slate-200 bg-white px-5 py-10 text-center">
              <p className="font-bold text-slate-900">No categories matched your search.</p>
              <button type="button" className="btn-secondary mt-4" onClick={() => { setSearch(''); setGroup('All categories') }}>Clear filters</button>
            </div>
          )}
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">The supplied category list skips number 14. We have retained the original 2026 numbering rather than inventing a category.</p>
        </div>
      </section>

      <section className="bg-emerald-50 section-space" aria-labelledby="nomination-journey-heading">
        <div className="container-shell">
          <SectionHeading id="nomination-journey-heading" eyebrow="How nominations will work" title="A simple, accountable journey" copy="The steps below illustrate the planned process. Verified registration, review and official submission will be added with the backend." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { Icon: UsersRound, title: '1. Sign in securely', copy: 'A verified participant account will be required before submitting a nomination.' },
              { Icon: BookOpenCheck, title: '2. Choose & describe', copy: 'Select the award category, say who you are nominating and explain their contribution.' },
              { Icon: CheckCircle2, title: '3. Review eligibility', copy: 'Check the rules and submit for organiser review when the secure service is available.' },
            ].map(({ Icon, title, copy }) => (
              <div key={title} className="rounded-3xl border border-emerald-100 bg-white p-7 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-emerald-900 text-amber-200"><Icon size={22} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><Link to="/awards/nominate" className="btn-primary">Review nomination form <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="container-shell section-space" aria-labelledby="awards-history-heading">
        <div className="mb-8 text-center">
          <p className="eyebrow">Previous editions</p>
          <h2 id="awards-history-heading" className="section-title">Honouring community contribution</h2>
          <p className="section-copy">This separate historical record draws on published 2024 coverage; it is not a list of 2026 nominees.</p>
        </div>
        <PastWinners />
      </section>
      <section className="bg-emerald-950 py-12 text-white">
        <div className="container-shell text-center">
          <Clock3 size={24} className="mx-auto text-amber-300" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-extrabold">Voting is not yet enabled on this website.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-emerald-50/75">Live results will require verified voter accounts, a secure database, published rules, independent tally checks and a formal opening announcement. A nomination is not a vote.</p>
          <div className="mt-6 flex justify-center"><Link className="btn-gold" to="/awards/vote">Explore the ballot design <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </>
  )
}
