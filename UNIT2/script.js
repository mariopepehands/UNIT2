document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slider-img");
    let currentIndex = 0;

    const nextImage = () => {
        images[currentIndex].classList.remove("active"); // Scoate clasa "active" de la imaginea curentă
        currentIndex = (currentIndex + 1) % images.length; // Trece la următoarea imagine
        images[currentIndex].classList.add("active"); // Adaugă clasa "active" la imaginea următoare
    };

    setInterval(nextImage, 3000); // Schimbă imaginea la fiecare 3 secunde
});
