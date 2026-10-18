import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react'
import AdaptiveImage from './AdaptiveImage'

/**
 * Three clearly separated, image-only previews. The visible window wraps
 * around the collection, with keyboard, arrow, swipe and trackpad controls.
 * No captions or category information are shown on the homepage; those live
 * on the complete Gallery page. No WebGL, auto-play, or expensive animation.
 */
export default function CircularGallery({ items = [], bend = 1, borderRadius = 0.045, scrollSpeed = 2, className = '' }) {
  const [start, setStart] = useState(0)
  const pointerStart = useRef(null)
  const wheelAt = useRef(0)
  const viewportRef = useRef(null)
  const count = items.length
  const visibleCount = Math.min(3, count)

  useEffect(() => { setStart(0) }, [items])

  const move = (delta) => {
    if (count <= 1) return
    setStart((position) => (position + delta % count + count) % count)
  }

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    pointerStart.current = { x: event.clientX, y: event.clientY, id: event.pointerId }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const handlePointerUp = (event) => {
    const startPoint = pointerStart.current
    if (!startPoint || startPoint.id !== event.pointerId) return
    pointerStart.current = null
    const dx = event.clientX - startPoint.x
    const dy = event.clientY - startPoint.y
    if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1)
  }
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || count <= 1) return undefined
    const handleWheel = (event) => {
    // Leave standard vertical page scrolling untouched.
    if (!event.shiftKey && Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    if (Math.abs(delta) < 5) return
    event.preventDefault()
    const now = event.timeStamp
    if (now - wheelAt.current < 240) return
    wheelAt.current = now
    const step = Math.sign(delta) * Math.max(1, Math.round(scrollSpeed / 2))
    setStart((index) => (index + step % count + count) % count)
    }
    viewport.addEventListener('wheel', handleWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', handleWheel)
  }, [count, scrollSpeed])

  if (!count) return null

  const visible = Array.from({ length: visibleCount }, (_, slot) => ({
    item: items[(start + slot) % count],
    index: (start + slot) % count,
  }))

  return (
    <div className={`circular-gallery ${className}`}>
      <div
        className="circular-gallery-viewport"
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Homepage image gallery"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { pointerStart.current = null }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
          if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
        }}
        style={{ '--gallery-radius': `${Math.min(0.5, Math.max(0, borderRadius)) * 100}%` }}
      >
        {visible.map(({ item, index }, slot) => (
          <div
            key={`${slot}-${item.id ?? index}`}
            className="circular-gallery-image-only"
            style={{ '--gallery-angle': `${(slot - (visibleCount - 1) / 2) * Math.min(Math.abs(bend), 2) * 1.2}deg` }}
          >
            <AdaptiveImage
              src={item.image}
              alt={item.photoAlt || item.text || `Gallery image ${index + 1}`}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {count > 1 && (
        <>
          <div className="circular-gallery-controls">
            <button type="button" className="circular-gallery-arrow" onClick={() => move(-1)} aria-label="Previous images"><ChevronLeft size={22} aria-hidden="true" /></button>
            <p className="circular-gallery-count" aria-live="polite" aria-atomic="true">
              <span className="sr-only">Gallery starts at image </span>{start + 1} <span aria-hidden="true">/</span><span className="sr-only">of </span> {count}
            </p>
            <button type="button" className="circular-gallery-arrow" onClick={() => move(1)} aria-label="Next images"><ChevronRight size={22} aria-hidden="true" /></button>
          </div>
          <p className="circular-gallery-hint"><MoveHorizontal size={16} aria-hidden="true" /> Swipe or use the arrows to explore</p>
          <p className="sr-only" aria-live="polite">Showing images {visible.map(({ index }) => index + 1).join(', ')} of {count}.</p>
        </>
      )}
    </div>
  )
}
