const video = document.querySelector(".video");
const music = new Audio("audio/letitsnow.mp3");

const handleVideoClick = () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
};

video.addEventListener("click", handleVideoClick);
