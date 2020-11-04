'use strict';

// Q7. 맞추긴 했는데 재귀 이해 다 못함
function sol7(str) {
  let isSameChar = false;
  let result = ``;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1]) {
      result += str[i];
    } else {
      isSameChar = true;

      let jumpIndex = i;
      while (true) {
        if (str[i] !== str[jumpIndex+1]){
          i = jumpIndex;
          break;
        }
        jumpIndex++;
      }
    }
  }

  if (!isSameChar) return result;
  return sol7(result);
}

let str = [`browoanoommnaon`, `zyelleyz`];
for (let i in str) {
  console.log(`답: ${sol7(str[i])}`);
}