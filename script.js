//variables for password
var alpha = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+";

var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incUpperCase = document.getElementById("upperCase");
var incLowerCase = document.getElementById("lowerCase");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
//assignment code
var generateBtn = document.querySelector("#generate");
//event listener for generate button
generateBtn.addEventListener("click", () => {
  let characters = alpha;
  incUpperCase.checked ? (characters += upperCase) : "";
  incLowerCase.checked ? (characters += lowerCase) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

//how it genreates the password
var generatePassword = (length, characters) => {
  let password = "";
  for (let i=0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};