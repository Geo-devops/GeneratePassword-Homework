// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
console.log(lowerArray)
var upperArray = lowerString.toUpperCase().split("");
console.log(upperArray)
var specialString = "!@#$%^&*?(|)";
var SpecialArray = specialString.split("");
console.log(specialString)

function askForOptions() {
  var passLength = parseInt(prompt("How long is password?"));
  console.log(passLength)

  if (passLength < 8 || passLength > 128){
    alert("Please select new number");
    return;

  }
  if (isNaN(passLength)) {
    alert("please select new");
    return;
  }
  var isLower = confirm("Do you want lowercase letters?");
  var isupper = confirm("Do you want UPPERcase letters?");
  var isspecial = confirm("Would you like special characters in your password?");
  console.log(isspecial)

   // stops user from saying no no no to questions that would yeild no password
  if(isLower === false && isupper === false) {
    alert("select one char type");
    return;
  }
 
  var options = {
    passLength,
    isupper,
    isLower,
    isSpecial
  }

  return options
}
function generatePassword() {
  var passOptions = askForOptions();
  console.log(passOptions);

  var superArray = [];
  var results = [];

  if(passOptions.isLower) {
    superArray = superArray.concat(lowerArray)
  }
  if(passOptions.isupper){
    superArray = superArray.concat(upperArray)

  if (passOptions.isspecial){
    superArray = superArray.concat(specialArray)
  }
  }
  console.log(superArray)

  for(var i = 0; i < passOptions.passLength; i++) {
    var index = Math.floor(Math.random() * superArray.length);
    var digit = superArray[index];
    results.push(digit)
    console.log(results)
  }

  return results.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);