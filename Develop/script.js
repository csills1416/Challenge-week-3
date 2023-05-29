// Assignment code here



var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=";

var includeLowercase = confirm("Include Lowercase Letters?")
var includeUppercase = confirm("Include Uppercase Letters?")
var includeNumeric = confirm("Include numbers?")
var includeSpecial = confirm("Include special characters?")

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("Please select at least one character type.");
  return "";
}

function generatePassword () {
  if (passwordLength < 8 || passwordLength > 128);
  alert("Password Length must be between 8 and 128")
  return "";
}


var passwordChars = "";

if (includeUppercase) {
  passwordChars += uppercaseChars;
}

if (includeNumeric) {
  passwordChars += numericChars;
}

if (includeSpecial) {
  passwordChars += specialChars;
}

if (includeLowercase) {
  passwordChars += lowercaseChars;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
