//getting elements
const dice = document.querySelector(".dice")
const player01 = document.querySelector(".player--0");
const player02 = document.querySelector(".player--1");
const score01 = document.querySelector("#score--0");
const score02 = document.querySelector("#score--1");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");

//starting the game
let scores = [0, 0]
let currentPlayer = 0;
let currentScore = 0;
score01.innerText = 0;
score02.innerText = 0;
let gamePlaying = true;

player01.classList.add("player--active")
player02.classList.remove("player--active")


function playerSwitch(){
    currentScore = 0 
        if(currentPlayer === 0){ 
            currentPlayer = 1
        }else{
            currentPlayer = 0
       }
    player01.classList.toggle("player--active")
    player02.classList.toggle("player--active")
}

//User roles dice
rollBtn.addEventListener('click', function(){ 
    if(gamePlaying){
        //Generate a random number
        const diceNum = Math.floor(Math.random() * 6) + 1; 
        //display dice roll
        dice.src = "dice-" + diceNum + ".png"; 
        // if its not equal to 1 add dice role to current score
        if(diceNum !== 1){ 
            currentScore =  diceNum + currentScore 
            document.getElementById("current--" + currentPlayer).innerText = currentScore
        }else{
            //if its 1, switch player
            document.getElementById("current--" + currentPlayer).innerText = 0 
            playerSwitch()
        } 
    }
})


// user holds score
holdBtn.addEventListener('click', function(){
    if(gamePlaying){
        // add current score to total score
        scores[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).innerText = scores[currentPlayer];
        document.getElementById("current--" + currentPlayer).innerText = 0;
        // score >=100 current player Wins
        if(scores[currentPlayer] >= 100){
            gamePlaying = false;
            dice.classList.add("hidden");
            document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");        
        }else{
            playerSwitch()
        }
    } 
});

 
// // user resets game 
newBtn.addEventListener('click', function(){
    scores = [0, 0];
    currentPlayer = 0;
    currentScore = 0;
    dice.src = `dice-5.png`;
    score01.innerText = 0;
    score02.innerText = 0;
    dice.classList.remove("hidden");
    gamePlaying= true;
    player01.classList.remove("player--winner");
    player02.classList.remove("player--winner");
})