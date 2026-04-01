export function obtenerTextoFecha(fecha) {
  return new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(fecha)
}

export function obtenerTextoHora(fecha) {
  return new Intl.DateTimeFormat('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(fecha)
}

export function obtenerTextoMes(fecha) {
  return new Intl.DateTimeFormat('es-AR', {
    month: 'long',
  }).format(fecha)
}
