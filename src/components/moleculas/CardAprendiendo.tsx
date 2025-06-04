import "../../css/card.css"
import { CardLenguage } from "./CardLenguage"

import { FaPython } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

export function CardAprendiendo() {
  return (
    <section className="w-70 h-90 bg-[var(--color-card)] rounded-2xl card">
      <h3 className="text-2xl py-2 font-bold">Aprendiendo</h3>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5 ">
        <CardLenguage icon={<FaPython size={40} color="#2673b3" />} text="Python" />
        <CardLenguage icon={<SiAstro size={40} color="#FF5D01" />} text="Astro" />
        <CardLenguage icon={<SiPhp size={40} color="#777BB4" />} text="Php" />
        <CardLenguage icon={<FaWordpress size={40} color="#21759B" />} text="WordPress" />
      </div>
    </section>
  )
}
