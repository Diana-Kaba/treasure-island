let map = document.getElementById("map");
let treasure = {
  x: Math.floor(Math.random() * map.width),
  y: Math.floor(Math.random() * map.height),
};

let wrap = document.getElementById("wrap");
wrap.style.width = `${map.width}px`;
wrap.style.height = `${map.height}px`;
wrap.style.position = "relative";

let coords = document.getElementById("coords");
map.onmousemove = showCoords;

function showCoords(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  // coords.value = "Координаты: " + x + ", " + y;
  coords.value = `Координаты: ${x}, ${y}`;
  if (Math.abs(treasure.x - x) < 50 && Math.abs(treasure.y - y) < 50) {
    let treasureCircle = document.createElement("div");
    treasureCircle.style = `border: 2px solid red; border-radius: 50%; width: 50px; height: 50px; position: absolute; top: ${treasure.x}; left: ${treasure.y};`;
    wrap.appendChild(treasureCircle);

    alert("Сокровище здесь!");
  }
}
