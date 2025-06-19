// main.js

// Toggle sidebar visibility on mobile
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Close sidebar if click outside (on mobile)
function setupOutsideClick() {
  document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const toggle = document.querySelector(".menu-toggle");
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      sidebar.classList.remove("active");
    }
  });
}

// Keyboard accessibility: close sidebar with Escape key
function setupKeyboardAccessibility() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const sidebar = document.getElementById("sidebar");
      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
      }
    }
  });
}

// Initialize all event listeners
function init() {
  setupOutsideClick();
  setupKeyboardAccessibility();
}

document.addEventListener("DOMContentLoaded", init);
