import getRandom from './random';

export default function changePosition(field, position) {
    const currentGoblin = field.findIndex(item => item.classList.contains('field-item-img'));
    field[currentGoblin].classList.remove('field-item-img');
    
    let newPosition = getRandom(field.length, position);

    field[position].classList.add('field-item-img');

    return newPosition;
}
