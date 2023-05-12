'use strict';

let score = 20;
let highScore = 0;
let secNumber = Math.trunc(Math.random()*20 )+ 1
console.log(secNumber)

const checkHandler = function() {
    const number =Number(document.querySelector(".guess").value);

    if(number === secNumber){
        document.querySelector(".message").innerText="right answer"
        document.querySelector(".number").innerText=secNumber
        document.querySelector("body").style.backgroundColor='green'
        if(score > highScore){
            highScore=score;
            document.querySelector('.highscore').innerText=highScore;
        }
    }

    if(number != secNumber){
        if(score > 1){
        document.querySelector(".message").innerText=
            number > secNumber ? "too high" : "too low"
        score--;
        document.querySelector('.score').innerText=score;
        }
        else{
            document.querySelector(".message").innerText="Game over"
        }
    }
}

const againHandler = function() {
    document.querySelector(".message").innerText="start guessing ..."
    score=20
    secNumber = Math.trunc(Math.random()*20 )+ 1
    console.log(secNumber)
    document.querySelector(".score").innerText=score;
    document.querySelector(".number").innerText="?"
    document.querySelector("body").style.backgroundColor='black'
    document.querySelector(".guess").value=null
}

document.querySelector(".check").addEventListener('click',checkHandler)
document.querySelector(".again").addEventListener('click',againHandler)