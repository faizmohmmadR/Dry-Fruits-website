const form = document.getElementById("form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

let em = false;
let ps = false;
let vp = 0; // validated password
try {
  form.addEventListener("submit", (e) => {
    if (!(em === true && _ps === true)) {
      e.preventDefault();
    }
    checkInputs();
  });

  function checkInputs() {
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    const validEmail = /(\w+)(\d?)(\@)(\w{2,6})(\.)(\w{2,4})/;
    const result = validEmail.test(emailValue);

    if (emailValue === "") {
      setError(loginEmail, "email required!");
      em = false;
    } else if (!result) {
      setError(loginEmail, "invalid email");
      em = false;
    } else {
      setSuccess(loginEmail);
      em = true;
    }
    vp = 0;

    vp += /[a-z]/.test(passwordValue) ? 1 : 0;
    vp += /[A-Z]/.test(passwordValue) ? 1 : 0;
    vp += /[0-9]/.test(passwordValue) ? 1 : 0;
    vp += /[\W]/.test(passwordValue) ? 1 : 0;
    vp += passwordValue.length >= 6 ? 1 : 0;
    vp += passwordValue.length < 16 ? 1 : 0;

    if (passwordValue === "") {
      setError(loginPassword, "password is requred! ");
    } else if (vp === 6) {
      setSuccess(loginPassword);
      ps = true;
    } else {
      setError(
        loginPassword,
        "weak password!!, password must include uperCase,lowrCase and special characters and numbders!!"
      );
    }
  }

  function setError(input, message) {
    const controlForm = input.nextElementSibling;
    input.style.borderColor = "red";
    controlForm.innerText = message;
  }

  function setSuccess(input) {
    const controlForm = input.nextElementSibling;
    input.style.borderColor = "green";
    controlForm.innerText = "";
  }
} catch (e) {
  console.log(e);
}


try{
  form.addEventListener('reset',(e)=>{
    if(confirm('are you sure!!'))
    {
      return true
    }else{
      e.preventDefault()
    }
  })
}catch(e){
  console.log(e)
}