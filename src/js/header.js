const navigationLinks = document.querySelectorAll('.header-nav-link');

navigationLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    navigationLinks.forEach(function (navLink) {
      navLink.classList.remove('nav-link-active');
    });

    this.classList.add('nav-link-active');
  });
});
