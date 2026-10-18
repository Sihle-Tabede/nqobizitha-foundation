import { ArrowUpRight, Camera, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { socialLinks } from '../data/content'

const channels = [
  {
    title: 'Official Facebook',
    description: 'Follow campaigns and enquire about volunteering or partnerships.',
    icon: MessageCircle,
    url: socialLinks.facebook,
    action: 'Visit Facebook',
  },
  {
    title: 'Instagram',
    description: 'See public updates and community-related announcements.',
    icon: Camera,
    url: socialLinks.instagram,
    action: 'Visit Instagram',
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact the foundation"
        title="Stay connected with the community."
        copy="Find current announcements and ask about opportunities to participate using the public channels linked below."
      />
      <section className="container-shell section-space">
        <SectionHeading eyebrow="Connect with us" title="Start with an official channel" copy="Contact the foundation through its official channels. Please avoid sending sensitive personal information through public social-media comments." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          {channels.map(({ title, description, icon: Icon, url, action }) => (
            <article key={title} className="card flex flex-col items-center p-7 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={24} aria-hidden="true" /></span>
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">{action} <ArrowUpRight size={16} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-9 flex max-w-3xl flex-col items-center gap-3 rounded-2xl bg-emerald-50 p-6 text-center text-sm leading-7 text-emerald-950">
          <MapPin aria-hidden="true" /> Pongola (uPhongolo), KwaZulu-Natal
          <p className="flex items-start justify-center gap-2 text-slate-700"><ShieldCheck size={18} className="mt-1 shrink-0" aria-hidden="true" /> Never post identity numbers, bank details or sensitive family information in public comments.</p>
        </div>
      </section>
    </>
  )
}
