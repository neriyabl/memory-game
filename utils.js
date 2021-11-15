function randRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
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
