import { IoAccessibility } from "react-icons/io5";
import { PiProjectorScreenChart } from "react-icons/pi";
import { LuContact } from "react-icons/lu";
import { MdOutlineContactMail } from "react-icons/md";
import { SiHtmx } from "react-icons/si";
import { FiMenu } from "react-icons/fi";


import '../../css/nav.css'
import type { ReactNode } from "react";
import { BtnTheme } from "../atomos/BtnTheme";
import { BtnLenguage } from "../atomos/BtnLenguage";



interface LinkType {
  name: string
  to: string
  icon: ReactNode
}

export function Navbar() {
  const link: LinkType[] = [
    { name: "About", to: "about", icon: <LuContact size={26} /> },
    { name: "Skill", to: "skill", icon: <IoAccessibility size={26} /> },
    { name: "Projects", to: "projects", icon: <PiProjectorScreenChart size={26} /> },
    { name: "Contact", to: "contact", icon: <MdOutlineContactMail size={26} /> }
  ]


  return (
    <header className="w-full">
      <nav className="w-full h-10 px-5 flex justify-between items-center fixed top-0 navybar">
        <button className="cursor-pointer "><a className="flex items-center justify-center gap-1 text-[24px] font-bold" href="#home">{<SiHtmx size={32} className="iconHome" />} Home</a></button>
        <ul className="gap-6 list-none hidden md:flex">
          {link.map(link => (
            <li key={link.name}><a href={`#${link.to}`} className="flex items-center justify-center gap-1 text-[20px] hover:text-[var(--hover)]">{link.icon} {link.name}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <BtnTheme />
          <BtnLenguage />
          <span className="flex justify-center items-center md:hidden">
            <button className="cursor-pointer"><FiMenu size={28} /></button>
          </span>
        </div>
      </nav>
    </header>
  )
}
