export default function Projects() {
  const projects = [
    { name: 'Portafolio Personal', description: 'Sitio web creado con React y Vite.' },
    { name: 'Gestor de Tareas', description: 'Aplicación CRUD con almacenamiento local.' },
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
