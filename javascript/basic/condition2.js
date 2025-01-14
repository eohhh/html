// condition2.js
// 입력받은 숫자 => 2의 배수인지, 3의 배수인지?
// 6 => 2와 3의 배수입니다.
// 4 => 2의 배수입니다. 9 => 3의 배수입니다.

// else if (num == NaN ) {
//   console.log("숫자값을 입력하세요");
// } 


let num = prompt("숫자를 입력하세요");
if (num == 0 || isNaN(num)) {
  console.log('정상적인 값을 입력하세요.');
} else {
  if (num % 2 == 0 && num % 3 == 0) {
    console.log(num + '은 2와 3의 배수입니다.');
  } else if (num % 2 == 0) {
    console.log(num + '은 2의 배수입니다.');
  } else if (num % 3 == 0) {
    console.log(num + '은 3의 배수입니다.');
  } else {
    console.log(num + '은 2와 3의 배수가 아닙니다.');
  }
}