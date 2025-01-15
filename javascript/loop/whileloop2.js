// whileloop2.js
// stop 을 입력하면 반복문 종료.
// 입력한 값중에서 제일 큰 값을 출력.
// let run = true;
// let max = 0;

// while (run) {
//   let inputValue = prompt("점수를 입력하세요: ");
//   if (inputValue == 'stop'){
//     run = false;
//   } else {
//     if (max < inputValue) {
//       max = inputValue;
//     }
//   }
// }
// console.log(`최고점수: ${max}`);

// let run = true;
// let max = 0;

// while (run) {
//   let inputValue = prompt("점수입력");
//   let temp = parseInt(inputValue); //isNaN(temp)
//   if (inputValue == 'stop') {
//     run = false;
//   } else {
//     if (max < inputValue) {
//       max = inputValue;
//     }
//   }
// }
// console.log(max);

let run = true
while (run) {
  let input1 = prompt("점수 입력");  // input1에 parseInt를 쓰게 되면 stop이란 글자를 쓸수가 없으므로 
  // let temp = parseInt(input1);        temp 변수를 만들어 정수를 입력하게 바꾼다.
  if (input1 == 'stop') {
    run = false;
  }
}