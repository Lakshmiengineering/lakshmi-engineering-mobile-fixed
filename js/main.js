/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scrollTop');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const contactForm = document.getElementById('contactForm');

function setMobileNavState(isOpen) {
  if (!hamburger || !navLinks) return;
  hamburger.classList.toggle('active', isOpen);
  navLinks.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('nav-open', isOpen);
}

window.addEventListener('scroll', () => {
  if (navbar && window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else if (navbar) {
    navbar.classList.remove('scrolled');
  }
  if (scrollTop && window.scrollY > 400) {
    scrollTop.classList.add('visible');
  } else if (scrollTop) {
    scrollTop.classList.remove('visible');
  }
});

/* ===== HAMBURGER MENU ===== */
if (hamburger && navLinks) {
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.addEventListener('click', () => {
    setMobileNavState(!navLinks.classList.contains('open'));
  });
}

// Close menu on link click
if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setMobileNavState(false);
    });
  });
}

/* ===== SCROLL TO TOP ===== */
if (scrollTop) {
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== REVEAL ON SCROLL ===== */
const reveals = document.querySelectorAll('.service-card, .product-card, .ci-block, .about-left, .about-right, .highlight-item, .contact-form-wrap, .specs-section');
reveals.forEach(el => el.classList.add('reveal'));

if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* ===== STAGGERED CARDS ===== */
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

/* ===== CONTACT FORM → WHATSAPP ===== */
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const message = this.message.value;

    const text = `Hello Lakshmi Engineering,
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const url = "https://wa.me/919080154987?text=" + encodeURIComponent(text);

    window.open(url, "_blank");

    // Optional reset after sending
    this.reset();
  });
}

/* ===== SMOOTH ACTIVE NAV HIGHLIGHT ===== */
const sections = document.querySelectorAll('section[id]');
const navA = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navA.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--white)' : '';
  });
}
window.addEventListener('scroll', highlightNav);
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    setMobileNavState(false);
  }
});