var sliderItems = document.querySelectorAll('.slider__item');
var prevButton = document.querySelector('.slider__arrow_prev');
var nextButton = document.querySelector('.slider__arrow_next');
var dots = document.querySelectorAll('.slider__dot');

var activeIndex = 0; // Индекс активного слайда

// Функция для установки активного слайда и точки
function setActiveSlide(index) {
  // Удаляем класс slider__item_active у всех слайдов
  sliderItems.forEach(function(item) {
    item.classList.remove('slider__item_active');
  });

  // Устанавливаем класс slider__item_active для текущего слайда
  sliderItems[index].classList.add('slider__item_active');

  // Удаляем класс slider__dot_active у всех точек
  dots.forEach(function(dot) {
    dot.classList.remove('slider__dot_active');
  });

  // Устанавливаем класс slider__dot_active для текущей точки
  dots[index].classList.add('slider__dot_active');
}

// Обработчик события click на кнопке "Влево"
prevButton.addEventListener('click', function() {
  activeIndex--;

  // Если индекс становится меньше нуля, переходим к последнему слайду
  if (activeIndex < 0) {
    activeIndex = sliderItems.length - 1;
  }

  setActiveSlide(activeIndex);
});

// Обработчик события click на кнопке "Вправо"
nextButton.addEventListener('click', function() {
  activeIndex++;

  // Если индекс становится больше или равен количеству слайдов, переходим к первому слайду
  if (activeIndex >= sliderItems.length) {
    activeIndex = 0;
  }

  setActiveSlide(activeIndex);
});

// Обработчики события click на точках
dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    activeIndex = index;
    setActiveSlide(activeIndex);
  });
});

// Устанавливаем активный слайд и точку при загрузке страницы
setActiveSlide(activeIndex);