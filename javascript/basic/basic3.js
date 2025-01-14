// basic3.js
/*
 두 숫자를 입력 받아서 두수의 곱을 출력.
 첫번째 값에 5의 값을 더하고, 두번째 값은 3의 값을 빼서 두수의 차를 구하시오.
 */

 let firstValue = parseInt(prompt("첫번째 값을 입력하세요: "));
 let secondValue =prompt("두번째 값을 입력하세요: ");
  firstValue += 5;  //parseInt(firstValue) + 1; 증가연산자
  secondValue -= 3; //parseInt(secondValue) + 1; 감소연산자
//  console.log(firstValue, secondValue);
 let result = firstValue - secondValue;
 console.log(`${firstValue}에서 ${secondValue}의 값을 뺀 결과: ${result}`);