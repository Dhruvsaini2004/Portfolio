import { useState } from "react"
import { Intro } from "@/components/Intro"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { About, Contact } from "@/components/About"
import { profile } from "@/data/profile"

function App() {
  const [ready, setReady] = useState(false)
  const handleIntroDone = () => setReady(true)
  return (
    <div className="relative min-h-screen">
      <Intro onDone={handleIntroDone} />
      <Navbar />
      {ready ? (
        <>
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>

          <footer className="border-t border-border">
            <div className="container flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted-foreground sm:flex-row">
              <span className="font-mono">
                © {new Date().getFullYear()} {profile.name}
              </span>
              <span className="font-mono">{profile.email}</span>
            </div>
          </footer>
        </>
      ) : null}
    </div>
  );
}

export default App;
