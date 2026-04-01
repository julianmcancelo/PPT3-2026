import { useEffect, useState } from 'react'
import { BarraSuperior } from '../componentes/panel/BarraSuperior'
import { TarjetaAccesosRapidos } from '../componentes/panel/TarjetaAccesosRapidos'
import { TarjetaClima } from '../componentes/panel/TarjetaClima'
import { TarjetaFecha } from '../componentes/panel/TarjetaFecha'
import { TarjetaHora } from '../componentes/panel/TarjetaHora'
import { TarjetaSaludo } from '../componentes/panel/TarjetaSaludo'
import { accesosRapidos } from '../datos/accesos-rapidos'
import { ubicacionPorDefecto } from '../datos/ubicacion-por-defecto'
import { consultarClimaActual, obtenerDetalleClima } from '../utilidades/clima'

export function PantallaBienvenida({ usuario, onCerrarSesion }) {
  // Reloj y datos del clima para el panel principal.
  const [fechaActual, setFechaActual] = useState(() => new Date())
  const [temperatura, setTemperatura] = useState(null)
  const [codigoClima, setCodigoClima] = useState(null)
  const [ubicacion, setUbicacion] = useState(ubicacionPorDefecto.descripcion)
  const [estadoClima, setEstadoClima] = useState('Consultando clima...')

  useEffect(() => {
    // Actualiza la hora cada segundo.
    const intervalo = window.setInterval(() => {
      setFechaActual(new Date())
    }, 1000)

    return () => window.clearInterval(intervalo)
  }, [])

  useEffect(() => {
    // Carga clima usando ubicacion real o la ubicacion de respaldo.
    async function cargarClima(latitud, longitud, descripcion) {
      try {
        const climaActual = await consultarClimaActual(latitud, longitud)

        setTemperatura(climaActual.temperatura)
        setCodigoClima(climaActual.codigoClima)
        setUbicacion(descripcion)
        setEstadoClima(obtenerDetalleClima(climaActual.codigoClima).descripcion)
      } catch {
        setEstadoClima('No pudimos cargar el clima.')
      }
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (posicion) => {
          cargarClima(
            posicion.coords.latitude,
            posicion.coords.longitude,
            'Tu ubicacion actual',
          )
        },
        () => {
          cargarClima(
            ubicacionPorDefecto.latitud,
            ubicacionPorDefecto.longitud,
            ubicacionPorDefecto.descripcion,
          )
        },
      )
      return
    }

    cargarClima(
      ubicacionPorDefecto.latitud,
      ubicacionPorDefecto.longitud,
      ubicacionPorDefecto.descripcion,
    )
  }, [])

  const detalleClima = obtenerDetalleClima(codigoClima)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Barra superior con acceso al cierre de sesion. */}
      <BarraSuperior usuario={usuario} onCerrarSesion={onCerrarSesion} />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr] lg:gap-6">
          {/* Columna principal con saludo, fecha y hora. */}
          <section className="overflow-hidden rounded-2xl border border-[#B3E5FC] bg-white shadow-[0_16px_48px_rgba(41,171,226,0.10)]">
            <div className="h-1 bg-[#29ABE2]" />

            <div className="p-5 sm:p-6 lg:p-7">
              <TarjetaSaludo usuario={usuario} />

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <TarjetaFecha fechaActual={fechaActual} />
                <TarjetaHora fechaActual={fechaActual} />
              </div>
            </div>
          </section>

          {/* Columna lateral con clima y accesos rapidos. */}
          <aside className="space-y-5">
            <TarjetaClima
              detalleClima={detalleClima}
              estadoClima={estadoClima}
              temperatura={temperatura}
              ubicacion={ubicacion}
            />
            <TarjetaAccesosRapidos accesosRapidos={accesosRapidos} />
          </aside>
        </div>
      </main>
    </div>
  )
}
