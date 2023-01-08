const form = document.getElementById('form');
const passwordEl = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

function processFormData(e) {
    e.preventDefault();
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);