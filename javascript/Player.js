function Player(x, y) {
  this.x = 0;
  this.y = 0;
  this.width = 50; // Same size for player and enemies
  this.height = 50;
}

Player.prototype.draw = function(context) {
  context.fillStyle = 'orange';
  context.fillRect(this.x, this.y, 32, 32);
};

Player.prototype.moveLeft = function() {
  console.log('moveLeft');
  this.x -= 1;
};

Player.prototype.moveRight = function() {
  console.log('moveRight');
  this.x += 1;
};

Player.prototype.moveUp = function() {
  console.log('moveUp');
  this.y -= 1;
};

Player.prototype.moveDown = function() {
  console.log('moveDown');
  this.y += 1;
};

Player.prototype.update = function() {
  if (key.isDown(key.up)) this.moveUp();
  if (key.isDown(key.left)) this.moveLeft();
  if (key.isDown(key.down)) this.moveDown();
  if (key.isDown(key.right)) this.moveRight();
  if (key.isDown(key.space)) this.moveRight();
  if (key.isDown(key.b)) this.moveRight();
};
