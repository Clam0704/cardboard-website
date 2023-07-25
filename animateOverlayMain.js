
// Set the interval to change font every 2 seconds (adjust as needed)

const changingText2 = document.getElementById('overlayMain');

let currentFont2 = 1;

function fadeOutAndChangeFont2() {
    //changingText2.style.animation = 'fade-out-opacity-overlay-main 0.3s forwards';
    setTimeout(changeFont2, 250); // Wait for the fade-out animation to complete before changing the font
}

function changeFont2() {
    const fonts2 = ['Arial', 'Times New Roman', 'Courier New', 
                   'Verdana', 'Tahoma', 'Trebuchet MS',
                   'Georgia', 'Garamond', 'Brush Script MT'];

    let randVal2 = Math.floor(Math.random() * fonts2.length)
    while (randVal2 == currentFont) {
        randVal2 = Math.floor(Math.random() * fonts2.length)
    }
    currentFont2 = randVal2;
    changingText2.style.fontFamily = fonts2[randVal2];
    //changingText2.style.animation = 'fade-in-opacity-overlay-main 0.3s forwards';
    setTimeout(fadeOutAndChangeFont2, 250); // Repeat the process every 0.5 seconds (500 milliseconds)
}

// Call the fadeOutAndChangeFont function to start the process initially
fadeOutAndChangeFont2();
