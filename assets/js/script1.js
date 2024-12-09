document.querySelectorAll("#servicedex").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah default behavior

    // Mendapatkan elemen target
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Menghitung posisi elemen target
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Durasi animasi dalam ms
      let start = null;

      // Fungsi animasi scroll
      function smoothScroll(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = Math.min(progress / duration, 1); // easing linear
        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          requestAnimationFrame(smoothScroll); // Lanjutkan animasi
        }
      }

      // Mulai animasi
      requestAnimationFrame(smoothScroll);
    }
  });
});
