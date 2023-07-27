const videoPlayer = document.getElementById('videoPlayer');
const fullscreenButton = document.getElementById('fullscreenButton');

fullscreenButton.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (!document.webkitFullscreenElement) {
    videoPlayer.webkitRequestFullscreen();
  } else {
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function changeMainVideo(videoSrc) {
    videoPlayer.src = videoSrc;
    videoPlayer.play();
  }