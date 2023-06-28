import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

import './App.css'


function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
