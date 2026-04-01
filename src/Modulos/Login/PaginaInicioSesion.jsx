// Importamos el formulario con la logica del login.
import { FormularioInicioSesion } from './FormularioInicioSesion'
// Importamos el layout que centra la pantalla.
import { LayoutAutenticacion } from './LayoutAutenticacion'

export function PaginaInicioSesion({ onInicioSesionExitoso }) {
  return (
    // Esta pagina solo compone piezas:
    // layout por fuera y formulario por dentro.
    <LayoutAutenticacion>
      <FormularioInicioSesion
        onInicioSesionExitoso={onInicioSesionExitoso}
      />
    </LayoutAutenticacion>
  )
}
