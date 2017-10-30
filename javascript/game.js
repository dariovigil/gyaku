var canvas, player, ctx, game, dy, bg, bgCounter = 0;

// function Game() {
//   this.player = new Player(canvas.width / 2 - 25, 400);
//
//   }

window.onload = function() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  startGame();
  };

function startGame() {
  // console.log(ctx);
  player = new Player(225,400);
  player.setImage();
}



function animLoop() {
  // console.log(ctx);
  ctx.clearRect(0,0,450,600);
  player.render();
  requestAnimationFrame(animLoop);
}
requestAnimationFrame(animLoop);
