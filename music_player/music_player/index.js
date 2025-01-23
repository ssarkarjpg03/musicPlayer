let audio = document.getElementById("audio");
let pause_svg = document.getElementById("pause_svg");
let play_svg = document.getElementById("play_svg");
let play = () => {
  pause_svg.style.display = "flex";
  play_svg.style.display = "none";
  audio.play();
};

let pause = () => {
  pause_svg.style.display = "none";
  play_svg.style.display = "flex";
  audio.pause();
};
