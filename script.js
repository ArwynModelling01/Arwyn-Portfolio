// MOBILE MENU

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
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

    const image = portfolioItems[currentImage].querySelector("img");

    lightboxPlaceholder.innerHTML = `
        <img
            src="${image.src}"
            alt="${image.alt}"
            class="lightbox-image"
        >
    `;

    lightboxCounter.textContent =
        `${currentImage + 1} / ${portfolioItems.length}`;
}


portfolioItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        showImage(index);

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


// SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    document.body.classList.add("animations-enabled");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}

// SHOOT COLLECTIONS

const shootCollections = {

    "after-dark-red": {
        title: "After Dark: Red",

        images: [
            "images/shoots/after-dark-red/01-arwyn-red-portrait.webp",
            "images/shoots/after-dark-red/02-arwyn-red-standing.webp"
        ]
    },

    "after-dark-gold": {
        title: "After Dark: Gold",

        images: [
            "images/shoots/after-dark-gold/01-arwyn-gold-pole-pose.webp",
            "images/shoots/after-dark-gold/02-arwyn-gold-standing.webp"
        ]
    },

    "lakeside-parasol": {
        title: "Lakeside Parasol",

        images: [
            "images/shoots/lakeside-parasol/01-arwyn-parasol-portrait.webp",
            "images/shoots/lakeside-parasol/02-arwyn-standing-by-water.webp",
            "images/shoots/lakeside-parasol/03-arwyn-reclining-by-reeds.webp",
            "images/shoots/lakeside-parasol/04-arwyn-seated-smile.webp"
        ]
    },

    "woodland-editorial": {
        title: "Woodland",

        images: [
            "images/shoots/woodland-editorial/01-arwyn-foliage-portrait.webp",
            "images/shoots/woodland-editorial/02-arwyn-framed-by-trees.webp",
            "images/shoots/woodland-editorial/03-arwyn-standing-portrait.webp",
            "images/shoots/woodland-editorial/04-arwyn-golden-backlight.webp",
            "images/shoots/woodland-editorial/05-arwyn-forest-floor.webp",
            "images/shoots/woodland-editorial/06-arwyn-over-shoulder.webp",
            "images/shoots/woodland-editorial/07-arwyn-soft-portrait.webp"
        ]
    },

    "woodland-ghosts": {
        title: "Woodland Ghosts",

        images: [
            "images/shoots/woodland-ghosts/01-arwyn-ghost-in-motion.webp",
            "images/shoots/woodland-ghosts/02-arwyn-ghost-by-water.webp",
            "images/shoots/woodland-ghosts/03-arwyn-ghosts-landscape.webp"
        ]
    }

};


const shootViewer = document.querySelector("#shootViewer");
const shootViewerTitle = document.querySelector("#shootViewerTitle");
const shootViewerGrid = document.querySelector("#shootViewerGrid");
const shootViewerClose = document.querySelector(".shoot-viewer-close");


document.querySelectorAll(".shoot-card").forEach((card) => {

    card.addEventListener("click", () => {

        const shootName = card.dataset.shoot;
        const shoot = shootCollections[shootName];

        if (!shoot) {
            return;
        }

        shootViewerTitle.textContent = shoot.title;

        shootViewerGrid.innerHTML = "";

        shoot.images.forEach((imagePath) => {

            const image = document.createElement("img");

            image.src = imagePath;
            image.alt = `${shoot.title} - Arwyn`;

            image.loading = "lazy";

            shootViewerGrid.appendChild(image);

        });

        shootViewer.classList.add("active");

        document.body.style.overflow = "hidden";

        shootViewer.scrollTop = 0;

    });

});


function closeShootViewer() {

    shootViewer.classList.remove("active");

    document.body.style.overflow = "";

}


shootViewerClose.addEventListener("click", closeShootViewer);


document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        shootViewer.classList.contains("active")
    ) {
        closeShootViewer();
    }

});