// Actualización para commit del About

export default function About() {
  return (
    <section className='section about'>
      <h2>Sobre mí</h2>
      <p>
        Soy una desarrolladora apasionada por la tecnología, el diseño y la creación de experiencias interactivas.
        Me gusta aprender nuevas herramientas y aplicar buenas prácticas en el desarrollo web moderno.
      </p>
    </section>
  );
}
// src/components/Educacion.jsx
const formacion = [
  { institucion: "SENA", curso: "Análisis y Desarrollo de Software", año: 2024 },
  { institucion: "SENA", curso: "Fundamentos de Programación", año: 2023 },
  { institucion: "Platzi", curso: "Curso de HTML y CSS", año: 2022 },
  { institucion: "Udemy", curso: "JavaScript Moderno", año: 2023 },
  { institucion: "FreeCodeCamp", curso: "Responsive Web Design", año: 2022 },
  { institucion: "SENA", curso: "Taller de Bases de Datos SQL", año: 2024 },
  { institucion: "Google", curso: "Fundamentos de IA", año: 2024 },
  { institucion: "Microsoft Learn", curso: "Azure Basics", año: 2023 }
];

export default function Educacion() {
  return (
    <section>
      <h2>Educación</h2>
      {formacion.map((edu, index) => (
        <div key={index} className="card">
          <h3>{edu.curso} - {edu.año}</h3>
          <p><strong>Institución:</strong> {edu.institucion}</p>
        </div>
      ))}
    </section>
  );
}

