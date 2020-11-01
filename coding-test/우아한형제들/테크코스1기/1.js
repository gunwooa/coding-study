'use strict';

// Q1.
function sol1(money) {
  let res = [];
  const t = [ 50000, 10000, 5000, 1000, 500, 100, 50, 10, 1 ]
  for (let o of t) {
    let temp = 0;
    let m = money % o;
    if (m !== money) {
      temp = (money - m) / o;
      money = m;
    } 
    res.push(temp);
  }
  return res;
}

const money = [ 50237, 15000 ];
for (let i in money) {
  console.log(sol1(money[i]));
}