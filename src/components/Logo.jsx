export default function Logo({ light = false, compact = false }) {
  const imageClasses = compact
    ? 'h-14 w-auto sm:h-16'
    : light
      ? 'h-24 w-auto sm:h-28 lg:h-32'
      : 'h-20 w-auto sm:h-24 lg:h-28'

  return (
    <div
      className={
        light
          ? 'inline-flex rounded-2xl bg-white px-3 py-2 shadow-lg shadow-black/10'
          : 'inline-flex items-center'
      }
    >
      <img
        src="/images/nqobizitha-foundation-logo.png"
        alt="Nqobizitha Thabede Foundation logo"
        className={`${imageClasses} object-contain`}
      />
    </div>
  )
}
