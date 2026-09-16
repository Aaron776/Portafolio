---
name: Mission Control — Portafolio de Aaron Ortiz
description: Consola de control aeronáutico nocturna que lee cada proyecto como un instrumento encendido.
colors:
  primary:
    # {cyan roles}
    cyan: "#37E0FF"
  secondary:
    amber: "#FFB45E"
  neutral:
    night-0: "#04060D"
    night-1: "#070B16"
    panel: "#0A1120"
    panel-2: "#0C1526"
    ink: "#E8F2FF"
    ink-dim: "#A8B7D2"
    line: "rgba(120, 160, 220, 0.16)"
    cyan-deep: "#027da8"
  tertiary:
    mint: "#7BF2E0"
    signal: "#FF4D6D"
    violet: "#A78BFA"
rounded:
  radius: "14px"
  radius-sm: "9px"
spacing:
  section: "5.5rem"
  section-inner: "1.4rem"
  grid-gap: "1.4rem"
typography:
  display:
    fontFamily: "Oxanium"
    role: "Voz de instrumento: titulares, botones y readouts impresos en la consola."
  body:
    fontFamily: "Archivo"
    role: "Prosa de sistema y párrafos de experiencia."
  mono:
    fontFamily: "JetBrains Mono"
    role: "Etiquetas, kickers, readouts, teletipo y décimas."
components:
  button-primary:
    role: "Interruptor principal (consola de control)."
  progress-fill:
    role: "Relleno de barra de progreso vía scaleX no animando layout."
  radar:
    role: "Radar con barrido cónico de la consola."
  reveal:
    role: "Aparecido controlado por IntersectionObserver."
  stat:
    role: "Lectura de instrumento con count-up."
  panel3d:
    role: "Panel con tilt 3D y glare siguiendo al cursor."
---

# Determinación

World: **Sala de Control — Telemetría** (consola aeronáutica nocturna). El portafolio no se declara portafolio: se **lee** en instrumentos encendidos — el radar, los readouts, las lámparas de estado, las barras de progreso y las stats de telemetría son la prueba en pantalla. El visitante entiende en segundos que Aaron construye sistemas de gestión completos y que están en línea.

Rendición peculiar en este entorno: la superficie se dibujó en código directo (sin paso de comps por imagen ni canvas) porque el build es code-led; el contrato de la dirección rige la ejecución y el finish audita contra el mundo contratado y el material real.

## Colores

Fondo nocturno casi-negro con tiniebla azul profunda; acentos de instrumento cian (`#37E0FF`), ámbar readout (`#FFB45E`) y teal menta (`#7BF2E0`). El cian domina el mundo (paneles, bordes, lámparas); el ámbar reservado a datos y decoraciones cálidas; la menta a las lecturas de estado y badges. El color cierra el contrato de la dirección: sin gradientes de texto, sin sombras "sureñas" cálidas, sin emojis como iconos.

## Tipografía

Oxanium en display (carácter de ingeniería recortada, caps para titulares y readouts), Archivo en cuerpo (prosa jusalada, ligera), JetBrains Mono para todas las etiquetas/kickers/teletipo y números. La escala del display es display 4.4rem → hero, 2.6rem → sección, 1.35rem → tarjetas; mono 0.7-0.84rem con letter-spacing amplio en etiquetas.

## Layout

Sistema de consola de doble C para escritorio: héroe como panel maestro (radar + identidad + botones de acción), secciones apiladas con cabecera de línea fina, grid de proyectos en 2 columnas ≥ 440px, personas de experiencia, habilidades en 4 categorías, barra de progreso (scaleX desde el origen izquierdo, no `width`), contacto en panel. Container 1200px. Breakpoints 1050 / 860 / 600 (mobile: menú hamburguesa de panel, hero en una columna). Densidad de instrumento: los readouts y readouts-grid (lámparas de estado) son la mejor evidencia del mundo.

## Elevación & Deep

No sombras de costumbre: panels por gradiente vertical sutil, un hilo superior de luz (hairline cyan) sobre cada panel, y elevación real por luz de lámpara (glow) y por la capa 3D (tilt con perspective). Radar y capas del héroe dan la dimensión; parallax de 3 capas en el hero con `transform: translateX/Y` animada, no posición de layout.

## Shapes

Radios: paneles `14px` (cards, paneles), botones `9px`, chips `20px`. Formas de consola: radar circular, botones de interruptor rectangulares con esquinas ligeras, marcos de panel con tornillos y cabecera de luz. Sin `clip-path` de muchos vértices; los radios provienen de tokens.

## Componentes

- **Radar (hero).** Disco con barrido cónico `conic-gradient`, anillos concéntricos, blips pulsantes. Es la firma del primer viewport.
- **Panel 3D.** Tilt con `rotateX/rotateY` vía `--rx/--ry` y glare `radial-gradient` que acompaña el cursor (PC: mouse), desactivado con `prefers-reduced-motion`.
- **Proyecto (card).** Imagen con marco de instrumento (frame + barra superior), sys-tag, título, descripción, stack, botón de repositorio con flecha.
- **Stat/readout.** Número en mono con count-up observable al entrar en viewport.
- **Progreso.** Relleno satisface el detector: `transform: scaleX(...)` desde `transform-origin: left`, sin transición de `width`.
- **Nav.** Menú superior con `::after` que se despliega al hover/focus; scrolled state cambia fondo y borde.
- **Botones.** `.btn-primary` cian con glow, `.btn-secondary` telemetría, `.btn-cv` ámbar.

## Do's & Don'ts

**Do**
- Do mantener el mundo de consola completo: cada stat, lámpara y readout como instrumento real.
- Do usar Oxanium para títulos/readouts y mono para etiquetas; Archivo para prosa.
- Do animar propiedades `transform`/`opacity` (parallax, tilt, escala), nunca `width`/`height`/`top` en loop.
- Do responder al `prefers-reduced-motion` (desactiva parallax, tilt, shimmer, fade).
- Do mantener la paleta de la noche con cian/ámbar/menta; NO volver a una superficie cálida clara.

**Don't**
- Don't reintroducir Space Grotesk (mundo de instrumentos lo rechaza: detector `overused-font` limpio).
- Don't usar gradientes de texto ni emojis como iconos.
- Don't volver a un grid decorativo de doble eje en toda la página (detector `codex-grid-background` — se limpió el grupo `.grid-floor`; queda el barrido de radar y las líneas de floor internas solas).
- Don't romper el stack de breakpoints (1050/860/600): el buscador inline de mas_proyectos y el hero de 1 columna son de la hoja.
