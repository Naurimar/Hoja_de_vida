// Actualización para commit del Header

export default function Header() {
  return (
    <header className='header'>
      <div className='header-content'>
        <img src='https://via.placeholder.com/150' alt='Foto de perfil' className='profile-img' />
        <div>
          <h1>Naurimar González</h1>
          <p>Desarrolladora Front-End | Estudiante de Tecnología en Sistemas</p>
        </div>
      </div>
    </header>
  );
}
    export default function Header({ nombre, cargo, ciudad, contacto }) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h3>{cargo}</h3>
      <p>{ciudad}</p>
      <p>{contacto}</p>
    </header>
  );
}

