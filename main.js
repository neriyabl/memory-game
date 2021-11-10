const cards = [
  { id: "0", name: "blue", active: true },
  { id: "1", name: "green", active: true },
  { id: "2", name: "yellow", active: true },
  { id: "3", name: "red", active: true },
  { id: "4", name: "grey", active: true },
  { id: "5", name: "black", active: true },
  { id: "6", name: "white", active: true },
  { id: "7", name: "purple", active: true },
  { id: "8", name: "brown", active: true },
  { id: "9", name: "blue", active: true },
  { id: "10", name: "green", active: true },
  { id: "11", name: "yellow", active: true },
  { id: "12", name: "red", active: true },
  { id: "13", name: "grey", active: true },
  { id: "14", name: "black", active: true },
  { id: "15", name: "white", active: true },
  { id: "16", name: "purple", active: true },
  { id: "17", name: "brown", active: true },
];

let selectedCards = [];

function getCard(id) {
  return cards.find((card) => card.id === id);
}

function randRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = randRange(0, arr.length);
    let a2 = randRange(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

function checkEqual(cardA, cardB) {
  return cardA !== cardB && cardA.name === cardB.name;
}

function gameOver() {
  for (let i of cards) {
    if (i.active) {
      return false;
    }
  }
  return true;
}

function flipCard({ target: cardEl }) {
  if (selectedCards.length >= 2) {
    selectedCards = [];
    return;
  }

  if (selectedCards[0] && selectedCards[0].id === cardEl.id) {
    return;
  }

  let card = getCard(cardEl.id);
  selectedCards.push(card);
  cardEl.innerHTML = card.name;
  cardEl.className = "card";
  if (selectedCards.length < 2) {
    return;
  }

  const selectedCardsEl = selectedCards.map((card) =>
    document.getElementById(card.id)
  );

  if (!checkEqual(selectedCards[0], selectedCards[1])) {
    for (let card of selectedCardsEl) {
      setTimeout(() => {
        card.className += " hide";
        card.innerHTML = "";
      }, 500);
    }
  } else {
    for (let card of selectedCardsEl) {
      setTimeout(() => {
        card.className = "removed";
        card.onclick = null;
        card.innerHTML = "";
      }, 500);
    }
  }
  selectedCards = [];
}

function createCardElement(card) {
  const el = document.createElement("div");
  el.id = card.id;
  el.className = "card hide";
  el.onclick = flipCard;
  return el;
}

function init() {
  shuffle(cards);
  for (let card of cards) {
    const cardEl = createCardElement(card);
    board.appendChild(cardEl);
  }
}

function main() {
  init();
}

const board = document.getElementById("board");
main();
