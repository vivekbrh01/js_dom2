// Selecting the elements

let name = document.body.querySelector('.name');
let email = document.body.querySelector('.email');
let password = document.body.querySelector('.password');
let hero = document.body.querySelector('.hero');
let btn = document.body.querySelector('.btn');

// Events
btn.addEventListener('click', createUI);

// Functionalities

function createUI(event) {
    let getName = name.value;
    let getEmail = email.value;
    let getPassword = password.value; 

    if( getName.length  == 0 ) { 
        alert("Name can't be empty!");

        return 0;
    }

    if ( getEmail.length  == 0 ) { 
        alert("Email can't be empty!");
        
        return 0;
    }

    if( getPassword.length == 0 ) { 
        alert("Password cannot be empty");

        return 0;
    }

    hero.innerHTML = `You are ${getName} \n Your Email: ${getEmail} \n Your Password: ${getPassword}`;
}