/**
 * Responsive website lockups from the approved Nqobizitha Foundation artwork.
 * The header uses the emblem with readable HTML text at small sizes; the footer
 * uses the complete approved artwork. Neither variant loads remote resources.
 */
export default function Logo({ light = false, compact = false }) {
  if (light) {
    return (
      <picture className="block w-full max-w-[350px] overflow-hidden rounded-2xl border border-amber-300/25 bg-[#071e19] p-1 shadow-lg shadow-black/10">
        <source srcSet="/images/nqobizitha-final-logo.webp" type="image/webp" />
        <img
          src="/images/nqobizitha-final-logo.png"
          alt="Nqobizitha Foundation logo: four hands around bread. One bread can feed a community."
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
          className="block h-auto w-full object-contain"
        />
      </picture>
    )
  }

  return (
    <span className={`inline-flex min-w-0 items-center ${compact ? 'gap-1.5 sm:gap-2' : 'gap-3'}`}>
      <picture className="flex shrink-0 items-center justify-center" aria-hidden="true">
        <source srcSet="/images/nqobizitha-brandmark.webp" type="image/webp" />
        <img
          src="/images/nqobizitha-brandmark.png"
          alt=""
          width="450"
          height="324"
          decoding="async"
          className={compact ? 'h-12 w-[66px] object-contain sm:h-14 sm:w-[77px]' : 'h-16 w-[88px] object-contain'}
        />
      </picture>
      <span
        aria-hidden="true"
        className={compact
          ? 'hidden min-w-0 flex-col justify-center sm:flex lg:hidden xl:flex'
          : 'flex min-w-0 flex-col justify-center'}
      >
        <span className="whitespace-nowrap text-[13px] font-black leading-5 tracking-[0.045em] text-emerald-950 sm:text-sm">NQOBIZITHA</span>
        <span className="whitespace-nowrap text-[10px] font-extrabold leading-4 tracking-[0.23em] text-amber-700">FOUNDATION</span>
      </span>
    </span>
  )
}
