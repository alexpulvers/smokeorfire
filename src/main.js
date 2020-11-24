import "./styles.css";


class Deck {
  constructor() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];


    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}
function shuffleCards() {
  deck1.shuffle();
  newS.textContent = "Cards have been shuffled. FRRRRESSSHHHH";
  $(".show-card").hide();
  newSGO.hide();
  newSP.hide();
  count.hide();
  hist.hide();
  error.hide();
  ap.hide();
}

function drawCard() {
  let result = deck1.deal();
  let tmp = result;
  let smoke = "Smoke!";
  let fire = "Firrre bby!";
  let color;
  if (tmp.includes("Spades") === true || tmp.includes("Clubs") === true) {
    color = smoke;
  } else {
    color = fire;
  }
  newSC.textContent = tmp +". "+ color;
  history.push(tmp);
  hist.textContent = history;
  counter++;
  if (counter > 0) {
    count.textContent = player + " drinks: " + counter;
  }
}

function isPassable() {
  if (counter === 3) {
    activePlayer();
  } else if (counter === 1 || counter === 2 || counter === 4 || counter === 6 || counter === 8 || counter === 10 || counter === 12 || counter === 14 || counter === 16 || counter === 18 || counter === 20 || counter === 22 || counter === 24 || counter === 26 || counter === 28 || counter === 30) {
    error.textContent = "cannot pass right now";
  } else {
    activePlayer();
  }
}

function pass() {
  isPassable();
  newSP.textContent = player + " has " + counter + " drinks.";
}

function gameOver() {
  newSGO.textContent = player + " still your turn.";
  history = [];
  counter = 0;
}

function activePlayer() {
  if (player === "player1") {
    player = "player2";
  } else {
    player = "player1";
  }
  ap.textContent = player + ", you're up.";
}
//UI logic
const deck1 = new Deck();

let counter = 0;
let history = [];
let player = "player1";

let s = document.getElementById("shuffle-cards");
let dC = document.getElementById("draw-card");
let gO = document.getElementById("game-over");
let p = document.getElementById("pass");

let newS = document.getElementById("shuffled");
let newSC = document.getElementById("show-card");
let newSGO = document.getElementById("show-gameover");
let newSP = document.getElementById("show-pass");
let hist = document.getElementById("history");
let count = document.getElementById("show-count");
let error = document.getElementById("pass-error");
let ap = document.getElementById("show-player");

s.addEventListener("click", shuffleCards);
dC.addEventListener("click", drawCard);
gO.addEventListener("click", gameOver);
p.addEventListener("click", pass);

