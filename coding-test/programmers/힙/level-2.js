'use strict';

// 디스크 컨트롤러 (모르겠음)
function solution(jobs) {
  let answer = 0;

  const sortJob = jobs.map((job) => {
    return { reqTime: job[0], processingTime: job[1], sortTime: job[1] + job[0] }
  })

  console.log(sortJob)

  sortJob.sort((a, b) => a.sortTime - b.sortTime);

  let totalSum = 0
  const sumJob = sortJob.map((job) => {
    totalSum += job.processingTime;
    return totalSum - job.reqTime
  })

  console.log(sumJob)

  answer = sumJob.reduce((acc, cur) => acc + cur);

  return Math.floor(answer / jobs.length);
}

const jobs = [[0, 11], [1, 9], [2, 6]];
console.log(solution(jobs));
