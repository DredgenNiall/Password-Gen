// Assignment code here






function generatePassword(){
  passwordLengthFunction();
};

function passwordLengthFunction(){  
  var lengthInput = window.prompt("How long should your password be? (numerical value between 8 - 128)");
  
  if (lengthInput > 8 && lengthInput < 128){
    passwordLowerCaseFunction(lengthInput);
  }
  else if ( lengthInput < 8){
    window.alert("Your password is too short!");
  }
  else if ( lengthInput > 128)
  window.alert("Your password is too long!");
  };


    function passwordLowerCaseFunction(lengthInput){  
      var lowerCaseInput = window.confirm("Should the password include lowercase characters (confirm for Yes, cancel for no)");
      
      if (lowerCaseInput === true){
      passwordUpperCaseFunction(lengthInput, lowerCaseInput);

      }
      else if ( lowerCaseInput === false) {
      passwordUpperCaseFunction(lengthInput, lowerCaseInput);
      };
    };

    function passwordUpperCaseFunction(lengthInput, lowerCaseInput){  
      var upperCaseInput = window.confirm("Should the password include uppercase characters (confirm for Yes, cancel for no)");
      
      if (upperCaseInput === true){
        passwordNumericFunction(lengthInput, lowerCaseInput, upperCaseInput);

      }
      else if ( upperCaseInput === false) {
        passwordNumericFunction(lengthInput, lowerCaseInput, upperCaseInput);
      };
    };


    function passwordNumericFunction(lengthInput, lowerCaseInput, upperCaseInput){  
      var numbersInput = window.confirm("Should the password include numbers (confirm for Yes, cancel for no)");
      
      if (numbersInput === true){
        passwordSpecialFunction(lengthInput, lowerCaseInput, upperCaseInput, numbersInput);

      }
      else if ( numbersInput === false) {
        passwordSpecialFunction(lengthInput, lowerCaseInput, upperCaseInput, numbersInput);
      };
    };

    function passwordSpecialFunction(lengthInput, lowerCaseInput, upperCaseInput, numbersInput){  
      var specialInput = window.confirm("Should the password include numbers (confirm for Yes, cancel for no)");
      
      if (specialInput === true || specialInput === false ){

        var passwordCriteria = {
          passwordLength : lengthInput,
          lower: lowerCaseInput,
          upper: upperCaseInput,
          numbers: numbersInput,
          special: specialInput
        };
          userPasswordConfirmation(passwordCriteria);
      }
    };

    function userPasswordConfirmation(passwordCriteria){
    alert("Your password will include:");
    alert(passwordCriteria.passwordLength + " characters");

    if ( passwordCriteria.lower === true){
      alert("Lower case characters");
    }

    if ( passwordCriteria.upper === true){
      alert("Upper case characters");
    }

    if ( passwordCriteria.numbers === true){
      alert("Numbers");
    }

    if ( passwordCriteria.special === true){
      alert("and Special characters");
    }

    };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
var buttonClick = generateBtn.addEventListener("click", writePassword);

