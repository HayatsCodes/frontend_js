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
}

// Pause
function pauseQuran() {
    isPlaying = false;
    quran.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => {
    isPlaying ? pauseQuran(): playQuran()
});