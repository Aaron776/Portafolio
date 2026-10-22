(function () {
  "use strict";

  const dict = {
    es: {
      nav: { inicio: "Inicio", sobre: "Sobre Mí", exp: "Experiencia", proyectos: "Proyectos", hab: "Habilidades", contacto: "Contacto" },
      hero: {
        h1Pre: "Hola, soy",
        h1Accent: "Aaron Ortiz",
        sub: "Desarrollador de Software especializado en construir soluciones digitales modernas y eficientes",
        btnPro: "Ver Proyectos",
        btnCon: "Conectar",
        btnCv: "Descargar CV",
        chip: "SISTEMAS EN LÍNEA · 10 MÓDULOS",
        tag: "AARON ORTIZ",
        sys: "SISTEMAS",
        rev: "LÁMINA 00 · REV 2025"
      },
      ledger: [
        ["3+", "AÑOS DE EXPERIENCIA"],
        ["6+", "PROYECTOS COMPLETADOS"],
        ["10+", "SISTEMAS DESARROLLADOS"]
      ],
      about: {
        plate: "Sobre Mí",
        title: "Más que código, <span class=accent>soluciones</span>",
        p1: "Soy un desarrollador de software con enfoque en crear aplicaciones web robustas, escalables y con excelente experiencia de usuario.",
        p2: "Especializado en el desarrollo full-stack con <strong>PHP, Laravel, PostgreSQL, MySQL, JavaScript</strong> y tecnologías modernas. Me apasiona transformar ideas complejas en soluciones simples y funcionales.",
        p3: "Siempre en búsqueda de nuevos desafíos para seguir aprendiendo y aportando valor a cada proyecto.",
        s1k: "+ EXPERIENCIA",
        s1n: "3+",
        s1l: "AÑOS",
        s2k: "+ PROYECTOS",
        s2n: "6+",
        s2l: "COMPLETADOS"
      },
      exp: {
        plate: "Mi Experiencia",
        title: "Trayectoria <span class=accent>profesional</span>",
        sub: "Desarrollo de soluciones empresariales y sistemas a medida",
        p1t: "Desarrollador de Software",
        p1c: "Freelance / Proyectos Independientes",
        p1p: "2022 - Presente",
        p1i: [
          "Desarrollo de sistemas de gestión empresarial (carnicería, veterinaria, taller mecánico, parqueadero)",
          "Implementación de aplicaciones web con PHP, Laravel y bases de datos relacionales",
          "Creación de APIs RESTful y sistemas con autenticación y roles de usuario",
          "Optimización de consultas SQL y diseño de bases de datos"
        ],
        p2t: "Desarrollador Web",
        p2c: "Proyectos Académicos y Personales",
        p2p: "2020 - 2022",
        p2i: [
          "Desarrollo frontend con HTML5, CSS3, JavaScript y Bootstrap",
          "Integración con bases de datos MySQL y PostgreSQL",
          "Aplicación de buenas prácticas de código y diseño responsivo"
        ],
        btn: "Ver Todos los Proyectos"
      },
      proj: {
        plate: "Mis Proyectos",
        title: "Proyectos <span class=accent>destacados</span>",
        sub: "Sistemas reales desarrollados para resolver necesidades empresariales",
        sys: "SISTEMA",
        btn: "Ver Repositorio",
        more: "Ver Más Proyectos"
      },
      skills: {
        plate: "Mis Habilidades",
        title: "Stack <span class=accent>tecnológico</span>",
        sub: "Herramientas y tecnologías que utilizo para desarrollar soluciones",
        c1: "Backend",
        c2: "Frontend",
        c3: "Base de Datos",
        c4: "Herramientas & Otros",
        aiHead: "Inteligencia Artificial & Automatización",
        aiSub: "Integración de IA para potenciar soluciones",
        ai: [
          ["01", "Integración de IA", "Uso de APIs de IA para automatizar procesos"],
          ["02", "Chatbots", "Desarrollo de asistentes inteligentes"],
          ["03", "Análisis de Datos", "Procesamiento y análisis con IA"],
          ["04", "Automatización", "Flujos inteligentes con IA"]
        ],
        pTitle: "Dominio Tecnológico"
      },
      contact: {
        plate: "Contáctame",
        title: "Trabajemos <span class=accent>juntos</span>",
        sub: "¿Tienes un proyecto en mente? ¡Hablemos!",
        info: "Información de Contacto",
        email: "Email",
        phone: "Teléfono",
        loc: "Ubicación",
        locv: "Quito, Ecuador",
        social: "Sígueme",
        form: "Envíame un Mensaje",
        lName: "Nombre completo *",
        lEmail: "Email *",
        lSub: "Asunto *",
        lMsg: "Mensaje *",
        btn: "Enviar Mensaje"
      },
      footer: {
        desc: "Desarrollador de software especializado en soluciones modernas con PHP, Laravel, PostgreSQL, MySQL, JavaScript y más.",
        nav: "Navegación",
        social: "Redes Sociales",
        copy: "© 2025 Aaron Ortiz. Todos los derechos reservados.",
        tag: "LÁMINA 06 · CIERRE DE ATLAS"
      },
      catalog: {
        plate: "Catálogo de Proyectos",
        title: "Todos mis <span class=accent>Proyectos</span>",
        sub: "Explora el catálogo completo de sistemas y aplicaciones desarrolladas",
        search: "Buscar por nombre, tecnología o descripción...",
        clear: "Limpiar búsqueda",
        count: "proyecto(s) encontrado(s)",
        noneT: "No se encontraron proyectos",
        noneP: "Intenta con otro término de búsqueda",
        back: "Volver al Inicio"
      }
    },
    en: {
      nav: { inicio: "Home", sobre: "About", exp: "Experience", proyectos: "Projects", hab: "Skills", contacto: "Contact" },
      hero: {
        h1Pre: "Hi, I'm",
        h1Accent: "Aaron Ortiz",
        sub: "Software Developer focused on building modern, efficient digital solutions",
        btnPro: "View Projects",
        btnCon: "Get in Touch",
        btnCv: "Download CV",
        chip: "SYSTEMS ONLINE · 10 MODULES",
        tag: "AARON ORTIZ",
        sys: "SYSTEMS",
        rev: "PLATE 00 · REV 2025"
      },
      ledger: [
        ["3+", "YEARS OF EXPERIENCE"],
        ["6+", "PROJECTS COMPLETED"],
        ["10+", "SYSTEMS DEVELOPED"]
      ],
      about: {
        plate: "About Me",
        title: "More than code, <span class=accent>solutions</span>",
        p1: "I'm a software developer focused on building robust, scalable web applications with great user experience.",
        p2: "Specialized in full-stack development with <strong>PHP, Laravel, PostgreSQL, MySQL, JavaScript</strong> and modern technologies. I love turning complex ideas into simple, functional solutions.",
        p3: "Always looking for new challenges to keep learning and adding value to every project.",
        s1k: "+ EXPERIENCE",
        s1n: "3+",
        s1l: "YEARS",
        s2k: "+ PROJECTS",
        s2n: "6+",
        s2l: "COMPLETED"
      },
      exp: {
        plate: "My Experience",
        title: "Professional <span class=accent>journey</span>",
        sub: "Building enterprise solutions and custom systems",
        p1t: "Software Developer",
        p1c: "Freelance / Independent Projects",
        p1p: "2022 - Present",
        p1i: [
          "Built business management systems (butchery, veterinary, auto shop, parking lot)",
          "Developed web apps with PHP, Laravel and relational databases",
          "Created RESTful APIs with auth and role-based access",
          "Optimized SQL queries and database design"
        ],
        p2t: "Web Developer",
        p2c: "Academic & Personal Projects",
        p2p: "2020 - 2022",
        p2i: [
          "Frontend with HTML5, CSS3, JavaScript and Bootstrap",
          "Integrated MySQL and PostgreSQL databases",
          "Applied clean code practices and responsive design"
        ],
        btn: "View All Projects"
      },
      proj: {
        plate: "My Projects",
        title: "Featured <span class=accent>projects</span>",
        sub: "Real systems built to solve business needs",
        sys: "SYSTEM",
        btn: "View Repository",
        more: "View More Projects"
      },
      skills: {
        plate: "My Skills",
        title: "Tech <span class=accent>stack</span>",
        sub: "Tools and technologies I use to build solutions",
        c1: "Backend",
        c2: "Frontend",
        c3: "Database",
        c4: "Tools & Others",
        aiHead: "AI & Automation",
        aiSub: "Leveraging AI to power smarter solutions",
        ai: [
          ["01", "AI Integration", "Using AI APIs to automate workflows"],
          ["02", "Chatbots", "Building intelligent assistants"],
          ["03", "Data Analysis", "AI-powered insights and processing"],
          ["04", "Automation", "Smart flows with AI"]
        ],
        pTitle: "Proficiency"
      },
      contact: {
        plate: "Contact Me",
        title: "Let's work <span class=accent>together</span>",
        sub: "Got a project in mind? Let's talk!",
        info: "Contact Information",
        email: "Email",
        phone: "Phone",
        loc: "Location",
        locv: "Quito, Ecuador",
        social: "Follow me",
        form: "Send me a Message",
        lName: "Full name *",
        lEmail: "Email *",
        lSub: "Subject *",
        lMsg: "Message *",
        btn: "Send Message"
      },
      footer: {
        desc: "Software developer specialized in modern solutions with PHP, Laravel, PostgreSQL, MySQL, JavaScript and more.",
        nav: "Navigation",
        social: "Social",
        copy: "© 2025 Aaron Ortiz. All rights reserved.",
        tag: "PLATE 06 · CLOSING ATLAS"
      },
      catalog: {
        plate: "Project Catalog",
        title: "All my <span class=accent>Projects</span>",
        sub: "Browse the full catalog of systems and apps I've built",
        search: "Search by name, tech or description...",
        clear: "Clear search",
        count: "project(s) found",
        noneT: "No projects found",
        noneP: "Try another search term",
        back: "Back to Home"
      }
    }
  };

  function applyLang(lang) {
    const t = dict[lang] || dict.es;
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll(".lang-toggle").forEach((btn) => {
      btn.classList.toggle("is-en", lang === "en");
      btn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    });

    const set = (sel, val, html) => {
      const el = document.querySelector(sel);
      if (el) html ? (el.innerHTML = val) : (el.textContent = val);
    };
    const setAll = (sel, val, html) => {
      document.querySelectorAll(sel).forEach((el) => (html ? (el.innerHTML = val) : (el.textContent = val)));
    };

    setAll(".nav-menu .nav-link[href='#inicio'], .nav-menu .nav-link[href='index.html#inicio']", t.nav.inicio);
    setAll(".nav-menu .nav-link[href='#sobre-mi'], .nav-menu .nav-link[href='index.html#sobre-mi']", t.nav.sobre);
    setAll(".nav-menu .nav-link[href='#experiencia'], .nav-menu .nav-link[href='index.html#experiencia']", t.nav.exp);
    setAll(".nav-menu .nav-link[href='#proyectos'], .nav-menu .nav-link[href='index.html#proyectos']", t.nav.proyectos);
    setAll(".nav-menu .nav-link[href='#habilidades'], .nav-menu .nav-link[href='index.html#habilidades']", t.nav.hab);
    setAll(".nav-contact-btn", t.nav.contacto);

    set(".hero-title", `${t.hero.h1Pre} <span class="accent">${t.hero.h1Accent}</span>`, true);
    set(".hero-subtitle", t.hero.sub);
    set(".hero-buttons .btn-primary", `<i class="fa-solid fa-diagram-project" aria-hidden="true"></i> ${t.hero.btnPro}`, true);
    set(".hero-buttons .btn-secondary", `<i class="fa-solid fa-paper-plane" aria-hidden="true"></i> ${t.hero.btnCon}`, true);
    set(".hero-buttons .btn-cv", `<i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i> ${t.hero.btnCv}`, true);
    set(".plane-chip .mono", t.hero.chip);
    set(".plane-photo .plane-tag", t.hero.tag);
    set(".plane-plate .plane-sys", t.hero.sys);
    set(".scene::after", t.hero.rev);

    const ledger = document.querySelectorAll(".ledger-item");
    if (ledger[0]) { set(".ledger-item:nth-child(1) .ledger-num", t.ledger[0][0]); set(".ledger-item:nth-child(1) .ledger-text", t.ledger[0][1]); }
    if (ledger[1]) { set(".ledger-item:nth-child(2) .ledger-num", t.ledger[1][0]); set(".ledger-item:nth-child(2) .ledger-text", t.ledger[1][1]); }
    if (ledger[2]) { set(".ledger-item:nth-child(3) .ledger-num", t.ledger[2][0]); set(".ledger-item:nth-child(3) .ledger-text", t.ledger[2][1]); }

    set("#sobre-mi .section-header::before", t.about.plate);
    set("#sobre-mi .section-title", t.about.title, true);
    const ap = document.querySelectorAll("#sobre-mi .about-text p");
    if (ap[0]) ap[0].textContent = t.about.p1;
    if (ap[1]) ap[1].innerHTML = t.about.p2;
    if (ap[2]) ap[2].textContent = t.about.p3;
    set("#sobre-mi .stat:nth-child(1) .stat-kicker", t.about.s1k);
    set("#sobre-mi .stat:nth-child(1) .stat-number", t.about.s1n);
    set("#sobre-mi .stat:nth-child(1) .stat-label", t.about.s1l);
    set("#sobre-mi .stat:nth-child(2) .stat-kicker", t.about.s2k);
    set("#sobre-mi .stat:nth-child(2) .stat-number", t.about.s2n);
    set("#sobre-mi .stat:nth-child(2) .stat-label", t.about.s2l);

    set("#experiencia .section-header::before", t.exp.plate);
    set("#experiencia .section-title", t.exp.title, true);
    set("#experiencia .section-subtitle", t.exp.sub);
    set("#experiencia .experience-grid .experience-card:nth-child(1) .experience-title", t.exp.p1t);
    set("#experiencia .experience-grid .experience-card:nth-child(1) .company", t.exp.p1c);
    set("#experiencia .experience-grid .experience-card:nth-child(1) .period", t.exp.p1p);
    const e1 = document.querySelectorAll("#experiencia .experience-grid .experience-card:nth-child(1) .experience-list li");
    t.exp.p1i.forEach((v, i) => { if (e1[i]) e1[i].textContent = v; });
    set("#experiencia .experience-grid .experience-card:nth-child(2) .experience-title", t.exp.p2t);
    set("#experiencia .experience-grid .experience-card:nth-child(2) .company", t.exp.p2c);
    set("#experiencia .experience-grid .experience-card:nth-child(2) .period", t.exp.p2p);
    const e2 = document.querySelectorAll("#experiencia .experience-grid .experience-card:nth-child(2) .experience-list li");
    t.exp.p2i.forEach((v, i) => { if (e2[i]) e2[i].textContent = v; });
    set(".experience-button-container .btn", `<i class="fa-solid fa-briefcase" aria-hidden="true"></i> ${t.exp.btn}`, true);

    set("#proyectos .section-header::before", t.proj.plate);
    set("#proyectos .section-title", t.proj.title, true);
    set("#proyectos .section-subtitle", t.proj.sub);
    setAll(".project-card .project-sys", t.proj.sys);
    setAll(".repo-btn", `<span>${t.proj.btn}</span><i class="fa-solid fa-arrow-right repo-arrow" aria-hidden="true"></i>`, true);
    set(".section-top .experience-button-container .btn, #proyectos ~ .experience-button-container .btn", `<i class="fa-solid fa-layer-group" aria-hidden="true"></i> ${t.proj.more}`, true);

    set("#habilidades .section-header::before", t.skills.plate);
    set("#habilidades .section-title", t.skills.title, true);
    set("#habilidades .section-subtitle", t.skills.sub);
    set("#habilidades .skill-category:nth-of-type(1) .skill-title", t.skills.c1);
    set("#habilidades .skill-category:nth-of-type(2) .skill-title", t.skills.c2);
    set("#habilidades .skill-category:nth-of-type(3) .skill-title", t.skills.c3);
    set("#habilidades .skill-category:nth-of-type(4) .skill-title", t.skills.c4);
    set(".skills-ai .skills-ai-heading .skill-title", t.skills.aiHead);
    set(".skills-ai .skills-ai-meta", `<span class="skills-ai-badge">AI</span><span class="skills-ai-dot"></span><span>${t.skills.aiSub}</span>`, true);
    const ai = document.querySelectorAll(".skills-ai-item");
    t.skills.ai.forEach((v, i) => {
      if (ai[i]) { set(".skills-ai-item:nth-child(" + (i+1) + ") .skills-ai-idx", v[0]); set(".skills-ai-item:nth-child(" + (i+1) + ") h4", v[1]); set(".skills-ai-item:nth-child(" + (i+1) + ") p", v[2]); }
    });
    set(".progress-title", t.skills.pTitle);

    set("#contacto .section-header::before", t.contact.plate);
    set("#contacto .section-title", t.contact.title, true);
    set("#contacto .section-subtitle", t.contact.sub);
    set("#contacto .contact-info .panel-heading", t.contact.info);
    set("#contacto .contact-item:nth-of-type(1) .contact-label", t.contact.email);
    set("#contacto .contact-item:nth-of-type(2) .contact-label", t.contact.phone);
    set("#contacto .contact-item:nth-of-type(3) .contact-label", t.contact.loc);
    set("#contacto .contact-item:nth-of-type(3) .contact-value", t.contact.locv);
    set("#contacto .social-title", t.contact.social);
    set("#contacto .contact-form .panel-heading", t.contact.form);
    set("#contacto label[for='name']", t.contact.lName);
    set("#contacto label[for='email']", t.contact.lEmail);
    set("#contacto label[for='subject']", t.contact.lSub);
    set("#contacto label[for='message']", t.contact.lMsg);
    set("#contacto #contactForm button", `<i class="fa-solid fa-paper-plane" aria-hidden="true"></i> ${t.contact.btn}`, true);

    set(".footer-title", "Aaron Ortiz");
    set(".footer-text", t.footer.desc);
    set(".footer-section:nth-of-type(2) .footer-subtitle", t.footer.nav);
    set(".footer-section:nth-of-type(3) .footer-subtitle", t.footer.social);
    set(".footer-bottom span:first-child", t.footer.copy);
    set(".footer-bottom::after", t.footer.tag);

    set("#proyectos .section-header::before", t.catalog.plate);
    set("#proyectos .section-title", t.catalog.title, true);
    set("#proyectos .section-subtitle", t.catalog.sub);
    const si = document.getElementById("searchInput");
    if (si) si.setAttribute("placeholder", t.catalog.search);
    set("#clearSearch", `<i class="fa-solid fa-xmark"></i> ${t.catalog.clear}`, true);
    set("#resultsCount", t.catalog.count);
    set("#noResults h3", t.catalog.noneT);
    set("#noResults p", t.catalog.noneP);
    set(".footer .nav-logo-name, header .nav-logo-name", "<strong>AARON</strong> ORTIZ", true);
  }

  function initLang() {
    const existing = document.querySelectorAll(".lang-toggle");
    if (existing.length) return;
    const shell = document.querySelector(".nav-shell");
    const menu = document.getElementById("nav-menu");
    if (!shell) return;

    const btn = document.createElement("button");
    btn.className = "lang-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Cambiar idioma / Switch language");
    btn.innerHTML = '<span class="lang-toggle-dot"></span><span class="lang-toggle-text"></span>';

    btn.addEventListener("click", () => {
      const cur = localStorage.getItem("lang") || "es";
      applyLang(cur === "es" ? "en" : "es");
    });

    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      btn.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    });
    btn.addEventListener("mouseleave", () => { btn.style.removeProperty("--mx"); btn.style.removeProperty("--my"); });

    shell.insertBefore(btn, document.getElementById("hamburger"));
    if (menu) {
      const mbtn = btn.cloneNode(true);
      mbtn.addEventListener("click", () => {
        const cur = localStorage.getItem("lang") || "es";
        applyLang(cur === "es" ? "en" : "es");
        menu.classList.remove("active");
        document.body.classList.remove("nav-open");
        const ham = document.getElementById("hamburger");
        if (ham) { ham.classList.remove("active"); ham.setAttribute("aria-expanded", "false"); }
      });
      mbtn.addEventListener("mousemove", (e) => {
        const r = mbtn.getBoundingClientRect();
        mbtn.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
        mbtn.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
      });
      mbtn.addEventListener("mouseleave", () => { mbtn.style.removeProperty("--mx"); mbtn.style.removeProperty("--my"); });
      menu.appendChild(mbtn);
    }

    const saved = localStorage.getItem("lang") || "es";
    applyLang(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }
})();
