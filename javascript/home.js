const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("slide-out");
  mobileMenu.classList.toggle("slide-in");
  mobileMenuBtn.classList.toggle("active-menu-btn");
  if (mobileMenu.classList.contains("slide-out")) {
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  } else {
    mobileMenu.classList.remove("display-none");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    mobileMenu.classList.add("slide-out");
    mobileMenu.classList.remove("slide-in");
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  }
});


document.addEventListener('DOMContentLoaded', function(){
  var typed = new Typed(".typing", {
      strings: ["Work", "Life", "Well-being", "Design", "Develop"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true

      
  });
});

let start = 0;
let end = [1100, 200, 5000];
let target = {
  score: start
};
let duration = 5;

let user = document.getElementById('user');
let subsc = document.getElementById('subsc');
let contact = document.getElementById('contact');
let display = [user, subsc, contact];

function counter(){
  for (let i = 0; i < end.length; i++){
      gsap.to(target, {
          duration: duration,
          score: end[i],
          onUpdate: function(){
              display[i].innerHTML = Math.floor(target.score) + " +";
          },
          ease: 'expo.inOut'
      });
  }
}

counter();


  