# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JavaScript (no build step). Anime.js, Font Awesome y Google Fonts (Inter) vía CDN. Formulario de contacto con EmailJS. Este portafolio se abre localmente como archivo o se sirve con cualquier servidor estático.

## Users

Reclutadores y clientes potenciales por igual. Reclutadores quieren evaluar skills y stack rápidamente y contactar; clientes quieren ver que Aaron puede construir sistemas de gestión completos y quieren un canal para proponerle proyectos.

## Product Purpose

Portafolio personal de Aaron Ortiz, desarrollador de software en Ecuador. Existe para demostrar experiencia real en backend/full stack (PHP, MySQL, PostgreSQL, Laravel, JavaScript), mostrar más de 6 proyectos de sistemas de gestión terminados, y convertir la visita en un contacto (formulario o redes).

## Positioning

Un desarrollador backend/full stack con sistemas reales y completos (carnicería, veterinaria, parqueaderos, taller mecánico, gimnasio, penitenciario) — no demos ni proyectos de curso — construidos con arquitectura MVC, seguridad (CSRF, consultas preparadas) y generación de reportes.

## Operating Context

El sitio se ve en escritorio (principalmente) y móvil. Es la carta de presentación de Aaron: debe cargar rápido, verse impecable y transmitir confianza técnica. Los reclutadores/clientes navegan, revisan los repositorios de GitHub públicos de cada proyecto, y contactan por formulario o redes.

## Capabilities and Constraints

- Dos páginas: `index.html` (inicio, sobre mí, experiencia, proyectos destacados, habilidades, contacto) y `mas_proyectos.html` (catálogo completo con buscador por nombre/tecnología/descripción).
- Formulario de contacto funcional con EmailJS (`service_00nnwa8`, `template_z39lyue`, publicKey en `js/email.js`) + honeypot antispam.
- Animaciones con anime.js (`js/app.js`).
- Restricción de contenido: TODO el contenido actual (texto, secciones, proyectos, skills, datos de contacto, enlaces de redes, CV en `docs/CURRICULUM-SOFTWARE.pdf`) debe permanecer intacto. Las imágenes de proyectos en `img/` se conservan.
- Debe seguir funcionando como sitio estático sin build.

## Brand Commitments

- Visión obligatoria del brief del usuario: diseño mucho más moderno, con efectos agradables y llamativos en 3D (tilt, parallax, profundidad en todo el sitio), cambiando el diseño y la paleta de colores completamente.
- Conservar nombre "Aaron Ortiz", datos de contacto reales y repositorios de GitHub existentes.
- Idioma del sitio: español.

## Evidence on Hand

- Capturas reales de sistemas en `img/` (sistema_gestion_carniceria.jpg, sistema_gestion_veterinaria.jpg, sistema_gestion_parqueadero.jpg, sistema_gestion_taller_mecanico.jpg, sistema_penitenciario.jpg, sistema_gimnasio.jpg, sistema_turnos.JPG, sistema_gestion_incidentes.JPG, sistema_asistencia.JPG, sistema_peluqueria.JPG).
- Foto de perfil `img/foto_perfil.jpg`.
- CV para descarga `docs/CURRICULUM-SOFTWARE.pdf`.
- Repositorios GitHub públicos de los proyectos (enlaces en index.html y mas_proyectos.html).

## Product Principles

- La prueba es real: mostrar sistemas terminados, no claims vacíos; cada tarjeta de proyecto debe invitar al repositorio.
- Confianza técnica desde el primer vistazo: el diseño debe reflejar que quien lo hizo sabe lo que hace (nivel de detalle, pulido, acabado).
- Conversión antes que decoro: contacto claro y accesible; el visitante debe encontrar cómo contactar en segundos.
- El contenido nunca se inventa: textos, datos y enlaces actuales son la verdad y no se alteran.

## Accessibility & Inclusion

Sin requisitos específicos de accesibilidad declarados; el sitio debe mantenerse responsive y legible en escritorio y móvil.