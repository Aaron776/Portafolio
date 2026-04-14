// app.js - Versión corregida para las barras de progreso
document.addEventListener("DOMContentLoaded", function () {
  // Función específica para inicializar las barras de progreso
  function initProgressBars() {
    // Inicializar todas las barras con width 0%
    document.querySelectorAll(".progress-fill").forEach(bar => {
      bar.style.width = "0%";
    });
    console.log("Barras de progreso inicializadas:", document.querySelectorAll(".progress-fill").length);
  }

  // Animación inicial de carga
  function initPageLoadAnimations() {
    // Animación del navbar
    anime({
      targets: ".navbar",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutCubic",
    });

    // Animación del hero section
    anime({
      targets: ".hero-title",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutCubic",
      delay: 300,
    });

    anime({
      targets: ".hero-subtitle",
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutCubic",
      delay: 500,
    });

    anime({
      targets: ".hero-buttons",
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutCubic",
      delay: 700,
    });

    // Animación de las formas flotantes
    anime({
      targets: ".floating-shape",
      translateY: function () {
        return [0, anime.random(-20, 20)];
      },
      translateX: function () {
        return [0, anime.random(-15, 15)];
      },
      duration: function () {
        return anime.random(2000, 4000);
      },
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
    });

    // Animación de símbolos flotantes
    anime({
      targets: ".symbol",
      translateY: function () {
        return [0, anime.random(-30, 30)];
      },
      rotate: function () {
        return [0, anime.random(-10, 10)];
      },
      duration: function () {
        return anime.random(3000, 5000);
      },
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
      delay: function (el, i) {
        return i * 200;
      },
    });
  }

  // Animaciones al hacer scroll - VERSIÓN CORREGIDA
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.2, // Aumentado para mejor detección
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          if (element.classList.contains("about-image")) {
            anime({
              targets: element,
              translateX: [-100, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutCubic",
            });
          } else if (element.classList.contains("about-content")) {
            anime({
              targets: element,
              translateX: [100, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutCubic",
            });
          } else if (element.classList.contains("experience-card")) {
            anime({
              targets: element,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 600,
              easing: "easeOutCubic",
              delay: anime.stagger(200),
            });
          } else if (element.classList.contains("project-card")) {
            anime({
              targets: element,
              translateY: [60, 0],
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 800,
              easing: "easeOutBack",
              delay: anime.stagger(150, { grid: [2, 3], from: "center" }),
            });
          } else if (element.classList.contains("skill-category")) {
            anime({
              targets: element,
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 600,
              easing: "easeOutCubic",
              delay: anime.stagger(100),
            });
          } else if (element.classList.contains("progress-item")) {
            // ANIMACIÓN CORREGIDA PARA BARRAS DE PROGRESO
            const progressFill = element.querySelector(".progress-fill");
            if (progressFill) {
              const targetWidth = progressFill.getAttribute("data-width") + "%";
              anime({
                targets: progressFill,
                width: targetWidth,
                duration: 1800,
                easing: "easeOutQuart",
                delay: 300
              });
            }
            
            // También animar el item completo
            anime({
              targets: element,
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutCubic",
            });
          } else if (element.classList.contains("progress-fill")) {
            // Animación directa para las barras (backup)
            const targetWidth = element.getAttribute("data-width") + "%";
            anime({
              targets: element,
              width: targetWidth,
              duration: 1800,
              easing: "easeOutQuart",
              delay: 300
            });
          } else if (
            element.classList.contains("contact-info") ||
            element.classList.contains("contact-form")
          ) {
            anime({
              targets: element,
              translateX: element.classList.contains("contact-info")
                ? [-50, 0]
                : [50, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutCubic",
            });
          } else if (element.classList.contains("section-title")) {
            anime({
              targets: element,
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutCubic",
            });
          } else if (element.classList.contains("section-subtitle")) {
            anime({
              targets: element,
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutCubic",
              delay: 200,
            });
          }
        }
      });
    }, observerOptions);

    // Observar elementos para animaciones - LISTA ACTUALIZADA
    const elementsToAnimate = [
      ".about-image",
      ".about-content",
      ".experience-card",
      ".project-card",
      ".skill-category",
      ".progress-item",
      ".progress-fill", // AÑADIDO ESPECÍFICAMENTE
      ".contact-info",
      ".contact-form",
      ".section-title",
      ".section-subtitle",
    ];

    elementsToAnimate.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        observer.observe(el);
      });
    });
  }

  // Animación de partículas en el hero
  function initParticles() {
    const heroSection = document.querySelector(".hero");
    if (!heroSection) return;

    const particlesContainer = document.createElement("div");
    particlesContainer.className = "particles-container";
    particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        `;
    heroSection.appendChild(particlesContainer);

    // Crear partículas
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #3b82f6;
                border-radius: 50%;
                opacity: 0.3;
            `;

      // Posición aleatoria
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";

      particlesContainer.appendChild(particle);

      // Animación de partícula
      anime({
        targets: particle,
        translateY: function () {
          return [0, anime.random(-100, 100)];
        },
        translateX: function () {
          return [0, anime.random(-100, 100)];
        },
        opacity: [0.3, 0.8, 0.3],
        duration: anime.random(3000, 6000),
        easing: "easeInOutSine",
        loop: true,
        direction: "alternate",
      });
    }
  }

  // Animación de habilidades al hover
  function initSkillHoverAnimations() {
    document.querySelectorAll(".skill-item").forEach((skill) => {
      skill.addEventListener("mouseenter", function () {
        anime({
          targets: this,
          scale: 1.1,
          backgroundColor: "#dbeafe",
          duration: 300,
          easing: "easeOutBack",
        });
      });

      skill.addEventListener("mouseleave", function () {
        anime({
          targets: this,
          scale: 1,
          backgroundColor: "#f3f4f6",
          duration: 300,
          easing: "easeOutBack",
        });
      });
    });
  }

  // Animación de botones
  function initButtonAnimations() {
    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("mouseenter", function () {
        anime({
          targets: this,
          scale: 1.05,
          duration: 200,
          easing: "easeOutBack",
        });
      });

      button.addEventListener("mouseleave", function () {
        anime({
          targets: this,
          scale: 1,
          duration: 200,
          easing: "easeOutBack",
        });
      });

      button.addEventListener("click", function (e) {
        // Efecto de onda al hacer click
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    left: ${x}px;
                    top: ${y}px;
                    transform: scale(0);
                    pointer-events: none;
                `;

        this.style.position = "relative";
        this.style.overflow = "hidden";
        this.appendChild(ripple);

        anime({
          targets: ripple,
          scale: 2,
          opacity: 0,
          duration: 600,
          easing: "easeOutCubic",
          complete: function () {
            ripple.remove();
          },
        });
      });
    });
  }

  // Animación del navbar al hacer scroll
  function initNavbarAnimation() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        anime({
          targets: navbar,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          duration: 300,
          easing: "easeOutCubic",
        });
      } else {
        navbar.classList.remove("scrolled");
        anime({
          targets: navbar,
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          duration: 300,
          easing: "easeOutCubic",
        });
      }
    });
  }

  // Animación del menú hamburguesa
  function initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");

      if (this.classList.contains("active")) {
        anime({
          targets: navMenu,
          translateX: ["-100%", 0],
          opacity: [0, 1],
          duration: 400,
          easing: "easeOutCubic",
        });

        // Animación de los enlaces del menú
        anime({
          targets: ".nav-link, .nav-contact-btn",
          translateX: [-20, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
          duration: 300,
          easing: "easeOutCubic",
        });
      } else {
        anime({
          targets: navMenu,
          translateX: [0, "-100%"],
          opacity: [1, 0],
          duration: 400,
          easing: "easeInCubic",
        });
      }
    });
  }

  // Efecto de escritura en el título - VERSIÓN SIMPLE
  function initTypewriterEffect() {
    const heroTitle = document.querySelector(".hero-title");
    if (!heroTitle) return;
    
    // Solo aplicar una animación de fade in sin typewriter
    anime({
      targets: '.hero-title .gradient-text',
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1500,
      easing: 'easeOutCubic',
      delay: 800
    });
  }

  // Animación de carga inicial
  function initPageLoader() {
    const loader = document.createElement("div");
    loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

    const loaderText = document.createElement("div");
    loaderText.textContent = "Aaron Ortiz";
    loaderText.style.cssText = `
            color: white;
            font-size: 2.5rem;
            font-weight: bold;
            opacity: 0;
        `;

    loader.appendChild(loaderText);
    document.body.appendChild(loader);

    // Animación del loader
    anime({
      targets: loaderText,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeOutCubic",
    });

    // Quitar loader después de animación
    setTimeout(() => {
      anime({
        targets: loader,
        opacity: [1, 0],
        duration: 500,
        easing: "easeOutCubic",
        complete: function () {
          loader.remove();
          // Iniciar animaciones de la página
          initPageLoadAnimations();
        },
      });
    }, 1500);
  }

  // Manejo del formulario de contacto
  function initContactForm() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Verificación de Honeypot (Anti-spam)
        const honeypot = document.getElementById("honeypot");
        if (honeypot && honeypot.value !== "") {
          console.log("Bot detectado por Honeypot.");
          return; // Detiene el envío silenciosamente
        }

        // Animación de envío
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        anime({
          targets: submitBtn,
          scale: 0.9,
          duration: 200,
          easing: "easeOutCubic",
        });

        submitBtn.innerHTML = "<span>⏳</span> Enviando...";
        submitBtn.disabled = true;

        // Simular envío (reemplaza con tu lógica real)
        setTimeout(() => {
          anime({
            targets: submitBtn,
            scale: 1,
            duration: 200,
            easing: "easeOutCubic",
          });

          submitBtn.innerHTML = "<span>✅</span> ¡Enviado!";

          // Mostrar mensaje de éxito
          const successMessage = document.createElement("div");
          successMessage.textContent =
            "¡Mensaje enviado con éxito! Te contactaré pronto.";
          successMessage.style.cssText = `
                        background: #10b981;
                        color: white;
                        padding: 1rem;
                        border-radius: 0.5rem;
                        margin-top: 1rem;
                        text-align: center;
                        opacity: 0;
                    `;

          contactForm.appendChild(successMessage);

          anime({
            targets: successMessage,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: "easeOutCubic",
          });

          // Resetear después de 3 segundos
          setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            anime({
              targets: successMessage,
              opacity: [1, 0],
              translateY: [0, -20],
              duration: 500,
              easing: "easeInCubic",
              complete: function () {
                successMessage.remove();
              },
            });
          }, 3000);
        }, 2000);
      });
    }
  }

  // Inicializar todas las animaciones
  function initAllAnimations() {
    initProgressBars(); // INICIALIZAR BARRAS PRIMERO
    initPageLoader();
    initScrollAnimations();
    initParticles();
    initSkillHoverAnimations();
    initButtonAnimations();
    initNavbarAnimation();
    initHamburgerMenu();
    initTypewriterEffect();
    initContactForm();
  }

  // Iniciar
  initAllAnimations();
});