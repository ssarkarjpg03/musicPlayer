let a = document.getElementById("play_svg");
let b = document.getElementById("pause_svg");
let audio = document.getElementById("music");
let seekBar = document.getElementById("audioControls");

function playMusic() {
    a.style.display = "none"
    b.style.display = "flex"
    audio.play();
}

function pauseMusic() {
    a.style.display = "flex"
    b.style.display = "none"
    audio.pause();
}


// Update range max value when audio metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    seekBar.max = audio.duration; // Set the max of the range to audio duration
});

// Update the range value as the audio plays
audio.addEventListener('timeupdate', () => {
    seekBar.value = audio.currentTime; // Sync slider with current playback time
});

// Seek to a position when the user moves the slider
seekBar.addEventListener('input', (e) => {
    audio.currentTime = e.target.value; // Update audio playback time
});