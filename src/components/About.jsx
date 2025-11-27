

// --- COMPONENTE ABOUT --- //
export default function About() {
  return (
    <section>
      <h2>Sobre mí</h2>
      <p>Descripción personal...</p>
    </section>
  );
}

// --- COMPONENTE EDUCACION --- //
const estudios = [
  { institucion: "SENA", curso: "Análisis y Desarrollo de Software", año: 2024 },
  { institucion: "SENA", curso: "Fundamentos de Programación", año: 2023 },
  { institucion: "Platzi", curso: "Curso de HTML y CSS", año: 2022 },
  { institucion: "Udemy", curso: "JavaScript Moderno", año: 2023 },
  { institucion: "FreeCodeCamp", curso: "Responsive Web Design", año: 2022 },
  { institucion: "SENA", curso: "Taller de Bases de Datos SQL", año: 2024 },
  { institucion: "Google", curso: "Fundamentos de IA", año: 2024 },
  { institucion: "Microsoft Learn", curso: "Azure Basics", año: 2023 }
];

export function Educacion() {
  return (
    <section>
      <h2>Educación</h2>
      {estudios.map((est, index) => (
        <div key={index} className="card">
          <h3>{est.titulo} - {est.año}</h3>
          <p>{est.institucion}</p>
        </div>
      ))}
    </section>
  );
}

