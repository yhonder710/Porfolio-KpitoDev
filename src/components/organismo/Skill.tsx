import { CardBackend } from "../moleculas/CardBackend";
import { CardFrontend } from "../moleculas/CardFrontend";
import { CardAprendiendo } from "../moleculas/CardAprendiendo";
import { CardHerramientas } from "../moleculas/CardHerramientas";
import { useLanguageStore } from "../../store/TranslateStore";

export function Skill() {
  const { language } = useLanguageStore()

  return (
    <section id='skill' className="flex flex-col items-center mt-10 mb-5">
      <h2 className="text-5xl text-[var(--text-secondary)] font-bold mb-5">{language.language === "es" ? language.tituloSkill : language.tituloSkill}</h2>

      <div className="w-full md:w-220 text-center text-[20px] flex flex-col justify-center items-center gap-5">
        <section className="w-full h-full">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 mt-5">
            <CardFrontend />
            <CardBackend />
          </div>
        </section>


        <section className="w-full">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 mt-5">
            <CardAprendiendo />
            <CardHerramientas />
          </div>
        </section>
      </div>
    </section>
  )
}
