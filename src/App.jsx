import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Campaigns from './pages/Campaigns'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Activities from './pages/Activities'
import Awards from './pages/Awards'
import GetInvolved from './pages/GetInvolved'
import Home from './pages/Home'
import Programmes from './pages/Programmes'
import RequestAssistance from './pages/RequestAssistance'

function RouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-slate-950">
      <RouteScroll />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/events" element={<Navigate to="/activities" replace />} />
          <Route path="/get-involved" element={<GetInvolved />} />
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
