// Auto play music dengan interaksi user (agar tidak diblok browser)
document.addEventListener('click', function() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play().catch(() => {});
    }
}, { once: true });

// Optional: Ganti foto profil (ganti link URL foto Anda)
document.getElementById('profile-photo').src = "Gilang.jpg";
// Ganti dengan link foto asli Anda nanti