function Player(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50; // Same size for player and enemies
  this.height = 50;
  this.speed = 20;
  this.color = 'red';
}

Player.prototype.render = function() {
  ctx.fillStyle = 'orange';
  ctx.fillRect(this.x, this.y, 32, 32);
};

Player.prototype.moveLeft = function() {
  this.x -= this.speed;
};

Player.prototype.moveRight = function() {
  this.x += this.speed;
};

Player.prototype.moveUp = function() {
  this.y -= this.speed;
};

Player.prototype.moveDown = function() {
  this.y += this.speed;
};

Player.prototype.update = function() {
  if (key.isDown(key.up)) this.moveUp();
  if (key.isDown(key.left)) this.moveLeft();
  if (key.isDown(key.down)) this.moveDown();
  if (key.isDown(key.right)) this.moveRight();
  if (key.isDown(key.space)) this.fire();
  if (key.isDown(key.b)) this.changeColor();
};
