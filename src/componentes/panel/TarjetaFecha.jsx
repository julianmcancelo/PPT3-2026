// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// CalendarDays es el ícono de calendario de lucide-react.
import { CalendarDays } from 'lucide-react'

// Estas funciones de utilidad ya estaban en el proyecto y las reutilizo.
// Convierten la fecha a texto legible en español.
import { obtenerTextoFecha, obtenerTextoMes } from '../../utilidades/formatear-fecha'

// Recibe la fecha como prop desde PantallaBienvenida que la actualiza cada segundo.
// Así no necesito manejar el estado del tiempo acá adentro.
export function TarjetaFecha({ fechaActual }) {
  return (
    // Tarjeta con fondo gradiente suave y borde azul claro institucional.
    // El overflow-hidden es para que el gradiente de fondo no sobresalga.
    <article className="relative overflow-hidden rounded-2xl border border-[#B3E5FC] bg-gradient-to-b from-[#F0FAFF] to-[#E8F7FD] p-4 shadow-[0_8px_24px_rgba(41,171,226,0.10)]">

      {/* Círculo decorativo en la esquina superior derecha.
          Le da profundidad visual a la tarjeta sin que sea muy llamativo. */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#29ABE2] opacity-[0.07]" />

      <div className="relative">

        {/* Encabezado con ícono y etiqueta. */}
        <div className="flex items-center gap-2.5">
          {/* Ícono de calendario sobre fondo blanco con sombra suave. */}
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#29ABE2] shadow-sm">
            <CalendarDays size={17} />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#29ABE2]">
            Fecha
          </p>
        </div>

        {/* Número del día grande + mes + año en fila. */}
        <div className="mt-4 flex items-end justify-between gap-2">
          <div>
            {/* El día del mes en número grande, en el navy del instituto. */}
            <p className="text-4xl font-bold leading-none text-[#2A3448]">
              {fechaActual.getDate()}
            </p>
            {/* El mes en texto, en mayúsculas y con tracking amplio. */}
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#546E7A]">
              {obtenerTextoMes(fechaActual)}
            </p>
          </div>

          {/* Año en una cajita separada, con fondo blanco semitransparente. */}
          <div className="rounded-xl bg-white/80 px-3 py-2 text-right shadow-sm">
            <p className="text-[9px] uppercase tracking-wider text-[#90A4AE]">Año</p>
            <p className="mt-0.5 text-sm font-bold text-[#2A3448]">
              {fechaActual.getFullYear()}
            </p>
          </div>
        </div>

        {/* El día de la semana escrito en texto, abajo de todo. */}
        <p className="mt-3 text-[1.1rem] font-semibold leading-tight text-[#2A3448]">
          {obtenerTextoFecha(fechaActual)}
        </p>

      </div>
    </article>
  )
}
