function solution(progresses, speeds) {

  var answer = [];
  let maxDay = 0;
  progresses.forEach((item, index) => {

    item += speeds[index];
    let dDay = 1
    while (item < 100) {
      item += speeds[index];
        dDay++;
    }
    
    if (index === 0) {
      answer.push(1);
      maxDay = dDay;
    } else {

      if (maxDay < dDay) {
        answer.push(1);
        maxDay = dDay;
      } else {
        answer[answer.length-1] += 1;
      }
    }
      
  })
  
  return answer;
}

const progresses1 = [93, 30, 55];
const speeds1 = [1, 30, 5];

const answer1 = solution(progresses1, speeds1);
console.log(answer1);


const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds2 = [1, 1, 1, 1, 1, 1];

const answer2 = solution(progresses2, speeds2);
console.log(answer2);