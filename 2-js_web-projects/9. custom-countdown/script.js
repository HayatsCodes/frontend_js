const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDom() {
    countdownActive = setInterval(() =)
}

// Take Values from Fminute Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    //  Get number version of current Date, updateDom
    countdownValue = new Date(countdownDate).getTime();
    updateDom();
}
//  Event Listeners
countdownForm.addEventListener('submit', updateCountdown);