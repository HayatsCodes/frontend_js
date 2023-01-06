const image = document.querySelector('img');
const title = document.getElementById('title');
const reciter = document.getElementById('reciter');
const quran = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Quran
const recitation = [
    {
        name: 'quran-1',
        displayName: 'Al-Fatiha',
        reciter: 'Yasser',
    },
    {
        name: 'quran-2',
        displayName: 'Al-Fatiha',
        reciter: 'Yasser',
    }
]

// Check If Playing
let isPlaying = false;

// Play
function playQuran() {
    isPlaying = true;
    quran.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause')
}

// Pause
function pauseQuran() {
    isPlaying = false;
    quran.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play')
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => {
    isPlaying ? pauseQuran(): playQuran()
});