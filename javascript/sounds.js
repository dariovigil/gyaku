var powerOn = new Audio('./sounds/power-on.wav');
var shoot = AudioFX('./sounds/bullet-2', { formats: ['wav'], pool: 10 });
var damage = AudioFX('./sounds/damage', { formats: ['mp3'], pool: 10 });
var absorb = AudioFX('./sounds/absorb', { formats: ['wav'], pool: 10 });
var music = AudioFX('sounds/in-game.wav');
var gameOverSound = AudioFX('sounds/game-over.wav');
