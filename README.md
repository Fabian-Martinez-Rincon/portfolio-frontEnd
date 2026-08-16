# Fabo — Portfolio / Landing de servicios

Landing page personal de un desarrollador full-stack ("Fabo"). Presenta
proyectos reales construidos de punta a punta, el proceso de trabajo y
los servicios ofrecidos, con un formulario de contacto vía `mailto:`.
Sitio de una sola página (`app/page.tsx`), en español, con soporte de
modo claro/oscuro.

> **Este README está pensado para que una IA (o un dev nuevo) entienda
> el proyecto sin tener que leer todo el código primero.** Mantenelo
> actualizado si cambian el stack, la estructura o las convenciones.

## ⚠️ Antes de tocar código: leer esto

Este proyecto usa **Next.js 16.3.0**, una versión con cambios
importantes respecto a versiones anteriores — las APIs, convenciones y
estructura de archivos pueden diferir de lo que un modelo de lenguaje
"sabe" por entrenamiento. **No asumas nada por memoria.** Antes de
escribir código Next.js en este repo (o en cualquier repo que use esta
misma versión), leé la guía correspondiente en
`node_modules/next/dist/docs/` — en particular:

- `01-app/01-getting-started/` — routing, layouts, Server/Client
  Components, fetching de datos, metadata.
- `01-app/02-guides/ai-agents.md` — guía específica de Next.js pensada
  para agentes de IA.
- `01-app/03-api-reference/` — referencia de APIs y config.

Esto lo aplica automáticamente `next dev` (ver el bloque generado al
principio de `AGENTS.md`/`CLAUDE.md` — no lo borres, se regenera solo y
si lo sacás del diff sin comitearlo el árbol queda "sucio").

## Stack técnico

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | **Next.js 16.3.0** | App Router, Turbopack (`next dev`/`build` usan Turbopack por defecto) |
| UI | **React 19.2.8** | Server Components por defecto; `"use client"` explícito donde hace falta |
| Lenguaje | **TypeScript 5** (`strict: true`) | `moduleResolution: "bundler"`, alias `@/*` → raíz del repo |
| Estilos | **Tailwind CSS v4** | Config **CSS-first** (`@import "tailwindcss"` en `app/globals.css`), **no hay `tailwind.config.js`** |
| Lint | **ESLint 9** (flat config) | `eslint-config-next` (core-web-vitals + typescript) |
| Fuente | `next/font/google` (Inter) | variable CSS `--font-inter` |
| Imagen OG | `next/og` (`ImageResponse`) | generada en `app/opengraph-image.tsx` |

No hay backend, base de datos ni testing configurado: es un sitio
estático de contenido (los "datos" de proyectos viven hardcodeados en
`lib/projects.ts`).

## Cómo correrlo

```bash
npm install
npm run dev     # http://localhost:4105  (puerto fijo, ver package.json)
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # eslint
```

El puerto **4105** está fijado en `package.json` (`next dev -p 4105`),
no es el 3000 por defecto de Next.js.

## Estructura del proyecto

```
app/
  layout.tsx              Root layout: <html>/<body>, metadata SEO/OG,
                           header sticky + nav, footer, script inline
                           que aplica el tema (dark/light) antes del
                           primer paint (evita flash de tema incorrecto)
  page.tsx                Toda la landing: hero, proyectos, "cómo
                           trabajo", servicios, contacto. Una sola
                           página larga con <section id="..."> ancladas
                           desde la nav (#proyectos, #como-trabajo,
                           #servicios, #contacto)
  globals.css              Design tokens (custom properties) para
                           light/dark, integración con Tailwind v4
                           (@theme inline), animación de "reveal"
  opengraph-image.tsx      Genera la imagen OG/Twitter dinámicamente
  icon.svg                 Favicon
  _components/
    theme-toggle.tsx        Botón de modo claro/oscuro (client)
    mobile-nav.tsx           Menú hamburguesa mobile, renderizado con
                              createPortal (ver por qué en el comment
                              del archivo: el header usa backdrop-blur
                              y eso rompe position:fixed de sus hijos)
    reveal.tsx               Wrapper que anima "fade up" al entrar en
                              viewport (IntersectionObserver)
    inline-script.tsx        Helper para inyectar el script de tema en
                              el <head> sin que Next lo trate como
                              módulo hidratable

lib/
  projects.ts              Única fuente de verdad de los proyectos que
                            se muestran en la sección "Proyectos".
                            Agregar un proyecto nuevo = agregar un
                            objeto Project a este array, nada más.
```

Carpetas con prefijo `_` (como `_components`) son "carpetas privadas"
de Next.js App Router: no generan rutas, solo organizan código.

## Convenciones de este código

- **Tema claro/oscuro sin flash**: se guarda en `localStorage` bajo la
  key `theme` y se aplica como atributo `data-theme` en `<html>` desde
  un script inline que corre antes de hidratar (`InlineScript` en
  `layout.tsx`). Los componentes leen el tema actual con
  `useSyncExternalStore` escuchando el evento custom `theme-change`
  (ver `theme-toggle.tsx`), no con `useState` + `useEffect`.
- **Design tokens como CSS custom properties**, no como config de
  Tailwind: todo color/spacing "de marca" vive en `:root` y
  `:root[data-theme="dark"]` en `globals.css` (`--brand`, `--bg`,
  `--ink`, `--line`, `--radius`, `--shadow`, etc.) y se consume en JSX
  con la sintaxis de valor arbitrario de Tailwind v4:
  `bg-(--brand)`, `text-(--ink-dim)`, `rounded-(--radius-lg)`.
- **Accesibilidad**: skip link al contenido, `:focus-visible` con
  outline propio, `prefers-reduced-motion` respetado (desactiva
  animaciones), `aria-expanded`/`aria-label` en el menú mobile.
- **Sin `tailwind.config.js`**: Tailwind v4 se configura desde CSS
  (`@theme inline` en `globals.css`). Si hace falta extender el theme,
  se hace ahí, no creando un config file.
- Todo el copy visible está en **español** (`lang="es"` en `<html>`,
  `locale: "es_AR"` en OG metadata).

## Contenido / cómo editar

- **Agregar o editar un proyecto del portfolio** → `lib/projects.ts`
  (array `projects`, tipo `Project`). El grid en `page.tsx` se genera
  solo iterando ese array, no hay que tocar JSX para agregar uno.
- **Email de contacto**: hardcodeado como `CONTACT_EMAIL` en
  `app/page.tsx` y en el footer de `app/layout.tsx`
  (`fabianmartinezrincon.123@gmail.com`). Si cambia, actualizar en
  ambos lugares.
- **Dominio de producción**: `app/layout.tsx` tiene un
  `NEXT_PUBLIC_SITE_URL` con un `// TODO` — hoy cae a
  `http://localhost:4105` si la env var no está seteada. Configurar esa
  env var en el hosting antes de dar el sitio por "deployado en serio"
  (afecta `metadataBase`, OG tags, etc.).

## Repo

Código en GitHub: `Fabian-Martinez-Rincon/portfolio-frontEnd`.
