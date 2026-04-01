export function TarjetaAccesosRapidos({ accesosRapidos }) {
  return (
    <section className="overflow-hidden rounded-[1.05rem] border border-[#B3E5FC] bg-white shadow-[0_8px_24px_rgba(41,171,226,0.08)] sm:rounded-2xl">
      <div className="border-b border-[#E1F5FE] bg-[#E8F7FD] px-3.5 py-2.5 sm:px-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1565C0]">
          Accesos rapidos
        </p>
      </div>

      {/* Los accesos se agrupan en una grilla para reducir el alto total. */}
      <div className="grid gap-2 p-3 sm:grid-cols-3">
        {accesosRapidos.map((acceso) => {
          const Icono = acceso.icono

          return (
            <button
              key={acceso.titulo}
              type="button"
              className="flex w-full items-center gap-2.5 rounded-lg border border-[#E1F5FE] bg-[#F8FCFF] px-3 py-2.5 text-left text-sm font-semibold text-[#2A3448] transition hover:border-[#B3E5FC] hover:bg-[#E8F7FD]"
            >
              <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-white text-[#29ABE2] shadow-sm">
                <Icono size={15} />
              </div>
              {acceso.titulo}
            </button>
          )
        })}
      </div>
    </section>
  )
}
