// Assignment code here

function generatePassword(){

  var password = {
    newPassword: "",
    charSelect: [],
    newlenght: 0,
    minlenght: 8,
    maxlenght: 128,
    upperChars: [65,90],
    lowerChars: [97,122],
    numericChars: [48,57],
    specialCharsA: [33,47],
    specialCharsB: [58,64],
    specialCharsC: [91,96],
    specialCharsD: [123,126],

    lowercase: function(){
      loweCharRand = Math.floor(Math.random() * (this.lowerChars[1] - this.lowerChars[0]) + this.lowerChars[0]);
      loweCharSelect = String.fromCharCode(Math.round(loweCharRand));
      //console.log(loweCharRand);

      return loweCharSelect
    } ,

    uppercase: function(){
      upperCharRand = Math.floor(Math.random() * (this.upperChars[1] - this.upperChars[0]) + this.upperChars[0]);
      upperCharSelect = String.fromCharCode(Math.round(upperCharRand));
      //console.log(upperCharRand);
      
      return upperCharSelect
    } ,

    numeric: function(){
      numericCharRand = Math.floor(Math.random() * (this.numericChars[1] - this.numericChars[0]) + this.numericChars[0]);
      numericCharSelect = String.fromCharCode(Math.round(numericCharRand));
      //console.log(numericCharRand);     

      return numericCharSelect
    },

    specialCharacters: function () {
      charArr = [];
      specialCharsACharRand = Math.floor(Math.random() * (this.specialCharsA[1] - this.specialCharsA[0]) + this.specialCharsA[0]);
      specialCharsBCharRand = Math.floor(Math.random() * (this.specialCharsB[1] - this.specialCharsB[0]) + this.specialCharsB[0]);
      specialCharsCCharRand = Math.floor(Math.random() * (this.specialCharsC[1] - this.specialCharsC[0]) + this.specialCharsC[0]);
      specialCharsDCharRand = Math.floor(Math.random() * (this.specialCharsD[1] - this.specialCharsD[0]) + this.specialCharsD[0]);
      specialCharsASelect = String.fromCharCode(Math.round(specialCharsACharRand));
      specialCharsBSelect = String.fromCharCode(Math.round(specialCharsBCharRand));
      specialCharsCSelect = String.fromCharCode(Math.round(specialCharsCCharRand));
      specialCharsDSelect = String.fromCharCode(Math.round(specialCharsDCharRand));
      charArr.push(specialCharsASelect,specialCharsBSelect,specialCharsCSelect,specialCharsDSelect);



      charrArrRandSelect = charArr[Math.floor(Math.random() * (3 - 0) + 0)]

      //console.log(charArr);   
      
      return charrArrRandSelect
    }

  }


  //console.log(password.lowercase());
  //console.log(password.uppercase());
  //console.log(password.numeric());
  //console.log(password.specialCharacters()); 

var lengthPassword = prompt("Choose the lenght of your password");
var intPassLenght = Number(lengthPassword);

if(!intPassLenght){
  alert("Please select a numeric value ");
  console.log(intPassLenght);
} else if (intPassLenght){
  var isLower = confirm("Confirm lowercase");
  var isUpper = confirm("Confirm uppercase");
  var isNumber = confirm("Confirm number");
  var isSpecialChar = confirm("Confirm special character");
}



  for(i=0; i < intPassLenght; i++ ){
    password.newPassword += password.charSelect.push(password.lowercase(),password.uppercase(),password.numeric(),password.specialCharacters());
  }







//console.log(isLower);
//console.log(isUpper);
//console.log(isNumber);
//console.log(isSpecialChar);

console.log(password.newPassword.length);



return password.newPassword
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