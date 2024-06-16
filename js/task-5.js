"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const color = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent = color;
});
