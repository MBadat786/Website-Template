/* =========================================================
   WEBSITE TEMPLATE ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       BASIC BUSINESS INFORMATION
       ===================================================== */

    document.title =
        `${BUSINESS.name} | Quality Services in South Africa`;


    // Business name
    document.querySelectorAll("[data-business-name]")
        .forEach(element => {
            element.textContent = BUSINESS.name;
        });


    // Phone
    document.querySelectorAll("[data-business-phone]")
        .forEach(element => {

            element.textContent = BUSINESS.phone;

            element.href =
                `tel:${BUSINESS.phone.replace(/\s+/g, "")}`;

        });


    // Email
    document.querySelectorAll("[data-business-email]")
        .forEach(element => {

            element.textContent = BUSINESS.email;

            element.href =
                `mailto:${BUSINESS.email}`;

        });


    // Location
    document.querySelectorAll("[data-business-location]")
        .forEach(element => {

            element.textContent = BUSINESS.location;

        });


    // WhatsApp
    document.querySelectorAll("[data-whatsapp]")
        .forEach(element => {

            element.href =
                `https://wa.me/${BUSINESS.whatsapp}`;

        });


    /* =====================================================
       SOCIAL MEDIA
       ===================================================== */

    document.querySelectorAll("[data-facebook]")
        .forEach(element => {
            element.href = BUSINESS.facebook;
        });


    document.querySelectorAll("[data-instagram]")
        .forEach(element => {
            element.href = BUSINESS.instagram;
        });


    document.querySelectorAll("[data-tiktok]")
        .forEach(element => {
            element.href = BUSINESS.tiktok;
        });


    /* =====================================================
       BRANDING
       ===================================================== */

    document.documentElement.style.setProperty(
        "--primary",
        BUSINESS.primaryColor
    );

    document.documentElement.style.setProperty(
        "--primary-dark",
        BUSINESS.primaryDark
    );

    document.documentElement.style.setProperty(
        "--accent",
        BUSINESS.accentColor
    );


    /* =====================================================
       LOGO
       ===================================================== */

    document.querySelectorAll("[data-business-logo]")
        .forEach(element => {

            element.src = BUSINESS.logo;

            element.alt =
                `${BUSINESS.name} logo`;

        });


    /* =====================================================
       HERO
       ===================================================== */

    const hero =
        document.querySelector(".hero");

    if (hero && BUSINESS.heroImage) {

        hero.style.backgroundImage =
            `linear-gradient(
                90deg,
                rgba(15, 23, 42, 0.88),
                rgba(15, 23, 42, 0.45)
            ),
            url("${BUSINESS.heroImage}")`;

    }


    document.querySelectorAll("[data-hero-title]")
        .forEach(element => {

            element.textContent =
                BUSINESS.heroTitle;

        });


    document.querySelectorAll("[data-hero-text]")
        .forEach(element => {

            element.textContent =
                BUSINESS.heroText;

        });


    /* =====================================================
       ABOUT
       ===================================================== */

    document.querySelectorAll("[data-about-title]")
        .forEach(element => {

            element.textContent =
                BUSINESS.aboutTitle;

        });


    document.querySelectorAll("[data-about-text]")
        .forEach(element => {

            element.textContent =
                BUSINESS.aboutText;

        });


    document.querySelectorAll("[data-about-image]")
        .forEach(element => {

            element.src =
                BUSINESS.aboutImage;

            element.alt =
                `About ${BUSINESS.name}`;

        });


    document.querySelectorAll("[data-experience]")
        .forEach(element => {

            element.textContent =
                BUSINESS.experience;

        });


    /* =====================================================
       BUSINESS RATING
       ===================================================== */

    document.querySelectorAll("[data-rating]")
        .forEach(element => {

            element.textContent =
                BUSINESS.rating;

        });


    document.querySelectorAll("[data-review-count]")
        .forEach(element => {

            element.textContent =
                BUSINESS.reviewCount;

        });


    /* =====================================================
       SERVICES
       ===================================================== */

    const servicesContainer =
        document.querySelector("[data-services]");


    if (servicesContainer && Array.isArray(BUSINESS.services)) {

        servicesContainer.innerHTML = "";


        BUSINESS.services.forEach((service, index) => {

            const number =
                String(index + 1).padStart(2, "0");


            const card =
                document.createElement("article");


            card.className =
                "service-card reveal";


            card.innerHTML = `

                <div class="service-number">
                    ${number}
                </div>

                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

                <a
                    href="#contact"
                    class="service-link"
                >
                    Enquire now
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            `;


            servicesContainer.appendChild(card);

        });

    }


    /* =====================================================
       WHY CHOOSE US
       ===================================================== */

    const whyContainer =
        document.querySelector("[data-why-us]");


    if (whyContainer && Array.isArray(BUSINESS.whyUs)) {

        whyContainer.innerHTML = "";


        BUSINESS.whyUs.forEach(feature => {

            const item =
                document.createElement("div");


            item.className =
                "why-card reveal";


            item.innerHTML = `

                <div class="why-icon">
                    <i class="${feature.icon}"></i>
                </div>

                <div>
                    <h3>
                        ${feature.title}
                    </h3>

                    <p>
                        ${feature.description}
                    </p>
                </div>

            `;


            whyContainer.appendChild(item);

        });

    }


    /* =====================================================
       GALLERY
       ===================================================== */

    const galleryContainer =
        document.querySelector("[data-gallery]");


    if (galleryContainer && Array.isArray(BUSINESS.gallery)) {

        galleryContainer.innerHTML = "";


        BUSINESS.gallery.forEach((item, index) => {

            const galleryItem =
                document.createElement("div");


            galleryItem.className =
                "gallery-item reveal";


            // First image gets the large layout
            if (index === 0) {
                galleryItem.classList.add("gallery-large");
            }


            galleryItem.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.title || BUSINESS.name}"
                    loading="lazy"
                >

            `;


            galleryContainer.appendChild(galleryItem);

        });

    }


    /* =====================================================
       REVIEWS
       ===================================================== */

    const reviewsContainer =
        document.querySelector("[data-reviews]");


    if (reviewsContainer && Array.isArray(BUSINESS.reviews)) {

        reviewsContainer.innerHTML = "";


        BUSINESS.reviews.forEach(review => {

            const card =
                document.createElement("article");


            card.className =
                "review-card reveal";


            card.innerHTML = `

                <div class="review-stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <p class="review-text">
                    "${review.text}"
                </p>

                <div class="review-author">

                    <div class="review-avatar">
                        ${review.name.charAt(0)}
                    </div>

                    <div>
                        <strong>
                            ${review.name}
                        </strong>

                        <span>
                            ${review.location}
                        </span>
                    </div>

                </div>

            `;


            reviewsContainer.appendChild(card);

        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const currentYear =
        document.querySelector("#currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }

});


/* =========================================================
   NAVBAR SCROLL
   ========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuBtn =
    document.querySelector("#mobileMenuBtn");

const navMenu =
    document.querySelector("#navMenu");


if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");


        const icon =
            mobileMenuBtn.querySelector("i");


        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            mobileMenuBtn.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            mobileMenuBtn.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });


    /* Close menu when link is clicked */

    navMenu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");


                const icon =
                    mobileMenuBtn.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   CONTACT FORM → WHATSAPP
   ========================================================= */

const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.querySelector("#name")
                ?.value.trim();


            const phone =
                document.querySelector("#phone")
                ?.value.trim();


            const email =
                document.querySelector("#email")
                ?.value.trim();


            const message =
                document.querySelector("#message")
                ?.value.trim();


            if (!name || !phone) {

                alert(
                    "Please enter your name and phone number."
                );

                return;

            }


            const whatsappMessage =

`Hi ${BUSINESS.name},

I would like to enquire about your services.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Message:
${message || "No message provided."}`;


            const whatsappURL =
                `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================================
   BUTTON PRESS EFFECT
   ========================================================= */

document.querySelectorAll("button, .btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform =
                "scale(0.97)";


            setTimeout(() => {

                button.style.transform = "";

            }, 120);

        });

    });