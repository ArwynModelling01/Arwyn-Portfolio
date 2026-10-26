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
let activeImages = Array.from(portfolioItems, item => item.querySelector("img"));
let lightboxTrigger;

function openLightbox(images, index, trigger) {
    activeImages = images;
    lightboxTrigger = trigger;
    showImage(index);
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    closeButton.focus();
}


function showImage(index) {

    if (index < 0) {
        index = activeImages.length - 1;
    }

    if (index >= activeImages.length) {
        index = 0;
    }

    currentImage = index;

    const image = activeImages[currentImage];

    lightboxPlaceholder.innerHTML = `
        <img
            src="${image.src}"
            alt="${image.alt}"
            class="lightbox-image"
        >
    `;

    lightboxCounter.textContent =
        `${currentImage + 1} / ${activeImages.length}`;
}


portfolioItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        openLightbox(Array.from(portfolioItems, item => item.querySelector("img")), index, item);
    });

});


function closeLightbox() {

    lightbox.classList.remove("active");
    document.body.style.overflow = shootViewer.classList.contains("active") ? "hidden" : "";
    lightboxTrigger?.focus();
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
        event.preventDefault();
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
        "title": "After Dark: Red",
        "images": [
            "images/shoots/after-dark-red/01-arwyn-red-portrait.webp",
            "images/shoots/after-dark-red/02-arwyn-red-standing.webp"
        ]
    },
    "after-dark-gold": {
        "title": "After Dark: Gold",
        "images": [
            "images/shoots/after-dark-gold/01-arwyn-gold-pole-pose.webp",
            "images/shoots/after-dark-gold/02-arwyn-gold-standing.webp"
        ]
    },
    "lakeside-parasol": {
        "title": "Lakeside Parasol",
        "images": [
            "images/shoots/lakeside-parasol/01-arwyn-parasol-portrait.webp",
            "images/shoots/lakeside-parasol/02-arwyn-standing-by-water.webp",
            "images/shoots/lakeside-parasol/03-arwyn-reclining-by-reeds.webp",
            "images/shoots/lakeside-parasol/04-arwyn-seated-smile.webp"
        ]
    },
    "woodland-editorial": {
        "title": "Woodland",
        "images": [
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
        "title": "Woodland Ghosts",
        "images": [
            "images/shoots/woodland-ghosts/01-arwyn-ghost-in-motion.webp",
            "images/shoots/woodland-ghosts/02-arwyn-ghost-by-water.webp",
            "images/shoots/woodland-ghosts/03-arwyn-ghosts-landscape.webp"
        ]
    },
    "black-gown-editorial": {
        "title": "Black Gown Editorial",
        "images": [
            "images/shoots/black-gown-editorial/01-arwyn-staircase-portrait.webp",
            "images/shoots/black-gown-editorial/02-arwyn-staircase-front.webp",
            "images/shoots/black-gown-editorial/03-arwyn-staircase-seated.webp",
            "images/shoots/black-gown-editorial/04-arwyn-staircase-over-shoulder.webp",
            "images/shoots/black-gown-editorial/05-arwyn-staircase-back.webp",
            "images/shoots/black-gown-editorial/06-arwyn-candle-table-portrait.webp",
            "images/shoots/black-gown-editorial/07-arwyn-candle-table-wide.webp"
        ]
    },
    "pastel-knit": {
        "title": "Pastel Knit",
        "images": [
            "images/shoots/pastel-knit/01-arwyn-hanging-chair-knit.webp",
            "images/shoots/pastel-knit/02-arwyn-hanging-chair-monochrome.webp",
            "images/shoots/pastel-knit/03-arwyn-hanging-chair-seated.webp",
            "images/shoots/pastel-knit/04-arwyn-sofa-portrait.webp",
            "images/shoots/pastel-knit/05-arwyn-sofa-wide.webp",
            "images/shoots/pastel-knit/06-arwyn-sofa-overhead.webp"
        ]
    },
    "floral-dress": {
        "title": "Floral Dress",
        "images": [
            "images/shoots/floral-dress/01-arwyn-garden-dress-movement.webp",
            "images/shoots/floral-dress/02-arwyn-garden-portrait.webp",
            "images/shoots/floral-dress/03-arwyn-interior-seated.webp",
            "images/shoots/floral-dress/04-arwyn-table-window-light.webp",
            "images/shoots/floral-dress/05-arwyn-piano-portrait.webp"
        ]
    },
    "pink-boots": {
        "title": "Pink Boots",
        "images": [
            "images/shoots/pink-boots/01-arwyn-truck-seated.webp",
            "images/shoots/pink-boots/02-arwyn-truck-standing.webp",
            "images/shoots/pink-boots/03-arwyn-truck-over-shoulder.webp",
            "images/shoots/pink-boots/04-arwyn-motorcycle-wide.webp",
            "images/shoots/pink-boots/05-arwyn-motorcycle-handlebars.webp",
            "images/shoots/pink-boots/06-arwyn-motorcycle-seated.webp"
        ]
    },
    "studio-portraits": {
        "title": "Studio Portraits",
        "images": [
            "images/shoots/studio-portraits/01-arwyn-monochrome-portrait.webp",
            "images/shoots/studio-portraits/02-arwyn-standing-front.webp",
            "images/shoots/studio-portraits/03-arwyn-parasol-seated.webp",
            "images/shoots/studio-portraits/04-arwyn-chair-seated.webp",
            "images/shoots/studio-portraits/05-arwyn-chair-low-angle.webp"
        ]
    },
    "bedroom-portraits": {
        "title": "Bedroom Portraits",
        "images": [
            "images/shoots/bedroom-portraits/01-arwyn-reclining-portrait.webp",
            "images/shoots/bedroom-portraits/02-arwyn-seated-close.webp",
            "images/shoots/bedroom-portraits/03-arwyn-seated-pumpkin.webp",
            "images/shoots/bedroom-portraits/04-arwyn-bed-end-seated.webp"
        ]
    },
    "autumn-leather": {
        "title": "Autumn Leather",
        "images": [
            "images/shoots/autumn-leather/01-arwyn-motorcycle-pumpkin.webp",
            "images/shoots/autumn-leather/02-arwyn-truck-pumpkin.webp",
            "images/shoots/autumn-leather/03-arwyn-motorcycle-wide.webp"
        ]
    }
};

const photoMetadata = {"images/shoots/black-gown-editorial/01-arwyn-staircase-portrait.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn in a black lace gown, looking towards the camera beside a staircase"}, "images/shoots/black-gown-editorial/02-arwyn-staircase-front.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn facing the camera in a black gown between wooden stair rails"}, "images/shoots/black-gown-editorial/03-arwyn-staircase-seated.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seated on wooden stairs in a black gown with one hand in her hair"}, "images/shoots/black-gown-editorial/04-arwyn-staircase-over-shoulder.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn looking over her shoulder, showing the lace-up back of a black gown"}, "images/shoots/black-gown-editorial/05-arwyn-staircase-back.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seen from behind walking up the wooden staircase in a black gown"}, "images/shoots/black-gown-editorial/06-arwyn-candle-table-portrait.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seated beside a table and candelabra in a black gown"}, "images/shoots/black-gown-editorial/07-arwyn-candle-table-wide.webp": {"width": 1079, "height": 720, "alt_draft": "Arwyn seated at a decorated table beneath a candelabra"}, "images/shoots/pastel-knit/01-arwyn-hanging-chair-knit.webp": {"width": 720, "height": 1080, "alt_draft": "Arwyn seated in a hanging chair wearing a pale knitted sweater"}, "images/shoots/pastel-knit/02-arwyn-hanging-chair-monochrome.webp": {"width": 720, "height": 1080, "alt_draft": "Black and white portrait of Arwyn curled into a hanging chair"}, "images/shoots/pastel-knit/03-arwyn-hanging-chair-seated.webp": {"width": 720, "height": 1080, "alt_draft": "Arwyn seated cross-legged in a hanging chair with an open cardigan"}, "images/shoots/pastel-knit/04-arwyn-sofa-portrait.webp": {"width": 720, "height": 1080, "alt_draft": "Arwyn seated on a leather sofa in a pale cardigan"}, "images/shoots/pastel-knit/05-arwyn-sofa-wide.webp": {"width": 1079, "height": 719, "alt_draft": "Arwyn reclining on a brown leather sofa beneath floral wallpaper"}, "images/shoots/pastel-knit/06-arwyn-sofa-overhead.webp": {"width": 1047, "height": 720, "alt_draft": "Arwyn reclining on a leather sofa photographed from above"}, "images/shoots/floral-dress/01-arwyn-garden-dress-movement.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn moving a pale floral dress in a sunlit garden"}, "images/shoots/floral-dress/02-arwyn-garden-portrait.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn in a floral dress against softly blurred garden greenery"}, "images/shoots/floral-dress/03-arwyn-interior-seated.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seated on a gold sofa wearing a pale floral dress"}, "images/shoots/floral-dress/04-arwyn-table-window-light.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn in a floral dress beside a polished table and window"}, "images/shoots/floral-dress/05-arwyn-piano-portrait.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn turning towards the camera beside a piano in a floral dress"}, "images/shoots/pink-boots/01-arwyn-truck-seated.webp": {"width": 900, "height": 1349, "alt_draft": "Arwyn seated in a pickup bed wearing pink platform boots and a black-and-white outfit"}, "images/shoots/pink-boots/02-arwyn-truck-standing.webp": {"width": 900, "height": 1349, "alt_draft": "Arwyn standing in a pickup bed with both hands raised beside her head"}, "images/shoots/pink-boots/03-arwyn-truck-over-shoulder.webp": {"width": 900, "height": 1349, "alt_draft": "Arwyn kneeling in a pickup bed and looking back over her shoulder"}, "images/shoots/pink-boots/04-arwyn-motorcycle-wide.webp": {"width": 1079, "height": 720, "alt_draft": "Arwyn lying along a motorcycle with pink boots lifted behind her"}, "images/shoots/pink-boots/05-arwyn-motorcycle-handlebars.webp": {"width": 1079, "height": 720, "alt_draft": "Arwyn framed between motorcycle handlebars looking towards the camera"}, "images/shoots/pink-boots/06-arwyn-motorcycle-seated.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seated on a motorcycle wearing pink platform boots"}, "images/shoots/studio-portraits/01-arwyn-monochrome-portrait.webp": {"width": 720, "height": 720, "alt_draft": "Black and white close portrait of Arwyn in a black asymmetric outfit"}, "images/shoots/studio-portraits/02-arwyn-standing-front.webp": {"width": 720, "height": 1080, "alt_draft": "Arwyn facing the camera in a black asymmetric outfit against a light studio backdrop"}, "images/shoots/studio-portraits/03-arwyn-parasol-seated.webp": {"width": 720, "height": 720, "alt_draft": "Arwyn seated on the studio floor holding a black lace parasol"}, "images/shoots/studio-portraits/04-arwyn-chair-seated.webp": {"width": 720, "height": 720, "alt_draft": "Arwyn seated sideways in a black studio chair with gold heels"}, "images/shoots/studio-portraits/05-arwyn-chair-low-angle.webp": {"width": 720, "height": 720, "alt_draft": "Arwyn reclining across a black studio chair photographed from a low angle"}, "images/shoots/bedroom-portraits/01-arwyn-reclining-portrait.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn reclining on a bed in a black outfit with one arm raised"}, "images/shoots/bedroom-portraits/02-arwyn-seated-close.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seated among cushions in a black outfit looking towards the camera"}, "images/shoots/bedroom-portraits/03-arwyn-seated-pumpkin.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seated on a bed beside a small pumpkin"}, "images/shoots/bedroom-portraits/04-arwyn-bed-end-seated.webp": {"width": 720, "height": 1079, "alt_draft": "Arwyn seated at the end of a bed in a black outfit"}, "images/shoots/autumn-leather/01-arwyn-motorcycle-pumpkin.webp": {"width": 720, "height": 1080, "alt_draft": "Arwyn beside a motorcycle holding a pumpkin and wearing a black leather-look top"}, "images/shoots/autumn-leather/02-arwyn-truck-pumpkin.webp": {"width": 720, "height": 1080, "alt_draft": "Arwyn standing beside a pickup with one hand on a carved pumpkin"}, "images/shoots/autumn-leather/03-arwyn-motorcycle-wide.webp": {"width": 1080, "height": 720, "alt_draft": "Arwyn seated on a motorcycle beside a pumpkin in an autumn garden"}};

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

        shoot.images.forEach((imagePath, index) => {

            const image = document.createElement("img");

            image.src = imagePath;
            const metadata = photoMetadata[imagePath];
            image.alt = metadata?.alt_draft || `${shoot.title} - Arwyn`;
            if (metadata) {
                image.width = metadata.width;
                image.height = metadata.height;
            }

            image.loading = "lazy";
            image.decoding = "async";
            image.tabIndex = 0;
            image.setAttribute("role", "button");
            image.setAttribute("aria-label", `Open ${shoot.title} photo ${index + 1}`);
            image.addEventListener("click", () => {
                openLightbox(Array.from(shootViewerGrid.querySelectorAll("img")), index, image);
            });

            shootViewerGrid.appendChild(image);

        });

        shootViewer.classList.add("active");

        document.body.style.overflow = "hidden";

        shootViewer.scrollTop = 0;
        shootViewer.dataset.trigger = shootName;
        shootViewerClose.focus();

    });

});


function closeShootViewer() {

    shootViewer.classList.remove("active");
    document.querySelector(`[data-shoot="${shootViewer.dataset.trigger}"]`)?.focus();

    document.body.style.overflow = "";

}


shootViewerClose.addEventListener("click", closeShootViewer);


document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        !event.defaultPrevented &&
        shootViewer.classList.contains("active")
    ) {
        closeShootViewer();
    }

});
// Support keyboard activation for photo and collection cards.
document.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches('[role="button"]')) {
        event.preventDefault();
        event.target.click();
    }
});
