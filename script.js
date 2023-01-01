let inputs = document.querySelectorAll('input');
let form = document.querySelector('form');
let termsOfService = document.getElementById('terms-of-service');
let password = document.querySelectorAll('[type="password"]');

inputs.forEach(e =>{
    e.addEventListener("keyup", () => e.classList.remove('unfilled'));
})

password.forEach(e =>{
    e.addEventListener("keyup", () => {
        if(password[0].value !== password[1].value && password[0].value !== "" && password[1].value !== "") {
            password[0].setCustomValidity("Passwords don't match");
            password[1].setCustomValidity("Passwords don't match");
        }
        else{
            password[0].setCustomValidity("");
            password[1].setCustomValidity("");
        }
    });
})