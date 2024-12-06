document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const caption = document.querySelector('.caption');
    const prevBtn = document.querySelector('.nav.prev');
    const nextBtn = document.querySelector('.nav.next');

    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        // Highlight the active thumbnail
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });

        // Update caption
        caption.textContent = slides[index].getAttribute('data-caption');
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Event listener for thumbnail clicks
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Initialize slider
    showSlide(currentSlide);
});
