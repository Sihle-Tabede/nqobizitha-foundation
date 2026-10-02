export default function SectionHeading({ eyebrow, title, copy, centered = false, light = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : ''}>
      <p className={`eyebrow ${light ? '!text-amber-300' : ''}`}>{eyebrow}</p>
      <h2 className={`section-title ${light ? '!text-white' : ''}`}>{title}</h2>
      {copy && (
        <p className={`section-copy ${centered ? 'mx-auto' : ''} ${light ? '!text-emerald-50/75' : ''}`}>
          {copy}
        </p>
      )}
    </div>
  )
}
