const content = document.querySelector('.backgroundContent')
const sliderButton = document.getElementById('slider-checkbox');
const sliderButtonIcon = document.getElementById('slider-checkbox-icon');

const backgroundVideo = document.getElementById('background-video');


function toggleBackground() {
    content.classList.toggle('fade-background');
}


sliderButton.addEventListener('change', function() {
    console.log("Event Listener triggered.");
    
    if (this.checked) {
        sliderButtonIcon.src = "/assets/right-arrow.png";
        pauseSubVideos();
    } else {
        sliderButtonIcon.src = "/assets/left-arrow.png";
        pauseHomeVideo();
    }
});

function pauseHomeVideo() {
    backgroundVideo.pause();
    displayVideo1.play();
    displayVideo2.play();
    displayVideo3.play();
}

function pauseSubVideos() {
    backgroundVideo.play();
    displayVideo1.pause();
    displayVideo2.pause();
    displayVideo3.pause();
}

setInterval(toggleBackground, 3000); // Adjust the interval (in milliseconds) as needed