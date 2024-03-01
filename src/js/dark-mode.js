const themeSwitcher = document.getElementById('toggleSwitch');

themeSwitcher.addEventListener('change', changeDarkMode);

if (localStorage.getItem('darkMode') === 'true') {
  themeSwitcher.checked = true;
  document.body.classList.add('dark');
}

function changeDarkMode() {
  if (themeSwitcher.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
}
