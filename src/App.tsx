import { Hero } from "./components/Hero"

// import { Services } from "./components/Services"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import About from "./components/About"

import './App.css'



function App() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Projects />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App
