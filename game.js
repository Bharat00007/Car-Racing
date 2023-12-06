const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Car object
const car = {
  x: 100,
  y: 300,
  width: 50,
  height: 50,
  speed: 5,
  draw: function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  moveLeft: function() {
    this.x -= this.speed;
  },
  moveRight: function() {
    this.x += this.speed;
  }
};

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();

// Event listeners for car movement
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    car.moveLeft();
  } else if (event.key === 'ArrowRight') {
    car.moveRight();
  }
});
