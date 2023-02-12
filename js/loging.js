// console.log('login in js file')
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // alway remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password
    //a: set id an the html element
    //b: get the element
    //c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})