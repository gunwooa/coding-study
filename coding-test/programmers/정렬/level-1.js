'use strict';

// K번째수
// 내 풀이
function mySolution(array, commands) {
  let answer = [];
  const commandsLength = commands.length;
  for (let i = 0; i < commandsLength; i++) {
    const begin = commands[i][0]-1;
    const end = commands[i][1];
    const index = commands[i][2]-1;

    const sliceArray = array.slice(begin, end).sort((a, b) => a - b);
    answer.push(sliceArray[index]);
  }
  return answer;
}

// 다른 사람 풀이
function solution1(array, commands) {
  return commands.map((command) => {
    const [begin, end, index] = command;
    const newArray = array
                  .filter((fItem, fIndex) => fIndex >= begin-1 && fIndex < end)
                  .sort((a, b) => a-b);
    return newArray[index-1];
  })
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution1(array, commands));
