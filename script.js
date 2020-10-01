// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "0123456789";
var specialCharacter = "!@#$%&*?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("How many characters would you like your password to be? (Must be 8 or more)");
  var lowerCaseCharacters = prompt("Would you like lowercase letters to be in your password?");
  var upperCaseCharacters = prompt("Would you like Capital letters in your password?");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
