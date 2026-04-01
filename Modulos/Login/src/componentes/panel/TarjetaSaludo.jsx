export function TarjetaSaludo({ usuario }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#A7DFFF] bg-[#33445B] shadow-[0_14px_32px_rgba(42,52,72,0.18)]">
      <div className="relative">
        {/* La pieza celeste replica el corte diagonal de la referencia. */}
        <div className="bg-[#1183BF] px-4 py-4 text-white [clip-path:polygon(0_0,88%_0,100%_100%,0_100%)] sm:px-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Bienvenido/a
          </p>
          <h1 className="mt-1 text-[1.15rem] font-bold leading-tight sm:text-[1.35rem]">
            Hola, {usuario.nombre || 'usuario'}
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-white sm:px-5">
          <p className="max-w-xl text-[0.82rem] text-white/82">
            Este es tu panel de acceso rapido para consultar fecha, hora y clima actual.
          </p>

          {/* La sesion activa queda visible como estado simple. */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-2.5 py-1 text-[10px] font-medium text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Sesion activa
          </div>
        </div>
      </div>
    </section>
  )
}
