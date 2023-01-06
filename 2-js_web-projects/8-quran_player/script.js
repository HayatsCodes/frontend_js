const image = document.querySelector('img');
const title = document.getElementById('title');
const reciter = document.getElementById('reciter');
const quran = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Quran
const recitation = [
    {
        name: 'quran-1',
        displayName: 'Al-Fatiha',
        reciter: 'Yasser Al-Dosari',
    },
    {
        name: 'quran-2',
        displayName: "Ar-Ra'd",
        reciter: 'Islam Sobhi',
    },
    {
        name: 'quran-3',
        displayName: 'Maryam',
        reciter: 'Rashid AlaFasy',
    },
    {
        name: 'quran-4',
        displayName: 'At-Takwir',
        reciter: 'Muhammad Ayyub',
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

// Update DOM
function loadQuran(quran_recitation) {
    title.textContent = quran_recitation.displayName;
    reciter.textContent = quran_recitation.reciter;
    quran.src = `quran/${quran_recitation.name}.mp3`;
    image.src = `img/${quran_recitation.name}.jpg`;
    image.className = ""
    image.classList.add(`${quran_recitation.name}-fit`);
}

// Current recitation
let quranIndex = 0;

// Next Recitation
function prevRecitation() {
    if (quranIndex > 0) {
        quranIndex--;
    } else {
        quranIndex = recitation.length - 1;
    }
    loadQuran(recitation[quranIndex]);
    playQuran();
}

// Next Recitation
function nextRecitation() {
    if (quranIndex < recitation.length - 1) {
        quranIndex++;
    } else {
        quranIndex = 0;
    }
    loadQuran(recitation[quranIndex]);
    playQuran();
}

// On Load - Select First Quran
loadQuran(recitation[quranIndex]);

// Event Listeners
prevBtn.addEventListener('click', prevRecitation);
nextBtn.addEventListener('click', nextRecitation);