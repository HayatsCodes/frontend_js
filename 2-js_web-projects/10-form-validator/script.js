const form = document.getElementById('form');
const passwordEl = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    //  Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);