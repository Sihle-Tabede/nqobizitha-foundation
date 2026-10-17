import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { socialLinks } from '../data/content'

const guidance = [
  ['No live submissions', 'This prototype does not operate a secure intake or donation service. Its demonstration forms do not send, save or process information.'],
  ['Share less, stay safer', 'Do not post identity numbers, home addresses, banking details, photos of children or sensitive family circumstances in public comments.'],
  ['Check the destination', 'Use only the foundation’s official channels to confirm bank details, voting links and ticket sellers. This website does not accept payments or votes.'],
  ['Consent and dignity', 'Only publish community photos and personal stories after appropriate permission. Protect children and vulnerable individuals through additional review.'],
  ['Your connection', 'Enable Low-data mode in the navigation to avoid downloading optional stock photographs. This preference is kept on your own device.'],
]

export default function Privacy() {
  return <>
    <PageHero eyebrow="Privacy & online safety" title="Community trust includes digital safety." copy="A transparent explanation of what the current website does, what it does not do and how to participate more safely online." />
    <section className="container-shell section-space">
      <div className="grid gap-5 md:grid-cols-2">
        {guidance.map(([title, body]) => (
          <article key={title} className="card p-7"><ShieldCheck size={25} className="text-emerald-800" aria-hidden="true" /><h2 className="mt-4 text-xl font-extrabold">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></article>
        ))}
      </div>
      <div className="mt-10 rounded-[2rem] bg-emerald-950 p-7 text-white sm:p-9">
        <h2 className="text-2xl font-extrabold">Before live forms or payments launch</h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-emerald-50/85">The platform will require a protected server, encrypted connections, input validation, spam and abuse protection, access controls, audit logging, data-retention rules, verified payment-provider integration and a reviewed privacy notice in line with applicable South African privacy requirements. These controls are a deployment requirement, not features claimed to exist in this frontend prototype.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link to="/contact" className="btn-gold">Contact options</Link><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">Official updates <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      </div>
    </section>
  </>
}
