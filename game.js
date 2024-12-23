import Player from './player.js';
import Enemy from './enemy.js';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;
    this.ctx = this.canvas.getContext('2d');
    this.player = new Player(this.canvas);
    this.enemies = [];
    this.enemyRows = [];
    this.gameOver = false;
  }

  start() {
    this.createEnemies();
    this.gameLoop();
  }

  createEnemies() {
    const enemySpacing = (GAME_WIDTH - 100) / 9;
    const enemyRows = 5;
    const enemyHeight = 40;
    const enemyWidth = 50;
    const enemyOffsetTop = 30;
    const enemyOffsetLeft = 30;

    for (let j = 0; j < enemyRows; j++) {
      const enemyRow = [];
      for (let i = 0; i < 10; i++) {
        const enemy = new Enemy(
          enemyOffsetLeft + i * enemySpacing,
          enemyOffsetTop + j * enemyHeight,
          enemyWidth,
          enemyHeight
        );
        enemyRow.push(enemy);
      }
      this.enemyRows.push(enemyRow);
    }
    this.enemies = [].concat(...this.enemyRows);
  }

  gameLoop = () => {
    if (!this.gameOver) {
      window.requestAnimationFrame(this.gameLoop);
      this.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      this.player.draw(this.ctx);
      this.enemies.forEach((enemy) => enemy.draw(this.ctx));
    }
  };
}
