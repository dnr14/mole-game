const $div = document.querySelectorAll('.root .item');
const $mole = document.querySelectorAll('.root .item .mole');
const $boom = document.querySelectorAll('.root .item .boom');
const $score = document.querySelector('.score')
let _globalcount = 0;

eventHandler($mole, true);
eventHandler($boom, false);

function eventHandler(currentEl, y) {
  currentEl.forEach((el) => {
    el.isclick = false;
    el.addEventListener('click', scoreCheck(y));
  });
}

function scoreCheck(y) {
  return (e) => {

    if (e.currentTarget.isclick == true) {
      return e.preventDefault();
    }
    y == true ? _globalcount += 1 : _globalcount -= 1;
    e.currentTarget.isclick = true;
    e.currentTarget.classList.remove("on");
    $score.innerText = `${_globalcount}점`;
  }
}

const remove = (v, index) => () => {
  $div[v].children[index].classList.remove("on");
  $div[v].children[index].isclick = false;
  $div[v].ishide = true;
}

const timer = setInterval(() => {

  for (let i = 0; i < 5; i++) {
    let random = rand(0, 8);
    let index = 0;

    if ($div[random].ishide == false) return;

    if (i % 2 == 1) {
      index = 1;
      $div[random].children[index].classList.add("on");
    } else {
      $div[random].children[index].classList.add("on");
    }

    $div[random].ishide = false;
    let hideTime = rand(2, 3) * 1000 - 500;
    setTimeout(remove(random, index), hideTime);
  }

}, 1000);

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 끝내는 로직
// setTimeout(() => {
//   clearInterval(timer);
//   alert("끝");
// }, 10000);