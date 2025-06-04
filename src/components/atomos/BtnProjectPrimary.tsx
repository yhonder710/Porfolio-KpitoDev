import type { ReactNode } from "react"
import '../../css/btn.css'

interface BtnProjectPrimaryType {
  icon: ReactNode
  text: string
  link: string
}

export function BtnProjectPrimary({ icon, text, link }: BtnProjectPrimaryType) {
  return (
    <button className="btnProjectPrimary px-4">
      <a target="_blank" href={link}>
        {icon} {text}
      </a>
    </button>
  )
}
