const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// set Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute('min', today);
// Take Values from Form Input
function updateCountdown(e) {
    
}
//  Event Listeners
countdownForm.addEventListener('submit', updateCountdown);