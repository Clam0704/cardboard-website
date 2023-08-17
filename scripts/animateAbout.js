const slideElements = document.querySelectorAll('.slide-text');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        console.log("here");
        entry.target.style.animationPlayState = 'running';
        if(entry.target.id == "last-slide") {
            let slideBottom = document.getElementsByClassName('slide-bottom')[0];
            slideBottom.style.animationPlayState = 'running';
        }
    } else {
        entry.target.style.animationPlayState = 'running';
        let anim = entry.target.style.animationName;
        entry.target.style.animationName = "none";
        entry.target.offsetWidth;
        entry.target.style.animationName = anim;
        console.log("here2")
        entry.target.style.animationPlayState = 'paused';
        if(entry.target.id == "last-slide") {
            let slideBottom = document.getElementsByClassName('slide-bottom')[0];
            slideBottom.style.animationPlayState = 'running';
            let anim = slideBottom.style.animationName;
            slideBottom.style.animationName = "none";
            slideBottom.offsetWidth;
            slideBottom.style.animationName = anim;
            console.log("here2")
            slideBottom.style.animationPlayState = 'paused';
          }
    }
  });
}, { threshold: 0.1 }); // Change the threshold value as needed

slideElements.forEach(element => {
    observer.observe(element);
    console.log("beep")
});
