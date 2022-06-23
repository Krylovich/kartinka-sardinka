const BTN_LEFT = document.querySelector(".revs-arrow-left");
const BTN_RIGHT = document.querySelector(".revs-arrow-right");
const CAROUSEL = document.querySelector(".revs-slider-list");
const SLIDES_LEFT = document.querySelector("#rev-left");
const SLIDES_RIGHT = document.querySelector("#rev-right");
const DOT = document.querySelectorAll('.dot');

function moveLeft() {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
}

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedSlides;
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      changedSlides = SLIDES_LEFT;
      document.querySelector("#rev-active").innerHTML = SLIDES_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove("transition-right");
      changedSlides = SLIDES_RIGHT;
      document.querySelector("#rev-active").innerHTML = SLIDES_RIGHT.innerHTML;
   }

    changedSlides.innerHTML = "";    
    
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});

 
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);