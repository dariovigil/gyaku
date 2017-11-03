function Enemy(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 83;
  this.speed = 10;
  this.color = color;
  this.type = 'enemy';
  this.imgArr = ['./img/enemy-2-red.png', './img/enemy-2-blue.png', './img/explosion.png'];
  this.setImage();
}

Enemy.prototype.setImage = function(explosion) {
  this.img = new Image();
  this.img.src = this.color === 'blue' ? this.imgArr[1] : this.imgArr[0];
  this.img.onload = function() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }.bind(this);

};

Enemy.prototype.render = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Enemy.prototype.moveLeft = function() {
  console.log('moveleft');
  console.log(this);
  if(this.x > 0) this.x -= this.speed;
};

Enemy.prototype.moveRight = function() {
  if(this.x + this.width < canvas.width) this.x += this.speed;
};

Enemy.prototype.moveUp = function() {
  if(this.y > 0) this.y -= this.speed;
};

Enemy.prototype.moveDown = function() {
  if(this.y + this.height < canvas.height) this.y += this.speed;
};

Enemy.prototype.fire = function() {
  enemyBullets.push(new Bullet(this.x, this.y, this.color, this.type));
};

Enemy.prototype.interval = function(dance) {
  console.log('interval dentro nave');
  var myId = setInterval(dance.bind(this), 20);
};

// Enemy.prototype.dance = function() {
//   console.log('enemy dance inside');
//   console.log(this);
//   if(this.x > 225 && this.x > 0) {
//     this.x--;
//   } else {
//     this.x++;
//   }
//   if(this.x <= 350) this.moveRight();
//   this.x += this.x < 200 ? 20 : 0;
// };
