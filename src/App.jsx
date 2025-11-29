// Actualización para commit del App.jsx

import {
  headerData,
  aboutData,
  contactData,
  skillsData,
  projectsData
} from "./data";

import Header from './components/Header'
import About, { Educacion } from "./components/About";
import Skills from './components/Skills'
import Projects, { Experiencia } from "./components/Projects";
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Header
        nombre={headerData.nombre}
        cargo={headerData.cargo}
        ciudad={headerData.ciudad}
        contacto={headerData.contacto}
      />

      <About descripcion={aboutData.descripcion} />

      <Skills lista={skillsData} />

      <Projects proyectos={projectsData} />

      <Contact
        telefono={contactData.telefono}
        email={contactData.email}
        github={contactData.github}
      />
    </>
  );
}

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
