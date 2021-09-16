const board = document.querySelector("#board");
const SQUARES_NUMBER = 495;
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

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.appendChild(square);

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));
}

function setColor(element) {
  const color = getColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "";
  element.style.boxShadow = `0 0 2px #000`;
}

function getColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
