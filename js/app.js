// app.js — Sala de Control · tilt 3D, telemetría, reveals
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

  /* ---------- Entrada del hero (un solo momento autorizado) ---------- */
  function initHeroEntrance() {
    if (reduceMotion) return;
    var title = document.querySelector(".hero-title");
    var subtitle = document.querySelector(".hero-subtitle");
    var buttons = document.querySelector(".hero-buttons");
    var radar = document.querySelector(".radar");

    if (window.anime) {
      if (title) {
        anime({ targets: title, translateY: [26, 0], opacity: [0, 1], duration: 800, easing: "easeOutCubic", delay: 120 });
      }
      if (subtitle) {
        anime({ targets: subtitle, translateY: [22, 0], opacity: [0, 1], duration: 800, easing: "easeOutCubic", delay: 280 });
      }
      if (buttons) {
        anime({ targets: buttons, translateY: [18, 0], opacity: [0, 1], duration: 800, easing: "easeOutCubic", delay: 440 });
      }
      if (radar) {
        anime({ targets: radar, scale: [0.94, 1], opacity: [0, 1], duration: 900, easing: "easeOutCubic", delay: 340 });
      }
    }
  }

  /* ---------- Parallax por capas del hero ---------- */
  function initHeroParallax() {
    var stage = document.getElementById("hero-stage");
    var hero = document.querySelector(".hero");
    if (!stage || !hero || reduceMotion || !hasFinePointer) return;

    var layers = stage.querySelectorAll(".layer");
    var raf = null;
    var tx = 0;
    var ty = 0;

    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left - r.width / 2) / r.width; // -0.5..0.5
      ty = (e.clientY - r.top - r.height / 2) / r.height;
      if (!raf) {
        raf = requestAnimationFrame(function () {
          layers.forEach(function (layer) {
            var depth = parseFloat(layer.getAttribute("data-depth") || "0.3");
            layer.style.transform = "translate3d(" + tx * depth * 46 + "px, " + ty * depth * 34 + "px, 0)";
          });
          raf = null;
        });
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
      var rx = (0.5 - py) * 9;
      var ry = (px - 0.5) * 11;
      el.style.setProperty("--rx", rx.toFixed(2) + "deg");
      el.style.setProperty("--ry", ry.toFixed(2) + "deg");
      el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
    }

    panels.forEach(function (el) {
      if (!hasFinePointer) return; // touch: sin tilt
      el.addEventListener("pointermove", function (e) { handleMove(e, el); });
      el.addEventListener("pointerleave", function () {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ---------- Conteo de telemetría ---------- */
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

  /* ---------- Revelado por secciones + línea de scan ---------- */
  function initScrollReveal() {
    var headers = document.querySelectorAll(".section-header");
    var headerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          headerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    headers.forEach(function (h) { headerObserver.observe(h); });

    // Barras de progreso: crecen al entrar en pantalla
    initProgressBars();

    var progressObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var bar = entry.target;
          if (bar.dataset.done) return;
          bar.dataset.done = "1";
          var w = parseFloat(bar.getAttribute("data-width") || "0");
          if (reduceMotion) {
            bar.style.transform = "scaleX(" + w / 100 + ")";
          } else {
            requestAnimationFrame(function () { bar.style.transform = "scaleX(" + w / 100 + ")"; });
          }
          progressObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll(".progress-fill").forEach(function (f) { progressObserver.observe(f); });
  }

  function initProgressBars() {
    document.querySelectorAll(".progress-fill").forEach(function (bar) {
      bar.style.transform = "scaleX(0)";
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
          "background:rgba(123,242,224,0.28);border-radius:50%;" +
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
    initHeroParallax();
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