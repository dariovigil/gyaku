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
    player.update();
    this.pressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    // console.log('onKeyup');
    player.update();
    delete this.pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { key.onKeydown(event); }, false);
