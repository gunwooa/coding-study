'use strict';

// 내가 푼거(망함)
// function solution(bridge_length, weight, truck_weights) {
  
//   let answer = 0; // 경과 시간
//   const arrivingTruck = []; // 다리를 지난 트럭
//   const crossingTruck = []; // 다리를 건너는 트럭
//   let cumulativeWeight = 0; // 트럭 누적 무게
//   const finishLength = truck_weights.length;
//   while (true) {

//     if (truck_weights.length !== 0) {
//       let startTruck = truck_weights.shift();
//       cumulativeWeight += startTruck;
      
//       if (cumulativeWeight < weight) { // 트럭의 누적 무개를 다리가 버티면..
//         crossingTruck.push({ weight: startTruck, moveCnt: 0 });
//       } else {
//         cumulativeWeight -= startTruck;
//         truck_weights.unshift(startTruck);
//       }
//     }    

//     for (let i in crossingTruck) {
//       answer++; 
//       crossingTruck[i].moveCnt++;
//       if (crossingTruck[i].moveCnt === bridge_length) {

//         let finishTruck = crossingTruck[i];
//         cumulativeWeight -= finishTruck.weight;
//         arrivingTruck.push(finishTruck);
//       }
//     }

//     let crossingLength = crossingTruck.length;
//     let idx = 0;
//     while (true) {
//       if (crossingLength <= 0) break;

//       if(crossingTruck[idx].moveCnt === bridge_length) {
//         crossingTruck.shift();
//       } else {
//         idx++;
//       }
//       crossingLength--;
//     }

//     // while 탈출 조건
//     if (arrivingTruck.length === finishLength) {
//       break;
//     }

//   }

//   return answer;
// }


// 풀이
// function solution(bridge_length, weight, truck_weights) {
//   let answer = 0;
//   let totalTruckWeight = 0;
//   let bridgeQueue = []; // 트럭의 이동거리에 대한 큐
//   let weightQueue = []; // 트럭의 무개에대한 큐?
  
//   do {

//     for (let i in bridgeQueue) { // 다리 위의 트럭에 대해서
//       bridgeQueue[i]--; // 1씩 이동시킴
//     }
//     if (bridgeQueue[0] === 0) { // 다리 끝에 트럭이 도착하면
//       totalTruckWeight -= weightQueue.shift(); // 다리 위 트럭 누적 무개 업데이트
//       bridgeQueue.shift(); // 도착한(맨앞) 트럭을 제거
//     }

//     if ((totalTruckWeight + truck_weights[0]) <= weight) { // 다리 위 트럭 누적 무개에 다리를 건너려는 트럭 무개 합이 다리가 지탱 가능 무개보다 작거나 같으면
//       weightQueue.push(truck_weights[0]); // 다리 건너게함
//       bridgeQueue.push(bridge_length); // 다리 건너게함
//       totalTruckWeight += truck_weights.shift(); // 다리 위 트럭 누적 무개 업데이트
//     }

//     answer++; // 시간 증가

//   } while (bridgeQueue.length > 0) // 다리를 건너는 트럭이 없으면 탈출

//   return answer;
// }


// 다시 안보고 풀기
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let totalTruckWeight = 0;
  let bridgeMoveTrucks = [];
  let bridgeWeightTrucks = [];

  do {
    for (let i in bridgeMoveTrucks) {
      bridgeMoveTrucks[i]--;
    }

    if (bridgeMoveTrucks[0] === 0) {
      bridgeMoveTrucks.shift();
      totalTruckWeight -= bridgeWeightTrucks.shift();
    }

    if ( (totalTruckWeight + truck_weights[0]) <= weight ) {
      bridgeWeightTrucks.push(truck_weights[0]);
      bridgeMoveTrucks.push(bridge_length);
      totalTruckWeight += truck_weights.shift();
    }

    answer++;

  } while (bridgeWeightTrucks.length > 0)

  return answer;
}




const bridge_length = [2, 100, 100];
const weight = [10, 100, 100];
const truck_weights = [ [7, 4, 5, 6], [10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10] ];
console.log(`결과: ${solution(bridge_length[0], weight[0], truck_weights[0])}`);
console.log(`결과: ${solution(bridge_length[1], weight[1], truck_weights[1])}`);
console.log(`결과: ${solution(bridge_length[2], weight[2], truck_weights[2])}`);
