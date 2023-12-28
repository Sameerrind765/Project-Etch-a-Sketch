var container = document.getElementById('container');
const resetButton = document.getElementById("reset-button");
const eraser = document.getElementById("eraser");
let box = 64;
boxes = box*box;
let per = 450/box;
for (var i = 0; i < boxes; i++) {
  if (per >= 18){
    let width_height = i*per;
    container.style.gridTemplateColumns = `repeat(${box}, 1fr)`
    var div = document.createElement('div');
    div.classList.add("box")
    container.appendChild(div);
    div.style.height = `${per}px`;
    div.style.width = `${per}px`;
    div.style.border="0.1px solid white"
  }
  else{
    let width_height = i*per;
    container.style.gridTemplateColumns = `repeat(${box}, 1fr)`
    var div = document.createElement('div');
    div.classList.add("box")
    container.appendChild(div);
    div.style.height = `${per}px`;
    div.style.width = `${per}px`;
  }
}
container.addEventListener("mouseover", function(event) {
  if(event.buttons === 1){
  if (event.target.classList.contains("box")) {
    event.target.classList.add("active");
  }}
})
container.addEventListener("click", function(event) {
  event.target.classList.add("active");
})
if (eraser.buttons === 1){
  div.style.border= "1px solid white"
}
function erase(){
  if(div.buttons === 1){
  const boxes = document.querySelectorAll(".box");
  for (const box of boxes) {
    box.classList.remove("active");
  }
  }
}
function clearBoxes() {
  const boxes = document.querySelectorAll(".box");
  // Loop through each box
  for (const box of boxes) {
    // Instead of setting styles, remove the desired class
    box.classList.remove("active");
  }
}
resetButton.addEventListener("click", clearBoxes);
eraser.addEventListener("click", erase)