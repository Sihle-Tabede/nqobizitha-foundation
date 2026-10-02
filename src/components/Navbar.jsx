import { useState } from 'react'
import { ArrowUpRight, Heart, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { socialLinks } from '../data/content'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/programmes', 'What we do'],
  ['/campaigns', 'Campaigns'],
  ['/events', 'Activities'],
  ['/get-involved', 'Get involved'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navClass = ({ isActive }) =>
    `relative py-2 text-sm font-bold transition ${
      isActive ? 'text-emerald-800' : 'text-slate-600 hover:text-emerald-800'
    }`

  return (
    <>
      <div className="bg-emerald-950 text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 py-2 text-[11px] font-semibold text-emerald-50/85">
          <p>Rooted in uPhongolo. Community upliftment in action.</p>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 text-amber-300 hover:text-amber-200 sm:inline-flex"
          >
            Official updates <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fbfaf6]/95 backdrop-blur-xl">
        <div className="container-shell flex min-h-[104px] items-center justify-between gap-5 py-2 sm:min-h-[116px] lg:min-h-[124px]">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Nqobizitha Thabede Foundation home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={navClass}>
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && <span className="absolute inset-x-1 -bottom-[32px] h-0.5 rounded-full bg-amber-400" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/donate" className="btn-primary">
              <Heart size={16} fill="currentColor" /> Support a cause
            </Link>
          </div>

          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-[#fbfaf6] lg:hidden">
            <div className="container-shell flex flex-col gap-1 py-4">
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-sm font-bold ${
                      isActive ? 'bg-emerald-50 text-emerald-800' : 'text-slate-700 hover:bg-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
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
