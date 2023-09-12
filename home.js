const registrationForm = document.getElementById('registrationForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const addressInput = document.getElementById('address');
const phoneNumberInput = document.getElementById('phoneNumber');
const ageInput = document.getElementById('age');
const facultyInput = document.getElementById('faculty');
const departmentInput = document.getElementById('department');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const addressError = document.getElementById('addressError');
const phoneNumberError = document.getElementById('phoneNumberError');
const ageError = document.getElementById('ageError');
const facultyError = document.getElementById('facultyError');
const departmentError = document.getElementById('departmentError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function handleSubmit(event) {
    event.preventDefault();

    // Reset previous error messages
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    addressError.textContent = '';
    phoneNumberError.textContent = '';
    ageError.textContent = '';
    facultyError.textContent = '';
    departmentError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Get the user input
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const address = addressInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();
    const age = ageInput.value.trim();
    const faculty = facultyInput.value.trim();
    const department = departmentInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation for each field (you can add more specific validation)
    if (firstName === '') {
        firstNameError.textContent = 'First name is required.';
    }

    if (lastName === '') {
        lastNameError.textContent = 'Last name is required.';
    }

    if (address === '') {
        addressError.textContent = 'Address is required.';
    }

    if (phoneNumber === '') {
        phoneNumberError.textContent = 'Phone number is required.';
    }

    if (isNaN(age) || age < 18) {
        ageError.textContent = 'Age must be a valid number and at least 18.';
    }

    if (faculty === '') {
        facultyError.textContent = 'Faculty is required.';
    }

    if (department === '') {
        departmentError.textContent = 'Department is required.';
    }

    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
    }

    // If there are no error messages, the form is valid and can be submitted
    if (!firstNameError.textContent && !lastNameError.textContent && !addressError.textContent
        && !phoneNumberError.textContent && !ageError.textContent && !facultyError.textContent
        && !departmentError.textContent && !emailError.textContent && !passwordError.textContent) {
        // You can submit the form here or perform any other actions
        // For now, let's show an alert to indicate successful submission
        alert('Form submitted successfully!');
    }
}

registrationForm.addEventListener('submit', handleSubmit);
