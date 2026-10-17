export default function Logo({ light = false, compact = false }) {
  const imageClasses = compact
    ? 'h-14 w-auto sm:h-16'
    : light
      ? 'h-20 w-auto sm:h-24 lg:h-28'
      : 'h-16 w-auto sm:h-20 lg:h-[5.5rem]'

  return (
    <div
      className={
        light
          ? 'inline-flex rounded-2xl bg-white px-3 py-2 shadow-lg shadow-black/10'
          : 'inline-flex items-center'
      }
    >
      <picture>
        <source srcSet="/images/nqobizitha-foundation-logo.webp" type="image/webp" />
        <img
          src="/images/nqobizitha-foundation-logo.png"
          alt="Nqobizitha Thabede Foundation logo"
          width="550" height="550"
          decoding="async"
          className={`${imageClasses} object-contain`}
        />
      </picture>
    </div>
  )
}
