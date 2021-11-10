const cards = [
  "blue",
  "green",
  "yellow",
  "red",
  "green",
  "black",
  "white",
  "purple",
  "blue",
  "green",
  "yellow",
  "red",
  "green",
  "black",
  "white",
  "purple",
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

function main() {
  shuffle(cards);
  console.log(cards);
}

main();
