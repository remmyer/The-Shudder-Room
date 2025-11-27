'use strict'
// Mohima
const sendButton = document.querySelector('#sendButton');


sendButton.addEventListener('click', verifyEmail);

function verifyEmail(){
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const suggestionInput = document.querySelector('#suggestions');
const name = nameInput.value;
const email = emailInput.value;
const suggestion = suggestionInput.value;
const message = document.querySelector('#fieldset-msg');
if(email.endsWith('@dawsoncollege.qc.ca')){
    message.innerHTML = "Thank you " + name + " for suggesting " + suggestion;
}
else{
    message.innerHTML = "Suggestions from Dawsonites only!";
}
}