//Assignment Code 
var generateBtn = document.querySelector("#generate");


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



// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));

  
  while(passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8-128 characters Try again");
      var passwordLength = (prompt("How many characters would you like your password to contain?"));
      } 

        
      alert(`Your password will have ${passwordLength} characters`);

    
    var includeSpecChar = confirm("Click OK to confirm if you would like to include special characters");
    var includeNumbers = confirm("Click OK to confirm if you would like to include numeric characters");    
    var includeLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var includeUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
      while(includeUpperCase === false && includeLowerCase === false && includeSpecChar === false && includeNumbers === false) {
        alert("You must choose at least one parameter");
        var includeSpecChar = confirm("Click OK to confirm if you would like to include special characters");
        var includeNumbers = confirm("Click OK to confirm if you would like to include numeric characters");    
        var includeLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var includeUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      var passwordCharacters = []
      
    if (includeSpecChar) {
      passwordCharacters = passwordCharacters.concat(symbols)
    }

    if (includeNumbers) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }
      
    if (includeLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerAlpha)
    }

    if (includeUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperAlpha)
    }

      console.log(passwordCharacters)

      //  for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
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

//Event Listener to prompt questions when button pushed
generateBtn.addEventListener("click", writePassword);