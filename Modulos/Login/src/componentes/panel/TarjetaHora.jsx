// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

import { Clock3 } from 'lucide-react'
// Esta función convierte el objeto Date a un string de hora con formato HH:MM:SS.
import { obtenerTextoHora } from '../../utilidades/formatear-fecha'

// Recibe la fecha desde el padre (PantallaBienvenida) que la actualiza cada segundo.
// Así el reloj se actualiza sin que este componente maneje su propio timer.
export function TarjetaHora({ fechaActual }) {
  return (
    // Mismo estilo que TarjetaFecha para que las dos se vean como un par.
    <article className="relative overflow-hidden rounded-2xl border border-[#B3E5FC] bg-gradient-to-b from-[#F0FAFF] to-[#E8F7FD] p-4 shadow-[0_8px_24px_rgba(41,171,226,0.10)]">

      {/* Círculo decorativo en la esquina opuesta a la de TarjetaFecha
          para que las dos tarjetas tengan variación aunque compartan el mismo estilo base. */}
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#29ABE2] opacity-[0.07]" />

      <div className="relative">

        {/* Encabezado con ícono de reloj. */}
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#29ABE2] shadow-sm">
            <Clock3 size={17} />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#29ABE2]">
            Hora
          </p>
        </div>

        {/* Caja con la hora en grande.
            La función obtenerTextoHora devuelve un string tipo "14:35:08". */}
        <div className="mt-4 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
          <p className="text-[2rem] font-bold leading-none tracking-tight text-[#2A3448] sm:text-[2.4rem]">
            {obtenerTextoHora(fechaActual)}
          </p>
          {/* Barra decorativa con degradado en el azul del instituto. */}
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#29ABE2] to-[#B3E5FC]" />
        </div>

      </div>
    </article>
  )
}
