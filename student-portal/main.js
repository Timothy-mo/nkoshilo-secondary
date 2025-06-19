// === ACTIVE SIDEBAR NAVIGATION ===
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.sidebar a');

  navLinks.forEach(link => {
    const hrefPage = link.getAttribute('href');
    if (hrefPage === currentPage) {
      link.classList.add('active');
    }
  });
});

// === SIDEBAR TOGGLE FOR MOBILE (OPTIONAL) ===
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });
}

// === ANNOUNCEMENT DISMISS (OPTIONAL FEATURE) ===
const closeButtons = document.querySelectorAll('.announcement .close');

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.style.display = 'none';
  });
});

// === PROFILE DROPDOWN (OPTIONAL) ===
const profileBtn = document.querySelector('.profile-btn');
const profileMenu = document.querySelector('.profile-menu');

if (profileBtn && profileMenu) {
  profileBtn.addEventListener('click', () => {
    profileMenu.classList.toggle('visible');
  });
}

// === DARK MODE TOGGLE (OPTIONAL FOR FUTURE) ===
// const toggleTheme = document.getElementById('toggleTheme');
// toggleTheme?.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

