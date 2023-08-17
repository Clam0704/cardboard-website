const slideElements = document.querySelectorAll('.slide-text');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      if(entry.target.id == "last-slide") {
        let slideBottom = document.getElementsByClassName('slide-bottom')[0];
        slideBottom.style.animationPlayState = 'running';
      }
    }
  });
}, { threshold: 0.01 }); // Change the threshold value as needed

slideElements.forEach(element => {
  observer.observe(element);
  console.log("beep")
});
