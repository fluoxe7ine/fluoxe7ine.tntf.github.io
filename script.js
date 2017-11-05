let a = getRandomArbitary(1,8);
let b = getRandomArbitary(1,8);
let counter = 0;

let elem = document.getElementById('change');
let tick = document.getElementById('counter');

tick.innerHTML = '0';

swapA();
swapB();

function getRandomArbitary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function swap(){
  a = getRandomArbitary(1,8);
  b = getRandomArbitary(1,8);
  swapA();
  swapB();
}

function truth(){
  if (a===b) {
    counter++;
    swap();
  } else {
    counter = 0;
    swap();
    }
    console.log('counter ' + counter);
    tick.innerHTML = (counter);
}

function untruth(){
  if (a!=b) {
    counter++;
    swap();
  } else {
    counter = 0;
    swap();
    }
    console.log('counter ' + counter);
    tick.innerHTML = (counter);
}

function swapA(){
switch (a) {
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

function swapB() {
switch (b) {
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

document.onkeypress = function (event) {
  if (event.keyCode == 100) untruth();
  if (event.keyCode == 97) truth();
}
