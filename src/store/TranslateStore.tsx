import { create } from "zustand";
import es from '../translate/es/es.json'
import en from '../translate/en/en.json'


interface Idioma {
  language: string
  titulo: string
}

interface LanguageStore {
  language: Idioma
  changeTheme: () => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: es,
  changeTheme: () => set((state) => ({ language: state.language === es ? en : es }))
}))
