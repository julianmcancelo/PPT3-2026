import { Home } from 'lucide-react'

export function LayoutAutenticacion({ children }) {
  return (
    <main
      className="relative min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #1a2540 0%, #2A3448 50%, #1a2540 100%)',
      }}
    >
      {/* Icono home arriba a la derecha */}
      <div className="absolute right-5 top-5 z-10">
        <button
          className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
          title="Inicio"
        >
          <Home size={22} />
        </button>
      </div>

      {/* Layout split: logo izquierda / formulario derecha */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Panel izquierdo — branding */}
        <div className="flex flex-1 items-center justify-center px-8 py-12 lg:py-0">
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src="/footer.png"
              alt="Instituto Tecnologico Beltran"
              className="h-28 w-auto object-contain drop-shadow-lg"
            />
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Plataforma institucional
              </p>
            </div>
          </div>
        </div>

        {/* Panel derecho — tarjeta con formulario */}
        <div className="flex flex-1 items-center justify-center px-4 py-10 lg:py-0">
          <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
