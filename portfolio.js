let currentSlide= 0;
const sliders = document.querySelectorAll(".slide");

function  showNextSlides() {
   sliders[currentSlide].classList.remove('active');
   currentSlide = (currentSlide + 1 ) %sliders.length;
   sliders[currentSlide].classList.add('active') ;

}
setInterval (showNextSlides, 10000);

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");

        } 
    });
}, {
    threshold: 0.2,
}
);

const aboutContent = document.querySelector(".about-content");
observer.observe(aboutContent)

const animatedText = document.querySelector('.color-animate');
observer.observe(animatedText);

const ticker = document.querySelector('.ticker');

ticker.addEventListener("mouseenter", () =>{
    ticker.style.animationPlayState = 'pause'

       const tickerNav = document.getElementById('ticker-navbar');
    const offSeTop = tickerNav.offsetTop;
    if (window.scrollY >= offSeTop) {
      ticker.classList.add('sticky');}
      else {
      ticker.classList.remove('sticky');
    }
});



 const subscribeInput = document.querySelector(".subscribe-input");
 const subscribeBtn = document.querySelector("#subscribe-btn");

 subscribeBtn.addEventListener("click", () => {
    const email = subscribeInput.value;
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if(subscribeInput&&emailPattern.test(email)) {
        alert("Thank you for Subscribing with us");
        subscribeInput.value="";
    } else{
        alert("Please enter a valid email address.")
    }
    console.log("")
 })
// window.addEventListener('scroll', function() {
//     const ticker = document.getElementById('ticker-navbar');
//     const offSeTop = ticker.offsetTop;
//     if (window.scrollY >= offSeTop) {
//       ticker.classList.add('sticky');}
//       else {
//       ticker.classList.remove('sticky');
//     }
// })