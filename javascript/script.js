const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");

let un = false;
let em = false;
let psw = false;
let ph = false;
try {
  form.addEventListener("submit", (e) => {
    if (!(un === true && em === true && (psw === true) & (ph === true))) {
      e.preventDefault();
    }
    checkInputs();
  });

  function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();
    let vp = 0;

    // email pattern
    const validEmail = /(\w+)(\d?)(\@)(\w{2,6})(\.)(\w{2,4})/;
    const result = validEmail.test(emailValue);

    const validPhon = /[0][7][0-9]{8,8}/g;

    if (usernameValue === "") {
      setError(username, "username required!");
      un = false;
    } else if (usernameValue.length > 16 || usernameValue.length < 3) {
      setError(username, "username must be less than 16 and more than 3");
      un = false;
    } else {
      setSuccess(username);
      un = true;
    }

    if (emailValue === "") {
      setError(email, "email required!");
      em = false;
    } else if (!result) {
      setError(email, "invalid email");
      em = false;
    } else {
      setSuccess(email);
      em = true;
    }
    vp = 0
    vp += /[a-z]/.test(passwordValue) ? 1 : 0;
    vp += /[A-Z]/.test(passwordValue) ? 1 : 0;
    vp += /[0-9]/.test(passwordValue) ? 1 : 0;
    vp += /[\W]/.test(passwordValue) ? 1 : 0;
    vp += passwordValue.length >= 6 ? 1 : 0;
    vp += passwordValue.length < 16 ? 1 : 0;

    if (passwordValue === "") {
      setError(password, "password is requred! ");
    } else if (vp === 6) {
      setSuccess(password);
      psw = true;
    } else {
      setError(
        password,
        "weak password!!, password must include uperCase,lowrCase and special characters and numbders!!"
      );
      psw = false;
    }

    if (phoneValue.length > 10) {
      setError(phone, "phone number must be less than 10 numbers!!");
      ph = false;
    } else if (!validPhon.test(phoneValue)) {
      setError(
        phone,
        "invalid phone numbers, phone number must starts with 07..."
      );
      ph = false;
    } else {
      setSuccess(phone);
      ph = true;
    }
  }

  function setError(input, message) {
    const formCntrol = input.nextElementSibling;
    input.className = "error";
    formCntrol.innerText = message;
  }

  function setSuccess(input) {
    const formCntrol = input.nextElementSibling;
    formCntrol.innerText = "";
    input.style.borderColor = "green";
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