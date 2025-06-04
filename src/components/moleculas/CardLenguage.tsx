import type { ReactNode } from "react"

interface CardLenguageType {
  icon: ReactNode
  text: string
}

export function CardLenguage({ icon, text }: CardLenguageType) {
  return (
    <span className="flex flex-col items-center ">
      {icon}
      <span className="text-[20px]">{text}</span>
    </span>
  )
}
