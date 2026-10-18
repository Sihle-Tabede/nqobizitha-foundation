import { ArrowLeft, HandHeart } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

/** Shared sign-in / sign-up shell. Keep the brand panel intentionally minimal. */
export default function AuthShell({ mode, title, subtitle, children }) {
  const isSignIn = mode === 'sign-in'

  return (
    <section className="auth-background px-4 py-8 sm:px-6 sm:py-12 lg:py-16" aria-labelledby="auth-title">
      <div className="mx-auto max-w-[1060px]">
        <Link to="/" className="auth-back-link"><ArrowLeft size={17} aria-hidden="true" /> Back to the foundation</Link>
        <div className="auth-card mt-5">
          <aside className="auth-brand-panel" aria-label="Nqobizitha Foundation">
            <div className="auth-brand-content">
              <span className="auth-brand-icon" aria-hidden="true"><HandHeart size={53} strokeWidth={1.7} /></span>
              <h2 className="auth-brand-name">Nqobizitha <span>Foundation</span></h2>
              <p className="auth-brand-slogan">One Bread Can Feed a Community.</p>
            </div>
          </aside>
          <div className="auth-form-panel">
            <div className="auth-mobile-brand" aria-label="Nqobizitha Foundation">
              <HandHeart size={27} strokeWidth={1.8} aria-hidden="true" />
              <span>Nqobizitha <strong>Foundation</strong><small className="auth-mobile-slogan">One Bread Can Feed a Community.</small></span>
            </div>
            <div className="auth-switch" aria-label="Account options">
              <NavLink to="/sign-in" className={({ isActive }) => `auth-switch-link ${isActive ? 'auth-switch-selected' : ''}`} aria-current={isSignIn ? 'page' : undefined}>Sign In</NavLink>
              <NavLink to="/sign-up" className={({ isActive }) => `auth-switch-link ${isActive ? 'auth-switch-selected' : ''}`} aria-current={!isSignIn ? 'page' : undefined}>Sign Up</NavLink>
            </div>
            <div className="auth-form-heading">
              <h1 id="auth-title" className="auth-form-title">{title}</h1>
              <p className="auth-form-subtitle">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
