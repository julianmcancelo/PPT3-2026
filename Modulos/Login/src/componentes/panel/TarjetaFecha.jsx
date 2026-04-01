import { CalendarDays } from 'lucide-react'
import { obtenerTextoFecha, obtenerTextoMes } from '../../utilidades/formatear-fecha'

export function TarjetaFecha({ fechaActual }) {
  // Este componente recibe la fecha actual desde el panel principal.
  // Separamos el dia para que la fecha larga no ocupe una sola linea pesada.
  const [diaSemana, restoFecha] = obtenerTextoFecha(fechaActual).split(', ')

  return (
    <article className="relative overflow-hidden rounded-2xl border border-[#B3E5FC] bg-gradient-to-b from-[#F0FAFF] to-[#E8F7FD] p-2 shadow-[0_8px_18px_rgba(41,171,226,0.08)]">
      {/* El circulo suma profundidad sin agrandar el bloque. */}
      <div className="absolute -right-4 -top-4 h-14 w-14 rounded-full bg-[#29ABE2] opacity-[0.07]" />

      <div className="relative">
        <div className="flex items-center gap-1.5">
          <div className="grid h-6 w-6 place-items-center rounded-lg bg-white text-[#29ABE2] shadow-sm">
            <CalendarDays size={13} />
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#29ABE2]">
            Fecha
          </p>
        </div>

        {/* La parte superior muestra dia, mes y año con foco visual. */}
        <div className="mt-1.5 flex items-start justify-between gap-2">
          <div>
            <p className="text-[1.2rem] font-bold leading-none text-[#2A3448] sm:text-[1.35rem]">
              {fechaActual.getDate()}
            </p>
            <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#546E7A]">
              {obtenerTextoMes(fechaActual)}
            </p>
          </div>

          <div className="rounded-lg bg-white/80 px-2 py-1 text-right shadow-sm">
            <p className="text-[9px] uppercase tracking-wider text-[#90A4AE]">
              {'A\u00F1o'}
            </p>
            <p className="mt-0.5 text-[11px] font-bold text-[#2A3448] sm:text-xs">
              {fechaActual.getFullYear()}
            </p>
          </div>
        </div>

        {/* La fecha completa se reparte en dos niveles para mejorar lectura. */}
        <div className="mt-1.5 space-y-0.5">
          <p className="text-[0.78rem] font-semibold capitalize leading-tight text-[#2A3448]">
            {diaSemana}
          </p>
          <p className="text-[0.78rem] font-medium leading-tight text-[#52606D]">
            {restoFecha}
          </p>
        </div>
      </div>
    </article>
  )
}
