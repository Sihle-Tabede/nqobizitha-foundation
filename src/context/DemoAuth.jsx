import { createContext, useCallback, useContext, useEffect, useState } from 'react'

// TEST ACCOUNTS ONLY. Browser-side comparisons and navigation are not security.
// Never replace these with real accounts or real user passwords.
export const DEMO_ACCOUNTS = Object.freeze([
  { id: 'admin', email: 'admin@demo.example', password: 'AdminDemo2026!', role: 'admin', name: 'Demo Administrator' },
  { id: 'member', email: 'member@demo.example', password: 'MemberDemo2026!', role: 'member', name: 'Demo Community Member' },
])

const NEW_MEMBER = Object.freeze({ id: 'signup-demo', email: 'demo-member@example.invalid', role: 'member', name: 'Community Member (Demo)' })
const SESSION_KEY = 'nqobizitha-demo-session-v1'
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000
const DemoAuthContext = createContext(null)

function readSession() {
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const saved = JSON.parse(raw)
    if (typeof saved?.expiresAt !== 'number' || saved.expiresAt <= Date.now()) {
      window.sessionStorage.removeItem(SESSION_KEY)
      return null
    }
    // Only resolve a known demonstration identity. No password is ever stored.
    const user = saved.id === NEW_MEMBER.id ? NEW_MEMBER : DEMO_ACCOUNTS.find(account => account.id === saved.id)
    return user ? { user, expiresAt: saved.expiresAt } : null
  } catch {
    return null
  }
}

export function DemoAuthProvider({ children }) {
  const [session, setSession] = useState(readSession)
  const user = session?.user || null
  const [storageMessage, setStorageMessage] = useState('')

  const signIn = useCallback((email, password) => {
    const account = DEMO_ACCOUNTS.find(item => item.email === email.trim().toLowerCase() && item.password === password)
    if (!account) return { ok: false, message: 'The demo email or password does not match. Choose one of the test accounts below.' }

    const expiresAt = Date.now() + SESSION_DURATION_MS
    setSession({ user: account, expiresAt })
    try {
      window.sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: account.id, expiresAt }))
      setStorageMessage('')
    } catch {
      setStorageMessage('This browser did not allow session storage; the demonstration login will end on refresh.')
    }
    return { ok: true, role: account.role }
  }, [])

  const startMemberDemo = useCallback(() => {
    // Frontend-only signup preview. No submitted form details are stored.
    const expiresAt = Date.now() + SESSION_DURATION_MS
    setSession({ user: NEW_MEMBER, expiresAt })
    try {
      window.sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: NEW_MEMBER.id, expiresAt }))
      setStorageMessage('')
    } catch {
      setStorageMessage('Session storage is unavailable; this demonstration ends on refresh.')
    }
    return { ok: true, role: 'member' }
  }, [])

  const signOut = useCallback(() => {
    try { window.sessionStorage.removeItem(SESSION_KEY) } catch { /* Session may not be available */ }
    setSession(null)
    setStorageMessage('')
  }, [])

  // Expire even if the tab stays open without a refresh.
  useEffect(() => {
    if (!session) return undefined
    const timeout = window.setTimeout(signOut, Math.max(0, session.expiresAt - Date.now()))
    return () => window.clearTimeout(timeout)
  }, [session, signOut])

  return (
    <DemoAuthContext.Provider value={{ user, signIn, startMemberDemo, signOut, storageMessage }}>
      {children}
    </DemoAuthContext.Provider>
  )
}

export function useDemoAuth() {
  const context = useContext(DemoAuthContext)
  if (!context) throw new Error('useDemoAuth must be used inside DemoAuthProvider')
  return context
}
