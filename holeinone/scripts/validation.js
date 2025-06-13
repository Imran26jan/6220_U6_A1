// ===== validation.js =====

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    let valid = true;

    // Clear previous errors
    form.querySelectorAll(".error").forEach(el => el.remove());

    // Name validation
    if (!name.value.trim()) {
      showError(name, "Please enter your name.");
      valid = false;
    }

    // Email validation
    if (!email.value.trim()) {
      showError(email, "Please enter your email address.");
      valid = false;
    } else if (!validateEmail(email.value.trim())) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    }

    // Message validation
    if (!message.value.trim()) {
      showError(message, "Please enter your message.");
      valid = false;
    }

    if (!valid) e.preventDefault(); // Stop form from submitting if invalid
  });

  function showError(input, message) {
    const error = document.createElement("span");
    error.classList.add("error");
    error.style.color = "red";
    error.style.fontSize = "0.85rem";
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
