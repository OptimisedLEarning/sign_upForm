function validatePasswords() {
    var password = document.getElementById('pwd').value;
    var confirmPassword = document.getElementById('confirm_pass').value;
    var errorMessage = document.getElementById('error_message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false; // Prevent form submission
    }

    errorMessage.textContent = ""; // Clear error message if passwords match
    return true; // Allow form submission
}
