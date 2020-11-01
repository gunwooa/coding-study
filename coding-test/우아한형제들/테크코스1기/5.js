'use strict';

// Q5. 369 게임
function sol5(number) {
  let res = 0;

  for (let i = 1; i <= number; i++) {
    const numberNtoS = String(i);
    for (let j = 0; j < numberNtoS.length; j++) {
      let num = numberNtoS[j];
      if ((num === `3`) || (num === `6`) || (num === `9`)) {
        // console.log(numberNtoS);
        res++;
      }
    }
  }

  return res;
}

const number = [13, 33];
for (let i in number) {
  console.log(sol5(number[i]));
}