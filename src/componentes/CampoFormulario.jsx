// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// Hice este componente para no repetir la misma estructura de input
// en cada campo del formulario. Si mañana quiero cambiar el estilo de todos
// los inputs, lo cambio acá y listo, no tengo que tocar cada uno por separado.
export function CampoFormulario({
  etiqueta,
  tipo = 'text',
  nombre,
  valor,
  placeholder,
  mensajeError,
  onChange,
}) {
  // Convierto el mensaje de error en un booleano para usarlo más fácil en las clases.
  // Si mensajeError tiene algo, tieneError es true; si está vacío, es false.
  const tieneError = Boolean(mensajeError)

  return (
    // Uso label en vez de un div para que el navegador entienda
    // que el texto de la etiqueta y el input van juntos (accesibilidad).
    <label className="block space-y-1.5">

      {/* La etiqueta la pongo en mayúsculas y pequeña, parecido al estilo
          que usa el instituto en su sitio web. */}
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1A1A2E]">
        {etiqueta}
      </span>

      <input
        // Si el campo tiene un error cambio el borde y el fondo a rojo claro
        // para que el usuario sepa inmediatamente qué campo está mal.
        // Si no hay error, el borde es gris neutro y al hacer foco se pone azul
        // (#29ABE2 es el azul del logo del instituto).
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 ${
          tieneError
            ? 'border-rose-300 bg-rose-50 focus:border-rose-400'
            : 'border-slate-300 bg-white focus:border-[#29ABE2]'
        }`}
        // El tipo define el comportamiento del input: "email" valida formato,
        // "password" oculta lo que se escribe, "text" es el genérico.
        type={tipo}
        // El name lo uso para saber qué propiedad del objeto formulario actualizar.
        name={nombre}
        // El valor lo controla el componente padre para tener un solo punto de verdad.
        value={valor}
        // El placeholder lo recibo como prop para que cada campo tenga su propio texto de ayuda.
        placeholder={placeholder}
        // Cuando el usuario escribe, aviso al padre para que actualice el estado.
        onChange={onChange}
      />

      {/* Solo muestro el mensaje de error si existe.
          Lo pongo debajo del input para que sea obvio a qué campo pertenece. */}
      {tieneError ? (
        <span className="text-xs text-rose-600">{mensajeError}</span>
      ) : null}

    </label>
  )
}
