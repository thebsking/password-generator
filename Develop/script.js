// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  lowerCase: "abcedefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "01234567890",
  special: "!@#$%&*()"
};
var userLength; 
var userOptions = [];

function generatePassword() {
//user prompts
function lengthPrompt() {
  
  userLength = prompt("Please chose a password length (between 8 & 128");
  if (userLength < 8 || userLength > 128) {
    alert("Please choose a number between 8 & 128");
    lengthPrompt();
  } 
};
function characterPrompts() {
  //include lowercase
 var choice1 = confirm("Do you want to include lower case letters?");
 if(choice1){
  userOptions.push(characters.lowerCase);
  console.log(choice1);
};
//include uppercase
 var choice2 = confirm("Do you want to include upper case letters?");
 if(choice2) {
  userOptions.push(characters.upperCase);
};
//include numbers
 var choice3 = confirm("Do you want to include numbers?");
 if(choice3) {
  userOptions.push(characters.numbers);
;}
//include special characters
 var choice4 = confirm("do you want to include special characters?");
 if(choice4) {
  userOptions.push(characters.special);
};
  if (!choice1 && !choice2 && !choice3 && !choice4) {
    alert("You must include at least one type");
    characterPrompts();
  };
} ;






//loop through options array

lengthPrompt();
characterPrompts();
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
