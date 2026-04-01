import { useEffect, useState } from 'react'
import { ModalPermisos } from '../componentes/ModalPermisos'
import { BarraSuperior } from '../componentes/panel/BarraSuperior'
import { TarjetaAccesosRapidos } from '../componentes/panel/TarjetaAccesosRapidos'
import { TarjetaFecha } from '../componentes/panel/TarjetaFecha'
import { TarjetaHora } from '../componentes/panel/TarjetaHora'
import { TarjetaSaludo } from '../componentes/panel/TarjetaSaludo'
import { accesosRapidos } from '../datos/accesos-rapidos'
import { ubicacionPorDefecto } from '../datos/ubicacion-por-defecto'
import { consultarClimaActual } from '../utilidades/clima'

export function PantallaBienvenida({ usuario, onCerrarSesion }) {
  // El panel necesita reloj y temperatura para la barra superior.
  const [fechaActual, setFechaActual] = useState(() => new Date())
  const [temperatura, setTemperatura] = useState(null)
  const [modalPermisosAbierto, setModalPermisosAbierto] = useState(false)
  const [permisos, setPermisos] = useState({
    ubicacion: 'prompt',
    notificaciones: 'prompt',
  })

  useEffect(() => {
    // Actualiza la hora cada segundo.
    const intervalo = window.setInterval(() => {
      setFechaActual(new Date())
    }, 1000)

    return () => window.clearInterval(intervalo)
  }, [])

  useEffect(() => {
    // Revisa el estado inicial de permisos apenas se monta la pantalla.
    async function revisarPermisos() {
      let permisoUbicacion = 'prompt'
      let permisoNotificaciones = 'prompt'

      if (!('geolocation' in navigator)) {
        permisoUbicacion = 'unsupported'
      } else if ('permissions' in navigator) {
        try {
          const resultadoUbicacion = await navigator.permissions.query({
            name: 'geolocation',
          })

          permisoUbicacion = resultadoUbicacion.state
        } catch {
          permisoUbicacion = 'prompt'
        }
      }

      if (!('Notification' in window)) {
        permisoNotificaciones = 'unsupported'
      } else {
        permisoNotificaciones = Notification.permission
      }

      setPermisos({
        ubicacion: permisoUbicacion,
        notificaciones: permisoNotificaciones,
      })

      if (
        permisoUbicacion !== 'granted' ||
        (permisoNotificaciones !== 'granted' &&
          permisoNotificaciones !== 'unsupported')
      ) {
        setModalPermisosAbierto(true)
      }
    }

    revisarPermisos()
  }, [])

  useEffect(() => {
    // Carga clima usando ubicacion real si el permiso existe; si no, usa respaldo.
    async function cargarClima(latitud, longitud) {
      try {
        const climaActual = await consultarClimaActual(latitud, longitud)

        setTemperatura(climaActual.temperatura)
      } catch {
        setTemperatura(null)
      }
    }

    function cargarClimaRespaldo() {
      cargarClima(
        ubicacionPorDefecto.latitud,
        ubicacionPorDefecto.longitud,
      )
    }

    if (permisos.ubicacion === 'granted' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (posicion) => {
          cargarClima(
            posicion.coords.latitude,
            posicion.coords.longitude,
          )
        },
        () => {
          cargarClimaRespaldo()
        },
      )
      return
    }

    cargarClimaRespaldo()
  }, [permisos.ubicacion])

  function actualizarPermiso(nombrePermiso, valor) {
    setPermisos((estadoAnterior) => ({
      ...estadoAnterior,
      [nombrePermiso]: valor,
    }))
  }

  function solicitarUbicacion() {
    if (!('geolocation' in navigator)) {
      actualizarPermiso('ubicacion', 'unsupported')
      return
    }

    // Pedimos la ubicacion de forma explicita desde el modal.
    navigator.geolocation.getCurrentPosition(
      () => {
        actualizarPermiso('ubicacion', 'granted')
      },
      () => {
        actualizarPermiso('ubicacion', 'denied')
      },
    )
  }

  async function solicitarNotificaciones() {
    if (!('Notification' in window)) {
      actualizarPermiso('notificaciones', 'unsupported')
      return
    }

    // El navegador devuelve granted, denied o default segun la respuesta del usuario.
    const resultado = await Notification.requestPermission()
    actualizarPermiso(
      'notificaciones',
      resultado === 'default' ? 'prompt' : resultado,
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Barra superior con acceso al cierre de sesion. */}
      <BarraSuperior
        usuario={usuario}
        temperatura={temperatura}
        onCerrarSesion={onCerrarSesion}
      />

      <main className="mx-auto flex max-w-6xl justify-center px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
        {/* Contenedor unico para que el panel se vea mas compacto y centrado. */}
        <section className="w-full max-w-4xl overflow-hidden rounded-[1.15rem] border border-[#B3E5FC] bg-white shadow-[0_18px_44px_rgba(41,171,226,0.10)] sm:rounded-2xl">
          <div className="h-1 bg-[#29ABE2]" />

          <div className="space-y-3 p-3.5 sm:p-4">
            <TarjetaSaludo usuario={usuario} />

            {/* Los modulos informativos quedan en una grilla mas contenida. */}
            <div className="grid gap-3 md:grid-cols-2">
              <TarjetaFecha fechaActual={fechaActual} />
              <TarjetaHora fechaActual={fechaActual} />
            </div>

            <TarjetaAccesosRapidos accesosRapidos={accesosRapidos} />
          </div>
        </section>
      </main>

      <ModalPermisos
        abierto={modalPermisosAbierto}
        permisos={permisos}
        onSolicitarUbicacion={solicitarUbicacion}
        onSolicitarNotificaciones={solicitarNotificaciones}
        onContinuar={() => setModalPermisosAbierto(false)}
      />
    </div>
  )
}
