let treasure = {
  x: 100,
  y: 200,
};

let map = document.getElementById("map");
let coords = document.getElementById("coords");
map.onmousemove = showCoords;

function showCoords(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  // coords.value = "Координаты: " + x + ", " + y;
  coords.value = `Координаты: ${x}, ${y}`;
  if (Math.abs(treasure.x - x) && Math.abs(treasure.y - y) < 30) {
    alert("Сокровище здесь!");
  }
}
