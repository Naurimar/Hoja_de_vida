# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# CV React – Renderizado Condicional y Renderizado de Listas

Este proyecto corresponde a la actividad GA1-220501096-03-AA1-EV06, donde se construye un CV digital dinámico utilizando React y Vite.  
El ejercicio se centra en el uso de:

- Renderizado condicional  
- Renderizado de listas con `.map()`  
- Componentes dinámicos  
- Estilización con colores según condiciones  
- Control de versiones con Git y commits organizados  

# CV React – Reutilización de Componentes con Props y Desestructuración

Este proyecto corresponde a la actividad GA1-220501096-03-AA1-EV07, donde se amplía un CV digital implementando:

- Componentes reutilizables
- Uso de props
- Desestructuración
- Mapeo de listas desde App.jsx
- Separación de datos en archivo independiente

## Componentes creados

- **CabeceraCV.jsx** → recibe nombre, cargo, ciudad y contacto  
- **Perfil.jsx** → recibe el resumen profesional  
- **Experiencia.jsx** → recibe un arreglo de experiencias  
- **Educacion.jsx** → recibe lista de estudios  

Todos los componentes utilizan props y desestructuración.

## Datos centralizados

Toda la información está ubicada en `data.js` y se pasa a los componentes desde `App.jsx`.

## Ejecución del proyecto

1. Instalar dependencias  
