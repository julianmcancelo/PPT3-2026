import { useState } from 'react'
import { LogOut } from 'lucide-react'
import { ModalConfirmacion } from '../ModalConfirmacion'

export function BarraSuperior({ usuario, onCerrarSesion }) {
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <header className="bg-[#2A3448]">
      <div className="h-1 bg-[#29ABE2]" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <img
          src="/footer.png"
          alt="Instituto Tecnologico Beltran"
          className="h-10 w-auto object-contain"
        />

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-white/60 sm:block">
            {usuario.correo}
          </span>

          <button
            type="button"
            onClick={() => setModalAbierto(true)}
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            <LogOut size={13} />
            Cerrar sesion
          </button>
        </div>
      </div>

      <ModalConfirmacion
        abierto={modalAbierto}
        onConfirmar={onCerrarSesion}
        onCancelar={() => setModalAbierto(false)}
        titulo="Cerrar sesion"
        descripcion="Vas a salir del sistema. Podes volver a ingresar cuando quieras con tus credenciales."
        textoConfirmar="Si, cerrar sesion"
      />
    </header>
  )
}
