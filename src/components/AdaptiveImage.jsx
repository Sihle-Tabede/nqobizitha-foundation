import { ImageOff } from 'lucide-react'
import { usePreferences } from '../context/Preferences'

/** Avoids even requesting remote photos when low-data mode is enabled. */
export default function AdaptiveImage({ alt = '', className = '', loading = 'lazy', ...props }) {
  const { lowData } = usePreferences()
  if (lowData) {
    return (
      <div
        className={`${className} flex min-h-24 items-center justify-center bg-emerald-900/90 text-emerald-50/80`}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={!alt ? 'true' : undefined}
      >
        <span className="flex flex-col items-center gap-2 p-4 text-center text-xs font-semibold"><ImageOff size={22} aria-hidden="true" />Image paused to save data</span>
      </div>
    )
  }
  return <img alt={alt} className={className} loading={loading} decoding="async" {...props} />
}
