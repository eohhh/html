// forloop4.js
// 0 <= Math.random() < 1 => 50부터 100.
// 학생 10명의 임의 점수를 배열에 저장.

// let scores = [];
// let sum = 0;
// let max = 0;

// for (let i = 0; i < 10; i++) {
//   scores[i] = parseInt(Math.random() * 51) + 50;
//   console.log(scores[i]);
// }

// // 평균계산.
// for (let i = 0; i < 10; i++) {
//   sum += scores[i];
// //   if (max < scores[i]) { //최대값 구하기.
// //     max = scores[i]
//   }
// // }
// console.log(`평균: ${sum / 10}`);
// // console.log(`최대값은 ${max}`);

let score = [];
let sum = 0;
let max = 0;

for (let i = 0; i < 10; i++) {
  score[i] = parseInt(Math.random() * 51 ) + 50;
  console.log(score[i]);
}
for (let i = 0; i < 10; i++) {
  sum += score[i];
  if (max < score[i]) {
    max = score[i]
  }
}
console.log(`평균: ${sum / 10}`);
console.log(`최대값은: ${max}`);