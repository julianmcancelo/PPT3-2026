// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// Componente reutilizable del logo institucional del Instituto Tecnológico Beltrán.
// El isótipo ahora usa la imagen oficial (public/footer.png) en vez del SVG reconstruido,
// así queda 100% fiel al original sin riesgo de que los arcos no estén bien.
//
// En Vite, los archivos que están en la carpeta public/ se sirven desde la raíz (/),
// así que la ruta es simplemente "/footer.png" sin necesidad de importar nada.
//
// Props:
//   size    → altura total del bloque de logo en píxeles (default 48)
//   variant → "dark"  = texto en blanco (para fondos oscuros)
//             "light" = texto en oscuro  (para fondos claros)

export function LogoBeltran({ size = 48, variant = 'light' }) {

  // El isótipo ocupa el 85% de la altura total del logo.
  const iconSize = Math.round(size * 0.85)

  // Cambio los colores del texto según si el fondo es oscuro o claro.
  const colorNombre    = variant === 'dark' ? '#FFFFFF'                : '#1A2535'
  const colorSubtitulo = variant === 'dark' ? '#29ABE2'                : '#546E7A'
  const colorUom       = variant === 'dark' ? 'rgba(255,255,255,0.40)' : '#90A4AE'

  return (
    // Fila horizontal: isótipo a la izquierda, texto a la derecha.
    <div style={{ height: size, display: 'flex', alignItems: 'center', gap: '0.65rem' }}>

      {/* Isótipo oficial del instituto.
          Uso la imagen real guardada en public/footer.png en vez del SVG reconstruido.
          objectFit: 'contain' hace que la imagen respete sus proporciones sin recortarse.
          El fondo de la imagen es transparente, así se adapta a cualquier fondo. */}
      <img
        src="/footer.png"
        alt="Isótipo Instituto Tecnológico Beltrán"
        style={{
          width: iconSize,
          height: iconSize,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block',
        }}
      />

      {/* Bloque de texto institucional: los tres niveles de jerarquía del logo. */}
      <div style={{ lineHeight: 1.2 }}>

        {/* Nombre completo en mayúsculas con tracking amplio,
            igual al estilo tipográfico del sitio oficial. */}
        <p style={{
          margin: 0,
          color: colorNombre,
          fontSize: Math.max(size * 0.175, 10),
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Instituto Tecnológico Beltrán
        </p>

        {/* Subtítulo oficial extraído de ibeltran.com.ar. */}
        <p style={{
          margin: '2px 0 0 0',
          color: colorSubtitulo,
          fontSize: Math.max(size * 0.135, 8),
          fontWeight: 400,
          letterSpacing: '0.04em',
        }}>
          Centro de Tecnología e Innovación
        </p>

        {/* Afiliación con la UOM con menor jerarquía visual. */}
        <p style={{
          margin: '1px 0 0 0',
          color: colorUom,
          fontSize: Math.max(size * 0.105, 7),
          fontWeight: 400,
          letterSpacing: '0.03em',
        }}>
          UOM · Unión Obrera Metalúrgica · Avellaneda
        </p>

      </div>
    </div>
  )
}
