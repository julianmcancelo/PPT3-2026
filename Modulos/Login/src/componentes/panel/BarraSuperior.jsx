import { useState } from 'react'
import { CloudSun, LogOut } from 'lucide-react'
import { ModalConfirmacion } from '../ModalConfirmacion'

export function BarraSuperior({ usuario, temperatura, onCerrarSesion }) {
  const [modalAbierto, setModalAbierto] = useState(false)
  const textoTemperatura = temperatura !== null ? `${temperatura}\u00B0C` : '--'

  return (
    <header className="bg-[#2A3448]">
      <div className="h-1 bg-[#29ABE2]" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <img
          src="/footer.png"
          alt="Instituto Tecnologico Beltran"
          className="h-10 w-auto object-contain"
        />

        <div className="flex items-center gap-2 sm:gap-3">
          {/* El clima queda visible sin ocupar demasiado espacio. */}
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-white sm:px-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#29ABE2]/20 text-[#8ED8F8]">
              <CloudSun size={13} />
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Clima
              </span>
              <span className="text-xs font-semibold text-white">
                {textoTemperatura}
              </span>
            </div>
          </div>

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
