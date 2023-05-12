'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice')
const diceNew = document.querySelector('.btn--new')
const diceHold = document.querySelector('.btn--hold')
const diceRoll = document.querySelector('.btn--roll')

//intial conditions
let score ,currentScore ,currentPlayer;

const intialConditions = function() {
    score = [0, 0]
    score0El.innerText=score[0];
    score1El.innerText=score[1];
    diceEl.classList.add('hidden')
    currentScore = 0;
    currentPlayer = 0;
}

intialConditions();

// player changing
const changePlayer = function() {
    //making local score zero 
    currentScore = 0
    document.getElementById(`current--${currentPlayer}`).innerText=0;
    

    document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${currentPlayer}`).classList.add('player--active')
}

//dice roll
const diceRollHandler = function() {
    const diceNumber = Math.trunc(Math.random()*6)+1

    diceEl.classList.remove('hidden')
    diceEl.src = `./dice-${diceNumber}.png`

    if(diceNumber !== 1){
        currentScore += diceNumber;
        document.getElementById(`current--${currentPlayer}`).innerText=currentScore;
    }
    else{
        changePlayer();
    }
}

// updating score on pressing hold
const holdHandler = function(){
    // score update
    score[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).innerText = score[currentPlayer]

    // winner condition
    if(score[currentPlayer] >= 100){
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner')
        diceEl.classList.add('hidden')
        diceHold.disabled=true;
        diceRoll.disabled=true;
    }else{
        changePlayer();
    }
}

// new game
const newHandler = function() {
    diceHold.disabled=false;
    diceRoll.disabled=false;
    document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--winner')
    document.getElementById(`current--${currentPlayer}`).innerText = 0;
    document.querySelector(`.player--0`).classList.add('player--active')
    document.querySelector(`.player--1`).classList.remove('player--active')
    intialConditions();
}

diceRoll.addEventListener('click', diceRollHandler)
diceHold.addEventListener('click', holdHandler)
diceNew.addEventListener('click', newHandler)