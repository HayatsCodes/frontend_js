const quran = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Play
function playQuran() {
    quran.play();
}

// Pause
function pauseQuran() {
    quran.pause();
}