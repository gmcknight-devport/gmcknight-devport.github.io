// Create a global map of Swiper instances
window.swipers = {};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".swiper").forEach((el, index) => {
    // Grab a unique class (not just "swiper")
    const swiperClass = Array.from(el.classList).find(cls => cls !== "swiper");
    if (!swiperClass) return;

    // Avoid initializing the same swiper twice
    if (window.swipers[swiperClass]) return;

    window.swipers[swiperClass] = new Swiper(`.${swiperClass}`, {
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: `.${swiperClass} .swiper-button-next`,
        prevEl: `.${swiperClass} .swiper-button-prev`,
      },
      pagination: {
        el: `.${swiperClass} .swiper-pagination`,
        clickable: true,
      },
    });
  });
});
