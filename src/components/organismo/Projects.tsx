import "../../css/projects.css"
import { CardProject } from "../moleculas/CardProject"

import movieApp from '../../assets/movie-app.webp'
import pokedex from '../../assets/pokedex.webp'


import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export function Projects() {
  return (
    <section id='projects' className="flex flex-col items-center mt-10 mb-5 w-full bg-[var(--bg-projects)] py-3 pb-8 projects">
      <h2 className="text-5xl text-white font-bold mb-5">Projects</h2>
      <div className="w-full flex flex-wrap items-center justify-center p-10 md:p-0 gap-10">
        <CardProject
          img={movieApp}
          title="Movie App"
          linkProject="https://movies-app710.netlify.app/"
          linkGithub="https://github.com/yhonder710/app-movies"
          tecnologias={[
            <FaReact size={25} color="#fff" />,
            <FaCss3Alt size={25} color="#fff" />,
            <RiTailwindCssFill size={25} color="#fff" />,
            <BiLogoTypescript size={25} color="#fff" />
          ]}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quisquam distinctio velit nulla totam, ullam incidunt, dignissimos, voluptatem commodi sapiente dolorem omnis! Sed dolore rerum enim quod. Quisquam, nulla repellat."
        />
        <CardProject
          img={pokedex}
          title="Pokedex"
          linkProject="https://pokedex710.netlify.app/"
          linkGithub="https://github.com/yhonder710/Pokedex"
          tecnologias={[
            <FaReact size={25} color="#fff" />,
            <FaCss3Alt size={25} color="#fff" />,
            <BiLogoTypescript size={25} color="#fff" />
          ]}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quisquam distinctio velit nulla totam, ullam incidunt, dignissimos, voluptatem commodi sapiente dolorem omnis! Sed dolore rerum enim quod. Quisquam, nulla repellat."
        />

      </div>

      {/*  */}
    </section>
  )
}
