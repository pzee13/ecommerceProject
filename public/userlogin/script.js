
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("cpassword");
    const passwordMismatchDiv = document.getElementById("password-mismatch");
  
    form.addEventListener("submit", function(event) {
      if (passwordField.value !== confirmPasswordField.value) {
        passwordMismatchDiv.style.display = "block";
        event.preventDefault(); // Prevent form submission
      } else {
        passwordMismatchDiv.style.display = "none";
      }
    });
  });


  const invalidMsgSignup = document.getElementById('invalid-msg');
        if(invalidMsgSignup)
            {
                setTimeout(() => {
                    invalidMsgSignup.style.display = 'none';  
                }, 5000);
            }

  const invalidMsgOTP = document.getElementById('invalid-msg');
          if(invalidMsgOTP)
            {
                    setTimeout(() => {
                        invalidMsgOTP.style.display = 'none';  
                    }, 5000);
              }
  
  