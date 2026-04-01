// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

import { CloudSun, MapPin } from 'lucide-react'

// Recibe como props todo lo que necesita para mostrarse.
// El estado del clima lo calcula PantallaBienvenida y lo pasa para abajo.
// Así este componente solo se ocupa de cómo se ve, no de cómo se buscan los datos.
export function TarjetaClima({ detalleClima, estadoClima, temperatura, ubicacion }) {

  // El ícono del clima cambia según el código que devuelve la API del tiempo.
  // La función obtenerDetalleClima ya resolvió cuál es el componente correcto.
  const IconoClima = detalleClima.icono

  return (
    // Tarjeta con el mismo estilo base que las de fecha y hora,
    // pero con fondo ligeramente más azul para diferenciar visualmente
    // que esta sección es de información externa (clima).
    <section className="relative overflow-hidden rounded-2xl border border-[#B3E5FC] bg-gradient-to-b from-[#E8F7FD] to-[#F0FAFF] p-5 shadow-[0_8px_24px_rgba(41,171,226,0.10)]">

      {/* Decoración de fondo: círculo grande semitransparente en la esquina. */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#29ABE2] opacity-[0.06]" />

      <div className="relative">

        {/* Encabezado con ícono de nube y etiqueta "Clima". */}
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#29ABE2] shadow-sm">
            <CloudSun size={17} />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#29ABE2]">
            Clima
          </p>
        </div>

        {/* Temperatura en grande + ícono del clima del lado derecho.
            El -- aparece mientras se carga la temperatura (temperatura === null). */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            {/* Descripción del estado del clima: "Cielo despejado", "Lluvia", etc. */}
            <p className="text-xs text-[#546E7A]">{estadoClima}</p>
            {/* Temperatura en número grande. */}
            <p className="mt-2 text-[2.8rem] font-bold leading-none tracking-tight text-[#2A3448]">
              {temperatura !== null ? `${temperatura}°C` : '--'}
            </p>
          </div>

          {/* Ícono que representa el clima actual (sol, nubes, lluvia, etc.).
              Viene del objeto detalleClima que arma la función obtenerDetalleClima. */}
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/80 text-[#29ABE2] shadow-sm">
            <IconoClima size={28} />
          </div>
        </div>

        {/* Caja de ubicación al final de la tarjeta. */}
        <div className="mt-4 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-1.5 text-[#90A4AE]">
            <MapPin size={13} />
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">Ubicación</p>
          </div>
          {/* Nombre de la ciudad o "Tu ubicación actual" si el usuario dio permiso. */}
          <p className="mt-1.5 text-sm font-semibold text-[#2A3448]">{ubicacion}</p>
          {/* Barra decorativa. */}
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#29ABE2] to-[#B3E5FC]" />
        </div>

      </div>
    </section>
  )
}
