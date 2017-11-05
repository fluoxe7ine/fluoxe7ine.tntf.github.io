'use strict';

let indexOfRandomName = getRandomArbitary(1, 8);
let indexOfRandomColor = getRandomArbitary(1, 8);
let counter = 0;

const elem = document.getElementById('change');
const tick = document.getElementById('counter');

tick.innerHTML = '0';

swapRandomName();
swapRandomColor();

function getRandomArbitary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateNewWord() {
  indexOfRandomName = getRandomArbitary(1, 8);
  indexOfRandomColor = getRandomArbitary(1, 8);
  swapRandomName();
  swapRandomColor();
}

function truth() {
  if (indexOfRandomName === indexOfRandomColor) {
    counter++;
    generateNewWord();
  } else {
    counter = 0;
    generateNewWord();
  }
  console.log('counter ' + counter);
  tick.innerHTML = (counter);
}

function untruth() {
  if (indexOfRandomName !== indexOfRandomColor) {
    counter++;
    generateNewWord();
  } else {
    counter = 0;
    generateNewWord();
  }
  console.log('counter ' + counter);
  tick.innerHTML = (counter);
}

function swapRandomName() {
  switch (indexOfRandomName) {
    case 1:
      elem.innerHTML = 'Красный';
      break;
    case 2:
      elem.innerHTML = 'Синий';
      break;
    case 3:
      elem.innerHTML = 'Желтый';
      break;
    case 4:
      elem.innerHTML = 'Белый';
      break;
    case 5:
      elem.innerHTML = 'Зеленый';
      break;
    case 6:
      elem.innerHTML = 'Фиолетовый';
      break;
    case 7:
      elem.innerHTML = 'Оранжевый';
      break;
    default:
  }
}

function swapRandomColor() {
  switch (indexOfRandomColor) {
    case 1:
      elem.style.color = 'red';
      break;
    case 2:
      elem.style.color = 'blue';
      break;
    case 3:
      elem.style.color = 'yellow';
      break;
    case 4:
      elem.style.color = 'white';
      break;
    case 5:
      elem.style.color = 'green';
      break;
    case 6:
      elem.style.color = 'purple';
      break;
    case 7:
      elem.style.color = 'orange';
      break;
    default:
  }
}

document.onkeypress = function(event) {
  if (event.keyCode === 100) untruth();
  if (event.keyCode === 97) truth();
};
