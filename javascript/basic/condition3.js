// condition3.js

// 2개의 숫자를 입력.
// 2개가 전부 짝수이면 => 모두 짝수입니다.
// 1개라도 짝수이면 => 하나는 짝수 입니다.
// 0개이면 => 짝수는 없습니다.
let num = prompt('숫자를 입력하세요.');
let num2 = prompt('숫자를 입력하세요.');

if (num % 2 == 0 && num2 % 2 == 0) {
  console.log('모두 짝수입니다.');
} else if (num % 2 == 0 || num2 % 2 == 0) {
  console.log('하나만 짝수 입니다.');
} else {
  console.log('짝수는 없습니다.');
}