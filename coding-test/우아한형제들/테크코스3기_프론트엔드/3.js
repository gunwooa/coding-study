'use strict';

// Q3.
function solution(money, expected, actual) {

  let betAmount = 100;
  for (let i = 0; i < expected.length; i++) {
    if (money <= 0) break; // 모든 돈을 잃으면 즉시 중단

    if (expected[i] === actual[i]) { // 승
      money += betAmount;
      betAmount = 100;
    } else { // 패
      money -= betAmount;
      betAmount = betAmount * 2;
      if (betAmount > money) betAmount = money; // 배팅금액이 부족하면 전제산 배팅
    }
  }

  return money;
}



const money = [1000, 1200, 1500];
const expected = [
  ['H', 'T', 'H', 'T', 'H', 'T', 'H'],
  ['T', 'T', 'H', 'H', 'H'],
  ['H', 'H', 'H', 'T', 'H']
];
const actual = [
  ['T', 'T', 'H', 'H', 'T', 'T', 'H'],
  ['H', 'H', 'T', 'H', 'T'],
  ['T', 'T', 'T', 'H', 'T']
]
console.log(solution(money[0], expected[0], actual[0]));
console.log(solution(money[1], expected[1], actual[1]));
console.log(solution(money[2], expected[2], actual[2]));