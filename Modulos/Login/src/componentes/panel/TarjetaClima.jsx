import { CloudSun, MapPin } from 'lucide-react'

export function TarjetaClima({
  detalleClima,
  estadoClima,
  temperatura,
  ubicacion,
}) {
  // El icono cambia segun el codigo que devuelve la API.
  const IconoClima = detalleClima.icono

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#B3E5FC] bg-gradient-to-b from-[#E8F7FD] to-[#F0FAFF] p-5 shadow-[0_8px_24px_rgba(41,171,226,0.10)]">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#29ABE2] opacity-[0.06]" />

      <div className="relative">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#29ABE2] shadow-sm">
            <CloudSun size={17} />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#29ABE2]">
            Clima
          </p>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-[#546E7A]">{estadoClima}</p>
            <p className="mt-2 text-[2.8rem] font-bold leading-none tracking-tight text-[#2A3448]">
              {temperatura !== null ? `${temperatura}°C` : '--'}
            </p>
          </div>

          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/80 text-[#29ABE2] shadow-sm">
            <IconoClima size={28} />
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-1.5 text-[#90A4AE]">
            <MapPin size={13} />
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
              Ubicacion
            </p>
          </div>
          <p className="mt-1.5 text-sm font-semibold text-[#2A3448]">
            {ubicacion}
          </p>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#29ABE2] to-[#B3E5FC]" />
        </div>
      </div>
    </section>
  )
}
