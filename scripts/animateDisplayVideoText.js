// Set the interval to change font every 2 seconds (adjust as needed)

const displayVideo1 = document.getElementById('displayVideo1');
const displayVideo2 = document.getElementById('displayVideo2');
const displayVideo3 = document.getElementById('displayVideo3');
const displayImage1 = document.getElementById('displayImage1');

const waitFor = 1000;

function switchToVideo1() {
    displayVideo2.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';
    displayVideo1.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    setTimeout(switchToVideo3, waitFor); // Wait for the fade-out animation to complete before changing the font
}

function switchToVideo3() {
    displayVideo1.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';
    displayVideo3.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    setTimeout(switchToImage1, waitFor); // Wait for the fade-out animation to complete before changing the font
}

function switchToImage1() {
    displayVideo3.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';
    displayImage1.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    setTimeout(switchToVideo2, waitFor); // Wait for the fade-out animation to complete before changing the font
}

function switchToVideo2() {
    displayImage1.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';
    displayVideo2.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    setTimeout(switchToVideo1, waitFor); // Wait for the fade-out animation to complete before changing the font
}

// Call the fadeOutAndChangeFont function to start the process initially

switchToVideo1();
setTimeout(switchToVideo3, waitFor);