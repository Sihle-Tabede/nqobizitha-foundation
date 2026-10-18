import { Award, LogIn, LogOut, LayoutDashboard, UserRound, Home, Images, Megaphone, Sparkles, WifiOff, HandHeart, Info } from 'lucide-react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { usePreferences } from '../context/Preferences'
import { useDemoAuth } from '../context/DemoAuth'

// Seven direct routes keep About, Awards, and Reflections visible.
// Contact, donations, and assistance stay accessible through page links and the footer.
const mainLinks = [
  { to: '/', label: 'Home', shortLabel: 'Home', Icon: Home, associated: ['/'] },
  { to: '/about', label: 'About', shortLabel: 'About', Icon: Info, associated: ['/about'] },
  { to: '/programmes', label: 'Our Work', shortLabel: 'Work', Icon: HandHeart, associated: ['/programmes', '/activities'] },
  { to: '/campaigns', label: 'Campaigns', shortLabel: 'Join', Icon: Megaphone, associated: ['/campaigns'] },
  { to: '/gallery', label: 'Gallery', shortLabel: 'Gallery', Icon: Images, associated: ['/gallery'] },
  { to: '/awards', label: 'Awards', shortLabel: 'Awards', Icon: Award, associated: ['/awards', '/awards/nominate', '/awards/vote', '/awards/eligibility'] },
  { to: '/reflections', label: 'Reflections', shortLabel: 'Reflect', Icon: Sparkles, associated: ['/reflections'] },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useDemoAuth()
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
              to={user ? (user.role === 'admin' ? '/admin' : '/account') : '/sign-in'}
              className={({ isActive }) => `nav-engage-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-3.5 py-2.5 text-[13px] font-extrabold shadow-sm transition-colors sm:px-5 ${isActive ? 'bg-emerald-900 text-white' : 'bg-amber-400 text-emerald-950 hover:bg-amber-300'}`}
            >
              {user ? (user.role === 'admin' ? <LayoutDashboard size={17} strokeWidth={2.4} aria-hidden="true" /> : <UserRound size={17} strokeWidth={2.4} aria-hidden="true" />) : <LogIn size={17} strokeWidth={2.4} aria-hidden="true" />}
              {user?.role === 'member' ? <><span className="sm:hidden">Account</span><span className="hidden sm:inline">My account</span></> : <span>{user?.role === 'admin' ? 'Admin' : 'Sign In'}</span>}
            </NavLink>
            {user && <button
              type="button"
              onClick={() => { signOut(); navigate('/sign-in', { replace: true }) }}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-emerald-900/15 bg-white text-emerald-900 hover:bg-emerald-50"
              aria-label="Sign out" title="Sign out"
            ><LogOut size={18} aria-hidden="true" /></button>}
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
