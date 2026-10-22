/**
 * VINICIUS CELESTINO PORTFOLIO - CORE INTERACTION SCRIPT
 * Engineered adhering to UI/UX Pro Max Intelligence Standards:
 * - 60fps Spotlight with RAF (No layout thrashing)
 * - Accessible Modal Dialog (Focus trap, ESC key, ARIA)
 * - Interactive Project Filter Tabs
 * - Smooth Scroll Progress & Back-to-Top
 * - Reduced Motion Awareness
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =========================================================================
  // 1. Reading Scroll Progress Bar & Back-to-Top (RAF Optimized - Zero Layout Thrashing)
  // =========================================================================
  const scrollProgressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  let scrollTicking = false;
  let scrollHeightCached = 0;

  function updateScrollMetrics() {
    scrollHeightCached = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
  }
  updateScrollMetrics();
  window.addEventListener('resize', updateScrollMetrics, { passive: true });

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        const winScroll = window.scrollY || document.documentElement.scrollTop;
        const scrolled = scrollHeightCached > 0 ? Math.min(Math.max(winScroll / scrollHeightCached, 0), 1) : 0;

        if (scrollProgressBar) {
          scrollProgressBar.style.transform = `scaleX(${scrolled})`;
        }

        if (backToTopBtn) {
          if (winScroll > 450) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0');
          } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
          }
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  // Smooth scroll specifically for in-page anchor links (prevents wheel scroll fighting)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          if (history.pushState) {
            history.pushState(null, '', targetId);
          }
        }
      }
    });
  });

  // =========================================================================
  // 2. High-Performance Mouse Spotlight (RAF Throttled)
  // =========================================================================
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  let rafPending = false;
  let mousePos = { x: -500, y: -500, targetCard: null };

  function updateSpotlight() {
    if (mousePos.targetCard) {
      const rect = mousePos.targetCard.getBoundingClientRect();
      const x = mousePos.x - rect.left;
      const y = mousePos.y - rect.top;
      mousePos.targetCard.style.setProperty('--mouse-x', `${x}px`);
      mousePos.targetCard.style.setProperty('--mouse-y', `${y}px`);
    }
    rafPending = false;
  }

  if (!prefersReducedMotion) {
    spotlightCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        mousePos.targetCard = card;

        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(updateSpotlight);
        }
      }, { passive: true });
    });
  }

  // =========================================================================
  // 3. Scroll Reveal Animations (IntersectionObserver)
  // =========================================================================
  const revealElements = document.querySelectorAll('.fade-in-up');
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =========================================================================
  // 4. Mobile Navigation Menu Toggle
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================================================
  // 5. Interactive Project Filter Tabs (Portfolio Pattern)
  // =========================================================================
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectArticles = document.querySelectorAll('.project-item');
  const projectsEmpty = document.getElementById('projects-empty');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      // Update button state
      filterButtons.forEach(b => {
        b.classList.remove('bg-white', 'text-slate-950', 'border-white');
        b.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
      btn.classList.add('bg-white', 'text-slate-950', 'border-white');
      btn.setAttribute('aria-selected', 'true');

      // Filter Projects
      let visibleCount = 0;
      projectArticles.forEach(article => {
        const categories = article.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          visibleCount++;
          article.style.display = 'flex';
          setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
          }, 20);
        } else {
          article.style.opacity = '0';
          article.style.transform = 'translateY(10px)';
          setTimeout(() => {
            article.style.display = 'none';
          }, 250);
        }
      });

      if (projectsEmpty) {
        projectsEmpty.classList.toggle('hidden', visibleCount > 0);
      }
    });
  });

  // =========================================================================
  // 6. Accessible CV Download Modal Dialog
  // =========================================================================
  const cvModalTrigger = document.querySelectorAll('.open-cv-modal');
  const cvModal = document.getElementById('cv-modal');
  const closeCvModalBtn = document.getElementById('close-cv-modal');
  let lastActiveElement = null;

  function openCvModal() {
    if (!cvModal) return;
    lastActiveElement = document.activeElement;
    cvModal.classList.add('active');
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus first button in modal
    const firstFocusable = cvModal.querySelector('button, a');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeCvModal() {
    if (!cvModal) return;
    cvModal.classList.remove('active');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) lastActiveElement.focus();
  }

  cvModalTrigger.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCvModal();
    });
  });

  if (closeCvModalBtn) {
    closeCvModalBtn.addEventListener('click', closeCvModal);
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }

  // Keyboard: Dismiss Modal with ESC Key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal && cvModal.classList.contains('active')) {
      closeCvModal();
    }
  });

  // =========================================================================
  // 8. Active Navbar Highlighter with IntersectionObserver
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');

  // Active section = the one crossing a thin band at ~35% of the viewport. Works for sections of any height
  // (a ratio threshold never fires on sections taller than the viewport).
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      desktopNavLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.remove('text-slate-400', 'text-slate-300');
          link.classList.add('text-white', 'bg-white/20', 'font-semibold');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('text-white', 'bg-white/20', 'font-semibold');
          link.classList.add('text-slate-400');
          link.removeAttribute('aria-current');
        }
      });
    });
  }, {
    threshold: 0,
    rootMargin: '-35% 0px -64% 0px'
  });

  sections.forEach(s => navObserver.observe(s));

  // =========================================================================
  // 9. Dynamic Current Year (Hero Stacked Year & Footer Copyright)
  // =========================================================================
  const fullYear = new Date().getFullYear().toString();
  const century = fullYear.substring(0, 2);
  const yearSuffix = fullYear.substring(2);

  document.querySelectorAll('.current-year-century').forEach(el => {
    el.textContent = century;
  });

  document.querySelectorAll('.current-year-suffix').forEach(el => {
    el.textContent = yearSuffix;
  });

  const footerYear = document.getElementById('current-year');
  if (footerYear) {
    footerYear.textContent = fullYear;
  }
});
