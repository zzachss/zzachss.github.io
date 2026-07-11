/* 陳谷維 Zach Chen — resume interactions
   Language toggle · theme toggle · print · scroll reveal
   No dependencies. Fails safe: content stays visible if JS is off. */
(function () {
  "use strict";

  var root = document.documentElement;
  var LANG_KEY = "cv-lang";
  var THEME_KEY = "cv-theme";

  /* ---------- Language ---------- */
  function applyLang(lang) {
    if (lang !== "en" && lang !== "zh") lang = "zh";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "zh-Hant");
    var btns = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute(
        "aria-pressed",
        btns[i].getAttribute("data-set-lang") === lang ? "true" : "false"
      );
    }
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  var savedLang;
  try { savedLang = localStorage.getItem(LANG_KEY); } catch (e) {}
  applyLang(savedLang || root.getAttribute("data-lang") || "zh");

  document.addEventListener("click", function (ev) {
    var t = ev.target.closest ? ev.target.closest("[data-set-lang]") : null;
    if (t) applyLang(t.getAttribute("data-set-lang"));
  });

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    if (theme !== "light" && theme !== "dark") theme = "dark";
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  var savedTheme;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
  if (!savedTheme) {
    var prefersLight =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    savedTheme = prefersLight ? "light" : "dark";
  }
  applyTheme(savedTheme);

  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Print ---------- */
  var printBtn = document.getElementById("printBtn");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

  /* ---------- Scroll reveal (progressive enhancement) ---------- */
  if ("IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var targets = document.querySelectorAll(".section, .hero");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.add("reveal");
      io.observe(targets[i]);
    }
  }
})();
