import { ArrowUpRight, HeartHandshake, LockKeyhole, Phone, ShieldAlert } from 'lucide-react'
import PageHero from '../components/PageHero'
import { socialLinks } from '../data/content'

export default function RequestAssistance() {
  return (
    <>
      <PageHero
        eyebrow="Request assistance"
        title="Asking for help should be simple — and safe."
        copy="The foundation's community support is centred on practical needs and respect for families. This prototype cannot receive private assistance requests yet."
      />
      <section className="container-shell section-space grid gap-8 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
        <div className="rounded-[2rem] bg-emerald-950 p-8 text-white sm:p-10">
          <HeartHandshake size={32} className="text-amber-300" aria-hidden="true" />
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[.18em] text-amber-300">Your dignity comes first</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight">Help should never require exposing your private story in public.</h2>
          <p className="mt-5 text-sm leading-8 text-emerald-50/85">The live support-request form will be introduced only after confidential submission, proper access controls and safeguarding have been implemented. For now, use the foundation’s official contact channel to ask how to reach the appropriate team privately.</p>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">View official contact channel <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-amber-300 bg-amber-50 p-7 sm:p-9" role="status">
            <ShieldAlert size={30} className="text-amber-800" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-extrabold">Online requests are not open yet</h2>
            <p className="mt-3 text-sm leading-7 text-amber-950">Please do not type or share your ID number, banking information, exact address, identity documents or sensitive family details on this demonstration website or in a public social-media comment. No request can be submitted here.</p>
          </div>
          <div className="card p-7"><div className="flex items-start gap-4"><LockKeyhole size={23} className="mt-1 shrink-0 text-emerald-800" aria-hidden="true" /><div><h3 className="text-lg font-extrabold">What to prepare when a safe channel is available</h3><p className="mt-2 text-sm leading-7 text-slate-600">A brief description of the help needed, the general community area and a safe way for the team to reply. Only share more details if the foundation confirms a private, legitimate process.</p></div></div></div>
          <div className="card p-7"><div className="flex items-start gap-4"><Phone size={23} className="mt-1 shrink-0 text-amber-800" aria-hidden="true" /><div><h3 className="text-lg font-extrabold">Immediate danger or emergency?</h3><p className="mt-2 text-sm leading-7 text-slate-600">The foundation website is not an emergency-response service. Seek help from local emergency services when life or safety is at immediate risk.</p></div></div></div>
        </div>
      </section>
    </>
  )
}
