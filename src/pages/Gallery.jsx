import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Camera, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AdaptiveImage from '../components/AdaptiveImage'
import { galleryItems } from '../data/stories'

const filters = ['All', 'Campaigns', 'Boxing', 'Awards', 'Activities']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)
  const filtered = galleryItems.filter((item) => filter === 'All' || item.category === filter)

  function openItem(item) {
    setSelected(item)
    dialogRef.current?.showModal()
  }

  return (
    <>
      <PageHero eyebrow="Campaigns & activities gallery" title="Explore the work, one story at a time." copy="Browse community campaigns, the Nqobizitha Boxing Tournament, the Umuntu Ubongwa Esaphila Awards and youth-centred activities in a clear, low-data-friendly gallery." />
      <section className="container-shell section-space">
        <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-slate-600">
          Browse photographs from the foundation collection, grouped by activity. Dates and participant identities are only included when verified.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by activity type">
          {filters.map((name) => (
            <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)} className={`min-h-11 rounded-full border px-5 py-2 text-sm font-bold transition ${filter === name ? 'border-emerald-900 bg-emerald-900 text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-emerald-600'}`}>{name}</button>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-slate-600" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? 'story' : 'stories'} in {filter.toLowerCase()}.</p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <article key={item.id} className="card flex h-full flex-col overflow-hidden">
              <div className="relative h-56 overflow-hidden bg-emerald-900">
                <AdaptiveImage src={item.photo} alt={item.photoAlt} className="h-full w-full object-cover" />
                <span className="absolute bottom-3 left-3 rounded-full bg-emerald-950/95 px-3 py-1.5 text-xs font-bold text-white">Foundation collection</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{item.category} · {item.kicker}</p>
                <h3 className="mt-2 text-xl font-extrabold leading-snug">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
                <button type="button" onClick={() => openItem(item)} className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-extrabold text-emerald-800 underline underline-offset-4">Read this story <ArrowUpRight size={16} aria-hidden="true" /></button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center"><Link to="/activities" className="btn-secondary">See activities & dates <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </section>
      <section className="bg-emerald-950 py-14 text-white">
        <div className="container-shell grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <Camera size={36} className="text-amber-300" aria-hidden="true" />
          <div><h2 className="text-2xl font-extrabold">Share the stories behind these moments.</h2><p className="mt-2 text-sm leading-7 text-emerald-50/85">Have a date, story or photograph to share? Connect with the foundation through its official channels. Please get permission from everyone identifiable in a photograph, especially children.</p></div>
          <Link to="/contact" className="btn-gold w-fit">Get in touch <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
      <dialog ref={dialogRef} onClose={() => setSelected(null)} aria-labelledby="gallery-dialog-title" aria-describedby="gallery-dialog-description" className="gallery-dialog w-[min(94vw,640px)] max-h-[90vh] overflow-y-auto rounded-3xl border-0 bg-white p-0 text-slate-950 shadow-2xl backdrop:bg-slate-950/75">
        {selected && (
          <div>
            <div className="relative h-48 bg-emerald-950 sm:h-64">
              <AdaptiveImage src={selected.photo} alt={selected.photoAlt} className="h-full w-full object-cover" />
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close story" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 shadow-md"><X aria-hidden="true" /></button>
            </div>
            <div className="p-7 sm:p-9">
              <p className="eyebrow">{selected.category} · Foundation collection</p>
              <h2 id="gallery-dialog-title" className="mt-2 text-2xl font-extrabold">{selected.title}</h2>
              <p id="gallery-dialog-description" className="mt-4 text-sm leading-7 text-slate-600">{selected.description}</p>
              <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-xs leading-6 text-amber-950">This photo comes from the collection provided to the website. The foundation should confirm publication permission, event context and any identifiable person's consent before public release.</div>
              {selected.sourceUrl && <a className="btn-primary mt-6" target="_blank" rel="noopener noreferrer" href={selected.sourceUrl}>Read {selected.sourceName} <ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
