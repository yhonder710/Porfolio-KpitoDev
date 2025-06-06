import "../../css/card.css"


import { AiFillGithub } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { BtnProjectPrimary } from "../atomos/BtnProjectPrimary";
import { BtnProjectSecondary } from "../atomos/BtnProjectSecondary";

import type { ReactNode } from "react";

interface CardProjectType {
  img: string
  title: string
  linkProject: string
  description: string
  linkGithub: string
  tecnologias: ReactNode[]
}

export function CardProject({ img, title, description, tecnologias, linkProject, linkGithub }: CardProjectType) {
  return (
    <article className="w-100 p-4 rounded-2xl bg-[var(--bg-card-project)] text-black card overflow-hidden">
      <img src={img} className="w-full rounded-[10px] h-45 object-cover shadow" alt="" />
      <h3 className="text-center text-2xl font-bold my-2">{title}</h3>
      <div className="w-full h-8 rounded-2xl bg-[var(--color-projects)] shadow flex justify-center items-center gap-4">
        {tecnologias}
      </div>
      <p className="text-center my-4 descripcion">{description}</p>
      <div className="w-full flex flex-wrap justify-center items-center gap-5">
        <BtnProjectPrimary icon={<MdLanguage />} link={linkProject} text="Web" />
        <BtnProjectSecondary icon={<AiFillGithub />} link={linkGithub} text="Repositorio" />
      </div>
    </article>
  )
}
