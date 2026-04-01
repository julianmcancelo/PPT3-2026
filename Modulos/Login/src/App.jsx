import { useState } from 'react'
import { PaginaInicioSesion } from './paginas/PaginaInicioSesion'
import { PantallaBienvenida } from './paginas/PantallaBienvenida'

function App() {
  // Restaura la sesion al recargar la pagina.
  const [sesionActiva, setSesionActiva] = useState(
    () => localStorage.getItem('sesion') === 'true',
  )

  // Mantiene los datos basicos del usuario logueado.
  const [usuario, setUsuario] = useState(
    () =>
      JSON.parse(localStorage.getItem('usuario') || 'null') ?? {
        nombre: '',
        correo: '',
      },
  )

  function manejarInicioSesionExitoso(datosUsuario) {
    setUsuario(datosUsuario)
    setSesionActiva(true)

    // Guarda la sesion para mantener el acceso entre recargas.
    localStorage.setItem('sesion', 'true')
    localStorage.setItem('usuario', JSON.stringify(datosUsuario))
  }

  function manejarCerrarSesion() {
    setUsuario({ nombre: '', correo: '' })
    setSesionActiva(false)

    localStorage.removeItem('sesion')
    localStorage.removeItem('usuario')
  }

  // Si hay sesion activa, muestra el panel principal.
  if (sesionActiva) {
    return (
      <PantallaBienvenida
        usuario={usuario}
        onCerrarSesion={manejarCerrarSesion}
      />
    )
  }

  // Si no hay sesion, vuelve al login.
  return <PaginaInicioSesion onInicioSesionExitoso={manejarInicioSesionExitoso} />
}

export default App
