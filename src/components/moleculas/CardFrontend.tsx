import "../../css/card.css"
import { CardLenguage } from "./CardLenguage"

import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";


export function CardFrontend() {
  return (
    <section className="w-70 h-90 bg-[var(--color-card)] rounded-2xl card">
      <h3 className="text-3xl py-2 font-bold">Frontend</h3>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5 ">
        <CardLenguage icon={<IoLogoHtml5 size={40} color="#E34F26" />} text="HTML" />
        <CardLenguage icon={<IoLogoCss3 size={40} color="#288bf5" />} text="CSS" />
        <CardLenguage icon={<FaJsSquare size={40} color="#F7DF1E" />} text="JavaScript" />
        <CardLenguage icon={<FaReact size={40} color="#61DAFB" />} text="React" />
        <CardLenguage icon={<RiTailwindCssFill size={40} color="#06B6D4" />} text="Tailwind" />
        <CardLenguage icon={<BiLogoTypescript size={40} color="#0f6ccf" />} text="TypeScript" />
      </div>
    </section>
  )
}
