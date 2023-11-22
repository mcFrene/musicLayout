const playBtn = document.querySelector('.control-wrapper-btns-play'),
    prevBtn = document.querySelector('.control-wrapper-btns-prev'),
    nextBtn = document.querySelector('.control-wrapper-btns-next'),
    playBtnImg = document.querySelector('.control-wrapper-btns-play-img'),
    audio = document.querySelector('.audio'),
    songTitle = document.querySelector('.control-wrapper-text-title'),
    currentDuration = document.querySelector(
        '.control-wrapper-duration-current'
    ),
    endDuration = document.querySelector('.control-wrapper-duration-end'),
    control = document.querySelector('.control'),
    progressBar = document.querySelector('.control-progress-wrapper-current'),
    progressContainer = document.querySelector('.control-progress-wrapper');

const songs = [
    { title: 'The New Sensation', duration: '3:50' },
    { title: 'Out For Blood', duration: '3:36' },
    { title: 'Heads Will Roll', duration: '3:50' },
    { title: 'Eat You Alive', duration: '3:50' },
    { title: 'A Death In The Family', duration: '3:18' },
    { title: 'Turning Away', duration: '3:50' },
    { title: '45 (A Matter Of Time)', duration: '3:12' },
    { title: 'The People Vs', duration: '3:19' },
    { title: 'Never There', duration: '4:20' },
    { title: 'Catching Fire', duration: '4:01' },
];

audio.volume = 0.1;
let songIndex = 0;

function timeConvertate(time) {
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time) % 60;

    if (secs < 10) {
        secs = '0' + secs;
    }

    return mins + ':' + secs;
}

// Load song
function loadSong() {
    songTitle.innerHTML = songs[songIndex].title;
    audio.src = `./static/audio/Sum 41 - ${songs[songIndex].title}.mp3`;

    currentDuration.innerHTML = '0:00';
    endDuration.innerHTML = songs[songIndex].duration;

    document.querySelector('.play-now').classList.remove('play-now');
    tracks[songIndex].classList.add('play-now');
}

// Play
function playSong() {
    control.classList.add('now-playing');
    playBtnImg.src = './images/player-pause-btn.svg';
    audio.play();
}

// Pause
function pauseSong() {
    control.classList.remove('now-playing');
    playBtnImg.src = './images/player-play-btn.svg';
    audio.pause();
}
playBtn.addEventListener('click', () => {
    if (control.classList.contains('now-playing')) pauseSong();
    else playSong();
});

// Next song
function nextSong() {
    songIndex++;
    songIndex %= songs.length;
    loadSong();
    playSong();
}
nextBtn.addEventListener('click', nextSong);

// Prev song
function prevSong() {
    songIndex++;
    songIndex %= songs.length;
    loadSong();
    playSong();
}
prevBtn.addEventListener('click', prevSong);

// Progress bar
function updateProgress() {
    if (this.currentTime && this.duration) {
        progressBar.style.width =
            (this.currentTime / this.duration) * 100 + '%';
        currentDuration.innerHTML = timeConvertate(this.currentTime);
    }
}
audio.addEventListener('timeupdate', updateProgress);

// Set progress
function setProgress(event) {
    audio.currentTime = (event.offsetX / this.clientWidth) * audio.duration;
    updateProgress();
}
progressContainer.addEventListener('click', setProgress);

// Autoplay
audio.addEventListener('ended', nextSong);

const tracksWrapper = document.querySelector('.albums-player-main-tracks');

// For creating new track
function newTrack(title, duration) {
    return `<div class="albums-player-main-tracks__item">
                <div class="albums-player-main-tracks__item-play">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.46855 10.2924C0.802519 10.6456 0 10.1628 0 9.40892V1.59299C0 0.839086 0.802521 0.356313 1.46855 0.709553L8.83695 4.61752C9.54555 4.99334 9.54555 6.00857 8.83695 6.3844L1.46855 10.2924Z" fill="#9B9B9B"/>
                    </svg>
                </div>
                <div class="albums-player-main-tracks__item-title">${title}</div>
                <div class="albums-player-main-tracks__item-duration">${duration}</div>
            </div>
            `;
}

// Adding all tracks
songs.forEach((song) => {
    tracksWrapper.innerHTML += newTrack(song.title, song.duration);
});

const tracks = document.querySelectorAll('.albums-player-main-tracks__item');
tracks[songIndex].classList.add('play-now');
loadSong();

function playTrack() {
    songIndex = this.dataset.i;
    loadSong();
    playSong();
}

tracks.forEach((track, index) => {
    track.setAttribute('data-i', index);
    track.addEventListener('click', playTrack);
});
