const gameBoard = document.getElementById("gameBoard");
const restartBtn = document.getElementById("restartBtn");

// Card symbols (pairs)
// const cardSymbols = ["🍎", "🍌", "🍇", "🍒", "🍉", "🥝", "🍍", "🍓"];
const cardSymbols = ["A♠","K♠", "A♥", "J♥", "K♥", "A♦", "A♣", "K♣"];
let cards = [];
let flippedCards = [];
let lockBoard = false;
/*addcegygeyegye
efygeded
dyedye*/
/* Shuffle Function (Fisher-Yates) */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* Create Game */
function createGame() {
  gameBoard.innerHTML = "";
  flippedCards = [];
  lockBoard = false;

  // Duplicate and shuffle cards
  cards = shuffle([...cardSymbols, ...cardSymbols]);

  cards.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">${symbol}</div>
      </div>
    `;

    card.addEventListener("click", () => flipCard(card, symbol));
    gameBoard.appendChild(card);
  });
}

/* Flip Card */
function flipCard(card, symbol) {
  console.log("flipcard 1");

  if (lockBoard || card.classList.contains("flip")) return;
  console.log("flipcard 2");

  card.classList.add("flip");
  flippedCards.push({ card, symbol });

  if (flippedCards.length === 2) {
    checkMatch();
    console.log("flipcard 3");
  }
}

/* Check for Match */
function checkMatch() {
  const [first, second] = flippedCards;

  if (first.symbol === second.symbol) {
    console.log("flipcard 4");

    flippedCards = [];
  } else {
    console.log("flipcard 5");

    lockBoard = true;
    setTimeout(() => {
      first.card.classList.remove("flip");
      second.card.classList.remove("flip");
      flippedCards = [];
      lockBoard = false;
    }, 1000);
  }
}

/* Restart Game */
restartBtn.addEventListener("click", createGame);

// Initialize game
createGame();
