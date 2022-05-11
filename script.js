//write code here
let dice;
let scores = [0, 0];
let current = 0;
let currentPlayer = 0;

document.querySelector(".btn--roll").addEventListener("click", function () {
  scores[currentPlayer] < 100
    ? (dice = Math.trunc(Math.random() * 6) + 1)
    : (dice = 0);
  dice >= 1 && dice <= 6
    ? (document.querySelector(".dice").src = `dice-${dice}.png`)
    : "";

  if (dice == 1) {
    current = 0;
    document.querySelector(`#current--${currentPlayer}`).innerText = current;
    currentPlayer == 0 ? (currentPlayer = 1) : (currentPlayer = 0);
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
  } else {
    current += dice;
    document.querySelector(`#current--${currentPlayer}`).innerText = current;
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  scores[currentPlayer] += current;
  if (scores[currentPlayer] >= 100) {
    document.querySelector(`#score--${currentPlayer}`).innerText =
      scores[currentPlayer];

    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add("player--winner");
    document.querySelector(`#name--${currentPlayer}`).innerText = "Winner!";
  }

  document.querySelector(`#score--${currentPlayer}`).innerText =
    scores[currentPlayer];
  current = 0;
  document.querySelector(`#current--${currentPlayer}`).innerText = current;

  if (currentPlayer == 0 && scores[currentPlayer] < 100) {
    currentPlayer = 1;
  } else {
    if ((currentPlayer = 1 && scores[currentPlayer] < 100)) {
      currentPlayer = 0;
    }
  }

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
});

document.querySelector(".btn--new").addEventListener("click", function () {
  // dice = Math.trunc(Math.random() * 6) + 1;
  // document.querySelector(".dice").src = `dice-${dice}.png`;
  current = 0;
  scores = [0, 0];
  currentPlayer = 0;

  document.querySelector(`#current--0`).innerText = 0;
  document.querySelector(`#current--1`).innerText = 0;
  document.querySelector(`#score--0`).innerText = 0;
  document.querySelector(`#score--1`).innerText = 0;

  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");

  document.querySelector(`#name--0`).innerText = "Player 1";
  document.querySelector(`#name--1`).innerText = "Player 2";
});
