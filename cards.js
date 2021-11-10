const cards = [
  { id: "0", name: "blue" },
  { id: "1", name: "green" },
  { id: "2", name: "yellow" },
  { id: "3", name: "red" },
  { id: "4", name: "grey" },
  { id: "5", name: "black" },
  { id: "6", name: "white" },
  { id: "7", name: "purple" },
  { id: "8", name: "brown" },
  { id: "9", name: "blue" },
  { id: "10", name: "green" },
  { id: "11", name: "yellow" },
  { id: "12", name: "red" },
  { id: "13", name: "grey" },
  { id: "14", name: "black" },
  { id: "15", name: "white" },
  { id: "16", name: "purple" },
  { id: "17", name: "brown" },
];

function getCard(id) {
  return cards.find((card) => card.id === id);
}
