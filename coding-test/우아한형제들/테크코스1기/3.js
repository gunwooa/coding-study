'use strict';

// Q3.
function sol3(word) {
  let res = ``;
  const hashmap = { 
    A: `Z`, B: `Y`, C: `X`, D: `W`, E: `V`, F: `U`, G: `T`, H: `S`, I: `R`, J: `Q`,
    K: `P`, L: `O`, M: `N`, N: `M`, O: `L`, P: `K`, Q: `J`, R: `I`, S: `H`, T: `G`,
    U: `F`, V: `E`, W: `D`, X: `C`, Y: `B`, Z: `A`
  }
  for (let c of word) {
    if (c !== c.toUpperCase()) res += hashmap[c.toUpperCase()].toLowerCase(); // 소문자면..
    else if (c === ` `) res += c; // 공백이면..
    else res += hashmap[c]; // 대문자면..
  }
  return res;
}
const word = [ `I love you`, `Fuck You GGG` ];
for (let i in word) {
  console.log(sol3(word[i]));
}