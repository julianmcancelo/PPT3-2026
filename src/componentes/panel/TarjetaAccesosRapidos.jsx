// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// Recibe el array de accesos desde PantallaBienvenida que lo importa del archivo de datos.
// Si en algún momento quiero agregar un acceso nuevo, solo toco el archivo de datos,
// sin necesidad de modificar este componente.
export function TarjetaAccesosRapidos({ accesosRapidos }) {
  return (
    // Tarjeta con fondo blanco para que contraste con las tarjetas de fondo azulado.
    <section className="overflow-hidden rounded-2xl border border-[#B3E5FC] bg-white shadow-[0_8px_24px_rgba(41,171,226,0.08)]">

      {/* Encabezado de la sección con franja azul superior igual a la del panel principal. */}
      <div className="border-b border-[#E1F5FE] bg-[#E8F7FD] px-5 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1565C0]">
          Accesos rápidos
        </p>
      </div>

      {/* Lista de botones de acceso rápido.
          Cada uno muestra un ícono y un texto, y los renderizo con .map()
          a partir del array que viene como prop. */}
      <div className="space-y-2 p-4">
        {accesosRapidos.map((acceso) => {
          // El ícono viene como un componente de React (de lucide-react),
          // así que lo uso como si fuera una etiqueta JSX con mayúscula.
          const Icono = acceso.icono

          return (
            <button
              key={acceso.titulo}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl border border-[#E1F5FE] bg-[#F8FCFF] px-4 py-3 text-left text-sm font-semibold text-[#2A3448] transition hover:border-[#B3E5FC] hover:bg-[#E8F7FD]"
            >
              {/* Ícono sobre fondo blanco con sombra suave y color azul institucional. */}
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
