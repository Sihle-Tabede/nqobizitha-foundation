import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Images, MoveHorizontal } from 'lucide-react'
import AdaptiveImage from './AdaptiveImage'
import { usePreferences } from '../context/Preferences'

/**
 * Lightweight, accessible adaptation of the supplied curved OGL gallery.
 * Keeps its items, bend, borderRadius and scrollSpeed API, circular wrapping,
 * curved image arrangement and swipe/scroll navigation. Uses CSS rather than
 * persistent WebGL rendering to minimise data, CPU and battery use.
 *
 * The component receives editorial gallery objects ({ id, image, text,
 * photoAlt, category }) rather than fetching or trusting remote user content.
 */
function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export default function CircularGallery({ items = [], bend = 3, borderRadius = 0.06, scrollSpeed = 2, className = '' }) {
  const { lowData } = usePreferences()
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [drag, setDrag] = useState(0)
  const pointer = useRef(null)
  const stageRef = useRef(null)
  const lastWheel = useRef(0)
  const count = items.length
  const staticMode = lowData || reducedMotion || count <= 1

  useEffect(() => { setActive(0) }, [items])
  useEffect(() => { setDrag(0); pointer.current = null }, [staticMode])
  useEffect(() => {
    const stage = stageRef.current
    if (!stage || staticMode) return undefined
    const handleWheel = (event) => {
      // Only interpret horizontal trackpad movement or Shift+wheel as gallery
      // navigation. Normal vertical page scrolling remains untouched.
      if (!event.shiftKey && Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      if (Math.abs(delta) < 3) return
      event.preventDefault()
      if (event.timeStamp - lastWheel.current < 190) return
      lastWheel.current = event.timeStamp
      const step = Math.sign(delta) * Math.max(1, Math.round(scrollSpeed / 2))
      setActive((index) => (index + step % count + count) % count)
    }
    stage.addEventListener('wheel', handleWheel, { passive: false })
    return () => stage.removeEventListener('wheel', handleWheel)
  }, [staticMode, count, scrollSpeed])

  if (!count) return null

  const move = (step) => {
    setActive((index) => (index + step % count + count) % count)
    setDrag(0)
  }

  const relativePosition = (index) => {
    let offset = (index - active + count) % count
    if (offset > count / 2) offset -= count
    // Distinguish paired ends when the number of gallery items is even.
    if (count % 2 === 0 && offset === count / 2 && drag > 0) offset = -offset
    return offset
  }

  const onPointerDown = (event) => {
    if (event.button !== 0 && event.pointerType === 'mouse') return
    pointer.current = { x: event.clientX, y: event.clientY, pointerId: event.pointerId }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const onPointerMove = (event) => {
    if (!pointer.current || pointer.current.pointerId !== event.pointerId) return
    const dx = event.clientX - pointer.current.x
    const dy = event.clientY - pointer.current.y
    // Preserve native vertical page scrolling on touch devices.
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
      setDrag(Math.max(-115, Math.min(115, dx)))
    }
  }
  const onPointerUp = (event) => {
    if (!pointer.current || pointer.current.pointerId !== event.pointerId) return
    const dx = event.clientX - pointer.current.x
    pointer.current = null
    setDrag(0)
    if (Math.abs(dx) >= 42) {
      move(dx < 0 ? 1 : -1)
    }
  }

  const mediaCard = (item, index, isStatic = false) => {
    const offset = relativePosition(index)
    const distance = Math.abs(offset)
    const isVisible = isStatic || distance <= 2
    const isCurrent = isStatic || offset === 0
    const arc = Math.min(Math.abs(bend) / 3, 1.7)
    const angle = Math.sign(bend || 1) * -offset * (7.5 * arc)
    const rise = distance * distance * (27 * arc)
    const shift = offset * 76 + (drag / 3.4)
    const style = isStatic ? undefined : {
      '--gallery-shift': `${shift}%`,
      '--gallery-rise': `${rise}px`,
      '--gallery-rotation': `${angle}deg`,
      '--gallery-scale': Math.max(0.74, 1 - distance * 0.085),
      '--gallery-radius': `${Math.min(0.5, Math.max(0, borderRadius)) * 100}%`,
      zIndex: Math.max(1, 10 - distance),
      opacity: distance > 2 ? 0 : distance > 1 ? 0.6 : 1,
      visibility: distance > 2 ? 'hidden' : 'visible',
    }
    return (
      <article
        key={item.id ?? index}
        aria-hidden={!isStatic && !isCurrent ? 'true' : undefined}
        className={isStatic ? 'circular-gallery-static-card' : 'circular-gallery-card'}
        style={style}
      >
        <div className="circular-gallery-image">
          {isVisible && <AdaptiveImage src={item.image} alt={isCurrent ? (item.photoAlt || item.text) : ''} className="h-full w-full object-cover" />}
          <span className="circular-gallery-photo-note">Illustrative image</span>
        </div>
        <div className="circular-gallery-card-caption">
          <span className="circular-gallery-category">{item.category}</span>
          <h3>{item.text}</h3>
        </div>
      </article>
    )
  }

  return (
    <div className={`circular-gallery ${className}`} aria-label="Featured community gallery">
      {staticMode ? (
        <div className="circular-gallery-static" role="list" tabIndex={0} aria-label="Gallery stories: scroll horizontally to browse">
          {items.map((item, index) => <div role="listitem" key={item.id ?? index}>{mediaCard(item, index, true)}</div>)}
        </div>
      ) : (
        <>
          <div
            className="circular-gallery-stage"
            ref={stageRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Campaign and community activity photographs"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => { pointer.current = null; setDrag(0) }}
          >
            {items.map((item, index) => mediaCard(item, index))}
          </div>
          <div className="circular-gallery-controls">
            <button className="circular-gallery-arrow" type="button" onClick={() => move(-1)} aria-label="Previous gallery image"><ChevronLeft size={21} aria-hidden="true" /></button>
            <p className="circular-gallery-count" aria-live="polite" aria-atomic="true">
              <span className="sr-only">Image </span>{active + 1} <span aria-hidden="true">/</span><span className="sr-only">of </span> {count}
            </p>
            <button className="circular-gallery-arrow" type="button" onClick={() => move(1)} aria-label="Next gallery image"><ChevronRight size={21} aria-hidden="true" /></button>
          </div>
          <p className="circular-gallery-hint"><MoveHorizontal size={16} aria-hidden="true" /> Swipe or use the arrows to explore <Images size={15} aria-hidden="true" /></p>
          <p className="sr-only" aria-live="polite">{items[active]?.text}, {items[active]?.category}</p>
        </>
      )}
    </div>
  )
}
