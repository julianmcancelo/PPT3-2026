// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// Este layout es el "envoltorio" de la pantalla de login.
// Lo separé del formulario para que si en algún momento quiero
// usar el mismo fondo con otro contenido, solo lo importo acá.
export function LayoutAutenticacion({ children }) {
  return (
    // El fondo usa el blanco azulado (#F8FAFC) que encontré en el sitio del instituto.
    // Es más limpio que el gris puro y se siente más institucional.
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* Sección que abarca toda la pantalla. overflow-hidden lo puse
          para que los elementos decorativos de fondo no generen scroll. */}
      <section className="relative overflow-hidden">

        {/* Patrón de grilla en azul muy tenue.
            Lo hago con un fondo degradado repetido porque no quería importar
            una imagen externa. El rgba(41,171,226,0.05) es el azul del logo
            al 5% de opacidad, casi invisible pero le da textura al fondo. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(41,171,226,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(41,171,226,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Gradiente blanco en la parte superior para que la grilla
            no se vea tan brusca al entrar a la página. */}
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />

        {/* Franja azul fina en la parte inferior.
            Replica el detalle que usa el sitio del instituto para separar secciones. */}
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#29ABE2]" />

        {/* Contenedor que centra la tarjeta de login en el medio de la pantalla.
            Uso flex con items-center y justify-center para centrarlo tanto
            vertical como horizontalmente en cualquier resolución. */}
        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-3 py-4 sm:px-6 sm:py-6 lg:px-8">

          {/* max-w-[28rem] limita el ancho de la tarjeta para que no se estire
              demasiado en pantallas grandes y sea cómoda de leer. */}
          <div className="w-full max-w-[28rem]">{children}</div>

        </div>
      </section>
    </main>
  )
}
