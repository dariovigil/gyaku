var canvas, points = 10, health = 100, player, ctx, game, dy, bg, bgCounter = 0, playerBullets = [], enemyBullets = [], enemies = [];

window.onload = function() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  startGame();
  };

function enemiesFire() {
  enemies.forEach(enemy => enemy.fire());
}
function startGame() {
  player = new Player(225, 400, 'red', 'player');
  enemies.push(new Enemy(225, 70, 'red'));
  enemies.push(new Enemy(50, 70, 'blue'));
  var nIntervId = setInterval(enemiesFire, 400);
  requestAnimationFrame(animLoop);
}

function animLoop() {
  ctx.clearRect(0, 0, 450, 600);
  checkBulletBounds();
  checkCollisions();
  checkPlayerCollisions();
  checkHealth();
  player.update();
  playerBullets.forEach(bullet => bullet.update());
  enemyBullets.forEach(bullet => bullet.update());
  player.render();
  enemies.forEach(enemy => enemy.render());
  ctx.fillStyle = 'white';
  ctx.font="25px Monospace";
  ctx.fillText(`Score: ${points}`,260, 20);
  ctx.fillText(`Health: ${health}`,50, 20);
  requestAnimationFrame(animLoop);
}

//  Check for player bullets vs enemy collisions.
  function checkCollisions() {
    for(var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        var isColliding = false;
        for(var j = 0; j < playerBullets.length; j++) {
            var bullet = playerBullets[j];

            if(bullet.x >= (enemy.x - enemy.width/2) && bullet.x <= (enemy.x + enemy.width/2) &&
                bullet.y >= (enemy.y - enemy.height/2) && bullet.y <= (enemy.y + enemy.height/2)) {

//  Remove the bullet, set 'isColliding' so we don't process this bullet again.
                playerBullets.splice(j--, 1);
                isColliding = true;
                console.log('colission detected');
                break;
            }
        }
        if(isColliding && bullet.color !== enemy.color) {
            enemies.splice(i--, 1); //meter en set time out para dar tiempo
        }
    }
  }
//  Check for enemy bullet vs player collisions.
function checkPlayerCollisions() {
  enemyBullets.forEach(function(enemyBullet) {
    if(enemyBullet.x >= (player.x - player.width/2)
    && enemyBullet.x <= (player.x + player.width/2)
    && enemyBullet.y >= (player.y - player.height/2)
    && enemyBullet.y <= (player.y + player.height/2)
  ) {
    if(player.color === enemyBullet.color) {
      points += 100;
    } else {
      health--;
    }
  }
});
}
function checkHealth() {
  if(health < 1) {
    health = 0;
    // TO DO DISPLAY GAME OVER / RETRY
    console.log('game over');
  }
}
function checkBulletBounds() {
  enemyBullets.forEach(function(enemyBullet, index, arr) {
    if(enemyBullet.y > canvas.height) arr.splice(index, 1);
  });
}
