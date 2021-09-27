// Assignment code here
function generatePassword(){
  passwordLengthFunction();
};

function passwordLengthFunction(){  
  var lengthInput = window.prompt("How long should your password be? (numerical value between 8 - 128)");
  
  if (lengthInput >= 8 && lengthInput <= 128){
    passwordLowerCaseFunction(lengthInput);
  }
  else if ( lengthInput < 8){
    window.alert("Your password is too short!");
  }
  else if ( lengthInput > 128)
  window.alert("Your password is too long!");
  };


    function passwordLowerCaseFunction(lengthInput){  
      var lowerCaseInput = window.confirm("Should the password include lowercase characters? (confirm for Yes, cancel for no)");
      
      if (lowerCaseInput === true){
      passwordUpperCaseFunction(lengthInput, lowerCaseInput);

      }
      else if ( lowerCaseInput === false) {
      passwordUpperCaseFunction(lengthInput, lowerCaseInput);
      };
    };

    function passwordUpperCaseFunction(lengthInput, lowerCaseInput){  
      var upperCaseInput = window.confirm("Should the password include uppercase characters? (confirm for Yes, cancel for no)");
      
      if (upperCaseInput === true){
        passwordNumericFunction(lengthInput, lowerCaseInput, upperCaseInput);

      }
      else if ( upperCaseInput === false) {
        passwordNumericFunction(lengthInput, lowerCaseInput, upperCaseInput);
      };
    };


    function passwordNumericFunction(lengthInput, lowerCaseInput, upperCaseInput){  
      var numbersInput = window.confirm("Should the password include numbers? (confirm for Yes, cancel for no)");
      
      if (numbersInput === true){
        passwordSpecialFunction(lengthInput, lowerCaseInput, upperCaseInput, numbersInput);

      }
      else if ( numbersInput === false) {
        passwordSpecialFunction(lengthInput, lowerCaseInput, upperCaseInput, numbersInput);
      };
    };

    function passwordSpecialFunction(lengthInput, lowerCaseInput, upperCaseInput, numbersInput){  
      var specialInput = window.confirm("Should the password include special characters? (confirm for Yes, cancel for no)");
      
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
      if (passwordCriteria.lower === false && passwordCriteria.upper === false && passwordCriteria.numbers === false && passwordCriteria.special === false){
        alert("You have not choosen any options!");
        return;
      };

      if (passwordCriteria.upper === false && passwordCriteria.lower === false){
        alert("Your password will not include enough unique characters!");
        return;

      }

    if (passwordCriteria.passwordLength > 0){
      alert("Your password will include:");
    alert(passwordCriteria.passwordLength + " characters");
    }

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
      passwordGenerator(passwordCriteria);
    };

    function passwordGenerator(passwordCriteria) {
      var max = 126;
      var randomInt = 0;
      var passwordData = [];
      
      for ( i = 0; i < passwordCriteria.passwordLength; i++ ){
      randomInt = (Math.floor(Math.random() * max + 33 ));

      if (randomInt > 126 ) { 
        randomInt = randomInt - 33;
      }

      passwordData.push(String.fromCharCode(randomInt));
    }


    passwordData = passwordData.join('');

    if (passwordCriteria.upper === false){
      console.log(passwordData);
      passwordData = passwordData.toLowerCase();
      console.log(passwordData);
    };
     
    if (passwordCriteria.lower === false){
      console.log(passwordData);
      passwordData = passwordData.toUpperCase();
      console.log(passwordData);
    };
    
    displayPassword(passwordData);
  };
  
  function displayPassword(passwordData){
  alert("Your new password is " + passwordData);
  document.getElementsByClassName('replacable')[0].textContent = passwordData;
  return passwordData;
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  document.getElementsByClassName('replacable')[0].textContent = passwordData;
  passwordText.value = password;

}

// Add event listener to generate button
var buttonClick = generateBtn.addEventListener("click", writePassword);

