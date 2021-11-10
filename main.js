let selectedCards = [];

function checkEqual(cardA, cardB) {
  return cardA !== cardB && cardA.name === cardB.name;
}

function flipCard({ target: cardEl }) {
  if (selectedCards.length >= 2) {
    selectedCards = [];
    return;
  }

  if (selectedCards[0] && selectedCards[0].id === cardEl.id) {
    console.log("click on the same card");
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
  const board = document.getElementById("board");
  for (let card of cards) {
    const cardEl = createCardElement(card);
    board.appendChild(cardEl);
  }
}

init();
