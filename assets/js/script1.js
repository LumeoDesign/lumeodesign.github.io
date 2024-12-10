document.querySelectorAll("#service").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah default behavior (scroll langsung)

    // Scroll ke target dengan behavior smooth
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
