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
    this.pressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { key.onKeyup(event); });
window.addEventListener('keydown', function(event) { key.onKeydown(event); });
// Separated event to avoid false multiple inputs
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 66) {
      player.changeColor();
    }
    if (event.keyCode === 32) {
      player.fire();
    }
    // - ENTER KEY
    if (event.keyCode === 13) {
      document.querySelector('.start').classList.add('hidden');
      startGame();
    }
    //Cancel animation
    if (event.keyCode === 81) {
      console.log('q pressed');
      window.clearInterval(createEnemyIntId);
      pause = true;
    }
  });
