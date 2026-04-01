// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// useState lo uso para guardar lo que escribe el usuario, los errores
// y si el modal de credenciales demo está abierto o cerrado.
import { useState } from 'react'
// Las credenciales de demo las tengo en un archivo separado para no mezclar
// datos con lógica del formulario.
import { credencialesDemo } from '../datos/credenciales-demo'
// La validación la puse en su propio archivo para que este componente
// no quede demasiado largo y sea más fácil de mantener.
import { validarFormularioLogin } from '../utilidades/validar-formulario-login'
// CampoFormulario es el input genérico que armé para reutilizar.
import { CampoFormulario } from './CampoFormulario'

// Estado base del formulario: dos campos vacíos.
// Lo defino fuera del componente para no recrearlo en cada render.
const formularioInicial = { correo: '', clave: '' }

export function FormularioInicioSesion({ onInicioSesionExitoso }) {
  // Valores actuales que escribe el usuario.
  const [formulario, setFormulario] = useState(formularioInicial)
  // Errores por campo para saber cuál pintar en rojo.
  const [errores, setErrores] = useState({})
  // Mensaje de resultado que aparece debajo del botón.
  const [mensajeEstado, setMensajeEstado] = useState('')
  // Controla si el modal con las credenciales demo está visible o no.
  // Lo inicializo en false para que empiece cerrado.
  const [modalVisible, setModalVisible] = useState(false)

  function manejarCambio(evento) {
    const { name, value } = evento.target
    // Actualizo solo el campo que cambió sin pisar los demás.
    setFormulario((prev) => ({ ...prev, [name]: value }))
    // Limpio el error de ese campo para dar feedback inmediato al usuario.
    setErrores((prev) => ({ ...prev, [name]: '' }))
  }

  function manejarEnvio(evento) {
    // Sin esto el navegador recargaría la página y perdería el estado de React.
    evento.preventDefault()

    const nuevosErrores = validarFormularioLogin(formulario)
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      setMensajeEstado('Revisa los campos marcados antes de continuar.')
      return
    }

    // Como no tengo backend, comparo contra las credenciales del archivo de demo.
    const coincideConDemo =
      formulario.correo === credencialesDemo.correo &&
      formulario.clave === credencialesDemo.clave

    if (!coincideConDemo) {
      setErrores({
        correo: 'El correo no coincide con la cuenta de prueba.',
        clave: 'La contraseña ingresada no es correcta.',
      })
      setMensajeEstado('No pudimos validar tus datos.')
      return
    }

    setErrores({})
    setMensajeEstado('Inicio de sesión correcto.')

    // Armo el nombre para la bienvenida a partir del correo.
    const nombreUsuario = formulario.correo.split('@')[0]
    const nombreFormateado =
      nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1)

    onInicioSesionExitoso({ nombre: nombreFormateado, correo: formulario.correo })
  }

  return (
    <>
      {/* ── TARJETA DE LOGIN ───────────────────────────────────────────────
          La achiqué reduciendo paddings y espaciados para que entre en
          pantalla sin generar scroll. El ancho máximo también lo bajé un poco.
      ──────────────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden rounded-[1.2rem] border border-[#B3E5FC] bg-white shadow-[0_16px_48px_rgba(41,171,226,0.14)]">

        {/* Header con logo institucional sobre fondo navy. */}
        <div className="bg-[#2A3448]">
          {/* Franja azul fina arriba, igual al detalle decorativo del sitio del instituto. */}
          <div className="h-1 bg-[#29ABE2]" />

          {/* Uso la imagen del isótipo directamente desde public/footer.png.
              La pongo centrada y grande para que sea lo primero que se vea al abrir el login. */}
          <div className="flex flex-col items-center px-5 py-5 gap-3">

            {/* Isótipo oficial: imagen guardada en public/footer.png.
                80px de alto para que sea visible y reconocible de entrada. */}
            <img
              src="/footer.png"
              alt="Instituto Tecnológico Beltrán"
              className="h-20 w-auto object-contain"
            />

            {/* Nombre y subtítulo del instituto debajo de la imagen, centrados. */}
            <div className="text-center">
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white">
                Instituto Tecnológico Beltrán
              </p>
              <p className="mt-0.5 text-[0.65rem] tracking-wide text-[#29ABE2]">
                Centro de Tecnología e Innovación
              </p>
              <p className="mt-0.5 text-[0.58rem] text-white/45">
                UOM · Unión Obrera Metalúrgica · Avellaneda
              </p>
            </div>

          </div>
        </div>

        {/* Etiqueta de sección: transición visual entre el header oscuro y el cuerpo blanco. */}
        <div className="border-b border-[#B3E5FC] bg-[#E8F7FD] px-5 py-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#1565C0]">
            Sistema de Acceso Institucional
          </p>
        </div>

        {/* Cuerpo del formulario con padding reducido para ganar espacio vertical. */}
        <div className="p-5">

          {/* Título y descripción breve. */}
          <div className="mb-3 space-y-1">
            <h1 className="text-[1.4rem] font-semibold text-[#2A3448]">
              Iniciar sesión
            </h1>
            <p className="text-xs leading-4 text-[#546E7A]">
              Ingresá tus credenciales para acceder a la plataforma institucional.
            </p>
          </div>

          {/* Formulario con espaciado reducido entre campos. */}
          <form className="space-y-3" onSubmit={manejarEnvio}>

            <CampoFormulario
              etiqueta="Correo electrónico"
              tipo="email"
              nombre="correo"
              valor={formulario.correo}
              placeholder="ejemplo@correo.com"
              mensajeError={errores.correo}
              onChange={manejarCambio}
            />

            <CampoFormulario
              etiqueta="Contraseña"
              tipo="password"
              nombre="clave"
              valor={formulario.clave}
              placeholder="Ingresá tu contraseña"
              mensajeError={errores.clave}
              onChange={manejarCambio}
            />

            {/* Botón de ingreso: azul institucional con hover más oscuro. */}
            <button
              className="w-full rounded-lg bg-[#29ABE2] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0288D1] active:bg-[#0277BD]"
              type="submit"
            >
              Ingresar al sistema
            </button>

            {/* Enlace para abrir el modal de credenciales demo.
                Lo pongo como un texto chico debajo del botón para no ocupar espacio
                dentro de la tarjeta. Al hacer click cambia modalVisible a true. */}
            <p className="text-center text-xs text-[#546E7A]">
              ¿Primera vez?{' '}
              <button
                type="button"
                className="font-medium text-[#29ABE2] underline-offset-2 hover:underline"
                onClick={() => setModalVisible(true)}
              >
                Ver credenciales de prueba
              </button>
            </p>

            {/* Mensaje de resultado: solo aparece después de intentar enviar. */}
            {mensajeEstado ? (
              <p
                className={`rounded-xl px-3 py-2 text-xs ${
                  mensajeEstado.includes('correcto')
                    ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border border-rose-200 bg-rose-50 text-rose-700'
                }`}
              >
                {mensajeEstado}
              </p>
            ) : null}

          </form>
        </div>
      </section>

      {/* ── MODAL DE CREDENCIALES DEMO ─────────────────────────────────────
          Solo se renderiza cuando modalVisible es true.
          Uso un overlay fijo que cubre toda la pantalla (fixed inset-0).
          Al hacer click en el fondo oscuro o en el botón "Cerrar" se cierra.
          Lo puse FUERA de la tarjeta para que flote sobre todo el contenido.
      ──────────────────────────────────────────────────────────────────── */}
      {modalVisible ? (
        // Fondo semitransparente oscuro que bloquea el contenido de atrás.
        // El onClick en este div cierra el modal si el usuario hace click fuera.
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={() => setModalVisible(false)}
        >
          {/* Tarjeta del modal.
              stopPropagation evita que el click dentro del modal cierre el overlay. */}
          <div
            className="w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal con el mismo estilo navy del login para coherencia. */}
            <div className="bg-[#2A3448] px-5 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#29ABE2]">
                Cuenta de prueba
              </p>
            </div>

            {/* Contenido del modal con las credenciales. */}
            <div className="px-5 py-4 space-y-3">
              <p className="text-xs text-[#546E7A]">
                Usá estas credenciales para probar el sistema sin una cuenta real.
              </p>

              {/* Correo demo con fondo azul claro para destacarlo. */}
              <div className="rounded-lg border border-[#B3E5FC] bg-[#E8F7FD] px-4 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#546E7A]">
                  Correo
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-[#1565C0]">
                  {credencialesDemo.correo}
                </p>
              </div>

              {/* Contraseña demo con el mismo estilo. */}
              <div className="rounded-lg border border-[#B3E5FC] bg-[#E8F7FD] px-4 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#546E7A]">
                  Contraseña
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-[#1565C0]">
                  {credencialesDemo.clave}
                </p>
              </div>

              {/* Botón para cerrar el modal: cambia modalVisible a false. */}
              <button
                className="w-full rounded-lg bg-[#29ABE2] py-2 text-sm font-semibold text-white transition hover:bg-[#0288D1]"
                onClick={() => setModalVisible(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
