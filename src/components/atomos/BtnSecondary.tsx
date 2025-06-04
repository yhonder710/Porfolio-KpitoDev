import type { ReactNode } from "react"
import '../../css/btn.css'

interface BtnSecondaryType {
  icon: ReactNode
  text: string
  link: string
}

export function BtnSecondary({ icon, text, link }: BtnSecondaryType) {
  return (
    <button className="btnSecondary px-3">
      <a target="_blank" href={link}>
        {icon} {text}
      </a>
    </button>
  )
}
