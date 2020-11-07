'use strict';

// Q7.
function solution(n, horizontal) {
  let answer = [];
  let x = 0;
  let y = 0;
  let time = 0;

  for (let i = 0; i < n; i++) {
    answer.push([])
    for (let j = 0; j < n; j++) {
      answer[i][j] = 0;
    }
  }

  let moveWeight = []
  for (let i = 1; i <= n; i++) {
    moveWeight.push(i);
  }
  for (let i = n-1; i > 0; i--) {
    moveWeight.push(i);
  }

  moveWeight.forEach((item, index) => {
    // console.log(item, index)
    for (let i = 0; i < item; i++) {
      if (horizontal) {
        if ((index + 1) % 2 == 1) {
          if ((x + 1 < n) && (y - 1 >= 0)) {
            x += 1
            y -= 1
            time += 2
          } else if (x + 1 < n) {
            x += 1
            time += 1
          } else if (y + 1 < n) {
            y += 1
            time += 1
          }
          answer[y][x] = time
        } else {
          if ((x - 1 >= 0) && (y + 1 < n)) {
            x -= 1
            y += 1
            time += 2
          } else if (y + 1 < n) {
            y += 1
            time += 1
          } else if (x + 1 < n) {
            x += 1
            time += 1
          }
          answer[y][x] = time
        }
      } else {
        if ((index + 1) % 2 == 1) {
          if ((x - 1 >= 0) && (y + 1 < n)) {
            x -= 1
            y += 1
            time += 2
          } else if (y + 1 < n) {
            y += 1
            time += 1
          } else if (x + 1 < n) {
            x += 1
            time += 1
          }
          answer[y][x] = time
        } else {
          if ((x + 1 < n) && (y - 1 >= 0)) {
            x += 1
            y -= 1
            time += 2
          } else if (x + 1 < n) {
            x += 1
            time += 1
          } else if (y + 1 < n) {
            y += 1
            time += 1
          }
          answer[y][x] = time
        }
      }
    }
  })

  return answer;
}


const n = [4, 5];
const horizontal = [true, false];
console.log(solution(n[0], horizontal[0]));
