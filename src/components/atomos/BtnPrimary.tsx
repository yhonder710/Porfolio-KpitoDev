import type { ReactNode } from "react"
import '../../css/btn.css'

interface BtnPrimaryType {
  icon: ReactNode
  text: string
  link: string
}

export function BtnPrimary({ icon, text, link }: BtnPrimaryType) {
  return (
    <button className="btnPrimary px-4">
      <a target="_blank" href={link}>
        {icon} {text}
      </a>
    </button>
  )
}
