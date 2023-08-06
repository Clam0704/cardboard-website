const videoPlayer = document.getElementById('videoPlayer');
const fullscreenButton = document.getElementById('fullscreenButton');
const curtainButton = document.getElementById('curtain-checkbox');
const curtainButtonIcon = document.getElementById('curtain-checkbox-icon');
const cinemaChangeButton = document.getElementById('cinemaChangeButton');
const videoCollectionCinema = document.getElementById('video-collection-cinema');
const leftCurtain = document.getElementById('leftCurtain');
const rightCurtain = document.getElementById('rightCurtain');

fullscreenButton.addEventListener('click', toggleFullscreen);

const visualSources = [
  'MID OCEAN .mp4',
  'Abstrkt Replace Mode.mp4',
  'Two Dangers THE WARNINGS.mp4',
];

const visualSourcesThumbnails = [
  'MID OCEAN.jpg',
  'Abstrkt Replace Mode.jpg',
  'Two Dangers THE WARNINGS.jpg',
];

const filmSources = [
  'CREATIVITY.mp4',
  'LIVING THE DREAM.mp4',
]

const filmSourcesThumbnails = [
  'CREATIVITY.png',
  'LIVING THE DREAM.png',
]

const visualId = 1;
const filmId = 2;

let currentVideoIndex = -1;
let currentTypeIndex = 1;

function toggleFullscreen() {
  if (!document.webkitFullscreenElement) {
    videoPlayer.webkitRequestFullscreen();
  } else {
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function changeMainVideo(typeID, videoId) {
  if((currentVideoIndex !== videoId) || (currentTypeIndex !== typeID)) {
    currentVideoIndex = videoId;
    if(currentTypeIndex == 1) {
      videoPlayer.src = "".concat('/assets/videos/cinema videos/', visualSources[currentVideoIndex]);
    } else {
      videoPlayer.src = "".concat('/assets/videos/cinema videos/', filmSources[currentVideoIndex]);
    }
    playVideo();
  } else if (curtainButton.checked == true) {
    playVideo();
  }
}

videoPlayer.addEventListener('ended', () => {
  currentVideoIndex = (currentVideoIndex + 1) % visualSources.length;
  changeMainVideo(currentVideoIndex);
});

curtainButton.addEventListener('change', function() {
  if (this.checked) {
    curtainButtonIcon.src = "/assets/images/icons/eyeClosed.png";
    setTimeout(pauseVideo, 600);
  } else {
    curtainButtonIcon.src = "/assets/images/icons/eyeOpen.png";
    setTimeout(playVideo, 200);
  }
});

function playVideo() {
  if (curtainButton.checked) {
    curtainButton.checked = false;
  }
  videoPlayer.play()
}

function pauseVideo() {
  videoPlayer.pause()
}

function createThumbnails() {
  videoCollectionCinema.innerHTML = ''; // Clear the current thumbnails
  if (currentTypeIndex == 1) {
    for (let i = 0; i < visualSourcesThumbnails.length; i++) {
      let thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');
      let img = document.createElement('img');
      img.src = "".concat('/assets/images/thumbnails/',visualSourcesThumbnails[i]);
      thumbnail.setAttribute('onclick', "".concat('changeMainVideo(', currentTypeIndex ,', ' , i, ')'))
      videoCollectionCinema.appendChild(thumbnail);
      thumbnail.appendChild(img);
    }
    videoPlayer.muted = true;
    videoPlayer.controls = false;
    fullscreenButton.style.zIndex = 10;
    
  } else {
    for (let i = 0; i < filmSourcesThumbnails.length; i++) {
      let thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');
      let img = document.createElement('img');
      img.src = "".concat('/assets/images/thumbnails/',filmSourcesThumbnails[i]);
      thumbnail.setAttribute('onclick', "".concat('changeMainVideo(', currentTypeIndex ,', ' , i, ')'))
      videoCollectionCinema.appendChild(thumbnail);
      thumbnail.appendChild(img);
    }
    videoPlayer.muted = false;
  }
}

function swapCurtainImage() {
  videoPlayer.src = ""
  currentVideoIndex = -1;
  if (currentTypeIndex == 1) {
    leftCurtain.style.backgroundImage = `url("/assets/images/other images/metal-door.jpg")`;
    rightCurtain.style.backgroundImage = `url("/assets/images/other images/metal-door.jpg")`;
  } else {
    leftCurtain.style.backgroundImage = `url("/assets/images/other images/curtain-left.png")`;
    rightCurtain.style.backgroundImage = `url("/assets/images/other images/curtain-left.png")`;
  }
}

// Button click event handler
cinemaChangeButton.addEventListener('click', () => {
  currentTypeIndex = currentTypeIndex === 1 ? 2 : currentTypeIndex === 2 ? 1 : currentTypeIndex;
  if (cinemaChangeButton.textContent == "Visuals") {
    cinemaChangeButton.textContent = "Films";
  } else {
    cinemaChangeButton.textContent = "Visuals"
  }
  curtainButton.checked = true;
  swapCurtainImage();
  createThumbnails();
});

createThumbnails();
