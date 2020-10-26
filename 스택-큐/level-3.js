function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  
  const arrivingTruck = [];
  const crossingTruck = [];
  let cumulativeWeight = 0;

  // 트럭 출발

  
  truck_weights.forEach((item, index) => {
    console.log(`index: ${index}`);

    cumulativeWeight += item;
    if (cumulativeWeight < weight) {
      crossingTruck.push({ weight: item, time: 0 });
    } 


    
  });



  
  return answer;
}



const bridge_length = [2, 100, 100];
const weight = [10, 100, 100];
const truck_weights = [ [7, 4, 5, 6], [10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10] ];

console.log(`결과: ${solution(bridge_length[0], weight[0], truck_weights[0])}`);
