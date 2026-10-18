import { useState } from 'react'
import { ArrowRight, CheckCircle2, Eye, EyeOff, LogOut, ShieldAlert, UserPlus } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'
import { useDemoAuth } from '../context/DemoAuth'

export default function SignUp() {
  const navigate = useNavigate()
  const { user, startMemberDemo, signOut, storageMessage } = useDemoAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', accepts: false })
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState('')

  function update(key, value) { setForm(previous => ({ ...previous, [key]: value })); setError('') }
  function submit(event) {
    event.preventDefault()
    const { name, email, password, confirm, accepts } = form
    if (name.trim().length < 2 || name.trim().length > 70) { setError('Enter a name between 2 and 70 characters.'); return }
    if (!email.includes('@') || email.length > 120) { setError('Enter an email in the correct format.'); return }
    if (password.length < 8) { setError('Use at least 8 characters.'); return }
    if (password !== confirm) { setError('The passwords do not match.'); return }
    if (!accepts) { setError('Please confirm the test-access notice.'); return }
    // Only grants a generic member demo role. None of the typed details are saved or used as credentials.
    startMemberDemo()
    setForm({ name: '', email: '', password: '', confirm: '', accepts: false })
    navigate('/account', { replace: true })
  }

  return <AuthShell mode="sign-up" title="Join our community" subtitle="Connect with the foundation community.">
    {user ? (
      <div className="auth-session-card"><CheckCircle2 size={34} className="mx-auto text-emerald-700" aria-hidden="true"/><h2 className="mt-3 text-xl font-extrabold text-emerald-950">You are signed in</h2><p className="mt-2 text-sm text-slate-700">You are signed in as {user.name}.</p><div className="mt-5 flex flex-wrap justify-center gap-3"><Link className="auth-submit" to={user.role === 'admin' ? '/admin' : '/account'}>Continue <ArrowRight size={17} aria-hidden="true"/></Link><button className="btn-secondary" type="button" onClick={signOut}><LogOut size={16} aria-hidden="true" /> Sign out</button></div></div>
    ) : <form className="auth-fields" onSubmit={submit} aria-label="Sign-up form">
      <div><label htmlFor="join-name" className="auth-label">Name </label><input id="join-name" className="auth-input" required minLength={2} maxLength={70} autoComplete="off" placeholder="Example Member" value={form.name} onChange={event => update('name', event.target.value)} /></div>
      <div><label htmlFor="join-email" className="auth-label">Email address </label><input id="join-email" type="email" className="auth-input" required maxLength={120} autoComplete="off" placeholder="member@example.com" value={form.email} onChange={event => update('email', event.target.value)} /></div>
      <div className="auth-signup-passwords"><div><label htmlFor="join-password" className="auth-label">Password</label><div className="auth-password-wrap"><input id="join-password" className="auth-input" type={visible ? 'text' : 'password'} required minLength={8} autoComplete="new-password" placeholder="At least 8 characters" value={form.password} onChange={event => update('password', event.target.value)}/><button className="auth-eye" type="button" onClick={() => setVisible(value => !value)} aria-label={visible ? 'Hide passwords' : 'Show passwords'} aria-pressed={visible}>{visible ? <EyeOff size={19}/> : <Eye size={19}/>}</button></div></div>
      <div><label htmlFor="join-confirm" className="auth-label">Confirm password</label><input id="join-confirm" className="auth-input" type={visible ? 'text' : 'password'} autoComplete="off" placeholder="Repeat password" required value={form.confirm} onChange={event => update('confirm', event.target.value)} /></div></div>
      <label className="auth-check-label"><input type="checkbox" checked={form.accepts} onChange={event => update('accepts', event.target.checked)} required/><span>I understand this form gives test access only and does not register me for official nominations.</span></label>
      {error && <p className="auth-error" role="alert">{error}</p>}
      <button type="submit" className="auth-submit"><UserPlus size={18} aria-hidden="true"/> Continue <ArrowRight size={18} aria-hidden="true"/></button>
    </form>}
    {storageMessage && <p className="mt-4 text-sm text-amber-900" role="status">{storageMessage}</p>}
    <p className="auth-bottom-prompt">Already have an account? <Link to="/sign-in">Sign In <ArrowRight size={15} aria-hidden="true" /></Link></p>
    <p className="auth-use-note" role="note">Registration is not active. Please use fictional details only: the information entered here is discarded, and continuing simply opens a test member space.</p>
  </AuthShell>
}
