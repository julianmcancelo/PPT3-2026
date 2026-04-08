import { GraduationCap } from 'lucide-react'

export function LayoutAutenticacion({ children }) {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1b2e 0%, #1a2d45 45%, #2A3448 100%)',
      }}
    >
      {/* — Círculos borrosos de fondo — */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-25 blur-[80px]"
        style={{ background: '#29ABE2' }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{ background: '#1565C0' }}
      />
      <div
        className="pointer-events-none absolute -bottom-48 -right-32 h-[550px] w-[550px] rounded-full opacity-20 blur-[90px]"
        style={{ background: '#29ABE2' }}
      />

      {/* — Grilla de puntos sutil — */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* — Línea superior decorativa — */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#29ABE2] to-transparent opacity-70" />

      {/* — Icono home — */}
      <div className="absolute right-5 top-5 z-10">
        <button
          className="rounded-full p-2 text-white/40 transition hover:bg-white/10 hover:text-white"
          title="Instituto Tecnológico Beltrán"
        >
          <GraduationCap size={24} />
        </button>
      </div>

      {/* — Layout split — */}
      <div className="relative flex min-h-screen flex-col lg:flex-row">
        {/* Panel izquierdo — branding */}
        <div className="flex flex-1 items-center justify-center px-8 py-12 lg:py-0">
          <div className="flex flex-col items-center gap-5 text-center">
            <img
              src="https://ibeltran.com.ar/img/logo/footer.png"
              alt="Instituto Tecnologico Beltran"
              className="h-28 w-auto object-contain drop-shadow-2xl"
            />
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Plataforma institucional
              </p>
              <div className="mx-auto h-px w-10 bg-gradient-to-r from-transparent via-[#29ABE2] to-transparent" />
            </div>
          </div>
        </div>

        {/* Panel derecho — formulario */}
        <div className="flex flex-1 items-center justify-center px-4 py-10 lg:py-0">
          <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
