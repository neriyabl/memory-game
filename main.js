let selectedCards = [];

function checkEqual(cardIdA, cardIdB) {
  return cardIdA !== cardIdB && getCard(cardIdA).name === getCard(cardIdB).name;
}

function hide(card) {
  setTimeout(() => {
    card.className += " hide";
    card.innerHTML = "";
  }, 500);
}

function remove(card) {
  setTimeout(() => {
    card.className = "removed";
    card.onclick = null;
    card.innerHTML = "";
  }, 500);
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
  selectedCards.push(cardEl);
  cardEl.innerHTML = card.name;
  cardEl.className = "card";
  if (selectedCards.length < 2) {
    return;
  }

  selectedCards.map(
    checkEqual(selectedCards[0].id, selectedCards[1].id) ? remove : hide
  );
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
