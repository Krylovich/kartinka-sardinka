/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
let dotIndex = 1;
showSlides(slideIndex);
activeDots(dotIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
    activeDots(dotIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
    activeDots(dotIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
    activeDots(activeDots = n);
}

/* Функция перелистывания */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("revs-slide-item");
    
  if (n > slides.length) {
    slideIndex = 1
  }else if (n < 1) {
    slideIndex = slides.length
  }
  
  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
    slide.style.display = "none";
  }   
  slides[slideIndex - 1].style.display = "block"; 

}

function activeDots(n) {
  let dots = document.getElementsByClassName("dot");

  if (n > dots.length) {
    dotIndex = 1
  }else if (n < 1) {
    dotIndex = dots.length
  }

  for (let dot of dots) {
    dot.classList.remove('dot-active');
  }
  dots[dotIndex - 1].classList.add('dot-active');
}