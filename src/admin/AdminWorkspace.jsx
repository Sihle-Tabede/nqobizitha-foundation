import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowDownToLine, ArrowLeft, ArrowRight, Award, BookOpenText,
  Check, ChevronRight, CircleAlert, Clock3, FilePenLine, FileText,
  Globe2, HandHeart, HardDrive, Images, Info, LayoutDashboard, LockKeyhole, Vote,
  Megaphone, Menu, Pencil, Plus, RotateCcw, Search, Settings2, ShieldAlert, LogOut,
  Trash2, Users, X,
} from 'lucide-react'
import {
  ADMIN_DATA_VERSION, ADMIN_STORAGE_KEY, cleanLocalContent, currentWebsiteHighlights,
  getDisplayLabel, initialContent, isSafeEvidenceUrl, isSafeMediaUrl, modules,
} from './adminData'
import { awardCategories2026 } from '../data/awardCategories2026'
import './admin.css'
import AdminElections from './AdminElections'
import { useDemoAuth } from '../context/DemoAuth'

const navItems = [
  { key: 'overview', label: 'Overview', Icon: LayoutDashboard },
  { key: 'campaigns', label: 'Campaigns', Icon: Megaphone },
  { key: 'gallery', label: 'Gallery', Icon: Images },
  { key: 'awards', label: 'Awards', Icon: Award },
  { key: 'elections', label: 'Elections & voting', Icon: Vote },
  { key: 'reflections', label: 'Reflections', Icon: BookOpenText },
  { key: 'foundation', label: 'Foundation', Icon: HandHeart },
  { key: 'settings', label: 'Planning & data', Icon: Settings2 },
]

const statusClass = { Reference: 'admin-status-reference', Draft: 'admin-status-draft' }

function loadWorkspace() {
  try {
    const raw = window.localStorage.getItem(ADMIN_STORAGE_KEY)
    if (!raw) return initialContent
    return cleanLocalContent(JSON.parse(raw)) || initialContent
  } catch {
    return initialContent
  }
}

function useLocalWorkspace() {
  const [content, setContent] = useState(loadWorkspace)
  const [storageWarning, setStorageWarning] = useState('')
  useEffect(() => {
    try {
      const serialized = JSON.stringify({ version: ADMIN_DATA_VERSION, content })
      if (serialized.length > 150000) throw new Error('Local workspace size limit reached')
      window.localStorage.setItem(ADMIN_STORAGE_KEY, serialized)
      setStorageWarning('')
    } catch {
      setStorageWarning('Your browser could not save this workspace. Export your draft data before leaving the page.')
    }
  }, [content])
  return { content, setContent, storageWarning }
}

function Badge({ children, tone = 'neutral' }) {
  return <span className={`admin-badge admin-badge-${tone}`}>{children}</span>
}

function DashboardCard({ icon: Icon, label, value, foot, tint = 'emerald' }) {
  return (
    <div className="admin-stat-card">
      <div className={`admin-stat-icon admin-stat-${tint}`}><Icon size={21} aria-hidden="true" /></div>
      <p className="admin-stat-label">{label}</p>
      <p className="admin-stat-value">{value}</p>
      <p className="admin-stat-foot">{foot}</p>
    </div>
  )
}

function AdminOverview({ content, goTo }) {
  const drafts = Object.values(content).flat().filter(item => item.stage === 'Draft')
  const recent = drafts.filter(item => item.updatedAt).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 4)
  const quick = [
    { key: 'campaigns', Icon: Megaphone, desc: 'Prepare community updates' },
    { key: 'gallery', Icon: Images, desc: 'Organise approved imagery' },
    { key: 'awards', Icon: Award, desc: 'Draft awards records' },
    { key: 'elections', Icon: Vote, desc: 'Plan the election experience' },
    { key: 'reflections', Icon: BookOpenText, desc: 'Write editorial reflections' },
  ]
  return (
    <div className="admin-stack">
      <section className="admin-welcome" aria-labelledby="admin-welcome-title">
        <div className="admin-welcome-art" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl">
          <div className="admin-overline text-amber-300">One Bread Can Feed a Community</div>
          <h2 id="admin-welcome-title" className="admin-welcome-title">Keep the mission moving forward.</h2>
          <p className="admin-welcome-text">Organise campaigns, recognition and community stories in one simple workspace. Prepare your content now; connect secure publishing when the backend is ready.</p>
          <button className="admin-cta-white" type="button" onClick={() => goTo('campaigns')}>Explore content <ArrowRight size={18} aria-hidden="true" /></button>
        </div>
        <div className="admin-welcome-mark" aria-hidden="true"><HandHeart size={86} strokeWidth={1} /></div>
      </section>

      <section aria-label="Local workspace overview">
        <div className="admin-grid-stats">
          <DashboardCard icon={FilePenLine} label="Your local drafts" value={drafts.length} foot="Not published to the website" />
          <DashboardCard icon={Megaphone} label="Campaign references" value={content.campaigns.length} foot="Reference entries and drafts" tint="gold" />
          <DashboardCard icon={Images} label="Gallery references" value={content.gallery.length} foot="Photo records in this browser" />
          <DashboardCard icon={Award} label="Awards records" value={content.awards.length} foot="Verify before publication" tint="gold" />
        </div>
      </section>

      <div className="admin-two-column">
        <section className="admin-panel" aria-labelledby="admin-tools-heading">
          <div className="admin-panel-header">
            <div><p className="admin-overline">Content management</p><h2 id="admin-tools-heading" className="admin-panel-title">Manage your foundation</h2></div>
            <Badge>Local workspace</Badge>
          </div>
          <div className="admin-action-grid">
            {quick.map(({ key, Icon, desc }) => (
              <button type="button" key={key} className="admin-action" onClick={() => goTo(key)}>
                <span className="admin-action-icon"><Icon size={22} aria-hidden="true" /></span>
                <span className="min-w-0"><strong>{modules[key]?.label || (key === 'elections' ? 'Elections & voting' : key)}</strong><small>{desc}</small></span>
                <ChevronRight size={18} className="admin-action-chevron" aria-hidden="true" />
              </button>
            ))}
          </div>
        </section>
        <section className="admin-panel" aria-labelledby="admin-activity-heading">
          <div className="admin-panel-header"><div><p className="admin-overline">Your workspace</p><h2 id="admin-activity-heading" className="admin-panel-title">Recently edited drafts</h2></div><Clock3 size={19} color="#64748b" aria-hidden="true" /></div>
          {recent.length ? (
            <ul className="admin-recent-list">
              {recent.map(item => <li key={item.id}><span className="admin-recent-dot" /><span className="min-w-0"><strong>{item.title || 'Untitled draft'}</strong><small>Saved {new Date(item.updatedAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })} · only in this browser</small></span></li>)}
            </ul>
          ) : (
            <div className="admin-empty-small"><FileText size={27} aria-hidden="true" /><strong>No drafts yet</strong><p>Create or edit a reference entry to start preparing your content.</p></div>
          )}
        </section>
      </div>
      <section className="admin-impact-strip" aria-label="Current website reference">
        <div className="flex items-center gap-2"><Globe2 size={19} aria-hidden="true" /><strong>Existing public website</strong></div>
        <p>Changes here remain in this browser; the public website is not updated.</p>
        <Link to="/" className="admin-text-link">View website <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>
    </div>
  )
}

function formatUpdatedAt(value) {
  if (!value) return 'Website reference'
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? 'Local draft' : `Edited ${parsed.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`
}

function urlValidation(item, moduleId) {
  if ('image' in item && !isSafeMediaUrl(item.image)) return 'Image URLs must use HTTPS or a site-relative /images/... path.'
  if (moduleId === 'awards' && !isSafeEvidenceUrl(item.sourceUrl)) return 'Evidence links must use HTTPS.'
  return ''
}

function Editor({ moduleId, existing, onClose, onSave }) {
  const config = modules[moduleId]
  const [values, setValues] = useState(() => existing ? { ...existing } : { ...config.empty })
  const [error, setError] = useState('')
  const titleRef = useRef(null)
  const dialogRef = useRef(null)
  const openerRef = useRef(document.activeElement)

  useEffect(() => {
    titleRef.current?.focus()
    function onKeyDown(event) {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return }
      if (event.key !== 'Tab') return
      const focusable = [...dialogRef.current.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href]')]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => { document.removeEventListener('keydown', onKeyDown); openerRef.current?.focus?.() }
  }, [onClose])

  function save(event) {
    event.preventDefault()
    const problem = urlValidation(values, moduleId)
    if (problem) { setError(problem); return }
    setError('')
    onSave(values)
  }

  return (
    <div className="admin-dialog-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="admin-editor-title" aria-describedby="admin-editor-description" className="admin-editor-panel">
        <div className="admin-editor-head">
          <div><p className="admin-overline">Local content workspace</p><h2 id="admin-editor-title" tabIndex={-1} ref={titleRef} className="admin-panel-title">{existing ? 'Edit' : 'Create'} {config.singular}</h2></div>
          <button type="button" onClick={onClose} className="admin-icon-button" aria-label="Close editor"><X size={20} /></button>
        </div>
        <p id="admin-editor-description" className="admin-editor-description">Saved changes remain on this device only. They do not modify the public website.</p>
        <form onSubmit={save} className="admin-editor-form">
          {config.fields.map(field => {
            const id = `admin-field-${field.key}`
            return <div key={field.key} className="admin-form-group">
              <label htmlFor={id} className="admin-label">{field.label}{field.required ? <span aria-label="required" className="text-rose-700"> *</span> : null}</label>
              {field.type === 'textarea' ? (
                <textarea id={id} className="admin-input admin-textarea" value={values[field.key] || ''} maxLength={field.maxLength || 1400} required={Boolean(field.required)} onChange={e => setValues(prev => ({ ...prev, [field.key]: e.target.value }))} rows="4" />
              ) : field.type === 'select' ? (
                <select id={id} className="admin-input" value={values[field.key] || field.options[0]} onChange={e => setValues(prev => ({ ...prev, [field.key]: e.target.value }))}>
                  {field.options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
              ) : (
                <input id={id} className="admin-input" type={field.type === 'url' ? 'text' : field.type === 'year' ? 'number' : 'text'} min={field.type === 'year' ? 1900 : undefined} max={field.type === 'year' ? 2100 : undefined} inputMode={field.type === 'year' ? 'numeric' : undefined} value={values[field.key] || ''} maxLength={field.maxLength || (field.type === 'url' ? 2048 : 140)} required={Boolean(field.required)} placeholder={field.type === 'url' ? 'https://example.org/photo.jpg' : undefined} onChange={e => setValues(prev => ({ ...prev, [field.key]: e.target.value }))} />
              )}
            </div>
          })}
          {config.note && <p className="admin-editor-tip"><Info size={17} className="shrink-0" aria-hidden="true" />{config.note}</p>}
          {error && <p className="admin-error" role="alert">{error}</p>}
          <div className="admin-editor-actions">
            <button type="button" className="admin-btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" className="admin-btn-primary"><Check size={17} aria-hidden="true" />Save local draft</button>
          </div>
        </form>
      </section>
    </div>
  )
}

function RecordThumbnail({ record, moduleId }) {
  const canShowImage = (moduleId === 'gallery' || moduleId === 'campaigns') && record.image && isSafeMediaUrl(record.image)
  const [broken, setBroken] = useState(false)
  if (canShowImage && !broken) return <img className="admin-thumb" src={record.image} alt="" loading="lazy" onError={() => setBroken(true)} />
  const Icon = moduleId === 'awards' ? Award : moduleId === 'reflections' ? BookOpenText : moduleId === 'foundation' ? HandHeart : moduleId === 'gallery' ? Images : Megaphone
  return <span className="admin-thumb admin-thumb-fallback"><Icon size={21} aria-hidden="true" /></span>
}

function ContentManager({ moduleId, items, onSave, onDelete, onMessage }) {
  const config = modules[moduleId]
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [editing, setEditing] = useState(undefined)
  const filtered = useMemo(() => items.filter(item => {
    const text = [item.title, item.category, item.description].filter(Boolean).join(' ').toLowerCase()
    return text.includes(search.toLowerCase().trim()) && (filter === 'All' || item.stage === filter)
  }), [items, search, filter])

  function saveLocal(values) {
    const id = editing?.id || `draft-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`
    const record = { ...values, id, stage: 'Draft', updatedAt: new Date().toISOString() }
    onSave(moduleId, record)
    setEditing(undefined)
    onMessage('Local draft saved. It is not published on the public website.')
  }
  function remove(record) {
    if (window.confirm(`Remove “${record.title}” from this browser workspace? The public website will not change.`)) {
      onDelete(moduleId, record.id)
      onMessage('Item removed from your local workspace only.')
    }
  }
  return (
    <div className="admin-stack">
      <div className="admin-section-head">
        <div><p className="admin-overline">Content studio</p><h2 className="admin-section-title">{config.label}</h2><p className="admin-section-description">{config.description}</p></div>
        {moduleId !== 'foundation' && <button type="button" className="admin-btn-primary" onClick={() => setEditing(null)}><Plus size={18} aria-hidden="true" />New {config.singular}</button>}
      </div>
      {config.note && <p className="admin-editor-tip"><Info size={19} className="shrink-0" aria-hidden="true" />{config.note}</p>}
      {moduleId === 'awards' && (
        <section className="admin-panel admin-pad" aria-labelledby="admin-categories-title">
          <p className="admin-overline">2026 awards programme</p>
          <h3 id="admin-categories-title" className="admin-panel-title">{awardCategories2026.length} categories · five draft criteria each</h3>
          <p className="admin-section-description">The new public category directory and nomination preview use a separate read-only data file until secure content approval is built. The category eligibility rules require foundation approval. These award records remain local demonstration drafts—not nominations or votes.</p>
          <Link to="/awards" className="admin-text-link">Review public category directory <ArrowRight size={16} aria-hidden="true" /></Link>
        </section>
      )}
      <section className="admin-panel admin-list-panel" aria-label={`${config.label} records`}>
        <div className="admin-list-toolbar">
          <label className="admin-search"><Search size={19} aria-hidden="true" /><span className="sr-only">Search {config.label}</span><input type="search" placeholder={`Search ${config.label.toLowerCase()}...`} value={search} onChange={event => setSearch(event.target.value)} /></label>
          <label className="admin-filter"><span className="sr-only">Filter by status</span><select value={filter} onChange={event => setFilter(event.target.value)}><option>All</option><option>Reference</option><option>Draft</option></select></label>
        </div>
        <div className="admin-list-summary">Showing {filtered.length} of {items.length} local {config.label.toLowerCase()} records</div>
        {filtered.length ? <div className="admin-record-list">
          {filtered.map(item => <article key={item.id} className="admin-record">
            <RecordThumbnail key={item.id + (item.image || '')} record={item} moduleId={moduleId} />
            <div className="admin-record-info">
              <div className="flex flex-wrap items-center gap-2"><h3 className="admin-record-title">{getDisplayLabel(item, moduleId)}</h3><span className={`admin-record-status ${statusClass[item.stage]}`}>{item.stage === 'Reference' ? 'Website reference' : 'Local draft'}</span></div>
              <p className="admin-record-detail">{item.category || item.phase || (moduleId === 'foundation' ? 'About the foundation' : '')}{item.year ? ` · ${item.year}` : ''}</p>
              <p className="admin-record-meta">{formatUpdatedAt(item.updatedAt)}</p>
            </div>
            <div className="admin-record-actions">
              <button type="button" className="admin-icon-button" aria-label={`Edit ${item.title}`} title="Edit local draft" onClick={() => setEditing(item)}><Pencil size={17} /></button>
              {moduleId !== 'foundation' && <button type="button" className="admin-icon-button admin-delete" aria-label={`Remove ${item.title} from demo`} title="Remove local record" onClick={() => remove(item)}><Trash2 size={17} /></button>}
            </div>
          </article>)}
        </div> : <div className="admin-empty-small"><Search size={27} aria-hidden="true" /><strong>No matching records</strong><p>Try another search or clear the status filter.</p></div>}
      </section>
      {editing !== undefined && <Editor key={editing?.id || 'new'} moduleId={moduleId} existing={editing} onClose={() => setEditing(undefined)} onSave={saveLocal} />}
    </div>
  )
}

function DataAndSecurity({ reset, content }) {
  const [lastExport, setLastExport] = useState('')
  const checkList = [
    { title: 'Identity & role permissions', text: 'Backend login, MFA, secure sessions and server-side Super Admin / Editor permissions.' },
    { title: 'Publishing workflow', text: 'Draft → review → publish with content revisions and approval history.' },
    { title: 'Secure image handling', text: 'Validated uploads, file-size limits, malware checks, media permissions and consent records.' },
    { title: 'Protect community information', text: 'POPIA-based access controls, retention decisions, backups and audit logs.' },
  ]
  function downloadJson() {
    const data = JSON.stringify({ version: ADMIN_DATA_VERSION, description: 'Nqobizitha admin local prototype (not published)', content }, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'nqobizitha-admin-local-drafts.json'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    setLastExport('A local JSON file has been prepared for your browser to download.')
  }
  return (
    <div className="admin-stack">
      <div className="admin-section-head"><div><p className="admin-overline">Project preparation</p><h2 className="admin-section-title">Planning & local data</h2><p className="admin-section-description">Understand what works now and what must wait for a secure backend.</p></div></div>
      <div className="admin-two-column">
        <section className="admin-panel admin-pad"><div className="flex items-center gap-3"><div className="admin-action-icon"><HardDrive size={22} aria-hidden="true" /></div><h3 className="admin-panel-title">Workspace data</h3></div>
          <p className="mt-4 text-sm leading-7 text-slate-600">Content is stored only in this browser using localStorage, which is neither private nor server-backed. Never enter passwords, contact details or real beneficiary information.</p>
          <div className="mt-6 flex flex-wrap gap-3"><button className="admin-btn-primary" type="button" onClick={downloadJson}><ArrowDownToLine size={17} aria-hidden="true" />Export records</button><button className="admin-btn-outline" type="button" onClick={reset}><RotateCcw size={17} aria-hidden="true" />Reset examples</button></div>
          {lastExport && <p className="mt-4 text-sm text-emerald-800" role="status">{lastExport}</p>}
        </section>
        <section className="admin-panel admin-pad"><div className="flex items-center gap-3"><div className="admin-action-icon"><Globe2 size={22} aria-hidden="true" /></div><h3 className="admin-panel-title">Public site status</h3></div>
          {currentWebsiteHighlights.map(entry => <div key={entry.label} className="admin-site-row"><span>{entry.label}<small>{entry.detail}</small></span><strong>{entry.value}</strong></div>)}
          <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-950">No administrator accounts, secure publishing, upload server or user enquiry storage exist yet.</p>
        </section>
      </div>
      <section className="admin-panel admin-pad"><div className="admin-panel-header"><div><p className="admin-overline">Before going live</p><h3 className="admin-panel-title">Security and backend checklist</h3></div><Badge tone="gold">Planned, not enabled</Badge></div>
        <div className="admin-checklist">{checkList.map(item => <article key={item.title}><span className="admin-check-icon"><LockKeyhole size={19} aria-hidden="true" /></span><div><h4>{item.title}</h4><p>{item.text}</p></div><Badge>Pending</Badge></article>)}</div>
      </section>
    </div>
  )
}

export default function AdminWorkspace() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useDemoAuth()
  const section = location.pathname.split('/')[2] || 'overview'
  const current = navItems.find(item => item.key === section) || navItems[0]
  const { content, setContent, storageWarning } = useLocalWorkspace()
  const [mobileMenu, setMobileMenu] = useState(false)
  const menuButtonRef = useRef(null)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    setMobileMenu(false)
    setNotice('')
    document.title = `${current.label} | Nqobizitha Administration`
    window.scrollTo(0, 0)
  }, [section])
  useEffect(() => {
    if (!mobileMenu) return
    const onKey = event => {
      if (event.key === 'Escape') { setMobileMenu(false); menuButtonRef.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileMenu])
  function goTo(key) { navigate(key === 'overview' ? '/admin' : `/admin/${key}`) }
  function saveRecord(moduleId, record) {
    setContent(prev => ({ ...prev, [moduleId]: prev[moduleId].some(item => item.id === record.id) ? prev[moduleId].map(item => item.id === record.id ? record : item) : [record, ...prev[moduleId]] }))
  }
  function deleteRecord(moduleId, id) { setContent(prev => ({ ...prev, [moduleId]: prev[moduleId].filter(item => item.id !== id) })) }
  function reset() { if (window.confirm('Reset all local edits to the original website reference examples? This cannot be undone and does not change the live website.')) { setContent(initialContent); setNotice('Workspace reset to its original reference examples.') } }

  return (
    <div className="admin-shell min-h-screen">
      <a className="admin-skip" href="#admin-main">Skip to dashboard content</a>
      {mobileMenu && <button type="button" className="admin-mobile-shade" aria-label="Close navigation" onClick={() => setMobileMenu(false)} />}
      <aside id="admin-sidebar" className={`admin-sidebar ${mobileMenu ? 'admin-sidebar-open' : ''}`} aria-label="Admin sidebar">
        <div className="admin-sidebar-brand"><Link to="/admin" aria-label="Nqobizitha Admin home" onClick={() => setMobileMenu(false)}><span className="admin-brand-icon"><picture><source srcSet="/images/nqobizitha-brandmark.webp" type="image/webp" /><img src="/images/nqobizitha-brandmark.png" width="42" height="34" alt="" /></picture></span><span><strong>NQOBIZITHA</strong><small>Foundation Admin</small></span></Link><button className="admin-mobile-close" type="button" aria-label="Close sidebar" onClick={() => setMobileMenu(false)}><X size={22} /></button></div>
        <div className="admin-sidebar-label">WORKSPACE</div>
        <nav aria-label="Admin sections" className="admin-sidebar-links">
          {navItems.map(({ key, label, Icon }) => <Link key={key} to={key === 'overview' ? '/admin' : `/admin/${key}`} onClick={() => setMobileMenu(false)} aria-current={key === current.key ? 'page' : undefined} className={`admin-sidebar-link ${key === current.key ? 'admin-sidebar-active' : ''}`}><Icon size={20} aria-hidden="true" /><span>{label}</span>{key === current.key && <span className="admin-nav-active-dot" aria-hidden="true" />}</Link>)}
        </nav>
        <div className="admin-sidebar-bottom"><span className="admin-sidebar-security"><ShieldAlert size={19} aria-hidden="true" /><span><strong>Local access</strong><small>No server protection</small></span></span><Link to="/" className="admin-site-link"><ArrowLeft size={18} aria-hidden="true" />Back to public website</Link></div>
      </aside>
      <div className="admin-body">
        <header className="admin-topbar">
          <div className="admin-topbar-left"><button ref={menuButtonRef} className="admin-mobile-menu" onClick={() => setMobileMenu(true)} type="button" aria-label="Open admin navigation" aria-controls="admin-sidebar" aria-expanded={mobileMenu}><Menu size={23} /></button><div><div className="admin-breadcrumb">Foundation <ChevronRight size={14} aria-hidden="true" /> Administration</div><h1>{current.label}</h1></div></div>
          <div className="admin-topbar-right"><span className="admin-demo-badge"><Badge tone="gold">Administrator</Badge></span><span className="hidden text-xs font-bold text-emerald-950 sm:inline">{user?.name}</span><button type="button" className="admin-btn-outline" onClick={() => { signOut(); navigate('/sign-in', { replace: true }) }} aria-label="Sign out of administration"><LogOut size={17} aria-hidden="true" /><span className="hidden sm:inline">Sign out</span></button></div>
        </header>
        <main id="admin-main" tabIndex={-1} className="admin-main">
          <p className="admin-prototype-banner"><CircleAlert size={19} aria-hidden="true" /><span><strong>Local workspace.</strong> Access checks run in the browser and are not secure. Changes cannot be published, and data is not protected by a server. Do not enter private or sensitive information.</span></p>
          {storageWarning && <p className="admin-error" role="alert">{storageWarning}</p>}
          {notice && <div role="status" className="admin-feedback"><Check size={17} aria-hidden="true" /><span>{notice}</span><button type="button" onClick={() => setNotice('')} aria-label="Dismiss notification"><X size={17} /></button></div>}
          {current.key === 'overview' ? <AdminOverview content={content} goTo={goTo} /> :
            current.key === 'elections' ? <AdminElections /> :
            modules[current.key] ? <ContentManager key={current.key} moduleId={current.key} items={content[current.key]} onSave={saveRecord} onDelete={deleteRecord} onMessage={setNotice} /> :
            <DataAndSecurity content={content} reset={reset} />}
          <footer className="admin-footnote"><span>© {new Date().getFullYear()} Nqobizitha Foundation · Administration</span><span>One Bread Can Feed a Community</span></footer>
        </main>
      </div>
    </div>
  )
}
