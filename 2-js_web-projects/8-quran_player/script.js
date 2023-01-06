const quran = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Check If Playing
let isPlaying = false;

// Play
function playQuran() {
    isPlaying = true;
    quran.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
}

// Pause
function pauseQuran() {
    isPlaying = false;
    quran.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title')
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => {
    isPlaying ? pauseQuran(): playQuran()
});