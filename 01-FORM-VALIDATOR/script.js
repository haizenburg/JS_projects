const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password= document.getElementById('password');
const password2 = document.getElementById('password2');


//show input error msg
function showError(input, message) {
    const formControl = input.parentElement; // gets a parent of the child id, class
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show Success msg
function showSuccess(input){
    const formControl = input.parentElement;
    formControl
}

//validate email
function isValidEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//checks required fields
function checkRequired(input){
    input.forEach(function(item) {
        if(input.value.trim() == ''){
            showError(input, `${input.id} is required`)
        } else {
            showSuccess(input);
        }
    });
}

//decided not to add uppercase first letter of message 

form.addEventListener('submit', function(e) {

    e.preventDefault();     //prevents default submit form functionality


    checkRequired([username, email, password,password2]);
})