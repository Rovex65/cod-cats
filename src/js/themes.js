// DOM
const body = document.body;
const logoText = document.querySelector('.logo-text');
const burgerMenu = document.querySelector('.header-burger-menu');
const headerNavLink = document.querySelector('.header-nav-link');
const header = document.querySelector('.header-container');
const toggleSwitch = document.getElementById('toggleSwitch');

// Значення кольорів
const bodyBackgroundColor =
  getComputedStyle(body).getPropertyValue('background-color');
const textColor = getComputedStyle(body).getPropertyValue('color');
const logoColor = getComputedStyle(logoText).getPropertyValue('fill');
const burgerButtonColor = getComputedStyle(burgerMenu).getPropertyValue('fill');
const headerNavigationColor =
  getComputedStyle(headerNavLink).getPropertyValue('color');
const headerBackgroundColor =
  getComputedStyle(header).getPropertyValue('background-color');
const headerBorderColor =
  getComputedStyle(header).getPropertyValue('border-color');

// Значення CSS для світлої і темної теми
const lightTheme = {
  bodyBackgroundColor: '#fff',
  textColor: '#111',
  logoColor: '#000',
  burgerButtonColor: '#111',
  headerNavigationColor: '#111',
  headerBackgroundColor: '#fff',
  headerBorderColor: '#111',
};

const darkTheme = {
  bodyBackgroundColor: '#202024',
  textColor: '#fff',
  logoColor: 'F3F3F3',
  burgerButtonColor: '#fff',
  headerNavigationColor: '#fff',
  headerBackgroundColor: '#111',
  headerBorderColor: '#fff',
};

// Функція для встановлення теми
function setTheme(theme) {
  body.style.backgroundColor = theme.bodyBackgroundColor;
  body.style.color = theme.textColor;
  logoText.style.fill = theme.logoColor;
  burgerMenu.style.fill = theme.burgerButtonColor;
  headerNavLink.style.color = theme.headerNavigationColor;
  header.style.backgroundColor = theme.headerBackgroundColor;
  header.style.borderColor = theme.headerBorderColor;

  // Зберігаємо вибрану тему в localStorage
  localStorage.setItem('currentTheme', JSON.stringify(theme));
}

// Додаємо обробник події для чекбоксу
toggleSwitch.addEventListener('change', toggleTheme);

// Функція для вибору теми залежно від стану чекбоксу
function toggleTheme() {
  if (toggleSwitch.checked) {
    setTheme(darkTheme);
  } else {
    setTheme(lightTheme);
  }
}

// Перевіряємо, яка тема була вибрана останньою і встановлюємо її
const storedTheme = JSON.parse(localStorage.getItem('currentTheme'));
if (storedTheme) {
  setTheme(storedTheme);
} else {
  // Якщо тема ще не була вибрана, за замовчуванням встановлюємо світлу тему
  setTheme(lightTheme);
}
