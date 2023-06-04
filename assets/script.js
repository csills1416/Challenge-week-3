// Assignment code here
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var includeLowercase = confirm("Include Lowercase Letters?")
var includeUppercase = confirm("Include Uppercase Letters?")
var includeNumeric = confirm("Include numbers?")
var includeSpecial = confirm("Include special characters?")

//https://www.freecodecamp.org/news/java-operator-and-or-logical-operators/#:~:text=The%20symbol%20%26%26%20denotes%20the,both%20statements%2Fconditions%20are%20true
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("Please select one character type to generate.");
}
//https://www.freecodecamp.org/news/java-operator-and-or-logical-operators/#:~:text=The%20symbol%20%26%26%20denotes%20the,both%20statements%2Fconditions%20are%20true

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

var passwordLength = prompt("How long do you want your possword to be?");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Invalid password: Password must be between 8 and 128 characters");
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var randomIndex = Math.floor(Math.random() * passwordChars.length);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    password += passwordChars.charAt(randomIndex);
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);