
let gridCols = 20;
let gridRows = 20;
let grid = document.getElementById("grid");

for (let i = 0; i < gridCols * gridRows; i++) {
  let element = document.createElement("div");
  element.classList.add("grid-item");
  grid.appendChild(element);
}