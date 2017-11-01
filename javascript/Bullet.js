function Bullet(x, y, color, type) {
  this.x = x + 12;
  this.y = y;
  this.width = 25;
  this.height = 25;
  this.speed = 10;
  this.color = color;
  this.type = type;
  this.img = new Image();
  this.setImage();
}

Bullet.prototype.setImage = function() {
  this.img.src = `./img/bullet-${this.color}-${this.type}.png`;
  this.img.onload = function() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }.bind(this);
};

Bullet.prototype.update = function() {
  this.y += this.type === 'enemy' ? this.speed : -this.speed;
  
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};
