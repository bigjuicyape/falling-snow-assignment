const c = document.getElementById("c");
const ctx = c.getContext("2d");

c.width = window.innerWidth - 4;
c.height = window.innerHeight - 4;

let snowflake = [];

document.addEventListener("click", btnclick);
function btnclick() {}

window.requestAnimationFrame(gameLoop);

function gameLoop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);
  draw();
  window.requestAnimationFrame(gameLoop);
}

function draw() {
  for (let i = 0; i < snowflake.length; i++) {
    snowflake[i].y += snowflake[i].speed;
    ctx.fillStyle = "white";
    fillCircle(snowflake[i].x, snowflake[i].y, snowflake[i].size);
    if (snowflake[i].y - snowflake[i].size >= c.height) {
      snowflake.splice(i, 1);
      newsnowflake();
    }
  }
}

function fillCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

// 5000 snowflakes
for (let i = 0; i < 5000; i++) {
  newsnowflake();
}
function newsnowflake() {
  snowflake.push({
    x: Math.random() * c.width,
    y: -100,
    size: 1 + 1 * Math.random(),
    speed: 30 + 70 * Math.random(),
  });
}
