import "../../css/card.css"
import { CardLenguage } from "./CardLenguage"

import { BsGithub } from "react-icons/bs";
import { TbBrandFigma } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";
import { useLanguageStore } from "../../store/TranslateStore";


export function CardHerramientas() {
  const { language } = useLanguageStore()

  return (
    <section className="w-70 h-90 bg-[var(--color-card)] rounded-2xl card">
      <h3 className="text-2xl py-2 font-bold">{language.language === "es" ? language.cardTitleTool : language.cardTitleTool}</h3>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5 ">
        <CardLenguage icon={<BsGithub size={40} color="#000" />} text="GitHub" />
        <CardLenguage icon={<TbBrandFigma size={40} color="#F24E1E" />} text="Figma" />
        <CardLenguage icon={<SiPostman size={40} color="#FF6C37" />} text="Postman" />
        <CardLenguage icon={<VscTerminalBash size={40} color="#FFF" />} text="Bash" />
        <CardLenguage icon={<FaDocker size={40} color="#2496ED" />} text="Docker" />
      </div>
    </section>
  )
}
