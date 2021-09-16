const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideId = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideId++;
  }
  if (activeSlideId === slidesCount) {
    activeSlideId = 0;
  } else if (direction === "down") {
    activeSlideId--;
  }
  if (activeSlideId < 0) {
    activeSlideId = slidesCount - 1;
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideId * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideId * height}px)`;
}
