export default class Game {
  constructor() {
    this.randomItemNumber = 0;
    this.intervalId = null;
    this.countPoints = 0;
    this.countMissing = 0;
  }

  init() {
    this.field = Array.from(document.querySelectorAll('.field-item'));
    this.newGameBtn = document.getElementById('start-game');
    this.stopGameBtn = document.getElementById('stop-game');
    this.fieldList = document.getElementById('field-list');
    this.gameOverDiv = document.getElementById('game-over-id');
    this.spanCountPoints = document.getElementById('count-points');
    this.spanCountMissing = document.getElementById('count-missing');

    this.newGameBtn.addEventListener('click', () => this.startGame());
    this.stopGameBtn.addEventListener('click', () => this.stopGame());
    this.fieldList.addEventListener('click', (e) => this.gamePoints(e));

    this.fieldList.addEventListener('mousedown', (e) => this.hammerDown(e));
    this.fieldList.addEventListener('mouseup', (e) => this.hammerUp(e));
  }

  hammerDown() {
    this.fieldList.classList.add('hummer-bang');
  }

  hammerUp() {
    this.fieldList.classList.remove('hummer-bang');
  }

  gamePoints(e) {
    const divGoblin = e.target.closest('div.field-item.field-item-img');
    if (!divGoblin) return;

    this.countPoints += 1;
    this.spanCountPoints.textContent = this.countPoints;
    divGoblin.classList.remove('field-item-img');
  }

  getRandom(max, except) {
    const num = Math.floor(Math.random() * max);
    return num === except ? this.getRandom(max, except) : num;
  }

  generateGoblin() {
    this.randomItemNumber = this.getRandom(this.field.length, this.randomItemNumber);
    this.field[this.randomItemNumber].classList.add('field-item-img');
  }

  removeGoblin() {
    const indexGoblin = this.field.findIndex((item) => item.classList.contains('field-item-img'));
    if (indexGoblin !== -1) {
      this.field[indexGoblin].classList.remove('field-item-img');
    }
  }

  startGame() {
    this.gameOverDiv.classList.remove('display');
    this.stopGameBtn.disabled = false;
    this.generateGoblin();

    this.intervalId = setInterval(() => {
      this.stepGame();
    }, 1000);
  }

  stopGame() {
    this.removeGoblin();
    clearInterval(this.intervalId);
    this.countsClear();
    this.stopGameBtn.disabled = true;
  }

  countsClear() {
    this.countPoints = 0;
    this.countMissing = 0;
    this.spanCountPoints.textContent = this.countPoints;
    this.spanCountMissing.textContent = this.countMissing;
  }

  stepGame() {
    const indexGoblin = this.field.findIndex((item) => item.classList.contains('field-item-img'));
    if (indexGoblin === -1) {
      this.generateGoblin();
    } else {
      this.removeGoblin();
      this.checkGameOver();
    }
  }

  checkGameOver() {
    this.countMissing += 1;
    this.spanCountMissing.textContent = this.countMissing;
    if (this.countMissing === 5) {
      this.removeGoblin();
      this.stopGame();
      this.gameOverDiv.classList.add('display');
    } else {
      this.generateGoblin();
    }
  }
}
