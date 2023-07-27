/* add product form Validation  */
let addForm = document.getElementById('add-prd-form');
let productName = document.getElementById('product-name');
let price = document.getElementById('price');
let decription = document.getElementById('product-description');
let productAddress= document.getElementById('address');

let pn = false
let pp = false
let pd = false
let pa = false
addForm.addEventListener('submit',(e)=>{
    if(!(pn === true && pp === true && pd === true && pa === true)){
        e.preventDefault()
    }
    addPcheck()
})

function addPcheck() {
   
    let productNameValue = productName.value.trim();
    let priceValue = price.value.trim();
    let decriptionValue = decription.value.trim();
    let productAddressValue = productAddress.value.trim();

    /** product name field */
    if(productNameValue === ''){
        showError(productName ,'please fill product name! ');
    }
    else if(productNameValue.length > 25 || productNameValue.length < 3){
        showError(productName,'Product name must be between 2 & 25 letters!');
    }
    else{
        setSuccess(productName)
        pn = true
    }

    /** product PRICE field */
    if(priceValue === ''){
        showError(price , 'please fill product price!');
    }
    else if(priceValue.length > 5){
        showError(price,'Product price must be less than 5 number!');
    }
    else{
        setSuccess(price);
        pp = true
    }

    /** product decription field */
    if(decriptionValue === ''){
        showError(decription , 'please fill product decription!');
    }
    else if(decriptionValue.length > 50 || decriptionValue.length < 10){
        showError(decription,'Product decription must be between 10 & 50 letters! ');
    }
    else{
        setSuccess(decription);
        pd = true
    }

    /** product address field */
    if(productAddressValue === ''){
        showError(productAddress , 'please fill product address!');
    }
    else if(productAddressValue.length > 50 || productAddressValue.length < 5){
        showError(productAddress,'Product address must be  between 5 & 50 letters!');
    }
    else{
        setSuccess(productAddress);
        pa = true
    }
}

function showError(input,message){
    let errorElement = input.nextElementSibling;
    input.style.borderColor = 'red';
    errorElement.style.color = 'red';
    errorElement.innerText = message;
}

function setSuccess(input){
    let errorElement = input.nextElementSibling;
    errorElement.innerText = '';
    input.style.borderColor = 'green'
}


try{
    addForm.addEventListener('reset',(e)=>{
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