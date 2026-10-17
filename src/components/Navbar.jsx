import { HeartHandshake, Home, Images, Megaphone, Sparkles, WifiOff, HandHeart } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { usePreferences } from '../context/Preferences'

// The five most useful discovery routes stay visible at every screen size.
// Other important information (awards, contact, privacy, assistance) remains
// accessible through page links and the footer, without crowding the navbar.
const mainLinks = [
  { to: '/', label: 'Home', shortLabel: 'Home', Icon: Home, associated: ['/'] },
  { to: '/programmes', label: 'Our Work', shortLabel: 'Work', Icon: HandHeart, associated: ['/programmes', '/activities'] },
  { to: '/campaigns', label: 'Campaigns', shortLabel: 'Campaigns', Icon: Megaphone, associated: ['/campaigns'] },
  { to: '/gallery', label: 'Gallery', shortLabel: 'Gallery', Icon: Images, associated: ['/gallery'] },
  { to: '/reflections', label: 'Reflections', shortLabel: 'Stories', Icon: Sparkles, associated: ['/reflections', '/awards'] },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const { lowData, setLowData } = usePreferences()
  const activeIndex = mainLinks.findIndex(({ associated }) => associated.includes(pathname))

  return (
    <>
      <header className="site-topbar sticky top-0 z-40 border-b border-emerald-950/10 bg-[#fbfaf6]/95 shadow-[0_1px_15px_rgba(6,56,42,0.04)] backdrop-blur-xl">
        <div className="container-shell flex h-[80px] items-center justify-between gap-3 lg:h-[88px]">
          <Link to="/" className="relative z-10 shrink-0 rounded-lg" aria-label="Nqobizitha Thabede Foundation — home">
            <Logo compact />
          </Link>

          {/* This space reserves room for the floating desktop navigation. */}
          <div aria-hidden="true" className="hidden flex-1 lg:block" />

          <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label={lowData ? 'Low-data mode is on. Show optional photographs' : 'Turn on low-data mode to save mobile data'}
              aria-pressed={lowData}
              onClick={() => setLowData(!lowData)}
              title={`Low-data mode ${lowData ? 'on' : 'off'} — toggle optional photographs`}
              className={`nav-data-toggle grid h-11 w-11 place-items-center rounded-full border transition-colors ${lowData ? 'border-emerald-800 bg-emerald-100 text-emerald-900' : 'border-emerald-900/15 bg-white text-emerald-900 hover:bg-emerald-50'}`}
            >
              <WifiOff aria-hidden="true" size={19} />
            </button>
            <NavLink
              to="/get-involved"
              className={({ isActive }) => `nav-engage-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-3.5 py-2.5 text-[13px] font-extrabold shadow-sm transition-colors sm:px-5 ${isActive ? 'bg-emerald-900 text-white' : 'bg-amber-400 text-emerald-950 hover:bg-amber-300'}`}
            >
              <HeartHandshake size={17} aria-hidden="true" />
              <span>Get involved</span>
            </NavLink>
          </div>
        </div>
      </header>

      <nav className="floating-nav" aria-label="Primary navigation">
        <div className="floating-nav-surface">
          <span
            className="floating-nav-indicator"
            aria-hidden="true"
            style={{ opacity: activeIndex < 0 ? 0 : 1, transform: `translateX(${Math.max(activeIndex, 0) * 100}%)` }}
          />
          {mainLinks.map(({ to, label, shortLabel, Icon, associated }) => {
            const selected = associated.includes(pathname)
            return (
              <NavLink
                key={to}
                to={to}
                end
                aria-current={pathname === to ? 'page' : undefined}
                className={`floating-nav-link ${selected ? 'is-selected' : ''}`}
              >
                <Icon size={20} strokeWidth={2.2} aria-hidden="true" className="floating-nav-icon" />
                <span className="floating-nav-label lg:hidden">{shortLabel}</span>
                <span className="hidden lg:inline">{label}</span>
              </NavLink>
            )
          })}
        </div>
      </nav>
    </>
  )
}
