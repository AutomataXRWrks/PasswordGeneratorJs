// Assignment code here


function generatePassword(){
  var password = {
    newPassword: [],
    newlenght: 0,
    minlenght: 8,
    maxlenght: 128,
    upperChars: [97,122],
    lowerChars: [65,90],
    numericChars: [48,65],
    lowercase: function(){
      loweCharRand = Math.floor(Math.random() * (this.lowerChars[1] - this.lowerChars[0]) + this.lowerChars[0]);
      loweCharSelect = String.fromCharCode(Math.round(loweCharRand));
      console.log(loweCharRand);

      return loweCharSelect
    } ,
    uppercase: function(){
      upperCharRand = Math.floor(Math.random() * (this.upperChars[1] - this.upperChars[0]) + this.upperChars[0]);
      upperCharSelect = String.fromCharCode(Math.round(upperCharRand));
      console.log(upperCharRand);
      
      return upperCharSelect
    } ,
    numeric: function(){
      numericCharRand = Math.floor(Math.random() * (this.numericChars[1] - this.numericChars[0]) + this.numericChars[0]);
      numericCharSelect = String.fromCharCode(Math.round(numericCharRand));
      console.log(numericCharRand);     

      return numericCharSelect
    },
    specialCharacters: true

  }
  //var  passInitAlert = alert("Choose the inital setting for password generator");
  //var  lenghtPasswordPrompt = prompt("Prompt Criteria #1: Length of the password at least 8 characters and no more than 128 characters");
  //password.newlenght = lenghtPasswordPrompt;
  //console.log("password lenght "+ password.newlenght);
  //var specialCharacters = confirm("Confirm weather or not to include a lowercase, uppercase, numeric, and/or special characters");

  console.log(password.lowercase());
  console.log(password.uppercase());
  console.log(password.numeric());
return "hello"
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