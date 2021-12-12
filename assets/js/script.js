// The Password generator JS

//Declare variable references to the #generate element
var generateBtn = document.querySelector("#generate");



// Declare variables containing all letters, numbers, and symbols
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", "\:", ";", "?", ">", "<", ",", ".", "/", "-", "="];


// Variable Declaration to store the value of the prompts
var passwordLength = "";
var includeUpperCase;
var includeLowerCase;
var includeNumbers;
var includeSpecChar;



// Main function to generate random password 
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain? (Must be between 8 to 128 characters)"));

  // Loop if response is outside the 8 to 128 password length
  while(passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8-128 characters Try again");
      var passwordLength = (prompt("How many characters would you like your password to contain? (Must be between 8 to 128 characters)"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${passwordLength} characters`);

    // Determine parameters of password to be included uppercase,lowercase, numeric or special characters
    var includeUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    var includeLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var includeNumbers = confirm("Click OK to confirm if you would like to include numeric characters");
    var includeSpecChar = confirm("Click OK to confirm if you would like to include special characters");
        
    
      // Loop if non of the character types are confimed 
      while(includeUpperCase === false && includeLowerCase === false && includeSpecChar === false && includeNumbers === false) {
        alert("You must choose at least one parameter");
        var includeUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
        var includeLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var includeNumbers = confirm("Click OK to confirm if you would like to include numeric characters");
        var includeSpecChar = confirm("Click OK to confirm if you would like to include special characters");
            
           
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      var characterTypes = []
      
    if (includeSpecChar) {
        characterTypes = characterTypes.concat(symbols)
    }

    if (includeNumbers) {
        characterTypes = characterTypes.concat(numbers)
    }
      
    if (includeLowerCase) {
        characterTypes = characterTypes.concat(lowerAlpha)
    }

    if (includeUpperCase) {
        characterTypes = characterTypes.concat(upperAlpha)
    }

      console.log(characterTypes)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + characterTypes[Math.floor(Math.random() * characterTypes.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);