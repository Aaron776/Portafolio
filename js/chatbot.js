// chatbot.js — asistente FAQ guiado, sin APIs ni llaves externas.
(function () {
  "use strict";

  var COPY = {
    es: {
      open: "Abrir asistente de Aaron",
      close: "Cerrar asistente",
      title: "Asistente de Aaron",
      status: "Respuestas rápidas",
      closeChat: "Cerrar chat",
      inputLabel: "Escribe tu pregunta",
      placeholder: "Escribe una pregunta...",
      send: "Enviar mensaje",
      greeting: "Hola. Soy el asistente de Aaron. Puedo contarte sobre su experiencia, proyectos, stack, contacto y CV.",
      prompts: [
        ["Experiencia", "experience"],
        ["Proyectos", "projects"],
        ["Stack", "stack"],
        ["Contacto", "contact"],
        ["CV", "cv"]
      ],
      answers: {
        experience: "Aaron tiene <strong>3 años de experiencia</strong> como desarrollador de software. Trabaja en backend/full stack con PHP, Laravel, Python y Django, y actualmente participa en CruxByte ERP. <a href=\"{experiencia}\" data-chat-link>Ver trayectoria</a>.",
        projects: "Ha completado <strong>3 proyectos</strong> y desarrollado sistemas de gestión para carnicería, veterinaria, parqueaderos, taller mecánico, gimnasio y más. <a href=\"{proyectos}\" data-chat-link>Ver proyectos</a>.",
        stack: "Su stack backend/full stack es PHP, Python, Django, Laravel, PostgreSQL, MySQL, JavaScript, Docker y GitHub. <a href=\"{habilidades}\" data-chat-link>Ver habilidades</a>.",
        contact: "Puedes escribirle desde el formulario de contacto; también encontrarás sus redes en el pie de página. <a href=\"{contacto}\" data-chat-link>Ir a contacto</a>.",
        cv: "Puedes descargar su currículum en PDF desde el enlace <a href=\"docs/CURRICULUM-SOFTWARE.pdf\" data-chat-link>Descargar CV</a>.",
        thanks: "Con gusto. Si necesitas algo más, elige una de las opciones rápidas.",
        default: "Puedo ayudarte con <strong>experiencia</strong>, <strong>proyectos</strong>, <strong>stack tecnológico</strong>, <strong>contacto</strong> o <strong>CV</strong>. Elige una opción rápida o escribe una palabra clave."
      }
    },
    en: {
      open: "Open Aaron's assistant",
      close: "Close assistant",
      title: "Aaron's assistant",
      status: "Quick answers",
      closeChat: "Close chat",
      inputLabel: "Type your question",
      placeholder: "Type a question...",
      send: "Send message",
      greeting: "Hi. I'm Aaron's assistant. I can tell you about his experience, projects, stack, contact details and CV.",
      prompts: [
        ["Experience", "experience"],
        ["Projects", "projects"],
        ["Stack", "stack"],
        ["Contact", "contact"],
        ["CV", "cv"]
      ],
      answers: {
        experience: "Aaron has <strong>3 years of experience</strong> as a software developer. He works across backend/full stack with PHP, Laravel, Python and Django, and currently contributes to CruxByte ERP. <a href=\"{experiencia}\" data-chat-link>View experience</a>.",
        projects: "He has completed <strong>3 projects</strong> and built management systems for butcher shops, veterinary clinics, parking lots, a mechanic workshop, a gym and more. <a href=\"{proyectos}\" data-chat-link>View projects</a>.",
        stack: "His backend/full stack is PHP, Python, Django, Laravel, PostgreSQL, MySQL, JavaScript, Docker and GitHub. <a href=\"{habilidades}\" data-chat-link>View skills</a>.",
        contact: "You can reach him through the contact form; his social links are in the footer too. <a href=\"{contacto}\" data-chat-link>Go to contact</a>.",
        cv: "You can download his PDF résumé from <a href=\"docs/CURRICULUM-SOFTWARE.pdf\" data-chat-link>Download CV</a>.",
        thanks: "You're welcome. Pick a quick option if you need anything else.",
        default: "I can help with <strong>experience</strong>, <strong>projects</strong>, <strong>tech stack</strong>, <strong>contact</strong> or <strong>CV</strong>. Choose a quick option or type a keyword."
      }
    }
  };

  var RULES = [
    [/experiencia|trayectoria|experience|career|work|anios|years|cruxbyte/, "experience"],
    [/proyecto|proyectos|project|projects|sistema|systems|portafolio|portfolio/, "projects"],
    [/stack|tecnolog|technolog|php|python|django|laravel|postgres|mysql|javascript|docker|github/, "stack"],
    [/contacto|contact|correo|email|mensaje|message|redes|social/, "contact"],
    [/cv|curriculum|resume|hoja de vida/, "cv"],
    [/gracias|thanks|thank you/, "thanks"]
  ];

  function currentLang() {
    return localStorage.getItem("lang") === "en" ? "en" : "es";
  }

  function sectionHref(id) {
    var inCatalog = /mas_proyectos\.html/.test(window.location.pathname);
    return (inCatalog ? "index.html" : "") + id;
  }

  function resolveLinks(html) {
    return html
      .replace(/\{experiencia\}/g, sectionHref("#experiencia"))
      .replace(/\{proyectos\}/g, sectionHref("#proyectos"))
      .replace(/\{habilidades\}/g, sectionHref("#habilidades"))
      .replace(/\{contacto\}/g, sectionHref("#contacto"));
  }

  function normalize(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function intentFor(text) {
    var q = normalize(text);
    for (var i = 0; i < RULES.length; i++) {
      if (RULES[i][0].test(q)) return RULES[i][1];
    }
    return "default";
  }

  function init() {
    if (document.querySelector(".chatbot")) return;

    var root = document.createElement("div");
    root.className = "chatbot";
    root.innerHTML =
      '<div class="chatbot-panel" id="chatbot-panel" role="dialog" aria-modal="false" hidden>' +
        '<div class="chatbot-head">' +
          '<span class="chatbot-dot" aria-hidden="true"></span>' +
          '<div class="chatbot-heading">' +
            '<strong class="chatbot-title"></strong>' +
            '<span class="chatbot-status"></span>' +
          '</div>' +
          '<button class="chatbot-close" type="button"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
        '</div>' +
        '<div class="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions"></div>' +
        '<div class="chatbot-quick" role="group" aria-label="Respuestas rápidas"></div>' +
        '<form class="chatbot-form">' +
          '<label class="chatbot-sr-only"></label>' +
          '<input class="chatbot-input" type="text" autocomplete="off">' +
          '<button class="chatbot-send" type="submit"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i></button>' +
        '</form>' +
      '</div>' +
      '<button class="chatbot-launcher" type="button" aria-expanded="false" aria-controls="chatbot-panel">' +
        '<i class="fa-solid fa-comment-dots" aria-hidden="true"></i>' +
      '</button>';

    document.body.appendChild(root);

    var panel = root.querySelector(".chatbot-panel");
    var messages = root.querySelector(".chatbot-messages");
    var quick = root.querySelector(".chatbot-quick");
    var form = root.querySelector(".chatbot-form");
    var input = root.querySelector(".chatbot-input");
    var label = root.querySelector(".chatbot-form label");
    var launcher = root.querySelector(".chatbot-launcher");
    var title = root.querySelector(".chatbot-title");
    var status = root.querySelector(".chatbot-status");
    var closeBtn = root.querySelector(".chatbot-close");
    var sendBtn = root.querySelector(".chatbot-send");

    function applyLabels() {
      var c = COPY[currentLang()];
      var isOpen = !panel.hidden;
      title.textContent = c.title;
      status.textContent = c.status;
      label.textContent = c.inputLabel;
      input.placeholder = c.placeholder;
      panel.setAttribute("aria-label", c.title);
      closeBtn.setAttribute("aria-label", c.closeChat);
      sendBtn.setAttribute("aria-label", c.send);
      launcher.setAttribute("aria-label", isOpen ? c.close : c.open);
      launcher.setAttribute("title", isOpen ? c.close : c.open);
      quick.setAttribute("aria-label", currentLang() === "en" ? "Quick answers" : "Respuestas rápidas");
      quick.innerHTML = "";
      c.prompts.forEach(function (prompt) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "chatbot-quick-btn";
        btn.textContent = prompt[0];
        btn.dataset.intent = prompt[1];
        quick.appendChild(btn);
      });
    }

    function addMessage(html, who, isText) {
      var el = document.createElement("div");
      el.className = "chatbot-msg chatbot-msg--" + who;
      if (isText) el.textContent = html;
      else el.innerHTML = resolveLinks(html);
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
    }

    function ensureGreeting() {
      if (!messages.children.length) addMessage(COPY[currentLang()].greeting, "bot", true);
    }

    function setOpen(open) {
      panel.hidden = !open;
      launcher.setAttribute("aria-expanded", String(open));
      launcher.classList.toggle("is-open", open);
      applyLabels();
      if (open) {
        ensureGreeting();
        messages.scrollTop = messages.scrollHeight;
        requestAnimationFrame(function () { input.focus(); });
      } else {
        launcher.focus();
      }
    }

    function ask(text, forcedIntent) {
      var value = String(text || "").trim();
      if (!value) return;
      addMessage(value, "user", true);
      var c = COPY[currentLang()];
      var intent = forcedIntent || intentFor(value);
      addMessage(c.answers[intent] || c.answers.default, "bot", false);
      input.value = "";
      input.focus();
    }

    launcher.addEventListener("click", function () {
      setOpen(panel.hidden);
    });

    closeBtn.addEventListener("click", function () {
      setOpen(false);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      ask(input.value);
    });

    quick.addEventListener("click", function (e) {
      var btn = e.target.closest(".chatbot-quick-btn");
      if (btn) ask(btn.textContent, btn.dataset.intent);
    });

    messages.addEventListener("click", function (e) {
      if (e.target.closest("a[data-chat-link]")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) setOpen(false);
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".lang-toggle")) return;
      requestAnimationFrame(function () {
        messages.innerHTML = "";
        applyLabels();
        ensureGreeting();
      });
    });

    applyLabels();
    ensureGreeting();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
