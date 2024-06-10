document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add('active');
                img.classList.remove('inactive');
            } else {
                img.classList.remove('active');
                img.classList.add('inactive');
            }
        });

        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos

    updateCarousel(); // Inicializa el carrusel
});
