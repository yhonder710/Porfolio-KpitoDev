import '../../css/nav.css'
import { useLink } from '../atomos/Link'

interface Props {
  navResponsive: boolean
}

export function MenuNaybarResponsive({ navResponsive }: Props) {
  const { link } = useLink()

  const classNavResponsive = navResponsive ? "navybar fixed w-screen top-10 gap-5 py-5 flex flex-col justify-center items-center rounded-b-4xl md:hidden" : "navybar fixed w-screen top-[calc(-200px)] gap-5 py-5 flex flex-col justify-center items-center rounded-b-4xl md:hidden"

  return (
    <ul className={classNavResponsive}>
      {link.map(link => (
        <li key={link.name}><a href={`#${link.to}`} className="flex items-center  justify-center gap-1 text-[20px] hover:text-[var(--hover)]">{link.icon} {link.name}</a></li>
      ))}
    </ul>
  )
}


