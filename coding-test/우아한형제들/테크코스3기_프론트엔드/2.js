'use strict';

// Q2.
function solution(s, op) {
  let answer = [];
  for (let i = 1; i < s.length; i++) {
    const leftStrToNum = Number(s.slice(0, i));
    const rightStrToNum = Number(s.slice(i));
    let result = 0;
    switch (op) {
      case `+`: result = leftStrToNum + rightStrToNum; break;
      case `-`: result = leftStrToNum - rightStrToNum; break;
      case `*`: result = leftStrToNum * rightStrToNum; break;
    }
    answer.push(result);
  }
  return answer;
}


const s = [`1234`, `987987`, `31402`];
const op = [`+`, `-`, `*`];
console.log(solution(s[0], op[0]));
console.log(solution(s[1], op[1]));
console.log(solution(s[2], op[2]));
