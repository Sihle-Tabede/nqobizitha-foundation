import { useState } from 'react'
import { ArrowRight, CheckCircle2, Eye, EyeOff, LogOut, ShieldAlert, ShieldCheck, UserRound } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'
import { DEMO_ACCOUNTS, useDemoAuth } from '../context/DemoAuth'

function safeRedirect(from, role) {
  if (typeof from !== 'string' || !from.startsWith('/') || from.startsWith('//') || from.includes('\\')) return null
  if (from.startsWith('/awards/nominate')) return from
  if (role === 'admin' && (from === '/admin' || from.startsWith('/admin/'))) return from
  if (role === 'member' && from === '/account') return from
  return null
}

export default function SignIn() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, signIn, signOut, storageMessage } = useDemoAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  function fill(account) {
    setEmail(account.email)
    setPassword(account.password)
    setError('')
  }

  function submit(event) {
    event.preventDefault()
    setError('')
    const result = signIn(email, password)
    if (!result.ok) { setError(result.message); return }
    setPassword('')
    navigate(safeRedirect(location.state?.from, result.role) || (result.role === 'admin' ? '/admin' : '/account'), { replace: true, state: null })
  }

  return <AuthShell mode="sign-in" title="Welcome back" subtitle="Explore awards, community activities and your account space.">
    {user ? (
      <div className="auth-session-card" role="status">
        <CheckCircle2 className="mx-auto text-emerald-700" size={34} aria-hidden="true" />
        <h2 className="mt-3 text-xl font-extrabold text-emerald-950">Welcome back</h2>
        <p className="mt-2 text-sm text-slate-700">Signed in as <strong>{user.name}</strong> ({user.role}).</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link className="auth-submit" to={user.role === 'admin' ? '/admin' : '/account'}>Open {user.role === 'admin' ? 'admin dashboard' : 'my account'} <ArrowRight size={18} aria-hidden="true" /></Link>
          <button type="button" className="btn-secondary" onClick={() => { signOut(); setPassword('') }}><LogOut size={16} aria-hidden="true" /> Sign out</button>
        </div>
      </div>
    ) : <>
      <form onSubmit={submit} className="auth-fields" aria-label="Sign in">
        <div><label className="auth-label" htmlFor="auth-email">Email address</label><input className="auth-input" type="email" id="auth-email" autoComplete="off" value={email} onChange={event => { setEmail(event.target.value); setError('') }} placeholder="Email address" required maxLength={120} /></div>
        <div><label className="auth-label" htmlFor="auth-password">Password</label><div className="auth-password-wrap"><input className="auth-input" type={showPassword ? 'text' : 'password'} id="auth-password" autoComplete="off" value={password} onChange={event => { setPassword(event.target.value); setError('') }} placeholder="Enter password" required /><button className="auth-eye" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button></div></div>
        {error && <p className="auth-error" role="alert">{error}</p>}
        <button className="auth-submit" type="submit">Sign In <ArrowRight size={18} aria-hidden="true" /></button>
      </form>
      <details className="auth-demo-accounts">
        <summary>Test access <span className="text-xs font-normal">(administrator or member)</span></summary>
        <div className="auth-demo-grid">
          {DEMO_ACCOUNTS.map(account => {
            const Icon = account.role === 'admin' ? ShieldCheck : UserRound
            return <button key={account.id} type="button" className="auth-demo-select" onClick={() => fill(account)}><Icon size={20} aria-hidden="true" /><span><strong>{account.role === 'admin' ? 'Administrator' : 'Community member'}</strong><small>{account.email}</small></span><ArrowRight size={16} aria-hidden="true" /></button>
          })}
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-600">Select a test account to fill its credentials, then press Sign In.</p>
      </details>
    </>}
    {storageMessage && <p className="mt-4 text-sm text-amber-900" role="status">{storageMessage}</p>}
    <p className="auth-bottom-prompt">New to the foundation? <Link to="/sign-up">Sign Up <ArrowRight size={15} aria-hidden="true" /></Link></p>
    <p className="auth-use-note" role="note">Test accounts only. Please do not use a personal password. Account verification and live submissions are not available through this sign-in page.</p>
  </AuthShell>
}
