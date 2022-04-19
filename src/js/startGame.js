import getRandom from './random';

export default function startGame() {
    const field = Array.from(document.querySelectorAll('.field-item'));
    let randomItemNumber = getRandom(field.length);
    field[randomItemNumber].classList.add('field-item-img');
    
    let intervalId = setInterval(() => {
        const currentGoblin = field.findIndex(item => item.classList.contains('field-item-img'));
        console.log(currentGoblin);
        field[currentGoblin].classList.remove('field-item-img');
        
        randomItemNumber = getRandom(field.length, randomItemNumber);
    
        field[randomItemNumber].classList.add('field-item-img');
    }, 1000);

    const stopButton = document.querySelector('.stop');
    stopButton.addEventListener('click', () => {
    clearInterval(intervalId)});
}
    