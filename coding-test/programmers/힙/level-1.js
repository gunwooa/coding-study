'use strict';

// 더 맵게
function solution(scoville, k) {
  let answer = 0;
  scoville.sort((a, b) => a - b);

  while (true) {
    answer++;

    const mixScoville = scoville[0] + (scoville[1] * 2);
    scoville.splice(0, 2, mixScoville);
    scoville.sort((a, b) => a - b);

    console.log(scoville)

    const isSuccess = scoville.every(item => item >= k) // 모두 참일 때만 true
    if (isSuccess) {
      break;
    } else if (scoville.length === 1 && !isSuccess) {
      answer = -1;
      break;
    }
  }

  return answer;
}

const scoville = [1, 2, 3, 9, 10, 12, 1, 1];
const k = 7;
console.log(solution(scoville, k));


