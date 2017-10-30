function Player(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50; // Same size for player and enemies
  this.height = 50;
  this.speed = 10;
  this.color = 'blue';
  this.imgArr = ['./img/player-red.png', './img/player-blue.png'];
  this.img = new Image();
}

Player.prototype.setImage = function() {
  this.img.src = this.color === 'blue' ? this.imgArr[1] : this.imgArr[0];
  this.img.onload = function() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }.bind(this)

};

Player.prototype.render = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Player.prototype.moveLeft = function() {
  if(this.x > 0) this.x -= this.speed;
};

Player.prototype.moveRight = function() {
  if(this.x + this.width < canvas.width) this.x += this.speed;
};

Player.prototype.moveUp = function() {
  if(this.y > 0) this.y -= this.speed;
};

Player.prototype.moveDown = function() {
  if(this.y + this.height < canvas.height) this.y += this.speed;
};

Player.prototype.changeColor = function() {
  this.color = this.color === 'blue' ? 'red' : 'blue';
  this.setImage();
};

Player.prototype.fire = function() {
  console.log('fire!');
};


Player.prototype.update = function() {
  if (key.isDown(key.up)) this.moveUp();
  if (key.isDown(key.left)) this.moveLeft();
  if (key.isDown(key.down)) this.moveDown();
  if (key.isDown(key.right)) this.moveRight();
  if (key.isDown(key.space)) this.fire();
  if (key.isDown(key.b)) this.changeColor();
};
