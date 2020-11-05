'use strict';

// 가장 큰 수
// 내 풀이
function mySolution(numbers) {
  let answer = ``;

  const newArray = [];
  const originNumericString = numbers.join('');
  newArray.push(originNumericString);
  const numberLength = numbers.length;
  let flag = false;
  while (true) {
    for (let i = 0; i < numberLength-1; i++) {

      const deleteNumber = numbers.splice(i, 1);
      numbers.splice(i+1, 0, deleteNumber[0]);
      const numericString = numbers.join(``);

      if (originNumericString === numericString) {
        flag = true;
        break;
      }

      newArray.push(numericString);
    }
    if (flag) break;
  }

  console.log(newArray)

  answer = String(Math.max.apply(null, newArray));


  return answer;
}

const numbers = [[6, 10, 2], [0, 1, 2, 3]];
// console.log(mySolution(numbers[0]));
console.log(mySolution(numbers[1]));
