// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

import { useState } from 'react'
import { LogOut } from 'lucide-react'
// Importo el modal genérico de confirmación que armé en el componente separado.
import { ModalConfirmacion } from '../ModalConfirmacion'

export function BarraSuperior({ usuario, onCerrarSesion }) {
  // Estado para controlar si el modal de confirmación está abierto o cerrado.
  // Empieza cerrado (false) y se abre cuando el usuario hace click en "Cerrar sesión".
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <header className="bg-[#2A3448]">
      <div className="h-1 bg-[#29ABE2]" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Isótipo del instituto directo desde public/footer.png.
            h-10 (40px) es suficiente para que sea reconocible en la barra. */}
        <img
          src="/footer.png"
          alt="Instituto Tecnológico Beltrán"
          className="h-10 w-auto object-contain"
        />

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-white/60 sm:block">
            {usuario.correo}
          </span>

          {/* Al hacer click abro el modal en vez de cerrar la sesión directamente.
              Así el usuario tiene la chance de cancelar si fue sin querer. */}
          <button
            type="button"
            onClick={() => setModalAbierto(true)}
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            <LogOut size={13} />
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Modal de confirmación.
          onConfirmar llama a onCerrarSesion (que viene del App y limpia localStorage).
          onCancelar simplemente cierra el modal sin hacer nada más. */}
      <ModalConfirmacion
        abierto={modalAbierto}
        onConfirmar={onCerrarSesion}
        onCancelar={() => setModalAbierto(false)}
        titulo="¿Cerrás la sesión?"
        descripcion="Vas a salir del sistema. Podés volver a ingresar cuando quieras con tus credenciales."
        textoConfirmar="Sí, cerrar sesión"
      />
    </header>
  )
}
