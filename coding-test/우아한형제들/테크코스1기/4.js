'use strict';

// Q4.
function sol4(pobi, crong) {
  let res = -1;
  const errorCheck = (page) => {
    const minPage = 1;
    const maxPage = 400;
    for (let i in page) {
      if ((page[i] === minPage) || (page[i] === maxPage)) return false;
      else if ((page[1] - page[0]) > 1) return false;
    }
    return true;
  };
  const maxValueOutput = (page) => {
    const num = [];
    for (let i = 0; i < page.length; i++) {
      let sum = 0;
      let gob = 0;
      const pageNtoS = String(page[i]);
      for (let j = 0; j < pageNtoS.length; j++) {
        const pageStoN = Number(pageNtoS[j]);
        if (j === 0) {
          sum = pageStoN;
          gob = pageStoN;
        } else {
          sum += pageStoN;
          gob *= pageStoN;
        }
      }
      num.push(sum);
      num.push(gob);
    }
    return Math.max.apply(null, num);
  };

  if ((!errorCheck(pobi)) || (!errorCheck(crong))) return res;
  const maxPobi = maxValueOutput(pobi);
  const maxCrong = maxValueOutput(crong);
  if (maxPobi > maxCrong) res = 1;
  else if(maxPobi < maxCrong) res = 2;
  else res = 0;

  return res;
}
const pobi = [[97, 98], [131, 132], [99, 102]];
const crong = [[197, 198], [211, 212], [211, 212]];
for (let i in pobi) {
  console.log(`답: ${sol4(pobi[i], crong[i])}`);
}