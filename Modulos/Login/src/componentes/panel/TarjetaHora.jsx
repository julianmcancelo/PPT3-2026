import { Clock3 } from 'lucide-react'
import { obtenerTextoHora } from '../../utilidades/formatear-fecha'

export function TarjetaHora({ fechaActual }) {
  // Este componente usa la misma fecha del panel para mantener el reloj sincronizado.
  // La hora se muestra sin segundos para una lectura mas clara.
  const textoHora = obtenerTextoHora(fechaActual)

  return (
    <article className="relative overflow-hidden rounded-2xl border border-[#B3E5FC] bg-gradient-to-b from-[#F0FAFF] to-[#E8F7FD] p-2 shadow-[0_8px_18px_rgba(41,171,226,0.08)]">
      <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#29ABE2] opacity-[0.07]" />

      <div className="relative">
        <div className="flex items-center gap-1.5">
          <div className="grid h-6 w-6 place-items-center rounded-lg bg-white text-[#29ABE2] shadow-sm">
            <Clock3 size={13} />
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#29ABE2]">
            Hora
          </p>
        </div>

        {/* La caja principal destaca el horario sin sumar ruido visual. */}
        <div className="mt-1.5 rounded-lg bg-white/80 px-2.5 py-2 shadow-sm">
          <p className="text-[1rem] font-bold leading-none tracking-tight text-[#2A3448] sm:text-[1.15rem]">
            {textoHora}
          </p>
          <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#607D8B]">
            Hora actual
          </p>
        </div>
      </div>
    </article>
  )
}
