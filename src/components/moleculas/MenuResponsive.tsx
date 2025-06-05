import '../../css/nav.css'

import { IoAccessibility } from "react-icons/io5";
import { PiProjectorScreenChart } from "react-icons/pi";
import { LuContact } from "react-icons/lu";
import { MdOutlineContactMail } from "react-icons/md";
import type { ReactNode } from "react";

interface LinkType {
  name: string
  to: string
  icon: ReactNode
}

interface Props {
  navResponsive: boolean
}



export function MenuNaybarResponsive({ navResponsive }: Props) {
  const classNavResponsive = navResponsive ? "navybar fixed w-screen top-10 gap-5 py-5 flex flex-col justify-center items-center rounded-b-4xl md:hidden" : "navybar fixed w-screen top-[calc(-200px)] gap-5 py-5 flex flex-col justify-center items-center rounded-b-4xl md:hidden"

  return (
    <ul className={classNavResponsive}>
      {link.map(link => (
        <li key={link.name}><a href={`#${link.to}`} className="flex items-center  justify-center gap-1 text-[20px] hover:text-[var(--hover)]">{link.icon} {link.name}</a></li>
      ))}
    </ul>
  )
}

const link: LinkType[] = [
  { name: "About", to: "about", icon: <LuContact size={26} /> },
  { name: "Skill", to: "skill", icon: <IoAccessibility size={26} /> },
  { name: "Projects", to: "projects", icon: <PiProjectorScreenChart size={26} /> },
  { name: "Contact", to: "contact", icon: <MdOutlineContactMail size={26} /> }
]
