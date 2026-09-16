// app.js — Estudio de Sistemas · planos 3D, tilt, parallax, reveals
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Interruptor: navbar al hacer scroll ---------- */
  function initNavbar() {
    var navbar = document.getElementById("navbar");
    if (!navbar) return;

    var onScroll = function () {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Menú hamburguesa ---------- */
  function initHamburger() {
    var hamburger = document.getElementById("hamburger");
    var navMenu = document.getElementById("nav-menu");
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener("click", function () {
      var open = !hamburger.classList.contains("active");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", String(open));
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("active");
      });
    });

    document.addEventListener("click", function (e) {
      if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("active");
      }
    });
  }

  /* ---------- Entrada del hero ---------- */
  function initHeroEntrance() {
    if (reduceMotion) return;
    var title = document.querySelector(".hero-title");
    var subtitle = document.querySelector(".hero-subtitle");
    var buttons = document.querySelector(".hero-buttons");
    var stage = document.getElementById("hero-stage");

    if (window.anime) {
      if (title) {
        anime({ targets: title, translateY: [30, 0], opacity: [0, 1], duration: 820, easing: "easeOutCubic", delay: 120 });
      }
      if (subtitle) {
        anime({ targets: subtitle, translateY: [24, 0], opacity: [0, 1], duration: 820, easing: "easeOutCubic", delay: 260 });
      }
      if (buttons) {
        anime({ targets: buttons, translateY: [18, 0], opacity: [0, 1], duration: 820, easing: "easeOutCubic", delay: 400 });
      }
      if (stage) {
        var planes = stage.querySelectorAll(".plane");
        planes.forEach(function (plane, i) {
          var card = plane.querySelector(".plane-card");
          if (card) {
            anime({
              targets: card,
              translateY: [26, 0],
              scale: [0.88, 1],
              duration: 950,
              easing: "easeOutCubic",
              delay: 300 + i * 120
            });
          }
          anime({
            targets: plane,
            opacity: [0, 1],
            duration: 950,
            easing: "linear",
            delay: 300 + i * 120
          });
        });
        var shadow = stage.querySelector(".plane-shadow");
        anime({ targets: shadow, opacity: [0, 1], duration: 1000, delay: 700 });
      }
    }
  }

  /* ---------- Escena hero: tilt + parallax de planos ---------- */
  function initHeroScene() {
    var stage = document.getElementById("hero-stage");
    var scene = document.getElementById("plane-scene");
    if (!stage || !scene || reduceMotion) return;

    var planes = Array.prototype.slice.call(stage.querySelectorAll(".plane"));
    var raf = null;
    var tx = 0;
    var ty = 0;

    function paint() {
      var rx = -ty * 7;
      var ry = tx * 9;
      scene.style.setProperty("--rx", rx.toFixed(2) + "deg");
      scene.style.setProperty("--ry", ry.toFixed(2) + "deg");
      planes.forEach(function (plane) {
        var depth = parseFloat(plane.getAttribute("data-depth") || "0.8");
        var rot = getComputedStyle(plane).getPropertyValue("--rot") || "0deg";
        plane.style.transform =
          "translate3d(" + (tx * depth * 22).toFixed(1) + "px, " + (ty * depth * 14).toFixed(1) + "px, 0) rotate(" + rot.trim() + ")";
      });
      raf = null;
    }

    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect();
      tx = (e.clientX - r.left - r.width / 2) / r.width;
      ty = (e.clientY - r.top - r.height / 2) / r.height;
      if (!raf) {
        raf = requestAnimationFrame(paint);
      }
    });

    stage.addEventListener("pointerleave", function () {
      tx = 0;
      ty = 0;
      if (!raf) {
        raf = requestAnimationFrame(paint);
      }
    });
  }

  /* ---------- Tilt 3D en los paneles ---------- */
  function initTilt3D() {
    if (reduceMotion) return;
    var panels = document.querySelectorAll("[data-tilt]");
    if (!panels.length) return;

    function handleMove(e, el) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      var rx = (0.5 - py) * 8;
      var ry = (px - 0.5) * 10;
      el.style.setProperty("--rx", rx.toFixed(2) + "deg");
      el.style.setProperty("--ry", ry.toFixed(2) + "deg");
      el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
    }

    panels.forEach(function (el) {
      if (!hasFinePointer) return;
      el.addEventListener("pointermove", function (e) { handleMove(e, el); });
      el.addEventListener("pointerleave", function () {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ---------- Conteo ---------- */
  function initCountUp() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var el = entry.target;
        if (!entry.isIntersecting || el.dataset.done) return;
        el.dataset.done = "1";
        var target = parseInt(el.getAttribute("data-count"), 10);
        var suffix = el.getAttribute("data-suffix") || "";
        var dur = reduceMotion ? 0 : 1500;
        var start = performance.now();

        function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        }
        if (reduceMotion) {
          el.textContent = target + suffix;
        } else {
          requestAnimationFrame(tick);
        }
        observer.unobserve(el);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Revelado por secciones + progreso ---------- */
  function initScrollReveal() {
    var reveals = document.querySelectorAll(".reveal");
    var headers = document.querySelectorAll(".section-header");

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    reveals.forEach(function (el) { revealObserver.observe(el); });

    var headerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          headerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    headers.forEach(function (el) { headerObserver.observe(el); });

    // Barras de progreso: crecen al entrar en pantalla
    // Se observa la pista (no el relleno), porque el relleno con scaleX(0)
    // tiene caja de ancho cero y nunca intersecta el observer.
    var trackObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var track = entry.target;
        var bar = track.querySelector(".progress-fill");
        if (!bar || bar.dataset.done) return;
        bar.dataset.done = "1";
        var w = parseFloat(bar.getAttribute("data-width") || "0");
        if (reduceMotion) {
          bar.style.transform = "scaleX(" + (w / 100).toFixed(3) + ")";
        } else {
          requestAnimationFrame(function () {
            bar.style.transform = "scaleX(" + (w / 100).toFixed(3) + ")";
          });
        }
        trackObserver.unobserve(track);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll(".progress-bar").forEach(function (track) {
      var bar = track.querySelector(".progress-fill");
      if (bar) bar.style.transform = "scaleX(0)";
      trackObserver.observe(track);
    });
  }

  /* ---------- Onda al hacer clic en botones ---------- */
  function initButtonRipple() {
    if (reduceMotion) return;
    if (!window.anime) return;
    document.querySelectorAll(".btn, .repo-btn").forEach(function (button) {
      button.addEventListener("click", function (e) {
        var rect = button.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height) * 1.4;
        var x = e.clientX - rect.left - size / 2;
        var y = e.clientY - rect.top - size / 2;
        var ripple = document.createElement("span");
        ripple.style.cssText =
          "position:absolute;width:" + size + "px;height:" + size + "px;" +
          "background:rgba(251,249,243,0.35);border-radius:50%;" +
          "left:" + x + "px;top:" + y + "px;transform:scale(0);pointer-events:none;";
        button.style.position = "relative";
        button.style.overflow = "hidden";
        button.appendChild(ripple);
        anime({
          targets: ripple,
          scale: 1,
          opacity: 0,
          duration: 650,
          easing: "easeOutCubic",
          complete: function () { ripple.remove(); }
        });
      });
    });
  }

  /* ---------- Arranque ---------- */
  function init() {
    initNavbar();
    initHamburger();
    initHeroEntrance();
    initHeroScene();
    initTilt3D();
    initCountUp();
    initScrollReveal();
    initButtonRipple();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();