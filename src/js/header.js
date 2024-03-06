const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.header-nav-link');

let foundActiveLink = false;

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  console.log(href, activePage, navLinks);
  if (activePage.endsWith(href)) {
    link.classList.add('nav-link-active');
    foundActiveLink = true;
  }
});

if (!foundActiveLink) {
  navLinks[0].classList.add('nav-link-active');
}
