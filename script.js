const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";

    if(firstName === ''){
        errorfunc(fname, 'Frist Name cannot be empty')
    }
    else{
        successFunc(fname)
    }

    if(lastName === ''){
        errorfunc(lname, 'Last Name cannot be empty')
    }
    else{
        successFunc(lname)
    }

    if(emailValue === ''){
        errorfunc(email, 'Email Name cannot be empty')
    }
    else if(!emailValue.match(pattern)){
        errorfunc(email, 'Looks like not an email')
    }
    else{
        successFunc(email)
    }

    if(passwordValue === ''){
        errorfunc(password, 'Password Name cannot be empty')
    }
    else{
        successFunc(password)
    }
});

function errorfunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    req.className += 'error';
    span.className += 'error-text';
    span.innerText = message;
    console.log(span.innertext);   
    if(req !== email){
        req.value = "   ";    
    }
    else{
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req){
    req.className += 'sucess';
}