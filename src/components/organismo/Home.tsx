import '../../css/home.css'
import imgPerfil from '../../assets/imgPerfil.jpg'

import { BtnPrimary } from "../atomos/BtnPrimary"
import { BtnSecondary } from "../atomos/BtnSecondary"

import { MdDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { useLanguageStore } from '../../store/TranslateStore';


export function Home() {
  const { language } = useLanguageStore()

  return (
    <section id='home' className="w-full flex flex-col justify-center mt-5 sm:mt-0 items-center h-full md:h-[100vh] mb-10">
      <section className="text-center ">
        <h1 className="text-6xl md:text-8xl mb-5 titleName">Yhonder Aguero</h1>
        <strong className="text-2xl md:text-3xl text-[var(--text-secondary)]">{language.language === "es" ? language.tituloHome : language.tituloHome}</strong>
      </section>

      <section className="flex items-center flex-col lg:flex-row  gap-5  mb-5">
        <p className="text-[16px] mt-5 lg:mt-0 md:text-[18px] w-80 md:w-180 descripcion">{language.language === "es" ? language.descripcionHome : language.descripcionHome}</p>
        <img className="rounded-[50%] md:h-[200px] md:w-[200px] h-[150px] w-[150px] imgPerfil" src={imgPerfil} alt="foto de perfil" />

      </section>

      <section className="flex flex-wrap items-center justify-center mt-5 gap-5">
        <BtnPrimary icon={<MdDownload />} text={language.language === "es" ? language.btnDescarga : language.btnDescarga} link="https://drive.google.com/file/d/1LYDzC6JyMxOn2GWiPxlcyiCEVGOmMDjd/view?usp=drive_link" />
        <BtnSecondary icon={<FaLinkedin />} text="Linkedin" link="https://www.linkedin.com/in/yhonder-aguero-a86991331/" />
        <BtnSecondary icon={<FaSquareGithub />} text="GitHub" link="https://github.com/yhonder710" />
      </section>
    </section>
  )
}
