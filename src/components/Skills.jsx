
// src/components/StackTecnologias.jsx
const tecnologias = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Tailwind", "Git", "Python"];

function obtenerColor(tecnologia) {
  if (tecnologia === "JavaScript") return "#f7df1e";
  if (tecnologia === "React") return "#61dafb";
  if (tecnologia === "Node.js") return "#8cc84b";
  if (tecnologia === "Tailwind") return "#38bdf8";
  if (tecnologia === "Git") return "#f4511e";
  return "#d1d5db"; // gris por defecto
}

export default function StackTecnologias() {
  return (
    <section>
      <h2>Stack de Tecnologías</h2>
      <div className="stack">
        {tecnologias.map((tec, index) => (
          <span
            key={index}
            style={{
              backgroundColor: obtenerColor(tec),
              padding: "8px 12px",
              borderRadius: "8px",
              margin: "5px",
              display: "inline-block",
              fontWeight: "bold"
            }}
          >
            {tec}
          </span>
        ))}
      </div>
    </section>
  );
}
export default function Skills({ lista }) {
  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {lista.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}



