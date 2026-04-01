// StrictMode ayuda a detectar practicas no recomendadas durante el desarrollo.
import { StrictMode } from 'react'
// createRoot es la API moderna para montar una aplicacion React.
import { createRoot } from 'react-dom/client'
// Cargamos estilos globales una sola vez desde el punto de entrada.
import './index.css'
// App contiene la estructura principal de la interfaz.
import App from './App.jsx'

// Buscamos el contenedor raiz declarado en index.html y montamos toda la aplicacion.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
