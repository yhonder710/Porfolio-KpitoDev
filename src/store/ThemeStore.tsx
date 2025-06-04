import { create } from "zustand";

interface ThemeStore {
  theme: string
  changeTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "dark",
  changeTheme: () => set((state) => ({ theme: state.theme === "ligh" ? "dark" : "ligh" }))
}))
