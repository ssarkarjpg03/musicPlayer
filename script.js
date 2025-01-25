let a = document.getElementById("play_svg");
let b = document.getElementById("pause_svg");
let audio = document.getElementById("music");
let seekBar = document.getElementById("bar");
let volCh = document.getElementById("vol");
let volControl = document.getElementById("volControl");
let volIcon = document.getElementById("volIcon");
let muteIcon = document.getElementById("muteIcon");
let img = document.getElementById("img");

let song = ["audio/master.mp3","audio/jattmakna.mp3","audio/millioner.mp3","audio/blueeyes.mp3","audio/payel.mp3","audio/shesewali.mp3"];
let currentSong =0;

let cover = ["img/master.jpg", "img/jattmakna.jpg","img/millioner.jpg","img/blueeyes.jpg","img/payel.jpg","img/serawali.jpg"];
let currentImg = 0;

//these functions used for play pause the songs
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

//these functions are used for controling the progress bar 
audio.onloadedmetadata = () => {
    seekBar.max = audio.duration;
}

audio.ontimeupdate = () => {
    seekBar.value = audio.currentTime;
}

//these function are used for changing the songs
function changeSongPrevious() {
    if(currentSong == 0 && currentImg == 0) {
        currentSong = 5;
        currentImg = 5;
    }
    else{
        currentSong -= 1;
        currentImg -= 1;
    }
    img.src = cover[currentImg];
    audio.src = song[currentSong];
    playMusic();
}

function changeSongNext() {
    if(currentSong == 5 && currentImg == 5) {
        currentSong = 0;
        currentImg = 0
    }
    else{
        currentSong += 1;
        currentImg += 1;
    }
    img.src = cover[currentImg];
    audio.src = song[currentSong];
    playMusic();
}


//these function are used for contrlor the volume function
let volBarShow = () => {
    volControl.style.display = "flex";
}

let volBarHide = () => {
    volControl.style.display = "none";
}

let iconShow = () => {
    audio.volume = 0
    volIcon.style.display = "none";
    muteIcon.style.display = "flex"
}

let iconHide = () => {
    audio.volume = volCh.value / 100;
    volIcon.style.display = "flex";
    muteIcon.style.display = "none"
}

function barUpdate() {
    audio.currentTime = seekBar.value;
}

function volChange() {
    audio.volume = volCh.value / 100;
    volIcon.style.display = "flex";
    muteIcon.style.display = "none"
}