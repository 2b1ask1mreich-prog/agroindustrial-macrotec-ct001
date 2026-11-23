/**
 * AGROINDUSTRIAL MACROTEC C.A. - CCT-001 COILED TUBING
 * Main JavaScript: Theme Switcher (Dark/Light), Mobile Nav & Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==================== 1. THEME SWITCHER (DARK / LIGHT) ====================
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('macrotec-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // default dark as requested
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('macrotec-theme', newTheme);
    });
  }

  // ==================== 2. NAVBAR SCROLL EFFECT ====================
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==================== 3. MOBILE MENU TOGGLE (ANDROID / IOS) ====================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
          document.body.style.overflow = 'hidden'; // prevent scrolling while menu open
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
          document.body.style.overflow = '';
        }
      }
    });

    // Close menu when clicking any nav item
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // ==================== 4. SMOOTH SCROLL SPY INDICATOR ====================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // ==================== 5. TECHNICAL GALLERY & LIGHTBOX ====================
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-image-container img');
  const lightboxTitle = document.querySelector('.lightbox-title');
  const lightboxDesc = document.querySelector('.lightbox-desc');
  const lightboxCounter = document.querySelector('.lightbox-counter');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  const galleryItems = [];
  galleryCards.forEach((card, index) => {
    galleryItems.push({
      src: card.getAttribute('data-img-src'),
      title: card.getAttribute('data-title'),
      desc: card.getAttribute('data-desc'),
      category: card.getAttribute('data-category')
    });

    card.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryItems[currentIndex];
    if (!item) return;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxCounter.textContent = `EVIDENCIA ${currentIndex + 1} DE ${galleryItems.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxContent();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Backdrop click to close
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Touch Swipe Support for Android & iOS on Lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  }, { passive: true });

  function handleGesture() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNext(); // swipe left
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      showPrev(); // swipe right
    }
  }

  // ==================== 6. GALLERY CATEGORY FILTER ====================
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      galleryCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
