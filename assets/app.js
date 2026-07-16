(function () {
  'use strict';
  var doc = document;

  // Footer year
  var y = doc.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Header shadow on scroll
  var header = doc.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var burger = doc.getElementById('hamburger');
  var menu = doc.getElementById('mobileMenu');
  var scrim = doc.getElementById('menuScrim');

  function setMenu(open) {
    if (!menu || !burger) return;
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (scrim) scrim.hidden = !open;
    doc.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  if (scrim) scrim.addEventListener('click', function () { setMenu(false); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Offset-aware smooth scroll for same-page anchors (+ close menu)
  doc.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var el = doc.querySelector(id);
      if (!el) return;
      e.preventDefault();
      setMenu(false);
      var top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Scroll reveal
  var reveals = doc.querySelectorAll('.reveal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }
})();
