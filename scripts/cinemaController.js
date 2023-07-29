const videoPlayer = document.getElementById('videoPlayer');
const fullscreenButton = document.getElementById('fullscreenButton');

fullscreenButton.addEventListener('click', toggleFullscreen);

const videoSources = [
    'MID OCEAN .mp4',
    'Abstrkt Replace Mode.mp4',
    'Two Dangers THE WARNINGS.mp4',
];

let currentVideoIndex = 0;

function toggleFullscreen() {
  if (!document.webkitFullscreenElement) {
    videoPlayer.webkitRequestFullscreen();
  } else {
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function changeMainVideo(videoId) {
    if(currentVideoIndex !== videoId) {
      currentVideoIndex = videoId;
      videoPlayer.src = "".concat('/assets/', videoSources[currentVideoIndex]);
      videoPlayer.play();
    }
    
}

videoPlayer.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    changeMainVideo(currentVideoIndex);
});