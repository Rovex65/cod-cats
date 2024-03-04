const activePage = window.location.pathname;
const navLink = document.querySelectorAll('.header-nav-link');
navLink.forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('nav-link-active');
  }
});
