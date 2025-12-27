/* HEADER ANIMATION & MENU TOGGLE */
window.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuUl = document.querySelector(".menu ul");
  const body = document.body;

  menuToggle.addEventListener("click", () => {
    menuUl.classList.toggle("active");
    menuToggle.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (menuUl.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  // Close menu when clicking menu items
  const menuItems = document.querySelectorAll(".menu ul li");
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuUl.classList.remove("active");
      menuToggle.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu") && !e.target.closest(".menu-toggle")) {
      menuUl.classList.remove("active");
      menuToggle.classList.remove("active");
      body.style.overflow = "";
    }
  });
});

/* SLIDER */
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

next.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

// Auto-slide (currently commented out)
// setInterval(() => next.click(), 5000);

/* CHAIRMAN SECTION SCROLL ANIMATION */
function observeChairmanSection() {
  const chairman = document.querySelector('.chairman-section');
  const chairmanImage = document.querySelector('.chairman-image');
  const chairmanContent = document.querySelector('.chairman-content');
  const chairmanH2 = document.querySelector('.chairman-content h2');
  const chairmanH3 = document.querySelector('.chairman-content h3');
  const chairmanP = document.querySelectorAll('.chairman-content p');
  const chairmanHighlights = document.querySelector('.chairman-highlights');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        chairmanImage.classList.add('animate');
        chairmanContent.classList.add('animate');
        chairmanH2.classList.add('animate');
        chairmanH3.classList.add('animate');
        chairmanP.forEach(p => p.classList.add('animate'));
        chairmanHighlights.classList.add('animate');
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  observer.observe(chairman);
}

window.addEventListener('DOMContentLoaded', observeChairmanSection);

/* ABOUT ISL PHARMACY SECTION SCROLL ANIMATION */
function observeAboutSection() {
  const aboutSection = document.querySelector('.about-section');
  const aboutH2 = document.querySelector('.about-section h2');
  const aboutImage = document.querySelector('.about-image');
  const aboutContent = document.querySelector('.about-content');
  const textLines = document.querySelectorAll('.about-content p .text-line');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '200px 0px 0px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        aboutH2.classList.add('animate');
        aboutImage.classList.add('animate');
        aboutContent.classList.add('animate');
        const aboutP = document.querySelector('.about-content p');
        if (aboutP) {
          aboutP.classList.add('animate');
        }
        textLines.forEach(line => {
          line.classList.add('animate');
        });
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  observer.observe(aboutSection);
}

window.addEventListener('DOMContentLoaded', observeAboutSection);

/* QUOTE SECTION SCROLL ANIMATION */
function observeQuoteSection() {
  const quoteSection = document.querySelector('.quote-section');
  const quoteCards = document.querySelectorAll('.quote-card');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '150px 0px 0px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        quoteCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 100);
        });
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  observer.observe(quoteSection);
}

window.addEventListener('DOMContentLoaded', observeQuoteSection);
