const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".nav-links a");

const navbar = document.getElementById("navbar");
const progressBar = document.getElementById("progress-bar");

// ===== LOADER =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);
});


// ===== MOBILE MENU =====
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


// ===== MAIN SCROLL (OPTIMIZED + CLEAN) =====
window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    // ===== NAVBAR SCROLL EFFECT =====
    navbar.classList.toggle("scrolled", scrollY > 50);

    // ===== PROGRESS BAR =====
    const docHeight = document.body.scrollHeight - window.innerHeight;

    if (progressBar) {
        progressBar.style.width = (scrollY / docHeight) * 100 + "%";
    }

    // ===== ACTIVE NAV (SMOOTH + ACCURATE) =====
    let current = "";

    sections.forEach(sec => {
        const top = sec.offsetTop - 200;
        const bottom = top + sec.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
            current = sec.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });

    // ===== SCROLL REVEAL =====
    const trigger = window.innerHeight - 120;

    sections.forEach(sec => {
        if (!sec.classList.contains("show") &&
            sec.getBoundingClientRect().top < trigger) {
            sec.classList.add("show");
        }
    });

});


// ===== 3D CARD MOUSE EFFECT =====
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        const centerX = card.offsetWidth / 2;
        const centerY = card.offsetHeight / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

        card.style.transition = "0.1s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transition = "0.4s ease";
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });

});