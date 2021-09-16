const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");

const colors = [
  "#CD5C5C",
  "#FA8072",
  "#FFA07A",
  "#B22222",
  "#8B0000",
  "#ADFF2F",
  "#00FF00",
  "#90EE90",
  "#00FA9A",
  "#3CB371",
  "#008000",
  "#FF69B4",
  "#C71585",
  "#FF6347",
  "#20B2AA",
  "#FFFF00",
  "#7FFFD4",
  "#4682B4",
  "#EE82EE",
  "#FF00FF",
  "#9932CC",
  "#800080",
  "#4B0082",
  "#BC8F8F",
  "#D2691E",
  "#A52A2A",
];

let time = 0;
let score = 0;

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  let timer = setInterval(() => {
    if (!time) {
      clearInterval(timer);
      finishGame();
    }
    timeEl.innerHTML = time > 9 ? `00:${time--}` : `00:0${time--}`;
  }, 1000);
  createRandomCircle();
}

function finishGame() {
  board.innerHTML = `<h1>Ваш счёт: <span class="primary">${score}</span></h1>`;
  timeEl.parentNode.style.opacity = "0";
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNum(10, 40);
  const { height, width } = board.getBoundingClientRect();
  const x = getRandomNum(0, width - size);
  const y = getRandomNum(0, height - size);
  const color = getColor();

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.backgroundColor = color;
  board.append(circle);
}

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
