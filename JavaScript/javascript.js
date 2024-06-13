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

    showItem(currentItem);
});

function scrollToAbout() {
    const aboutSection = document.getElementById('about');

    setTimeout(() => {

        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}
