// ============================================================
//  GRUPO DE TRABAJO — 3° 2da
//  Instituto Tecnológico Beltrán | UOM Avellaneda
// ============================================================

// useEffect lo uso para el reloj y para cargar el clima cuando se monta el componente.
// useState para guardar los valores que van cambiando: fecha, temperatura, etc.
import { useEffect, useState } from 'react'

// Importo cada tarjeta como un componente separado.
// Así esta página queda corta y fácil de leer: solo coordina datos,
// no se ocupa de cómo se ve cada sección.
import { BarraSuperior }        from '../componentes/panel/BarraSuperior'
import { TarjetaSaludo }        from '../componentes/panel/TarjetaSaludo'
import { TarjetaFecha }         from '../componentes/panel/TarjetaFecha'
import { TarjetaHora }          from '../componentes/panel/TarjetaHora'
import { TarjetaClima }         from '../componentes/panel/TarjetaClima'
import { TarjetaAccesosRapidos} from '../componentes/panel/TarjetaAccesosRapidos'

// Datos estáticos que no necesito calcular acá.
import { accesosRapidos }       from '../datos/accesos-rapidos'
import { ubicacionPorDefecto }  from '../datos/ubicacion-por-defecto'

// Funciones de utilidad para el clima.
import { consultarClimaActual, obtenerDetalleClima } from '../utilidades/clima'

export function PantallaBienvenida({ usuario, onCerrarSesion }) {

  // Guardo la fecha completa como un objeto Date.
  // La inicializo con new Date() para que no empiece vacía.
  const [fechaActual, setFechaActual] = useState(() => new Date())

  // Estos cuatro estados alimentan la TarjetaClima.
  const [temperatura, setTemperatura]   = useState(null)
  const [codigoClima, setCodigoClima]   = useState(null)
  const [ubicacion,   setUbicacion]     = useState(ubicacionPorDefecto.descripcion)
  const [estadoClima, setEstadoClima]   = useState('Consultando clima...')

  // Este efecto arranca un intervalo que actualiza la fecha cada 1 segundo.
  // Así el reloj en pantalla queda vivo sin necesidad de recargar la página.
  // El return limpia el intervalo cuando el componente se desmonta,
  // para no dejar timers corriendo en memoria.
  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setFechaActual(new Date())
    }, 1000)
    return () => window.clearInterval(intervalo)
  }, [])

  // Este efecto carga el clima una sola vez cuando el componente aparece en pantalla.
  // Primero intento obtener la ubicación real del usuario con la API del navegador.
  // Si el usuario la rechaza o falla, uso la ubicación por defecto del archivo de datos.
  useEffect(() => {
    async function cargarClima(latitud, longitud, descripcion) {
      try {
        const climaActual = await consultarClimaActual(latitud, longitud)
        setTemperatura(climaActual.temperatura)
        setCodigoClima(climaActual.codigoClima)
        setUbicacion(descripcion)
        setEstadoClima(obtenerDetalleClima(climaActual.codigoClima).descripcion)
      } catch {
        // Si la API de clima falla, muestro un mensaje simple en lugar de romper la página.
        setEstadoClima('No pudimos cargar el clima.')
      }
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (posicion) => {
          cargarClima(posicion.coords.latitude, posicion.coords.longitude, 'Tu ubicación actual')
        },
        () => {
          // Si el usuario niega el permiso de ubicación, uso el valor por defecto.
          cargarClima(ubicacionPorDefecto.latitud, ubicacionPorDefecto.longitud, ubicacionPorDefecto.descripcion)
        },
      )
      return
    }

    // Fallback: si el navegador no soporta geolocation directamente uso el default.
    cargarClima(ubicacionPorDefecto.latitud, ubicacionPorDefecto.longitud, ubicacionPorDefecto.descripcion)
  }, [])

  // Obtengo el detalle del clima (ícono + descripción) a partir del código numérico.
  const detalleClima = obtenerDetalleClima(codigoClima)

  return (
    // Fondo institucional: el mismo #F8FAFC que uso en el login para que todo sea coherente.
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Barra de navegación superior con el logo y el botón de cerrar sesión. */}
      <BarraSuperior usuario={usuario} onCerrarSesion={onCerrarSesion} />

      {/* Contenedor principal del panel. max-w-6xl para que no se estire en pantallas muy anchas. */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* Grilla de dos columnas en pantallas grandes.
            La columna izquierda es más ancha porque tiene el saludo y las tarjetas de fecha/hora.
            La columna derecha tiene el clima y los accesos rápidos. */}
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr] lg:gap-6">

          {/* ── COLUMNA IZQUIERDA ──────────────────────────────────────────── */}
          <section className="overflow-hidden rounded-2xl border border-[#B3E5FC] bg-white shadow-[0_16px_48px_rgba(41,171,226,0.10)]">

            {/* Franja azul institucional en el borde superior de la tarjeta,
                igual al detalle que uso en el header del login. */}
            <div className="h-1 bg-[#29ABE2]" />

            <div className="p-5 sm:p-6 lg:p-7">

              {/* Tarjeta de saludo: muestra el nombre del usuario y el botón de logout. */}
              <TarjetaSaludo usuario={usuario} onCerrarSesion={onCerrarSesion} />

              {/* Las tarjetas de fecha y hora van en dos columnas debajo del saludo. */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <TarjetaFecha fechaActual={fechaActual} />
                <TarjetaHora fechaActual={fechaActual} />
              </div>

            </div>
          </section>

          {/* ── COLUMNA DERECHA ────────────────────────────────────────────── */}
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
