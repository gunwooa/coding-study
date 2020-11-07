'use strict';

// Q5.
function solution(penter, pexit, pescape, data) {
  let answer = ``;

  answer += penter;

  const packetLength = penter.length;
  let tempSaveData = ``
  let cnt = 0;
  for (let i = 0; i < data.length; i++) {
    cnt++;
    tempSaveData += data[i];
    if (cnt === packetLength) {
      switch (tempSaveData) {
        case penter: answer += pescape; break;
        case pexit: answer += pescape; break;
        case pescape: answer += pescape; break;
      }
      answer += tempSaveData;

      tempSaveData = ``;
      cnt = 0;
    }
  }
  answer += pexit

  return answer;
}


const penter = ["1100", "10"];
const pexit = ["0010", "11"];
const pescape = ["1001", "00"];
const data = ["1101100100101111001111000000", "00011011"];
console.log(solution(penter[0], pexit[0], pescape[0], data[0]));
console.log(solution(penter[1], pexit[1], pescape[1], data[1]));

// 10 00 00 01 00 10 00 11 11