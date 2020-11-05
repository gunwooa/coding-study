'use strict';

// 데모 문제.
function solution(v) {
  let answer = [];
  const cnt = 2;
  for (let i = 0; i < cnt; i++) {
    if (v[0][i] === v[1][i]) answer[i] = v[2][i]
    else if (v[0][i] === v[2][i]) answer[i] = v[1][i]
    else if (v[1][i] === v[2][i]) answer[i] = v[0][i]
  }
  return answer;
}

// const v = [ [1, 4], [3, 4], [3, 10] ];
const v = [ [1, 1], [2, 2], [1, 2] ];

console.log(solution(v));
