/* =====================================================
   AUTOALANTECH — PREMIUM JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================
     MOBILE NAVIGATION
     =================================================== */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("active");

      if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
      } else {
        menuBtn.textContent = "☰";
      }

    });


    /* Close menu after clicking a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

      });

    });

  }


  /* ===================================================
     HEADER SCROLL EFFECT
     =================================================== */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

      header.style.background =
        "rgba(5, 9, 15, 0.95)";

      header.style.boxShadow =
        "0 10px 35px rgba(0,0,0,0.18)";

    } else {

      header.style.background =
        "rgba(7,11,18,0.82)";

      header.style.boxShadow = "none";

    }

  });


  /* ===================================================
     SCROLL REVEAL
     =================================================== */

  const revealElements = document.querySelectorAll(
    ".service-card, .price-card, .project, .benefit"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });


  /* ===================================================
     SMOOTH INTERNAL LINKS
     =================================================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

      const targetId = this.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* ===================================================
     CURRENT SECTION DETECTION
     =================================================== */

  const sections = document.querySelectorAll("section[id]");

  const navigationLinks =
    document.querySelectorAll(".nav-links a");


  const sectionObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
              link.getAttribute("href") ===
              "#" + entry.target.id
            ) {

              link.classList.add("active");

            }

          });

        }

      });

    },
    {
      threshold: 0.35
    }
  );


  sections.forEach(section => {

    sectionObserver.observe(section);

  });


  /* ===================================================
     PRICING BUTTON FEEDBACK
     =================================================== */

  const pricingButtons =
    document.querySelectorAll(".price-btn");


  pricingButtons.forEach(button => {

    button.addEventListener("click", () => {

      const packageName =
        button.closest(".price-card")
        ?.querySelector(".package")
        ?.textContent
        .trim();

      if (packageName) {

        console.log(
          `AutoAlanTech: ${packageName} package selected`
        );

      }

    });

  });


  /* ===================================================
     WHATSAPP TRACKING
     =================================================== */

  const whatsappLinks =
    document.querySelectorAll(
      ".whatsapp, .whatsapp-float"
    );


  whatsappLinks.forEach(link => {

    link.addEventListener("click", () => {

      console.log(
        "AutoAlanTech: WhatsApp contact initiated"
      );

    });

  });


  /* ===================================================
     BUTTON RIPPLE EFFECT
     =================================================== */

  const buttons = document.querySelectorAll(
    ".btn, .price-btn, .whatsapp, .nav-button"
  );


  buttons.forEach(button => {

    button.addEventListener("click", function(event) {

      const ripple =
        document.createElement("span");

      ripple.classList.add("ripple");

      const rect =
        this.getBoundingClientRect();

      ripple.style.left =
        `${event.clientX - rect.left}px`;

      ripple.style.top =
        `${event.clientY - rect.top}px`;

      this.appendChild(ripple);

      setTimeout(() => {

        ripple.remove();

      }, 600);

    });

  });


  /* ===================================================
     BACK TO TOP
     =================================================== */

  const backToTop =
    document.createElement("button");

  backToTop.innerHTML = "↑";

  backToTop.setAttribute(
    "aria-label",
    "Back to top"
  );

  backToTop.className = "back-to-top";

  document.body.appendChild(backToTop);


  window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

      backToTop.classList.add("visible");

    } else {

      backToTop.classList.remove("visible");

    }

  });


  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  /* ===================================================
     YEAR AUTOMATICALLY UPDATES
     =================================================== */

  const yearElement =
    document.querySelector(".footer-bottom p");

  if (yearElement) {

    yearElement.innerHTML =
      `© ${new Date().getFullYear()} AutoAlanTech. All rights reserved.`;

  }

});