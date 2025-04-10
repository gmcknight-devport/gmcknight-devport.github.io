document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-modal-trigger]").forEach(trigger => {
    trigger.addEventListener("click", () => {
      // 🧼 Clear hash from URL to prevent accidental :target-based accordion opening
      history.replaceState(null, null, " ");

      const id = trigger.getAttribute("data-modal-trigger");
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add("active");
        document.body.classList.add("no-scroll");

        // Find swiper inside the modal and update it
        const swiperEl = modal.querySelector(".swiper");
        if (swiperEl) {
          const swiperClass = Array.from(swiperEl.classList).find(cls => cls !== "swiper");
          const swiperInstance = window.swipers[swiperClass];
          if (swiperInstance) swiperInstance.update();
        }
      }
    });
  });

  // Modal close logic
  document.querySelectorAll(".modal-container").forEach(modal => {
    modal.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");

      // Optional: clear hash on modal close too
      history.replaceState(null, null, " ");
    });

    const modalContent = modal.querySelector(".modal");
    if (modalContent) {
      modalContent.addEventListener("click", e => e.stopPropagation());
    }

    modal.querySelectorAll(".modal-close").forEach(closeBtn => {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.classList.remove("no-scroll");

        // Optional: clear hash again on close
        history.replaceState(null, null, " ");
      });
    });
  });
});