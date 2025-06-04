import type { ReactNode } from "react"

interface LinkContactType {
  icon: ReactNode
  text: string
  link: string
}

export function LinkContact({ icon, text, link }: LinkContactType) {
  return (
    <a target="_blank" href={link} className="flex items-center gap-2 hover:text-[var(--hover)]">
      {icon}
      <span className="text-[18px]">{text}</span>
    </a>
  )
}
