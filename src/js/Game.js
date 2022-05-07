export default class Game {
    constructor() {
        this.field = Array.from(document.querySelectorAll('.field-item'));
        this.randomItemNumber = this.getRandom(this.field.length);
        this.intervalId = null;
    }

    init() {
        this.newGameBtn = document.getElementById('start-game');
        this.stopGameBtn = document.getElementById('stop-game');
        this.fieldList = document.getElementById('field-list');

        this.newGameBtn.addEventListener('click', () => this.startGame());
        this.stopGameBtn.addEventListener('click', () => this.stopGame());
        this.fieldList.addEventListener('click', (e) => this.gamePoints(e));
    }

    currentGoblin() {
        const currentGoblin = this.field.findIndex((item) => item.classList.contains('field-item-img'));
        this.field[currentGoblin].classList.remove('field-item-img');
    }

    gamePoints(e) {
        const divGoblin = e.target.closest('div.field-item.field-item-img');
        console.log(divGoblin);
    }

    getRandom(max, except) {
        const num = Math.floor(Math.random() * max);
        return num === except ? this.getRandom(max, except) : num;
    }

    startGame() {
        this.field[this.randomItemNumber].classList.add('field-item-img');

        this.intervalId = setInterval(() => {
            this.currentGoblin();
        
            this.randomItemNumber = this.getRandom(this.field.length, this.randomItemNumber);
        
            this.field[this.randomItemNumber].classList.add('field-item-img');
          }, 1000);
    }

    stopGame() {
        clearInterval(this.intervalId);
        this.currentGoblin();
    }
}

//Делегирование событий - отслеживать клик по полю - gamePoints
//Отслеживать положение мыши над активным полем - курсор молоток
//Счетчик очков
//Счетчик появлений
//Счетчик пропусков появлений