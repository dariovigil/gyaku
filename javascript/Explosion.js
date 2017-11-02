// TO DO
function Explosion(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 70;
  this.setImage();
}

Explosion.prototype.setImage = function() {
  this.img = new Image();
  this.img.src = './img/explosion.png';
  this.img.onload = function() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }.bind(this);
};

Explosion.prototype.render = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};
