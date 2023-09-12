const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const loginButton = document.getElementById('loginButton');

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function handleSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate email
    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validate password (you can add more specific validation here)
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // If both email and password are valid, redirect to welcome.html
    window.location.href = 'welcome.html';
}

loginButton.addEventListener('click', handleSubmit);
