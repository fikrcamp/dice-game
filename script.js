//write code here

let scores, dice, current, currentPlayer, playing;

function initilization() {
  dice;
  current = 0;
  currentPlayer = 0;
  scores = [0, 0];
  playing = true;

  document.querySelector("#score--0").innerText = 0;
  document.querySelector("#score--1").innerText = 0;
  document.querySelector("#current--0").innerText = 0;
  document.querySelector("#current--1").innerText = 0;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector("#name--0").innerText = "Player 1";
  document.querySelector("#name--1").innerText = "Player 2";
}
initilization();

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (playing) {
    dice = Math.trunc(Math.random() * 6 + 1);
    //   console.log(dice);
    document.querySelector(".dice").src = `dice-${dice}.png`;
    if (dice != 1) {
      current = current + dice;

      document.querySelector(`#current--${currentPlayer}`).innerText = current;
    } else if (dice === 1) {
      current = 0;
      currentPlayer == 0 ? (currentPlayer = 1) : (currentPlayer = 0);
      document.querySelector(`#current--${currentPlayer}`).innerText = current;

      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (playing) {
    scores[currentPlayer] = scores[currentPlayer] + current;
    document.querySelector(`#score--${currentPlayer}`).innerText =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
      document.querySelector(`#name--${currentPlayer}`).innerText = "Winner🥈";
    } else {
      current = 0;
      currentPlayer == 0 ? (currentPlayer = 1) : (currentPlayer = 0);
      document.querySelector(`#current--${currentPlayer}`).innerText = current;

      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});

document.querySelector(".btn--new").addEventListener("click", initilization);
