const videoPlayer = document.getElementById('videoPlayer');
const fullscreenButton = document.getElementById('fullscreenButton');
const curtainButton = document.getElementById('curtain-checkbox');
const curtainButtonIcon = document.getElementById('curtain-checkbox-icon');
const cinemaChangeButton = document.getElementById('cinemaChangeButton');

fullscreenButton.addEventListener('click', toggleFullscreen);

const visualSources = [
  'MID OCEAN .mp4',
  'Abstrkt Replace Mode.mp4',
  'Two Dangers THE WARNINGS.mp4',
];

const filmSources = [
  'home page.mp4'
]

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
      videoPlayer.src = "".concat('/assets/', visualSources[currentVideoIndex]);
      videoPlayer.play();
    }
    
}

videoPlayer.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % visualSources.length;
    changeMainVideo(currentVideoIndex);
});

curtainButton.addEventListener('change', function() {
  if (this.checked) {
    curtainButtonIcon.src = "/assets/eyeClosed.png";
    setTimeout(pauseVideo, 600);
  } else {
    curtainButtonIcon.src = "/assets/eyeOpen.png";
    setTimeout(playVideo, 200);
  }
});

function playVideo() {
  videoPlayer.play()
}

function pauseVideo() {
  videoPlayer.pause()
}