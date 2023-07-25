
// Set the interval to change font every 2 seconds (adjust as needed)

const changingText = document.getElementById('nav-title');

let currentFont = 1;

function fadeOutAndChangeFont() {
    changingText.style.animation = 'fade-out-opacity 0.3s forwards';
    setTimeout(changeFont, 250); // Wait for the fade-out animation to complete before changing the font
}

function changeFont() {
    const fonts = ['Arial', 'Times New Roman', 'Courier New', 
                   'Verdana', 'Tahoma', 'Trebuchet MS',
                   'Georgia', 'Garamond', 'Brush Script MT'];

    let randVal = Math.floor(Math.random() * fonts.length)
    while (randVal == currentFont) {
        randVal = Math.floor(Math.random() * fonts.length)
    }
    currentFont = randVal;
    changingText.style.fontFamily = fonts[randVal];
    changingText.style.animation = 'fade-in-opacity 0.3s forwards'; // Fade the text back in with the new font
    setTimeout(fadeOutAndChangeFont, 2000); // Repeat the process every 0.5 seconds (500 milliseconds)
}

// Call the fadeOutAndChangeFont function to start the process initially
fadeOutAndChangeFont();
