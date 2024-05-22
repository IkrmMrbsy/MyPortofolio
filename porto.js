const slider = document.querySelector('.card .slider');
const prevButton = document.querySelector('.card-details .prev');
const nextButton = document.querySelector('.card-details .next');
let currentIndex = 0;
const slides = slider.children;

function slideNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    slideTo(currentIndex);
}

function slidePrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slideTo(currentIndex);
}

function slideTo(index) {
    const slideWidth = slides[0].offsetWidth;
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);
