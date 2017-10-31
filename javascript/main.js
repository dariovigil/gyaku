// Key handler (smooth movement)
var key = {
  pressed: {},

  left: 37,
  up: 38,
  right: 39,
  down: 40,
  space: 32,
  b: 66,

  isDown: function(keyCode) {
    return this.pressed[keyCode];
  },

  onKeydown: function(event) {
    // console.log('onKeydown');
    this.pressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    // console.log('onKeyup');
    delete this.pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { key.onKeyup(event); });
window.addEventListener('keydown', function(event) { key.onKeydown(event); });
// Separated event to avoid false multiple inputs 
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 66) {
      console.log('b is clicked');
      player.changeColor();
    }
    if (event.keyCode === 32) {
      console.log('space is clicked');
      player.fire();
    }
  });
