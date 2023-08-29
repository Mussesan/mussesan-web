import { Hero } from "./components/Hero"

import { Services } from "./components/Services"
import { Projects2 } from "./components/Projects2"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import About from "./components/About"

import './App.css'



function App() {
  return (
    <main>
      <Hero />
      <About />
      <Projects2 />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
