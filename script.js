var container = document.getElementById('container');
let ver = 16;
let v = ver*ver;
let per = "15";
for (var i = 0; i < v; i++) {
  let width_height = per
  var div = document.createElement('div');
  div.classList.add("box")
  container.appendChild(div);
  div.style.height = `${per}px`;
  div.style.width = `${per}px`;
}
container.addEventListener("mouseover", function(event) {
  if(event.buttons === 1){
  if (event.target.classList.contains("box")) {
    event.target.classList.add("active");
  }}
})

const resetButton = document.getElementById("reset-button");

function clearBoxes() {
  const boxes = document.querySelectorAll(".box");
  // Loop through each box
  for (const box of boxes) {
    // Instead of setting styles, remove the desired class
    box.classList.remove("active");
  }
}
resetButton.addEventListener("click", clearBoxes);
