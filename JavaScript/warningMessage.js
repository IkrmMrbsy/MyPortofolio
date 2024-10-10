function toggleWarning() {
    const message = document.querySelector('.warning-message');
    
    if (message.style.display === 'none' || message.style.display === '') {
        message.style.display = 'block'; // Tampilkan pesan
        setTimeout(() => {
            message.style.opacity = '1'; // Set opacity ke 1
            message.style.transform = 'scale(1)'; // Set scale ke 1
        }, 10); // Delay kecil agar animasi dapat dimulai
    } else {
        message.style.opacity = '0'; // Set opacity ke 0
        message.style.transform = 'scale(0.9)'; // Set scale ke 0.9
        setTimeout(() => {
            message.style.display = 'none'; // Sembunyikan pesan setelah animasi
        }, 400); // Sesuaikan waktu delay dengan durasi animasi
    }
}
