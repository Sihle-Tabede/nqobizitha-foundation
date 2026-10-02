import { ArrowUpRight, Camera, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { socialLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.75fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-50/70">
            A community-based foundation supporting local upliftment, youth opportunity and practical acts of care in and around uPhongolo.
          </p>
          <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-emerald-50/60"><MapPin size={15} className="mt-0.5 shrink-0" /> Pongola (uPhongolo), KwaZulu-Natal, South Africa</p>
        </div>

        <div>
          <h4 className="text-sm font-extrabold">Explore</h4>
          <div className="mt-4 grid gap-2.5 text-sm text-emerald-50/65">
            <Link className="hover:text-white" to="/about">About us</Link>
            <Link className="hover:text-white" to="/programmes">Programmes</Link>
            <Link className="hover:text-white" to="/campaigns">Campaigns</Link>
            <Link className="hover:text-white" to="/activities">Activities</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-extrabold">Take action</h4>
          <div className="mt-4 grid gap-2.5 text-sm text-emerald-50/65">
            <Link className="hover:text-white" to="/donate">Donate</Link>
            <Link className="hover:text-white" to="/get-involved">Volunteer</Link>
            <Link className="hover:text-white" to="/get-involved#partner">Partner / sponsor</Link>
            <Link className="hover:text-white" to="/request-assistance">Request assistance</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-extrabold">Official updates</h4>
          <p className="mt-4 text-xs leading-5 text-emerald-50/60">Stay connected to current campaign and community updates through the foundation’s public social channels.</p>
          <div className="mt-5 grid gap-2">
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-xs font-bold transition hover:bg-white/15"><span className="inline-flex items-center gap-2"><MessageCircle size={15} /> Facebook</span><ArrowUpRight size={14} /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-xs font-bold transition hover:bg-white/15"><span className="inline-flex items-center gap-2"><Camera size={15} /> Instagram</span><ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-[11px] text-emerald-50/45 sm:flex-row sm:justify-between">
          <p>© 2026 Nqobizitha Thabede Foundation.</p>
          <p>Community • Youth • Upliftment</p>
        </div>
      </div>
    </footer>
  )
}
