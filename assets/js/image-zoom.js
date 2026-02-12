(() => {
  const modal = document.getElementById("image-zoom-modal");
  if (!modal || modal.dataset.initialized === "true") return;
  modal.dataset.initialized = "true";

  const target = document.getElementById("image-zoom-target");
  const closeButtons = modal.querySelectorAll("[data-image-zoom-close]");
  const triggers = document.querySelectorAll("[data-zoom-image]");

  const syncBodyScrollLock = () => {
    const hasOpenModal = document.querySelector(".modal.is-open, .image-zoom-modal.is-open");
    document.body.classList.toggle("modal-open", !!hasOpenModal);
  };

  const openModal = (src, alt) => {
    target.src = src;
    target.alt = alt || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    syncBodyScrollLock();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    target.src = "";
    target.alt = "";
    syncBodyScrollLock();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const img = trigger.querySelector("img");
      openModal(trigger.dataset.zoomImage || img?.src, img?.alt || "");
    });
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeModal));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
