import { LinkContact } from "../atomos/LinkContact";
import imgPerfil from '../../assets/imgPerfil.jpg'

import { MdOutlineMail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { useLanguageStore } from "../../store/TranslateStore";


export function Contact() {
  const { language } = useLanguageStore()

  return (
    <section id='contact' className="flex flex-col items-center mt-10 py-5 mb-5">
      <h2 className="text-5xl text-[var(--text-secondary)] font-bold mb-10">{language.language === "es" ? language.tituloContact : language.tituloContact}</h2>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-15">
        <img className="rounded-[50%] h-[180px] imgPerfil" src={imgPerfil} width={180} alt="foto de perfil" />
        <div>
          <section className="flex flex-col gap-2">
            <LinkContact link="https://www.linkedin.com/in/yhonder-aguero-a86991331/" icon={<FaLinkedin size={30} />} text={language.language === "es" ? language.contactLinkendin : language.contactLinkendin} />
            <LinkContact link="https://github.com/yhonder710" icon={<FaSquareGithub size={30} />} text={language.language === "es" ? language.contactGit : language.contactGit} />
            <LinkContact link="https://drive.google.com/file/d/1LYDzC6JyMxOn2GWiPxlcyiCEVGOmMDjd/view?usp=drive_link" icon={<MdDownload size={30} />} text={language.language === "es" ? language.contactCv : language.contactCv} />
            <LinkContact link="mailto:agueropibe1@gmail.com" icon={<MdOutlineMail size={30} />} text="agueropibe1@gmail.com" />
          </section>
        </div>
      </div>
    </section>
  )
}
