import { CardBackend } from "../moleculas/CardBackend";
import { CardFrontend } from "../moleculas/CardFrontend";
import { CardAprendiendo } from "../moleculas/CardAprendiendo";
import { CardHerramientas } from "../moleculas/CardHerramientas";

export function Skill() {
  return (
    <section id='skill' className="flex flex-col items-center mt-10 mb-5">
      <h2 className="text-5xl text-[var(--text-secondary)] font-bold mb-5">Skill</h2>

      <div className="w-230 text-center text-[20px] flex flex-col justify-center items-center gap-5">
        <section className="w-full h-full">
          <div className="w-full flex justify-center items-center gap-20 mt-5">
            <CardFrontend />
            <CardBackend />
          </div>
        </section>


        <section className="w-full">
          <div className="w-full flex justify-center items-center gap-20 mt-5">
            <CardAprendiendo />
            <CardHerramientas />
          </div>
        </section>
      </div>
    </section>
  )
}
