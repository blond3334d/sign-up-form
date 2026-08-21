// password.addEventListeners("input", checkPasswordsMatch);
// confirmPw.addEventListeners("input", checkPasswordsMatch);

document.getElementById('sign-up-form').addEventListener('input', function() {
    checkPasswordsMatch();
});

function checkPasswordsMatch() {
    const password = document.querySelector('#user-password').value;
    const confirmPw = document.querySelector('#user-password2').value;
    const errorMessage = document.querySelector('#errorMessage');

    if (!password || !confirmPw) {
        errorMessage.textContent = '';
        errorMessage.classList.remove('error');
        document.querySelector('#user-password2').classList.remove('password-mismatch');
        return;
    }

    if (password !== confirmPw) {
        errorMessage.textContent = 'Passwords do not match';
        errorMessage.classList.add('error');
        document.querySelector('#user-password2').classList.add('password-mismatch');
    }
    else {
        errorMessage.textContent = '';
        errorMessage.classList.remove('error');
        document.querySelector('#user-password2').classList.remove('password-mismatch');
    }
}