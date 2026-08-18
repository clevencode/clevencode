/* Clevenider Petit — portfólio JS */

(function () {
  'use strict';

  var phrases = [
    '@clevencode',
    'Futuro Desenvolvedor Front-End',
    'Amante de Design Minimalista',
    'Estudante de ADS',
    'Inspirado pela Apple'
  ];
  var typingEl = document.getElementById('typingText');
  var phraseIdx = 0;
  var charIdx = 0;
  var deleting = false;

  function type() {
    if (!typingEl) return;
    var current = phrases[phraseIdx];
    if (deleting) {
      charIdx--;
    } else {
      charIdx++;
    }

    typingEl.innerHTML =
      current.substring(0, charIdx) + '<span class="cursor"></span>';

    var speed = deleting ? 30 : 60;

    if (!deleting && charIdx === current.length) {
      speed = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  if (typingEl) setTimeout(type, 800);

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('main .section, .hero');

  function onScroll() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 8);

    var current = 'hero';
    sections.forEach(function (section) {
      var top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id') || current;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.classList.toggle('open');
      navMenu.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
