'use strict';

// 이중 우선순위 큐
function solution(operations) {
  let answer = [];
  const queue1 = [];
  for (let i = 0; i < operations.length; i++) {
    const [cmd, num] = operations[i].split(` `);
    let deleteNumber = 0;
    switch (cmd) {
      case `I`:
        queue1.push(Number(num));
        break;
      case `D`:
        if (Number(num) > 0) deleteNumber = Math.max.apply(null, queue1) // 최댓값 삭제
        else deleteNumber = Math.min.apply(null, queue1) // 최솟값 삭제
        for (let j = 0; j < queue1.length; j++) {
          if (queue1[j] === deleteNumber) {
            queue1.splice(j, 1);
            break;
          }
        }
        break;
    }
  }

  if (queue1.length === 0) answer.push(0, 0);
  else answer.push(Math.max.apply(null, queue1), Math.min.apply(null, queue1))

  return answer;
}

const operations = [	["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"], 	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]];
console.log(solution(operations[0]));
console.log(solution(operations[1]));
