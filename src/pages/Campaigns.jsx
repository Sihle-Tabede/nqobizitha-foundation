import { ArrowUpRight, Footprints, ShieldCheck, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
import CampaignCard from '../components/CampaignCard'
import SectionHeading from '../components/SectionHeading'
import { campaigns, socialLinks } from '../data/content'

export default function Campaigns() {
  return (
    <>
      <PageHero
        eyebrow="Fundraising campaigns"
        title="Support should come with a clear story and a clear purpose."
        copy="This campaign hub is designed to show what is being raised, who the support is for, and where verified progress updates can be published."
      />

      <section className="container-shell section-space">
        <CampaignCard campaign={campaigns[0]} featured />
      </section>

      <section className="bg-white section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why transparency matters"
            title="Make it easy for supporters to understand the journey"
            copy="Fundraising information should feel trustworthy without pretending the system knows more than it does. This prototype only displays figures that have been supplied or can be verified."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [Target, 'Purpose first', 'Every campaign explains the need before asking for support.'],
              [ShieldCheck, 'Verified progress', 'Amount-raised figures can be shown after the foundation confirms them.'],
              [Footprints, 'Updates over time', 'Milestones, photos and outcomes can be added as the campaign develops.'],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-[#fbfaf6] p-5">
                <Icon size={20} className="text-emerald-800" />
                <h3 className="mt-4 font-black">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-amber-50 p-7 sm:p-9">
          <p className="eyebrow">Campaign updates</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Follow the foundation’s official channels for the latest figures.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Until donation tracking is connected to a backend, verified campaign progress can continue to be published through the foundation’s existing social channels.</p>
          <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="btn-primary mt-6">View official updates <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </>
  )
}
