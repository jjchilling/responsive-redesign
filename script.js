document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-image");
  const totalImages = images.length;

  function updateCarousel() {
    images.forEach((img, index) => {
      img.classList.remove("active", "prev", "next");

      if (index === currentIndex) {
        img.classList.add("active");
      } else if (index === (currentIndex - 1 + totalImages) % totalImages) {
        img.classList.add("prev");
      } else if (index === (currentIndex + 1) % totalImages) {
        img.classList.add("next");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  }

  document
    .querySelector(".carousel-btn.left")
    .addEventListener("click", prevSlide);
  document
    .querySelector(".carousel-btn.right")
    .addEventListener("click", nextSlide);

  updateCarousel();
});
