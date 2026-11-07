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
  selectedDay = null;
  startPuzzle(PUZZLES[Math.floor(Math.random() * PUZZLES.length)], shuffle([1, 2, 3, 4]));
}

// Every weekday has its own fixed puzzle, so Monday is always the same.
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weekdaysEl = document.getElementById('weekdays');
let selectedDay = null;

function pickDay(day) {
  selectedDay = day;
  const turn = day % 4;
  const digits = [1, 2, 3, 4].map((_, k) => ((k + turn) % 4) + 1);
  startPuzzle(PUZZLES[day % PUZZLES.length], digits);
}

function startPuzzle(puzzle, digits) {
  const swap = n => (n === 0 ? 0 : digits[n - 1]);
  givens = puzzle.givens.map(swap);
  solution = puzzle.solution.map(swap);
  grid = [...givens];
  render();
}

function isSolved() {
  return grid.every((value, i) => value === solution[i]);
}

function renderDays() {
  weekdaysEl.innerHTML = '';
  DAYS.forEach((name, day) => {
    const chip = document.createElement('button');
    chip.className = 'day';
    chip.textContent = name;
    chip.setAttribute('aria-pressed', day === selectedDay);
    chip.addEventListener('click', () => pickDay(day));
    weekdaysEl.appendChild(chip);
  });
}

function render() {
  renderDays();
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

// Dark mode button. Until it is tapped, the phone setting decides.
const themeBtn = document.getElementById('theme-toggle');
function isDark() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen) return chosen === 'dark';
  return matchMedia('(prefers-color-scheme: dark)').matches;
}
function showThemeIcon() {
  themeBtn.textContent = isDark() ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
}
themeBtn.addEventListener('click', () => {
  const theme = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch (e) {}
  showThemeIcon();
});
try {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;
} catch (e) {}
showThemeIcon();

// Start with today's puzzle (getDay() counts from Sunday).
pickDay((new Date().getDay() + 6) % 7);
