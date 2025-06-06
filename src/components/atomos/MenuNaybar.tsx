import { useLink } from "./Link"


export function MenuNaybar() {
  const { link } = useLink()

  return (
    <ul className="gap-6 list-none hidden md:flex">
      {link.map(link => (
        <li key={link.name}><a href={`#${link.to}`} className="flex items-center justify-center gap-1 text-[20px] hover:text-[var(--hover)]">{link.icon} {link.name}</a></li>
      ))}
    </ul>
  )
}
