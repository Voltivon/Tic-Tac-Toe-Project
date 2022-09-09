const cellsElement = document.querySelectorAll("[data-cell]");

cellsElement.forEach(function (cell) {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick() {
  console.log("clicked");
}
