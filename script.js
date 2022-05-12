//write code here
let current = 0;
let currentPlayer = 0;
let score = [0, 0];
document.querySelector(".btn--roll").addEventListener("click", function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".dice").src = `dice-${dice}.png`;

  if (dice == 1) {
    current = 0;
    document.querySelector(`#current--${currentPlayer}`).innerText = current;
    currentPlayer == 0 ? (currentPlayer = 1) : (currentPlayer = 0);
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
  } else {
    current += dice;
    document.querySelector(`#current--${currentPlayer}`).innerText = current;
    document.querySelector(`#current--${currentPlayer}`).innerText = current;
    //   current = 0
  }
});
// hold button
document.querySelector(".btn--hold").addEventListener("click", function () {
  score[currentPlayer] += current;
  if (score[currentPlayer] >= 100) {
    this.disabled = true;
    this.disabled = true;
    console.log(this);
    document.querySelector(`#name--${currentPlayer}`).innerText = "winner!!";

    document.querySelector(`#score--${currentPlayer}`).innerText =
      score[currentPlayer];
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add("player--winner");
  }
  document.querySelector(`#score--${currentPlayer}`).innerText =
    score[currentPlayer];
  document.querySelector(`#current--${currentPlayer}`).innerText = 0;
  currentPlayer == 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  current = 0;

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
});
// rest a game
document.querySelector(".btn--new").addEventListener("click", function () {
  score = [0, 0];
  current = 0;
  // Math.trunc(Math.random() * 6) + 1;
  currentPlayer = 0;
  document.querySelector(`#current--${current}`).innerText = 0;

  // document.querySelector(`#score--0${currentPlayer}`).innerText = 0;
  document.querySelector("#score--0").innerText = 0;
  document.querySelector("#score--1").innerText = 0;
  document.querySelector(".btn--hold").disabled = false;
  document.querySelector(".btn--roll").disabled = false;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");

  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector("#name--0").innerText = "Player 1";
  document.querySelector("#name--1").innerText = "Player 2";
});
