'use strict';

// Q6.
function solution(logs) {
  let answer = [];

  const logsLength = logs.length;
  let myMap = new Map();
  for (let i = 0; i < logsLength; i++) {
    const [studentCode, problemNumber, score] = logs[i].split(' ');
    if (myMap.has(studentCode)) {
      myMap.get(studentCode).set(problemNumber, score);
    } else {
      let tempMap = new Map();
      tempMap.set(problemNumber, score);
      myMap.set(studentCode, tempMap);
    }
  }

  let arr = []
  for (let [key, value] of myMap) {
    arr.push(key)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let studentA = myMap.get(arr[i]);
      let studentB = myMap.get(arr[j]);

      let flag = false;
      if ((studentA.size === studentB.size) && (studentA.size >= 5)) {

        let aArr = [];
        for (let [aKey, aValue] of studentA) {

          if (!(studentB.has(aKey) && studentA.get(aKey) === studentB.get(aKey))) {
            flag = true
            // console.log(studentA.get(aKey))
            // console.log(studentB.get(aKey))
          }

          aArr.push(aKey);
          // console.log(aKey)
  
        }

        if (!flag) {
          if (!answer.includes(arr[i])) answer.push(arr[i]);
          if (!answer.includes(arr[j])) answer.push(arr[j]);
        } 
      }

      
      // console.log(studentA.size, studentB.size)
    }
  }

  if (answer.length === 0) {
    answer.push(`None`)
  }

  return answer;
}


const logs = [
  ["0001 3 95", "0001 5 90", "0001 5 100", "0002 3 95", "0001 7 80", "0001 8 80", "0001 10 90", "0002 10 90", "0002 7 80", "0002 8 80", "0002 5 100", "0003 99 90"],
  ["1901 1 100", "1901 2 100", "1901 4 100", "1901 7 100", "1901 8 100", "1902 2 100", "1902 1 100", "1902 7 100", "1902 4 100", "1902 8 100", "1903 8 100", "1903 7 100", "1903 4 100", "1903 2 100", "1903 1 100", "2001 1 100", "2001 2 100", "2001 4 100", "2001 7 95", "2001 9 100", "2002 1 95", "2002 2 100", "2002 4 100", "2002 7 100", "2002 9 100"],
  ["1901 10 50", "1909 10 50"]
]
console.log(solution(logs[0]));
console.log(solution(logs[1]));
console.log(solution(logs[2]));
