// Toggle between Login and Signup forms
function toggleForm() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    }
}

// Login validation
function validateLogin() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let isValid = true;

    // Clear previous errors
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('loginEmailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    return isValid;
}

// Form validation function for signup
function validateSignupForm() {
    let isValid = true;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous errors
    document.getElementById('signupEmailError').textContent = '';
    document.getElementById('signupPasswordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('signupEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    // Special character validation
    if (!hasSpecialCharacter(password)) {
        document.getElementById('signupPasswordError').textContent = 'Password must contain at least one special character';
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    return isValid;
}

// Email format validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Special character validation
function hasSpecialCharacter(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
}
