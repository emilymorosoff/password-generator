// Assignment code here
let numericValues = "0123456789".split(""); 
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
let specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=".split("");

let includeLowerCaseLetters = false
let includeUpperCaseLetters = false
let includeNumericValues = false
let includeSpecialCharacters = false

function generatePassword() {
  let possibleCharacters = [];
  let numberOfCharacters = prompt("How many characters would you like in your password? Choose between 8-128 characters.")
  numberOfCharacters = parseInt (numberOfCharacters)
  
  if (isNaN(numberOfCharacters) || numberOfCharacters<8 || numberOfCharacters>128) {
    return "Please choose valid number of characters."
  }
  
  else {
    alert ("Your password will be " + numberOfCharacters + " characters long.")
  }
  includeLowerCaseLetters = confirm ("Would you like to include lowercase letters in your password?")
  includeUpperCaseLetters = confirm ("Would you like to include uppercase letters in your password?")
  includeNumericValues = confirm ("Would you like to include numbers in your password?")
  includeSpecialCharacters = confirm ("Would you like to include special characters in your password?")

  if (!includeLowerCaseLetters && !includeUpperCaseLetters && !includeNumericValues && !includeSpecialCharacters) {
    return "Please select at least one character type."
  }
  
if (includeLowerCaseLetters) {
possibleCharacters = possibleCharacters.concat (lowerCaseLetters)
}

if (includeUpperCaseLetters) {
  possibleCharacters = possibleCharacters.concat (upperCaseLetters)
}

if (includeNumericValues) {
  possibleCharacters = possibleCharacters.concat(numericValues)
}

if (includeSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat (specialCharacters)
}

let finalPassword = ""

for(let i = 0; i<numberOfCharacters; i++) {
  let range = Math.ceil(Math.random()*possibleCharacters.length) - 1
  finalPassword += possibleCharacters[range]
}
return finalPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  includeLowerCaseLetters = false
  includeUpperCaseLetters = false
  includeNumericValues = false
  includeSpecialCharacters = false
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
