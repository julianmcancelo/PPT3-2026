import { useState } from 'react'
import { credencialesDemo } from '../datos/credenciales-demo'
import { validarFormularioLogin } from '../utilidades/validar-formulario-login'
import { CampoFormulario } from './CampoFormulario'

// Estado base del formulario.
const formularioInicial = { correo: '', clave: '' }
const logoInstitucional = `${import.meta.env.BASE_URL}footer.png`

export function FormularioInicioSesion({ onInicioSesionExitoso }) {
  // Estados del formulario y del modal de ayuda.
  const [formulario, setFormulario] = useState(formularioInicial)
  const [errores, setErrores] = useState({})
  const [mensajeEstado, setMensajeEstado] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function manejarCambio(evento) {
    const { name, value } = evento.target

    // Actualiza el campo editado y limpia su error.
    setFormulario((estadoAnterior) => ({ ...estadoAnterior, [name]: value }))
    setErrores((estadoAnterior) => ({ ...estadoAnterior, [name]: '' }))
  }

  function manejarEnvio(evento) {
    evento.preventDefault()

    // Ejecuta validaciones antes de revisar credenciales.
    const nuevosErrores = validarFormularioLogin(formulario)
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      setMensajeEstado('Revisa los campos marcados antes de continuar.')
      return
    }

    // En esta version se compara contra credenciales de prueba.
    const coincideConDemo =
      formulario.correo === credencialesDemo.correo &&
      formulario.clave === credencialesDemo.clave

    if (!coincideConDemo) {
      setErrores({
        correo: 'El correo no coincide con la cuenta de prueba.',
        clave: 'La contrasena ingresada no es correcta.',
      })
      setMensajeEstado('No pudimos validar tus datos.')
      return
    }

    setErrores({})
    setMensajeEstado('Inicio de sesion correcto.')

    // Usa la parte anterior al @ para personalizar la bienvenida.
    const nombreUsuario = formulario.correo.split('@')[0]
    const nombreFormateado =
      nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1)

    onInicioSesionExitoso({
      nombre: nombreFormateado,
      correo: formulario.correo,
    })
  }

  return (
    <>
      {/* Tarjeta principal del acceso. */}
      <section className="overflow-hidden rounded-[1.2rem] border border-[#B3E5FC] bg-white shadow-[0_16px_48px_rgba(41,171,226,0.14)]">
        <div className="bg-[#2A3448]">
          <div className="h-1 bg-[#29ABE2]" />

          <div className="flex justify-center px-5 py-5">
            <img
              src={logoInstitucional}
              alt="Instituto Tecnologico Beltran"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>

        <div className="border-b border-[#B3E5FC] bg-[#E8F7FD] px-5 py-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#1565C0]">
            Sistema de Acceso Institucional
          </p>
        </div>

        <div className="p-5">
          <div className="mb-3 space-y-1">
            <h1 className="text-[1.4rem] font-semibold text-[#2A3448]">
              Iniciar sesion
            </h1>
            <p className="text-xs leading-4 text-[#546E7A]">
              Ingresa tus credenciales para acceder a la plataforma institucional.
            </p>
          </div>

          <form className="space-y-3" onSubmit={manejarEnvio}>
            <CampoFormulario
              etiqueta="Correo electronico"
              tipo="email"
              nombre="correo"
              valor={formulario.correo}
              placeholder="ejemplo@correo.com"
              mensajeError={errores.correo}
              onChange={manejarCambio}
            />

            <CampoFormulario
              etiqueta="Contrasena"
              tipo="password"
              nombre="clave"
              valor={formulario.clave}
              placeholder="Ingresa tu contrasena"
              mensajeError={errores.clave}
              onChange={manejarCambio}
            />

            <button
              className="w-full rounded-lg bg-[#29ABE2] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0288D1] active:bg-[#0277BD]"
              type="submit"
            >
              Ingresar al sistema
            </button>

            {/* Abre un modal simple con las credenciales de prueba. */}
            <p className="text-center text-xs text-[#546E7A]">
              Primera vez?{' '}
              <button
                type="button"
                className="font-medium text-[#29ABE2] underline-offset-2 hover:underline"
                onClick={() => setModalVisible(true)}
              >
                Ver credenciales de prueba
              </button>
            </p>

            {/* Muestra el estado general del intento de acceso. */}
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

      {/* Modal liviano para consultar las credenciales demo. */}
      {modalVisible ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={() => setModalVisible(false)}
        >
          <div
            className="w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(evento) => evento.stopPropagation()}
          >
            <div className="bg-[#2A3448] px-5 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#29ABE2]">
                Cuenta de prueba
              </p>
            </div>

            <div className="space-y-3 px-5 py-4">
              <p className="text-xs text-[#546E7A]">
                Usa estas credenciales para probar el sistema sin una cuenta real.
              </p>

              <div className="rounded-lg border border-[#B3E5FC] bg-[#E8F7FD] px-4 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#546E7A]">
                  Correo
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-[#1565C0]">
                  {credencialesDemo.correo}
                </p>
              </div>

              <div className="rounded-lg border border-[#B3E5FC] bg-[#E8F7FD] px-4 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#546E7A]">
                  Contrasena
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-[#1565C0]">
                  {credencialesDemo.clave}
                </p>
              </div>

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
