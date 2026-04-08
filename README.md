<div align="center">
  <img src="https://ibeltran.com.ar/img/logo/footer.png" alt="Instituto Tecnológico Beltrán" width="220" />

  <h1>PPT3 — 2026</h1>
  <p>Trabajo Práctico · Instituto Tecnológico Beltrán</p>

  ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
  ![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-29ABE2?style=flat)
</div>

---

## Estructura del repositorio

```text
PPT3-2026/
├── Modulos/
│   └── Login/
│       ├── src/
│       │   ├── componentes/   # Componentes reutilizables
│       │   ├── paginas/       # Vistas principales
│       │   ├── layouts/       # Estructuras de página
│       │   ├── datos/         # Datos estáticos y credenciales demo
│       │   └── utilidades/    # Funciones de validación y helpers
│       ├── public/
│       ├── vite.config.js
│       └── package.json
├── .gitignore
└── README.md
```

---

## Módulo actual — Login

El módulo principal vive en `Modulos/Login` e incluye:

| Sección | Descripción |
|---|---|
| Pantalla de Login | Autenticación con validación de formulario |
| Panel de Bienvenida | Saludo, hora en tiempo real y clima |
| Componentes | Campos de formulario, tarjetas y barra superior |
| Utilidades | Validaciones, formateo de fechas y datos de clima |

---

## Cómo levantar el proyecto

```bash
# 1. Entrar al módulo
cd Modulos/Login

# 2. Instalar dependencias
npm install

# 3. Levantar en desarrollo
npm run dev
```

### Otros comandos

```bash
npm run lint      # Verificar calidad de código
npm run build     # Generar build de producción
npm run preview   # Previsualizar el build
```

---

## Stack tecnológico

- **React 19** — UI declarativa por componentes
- **Vite 8** — Build tool ultrarrápido
- **Tailwind CSS 4** — Utilidades de estilo
- **Lucide React** — Iconos modernos
- **Day.js** — Manejo de fechas y horas

---

## Notas

- La raíz del repo se mantiene limpia para que cada módulo crezca de forma independiente.
- Las credenciales de prueba están disponibles desde el link **"Olvidé mi contraseña"** en la pantalla de login.
