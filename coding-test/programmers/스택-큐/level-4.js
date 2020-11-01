'use strict';

function solution(priorities, location) {
  let answer = 0;

  let newPriorities = priorities.map((item, index) => {
    if (index === location) {
      return { importance: item, location: true };
    } else {
      return { importance: item, location: false };
    }
  });

  while (newPriorities.length > 0) {
    let outputTemp = newPriorities.shift();
    let isPrint = true;
    for(let i in newPriorities) {
      if (outputTemp.importance < newPriorities[i].importance) {
        isPrint = false;
        newPriorities.push(outputTemp);
        break;
      } 
    }

    // 인쇄될때
    if (isPrint) {
      answer++;
      if(outputTemp.location) {
        return answer;
      }
    }
  }
}


const priorities = [ [2, 1, 3, 2], [1, 1, 9, 1, 1, 1] ];
const location_ = [2, 0];
console.log(`결과 : ${solution(priorities[0], location_[0])}`);
console.log(`결과 : ${solution(priorities[1], location_[1])}`);