// ===============================
// Fade In On Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".fade").forEach((element) => {
    observer.observe(element);
});


// ===============================
// Navbar Transparency
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        nav.style.background = "rgba(255,255,255,.65)";
        nav.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";

    } else {

        nav.style.background = "rgba(255,255,255,.45)";
        nav.style.boxShadow = "0 8px 30px rgba(0,0,0,.06)";

    }

});


// ===============================
// Smooth Page Load
// ===============================

window.addEventListener("load", () => {

    document.querySelector(".hero").classList.add("show");

});


// ===============================
// Glass Card Hover Glow
// ===============================

document.querySelectorAll(".glass").forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255,255,255,.75),
            rgba(255,255,255,.35) 45%
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.35)";

    });

});
