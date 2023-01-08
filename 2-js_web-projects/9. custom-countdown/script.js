const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// set Input Min with Today's Date
const today = new Date().toISOString();
today.spl