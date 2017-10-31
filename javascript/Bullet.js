function Bullet(x, y, color) {
  this.x = x + 12;
  this.y = y;
  this.width = 25;
  this.height = 25;
  this.speed = 10;
  this.color = color;
  this.imgArr = ['./img/bullet-red.png', './img/bullet-blue.png'];
  this.img = new Image();
  this.setImage();

}

Bullet.prototype.setImage = function() {
  console.log('bullet set image called');
  console.log(this.img);
  this.img.src = this.color === 'blue' ? this.imgArr[1] : this.imgArr[0];
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  // this.img.onload = function() {
  //   ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  // }.bind(this);
};
