// Sayfa tamamen yüklenmeden bu kodların çalışmasını engelleyen güvenli bir JavaScript yapısı
window.addEventListener('DOMContentLoaded', () => {
    
    const daktiloHedef = document.getElementById('daktilo');
    const kelimeler = [
        "Computer Engineering Student "
    ];

    let kelimeIndeksi = 0;
    let harfIndeksi = 0;
    let isDeleting = false;

    function yaziYaz() {
        const mevcutKelime = kelimeler[kelimeIndeksi];
        
        if (isDeleting) {
            daktiloHedef.textContent = mevcutKelime.substring(0, harfIndeksi - 1);
            harfIndeksi--;
        } else {
            daktiloHedef.textContent = mevcutKelime.substring(0, harfIndeksi + 1);
            harfIndeksi++;
        }

        let yaziHizi = isDeleting ? 40 : 80; // Biraz daha hızlandırdım akıcı olsun diye

        if (!isDeleting && harfIndeksi === mevcutKelime.length) {
            yaziHizi = 1500; // Kelime bitince 1.5 saniye bekle
            isDeleting = true;
        } else if (isDeleting && harfIndeksi === 0) {
            isDeleting = false;
            kelimeIndeksi = (kelimeIndeksi + 1) % kelimeler.length;
            yaziHizi = 500;
        }

        setTimeout(yaziYaz, yaziHizi);
    }

    // Eğer element sayfada başarıyla bulunduysa efekti başlat
    if (daktiloHedef) {
        yaziYaz();
    }
});