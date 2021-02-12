// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  lowerCase: "abcedefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "01234567890",
  special: "!@#$%&*()"
};

var selectedOptions = [];

function generatePassword() {
  
//user prompts
  var userLeng = prompt("Please chose a password length (between 8 & 128");
  if (userLeng < 8 || userLeng > 128) {
    alert("Please choose a number between 8 & 128");
    generatePassword();
  } 

  //include lowercase
 var confirmLower = confirm("Do you want to include lower case letters?");
 if(confirmLower){
  selectedOptions.push(characters.lowerCase.split(''));
};
//include uppercase
 var confirmUpper = confirm("Do you want to include upper case letters?");
 if(confirmUpper) {
  selectedOptions.push(characters.upperCase.split(''));
};
//include numbers
 var confirmNumbers = confirm("Do you want to include numbers?");
 if(confirmNumbers) {
  selectedOptions.push(characters.numbers.split(''));
;}
//include special characters
 var confirmSpecial = confirm("do you want to include special characters?");
 if(confirmSpecial) {
  selectedOptions.push(characters.special.split(''));
};
  if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecial) {
    alert("You must include at least one type");
    generatePassword();
  };


//loop through options array
var results = [];
var outerIndex;
var innerIndex;
for (var i = 0; i <= userLeng; i++) {
  outerIndex = Math.floor(Math.random()*selectedOptions.length);
  innerIndex = Math.floor(Math.random()*selectedOptions[outerIndex].length);
  results.push(selectedOptions[outerIndex].splice(innerIndex, 1));
}
var output = results.join('');

return output;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
