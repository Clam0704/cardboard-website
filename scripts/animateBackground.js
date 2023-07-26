const content = document.querySelector('.backgroundContent')

function toggleBackground() {
    content.classList.toggle('fade-background');
}
 
setInterval(toggleBackground, 3000); // Adjust the interval (in milliseconds) as needed