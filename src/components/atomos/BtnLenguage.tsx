import { useLanguageStore } from "../../store/TranslateStore"
import '../../css/btn.css'

export function BtnLenguage() {
  const { changeTheme, language } = useLanguageStore()
  return (
    <button className="btnTranslate px-1" onClick={changeTheme}>
      {language.language === "es" ? "ES" : "EN"}
    </button>
  )
}
