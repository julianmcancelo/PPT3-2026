export function TarjetaAccesosRapidos({ accesosRapidos }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#B3E5FC] bg-white shadow-[0_8px_24px_rgba(41,171,226,0.08)]">
      <div className="border-b border-[#E1F5FE] bg-[#E8F7FD] px-5 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1565C0]">
          Accesos rapidos
        </p>
      </div>

      <div className="space-y-2 p-4">
        {accesosRapidos.map((acceso) => {
          const Icono = acceso.icono

          return (
            <button
              key={acceso.titulo}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl border border-[#E1F5FE] bg-[#F8FCFF] px-4 py-3 text-left text-sm font-semibold text-[#2A3448] transition hover:border-[#B3E5FC] hover:bg-[#E8F7FD]"
            >
              <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white text-[#29ABE2] shadow-sm">
                <Icono size={17} />
              </div>
              {acceso.titulo}
            </button>
          )
        })}
      </div>
    </section>
  )
}
