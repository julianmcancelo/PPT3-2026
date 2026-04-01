// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// Este componente muestra el saludo principal con el nombre del usuario
// y una insignia que indica que la sesión está activa.
// El botón de cerrar sesión lo moví a la BarraSuperior, así que acá
// solo me quedo con el saludo, que es más limpio.
export function TarjetaSaludo({ usuario }) {

  return (
    // Borde inferior para separar visualmente el saludo de las tarjetas de abajo.
    <div className="border-b border-[#E1F5FE] pb-5">

      {/* Etiqueta pequeña arriba del nombre, en el azul institucional. */}
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#29ABE2]">
        Bienvenido/a
      </p>

      {/* Nombre del usuario grande y en el navy del instituto.
          El || 'usuario' es por si el nombre llega vacío por algún motivo. */}
      <h1 className="mt-2 text-[2rem] font-bold leading-tight text-[#2A3448] sm:text-[2.4rem] lg:text-[2.8rem]">
        Hola, {usuario.nombre || 'usuario'}
      </h1>

      {/* Insignia de sesión activa con el punto verde que indica que está conectado. */}
      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#B3E5FC] bg-[#E8F7FD] px-3 py-1.5 text-xs font-medium text-[#1565C0]">
        {/* Punto verde animado que indica conexión activa. */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        Sesión activa
      </div>

    </div>
  )
}
