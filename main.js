import './style.scss'
import './header'
import json from './data.json'
import { headerTitle } from './header';

const app = document.getElementById("app");

headerTitle(app, json.homepage.title, json.homepage.subhead, json.homepage.author);

let submit = document.querySelector('#send');
submit.onclick = function showUsefulInfo(){
    let info = document.querySelector('#usefulInfo');
    let errorMsg = document.querySelector('#errorMsg');
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;

    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    let insertName = document.querySelector('#form-name');
    let insertEmail = document.querySelector('#form-email');

    if((!name == null || !name == "") && (email.match(emailRegex))){
        console.log("name: "+ name +" & email: "+ email);
        errorMsg.style.display = 'none';
        info.style.display = 'block';

        insertName.innerHTML = name;
        insertEmail.innerHTML = email;
        return false;

    } else if (!email.match(emailRegex)){
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'Enter a valid email!';
        return false;

    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'Please fill out the form below';
        return false;

    }
}

export { headerTitle };