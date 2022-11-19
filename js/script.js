function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// ========================================================================================

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 75;
let speed = 10;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
          #24C386 ${progressValue * 3.6}deg,
          #E4E4E4 ${progressValue * 3.6}deg
      )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

// =====================================================================================

let left = 0;

function autoSlider() {
  let timer = setTimeout(function () {
    let sliderItems = document.querySelector('.testimonials_items');
    left = left - 400;
    if (window.matchMedia("(min-width: 1200px)").matches) {
      left = left - 380;
    } else if (window.matchMedia("(min-width: 1140px)").matches) {
      left = left - 340;
    } else if (window.matchMedia("(min-width: 960px)").matches) {
      left = left - 10;
    }
    if (left < -2400) {
      left = 0;
      clearTimeout(timer);
    }
    sliderItems.style.left = left + 'px';
    autoSlider();
  }, 3000);
}

autoSlider();