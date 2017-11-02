var canvas, time = 3, createEnemyIntId, nIntervId, requestId, points = 10700, health = 100, player, ctx, game, dy, bg, bgCounter = 0, playerBullets = [], enemyBullets = [], enemies = [], pause = false;

window.onload = function() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  };

function enemiesMovements() {
  enemies.forEach(enemy => enemy.fire());
  // enemies.forEach(enemy => enemy.moveRight());
  // enemies.forEach(enemy => enemy.interval());
}

function decreaseTime() {
  time--;
}

function startGame() {
  player = new Player(262, 400, 'red', 'player');
  enemies.push(new Enemy(225, 70, 'red'));
  // enemies[0].interval(enemies[0].dance);
  enemies.push(new Enemy(50, 70, 'blue'));
  enemies.forEach(enemy => enemy.interval(enemy.dance));
  createEnemyIntId = setInterval(createEnemy, 2000);
  nIntervId = setInterval(enemiesMovements, 400);
  requestId = requestAnimationFrame(animLoop);
  timerIntId = setInterval(decreaseTime, 1000);
}

function setHighScore() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if(points > localStorage.getItem('highScore')) {
    localStorage.setItem('highScore', points);
    ctx.fillStyle = 'white';
    ctx.font="30px Monospace";
    ctx.fillText(`New High Score!!!`,120 ,200);
    ctx.fillText(`${points} points`,140 ,240);
  } else {
    ctx.fillStyle = 'white';
    ctx.font="30px Monospace";
    ctx.fillText(`Your Score: ${points}`,120 ,100);
    ctx.fillText(`High Score: ${localStorage.highScore}`,120 ,300);
  }
}

function animLoop() {
  console.log(time);

  if(!time) {
    window.clearInterval(createEnemyIntId);
    window.clearInterval(nIntervId);
    setHighScore();

    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  ctx.font="20px Monospace";
  ctx.fillText(`Score: ${points}`,350 ,20);
  ctx.fillText(`Life: ${health}`,25 ,20);
  ctx.fillText(`Time: ${time}`,200 ,20);
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
            points += 1000;
        }
    }
  }
//  Check for enemy bullet vs player collisions.
function checkPlayerCollisions() {
  enemyBullets.forEach(function(enemyBullet, index) {
    if(enemyBullet.x >= (player.x - player.width/2)
    && enemyBullet.x <= (player.x + player.width/2)
    && enemyBullet.y >= (player.y - player.height/2)
    && enemyBullet.y <= (player.y + player.height/2)
  ) {
    //  Remove the bullet, set 'isColliding' so we don't process this bullet again.
      enemyBullets.splice(index, 1);
      console.log('enemy bullet removed');

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

function createEnemy() {
  var colors = ['red', 'blue'];
  var randomColor = colors[Math.round(Math.random())];
  var randomX = Math.random() * (canvas.width - 50) + 50;
  var randomY = Math.random() * (300 - 50) + 50;
  if (enemies.length < 10) enemies.push(new Enemy(randomX, randomY, randomColor));
}
