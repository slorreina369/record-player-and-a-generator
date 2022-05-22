// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function lengthPrompt(){
  var passwordLength = "";
  var isInvalid =  true;
  while(isInvalid){
    passwordLength = prompt("How long do you want this password?");
    isInvalid = passwordLength < 8 || passwordLength > 128;
    if(isInvalid){
      window.alert("Your password length is either too small or too high. Please select a length between 8 and 128.")
    }

  };
  return Number.parseInt(passwordLength);
};
function charSetPrompt(){
  var charSet = "";
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
    //the "Pick One Damnit" alert, if they say no to all of the above
    if (charSet ===""){
      window.alert("You said no to all character options. Please select at least one option.")
    }
  }; // end of while loop
  return charSet;
}; //end of charSetPrompt()
function generatePassword(){
  var password = "";
  var char = charSetPrompt();
  var passwordLength = lengthPrompt();
  for (var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber + 1);  
  }; // end of the for bracket 
  return password;
};//end of generatePassword
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
