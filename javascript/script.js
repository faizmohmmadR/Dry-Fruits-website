const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const usernameError = document.getElementById('username-error')
const emailError = document.getElementById('email-error')
const pswError = document.getElementById('psw-error')
const phoneError = document.getElementById('phone-error')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs();
})

function checkInputs(){
    const usernameValue  = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const phoneValue  = phone.value.trim()

    // email pattern
    const validEmail = /(\w+)(\d?)(\@)(\w{2,6})(\.)(\w{2,4})/
    const result = validEmail.test(emailValue)
    // // password pattern
    // const digit = /\d/
    // const charc = /\w/
    // const digitResult = digit.test(passwordValue)
    // const charResult = digit.test(passwordValue)
    
    // phone numbers patren
    const validPhon = /\+(\93)(7)([0-9])\d{7,7}/g

    if(usernameValue === ''){
        setError(username, 'username required!')
    }else if(usernameValue.length > 16 || usernameValue.length < 3){
        setError(username,'username must be less than 16 and more than 3')
    }else{
        setSuccess(username)
    }
    
    if(emailValue === ''){
        setError(email,'email required!')
    }else if(!result){
        setError(email,'invalid email')
    }else{
        setSuccess(email)
    }

    if(passwordValue === ""){
        setError(password,'password is requred! ')
    }else if(passwordValue.length > 16 || passwordValue.length < 4){
        setError(password,'paswword must be less than 16 and more than 4')
    }else{
        setSuccess(password)
    }

    if(!validPhon.test(phoneValue)){
        setError(phone,'invalid phone numbers, phone number must starts with +937...')
    }else if(phoneValue.length > 12){
        setError(phone,'phone number must be less than 13 digits! ')
    }
    else{
        setSuccess(phone)
    }
}

function setError(input,message){
    const formCntrol = input.nextElementSibling
    input.className = 'error'
    formCntrol.innerText = message
}

function setSuccess(input){
    const formCntrol = input.nextElementSibling
    formCntrol.innerText = ''
    input.style.borderColor = 'green'
}


