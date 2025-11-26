// Actualización para commit del Skills

export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Vite'];
  return (
    <section className='section skills'>
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
