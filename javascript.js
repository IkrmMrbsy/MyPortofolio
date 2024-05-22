document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.portfolio-item');
    let currentItem = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    document.getElementById('prevBtn').addEventListener('click', function() {
        currentItem = (currentItem > 0) ? currentItem - 1 : items.length - 1;
        showItem(currentItem);
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        currentItem = (currentItem + 1) % items.length;
        showItem(currentItem);
    });

    // Initialize the first item as active
    showItem(currentItem);
});

function scrollToAbout() {
    // Mendapatkan elemen dengan ID "about"
    const aboutSection = document.getElementById('about');
    
    // Melakukan scroll ke elemen "about" dengan efek smooth
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}