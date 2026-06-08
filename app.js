document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar and Footer
    const navContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navContainer && window.NavbarComponent) {
        navContainer.innerHTML = window.NavbarComponent();
    }

    if (footerContainer && window.FooterComponent) {
        footerContainer.innerHTML = window.FooterComponent();
    }

    initNavbar();
    initAccordions();
    initGalleryLightbox();
    initScrollAnimations();
    initScrollSpy();
    initAccessibility();
});

/* ═══════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════ */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const topBar = document.querySelector('.top-bar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            const isScrolled = window.scrollY > 20;
            navbar.classList.toggle('scrolled', isScrolled);
            if (topBar) topBar.classList.toggle('scrolled', isScrolled);
        }, { passive: true });
    }

    // Mobile menu
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            mobileBtn.innerHTML = isOpen ? '✕' : '☰';
        });
    }

    // Mobile dropdown toggling
    document.querySelectorAll('.nav-item').forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        if (link && dropdown) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    // Close other open dropdowns
                    document.querySelectorAll('.nav-item.open').forEach(other => {
                        if (other !== item) other.classList.remove('open');
                    });
                    item.classList.toggle('open');
                }
            });
        }
    });
}

/* ═══════════════════════════════════════════
   ACCORDIONS
   ═══════════════════════════════════════════ */
function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close siblings
            item.parentElement.querySelectorAll('.accordion-item.active').forEach(sibling => {
                if (sibling !== item) {
                    sibling.classList.remove('active');
                    const body = sibling.querySelector('.accordion-body');
                    if (body) body.style.maxHeight = '0';
                }
            });

            // Toggle current
            item.classList.toggle('active', !isActive);
            const body = item.querySelector('.accordion-body');
            if (body) {
                body.style.maxHeight = !isActive ? body.scrollHeight + 'px' : '0';
            }
        });
    });

    // Open first accordion item by default
    document.querySelectorAll('.accordion').forEach(accordion => {
        const first = accordion.querySelector('.accordion-item');
        if (first) {
            first.classList.add('active');
            const body = first.querySelector('.accordion-body');
            if (body) body.style.maxHeight = body.scrollHeight + 'px';
        }
    });
}

/* ═══════════════════════════════════════════
   GALLERY LIGHTBOX
   ═══════════════════════════════════════════ */
function initGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (!lightbox) return;

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.getAttribute('data-caption') || '';
            if (img && lightboxImg) {
                lightboxImg.src = img.src;
                lightboxImg.alt = caption;
            }
            if (lightboxCaption) lightboxCaption.textContent = caption;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/* ═══════════════════════════════════════════
   SCROLL ANIMATIONS
   ═══════════════════════════════════════════ */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}

/* ═══════════════════════════════════════════
   SCROLL SPY — active nav link
   ═══════════════════════════════════════════ */
function initScrollSpy() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.style.color = 'var(--clr-primary)';
            link.style.fontWeight = '700';
        }
    });
}

/* ═══════════════════════════════════════════
   ACCESSIBILITY
   ═══════════════════════════════════════════ */
function initAccessibility() {
    // Add id="main-content" to the first main container if not present
    if (!document.getElementById('main-content')) {
        const mainContainer = document.querySelector('.container') || document.querySelector('.hero');
        if (mainContainer) mainContainer.id = 'main-content';
    }

    const html = document.documentElement;
    let baseFontSize = 100; // percent

    document.addEventListener('click', (e) => {
        if (e.target.id === 'btn-increase-text') {
            if (baseFontSize < 120) baseFontSize += 10;
            html.style.fontSize = `${baseFontSize}%`;
        } else if (e.target.id === 'btn-decrease-text') {
            if (baseFontSize > 80) baseFontSize -= 10;
            html.style.fontSize = `${baseFontSize}%`;
        } else if (e.target.id === 'btn-normal-text') {
            baseFontSize = 100;
            html.style.fontSize = `${baseFontSize}%`;
        }
    });
}
