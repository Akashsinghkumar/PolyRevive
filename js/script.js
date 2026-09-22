/**
 * PolyRevive Innovation Private Limited
 * Advanced Animation & Interaction Suite
 * Integrating WOW.js, GSAP SplitText, MagicCursor, and ScrollTrigger
 */

(function ($) {
  "use strict";

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------------------------
     1. Initialize WOW.js for Scroll Animations
     -------------------------------------------------------------------------- */
  function initWow() {
    if (typeof WOW !== 'undefined') {
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 60,
        mobile: true,
        live: true,
      });
      wow.init();
    }
  }

  /* --------------------------------------------------------------------------
     2. Initialize GSAP Plugins
     -------------------------------------------------------------------------- */
  function initPlugins() {
    if (typeof gsap !== 'undefined') {
      if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
      }
      if (typeof SplitText !== 'undefined') {
        gsap.registerPlugin(SplitText);
      }
    }
  }

  /* --------------------------------------------------------------------------
     3. Heading & Word-by-Word SplitText Scroll Animations
     -------------------------------------------------------------------------- */
    function initHeadingAnimation() {
    if (prefersReducedMotion || typeof gsap === 'undefined' || typeof SplitText === 'undefined') return;

    // Text Anime Style 3: Smooth Character Stagger Reveal
    const style3Elements = document.querySelectorAll('.text-anime-style-3');
    style3Elements.forEach((element) => {
      try {
        if (element.animation) {
          element.animation.progress(1).kill();
          if (element.split) element.split.revert();
        }

        element.split = new SplitText(element, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });

        gsap.set(element, { perspective: 400 });
        gsap.set(element.split.chars, {
          opacity: 0,
          x: 40,
        });

        element.animation = gsap.to(element.split.chars, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "back.out(1.2)",
          stagger: 0.04,
        });
      } catch (err) {
        console.warn('SplitText style 3 error:', err);
      }
    });

    // Text Anime Style 2: Smooth Character Slide & Fade
    const style2Elements = document.querySelectorAll('.text-anime-style-2');
    style2Elements.forEach((element) => {
      try {
        const split = new SplitText(element, { type: "chars,words" });
        gsap.from(split.chars, {
          duration: 1.3,
          delay: 0.1,
          x: 30,
          autoAlpha: 0,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } catch (err) {
        console.warn('SplitText style 2 error:', err);
      }
    });

    // Text Anime Style 1: Word-by-Word Slide & Fade
    const style1Elements = document.querySelectorAll('.text-anime-style-1');
    style1Elements.forEach((element) => {
      try {
        const split = new SplitText(element, { type: "chars,words" });
        gsap.from(split.words, {
          duration: 1.3,
          delay: 0.1,
          y: 25,
          autoAlpha: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } catch (err) {
        console.warn('SplitText style 1 error:', err);
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. GSAP Curtain Reveal for Images
     -------------------------------------------------------------------------- */
    function initImageReveal() {
    if (prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      const image = container.querySelector("img");
      if (!image) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        duration: 1.2,
        xPercent: -100,
        ease: "power2.out",
      });
      tl.from(image, {
        duration: 1.2,
        xPercent: 100,
        scale: 1.15,
        delay: -1.2,
        ease: "power2.out",
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. Hero Entrance Sequence
     -------------------------------------------------------------------------- */
  function initHeroAnimation() {
    if (prefersReducedMotion || typeof gsap === 'undefined') return;

    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.1,
    });

    tl.fromTo('.site-navbar', { y: -25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, clearProps: 'all' });
    
    if (document.querySelector('.hero-eyebrow')) {
      tl.fromTo('.hero-eyebrow', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, clearProps: 'all' }, '-=0.3');
    }

    if (document.querySelector('.hero-script-top')) {
      tl.fromTo('.hero-script-top', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6, clearProps: 'all' }, '-=0.4');
    }

    tl.fromTo('.hero-title', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, clearProps: 'all' }, '-=0.4');
    tl.fromTo('.hero-paragraph', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65, clearProps: 'all' }, '-=0.45');
    tl.fromTo('.hero-cta-group .btn-poly', { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, clearProps: 'all' }, '-=0.35');
    tl.fromTo('.hero-glass-badges .hero-badge-card', { opacity: 0, scale: 0.94, y: 12 }, { opacity: 1, scale: 1, y: 0, stagger: 0.08, duration: 0.55, ease: 'back.out(1.2)', clearProps: 'all' }, '-=0.3');
  }

  /* --------------------------------------------------------------------------
     6. Hover, Banner, and Interactive Delegations
     -------------------------------------------------------------------------- */
  function initInteractions() {
    // Interactive hover bounce on buttons
    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      document.querySelectorAll('.btn-poly, .nav-btn-partner, .alpla-banner-btn').forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { y: -2, scale: 1.025, duration: 0.2, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { y: 0, scale: 1, duration: 0.2, ease: 'power2.out' });
        });
      });
    }

    // Process steps active toggle
    const steps = document.querySelectorAll('.process-step-item');
    steps.forEach((step) => {
      step.addEventListener('mouseenter', () => {
        steps.forEach((s) => s.classList.remove('active'));
        step.classList.add('active');
      });
    });

    // Full-width banner clickable delegation
    document.querySelectorAll('.alpla-banner-item').forEach((banner) => {
      banner.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
          const link = banner.querySelector('.alpla-banner-btn');
          if (link && link.getAttribute('href')) {
            window.location.href = link.getAttribute('href');
          }
        }
      });
    });

    // Smooth anchor navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#' && targetId.length > 1) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            const topOffset = targetEl.getBoundingClientRect().top + window.pageYOffset - 85;
            window.scrollTo({
              top: topOffset,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. Sticky Navbar & Scrollspy
     -------------------------------------------------------------------------- */
  function initNavbar() {
    const navbar = document.querySelector('.site-navbar');
    const navLinks = document.querySelectorAll('.site-navbar .nav-link');
    const sections = document.querySelectorAll('section[id], header[id]');

    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      let currentId = '';
      const scrollPosition = window.scrollY + 130;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentId = section.getAttribute('id');
        }
      });

      if (currentId) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Robust Mobile Nav Collapse & Dropdown Handler
    const toggler = document.querySelector('.site-navbar .navbar-toggler');
    const mobileNavCollapse = document.getElementById('navbarPolyContent');

    if (toggler && mobileNavCollapse) {
      const toggleIcon = toggler.querySelector('span') || toggler.querySelector('i');

      toggler.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(mobileNavCollapse, { toggle: false });
          bsCollapse.toggle();
        } else {
          // Fallback toggle
          mobileNavCollapse.classList.toggle('show');
        }

        const isShown = mobileNavCollapse.classList.contains('show');
        toggler.setAttribute('aria-expanded', isShown ? 'true' : 'false');
        if (toggleIcon) {
          if (isShown) {
            toggleIcon.className = 'bi bi-x-lg fs-2';
          } else {
            toggleIcon.className = 'bi bi-list fs-2';
          }
        }
      });

      // Mobile dropdown handling
      document.querySelectorAll('.site-navbar .dropdown-toggle').forEach((dropToggle) => {
        dropToggle.addEventListener('click', function (e) {
          if (window.innerWidth < 992) {
            e.preventDefault();
            e.stopPropagation();
            const parent = this.closest('.dropdown');
            const dropMenu = parent ? parent.querySelector('.dropdown-menu') : null;
            if (dropMenu) {
              const isOpen = dropMenu.classList.contains('show');
              if (isOpen) {
                dropMenu.classList.remove('show');
                this.classList.remove('show');
                this.setAttribute('aria-expanded', 'false');
              } else {
                // Close any other open dropdowns first
                document.querySelectorAll('.site-navbar .dropdown-menu.show').forEach((menu) => {
                  menu.classList.remove('show');
                });
                document.querySelectorAll('.site-navbar .dropdown-toggle.show').forEach((tgl) => {
                  tgl.classList.remove('show');
                  tgl.setAttribute('aria-expanded', 'false');
                });

                dropMenu.classList.add('show');
                this.classList.add('show');
                this.setAttribute('aria-expanded', 'true');
              }
            }
          }
        });
      });

      // Close mobile nav on link click
      document.querySelectorAll('.site-navbar .nav-link:not(.dropdown-toggle), .site-navbar .dropdown-item, .site-navbar .nav-btn-partner').forEach((link) => {
        link.addEventListener('click', () => {
          if (window.innerWidth < 992 && mobileNavCollapse.classList.contains('show')) {
            if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
              const bsCollapse = bootstrap.Collapse.getOrCreateInstance(mobileNavCollapse, { toggle: false });
              bsCollapse.hide();
            } else {
              mobileNavCollapse.classList.remove('show');
            }
            toggler.setAttribute('aria-expanded', 'false');
            if (toggleIcon) toggleIcon.className = 'bi bi-list fs-2';
          }
        });
      });

      // Close mobile nav on outside click
      document.addEventListener('click', function (e) {
        if (window.innerWidth < 992 && mobileNavCollapse.classList.contains('show')) {
          if (!navbar.contains(e.target)) {
            if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
              const bsCollapse = bootstrap.Collapse.getOrCreateInstance(mobileNavCollapse, { toggle: false });
              bsCollapse.hide();
            } else {
              mobileNavCollapse.classList.remove('show');
            }
            toggler.setAttribute('aria-expanded', 'false');
            if (toggleIcon) toggleIcon.className = 'bi bi-list fs-2';
          }
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     8. WhatsApp Floating Widget & Popup Controller
     -------------------------------------------------------------------------- */
  function initWhatsAppWidget() {
    const toggleBtn = document.getElementById('whatsappToggleBtn');
    const popup = document.getElementById('whatsappChatPopup');
    const closeBtn = document.getElementById('whatsappCloseBtn');

    if (!toggleBtn || !popup) return;

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.classList.toggle('active');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.remove('active');
      });
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (popup.classList.contains('active') && !popup.contains(e.target) && !toggleBtn.contains(e.target)) {
        popup.classList.remove('active');
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && popup.classList.contains('active')) {
        popup.classList.remove('active');
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. Main Initialization
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initPlugins();
    initWow();
    initHeroAnimation();
    initImageReveal();
    initInteractions();
    initNavbar();
    initWhatsAppWidget();

    // Initialize headings when fonts are ready
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        initHeadingAnimation();
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      });
    } else {
      window.addEventListener('load', () => {
        initHeadingAnimation();
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      });
    }

    // Window load trigger refresh
    window.addEventListener('load', () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  });

})(typeof jQuery !== 'undefined' ? jQuery : null);
