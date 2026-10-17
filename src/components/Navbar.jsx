import { useState } from 'react'
import { ArrowUpRight, Heart, Menu, X, WifiOff } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { socialLinks } from '../data/content'
import { usePreferences } from '../context/Preferences'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/programmes', 'Programmes'],
  ['/campaigns', 'Campaigns'],
  ['/activities', 'Activities'],
  ['/gallery', 'Gallery'],
  ['/reflections', 'Reflections'],
  ['/awards', 'Awards'],
  ['/get-involved', 'Get involved'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lowData, setLowData } = usePreferences()

  const navClass = ({ isActive }) =>
    `rounded-full px-2.5 py-2 text-[13px] font-bold transition-colors ${
      isActive
        ? 'bg-emerald-50 text-emerald-800'
        : 'text-slate-600 hover:bg-white hover:text-emerald-800'
    }`

  const lowDataToggle = (mobile = false) => (
    <button type="button" aria-pressed={lowData} onClick={() => setLowData(!lowData)} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-emerald-950 hover:border-emerald-700 ${mobile ? 'w-full' : ''}`} title="Turn optional photographs on or off to save mobile data">
      <WifiOff size={16} aria-hidden="true" /> Low-data {lowData ? 'on' : 'off'}
    </button>
  )

  return (
    <>
      <div className="bg-emerald-950 text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 py-2 text-[11px] font-semibold text-emerald-50/85">
          <p>Rooted in Pongola (uPhongolo). Community upliftment in action.</p>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 text-amber-300 transition hover:text-amber-200 sm:inline-flex"
          >
            Official updates <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fbfaf6]/95 backdrop-blur-xl">
        <div className="container-shell 2xl:max-w-[1480px] flex min-h-[100px] items-center justify-between gap-5 py-2 lg:min-h-[108px]">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Nqobizitha Thabede Foundation home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 2xl:flex" aria-label="Main navigation">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={navClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden 2xl:flex items-center gap-2">
            {lowDataToggle()}
            <Link to="/donate" className="btn-primary">
              <Heart size={16} fill="currentColor" /> Support a cause
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:border-emerald-200 hover:text-emerald-800 2xl:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" className="border-t border-slate-100 bg-[#fbfaf6] 2xl:hidden">
            <div className="container-shell flex max-h-[72vh] flex-col gap-1 overflow-y-auto py-4">
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-sm font-bold transition ${
                      isActive ? 'bg-emerald-50 text-emerald-800' : 'text-slate-700 hover:bg-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              {lowDataToggle(true)}
              <Link to="/donate" onClick={() => setOpen(false)} className="btn-primary mt-3">
                <Heart size={16} /> Support a cause
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
