const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(Link => {
    link.addEventListener("click", () => {
        menuButton.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// PORTFOLIO LIGHTBOX

const portfolioItems = document.querySelectorAll(".portfolio-item");

const lightbox = document.querySelector("#lightbox");
const lightboxPlaceholder = document.querySelector(".lightbox-placeholder");
const lightboxCounter = document.querySelector(".lightbox-counter");

const closeButton = document.querySelector(".lightbox-close");
const previousButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

let currentImage = 0;


function showImage(index) {

    if (index < 0) {
        index = portfolioItems.length - 1;
    }

    if (index >= portfolioItems.length) {
        index = 0;
    }

    currentImage = index;

    lightboxPlaceholder.textContent =
        portfolioItems[currentImage].textContent.trim();

    lightboxCounter.textContent =
        `${currentImage + 1} / ${portfolioItems.length}`;
}


portfolioItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentImage = index;

        showImage(currentImage);

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


closeButton.addEventListener("click", closeLightbox);


previousButton.addEventListener("click", () => {

    showImage(currentImage - 1);

});


nextButton.addEventListener("click", () => {

    showImage(currentImage + 1);

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        showImage(currentImage - 1);
    }

    if (event.key === "ArrowRight") {
        showImage(currentImage + 1);
    }

});