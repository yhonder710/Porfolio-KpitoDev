import { create } from "zustand";
import es from '../translate/es/es.json'
import en from '../translate/en/en.json'


interface Idioma {
  language: string
  tituloHome: string
  descripcionHome: string
  descripcionAbout: string

  btnDescarga: string

  tituloAbout: string
  tituloSkill: string
  tituloProjects: string
  tituloContact: string

  subTituloAbout: string
  cardTitleLearning: string
  cardTitleTool: string

  descripcion1: string
  descripcion2: string
  descripcion3: string
  descripcion4: string
  descripcion5: string
}

interface LanguageStore {
  language: Idioma
  changeTheme: () => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: es,
  changeTheme: () => set((state) => ({ language: state.language === es ? en : es }))
}))
