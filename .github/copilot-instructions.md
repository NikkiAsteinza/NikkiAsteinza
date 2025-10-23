## Instrucciones rápidas para agentes de código

Este repositorio es un sitio estático pequeño compuesto principalmente por:

- `index.html` — entrada principal y marcado de la escena espacial.
- `styles.css` — variables CSS (tema), layout y estilos reutilizables (por ejemplo `.card`, `.main-nav`).
- `scripts.js` — lógica de inicialización y animaciones (usa jQuery y anime.js desde CDN).

Objetivo para el agente: hacer cambios front-end (nueva sección, animación, colores) sin añadir infraestructura nueva.

Pautas específicas y ejemplos detectables en el código:

- Estructura y capas: la escena de fondo está en `.background` con `position: fixed` y las capas de contenido usan `z-index: 1`. Evita mover `.background` a elementos con `position: relative` para no romper la superposición.
- Para agregar una nueva tarjeta/ sección reutiliza la clase `card` en `index.html` (ejemplo: `<section id="nuevo" class="card">...</section>`).
- Animaciones: `scripts.js` genera estrellas dinámicamente y usa `anime()` apuntando a selectores CSS (ej. `.planet-one`, `#ufo`). Para añadir animación, añade la marca correspondiente en `index.html`, crea las reglas CSS necesarias en `styles.css` y registra la animación en `scripts.js` usando la misma convención de selectores.
- Parámetros comunes a modificar:
  - Para ajustar la cantidad de estrellas: modifica la variable `starTotal` en `scripts.js`.
  - Los colores y tema están en `:root` dentro de `styles.css` (variables como `--space-blue`, `--planet-orange`).

Flujo de trabajo local (rápido y observable):

1. Previsualizar: abrir `index.html` en un navegador o servir el directorio para evitar problemas con recursos relativos.

   Ejemplo (desde la raíz del repo):

```bash
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

2. Debug: usar las DevTools del navegador. Las animaciones están en `scripts.js` — búsquedas útiles: `starTotal`, `anime({ targets:` y selectores `.planet-one`, `.ufo`.

Convenciones de código observables:

- JavaScript: usa jQuery para DOM-ready (`$(function(){ ... })`) y anime.js para animaciones. Evita introducir frameworks de bundling a menos que sea necesario.
- CSS: usa variables en `:root` para temas. Reutiliza `.card` y utilidades existentes para mantener consistencia visual.
- Internacionalización: la interfaz está en español (`<html lang="es">`) — mantener textos en español a menos que se indique lo contrario.

Integraciones y dependencias externas detectadas:

- jQuery y Anime.js se cargan por CDN desde `index.html`. No hay package.json ni pipeline de build presente en este repositorio.

Qué evitar / notas importantes:

- No crear infraestructura compleja (no hay build ni tests configurados detectables). Cualquier cambio mayor que requiera bundling o dependencias debe discutirse antes.
- Mantener el diseño responsivo: hay media queries en `styles.css` para anchos <768px.

Si algo no está claro o quieres priorizar tareas concretas (p. ej. agregar una nueva animación o una sección de portfolio), dime cuál y generaré cambios concretos y un PR de ejemplo.
