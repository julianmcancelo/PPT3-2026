// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

import { useState } from 'react'
import { PaginaInicioSesion } from './paginas/PaginaInicioSesion'
import { PantallaBienvenida } from './paginas/PantallaBienvenida'

function App() {
  // Inicializo sesionActiva leyendo el localStorage.
  // Si el usuario ya había iniciado sesión antes de recargar, arranca directo en el panel.
  // La función flecha dentro del useState se llama "inicializador perezoso":
  // solo se ejecuta una vez al montar el componente, no en cada render.
  const [sesionActiva, setSesionActiva] = useState(
    () => localStorage.getItem('sesion') === 'true'
  )

  // Igual con el usuario: si hay datos guardados los parseo con JSON.parse.
  // Si no hay nada guardado, pongo el objeto vacío por defecto.
  const [usuario, setUsuario] = useState(
    () => JSON.parse(localStorage.getItem('usuario') || 'null') ?? { nombre: '', correo: '' }
  )

  function manejarInicioSesionExitoso(datosUsuario) {
    // Guardo los datos en el estado de React para que el componente se actualice.
    setUsuario(datosUsuario)
    setSesionActiva(true)

    // También los guardo en localStorage para que sobrevivan un F5 o cierre de pestaña.
    // JSON.stringify convierte el objeto a string porque localStorage solo guarda strings.
    localStorage.setItem('sesion', 'true')
    localStorage.setItem('usuario', JSON.stringify(datosUsuario))
  }

  function manejarCerrarSesion() {
    // Limpio el estado de React para que React vuelva a mostrar el login.
    setUsuario({ nombre: '', correo: '' })
    setSesionActiva(false)

    // Borro los datos del localStorage para que el próximo F5 arranque en el login.
    localStorage.removeItem('sesion')
    localStorage.removeItem('usuario')
  }

  // Si hay sesión activa muestro el panel, si no muestro el login.
  if (sesionActiva) {
    return (
      <PantallaBienvenida
        usuario={usuario}
        onCerrarSesion={manejarCerrarSesion}
      />
    )
  }

  return <PaginaInicioSesion onInicioSesionExitoso={manejarInicioSesionExitoso} />
}

export default App
