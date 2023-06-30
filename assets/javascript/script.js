
function generatePassword(){

  var password = {
    newPassword: [],
    generatingPassword: "",
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
      loweCharSelect = [];
      loweCharRand = Math.floor(Math.random() * (this.lowerChars[1] - this.lowerChars[0]) + this.lowerChars[0]);
        for (i = this.lowerChars[0]; i < this.lowerChars[1]+1; i++){
         loweCharSelect += String.fromCharCode(i);   
        }  
      return loweCharSelect
    } ,

    uppercase: function(){
      upperCharSelect = [];
      upperCharRand = Math.floor(Math.random() * (this.upperChars[1] - this.upperChars[0]) + this.upperChars[0]);
        for (i = this.upperChars[0]; i  < this.upperChars[1]+1; i++){
          upperCharSelect += String.fromCharCode(i);
        }     
      return upperCharSelect
    } ,

    numeric: function(){
      numericCharSelect = [];
      numericCharRand = Math.floor(Math.random() * (this.numericChars[1] - this.numericChars[0]) + this.numericChars[0]);
        for (i = this.numericChars[0]; i < this.numericChars[1] + 1; i++){
          numericCharSelect += String.fromCharCode(i);
        }
    

      return numericCharSelect
    },

    specialCharacters: function () {
      charArr = [];
      specialCharsACharRand = Math.floor(Math.random() * (this.specialCharsA[1] - this.specialCharsA[0]) + this.specialCharsA[0]);
      specialCharsBCharRand = Math.floor(Math.random() * (this.specialCharsB[1] - this.specialCharsB[0]) + this.specialCharsB[0]);
      specialCharsCCharRand = Math.floor(Math.random() * (this.specialCharsC[1] - this.specialCharsC[0]) + this.specialCharsC[0]);
      specialCharsDCharRand = Math.floor(Math.random() * (this.specialCharsD[1] - this.specialCharsD[0]) + this.specialCharsD[0]);

      for (i = this.specialCharsA[0]; i < this.specialCharsA[1]; i ++){
        charArr += String.fromCharCode(i);
      }
      for (h = this.specialCharsB[0]; h < this.specialCharsB[1]; h++){
        charArr += String.fromCharCode(h);
      }

      for (j = this.specialCharsC[0]; j < this.specialCharsC[1]; j ++){
        charArr += String.fromCharCode(j);
      }
      for (k = this.specialCharsD[0]; k < this.specialCharsD[1]; k++){
        charArr += String.fromCharCode(k);
      } 
      return charArr
    }

  }

var lengthPassword = prompt("Choose the lenght of your password");
var intPassLenght = Number(lengthPassword);

if (!intPassLenght){
  alert("Character lenght between 8 and 128 characters or Try a numeric value");
  return;
}  if (confirm("lowecase")){
  password.generatingPassword += password.lowercase();
  console.log(password.newPassword);
} if (confirm("uppercase")){
  password.generatingPassword += password.uppercase();
  console.log(password.newPassword);
}  if (confirm("numeric")){
  password.generatingPassword += password.numeric();
  console.log(password.newPassword);
} if (confirm("special")){
  password.generatingPassword += password.specialCharacters();
  console.log(password.newPassword);
}

  for (i = 0; i < intPassLenght; i++){
    password.newPassword.push(password.generatingPassword[Math.floor(Math.random() * password.generatingPassword.length)]);
  }



return password.newPassword.join("")
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);