let map = document.getElementById("map");
let treasure = {
  x: Math.floor(Math.random() * map.width),
  y: Math.floor(Math.random() * map.height),
};

let coords = document.getElementById("coords");
map.onmousemove = showCoords;

function showCoords(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  // coords.value = "Координаты: " + x + ", " + y;
  coords.value = `Координаты: ${x}, ${y}`;
  if (Math.abs(treasure.x - x) < 30 && Math.abs(treasure.y - y) < 30) {
    alert("Сокровище здесь!");
  }
}
