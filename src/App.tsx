import { useEffect } from "react"
import { Navbar } from "./components/organismo/Naybar"
import { useThemeStore } from "./store/ThemeStore"
import { Home } from "./components/organismo/Home"
import { About } from "./components/organismo/About"
import { Skill } from "./components/organismo/Skill"
import { Projects } from "./components/organismo/Projects"
import { Contact } from "./components/organismo/Contact"

function App() {
  const { theme } = useThemeStore()

  useEffect(() => {
    document.body.className = theme
  }, [theme])


  return (
    <div className="flex flex-col items-center gap-10">
      <Navbar />

      <main className="w-screen">
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
