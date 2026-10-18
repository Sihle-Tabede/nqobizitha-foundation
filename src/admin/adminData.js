/**
 * Frontend-only content workspace. These entries are reference copies of the
 * public website's existing content; editing them NEVER updates the website.
 * Do not store personal information, beneficiary records, passwords or credentials.
 */
import { campaigns, awards2026 } from '../data/content'
import { galleryItems, pastWinners, reflections } from '../data/stories'

export const ADMIN_STORAGE_KEY = 'nqobizitha.admin.preview.v1'
export const ADMIN_DATA_VERSION = 1

export const modules = {
  campaigns: {
    label: 'Campaigns', singular: 'campaign', description: 'Plan outreach, causes and community activities.',
    fields: [
      { key: 'title', label: 'Campaign name', type: 'text', required: true, maxLength: 110 },
      { key: 'description', label: 'Description', type: 'textarea', required: true, maxLength: 1400 },
      { key: 'phase', label: 'Campaign stage', type: 'select', options: ['Planning', 'Upcoming', 'In progress', 'Completed'] },
      { key: 'image', label: 'Image URL (optional)', type: 'url' },
    ],
    empty: { title: '', description: '', phase: 'Planning', image: '' },
  },
  gallery: {
    label: 'Gallery', singular: 'gallery image', description: 'Organise images for the full public gallery.',
    fields: [
      { key: 'title', label: 'Image title', type: 'text', required: true, maxLength: 110 },
      { key: 'category', label: 'Category', type: 'select', options: ['Campaigns', 'Boxing', 'Awards', 'Activities'] },
      { key: 'image', label: 'Image URL', type: 'url', required: true },
      { key: 'alt', label: 'Image description (alt text)', type: 'textarea', required: true, maxLength: 300 },
      { key: 'description', label: 'Story context (optional)', type: 'textarea', maxLength: 1200 },
      { key: 'imageCredit', label: 'Photo source / usage rights note', type: 'text', maxLength: 180 },
    ],
    empty: { title: '', category: 'Campaigns', image: '', alt: '', description: '', imageCredit: '' },
    note: 'Do not upload identifiable community or beneficiary photographs without appropriate permission. This frontend demo only accepts a URL; no files are uploaded.',
  },
  awards: {
    label: 'Awards', singular: 'award record', description: 'Prepare recipient and award records for verification.',
    fields: [
      { key: 'title', label: 'Recipient / award title', type: 'text', required: true, maxLength: 140 },
      { key: 'category', label: 'Award category', type: 'text', required: true, maxLength: 100 },
      { key: 'year', label: 'Year', type: 'year', required: true },
      { key: 'sourceUrl', label: 'Evidence URL (optional)', type: 'url' },
      { key: 'description', label: 'Verification notes', type: 'textarea', maxLength: 1200 },
    ],
    empty: { title: '', category: '', year: String(new Date().getFullYear()), sourceUrl: '', description: '' },
    note: 'All historical award recipients must be verified against official records before publication. A draft entry is not a verification.',
  },
  reflections: {
    label: 'Reflections', singular: 'reflection', description: 'Draft foundation perspectives without inventing testimonials.',
    fields: [
      { key: 'title', label: 'Reflection title', type: 'text', required: true, maxLength: 140 },
      { key: 'category', label: 'Theme', type: 'text', required: true, maxLength: 100 },
      { key: 'description', label: 'Reflection', type: 'textarea', required: true, maxLength: 1800 },
    ],
    empty: { title: '', category: '', description: '' },
    note: 'Use editorial reflections for this prototype. Real testimonials require informed permission, accurate attribution and a secure review process.',
  },
  foundation: {
    label: 'Foundation', singular: 'foundation profile', description: 'Prepare About, mission and vision copy.',
    fields: [
      { key: 'title', label: 'Foundation name', type: 'text', required: true, maxLength: 140 },
      { key: 'tagline', label: 'Slogan', type: 'text', maxLength: 140 },
      { key: 'description', label: 'About the foundation', type: 'textarea', required: true, maxLength: 1600 },
      { key: 'mission', label: 'Mission', type: 'textarea', maxLength: 900 },
      { key: 'vision', label: 'Vision', type: 'textarea', maxLength: 900 },
    ],
    empty: { title: '', tagline: '', description: '', mission: '', vision: '' },
    note: 'These are local drafts. Changes to the public About page will require a backend or a manual content update.',
  },
}

const reference = (id, data) => ({ ...data, id, stage: 'Reference', updatedAt: null })

export const initialContent = {
  campaigns: campaigns.map(item => reference(item.id, {
    title: item.title,
    description: item.description,
    phase: 'Planning',
    image: item.image,
  })),
  gallery: galleryItems.map(item => reference(item.id, {
    title: item.title,
    category: item.category,
    image: item.photo,
    alt: item.photoAlt,
    description: item.description,
    imageCredit: 'Illustrative stock image; not a foundation event photograph',
  })),
  awards: pastWinners.map(item => reference(item.id, {
    title: item.name,
    category: item.category,
    year: String(item.year),
    description: item.evidence,
    sourceUrl: item.sourceUrl,
  })),
  reflections: reflections.map(item => reference(item.id, {
    title: item.title, category: item.category, description: item.summary,
  })),
  foundation: [reference('foundation-profile', {
    title: 'Nqobizitha Thabede Foundation',
    tagline: 'One Bread Can Feed a Community',
    description: 'Based in Pongola (uPhongolo), KwaZulu-Natal, the foundation focuses on community support, youth opportunity, sport and recognising people who make a difference.',
    mission: 'Bring people together around practical support, youth opportunity and recognition.',
    vision: 'Communities where every act of care contributes to shared opportunity.',
  })],
}

export const currentWebsiteHighlights = [
  { label: 'Foundation website', value: 'Public site', detail: 'Original content is still live in the project' },
  { label: 'Awards programme', value: awards2026.edition, detail: 'Milestones live on the existing Awards page' },
]

export function getDisplayLabel(item, moduleId) {
  if (moduleId === 'awards') return item.title
  return item.title || 'Untitled draft'
}

/** Accept only https and site-relative image URLs; prohibit data and script URLs. */
export function isSafeMediaUrl(value) {
  if (!value) return true
  if (/^\/(?!\/)[a-z0-9/_\-.%]+$/i.test(value)) return true
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'https:' && !parsed.username && !parsed.password
  } catch { return false }
}

export function isSafeEvidenceUrl(value) {
  if (!value) return true
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'https:' && !parsed.username && !parsed.password
  } catch { return false }
}

export function cleanLocalContent(value) {
  if (!value || typeof value !== 'object' || value.version !== ADMIN_DATA_VERSION) return null
  if (!value.content || typeof value.content !== 'object') return null
  const result = {}
  for (const [name, config] of Object.entries(modules)) {
    const records = value.content[name]
    if (!Array.isArray(records) || records.length > 100) return null
    result[name] = records.map(record => {
      if (!record || typeof record !== 'object' || typeof record.id !== 'string') throw new Error('Invalid draft record')
      const item = { id: record.id.slice(0, 100), stage: record.stage === 'Reference' ? 'Reference' : 'Draft', updatedAt: typeof record.updatedAt === 'string' ? record.updatedAt.slice(0, 40) : null }
      for (const field of config.fields) {
        const v = record[field.key]
        item[field.key] = typeof v === 'string' ? v.slice(0, field.maxLength || 2048) : ''
      }
      return item
    })
  }
  return result
}
