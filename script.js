'use strict';

let score = 0;

//function of random
const getRandomArbitary = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const elem = document.getElementById('change');

//add colors here
const colors = ['Red', 'Blue', 'Yellow', 'White', 'Green', 'Purple', 'Orange'];

//randomize indexes
let indexOfRandomName = getRandomArbitary(0, colors.length);
let indexOfRandomColor = getRandomArbitary(0, colors.length);
let indexOfTrueFalse = getRandomArbitary(0, 2);

const swapRandom = () => {
  elem.innerHTML = `${colors[indexOfRandomName]}`;
  elem.style.color = `${colors[indexOfRandomColor]}`;
};

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
const preloader = document.getElementById('preloader');
const blur = document.getElementById('blur');
const startButton = document.getElementById('start');
const menuContent = document.getElementById('menu-content');

const startComponents = [preloader, startButton, menuContent, mouse];

const hide = (array) => {
  array.map((component) => component.style.visibility = 'hidden');
};

const appear = (array) => {
  array.map((component) => component.style.visibility = 'visible');
};

const start = () => {
  timer();
  hide(startComponents);
  blur.style.filter = 'none';
  mouse.style.transition = 'none';
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
    }, 1000);
  }, 2000);
};

const points = document.getElementById('score');
const endMenu = document.getElementById('endmenu-content');
const reloadComponents = [preloader, points, endMenu];

const endGame = () => {
  appear(reloadComponents);
  document.getElementById('score').innerHTML = `Your score: ${score}`;
};

const reload = () => {
  hide(reloadComponents);
  time = 100;
  shift = 100;
  timer();
};

mouseAnimation();
arrowAnimation();
