// forloop3.js
let score1 = 90;
let sum = 0;

let numAry = [10, 20, 30, 40]; //배열생성. 0 ~ 5 번까지 배열
numAry[4] = 50;
numAry[5] = 60;
numAry[6] = 70;
numAry[7] = 80;
console.log(numAry.length);

// 6번째 위치값(60)을 7번째로 이동.
// 7번째 위치값(70)을 6번째로 이동.

// (1)
// let pos = 1;
// let temp = numAry[6]; // [6]이 [5]로 바뀌기 전에 => temp에 numAry[6]을 저장해놓는다
// numAry[6] = numAry[5];
// numAry[5] = temp;

// (2)
let pos = 1;
let temp = numAry[pos + 1]; // [6]이 [5]로 바뀌기 전에 => temp에 numAry[6]을 저장해놓는다
numAry[pos + 1] = numAry[pos];
numAry[pos] = temp;

for (let i = 0; i < 8; i++) {
  console.log(`${i}번째의 값 => ${numAry[i]}`);
  sum += numAry[i];
}

console.log(sum);

// let temp = numAry[6]
// numAry[6] = numAry[5];
// numAry[5] = temp;