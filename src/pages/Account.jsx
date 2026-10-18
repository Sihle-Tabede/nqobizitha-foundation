import { ArrowRight, Award, HandHeart, LogOut, ShieldAlert, UserRound, ShieldCheck, Vote } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useDemoAuth } from '../context/DemoAuth'

export default function Account() {
  const { user, signOut } = useDemoAuth()
  const navigate = useNavigate()
  return <>
    <PageHero eyebrow="Community account" title="Welcome to your community space." copy="Explore the foundation's awards and review the nomination process." />
    <section className="container-shell section-space">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-6 text-amber-950" role="note"><ShieldAlert size={23} className="shrink-0" aria-hidden="true" /><p><strong>Test account only.</strong> You are not verified, and this dashboard cannot submit or store real nominations or votes. Never enter sensitive personal information.</p></div>
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-sm sm:p-10">
          <UserRound className="mx-auto text-emerald-800" size={35} aria-hidden="true" />
          <h2 className="mt-3 text-center text-2xl font-extrabold text-emerald-950">{user?.name || 'Community member'}</h2>
          <p className="mt-3 text-center text-sm text-slate-600">{user?.email} · Test account</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 transition hover:border-emerald-700" to="/awards/nominate"><Award className="text-emerald-800" size={25} aria-hidden="true" /><strong className="mt-3 block text-base text-emerald-950">Try a nomination</strong><span className="mt-2 block text-sm text-slate-600">Choose a category and review your example nomination.</span><span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-800">Review form <ArrowRight size={16} /></span></Link>
            <Link className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 transition hover:border-emerald-700" to="/awards/eligibility"><ShieldCheck className="text-emerald-800" size={25} aria-hidden="true" /><strong className="mt-3 block text-base text-emerald-950">Community verification</strong><span className="mt-2 block text-sm text-slate-600">Explore current and former resident eligibility pathways.</span><span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-800">Eligibility guide <ArrowRight size={16} /></span></Link>
            <Link className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 transition hover:border-emerald-700" to="/awards/vote"><Vote className="text-emerald-800" size={25} aria-hidden="true" /><strong className="mt-3 block text-base text-emerald-950">Explore the ballot</strong><span className="mt-2 block text-sm text-slate-600">Try the category selection and vote confirmation interface.</span><span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-800">Ballot preview <ArrowRight size={16} /></span></Link>
            <Link className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 transition hover:border-emerald-700" to="/get-involved"><HandHeart className="text-emerald-800" size={25} aria-hidden="true" /><strong className="mt-3 block text-base text-emerald-950">Get involved</strong><span className="mt-2 block text-sm text-slate-600">See ways to participate in foundation activities.</span><span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-800">Explore <ArrowRight size={16} /></span></Link>
          </div>
          <div className="mt-7 text-center"><button type="button" className="btn-secondary" onClick={() => { signOut(); navigate('/sign-in', { replace: true }) }}><LogOut size={17} aria-hidden="true" /> Sign out</button></div>
        </div>
      </div>
    </section>
  </>
}
