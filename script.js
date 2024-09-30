function validatePasswords() {
    var password = document.getElementById('pwd').value;
    var confirmPassword = document.getElementById('confirm_pass').value;
    var errorMessage = document.getElementById('password_error');

    if (password !== confirmPassword) {
        errorMessage.style.display = "inline";  // Show the error message if passwords do not match
        return false; // Prevent form submission
    } else {
        errorMessage.style.display = "none";  // Hide the error message if passwords match
        return true; // Allow form submission
    }
}
