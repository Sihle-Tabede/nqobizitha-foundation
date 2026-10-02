import { Info } from 'lucide-react'

export default function DemoNotice({ children }) {
  return (
    <div className="demo-notice" role="note">
      <Info size={17} className="mt-0.5 shrink-0 text-amber-700" />
      <p>{children}</p>
    </div>
  )
}
