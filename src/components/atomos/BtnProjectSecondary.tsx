import type { ReactNode } from "react"
import '../../css/btn.css'

interface BtnProjectSecondaryType {
  icon: ReactNode
  text: string
  link: string
}

export function BtnProjectSecondary({ icon, text, link }: BtnProjectSecondaryType) {
  return (
    <button className="btnProjectSecondary px-3">
      <a target="_blank" href={link}>
        {icon} {text}
      </a>
    </button>
  )
}
