import anime from 'animejs/lib/anime.es.js';

const bg = document.querySelector("#about");

for (let i = 1; i < 300; i++) {
  let div = document.createElement("div");
  let animeCircle = bg.appendChild(div);
  animeCircle.classList.add("anime-stars");
}

let circles = document.querySelectorAll(".anime-stars");
const maxTranslateX = window.innerWidth; 
const maxTranslateY = window.innerHeight;


let randomAnimation = anime({
  targets: circles,
  translateX: () => {
    return anime.random(0,  maxTranslateX) + "px"; 
  },
  translateY: () => {
    return anime.random(0, maxTranslateY) + "px"; 
  },
  duration: 400, 
  delay: anime.stagger(50), 
  opacity: 1,
  loop: true,
  direction: "alternate",
  easing: "easeOutExpo",
});



export { randomAnimation };
