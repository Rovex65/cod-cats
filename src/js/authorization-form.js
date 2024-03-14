import * as basicLightbox from 'basiclightbox';

// form templates
const switcherHtml = `<div class="switch-form">
                        <div class="choice-item sign-up-choice">
                            <input class="form-choice" name="form-choice" type="radio" value="sign-up" id="choice-1" checked>
                            <label for="choice-1" id="label_choice-1">Sign Up</label>
                        </div>
                        <div class="choice-item log-in-choice">
                            <input class="form-choice" name="form-choice" type="radio" value="log-in" id="choice-2">
                            <label for="choice-2" id="label_choice-2">Log In</label>
                        </div>
                    </div>`;

function signUpFormTemplate() {
  return `<form data-sign-up>
                <div class="input-wrap">
                    <input type="text" id="username" name="username" placeholder="Name">
                </div>
                <div class="input-wrap">
                    <input type="email" id="email" name="email" placeholder="Email" required>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0835 21L17.3335 14M10.6668 14L2.91687 21M2.3335 8.16669L11.8592 14.8347C12.6306 15.3747 13.0163 15.6446 13.4358 15.7492C13.8064 15.8416 14.194 15.8416 14.5645 15.7492C14.984 15.6446 15.3697 15.3747 16.1411 14.8347L25.6668 8.16669M7.9335 23.3334H20.0668C22.027 23.3334 23.0071 23.3334 23.7558 22.9519C24.4144 22.6163 24.9498 22.0809 25.2854 21.4223C25.6668 20.6736 25.6668 19.6935 25.6668 17.7334V10.2667C25.6668 8.3065 25.6668 7.32641 25.2854 6.57772C24.9498 5.91915 24.4144 5.38372 23.7558 5.04816C23.0071 4.66669 22.027 4.66669 20.0668 4.66669H7.9335C5.97331 4.66669 4.99322 4.66669 4.24453 5.04816C3.58596 5.38372 3.05053 5.91915 2.71497 6.57772C2.3335 7.32641 2.3335 8.3065 2.3335 10.2667V17.7334C2.3335 19.6935 2.3335 20.6736 2.71497 21.4223C3.05053 22.0809 3.58596 22.6163 4.24453 22.9519C4.99322 23.3334 5.97331 23.3334 7.9335 23.3334Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="input-wrap">
                    <input type="password" id="pwd" name="pwd" minlength="6" placeholder="Password" required>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8333 12.8333V9.33333C19.8333 6.11167 17.2217 3.5 14 3.5C10.7783 3.5 8.16667 6.11167 8.16667 9.33333V12.8333M9.1 24.5H18.9C20.8602 24.5 21.8403 24.5 22.589 24.1185C23.2475 23.783 23.783 23.2475 24.1185 22.589C24.5 21.8403 24.5 20.8602 24.5 18.9V18.4333C24.5 16.4731 24.5 15.4931 24.1185 14.7444C23.783 14.0858 23.2475 13.5504 22.589 13.2148C21.8403 12.8333 20.8602 12.8333 18.9 12.8333H9.1C7.13982 12.8333 6.15972 12.8333 5.41103 13.2148C4.75247 13.5504 4.21703 14.0858 3.88148 14.7444C3.5 15.4931 3.5 16.4731 3.5 18.4333V18.9C3.5 20.8602 3.5 21.8403 3.88148 22.589C4.21703 23.2475 4.75247 23.783 5.41103 24.1185C6.15972 24.5 7.13982 24.5 9.1 24.5Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <button type="submit">Sign Up</button>
            </form>`;
}

function logInFormTemplate() {
  return `<form data-sign-in>
                <div class="input-wrap">
                    <input type="email" id="email" name="email" placeholder="Email" required>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0835 21L17.3335 14M10.6668 14L2.91687 21M2.3335 8.16669L11.8592 14.8347C12.6306 15.3747 13.0163 15.6446 13.4358 15.7492C13.8064 15.8416 14.194 15.8416 14.5645 15.7492C14.984 15.6446 15.3697 15.3747 16.1411 14.8347L25.6668 8.16669M7.9335 23.3334H20.0668C22.027 23.3334 23.0071 23.3334 23.7558 22.9519C24.4144 22.6163 24.9498 22.0809 25.2854 21.4223C25.6668 20.6736 25.6668 19.6935 25.6668 17.7334V10.2667C25.6668 8.3065 25.6668 7.32641 25.2854 6.57772C24.9498 5.91915 24.4144 5.38372 23.7558 5.04816C23.0071 4.66669 22.027 4.66669 20.0668 4.66669H7.9335C5.97331 4.66669 4.99322 4.66669 4.24453 5.04816C3.58596 5.38372 3.05053 5.91915 2.71497 6.57772C2.3335 7.32641 2.3335 8.3065 2.3335 10.2667V17.7334C2.3335 19.6935 2.3335 20.6736 2.71497 21.4223C3.05053 22.0809 3.58596 22.6163 4.24453 22.9519C4.99322 23.3334 5.97331 23.3334 7.9335 23.3334Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="input-wrap">
                    <input type="password" id="pwd" name="pwd" minlength="6" placeholder="Password" required>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8333 12.8333V9.33333C19.8333 6.11167 17.2217 3.5 14 3.5C10.7783 3.5 8.16667 6.11167 8.16667 9.33333V12.8333M9.1 24.5H18.9C20.8602 24.5 21.8403 24.5 22.589 24.1185C23.2475 23.783 23.783 23.2475 24.1185 22.589C24.5 21.8403 24.5 20.8602 24.5 18.9V18.4333C24.5 16.4731 24.5 15.4931 24.1185 14.7444C23.783 14.0858 23.2475 13.5504 22.589 13.2148C21.8403 12.8333 20.8602 12.8333 18.9 12.8333H9.1C7.13982 12.8333 6.15972 12.8333 5.41103 13.2148C4.75247 13.5504 4.21703 14.0858 3.88148 14.7444C3.5 15.4931 3.5 16.4731 3.5 18.4333V18.9C3.5 20.8602 3.5 21.8403 3.88148 22.589C4.21703 23.2475 4.75247 23.783 5.41103 24.1185C6.15972 24.5 7.13982 24.5 9.1 24.5Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <button type="submit">Log In</button>
            </form>`;
}

function renderChosenForm(e) {
  const forWrap = document.querySelector('.auth-form .form-wrap');
  const checked = document.querySelector('.auth-form input:checked');
  //   let formHtml;

  // get Sign Up form template
  if (checked.value === 'sign-up' && e.target.closest('.switch-form')) {
    const formHtml = signUpFormTemplate();
    forWrap.innerHTML = formHtml;
  }
  // get Log In form template
  if (checked.value === 'log-in' && e.target.closest('.switch-form')) {
    const formHtml = logInFormTemplate();
    forWrap.innerHTML = formHtml;
  }
}

let modal;
function createAuthForm() {
  const formHtml = signUpFormTemplate();
  const fullHtml = `<div class="auth-form">
                        ${switcherHtml}
                        <div class="form-wrap">${formHtml}</div>
                    </div>`;

  modal = basicLightbox.create(fullHtml, {
    onShow: () => {
      document.body.classList.add('form-opened');
      document.addEventListener('change', renderChosenForm);
    },
    onClose: () => {
      document.body.classList.remove('form-opened');
      document.removeEventListener('change', renderChosenForm);
    },
  });
  modal.show();
}

export { modal, createAuthForm };