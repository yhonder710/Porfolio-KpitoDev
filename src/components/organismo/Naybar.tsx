
import { SiHtmx } from "react-icons/si";
import { FiMenu } from "react-icons/fi";


import '../../css/nav.css'
import { BtnTheme } from "../atomos/BtnTheme";
import { BtnLenguage } from "../atomos/BtnLenguage";
import { MenuNaybar } from "../atomos/MenuNaybar";
import { MenuNaybarResponsive } from "../moleculas/MenuResponsive";
import { useState } from "react";





export function Navbar() {
  const [navResponsive, setNavResponsive] = useState<boolean>(false)

  const handleClick = () => {
    setNavResponsive(!navResponsive)
  }

  return (
    <header className="w-full relative">
      <MenuNaybarResponsive navResponsive={navResponsive} />
      <nav className="w-full h-10 px-2 md:px-5 flex justify-between items-center fixed top-0 navybar">
        <button className="cursor-pointer "><a className="flex items-center justify-center gap-1 text-[24px] font-bold" href="#home">{<SiHtmx size={32} className="iconHome" />} Home</a></button>

        <MenuNaybar />
        <div className="flex items-center gap-3">
          <BtnTheme />
          <BtnLenguage />
          <span className="flex justify-center items-center md:hidden">
            <button onClick={handleClick} className="cursor-pointer"><FiMenu size={28} /></button>
          </span>
        </div>
      </nav>
    </header>
  )
}
