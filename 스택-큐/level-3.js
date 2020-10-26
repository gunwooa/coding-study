'use strict';

function solution(bridge_length, weight, truck_weights) { // 2 10 [7,4,5,6]
  
  let answer = 0; // 경과 시간
  const arrivingTruck = []; // 다리를 지난 트럭
  const crossingTruck = []; // 다리를 건너는 트럭
  let cumulativeWeight = 0; // 트럭 누적 무게
  const finishLength = truck_weights.length;
  while (true) {

    if (truck_weights.length !== 0) {
      let startTruck = truck_weights.shift();
      cumulativeWeight += startTruck;
      
      if (cumulativeWeight < weight) { // 트럭의 누적 무개를 다리가 버티면..
        crossingTruck.push({ weight: startTruck, moveCnt: 0 });
      } else {
        cumulativeWeight -= startTruck;
        truck_weights.unshift(startTruck);
      }
    }

    console.log(crossingTruck);
    
    // let num = 0;
    for (let i in crossingTruck) {
      answer++; 
      crossingTruck[i].moveCnt++; 
      if (crossingTruck[i].moveCnt === bridge_length) {
        // num++;
        let finishTruck = crossingTruck.shift();
        cumulativeWeight -= finishTruck.weight;
        arrivingTruck.push(finishTruck);
      }
    }

    // for (let i = 0; i < num; i++) {
    //   crossingTruck.shift();
    // }


    

    // while 탈출 조건
    if (arrivingTruck.length === finishLength) {
      break;
    }

  }
  console.log(truck_weights);
  console.log(crossingTruck);
  console.log(arrivingTruck);
  return answer;
}



const bridge_length = [2, 100, 100];
const weight = [10, 100, 100];
const truck_weights = [ [7, 4, 5, 6], [10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10] ];

console.log(`결과: ${solution(bridge_length[0], weight[0], truck_weights[0])}`);
console.log(`결과: ${solution(bridge_length[1], weight[1], truck_weights[1])}`);
// console.log(`결과: ${solution(bridge_length[2], weight[2], truck_weights[2])}`);


// const arr = [7, 4, 5, 6];
// const getArr = [];
// for (let i in arr) {
//   console.log(i);
//   arr.shift();
// }

// console.log(arr)
// console.log(getArr)