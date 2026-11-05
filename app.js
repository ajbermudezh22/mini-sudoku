// Mini Sudoku: a 4x4 sudoku you can solve in a minute.
const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');

let givens = [];
let solution = [];
let grid = [];

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function newPuzzle() {
  const puzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
  const digits = shuffle([1, 2, 3, 4]);
  const swap = n => (n === 0 ? 0 : digits[n - 1]);
  givens = puzzle.givens.map(swap);
  solution = puzzle.solution.map(swap);
  grid = [...givens];
  render();
}

function isSolved() {
  return grid.every((value, i) => value === solution[i]);
}

function render() {
  boardEl.innerHTML = '';
  grid.forEach((value, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const square = document.createElement('button');
    square.className = 'square';
    if (givens[i]) square.classList.add('given');
    if (col === 1) square.classList.add('box-right');
    if (row === 1) square.classList.add('box-bottom');
    square.textContent = value || '';
    square.setAttribute('aria-label', `Row ${row + 1}, column ${col + 1}: ${value || 'empty'}`);
    if (!givens[i]) square.addEventListener('click', () => tap(i));
    boardEl.appendChild(square);
  });

  if (isSolved()) {
    statusEl.textContent = 'Solved! 🎉';
    statusEl.classList.add('solved');
  } else {
    const left = grid.filter(v => v === 0).length;
    statusEl.textContent = `${left} squares left`;
    statusEl.classList.remove('solved');
  }
}

// Each tap goes 1 → 2 → 3 → 4 → empty.
function tap(i) {
  if (isSolved()) return;
  grid[i] = grid[i] === 4 ? 0 : grid[i] + 1;
  render();
}

document.getElementById('new-game').addEventListener('click', newPuzzle);
document.getElementById('clear').addEventListener('click', () => {
  grid = [...givens];
  render();
});

newPuzzle();
