# Vítreo Capital — sitio web

Sitio institucional construido con [Astro](https://astro.build). Genera HTML
estático (0 JS por defecto), con imágenes optimizadas automáticamente e
integraciones listas para SEO.

## Por qué Astro (contexto de la refactorización)

El sitio anterior era un único archivo `.html` de ~700 KB, con dos fotografías
incrustadas como `base64` directamente en el CSS (una de ellas de ~450 KB en
texto base64, sin `width`/`height`, sin formatos modernos, sin lazy-loading,
bloqueando el render). Esta versión:

- Extrae esas imágenes a archivos reales y las sirve optimizadas (AVIF/WebP,
  varios tamaños según el viewport) vía `astro:assets`.
- Separa el HTML en componentes reutilizables en vez de un solo archivo.
- Tipa el contenido (`src/data/site.ts`) para que agregar una sección o
  página no implique copiar/pegar texto.
- Genera solo HTML/CSS por página (Astro no envía un framework de JS al
  cliente salvo que se le pida explícitamente), lo que mantiene el sitio
  rápido incluso al crecer.

## Estructura del proyecto

```
src/
├── assets/images/       Fotografías fuente (Astro las optimiza al build)
├── components/
│   ├── icons/            Íconos SVG reutilizables (data-driven)
│   ├── layout/            Header y Footer (compartidos por todas las páginas)
│   └── sections/          Un componente por sección de la home
├── data/
│   └── site.ts            Contenido tipado: nav, contacto, principios, pilares
├── layouts/
│   └── BaseLayout.astro   <head>, SEO/OG, Header/Footer, skip-link
├── pages/
│   ├── index.astro        Home (compone las secciones)
│   └── 404.astro
└── styles/
    ├── tokens.css          Variables de marca: color, tipografía, spacing
    ├── base.css            Reset + estilos de elementos base
    ├── utilities.css       Clases compartidas: .container, .btn, .eyebrow…
    └── global.css          Une todo lo anterior, se importa 1 sola vez
```

Cada componente de sección trae su propio `<style>` **con scope local**
(Astro lo aísla automáticamente), así que los estilos de una sección nunca
chocan con los de otra. Solo lo verdaderamente compartido (botones, grid,
tokens de color) vive en `src/styles/`.

## Cómo agregar una página nueva

1. Crear `src/pages/equipo.astro` (o la ruta que sea).
2. Envolver el contenido en `<BaseLayout title="...">…</BaseLayout>` — esto
   da automáticamente el mismo header, footer, meta tags y skip-link.
3. Si la página comparte texto con otra (contacto, nav), importarlo desde
   `src/data/site.ts` en vez de escribirlo de nuevo.
4. Si hace falta un nuevo dato tipado (p. ej. `teamMembers`), agregarlo a
   `site.ts` con su `type`/`interface`.

`@astrojs/sitemap` ya está instalado: cualquier página en `src/pages/` entra
automáticamente al sitemap generado en el build.

## Cómo agregar una sección nueva a la home

1. Crear `src/components/sections/NombreSeccion.astro`.
2. Seguir el patrón de las secciones existentes: `<section id="..." aria-labelledby="...">`,
   estilos con `<style>` scoped, datos importados de `site.ts` si aplica.
3. Importarla y usarla en `src/pages/index.astro`.

## Comandos

| Comando           | Acción                                              |
| :----------------- | :--------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo en `localhost:4321`            |
| `npm run build`     | Build de producción a `./dist/`                       |
| `npm run preview`   | Sirve el build de producción localmente                |
| `npm run astro check` | Chequeo de tipos de todos los archivos `.astro`      |

## Pendientes antes de producción

- **Dominio real**: actualizar `SITE_URL` en `astro.config.mjs` (afecta
  sitemap, canonical y Open Graph).
- **Formulario de contacto**: hoy solo valida en el cliente y muestra un
  mensaje; falta conectarlo a un endpoint real (API route de Astro, o un
  servicio como Formspree/Resend). Ver el comentario en
  `src/components/sections/Contacto.astro`.
- **Analítica** (si aplica): agregar el script correspondiente en
  `BaseLayout.astro`.
