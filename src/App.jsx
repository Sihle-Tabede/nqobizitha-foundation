import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Reflections from './pages/Reflections'
import Privacy from './pages/Privacy'
import Navbar from './components/Navbar'
import About from './pages/About'
import Campaigns from './pages/Campaigns'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Activities from './pages/Activities'
import Awards from './pages/Awards'
import Nominate from './pages/Nominate'
import GetInvolved from './pages/GetInvolved'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import VoterEligibility from './pages/VoterEligibility'
import VotingPreview from './pages/VotingPreview'
import { useDemoAuth } from './context/DemoAuth'
import Home from './pages/Home'
import Programmes from './pages/Programmes'
import RequestAssistance from './pages/RequestAssistance'
import AdminWorkspace from './admin/AdminWorkspace'

const pageTitles = {
  '/': 'Home', '/about': 'About', '/programmes': 'Programmes',
  '/campaigns': 'Campaigns', '/activities': 'Activities', '/gallery': 'Gallery',
  '/reflections': 'Reflections', '/awards': 'Community Awards', '/awards/nominate': 'Nomination preview',
  '/awards/eligibility': 'Voter eligibility guide', '/awards/vote': 'Voting preview',
  '/get-involved': 'Get involved', '/sign-in': 'Sign In', '/sign-up': 'Sign Up', '/account': 'My account', '/donate': 'Support a cause',
  '/request-assistance': 'Request assistance', '/contact': 'Contact', '/privacy': 'Privacy & safety',
}

function RouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = `${pageTitles[pathname] || 'Community'} | Nqobizitha Thabede Foundation`
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }))
    } else {
      window.scrollTo(0, 0)
    }
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}

export default function App() {
  const { pathname, search } = useLocation()
  const { user } = useDemoAuth()
  // Visual-only route gating: not a security boundary. Server authorization is required for launch.
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return user?.role === 'admin'
      ? <AdminWorkspace />
      : <Navigate to="/sign-in" replace state={{ from: pathname + search }} />
  }

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-slate-950">
      <RouteScroll />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/awards/eligibility" element={<VoterEligibility />} />
          <Route path="/awards/vote" element={<VotingPreview />} />
          <Route path="/awards/nominate" element={user ? <Nominate /> : <Navigate to="/sign-in" replace state={{ from: pathname + search }} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/events" element={<Navigate to="/activities" replace />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/account" element={user ? (user.role === 'admin' ? <Navigate to="/admin" replace /> : <Account />) : <Navigate to="/sign-in" replace state={{ from: '/account' }} />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/request-assistance" element={<RequestAssistance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
