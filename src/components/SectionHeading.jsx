export default function SectionHeading({ eyebrow, title, copy, light = false, id }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className={`eyebrow ${light ? '!text-amber-300' : ''}`}>{eyebrow}</p>}
      <h2 id={id} className={`section-title ${light ? '!text-white' : ''}`}>{title}</h2>
      {copy && <p className={`section-copy ${light ? '!text-emerald-50/80' : ''}`}>{copy}</p>}
    </div>
  )
}
