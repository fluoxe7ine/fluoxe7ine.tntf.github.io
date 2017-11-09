'use strict';

let indexOfRandomName = getRandomArbitary(1, 8);
let indexOfRandomColor = getRandomArbitary(1, 8);
let indexOfTrueFalse = getRandomArbitary(0, 2);
let counter = 0;
let time = 100;
let shift = 100;
console.log(indexOfTrueFalse);
const elem = document.getElementById('change');
const tick = document.getElementById('counter');
const line = document.getElementById('timer');

tick.innerHTML = '0';
generateNewWord();

timer();
time = 100;

function getRandomArbitary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateNewWord() {
  indexOfTrueFalse = getRandomArbitary(0, 2);
  indexOfRandomName = getRandomArbitary(1, 8);
  indexOfRandomColor = getRandomArbitary(1, 8);

  console.log(indexOfTrueFalse);
  if (indexOfTrueFalse === 1) {
    while (indexOfRandomName !== indexOfRandomColor) {
      indexOfRandomName = getRandomArbitary(1, 8);
      indexOfRandomColor = getRandomArbitary(1, 8);
    }
    swapRandomName();
    swapRandomColor();
  }

  if (indexOfTrueFalse === 0) {
    while (indexOfRandomName === indexOfRandomColor) {
      indexOfRandomName = getRandomArbitary(1, 8);
      indexOfRandomColor = getRandomArbitary(1, 8);
    }
    swapRandomName();
    swapRandomColor();
  }

  // indexOfRandomName = getRandomArbitary(1, 8);
  // indexOfRandomColor = getRandomArbitary(1, 8);
  // swapRandomName();
  // swapRandomColor();
}

function truth() {
  if (indexOfRandomName === indexOfRandomColor) {
    counter++;
    generateNewWord();
    time = 100;
    shift = 100;
  } else {
    counter = 0;
    time = 100;
    shift = 100;
    generateNewWord();
  }
  console.log('counter ' + counter);
  tick.innerHTML = (counter);
}

function untruth() {
  if (indexOfRandomName !== indexOfRandomColor) {
    counter++;
    generateNewWord();
    time = 100;
    shift = 100;
  } else {
    counter = 0;
    generateNewWord();
    time = 100;
    shift = 100;
  }
  console.log('counter ' + counter);
  tick.innerHTML = (counter);
}

function swapRandomName() {
  switch (indexOfRandomName) {
    case 1:
      elem.innerHTML = 'Red';
      break;
    case 2:
      elem.innerHTML = 'Blue';
      break;
    case 3:
      elem.innerHTML = 'Yellow';
      break;
    case 4:
      elem.innerHTML = 'White';
      break;
    case 5:
      elem.innerHTML = 'Green';
      break;
    case 6:
      elem.innerHTML = 'Purple';
      break;
    case 7:
      elem.innerHTML = 'Orange';
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

function timer() {
  time = 100;
  const fnc = setInterval(() => {
    time--;
    shift--;
    line.style.width = shift + '%';
    if (time <= 0) {
      clearInterval(fnc);
      counter = 0;
      time = 100;
      shift = 100;
      tick.innerHTML = (counter);
      return timer(), generateNewWord();
    }
  }, 10);
}

document.onkeydown = function(event) {
  if (event.keyCode === 39) untruth();
  if (event.keyCode === 37) truth();
};
