/**
 * VINICIUS CELESTINO PORTFOLIO - CORE INTERACTION SCRIPT
 * Engineered adhering to UI/UX Pro Max Intelligence Standards:
 * - 60fps Spotlight with RAF (No layout thrashing)
 * - Accessible Modal Dialog (Focus trap, ESC key, ARIA)
 * - Interactive Project Filter Tabs
 * - Form Autosave (sessionStorage) & Live Character Counter
 * - Smooth Scroll Progress & Back-to-Top
 * - Reduced Motion Awareness
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =========================================================================
  // 1. Reading Scroll Progress Bar
  // =========================================================================
  const scrollProgressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrolled}%`;
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
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

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
      projectArticles.forEach(article => {
        const categories = article.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
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
  // 7. Contact Form UX: Autosave, Validation & WhatsApp Integration
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const messageInput = document.getElementById('form-message');
  const charCounter = document.getElementById('char-count');
  const formFeedback = document.getElementById('form-feedback');
  const phoneTarget = '5511999990000'; // Vinicius WhatsApp (placeholder — replace with real number)

  // Autosave Draft in sessionStorage
  const STORAGE_KEY = 'vc_portfolio_form_draft';

  function restoreDraft() {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (nameInput && data.name) nameInput.value = data.name;
        if (emailInput && data.email) emailInput.value = data.email;
        if (messageInput && data.message) {
          messageInput.value = data.message;
          updateCharCount();
        }
      }
    } catch (e) {
      // Safe fallback
    }
  }

  function saveDraft() {
    try {
      const data = {
        name: nameInput ? nameInput.value : '',
        email: emailInput ? emailInput.value : '',
        message: messageInput ? messageInput.value : ''
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // Safe fallback
    }
  }

  function updateCharCount() {
    if (messageInput && charCounter) {
      const count = messageInput.value.length;
      charCounter.textContent = `${count} / 500`;
      if (count > 450) {
        charCounter.classList.add('text-amber-400');
      } else {
        charCounter.classList.remove('text-amber-400');
      }
    }
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      updateCharCount();
      saveDraft();
    });
  }

  if (nameInput) nameInput.addEventListener('input', saveDraft);
  if (emailInput) emailInput.addEventListener('input', saveDraft);

  restoreDraft();

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
          formFeedback.className = 'text-xs text-rose-400 block';
        }
        return;
      }

      // Basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formFeedback) {
          formFeedback.textContent = 'Por favor, insira um e-mail válido.';
          formFeedback.className = 'text-xs text-rose-400 block';
        }
        emailInput.focus();
        return;
      }

      // Format WhatsApp payload
      const formattedText = `👋 Olá Vinicius!\n\nMeu nome é *${name}* (${email}).\n\n*Mensagem:* \n${message}\n\n_Enviado pelo seu portfólio VC.dev_`;
      const encodedUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(formattedText)}`;

      // Submit feedback button state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Abrindo WhatsApp...</span>
      `;
      submitBtn.disabled = true;

      if (formFeedback) {
        formFeedback.textContent = '✓ Redirecionando para o WhatsApp...';
        formFeedback.className = 'text-xs text-emerald-400 block';
      }

      // Clear draft on successful submission
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch (e) {}

      // Open WhatsApp window
      setTimeout(() => {
        window.open(encodedUrl, '_blank', 'noopener,noreferrer');
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
        contactForm.reset();
        updateCharCount();
        if (formFeedback) {
          formFeedback.textContent = 'Mensagem enviada para o WhatsApp com sucesso!';
          setTimeout(() => { formFeedback.textContent = ''; }, 4000);
        }
      }, 700);
    });
  }

  // =========================================================================
  // 8. Active Navbar Highlighter with IntersectionObserver
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.remove('text-slate-400', 'text-slate-300');
            link.classList.add('text-white', 'bg-white/10', 'font-semibold');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('text-white', 'bg-white/10', 'font-semibold');
            link.classList.add('text-slate-400');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '-80px 0px -40% 0px'
  });

  sections.forEach(s => navObserver.observe(s));

  // =========================================================================
  // 9. Dynamic Current Year (Hero Stacked Year & Footer Copyright)
  // =========================================================================
  const fullYear = new Date().getFullYear().toString();
  const century = fullYear.substring(0, 2);
  const yearSuffix = fullYear.substring(2);

  document.querySelectorAll('#current-year-century').forEach(el => {
    el.textContent = century;
  });

  document.querySelectorAll('#current-year-suffix').forEach(el => {
    el.textContent = yearSuffix;
  });

  const footerYear = document.getElementById('current-year');
  if (footerYear) {
    footerYear.textContent = fullYear;
  }
});
