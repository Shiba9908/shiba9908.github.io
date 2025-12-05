// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in, .nav-card, .project-card, .cv-section').forEach(el => {
  observer.observe(el);
});

// Add stagger effect to cards
document.querySelectorAll('.navigation-cards .nav-card').forEach((card, index) => {
  card.style.animationDelay = (index * 0.1) + 's';
});

document.querySelectorAll('.page-content .project-card').forEach((card, index) => {
  card.style.animationDelay = (index * 0.08) + 's';
});

// Animated counter for achievement badges
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Trigger counters on view
const counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      const target = parseInt(entry.target.textContent);
      if (!isNaN(target) && target > 0) {
        animateCounter(entry.target, target);
        entry.target.classList.add('counted');
      }
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe stat values
document.querySelectorAll('.stat-value').forEach(el => {
  counterObserver.observe(el);
});

// Enhanced hover effects for interactive elements
document.querySelectorAll('.nav-card, .project-card, .skill-category').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.01)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Scroll parallax effect for hero section
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}

// Smooth page transitions
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Add ripple effect to buttons on click
document.querySelectorAll('.download-btn, .nav-card a, .project-links a, .contact-submit-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple-expand 0.6s ease-out';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.nav-card a:focus').forEach(el => el.blur());
  }
});
