// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt ("How Long do you want your password to be?")
  if (passwordLength < 8, passwordLength > 128)
    password = true;
    else
    (passwordLength > 8, passwordLength < 128)
    password = false;
}
//https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript#:~:text=To%20generate%20a%20random%20word,random().
  var password = "";
  for (var i = 0; i < passwordLength; i++)
//https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript#:~:text=To%20generate%20a%20random%20word,random().

function writePassword () {
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=";

var includeLowercase = confirm("Include Lowercase Letters?")
var includeUppercase = confirm("Include Uppercase Letters?")
var includeNumeric = confirm("Include numbers?")
var includeSpecial = confirm("Include special characters?")
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
