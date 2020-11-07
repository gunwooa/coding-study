'use strict';

// Q1.
function solution(grades, weights, threshold) {
  let answer = 0;

  let totalScore = 0;
  for (let i = 0; i < grades.length; i++) {
    let scoreWeight = null;
    switch (grades[i]) {
      case `A+`: scoreWeight = 10; break;
      case `A0`: scoreWeight = 9; break;
      case `B+`: scoreWeight = 8; break;
      case `B0`: scoreWeight = 7; break;
      case `C+`: scoreWeight = 6; break;
      case `C0`: scoreWeight = 5; break;
      case `D+`: scoreWeight = 4; break;
      case `D0`: scoreWeight = 3; break;
      case `F`: scoreWeight = 0; break;
    }
    totalScore += (weights[i] * scoreWeight);
  }

  answer = totalScore - threshold;
  return answer;
}


const grades = [["A+","D+","F","C0"], ["B+","A0","C+"]];
const weights = [[2,5,10,3], [6,7,8]];
const threshold = [50, 200];
console.log(solution(grades[0], weights[0], threshold[0]));
console.log(solution(grades[1], weights[1], threshold[1]));