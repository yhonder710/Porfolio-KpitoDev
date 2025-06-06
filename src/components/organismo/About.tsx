import imgClaro from '../../../public/img-claro.jpg'
import imgOscuro from '../../../public/img-oscuro.jpg'
import { useThemeStore } from '../../store/ThemeStore'
import { useLanguageStore } from '../../store/TranslateStore'

export function About() {
  const { theme } = useThemeStore()
  const { language } = useLanguageStore()

  return (
    <section id='about' className="flex flex-col items-center">
      <h2 className="text-5xl text-[var(--text-secondary)] font-bold mb-5">{language.language === "es" ? language.tituloAbout : language.tituloAbout}</h2>
      <div className="w-full md:w-220 px-8 text-center text-[20px] flex flex-col justify-center items-center gap-10">
        <p className='descripcion'>{language.language === "es" ? language.descripcionAbout : language.descripcionAbout}</p>

        {
          theme === 'dark'
            ? <img src={imgOscuro} className='w-full  object-contain rounded-3xl' alt="" />
            : <img src={imgClaro} className='w-full  object-contain rounded-3xl' alt="" />
        }


        <div className='flex flex-col gap-2'>
          <strong className='text-3xl text-[var(--text-secondary)] font-bold'>{language.language === "es" ? language.subTituloAbout : language.subTituloAbout}</strong>
          <span>
            {language.language === "es" ? language.descripcion1 : language.descripcion1}
          </span>
          <span>
            {language.language === "es" ? language.descripcion2 : language.descripcion2}
          </span>
          <span>
            {language.language === "es" ? language.descripcion3 : language.descripcion3}
          </span>
          <span>
            {language.language === "es" ? language.descripcion4 : language.descripcion4}
          </span>
          <span>
            {language.language === "es" ? language.descripcion5 : language.descripcion5}
          </span>
        </div>
      </div>
    </section>
  )
}
