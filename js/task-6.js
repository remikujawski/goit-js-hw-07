"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function removeBoxes() {
  while (boxexContainer.firstChild) {
    boxexContainer.removeChild(boxexContainer.firstChild);
  }
}

function createBoxes(amount) {
  input.value = "";
  let boxSize = 30;
  removeBoxes();
  let htmlString = "";
  for (let i = 0; i < amount; i++) {
    // const box = document.createElement("div");
    // box.classList.add("box");
    // box.style.backgroundColor = getRandomHexColor();
    // box.style.width = box.style.height = `${boxSize}px`;
    htmlString += `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxSize += 10;
  }
  boxexContainer.innerHTML = htmlString;
}

const boxexContainer = document.querySelector("#boxes");
const input = document.querySelector("#controls").firstElementChild;
const addButton = document.querySelector("button[data-create]");
const removeButton = document.querySelector("button[data-destroy]");

addButton.addEventListener("click", (event) => {
  if (input.value > 0 && input.value <= 100) {
    createBoxes(parseInt(input.value));
  }
});

removeButton.addEventListener("click", (event) => removeBoxes());
