// console.log('login in js file')
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // alway remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
})