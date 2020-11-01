'use strict';

// Q7. 맞추긴 했는데 재귀 이해 다 못함
function sol7(str) {
  let flag = false;
  let flagCnt = 0;
  let sum = ``;
  for (let i = 0; i < str.length; i++) {
    if (flag) {
      flag = false;
    } else {
      if (str[i] !== str[i+1]) {
        sum += str[i];
      } else {
        flag = true;
        flagCnt++;
      }
    }
  }

  if (flagCnt === 0) return sum;
  return sol7(sum);
}

let str = [`browoanoommnaon`, `zyelleyz`];
for (let i in str) {
  console.log(`답: ${sol7(str[i])}`);
}