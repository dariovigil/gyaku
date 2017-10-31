var canvas, player, ctx, game, dy, bg, bgCounter = 0, playerBullets = [], enemyBullets = [], enemies = [];

window.onload = function() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  startGame();
  };

function startGame() {
  player = new Player(225,400);
  enemies.push(new Enemy(225, 50, 'red'));
  requestAnimationFrame(animLoop);
  // var myInterval = setInterval(animLoop, 20);
}

function animLoop() {
  ctx.clearRect(0,0,450,600);
  checkCollisions();
  player.update();
  playerBullets.forEach(bullet => bullet.update());
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

//  Remove the bullet, set 'bang' so we don't process this bullet again.
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
