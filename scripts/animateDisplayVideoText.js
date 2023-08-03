// Set the interval to change font every 2 seconds (adjust as needed)

const displayVideo1 = document.getElementById('displayVideo1');
const displayVideo2 = document.getElementById('displayVideo2');
const displayVideo3 = document.getElementById('displayVideo3');
const displayImage1 = document.getElementById('displayImage1');

const displayVideo1Text = document.getElementById('displayVideo1Text');
const displayVideo2Text = document.getElementById('displayVideo2Text');
const displayVideo3Text = document.getElementById('displayVideo3Text');
const displayImage1Text = document.getElementById('displayImage1Text');

let vid1TimeoutId, vid3TimeoutId, img1TimeoutId, vid2TimeoutId;

const waitFor = 8000;

function switchToVideo1() {
    fadeOutAll();
    displayVideo1Text.style.zIndex = 15;
    displayVideo1Text.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    vid1TimeoutId = setTimeout(switchToVideo3, waitFor); // Wait for the fade-out animation to complete before changing the font
}

function switchToVideo3() {
    fadeOutAll();
    displayVideo3Text.style.zIndex = 15;
    displayVideo3Text.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    vid3TimeoutId = setTimeout(switchToImage1, waitFor); // Wait for the fade-out animation to complete before changing the font
}

function switchToImage1() {
    fadeOutAll();
    displayImage1Text.style.zIndex = 15;
    displayImage1Text.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    img1TimeoutId = setTimeout(switchToVideo2, waitFor); // Wait for the fade-out animation to complete before changing the font
}

function switchToVideo2() {
    fadeOutAll();
    displayVideo2Text.style.zIndex = 15;
    displayVideo2Text.style.animation = 'fade-in-opacity-overlay-main 0.5s forwards';
    vid2TimeoutId = setTimeout(switchToVideo1, waitFor); // Wait for the fade-out animation to complete before changing the font
}

function fadeOutAll() {
    clearTimeout(vid1TimeoutId);
    clearTimeout(vid3TimeoutId);
    clearTimeout(img1TimeoutId);
    clearTimeout(vid2TimeoutId);

    displayImage1Text.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';
    displayVideo1Text.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';
    displayVideo2Text.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';
    displayVideo3Text.style.animation = 'fade-out-opacity-overlay-main 0.5s forwards';

    displayVideo1Text.style.zIndex = -10;
    displayVideo2Text.style.zIndex = -10;
    displayVideo3Text.style.zIndex = -10;
    displayImage1Text.style.zIndex = -10;

}

displayVideo1.addEventListener('click', function() {
    fadeOutAll();
    switchToVideo1();
});

displayVideo3.addEventListener('click', function() {
    fadeOutAll();
    switchToVideo3();
});

displayImage1.addEventListener('click', function() {
    fadeOutAll();
    switchToImage1();
});

displayVideo2.addEventListener('click', function() {
    fadeOutAll();
    switchToVideo2();
});

// Call the fadeOutAndChangeFont function to start the process initially
switchToVideo1();
setTimeout(switchToVideo3, waitFor);

