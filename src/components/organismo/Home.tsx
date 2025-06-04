import '../../css/home.css'

import { BtnPrimary } from "../atomos/BtnPrimary"
import { BtnSecondary } from "../atomos/BtnSecondary"

import { MdDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


export function Home() {
  return (
    <section id='home' className="w-full flex flex-col justify-center items-center h-[94vh]">
      <section className="text-center ">
        <h1 className="text-8xl mb-5 titleName">Yhonder Aguero</h1>
        <strong className="text-3xl text-[var(--text-secondary)]">Desarrollador Full-Stack</strong>
      </section>

      <section className="flex items-center gap-5 w-220 mb-5">
        <p className="text-[18px] descripcion">Poseo experiencia en el diseño e implementación de APIs eficientes y de alto rendimiento. Aunque mi enfoque principal está en el back-end, domino conceptos clave de front-end, lo que me brinda una perspectiva integral en el desarrollo de aplicaciones web.</p>
        <img className="rounded-[50%] imgPerfil" src="https://amf-dev.site/imagenes/foto_cv.webp" width={200} alt="foto de perfil" />
      </section>

      <section className="flex gap-5">
        <BtnPrimary icon={<MdDownload />} text="Descarga mi CV" link="https://drive.google.com/file/d/1LYDzC6JyMxOn2GWiPxlcyiCEVGOmMDjd/view?usp=drive_link" />
        <BtnSecondary icon={<FaLinkedin />} text="Linkedin" link="https://www.linkedin.com/in/yhonder-aguero-a86991331/" />
        <BtnSecondary icon={<FaSquareGithub />} text="GitHub" link="https://github.com/yhonder710" />
      </section>
    </section>
  )
}
