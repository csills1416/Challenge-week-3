
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=";

var generateBtn = document.querySelector("#generate");

function getUserPreferences() {
    var includeLowercase = confirm("Include Lowercase Letters?");
    var includeUppercase = confirm("Include Uppercase Letters?");
    var includeNumeric = confirm("Include numbers?");
    var includeSpecial = confirm("Include special characters?");
    
    // Validation for at least one character type
    while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("Please select at least one character type to generate.");
        return getUserPreferences();
    }

    var passwordLength = prompt("How long do you want your password to be?");
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Invalid password length: Password must be between 8 and 128 characters.");
        passwordLength = prompt("How long do you want your password to be?");
    }

    return {
        includeLowercase,
        includeUppercase,
        includeNumeric,
        includeSpecial,
        passwordLength
    };
}

function generatePassword() {
    var preferences = getUserPreferences();

    var passwordChars = "";
    if (preferences.includeUppercase) passwordChars += uppercaseChars;
    if (preferences.includeLowercase) passwordChars += lowercaseChars;
    if (preferences.includeNumeric) passwordChars += numericChars;
    if (preferences.includeSpecial) passwordChars += specialChars;

    var password = "";
    for (var i = 0; i < preferences.passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.charAt(randomIndex);
    }

    return password;
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
