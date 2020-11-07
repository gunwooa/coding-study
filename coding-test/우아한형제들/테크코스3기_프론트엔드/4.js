'use strict';

// Q4.
function solution(n, board) {
  let answer = 0;

  const boardSize = n*n;
  let nowX = 0;
  let nowY = 0;
  
  let rows = [];
  let cols = [];
  for (let i = 0; i <= boardSize; i++) {
    rows.push(i);
    cols.push(i);
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      rows[board[y][x]] = x;
      cols[board[y][x]] = y;
    }
  }

  for (let target = 1; target <= boardSize; target++) {
    const targetX = rows[target];
    const targetY = cols[target];

    const maxX = Math.max(targetX, nowX);
    const minX = Math.min(targetX, nowX);

    const maxY = Math.max(targetY, nowY);
    const minY = Math.min(targetY, nowY);

    answer += 1;
    answer += Math.min(minX + n - maxX, maxX - minX);
    answer += Math.min(minY + n - maxY, maxY - minY);

    nowX = targetX;
    nowY = targetY;
  }

  return answer;
}


const n = [3, 2, 4];
const board = [
  [
    [3, 5, 6],
    [9, 2, 7],
    [4, 1, 8]
  ],
  [
    [2, 3],
    [4, 1]
  ],
  [
    [11, 9, 8, 12],
    [2, 15, 4, 14],
    [1, 10, 16, 3],
    [13, 7, 5, 6]
  ]
]
console.log(solution(n[0], board[0]));
console.log(solution(n[1], board[1]));
console.log(solution(n[2], board[2]));