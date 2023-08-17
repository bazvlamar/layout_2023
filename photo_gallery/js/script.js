let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");
let closeButton = document.getElementById("closeButton");
let imageModal = document.getElementById("imageModal");
let galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        let fullImageSrc = image.getAttribute("src");
        imageModal.src = fullImageSrc;
        overlay.style.display = "block";
        modal.style.display = "block";
        modal.classList.add("active");
    }
    )
})

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";
})

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";
})