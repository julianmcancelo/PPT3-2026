export function TarjetaSaludo({ usuario }) {
  return (
    <div className="border-b border-[#E1F5FE] pb-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#29ABE2]">
        Bienvenido/a
      </p>

      <h1 className="mt-2 text-[2rem] font-bold leading-tight text-[#2A3448] sm:text-[2.4rem] lg:text-[2.8rem]">
        Hola, {usuario.nombre || 'usuario'}
      </h1>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#B3E5FC] bg-[#E8F7FD] px-3 py-1.5 text-xs font-medium text-[#1565C0]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        Sesion activa
      </div>
    </div>
  )
}
