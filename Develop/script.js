// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); {
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_-+=";
  
    var includeLowercase = confirm("Include Lowercase Letters?")
    var includeUppercase = confirm("Include Uppercase Letters?")
    var includeNumeric = confirm("Include numbers?")
    var includeSpecial = confirm("Include special characters?")
  }
  var passwordText = document.querySelector("#password");

  var passwordChars = "";
    if (includeUppercase) {
      passwordChars += uppercaseChars;
    }
    if (includeLowercase) {
      passwordChars += lowercaseChars;
    }
    if (includeNumeric) {
      passwordChars += numericChars;
    }
    if (includeSpecial) {
      passwordChars += specialChars;
    }
}

var passwordLength = prompt("How long do you want your password to be?");

if (passwordLength < 8 || passwordLength > 128) {
  alert("Invalid password: Password must be between 8 and 128 characters");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);