// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// Importo los primitivos de @radix-ui/react-dialog.
// Esta librería me da la estructura accesible del modal (manejo de foco,
// cierre con Escape, aria-labels) sin imponerme ningún estilo visual.
// Yo me encargo de todo el diseño con Tailwind y la paleta del instituto.
import * as Dialog from '@radix-ui/react-dialog'

// AlertTriangle es el ícono de advertencia que pongo en el encabezado del modal.
import { AlertTriangle } from 'lucide-react'

// Componente genérico de confirmación.
// Lo hice reutilizable para que si en algún momento quiero un modal de confirmación
// en otro lado del proyecto, solo lo importo y le paso las props necesarias.
//
// Props:
//   abierto        → boolean: si el modal está visible o no
//   onConfirmar    → función que se ejecuta cuando el usuario confirma
//   onCancelar     → función que se ejecuta cuando el usuario cancela o cierra
//   titulo         → texto del encabezado del modal
//   descripcion    → texto explicativo debajo del título
//   textoConfirmar → texto del botón de acción (ej: "Sí, cerrar sesión")
export function ModalConfirmacion({
  abierto,
  onConfirmar,
  onCancelar,
  titulo,
  descripcion,
  textoConfirmar = 'Confirmar',
}) {
  return (
    // Dialog.Root controla si el modal está abierto o cerrado.
    // open y onOpenChange son las props que Radix usa para esto.
    // Cuando Radix quiere cerrar el modal (por ejemplo con Escape),
    // llama a onOpenChange(false), que yo mapeo a onCancelar.
    <Dialog.Root open={abierto} onOpenChange={(abierto) => { if (!abierto) onCancelar() }}>

      {/* Dialog.Portal renderiza el modal fuera del árbol DOM normal,
          directamente en el body. Así no hereda estilos ni posicionamientos raros
          del componente padre. */}
      <Dialog.Portal>

        {/* Overlay: el fondo oscuro que cubre toda la pantalla detrás del modal.
            backdrop-blur-sm le da el efecto de desenfoque al contenido de atrás. */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm" />

        {/* Content: la tarjeta del modal. La posiciono centrada con fixed + translate. */}
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-[#B3E5FC] bg-white shadow-[0_24px_64px_rgba(41,171,226,0.22)] focus:outline-none"
        >

          {/* ── ENCABEZADO DEL MODAL ─────────────────────────────────────────
              Mismo estilo navy + franja azul que uso en el login y la barra superior.
              Así el modal "pertenece" visualmente al mismo sistema. */}
          <div className="bg-[#2A3448]">
            <div className="h-1 bg-[#29ABE2]" />
            <div className="flex items-center gap-3 px-5 py-4">
              {/* Ícono de advertencia para que el usuario entienda que es una acción importante. */}
              <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-[#29ABE2]/20 text-[#29ABE2]">
                <AlertTriangle size={18} />
              </div>
              {/* Título del modal, vinculado semánticamente con aria gracias a Radix. */}
              <Dialog.Title className="text-sm font-bold text-white">
                {titulo}
              </Dialog.Title>
            </div>
          </div>

          {/* ── CUERPO DEL MODAL ─────────────────────────────────────────────
              Descripción y botones de acción. */}
          <div className="px-5 py-5 space-y-4">

            {/* Descripción explicativa. Radix la vincula con aria-describedby automáticamente. */}
            <Dialog.Description className="text-sm leading-relaxed text-[#546E7A]">
              {descripcion}
            </Dialog.Description>

            {/* Botones: cancelar a la izquierda, confirmar a la derecha.
                Pongo confirmar a la derecha porque es la acción principal. */}
            <div className="flex gap-3 justify-end">

              {/* Botón cancelar: estilo secundario, neutro, no llama la atención. */}
              <button
                type="button"
                onClick={onCancelar}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#546E7A] transition hover:bg-slate-50"
              >
                Cancelar
              </button>

              {/* Botón confirmar: azul institucional, es la acción principal del modal. */}
              <button
                type="button"
                onClick={onConfirmar}
                className="rounded-lg bg-[#29ABE2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0288D1] active:bg-[#0277BD]"
              >
                {textoConfirmar}
              </button>

            </div>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
