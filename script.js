'use strict';

let score = 0;
const getRandomArbitary = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

let indexOfRandomName = getRandomArbitary(0, 7);
let indexOfRandomColor = getRandomArbitary(0, 7);
let indexOfTrueFalse = getRandomArbitary(0, 2);
const elem = document.getElementById('change');
const colors = ['Red', 'Blue', 'Yellow', 'White', 'Green', 'Purple', 'Orange'];

const swapRandom = () => {
  elem.innerHTML = `${colors[indexOfRandomName]}`;
  elem.style.color = `${colors[indexOfRandomColor]}`;
}

const generateNewWord = () => {
  indexOfTrueFalse = getRandomArbitary(0, 2);
  indexOfRandomName = getRandomArbitary(0, 7);
  indexOfRandomColor = getRandomArbitary(0, 7);

  if (indexOfTrueFalse === 1) {
    while (indexOfRandomName !== indexOfRandomColor) {
      indexOfRandomName = getRandomArbitary(0, 7);
      indexOfRandomColor = getRandomArbitary(0, 7);
    }
    swapRandom();
  }

  if (indexOfTrueFalse === 0) {
    while (indexOfRandomName === indexOfRandomColor) {
      indexOfRandomName = getRandomArbitary(0, 7);
      indexOfRandomColor = getRandomArbitary(0, 7);
    }
    swapRandom();
  }
};

let counter = 0;
let time = 100;
let shift = 100;

const tick = document.getElementById('counter');
const line = document.getElementById('timer');

const timer = () => {
  time = 100;
  score = 0;
  const fnc = setInterval(() => {
    time--;
    shift--;
    line.style.width = `${shift}%`;
    if (time <= 0) {
      clearInterval(fnc);
      counter = 0;
      tick.innerHTML = (counter);
      return generateNewWord(), endGame();
    }
  }, 10);
};


const leftStyle = document.getElementById('left');
const rightStyle = document.getElementById('right');

const leftButtonClick = () => {
  leftStyle.style.backgroundColor = 'black';
  leftStyle.style.opacity = '0.8';
  leftStyle.style.color = '#41e25b';
  leftStyle.style.transform = 'scale(1.1)';
  setTimeout(() => {
    leftStyle.style.backgroundColor = 'transparent';
    leftStyle.style.color = 'white';
    leftStyle.style.transform = 'none';
  }, 200);
};

const rightButtonClick = () => {
  rightStyle.style.backgroundColor = 'black';
  rightStyle.style.opacity = '0.8';
  rightStyle.style.color = '#e22f28';
  rightStyle.style.transform = 'scale(1.1)';
  setTimeout(() => {
    rightStyle.style.backgroundColor = 'transparent';
    rightStyle.style.color = 'white';
    rightStyle.style.transform = 'none';
  }, 200);
};

const truth = () => {
  if (indexOfRandomName === indexOfRandomColor) {
    counter++;
    score = counter;
    generateNewWord();
    time = 100;
    shift = 100;
  } else {
    counter = 0;
    time = 0;
    shift = 0;
    generateNewWord();
    endGame();
  }
  leftButtonClick();
  console.log('counter ' + counter);
  tick.innerHTML = (counter);
};

const untruth = () => {
  if (indexOfRandomName !== indexOfRandomColor) {
    counter++;
    score = counter;
    generateNewWord();
    time = 100;
    shift = 100;
  } else {
    counter = 0;
    generateNewWord();
    time = 0;
    shift = 0;
    endGame();
  }
  rightButtonClick();
  console.log('counter ' + counter);
  tick.innerHTML = (counter);
};

tick.innerHTML = '0';
generateNewWord();

// timer();
time = 100;

const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
const mouse = document.getElementById('mouse');

const start = () => {
  timer();
  document.getElementById('preloader').style.visibility = 'hidden';
  document.getElementById('blur').style.filter = 'none';
  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('menu-content').style.visibility = 'hidden';
  mouse.style.transition = 'none';
  mouse.style.visibility = 'hidden';
};


  document.onkeydown = (e) => {
  if (event.keyCode === 39) untruth();
  if (event.keyCode === 37) truth();
};

const arrowAnimation = () => {
  setInterval(() => {
    leftArrow.style.transform = 'scale(0.9)';
    leftArrow.style.borderColor = '#41e25b';
    rightArrow.style.transform = 'none';
    rightArrow.style.borderColor = 'white';
    setTimeout(() => {
      leftArrow.style.transform = 'none';
      leftArrow.style.borderColor = 'white';
      rightArrow.style.transform = 'scale(0.9)';
      rightArrow.style.borderColor = '#e22f28';
    }, 1000);
  }, 2000);
};

const mouseAnimation = () => {
  setInterval(() => {
    let shifting = 0;
    shifting -= 25;
    mouse.style.left = `${shifting}px`;
    setTimeout(() => {
      let shifting = 0;
      shifting += 50;
      mouse.style.left = `${shifting}px`;
    },1000);
  }, 2000);
}

const endGame = () => {
  document.getElementById('endmenu-content').style.visibility = 'visible';
  document.getElementById('preloader').style.visibility = 'visible';
  document.getElementById('score').style.visibility = 'visible';
  document.getElementById('score').innerHTML = `Your score: ${score}`;
}

const reload = () => {
  document.getElementById('endmenu-content').style.visibility = 'hidden';
  document.getElementById('preloader').style.visibility = 'hidden';
  document.getElementById('score').style.visibility = 'hidden';
  time = 100;
  shift = 100;
  timer();
}

mouseAnimation();
arrowAnimation();
