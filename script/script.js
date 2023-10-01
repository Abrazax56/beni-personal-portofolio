const pp = document.querySelector('.pp');
const burger = document.querySelector('.fa-bars');
const slide = document.querySelector('.nav_burger');

function reveal() {
        const reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }

window.addEventListener("scroll", reveal);
pp.style.transition = '2s';
pp.style.cursor = 'pointer';
slide.style.transition = '1s';

pp.addEventListener("click", function() {
  pp.style.transform = 'rotateY(360deg)';
  setTimeout(function() {
    pp.setAttribute('src', 'assets/pp2.png');
  }, 800);
});
burger.addEventListener("click", function() {
  slide.classList.toggle('trans');
});