// Untuk Interaksi dengan Konten Setelah Halaman Dimuat
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');

    // Untuk Efek Hover pada Skill Cards
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.1) rotate(5deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Untuk Efek Hover pada Project Cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 20px 40px rgba(66, 135, 245, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });
});
