password = document.querySelector('#user-password');
confirmPw = document.querySelector('#user-password2')
errorMessage = document.querySelector('.errorMessage');

function checkPasswordsMatch() {
    if (password.value === confirmPw.value) {
        errorMessage.style.visibility = 'hidden';
    } else {
        errorMessage.style.visibility = 'visible';
    }
}

if (password.textContent !== confirmPw.textContent) errorMessage.style.visibility = 'visible';

password.addEventListeners("input", checkPasswordsMatch);
confirmPw.addEventListeners("input", checkPasswordsMatch)