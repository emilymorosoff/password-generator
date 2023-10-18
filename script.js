// Assignment code here
let numericValues = "0123456789".split(""); 
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
let specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=".split("");
let possibleCharacters = [];
function generatePassword() {
  let numberOfCharacters = prompt("How many characters would you like in your password? Choose between 8-128 characters.")
  numberOfCharacters = parseInt (numberOfCharacters)
  if (isNaN(numberOfCharacters) || numberOfCharacters<8 || numberOfCharacters>128) {
    return "Please choose valid number of characters."
  }
  else {
    return "Your password will be " + numberOfCharacters + " characters long."
  }
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
