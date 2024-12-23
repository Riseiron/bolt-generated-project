const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 20;

export default class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2 - PLAYER_WIDTH / 2;
    this.y = canvas.height - PLAYER_HEIGHT - 20;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
    this.speed = 5;

    this.moveLeft = false;
    this.moveRight = false;

    this.canvas.addEventListener('keydown', this.handleKeyDown);
    this.canvas.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown = (e) => {
    if (e.code === 'ArrowLeft') {
      this.moveLeft = true;
    } else if (e.code === 'ArrowRight') {
      this.moveRight = true;
    }
  };

  handleKeyUp = (e) => {
    if (e.code === 'ArrowLeft') {
      this.moveLeft = false;
    } else if (e.code === 'ArrowRight') {
      this.moveRight = false;
    }
  };

  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);

    if (this.moveLeft && this.x > 0) {
      this.x -= this.speed;
    } else if (this.moveRight && this.x < this.canvas.width - this.width) {
      this.x += this.speed;
    }
  }
}
