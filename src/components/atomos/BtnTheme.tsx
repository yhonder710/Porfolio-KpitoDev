import { useThemeStore } from "../../store/ThemeStore"
import '../../css/btn.css'

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

export function BtnTheme() {
  const { changeTheme, theme } = useThemeStore()

  const classBtnTheme = theme === "dark" ? "btnTheme on" : "btnTheme"
  return (
    <button type="button" aria-label="cambiar modo oscuro o claro" className={`${classBtnTheme} py-1`} onClick={changeTheme}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  )
}
