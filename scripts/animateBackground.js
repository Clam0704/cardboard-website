const content = document.querySelector('.backgroundContent')
const sliderButton = document.getElementById('slider-checkbox');
const sliderButtonIcon = document.getElementById('slider-checkbox-icon');

function toggleBackground() {
    content.classList.toggle('fade-background');
}


sliderButton.addEventListener('change', function() {
    console.log("Event Listener triggered.");
    
    if (this.checked) {
        sliderButtonIcon.src = "/assets/right-arrow.png";
    } else {
        sliderButtonIcon.src = "/assets/left-arrow.png";
    }
});


setInterval(toggleBackground, 3000); // Adjust the interval (in milliseconds) as needed