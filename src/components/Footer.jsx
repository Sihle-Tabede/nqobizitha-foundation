import { ArrowRight, ArrowUpRight, Camera, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { socialLinks } from '../data/content'

const explore = [
  ['About the foundation', '/about'],
  ['Our work', '/programmes'],
  ['Gallery', '/gallery'],
  ['Community awards', '/awards'],
  ['Foundation reflections', '/reflections'],
]

const participate = [
  ['Campaigns', '/campaigns'],
  ['Volunteer or partner', '/get-involved'],
  ['Support a cause', '/donate'],
  ['Request assistance', '/request-assistance'],
]

function FooterLinks({ title, links }) {
  return (
    <nav aria-label={`${title} footer links`} className="text-center">
      <h3 className="text-sm font-extrabold tracking-wide text-white">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm text-emerald-50/80">
        {links.map(([label, to]) => (
          <li key={to}>
            <Link className="footer-link inline-flex min-h-8 items-center justify-center rounded-md hover:text-amber-200 focus-visible:text-amber-200" to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="foundation-footer relative overflow-hidden bg-[#062b23] text-white" aria-label="Nqobizitha Foundation footer">
      <div className="footer-accent-line" aria-hidden="true" />
      <div className="footer-ambient-glow pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2" aria-hidden="true" />

      <div className="container-shell relative">
        <div className="border-b border-white/15 py-12 text-center sm:py-16">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-amber-300">The heart of our mission</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            One Bread Can Feed <span className="text-amber-300">a Community.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-emerald-50/80 sm:text-base">
            When we each give what we can, small acts of kindness can reach further.
          </p>
          <Link className="btn-gold mt-7" to="/get-involved">Be part of the change <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>

        <div className="grid gap-x-7 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_.85fr_.85fr_1fr] lg:gap-8 lg:py-16">
          <div className="mx-auto w-full max-w-xs text-center">
            <div className="mx-auto max-w-[245px]"><Logo light /></div>
            <p className="mt-5 text-sm leading-7 text-emerald-50/80">
              Supporting families, opening doors for young people and celebrating the people who uplift our community.
            </p>
            <p className="mt-4 inline-flex items-start justify-center gap-2 text-xs leading-6 text-emerald-50/75">
              <MapPin size={16} className="mt-1 shrink-0 text-amber-300" aria-hidden="true" />
              Pongola (uPhongolo), KwaZulu-Natal
            </p>
          </div>

          <FooterLinks title="Discover" links={explore} />
          <FooterLinks title="Take part" links={participate} />

          <div className="text-center">
            <h3 className="text-sm font-extrabold tracking-wide text-white">Stay connected</h3>
            <p className="mx-auto mt-5 max-w-[260px] text-sm leading-7 text-emerald-50/80">
              Follow the foundation's public channels for campaign news and event updates.
            </p>
            <div className="mx-auto mt-5 grid max-w-[260px] gap-2.5">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:border-amber-300/50 hover:bg-white/15">
                <span className="inline-flex items-center gap-2"><MessageCircle size={18} className="text-amber-300" aria-hidden="true" /> Facebook</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:border-amber-300/50 hover:bg-white/15">
                <span className="inline-flex items-center gap-2"><Camera size={18} className="text-amber-300" aria-hidden="true" /> Instagram</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <Link className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-amber-200 underline underline-offset-4 hover:text-amber-100" to="/contact">Contact the foundation <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 bg-black/10">
        <div className="container-shell footer-bottom-clearance flex flex-col items-center justify-between gap-3 py-5 text-center text-xs leading-5 text-emerald-50/75 lg:flex-row">
          <p>© {new Date().getFullYear()} Nqobizitha Thabede Foundation.</p>
          <p>Community care · Youth opportunity · Recognition</p>
          <Link className="rounded-md font-bold text-emerald-50 underline underline-offset-4 hover:text-amber-200" to="/privacy">Privacy & online safety</Link>
        </div>
      </div>
    </footer>
  )
}
