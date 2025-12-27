/* HEADER ANIMATION & MENU TOGGLE */
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded - Initializing menu");
  
  const menuToggle = document.querySelector(".menu-toggle");
  const menuUl = document.querySelector(".menu ul");
  const body = document.body;
  const html = document.documentElement;

  // Check if elements exist
  if (!menuToggle) {
    console.error("Menu toggle button not found!");
    return;
  }
  if (!menuUl) {
    console.error("Menu ul not found!");
    return;
  }
  
  console.log("Menu elements found successfully");

  // Function to close menu
  function closeMenu() {
    console.log("Closing menu");
    menuUl.classList.remove("active");
    menuToggle.classList.remove("active");
    body.style.overflow = "";
    html.style.overflow = "";
  }

  // Function to open menu
  function openMenu() {
    console.log("Opening menu");
    menuUl.classList.add("active");
    menuToggle.classList.add("active");
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    
    // Double-check it was added
    setTimeout(() => {
      console.log("Menu active class:", menuUl.classList.contains("active"));
      console.log("Menu display style:", window.getComputedStyle(menuUl).display);
    }, 100);
  }

  // Toggle menu on hamburger click
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Hamburger clicked! Current active state:", menuUl.classList.contains("active"));
    
    if (menuUl.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking menu items
  const menuItems = document.querySelectorAll(".menu ul li");
  console.log("Found menu items:", menuItems.length);
  
  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      console.log("Menu item clicked");
      closeMenu();
    });
  });

  // Close menu when clicking on the menu overlay (not on items)
  menuUl.addEventListener("click", (e) => {
    if (e.target === menuUl) {
      console.log("Clicked on overlay");
      closeMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuUl.classList.contains("active")) {
      console.log("Escape key pressed");
      closeMenu();
    }
  });

  // Prevent scroll when touching the menu overlay
  if (menuUl) {
    menuUl.addEventListener("touchmove", (e) => {
      if (e.target === menuUl) {
        e.preventDefault();
      }
    }, { passive: false });
  }
  
  console.log("Menu toggle initialized successfully");
});

/* SLIDER */
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;
let animationTypes = ['slide-in-right', 'fade-scale', 'zoom-in', 'slide-in-left'];
let currentAnimationType = 0;

function showSlide(i, direction = 'next') {
  // Remove all classes from all slides
  slides.forEach(s => {
    s.classList.remove("active");
    s.classList.remove("slide-in-right");
    s.classList.remove("slide-in-left");
    s.classList.remove("fade-scale");
    s.classList.remove("zoom-in");
  });
  
  // Select animation based on direction and cycle through different effects
  let animationClass;
  if (direction === 'next') {
    animationClass = animationTypes[currentAnimationType % animationTypes.length];
  } else {
    animationClass = 'slide-in-left';
  }
  
  // Add active class and animation
  slides[i].classList.add("active");
  slides[i].classList.add(animationClass);
  
  // Cycle to next animation type
  currentAnimationType++;
}

next.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index, 'next');
};

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index, 'prev');
};

// Auto-slide every 5 seconds
setInterval(() => next.click(), 5000);

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
