import { useLanguageStore } from "../../store/TranslateStore"

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

export const useLink = () => {
  const { language } = useLanguageStore()

  const link: LinkType[] = [
    { name: language.language === "es" ? language.tituloAbout : language.tituloAbout, to: "about", icon: <LuContact size={26} /> },
    { name: language.language === "es" ? language.tituloSkill : language.tituloSkill, to: "skill", icon: <IoAccessibility size={26} /> },
    { name: language.language === "es" ? language.tituloProjects : language.tituloProjects, to: "projects", icon: <PiProjectorScreenChart size={26} /> },
    { name: language.language === "es" ? language.tituloContact : language.tituloContact, to: "contact", icon: <MdOutlineContactMail size={26} /> }
  ]

  return { link }
}
