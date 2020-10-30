'use strict';

// 위장
function solution(clothes) {
  let answer = 1;
  const hashObj = {};

  for (let item of clothes) {
    // || 연산자는 첫 번째 true 값을 찾으면 그 값으로 할당함
    // hashObj[item[1]] = (hashObj[item[1]] || 0) + 1;

    if (hashObj[item[1]] === undefined) {
      hashObj[item[1]] = [item[0]];
    } else {
      hashObj[item[1]].push(item[0]);
    }
  }

  for(var key in hashObj){
    answer *= hashObj[key].length + 1;
  }

  return answer-1;
}

const clothes1 = [[`yellow_hat`, `headgear`], [`blue_sunglasses`, `eyewear`], [`green_turban`, `headgear`]];
const clothes2 = [[`crow_mask`, `face`], [`blue_sunglasses`, `face`], [`smoky_makeup`, `face`]];
console.log(solution(clothes1));
console.log(solution(clothes2));


// console.log(4 && 1);