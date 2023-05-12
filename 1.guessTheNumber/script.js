'use strict';

let secNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secNumber);

let score = 20;
let highScore = 0;

// const scoreCal = function () {
//   score--;
//   document.querySelector('.score').textContent = score;
// };

// const guessAgain = function (str) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = str;
//     scoreCal();
//   } else {
//     document.querySelector('.message').textContent = '💥You lost the Game';
//   }
// };

const checkHandler = function () {
  let guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';

    // guess is correct
  } else if (guess === secNumber) {
    document.querySelector('.message').textContent = '✨ Right Answer';
    document.querySelector('.number').textContent = secNumber;
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // guess is not correct
  } else if (guess !== secNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secNumber ? '🤔 Too Low' : '😮 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the Game';
    }
  }
};

const againHandler = function () {
  score = 20;
  secNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '10rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Guessing...';
};

document.querySelector('.again').addEventListener('click', againHandler);
document.querySelector('.check').addEventListener('click', checkHandler);
