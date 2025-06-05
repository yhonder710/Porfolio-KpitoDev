import imgClaro from '../../../public/img-claro.jpg'
import imgOscuro from '../../../public/img-oscuro.jpg'
import { useThemeStore } from '../../store/ThemeStore'

export function About() {
  const { theme } = useThemeStore()

  return (
    <section id='about' className="flex flex-col items-center">
      <h2 className="text-5xl text-[var(--text-secondary)] font-bold mb-5">Sobre Mi</h2>
      <div className="w-full px-8 text-center text-[20px] flex flex-col justify-center items-center gap-10">
        <p className='descripcion'> Desarrollador Full Stack autodidacta con +1 años de experiencia construyendo aplicaciones web escalables y seguras. Especializado en:
          Arquitectura de APIs eficientes REST.
          Gestión de bases de datos relacionales y no relacionales.
          Desarrollo de interfaces dinámicas con React.
          Diseños responsivos enfocado en crear aplicaciones web intuitivas, rápidas y visualmente impactantes.
          Objetivo: Crear soluciones técnicas que combinen rendimiento, usabilidad y escalabilidad.</p>

        {
          theme === 'dark'
            ? <img src={imgOscuro} className='w-full object-contain rounded-3xl' alt="" />
            : <img src={imgClaro} className='w-full object-contain rounded-3xl' alt="" />
        }


        <div className='flex flex-col gap-2'>
          <strong className='text-3xl text-[var(--text-secondary)] font-bold'>Habilidades Fuertes</strong>
          <span>
            ✔ Experiencia en desarrollo Full Stack con enfoque en rendimiento y seguridad.
          </span>
          <span>
            ✔ Capacidad para integrar APIs externas.
          </span>
          <span>
            ✔ Optimización de bases de datos para consultas rápidas y eficientes.
          </span>
          <span>
            ✔ Metodologías ágiles para entregas rápidas y de calidad.
          </span>
          <span>
            ✔ No solo escribo código, sino que construyo experiencias digitales rápidas, accesibles y atractivas que los usuarios aman.
          </span>
        </div>
      </div>
    </section>
  )
}
