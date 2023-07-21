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











// let userNameMsg = ''
// let emialMsg = ''
// let passMsg = ''
// let phomeMsg
// function validateInputs(){
//     const usernameValue  = username.value
//     const emailValue = email.value
//     const passwordValue = password.value
//     const phoneValue  = phone.value
//     usernameError.innerText = userNameMsg
//     emailError.innerText = emialMsg
//     pswError.innerText = passMsg
//     phoneError.innerText = phomeMsg

//     if(username == ''){
//         userNameMsg = `username  is required!`
//         return false
//     }else if(username.value.length < 3 || username.value.length > 16 ){
//         userNameMsg = 'username must be more than 3 characters and les than 16 characters';
//         return false
//     }else if(email.value == ''){
//         emialMsg = 'emial is required!'
//         return false
//     }else if(email.value.length < 3 || email.value.length > 16){
//         emialMsg = 'email cant be les than 3 charcters and more than 16 characters!';
//         return false
//     }else if(phone.value == ''){
//         phomeMsg = 'phone is  is required!'
//         return false
//     }else if(phone.value.length < 10 || phone.value.length > 12){
//         phomeMsg = 'invalid phone number';
//         return false
//     }else{
//         return true
//     }

// }

//  /\w/g all alphabit cahracters  /\W/g all unalphabit characters /\d/g all digit like 1,2,3,4,5,6,7,8
// /\D/g all undigit characters like alphabit and none alphabit 
// /\s/g space  /\S/g all none space
// /./g all things  it fine all characters
// /\./g it finds only .
// /\everthing/g  for finds every things 
//  /\d/gi it is for case insetive  also g is for global search it means it search in all text
// /^fiaz/g    --> find the started faiz
// /^fiaz$/g   --> find the ended fiaz
// /^fiaz$/gim   --> when we add the m it means multiline for  find goal words
// /^fiaz$/gis   --> when we add the s it means single line for  find goal words
// /\w.+\.[a-zA-Z]{2.4}/g       it means it cans start with alphabit 
// characters and it can inlude so much characters and at end it can only have alphabit crachters 
// and the characters must be 2 or 4

// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;
// const email = document.getElementById('email').value;

// // Regular expressions for validation
// const usernameRegex = /^[a-zA-Z0-9_]{5,}$/; // At least 5 characters, alphanumeric and underscore only
// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; // At least 8 characters, at least one lowercase letter, one uppercase letter, and one digit
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format



// form.addEventListener('submit',(e)=>{
//     const usernameError = []
//     const emailError = []
//     const pswError = []
//     const phoneError = []


//     if(username.value.trim() === ""){
//         usernameError.push('username required!')
//     }
//     if(username.value.trim().length > 16 || username.value.trim().length < 3){
//         usernameError.push("username must be less than 16 characters and more than 3 characters! ")
//     }

//     if(errors.length > 0){
//         e.preventDefault()
//         usernameError.toggleAttribute('hidden')
//         emailError.toggleAttribute('hidden')
//         pswError.toggleAttribute('hidden')
//         phoneError.toggleAttribute('hidden')
//         errorMessage.innerHTML = errors.join(', ')

//     }
// })

