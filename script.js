// Slider functionality
let currentSlide = 0;
const totalSlides = 5;
let slideInterval;

function showSlide(n) {
  const slider = document.querySelector(".slider");
  currentSlide = (n + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 20}%)`;
}

function changeSlide(direction) {
  clearInterval(slideInterval);
  showSlide(currentSlide + direction);
  startAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000);
}

// Initialize slider
startAutoSlide();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animations
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    }
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 30px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
}

// Event listeners
window.addEventListener("scroll", () => {
  handleScrollAnimations();
  handleNavbarScroll();
});

window.addEventListener("load", () => {
  handleScrollAnimations();
});

// Add some interactive hover effects
document
  .querySelectorAll(".feature-card, .attraction-card, .food-item")
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect after page load
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 150);
    }, 1000);
  }
});

// Add floating animation to CTA buttons
document
  .querySelectorAll(".cta-button, .cta-button-secondary")
  .forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.animation = "float 0.6s ease-in-out infinite alternate";
    });

    button.addEventListener("mouseleave", function () {
      this.style.animation = "none";
    });
  });

// Add CSS for float animation
const style = document.createElement("style");
style.textContent = `
            @keyframes float {
                0% { transform: translateY(0px); }
                100% { transform: translateY(-5px); }
            }
        `;
document.head.appendChild(style);

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Add click tracking for analytics (placeholder)
document
  .querySelectorAll(".cta-button, .cta-button-secondary")
  .forEach((button) => {
    button.addEventListener("click", function (e) {
      // Here you can add analytics tracking
      console.log("CTA clicked:", this.textContent);
    });
  });
