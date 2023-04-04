function generateOTP() {
    // Generate a random 4-digit number between 1000 and 9999
   let otpInputField = Math.floor(Math.random() * 9000) + 1000;
    // Display the OTP in the OTP input field
    document.getElementById("otp-input-field").value = otpInputField;
  }
document.getElementById('otp-generator-btn').addEventListener('click', function(){

   generateOTP();
});
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('opt-type-field');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
            if(number === 'c'){
                    typeNumberField.value='';
            }
            else if(number === '<'){
               const digits = previousTypeNumber.split('');
               digits.pop();
               const remainingDigits = digits.join('');
               typeNumberField.value = remainingDigits;
            }
    }
    else{
        
        
        const newTypeNumber = previousTypeNumber + number ;
        typeNumberField.value=newTypeNumber;
    }


});
document.getElementById('submit-btn').addEventListener('click', function(){
const otpInputField = document.getElementById('otp-input-field');
const currentPin = otpInputField.value;
const typeNumberField = document.getElementById('opt-type-field');
const typeInputNumber = typeNumberField.value;

if( typeInputNumber === currentPin){
    alert("OTP and number verification successful!");
} else {
  alert("OTP and number verification failed. Please try again.");
}

})