// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function lengthPrompt(){
  var passwordLength = "";
  var isInvalid =  true;

  // Demand a a valid password length from the user. Yell at them.
  while(isInvalid){
    passwordLength = prompt("How long do you want this password?");
    isInvalid = passwordLength < 8 || passwordLength > 128;
    
    if(isInvalid){
      window.alert("Your password length is either too small or too high. Please select a length between 8 and 128.")
    }
  };// End of while loop

  return Number.parseInt(passwordLength);
}; // End of lengthPrompt

function charSetPrompt(){
  var charSet = "";

  // Query user for valid character sets. (originally coded as charizard.)
  while(charSet === ""){
    var confirmUpperCase = window.confirm("Do you want upper case letters?");
    if(confirmUpperCase){
      var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      charSet = charSet + upperAlpha;
    };

    var confirmLowerCase = window.confirm("Do you want lower case letters?");
    if(confirmLowerCase){
      var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
      charSet = charSet + lowerAlpha;
    };

    var confirmNumbers = window.confirm("Would you like to add numbers?");
    if(confirmNumbers){
      var num = "0123456789";
      charSet = charSet + num;
    };
    
    var confirmSpecialChar = window.confirm("Would you like to add special characters?");
    if(confirmSpecialChar){
      var specialchar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
      charSet = charSet + specialchar;
    };
    
    // The "Pick One Damnit" alert, if they say no to all of the above
    if (charSet ===""){
      window.alert("You said no to all character options. Please select at least one option.")
    };
  }; // End of while loop

  return charSet;
}; // End of charSetPrompt()

function generatePassword(){
  var password = "";
  var char = charSetPrompt();
  var passwordLength = lengthPrompt();
  
  for (var i = 0; i < passwordLength; i++){
    // Get a random character from the character set(or charizard set if you will).
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber + 1);  
  }; // End of the for bracket 

  return password;
};// End of generatePassword

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}// End of writePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
