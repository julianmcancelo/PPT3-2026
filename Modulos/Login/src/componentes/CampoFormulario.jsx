// Campo reutilizable para mantener el mismo estilo en todos los inputs del login.
export function CampoFormulario({
  etiqueta,
  tipo = 'text',
  nombre,
  valor,
  placeholder,
  mensajeError,
  onChange,
}) {
  const tieneError = Boolean(mensajeError)

  return (
    <label className="block space-y-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1A1A2E]">
        {etiqueta}
      </span>

      <input
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 ${
          tieneError
            ? 'border-rose-300 bg-rose-50 focus:border-rose-400'
            : 'border-slate-300 bg-white focus:border-[#29ABE2]'
        }`}
        type={tipo}
        name={nombre}
        value={valor}
        placeholder={placeholder}
        onChange={onChange}
      />

      {tieneError ? (
        <span className="text-xs text-rose-600">{mensajeError}</span>
      ) : null}
    </label>
  )
}
