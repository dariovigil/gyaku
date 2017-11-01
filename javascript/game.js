var canvas, player, ctx, game, dy, bg, bgCounter = 0, playerBullets = [], enemyBullets = [], enemies = [];

window.onload = function() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  startGame();
  };

function enemiesFire() {
  enemies.forEach(enemy => enemy.fire());
}
function startGame() {
  player = new Player(225,400, 'red', 'player');
  enemies.push(new Enemy(225, 50, 'red'));
  enemies.push(new Enemy(50, 50, 'blue'));
  var nIntervId = setInterval(enemiesFire, 400);
  // window.nIntervId = setInterval(enemies[0].fire, 2000);
  // enemies.forEach(enemy => this.intervalID = setInterval(enemy.fire, 2000));
  // enemies.forEach(enemy => enemy.fire());
  requestAnimationFrame(animLoop);
}

function animLoop() {
  ctx.clearRect(0,0,450,600);
  checkCollisions();
  checkPlayerCollisions();
  player.update();
  playerBullets.forEach(bullet => bullet.update());
  enemyBullets.forEach(bullet => bullet.update());
  player.render();
  enemies.forEach(enemy => enemy.render());
  requestAnimationFrame(animLoop);
}

//  Check for bullet / enemy collisions.
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
                // game.score += this.config.pointsPerInvader;
                break;
            }
        }
        if(isColliding) {
            enemies.splice(i--, 1);
        }
    }
  }
//  Check for enemy bullet / player collisions.
function checkPlayerCollisions() {
  enemyBullets.forEach(function(enemyBullet) {
    if(enemyBullet.x >= (player.x - player.width/2)
    && enemyBullet.x <= (player.x + player.width/2)
    && enemyBullet.y >= (player.y - player.height/2)
    && enemyBullet.y <= (player.y + player.height/2)
  ) {
    console.log('game over');
  }
});
}
