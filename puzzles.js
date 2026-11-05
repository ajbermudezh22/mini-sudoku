// Puzzles: 0 means an empty square. Each one has exactly one solution.
// The game shuffles the digits 1–4, so every new puzzle looks different.
const PUZZLES = [
  {
    givens:   [1,0,0,0, 0,3,0,4, 0,1,3,0, 0,0,0,0],
    solution: [1,4,2,3, 2,3,1,4, 4,1,3,2, 3,2,4,1]
  },
  {
    givens:   [0,0,0,1, 0,0,3,0, 4,0,0,0, 2,1,0,0],
    solution: [3,4,2,1, 1,2,3,4, 4,3,1,2, 2,1,4,3]
  },
  {
    givens:   [0,0,0,3, 4,0,1,0, 0,0,0,0, 0,1,3,0],
    solution: [1,2,4,3, 4,3,1,2, 3,4,2,1, 2,1,3,4]
  }
];
