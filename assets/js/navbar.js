document.addEventListener("DOMContentLoaded", () => {
  // === Section Scroll Highlight ===
  const sections = [...document.querySelectorAll("section, header")].filter(el => el.id);
  const navLinks = document.querySelectorAll(".nav-item a, .hamburger-menu a");

  const updateNav = () => {
    let current = "";

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateNav);
  window.addEventListener("resize", updateNav);
  updateNav();

  // === Original nav-li hamburger (if still present) ===
  const originalHamburger = document.getElementById("hamburger");
  const originalNav = document.querySelector(".nav-li");

  if (originalHamburger && originalNav) {
    originalHamburger.addEventListener("click", () => {
      originalNav.classList.toggle("show");
    });

    originalNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        originalNav.classList.remove("show");
      });
    });
  }

  // === Standalone .hamburger-nav (new one) ===
  const standaloneHamburger = document.querySelector(".hamburger-nav #hamburger");
  const standaloneMenu = document.getElementById("hamburger-menu");

  if (standaloneHamburger && standaloneMenu) {
    standaloneHamburger.addEventListener("click", () => {
      standaloneMenu.classList.toggle("show");
    });

    standaloneMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        standaloneMenu.classList.remove("show");
      });
    });
  }
});
