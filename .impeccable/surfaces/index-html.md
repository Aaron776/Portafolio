---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["mas_proyectos.html"]
---

# Surface brief — Portafolio Aaron Ortiz (index.html + mas_proyectos.html)

## Scope & mode

- Surface: sitio estático de 2 páginas (`index.html`, `mas_proyectos.html`).
- Mode: Experience. El trabajo (los sistemas de gestión que Aaron construye) lidera desde el primer viewport; la interfaz recede, pero en este mundo la interfaz ES el instrumento.
- Audiencia: reclutadores y clientes PYME por igual.
- Job: evaluar stack/experiencia en segundos, ver sistemas reales, contactar.
- Acción: navegar proyectos → abrir repositorio GitHub → contactar por formulario/redes.
- Proof/content: 10 sistemas reales con capturas, stats (6+ proyectos, 3+ años), stack PHP/MySQL/PostgreSQL/Laravel/JS, CV descargable.
- Constraints: TODO el contenido actual permanece intacto (texto, datos, enlaces, CV, imágenes, formulas EmailJS). Cambian diseño, paleta y efectos. Cero claims nuevos.

## Dirección elegida (usuario): SALA DE CONTROL — TELEMETRÍA

Mundo: consola de control aeronáutico de noche. Fondo negro-español profundo, paneles de instrumentos en relieve, readouts de telemetría, barridos de radar, lámparas de estado. Cada tarjeta se comporta como un panel de instrumentos con bezel, inclinación 3D (tilt) al hover y brillo que acompaña al cursor. Las stats son lecturas de instrumentos con dígitos encendidos y conteo animado. La paleta reemplaza por completo el azul/violeta claro anterior.

Paleta: NIGHT ground #05070F / #0A0F1C; cyan-teal PRIMARY #37E0FF; warm amber DATA #FFB45E; signal red esporádico (lámparas de riesgo); ink text #E8F2FF; readout mono en #7CFCF0/gris azulado.
Tipos: display Space Grotesk (cropped geometric caps de ingeniería) + data JetBrains Mono (readouts = datos, no prosa). Body en Space Grotesk ligera.
3D: tilt con perspectiva en paneles, parallax por capas, barrido de radar hero, scanlines sutiles, lámparas de estado encendido/apagado. Todo con fallback Reduced Motion.

## Direction contract

THESIS: el portafolio es una consola de control funcionando: la prueba no se declara, se lee en los instrumentos en vivo. Niega la tarjeta hero-métrica genérica y el template claro; cada estadística y proyecto es un instrumento encendido.
OWN-WORLD: consola nocturna negra con paneles de instrumentos en relief (bezel, rejilla, tornillos de esquina), readouts mono, lámparas de estado y neón cyan/ámbar sobre tinta; sin gradientes de texto, sin sombras de costumbre.
STORY: el visitante entiende en segundos que Aaron construye sistemas de gestión completos y que están "en línea" (10 módulos, repo público), y actúa: abre un repo o contacta.
FIRST VIEWPORT: muro hero como "panel maestro" — IDENT a la izquierda con nombre + rol en mono, inmediatamente debajo tira de readouts INSTRUMENTOS ONLINE (6+ proyectos, 3+ años, 10 sistemas), radar circular barriendo a la derecha, acción primaria "Ver Proyectos" como botón de consola elevado; parallax por capas.
FORM: dirección mandada por el rollo (seed 7341032b, kind pick).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions

- Angular/TypeScript se mencionan en experiencia (BK Solutions): se conservan como texto; no requieren nuevo asset.
- Sin assets nuevos que generar (imágenes existentes de proyectos + foto de perfil se conservan como evidencia).
