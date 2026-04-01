# PPT3-2026

Repositorio principal del trabajo practico.

## Estructura

```text
PPT3-2026/
├── Modulos/
│   └── Login/
│       ├── src/
│       ├── public/
│       ├── package.json
│       ├── package-lock.json
│       ├── vite.config.js
│       ├── eslint.config.js
│       └── README.md
├── .gitignore
└── README.md
```

## Modulo actual

El proyecto frontend actual vive en:

`Modulos/Login`

Ese modulo contiene:

- la aplicacion React + Vite
- la pantalla de login
- la pantalla posterior de bienvenida
- utilidades, datos y componentes organizados por responsabilidad

## Como trabajar

1. Entrar al modulo:

   `cd Modulos/Login`

2. Instalar dependencias:

   `npm install`

3. Levantar el proyecto:

   `npm run dev`

4. Verificar calidad:

   `npm run lint`

5. Generar build:

   `npm run build`

## Nota de organizacion

Se dejo la raiz del repo limpia para que cada modulo pueda crecer de manera independiente.
El modulo `Login` ya esta preparado para seguir separando responsabilidades internas por componentes, datos y utilidades.
