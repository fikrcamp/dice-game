//write code here
//write code here
let Random;
let currentScore = 0;
let currentPlayer = 0;
let score = [0,0]

// add functionality btn roll 
document.querySelector(".btn--roll").addEventListener("click", function(){
    Random = Math.trunc(Math.random()*6)+1;
    document.querySelector(".dice").src = `dice-${Random}.png`

    if(Random == 1) {
        currentScore = 0;
        document.querySelector(`#current--${currentPlayer}`).innerText = currentScore;
        currentPlayer==0 ? currentPlayer=1 : currentPlayer = 0; 
        document.querySelector(".player--0").classList.toggle("player--active")
        document.querySelector(".player--1").classList.toggle("player--active")
    }

    else{
        currentScore+=Random;
        document.getElementById(`current--${currentPlayer}`).innerText = currentScore;
    }


})


document.querySelector(".btn--hold").addEventListener("click", function(){
    score[currentPlayer]+=currentScore;
    // Winning Condition 
    if(score[currentPlayer] >=100){
        // Random = Math.trunc(Math.random()*0);
        document.querySelector(".btn--hold").disabled = true;
        document.querySelector(".btn--roll").disabled = true;
        document.querySelector(`#score--${currentPlayer}`).innerText = score[currentPlayer]; 
        document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner")
    }

    document.querySelector(`#score--${currentPlayer}`).innerText = score[currentPlayer]; 
    currentScore=0;
    document.querySelector(`#current--${currentPlayer}`).innerText = 0; 
    currentPlayer==0 ? currentPlayer=1 : currentPlayer = 0; 
    document.querySelector(".player--0").classList.toggle("player--active")
    document.querySelector(".player--1").classList.toggle("player--active")
})


document.querySelector(".btn--new").addEventListener("click", function(){
    currentScore = 0;
    currentPlayer = 0;
    score = [0,0];

    document.querySelector(`#current--0`).value = 0;
    document.querySelector(`#current--1`).value = 0;
    
    document.querySelector(`#score--${currentPlayer}`).innerText = 0;

    if(currentPlayer==0){
        document.querySelector(".player--0").classList.add("player--active")
        document.querySelector(".player--1").classList.remove("player--active")
    }

    document.querySelector(".btn--hold").disabled = false;
    document.querySelector(".btn--roll").disabled = false;

    document.querySelector(".player--0").classList.remove('player--winner')
    document.querySelector(".player--1").classList.remove('player--winner')
})







