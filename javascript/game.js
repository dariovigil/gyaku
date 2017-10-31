var canvas, player, ctx, game, dy, bg, bgCounter = 0, bullets = [];

window.onload = function() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  startGame();
  };

function startGame() {
  player = new Player(225,400);
  player.setImage();
  requestAnimationFrame(animLoop);
  // var myInterval = setInterval(animLoop, 20);
}

function animLoop() {
  ctx.clearRect(0,0,450,600);
  player.update();
  bullets.forEach(bullet => console.log(bullet));
  player.render();
  requestAnimationFrame(animLoop);
}
