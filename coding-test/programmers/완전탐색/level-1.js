'use strict';

// 모의고사
function solution(answers) {
  let answer = [];
  const giveUpMath = [
    { name: 1, answerCycle: [1, 2, 3, 4, 5], score: 0 },
    { name: 2, answerCycle: [2, 1, 2, 3, 2, 4, 2, 5], score: 0 },
    { name: 3, answerCycle: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], score: 0 },
  ]
  
  // 채점
  for (let i = 0; i < giveUpMath.length; i++) {
    let cycleIndex = 0;
    for (let j = 0; j < answers.length; j++) {
      if (giveUpMath[i].answerCycle[cycleIndex] === answers[j]) {
        giveUpMath[i].score ++;
      }
      cycleIndex++;
      if (cycleIndex === giveUpMath[i].answerCycle.length) cycleIndex = 0;
    }
  }

  // score 정렬(내림차순)
  giveUpMath.sort((a, b) => b.score - a.score);

  // 동점자 존재 여부 체크
  let isSameScore = false
  let index = giveUpMath.length-1;
  while (index > 0) {
    if (giveUpMath[0].score !== giveUpMath[index].score) giveUpMath.pop(); // 동점자 아니면 제거
    else isSameScore = true
    index--;
  }

  // 마무리
  if (isSameScore) { // 동점자 있으면
    giveUpMath.sort((a, b) => a.name - b.name); // name 정렬(오름차순)
    answer = giveUpMath.map((item) => item.name);
  } else {
    answer.push(giveUpMath[0].name);
  }

  return answer;
}

const answers = [[1,2,3,4,5,1,1,1,1,1,1], [1,3,2,4,2], [2, 1, 2, 3, 2]];
console.log(solution(answers[0]));
console.log(solution(answers[1]));
console.log(solution(answers[2]));