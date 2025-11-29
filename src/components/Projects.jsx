// --- COMPONENTE PROJECTS --- //
export default function Projects() {
  const projects = [
    { name: 'Portafolio Personal', description: 'Sitio web creado con React y Vite.' },
    { name: 'Gestor de Tareas', description: 'Aplicación CRUD con almacenamiento local.' },
    { name: 'Calculadora', description: 'Calculadora funcional con React.' },
    { name: 'Blog Personal', description: 'Blog desarrollado con Gatsby y Markdown.' },
    { name: 'Tienda Online', description: 'E-commerce con carrito de compras y dashboard.' },
    { name: 'Chat en Tiempo Real', description: 'Aplicación de chat usando Socket.io.' }
  ];

  return (
    <section className='section projects'>
      <h2>Proyectos</h2>
      <div className='projects-container'>
        {projects.map((p) => (
          <div key={p.name} className='project-card'>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


// --- COMPONENTE EXPERIENCIA --- //
const experiencias = [
  { cargo: "Desarrollador Frontend", empresa: "TechSoft", año: 2023, descripcion: "Diseño de interfaces con React y Tailwind." },
  { cargo: "Soporte Técnico", empresa: "CompuRed", año: 2022, descripcion: "Atención a usuarios y mantenimiento de equipos." },
  { cargo: "Full Stack Junior", empresa: "Innovatech", año: 2024, descripcion: "Creación de APIs y frontend con Node y React." },
  { cargo: "Proyecto Personal", empresa: "GitHub", año: 2023, descripcion: "CV digital desarrollado con React y Vite." },
  { cargo: "Proyecto Ecommerce", empresa: "Freelance", año: 2023, descripcion: "Tienda online con carrito y dashboard." },
  { cargo: "Proyecto CRUD", empresa: "Freelance", año: 2024, descripcion: "CRUD completo con Express y MongoDB." },
  { cargo: "Asistente de Desarrollo", empresa: "CodeLab", año: 2021, descripcion: "Refactorización y documentación de módulos." },
  { cargo: "Proyecto Landing Page", empresa: "Freelance", año: 2022, descripcion: "Página promocional con HTML, CSS y JS." },
  { cargo: "Tester QA Junior", empresa: "SoftPruebas", año: 2022, descripcion: "Pruebas funcionales y reporte de bugs." },
  { cargo: "Prácticas de Desarrollo", empresa: "DevCompany", año: 2021, descripcion: "Automatización de tareas y scripts básicos." }
];

export function Experiencia() {
  return (
    <section>
      <h2>Experiencia</h2>
      {experiencias.map((exp, index) => (
        <div key={index} className="card">
          <h3>{exp.cargo} - {exp.año}</h3>
          <p><strong>Empresa:</strong> {exp.empresa}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}
