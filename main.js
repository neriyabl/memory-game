const cards = [
  { name: "blue", active: true },
  { name: "green", active: true },
  { name: "yellow", active: true },
  { name: "red", active: true },
  { name: "green", active: true },
  { name: "black", active: true },
  { name: "white", active: true },
  { name: "purple", active: true },
  { name: "blue", active: true },
  { name: "green", active: true },
  { name: "yellow", active: true },
  { name: "red", active: true },
  { name: "green", active: true },
  { name: "black", active: true },
  { name: "white", active: true },
  { name: "purple", active: true },
];

function rand_range(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = rand_range(0, arr.length);
    let a2 = rand_range(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

function check_equal(i, j) {
  return i !== j && cards[i].name === cards[j].name;
}

function gameOver() {
  for (let i of cards) {
    if (i.active) {
      return false;
    }
  }
  return true;
}

function main() {
  shuffle(cards);
  while (!gameOver()) {
    const i = +prompt("insert first index");
    const j = +prompt("insert second index");
    if (check_equal(i, j)) {
      cards[i].active = false;
      cards[j].active = false;
      console.log("correct");
    } else {
      alert(`you get ${i}=${cards[i].name}, ${j}=${cards[j].name}`);
    }
  }
  alert("you done .....");
}

main();
