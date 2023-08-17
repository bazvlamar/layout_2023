const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("closeButton");
const modalImage = document.getElementById("modalImage");
const galleryImages = document.querySelectorAll(".gallery img");

function openModal(imageSrc) {
    modalImage.src = imageSrc;
    overlay.style.display = "block";
    modal.style.display = "block";
    setTimeout(modal.classList.add("active"), 2000);
}

function closeModal() {
    overlay.style.display = "none";
    modal.style.display = "none";
    modal.classList.remove("active"); // Видаляємо клас "active"
}

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        const fullImageSrc = image.getAttribute("src");
        openModal(fullImageSrc);
    });
});

closeButton.addEventListener("click", closeModal);
