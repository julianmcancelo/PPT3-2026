# Modulo Login

Aplicacion frontend creada con React + Vite + Tailwind.

## Objetivo

Este modulo concentra:

- el login institucional
- la validacion basica de acceso
- la pantalla de bienvenida posterior al login
- el panel con fecha, hora, clima y accesos rapidos

## Estructura principal

```text
Modulos/Login/
├── public/
├── src/
│   ├── componentes/
│   │   ├── panel/
│   │   ├── CampoFormulario.jsx
│   │   └── FormularioInicioSesion.jsx
│   ├── datos/
│   ├── layouts/
│   ├── paginas/
│   └── utilidades/
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## Scripts

- `npm install`: instala dependencias
- `npm run dev`: levanta el entorno de desarrollo
- `npm run build`: genera la build de produccion
- `npm run lint`: valida el codigo con ESLint

## Flujo actual

1. El usuario inicia sesion desde la pantalla de acceso.
2. Si las credenciales son correctas, se muestra la pantalla de bienvenida.
3. La pantalla posterior consulta clima actual y actualiza la hora en tiempo real.

## Criterios de arquitectura

- componentes chicos y separados por responsabilidad
- datos fijos centralizados en `src/datos`
- funciones reutilizables en `src/utilidades`
- paginas como orquestadoras de estado y composicion

## Ruta de trabajo

Todos los comandos de este modulo deben ejecutarse desde:

`Modulos/Login`
