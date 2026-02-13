(() => {
  const modal = document.getElementById("demo-modal");
  if (!modal || modal.dataset.initialized === "true") return;
  modal.dataset.initialized = "true";

  const openers = document.querySelectorAll("[data-modal-open]");
  const closers = modal.querySelectorAll("[data-modal-close]");
  const form = modal.querySelector("[data-demo-form]");
  const status = modal.querySelector("[data-form-status]");
  const submitButton = modal.querySelector("[data-submit-button]");

  const syncBodyScrollLock = () => {
    const hasOpenModal = document.querySelector(".modal.is-open, .image-zoom-modal.is-open");
    document.body.classList.toggle("modal-open", !!hasOpenModal);
  };

  const setStatus = (message, type) => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = type || "";
  };

  const open = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    setStatus("", "");
    syncBodyScrollLock();
  };

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    syncBodyScrollLock();
  };

  openers.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      open();
    }),
  );

  closers.forEach((btn) => btn.addEventListener("click", close));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      close();
    }
  });

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const endpoint = form.dataset.apiUrl;
    const payload = {
      name: form.elements.name?.value?.trim(),
      email: form.elements.email?.value?.trim(),
      details: form.elements.details?.value?.trim(),
      kind: "demo_request",
      source: window.location.href,
    };

    if (!payload.name || !payload.email || !payload.details) {
      setStatus("Please complete all fields.", "error");
      return;
    }

    if (!endpoint) {
      setStatus("Demo request endpoint is not configured.", "error");
      return;
    }

    submitButton.disabled = true;
    setStatus("Sending request...", "pending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("Thanks. Your request was sent.", "success");
      setTimeout(() => {
        close();
      }, 500);
    } catch (_error) {
      setStatus("Could not send request. Please try again.", "error");
    } finally {
      submitButton.disabled = false;
    }
  });
})();
