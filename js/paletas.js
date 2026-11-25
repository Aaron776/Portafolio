(() => {
  "use strict";
  const frame = document.getElementById("preview");
  const status = document.getElementById("status");
  const darkComparison = document.body.dataset.comparison === "dark";
  const palettes = {
    ambar: {
      name: "Carbón y ámbar",
      bg: "#181a1d", abyss: "#1e2125", ground: "#25292e", sheet: "#2c3036",
      text: "#f3f0e9", soft: "#d0ccc3", faint: "#b6b1a7",
      accent: "#e6b46a", deep: "#81551f", bright: "#f3cd94",
      paper: "#f1ece2", paperDeep: "#ded7c9", paperInk: "#39342a", onAccent: "#181a1d"
    },
    jade: {
      name: "Petróleo y jade",
      bg: "#10282b", abyss: "#153136", ground: "#1b3b3f", sheet: "#22464a",
      text: "#edf5f2", soft: "#c1d7d1", faint: "#a2bfb7",
      accent: "#79cdb5", deep: "#25654f", bright: "#a4e5d2",
      paper: "#e9f3ef", paperDeep: "#d4e4dd", paperInk: "#25443c", onAccent: "#10282b"
    },
    plata: {
      name: "Negro suave y plata",
      bg: "#17191c", abyss: "#1e2126", ground: "#252a30", sheet: "#2e343c",
      text: "#eceff3", soft: "#c8cfd8", faint: "#abb5c1",
      accent: "#b8c7d9", deep: "#485b72", bright: "#d7e2ee",
      paper: "#eef1f5", paperDeep: "#dbe1e9", paperInk: "#2d3b4d", onAccent: "#17191c"
    },
    oceano: {
      name: "Océano y arena",
      bg: "#102b36", abyss: "#143440", ground: "#1b3b46", sheet: "#234651",
      text: "#f5f1e9", soft: "#ccd7d8", faint: "#afc2c6",
      accent: "#e9b66f", deep: "#9d6b2a", bright: "#f5d19e",
      paper: "#f4eee2", paperDeep: "#e3dac9", paperInk: "#273e45", onAccent: "#102b36"
    },
    pizarra: {
      name: "Pizarra y lavanda",
      bg: "#202431", abyss: "#252a39", ground: "#2b3143", sheet: "#333b50",
      text: "#f2f3fa", soft: "#cbd0e1", faint: "#adb6ce",
      accent: "#b9c7fa", deep: "#626fa8", bright: "#d8dfff",
      paper: "#eef0f8", paperDeep: "#dce1ef", paperInk: "#303b55", onAccent: "#202431"
    },
    perla: {
      name: "Perla y zafiro",
      bg: "#f2f4f7", abyss: "#e9eef4", ground: "#e2e9f1", sheet: "#ffffff",
      text: "#1e324a", soft: "#425771", faint: "#536b83",
      accent: "#285c9b", deep: "#1b4375", bright: "#326cae",
      paper: "#ffffff", paperDeep: "#dfe8f2", paperInk: "#1e324a", onAccent: "#ffffff"
    },
    noche: {
      name: "Azul noche y turquesa",
      bg: "#101c2e", abyss: "#142238", ground: "#192a40", sheet: "#1b2d45",
      text: "#eff4fa", soft: "#c4d2e3", faint: "#a2b4cb",
      accent: "#57d9c0", deep: "#268e83", bright: "#8cebd8",
      paper: "#e8eff6", paperDeep: "#d5e1ed", paperInk: "#203748", onAccent: "#101c2e"
    },
    grafito: {
      name: "Grafito y azul",
      bg: "#181c23", abyss: "#1d222b", ground: "#222934", sheet: "#252c37",
      text: "#f2f5f9", soft: "#c6ceda", faint: "#a4b0c2",
      accent: "#83b4ff", deep: "#4778bc", bright: "#afd0ff",
      paper: "#edf0f5", paperDeep: "#dce2eb", paperInk: "#28374c", onAccent: "#181c23"
    },
    marfil: {
      name: "Marfil y petróleo",
      bg: "#f5f3ed", abyss: "#eeeee7", ground: "#e8ede8", sheet: "#ffffff",
      text: "#183440", soft: "#3f5962", faint: "#526872",
      accent: "#176b69", deep: "#105452", bright: "#1d7673",
      paper: "#ffffff", paperDeep: "#e2ebe6", paperInk: "#183440", onAccent: "#ffffff"
    }
  };
  let selected = darkComparison ? "ambar" : "original", source = "", selectedType = "original";
  const types = {
    original: { name: "Tipografía original" },
    manrope: { name: "Manrope + Source Sans 3", display: "Manrope", body: "Source Sans 3" },
    sora: { name: "Sora + Source Sans 3", display: "Sora", body: "Source Sans 3" },
    plex: { name: "IBM Plex Sans", display: "IBM Plex Sans", body: "IBM Plex Sans" }
  };
  const rgb = hex => hex.match(/[0-9a-f]{2}/gi).map(n => parseInt(n, 16));
  function recolor(p) {
    const map = {
      "#0c1512":p.bg, "#101c18":p.abyss, "#16241f":p.ground, "#1c2e27":p.sheet,
      "#f4edde":p.text, "#e6dcc9":p.text, "#c4bba8":p.soft, "#9c9785":p.faint,
      "#e2a063":p.accent, "#b96f35":p.deep, "#f2b87c":p.bright,
      "#8fd3b6":p.accent, "#d9714e":p.deep, "#d9b36a":p.bright, "#9db6c9":p.soft,
      "#efe5d1":p.paper, "#e2d6bd":p.paperDeep, "#2f281e":p.paperInk,
      "#f2e9d6":p.paper, "#4a4133":p.paperInk, "#4f4738":p.paperInk,
      "#8b4f26":p.deep, "#1a120b":p.onAccent, "#3c4a38":p.ground,
      "#0e1a16":p.abyss, "#0d1714":p.bg, "#121a15":p.abyss
    };
    let css = source.replace(/#[0-9a-f]{6}\b/gi, value => map[value.toLowerCase()] || value);
    css = css.replace(/rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\s*\)/g, (full,r,g,b,a) => {
      const key = `${r},${g},${b}`;
      const colors = {
        "232,222,200":p.text, "196,187,168":p.soft,
        "226,160,99":p.accent, "242,184,124":p.bright, "185,111,53":p.deep,
        "143,211,182":p.accent, "217,179,106":p.bright, "157,182,201":p.soft,
        "12,21,18":p.bg, "16,28,24":p.abyss, "28,46,39":p.sheet,
        "36,54,46":p.sheet, "15,26,22":p.bg, "40,62,52":p.sheet,
        "14,24,20":p.bg, "18,26,21":p.abyss, "74,104,82":p.ground,
        "74,58,38":p.paperInk, "139,79,38":p.deep,
        "250,244,231":p.paper, "239,229,209":p.paper,
        "14,26,22":p.abyss, "8,16,13":p.bg, "12,22,18":p.bg, "156,151,133":p.faint
      };
      return colors[key] ? `rgba(${rgb(colors[key]).join(",")},${a})` : full;
    });
    return css;
  }
  function apply() {
    try {
      const doc = frame.contentDocument;
      if (!doc?.head || !source) return;
      if (darkComparison) {
        doc.documentElement.dataset.theme = "dark";
        doc.getElementById("light-theme").media = "not all";
        const themeSheet = doc.querySelector('link[href="temas.css"]');
        if (themeSheet) themeSheet.media = selected === "original" ? "all" : "not all";
      }
      if (!darkComparison && !doc.getElementById("preview-fonts")) {
        const fonts = doc.createElement("link");
        fonts.id = "preview-fonts";
        fonts.rel = "stylesheet";
        fonts.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap";
        doc.head.append(fonts);
      }
      let style = doc.getElementById("palette-preview");
      if (!style) { style = doc.createElement("style"); style.id = "palette-preview"; doc.head.append(style); }
      style.textContent = selected === "original" ? "" : recolor(palettes[selected]);
      if (darkComparison) style.textContent += "\n:root{color-scheme:dark}.theme-toggle{display:none!important}";
      let typography = doc.getElementById("type-preview");
      if (!typography) { typography = doc.createElement("style"); typography.id = "type-preview"; doc.head.append(typography); }
      const type = types[selectedType];
      typography.textContent = selectedType === "original" ? "" : `
        :root { --font-display: "${type.display}", sans-serif; --font-body: "${type.body}", sans-serif; }
        .hero-title, .section-title { font-weight: 600; }
        .hero-title .accent, .section-title .accent { font-style: normal; }
      `;
      status.textContent = `${selected === "original" ? (darkComparison ? "Oscuro actual" : "Paleta original") : palettes[selected].name} · ${type.name} · Vista previa`;
      document.querySelectorAll("[data-palette]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.palette === selected)));
      document.querySelectorAll("[data-type]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.type === selectedType)));
    } catch {
      status.textContent = "Abre el portafolio para seguir comparando.";
    }
  }
  document.querySelectorAll("[data-palette]").forEach(button => button.addEventListener("click", () => {
    selected = button.dataset.palette; apply();
  }));
  document.querySelectorAll("[data-type]").forEach(button => button.addEventListener("click", () => {
    selectedType = button.dataset.type; apply();
  }));
  frame.addEventListener("load", apply);
  fetch("estilos.css").then(response => {
    if (!response.ok) throw new Error("CSS unavailable");
    return response.text();
  }).then(css => { source = css; apply(); }).catch(() => {
    status.textContent = "No se pudo cargar la comparación. Abre esta página desde el servidor local.";
  });
})();
