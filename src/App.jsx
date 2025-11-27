// Actualización para commit del App.jsx

import Header from './components/Header'
import About, { Educacion } from "./components/About";
import Skills from './components/Skills'
import Projects, { Experiencia } from "./components/Projects";
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className='footer'>
        © 2025 Naurimar González - Todos los derechos reservados
      </footer>
    </>
  );
}
