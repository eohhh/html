// basic1.js
/*
  변수 선언: 이름, 연락처, 주소 선언
  console 출력.
*/
let myName = " 어진";
let myAd = " 대구 서구";
let myPh = "0000";

let largeNumber = 11111111111111111111111111111111n;
console.log(largeNumber);

const bloodType = "O"; // const(상수)는 값을 못바꿈.
// bloodType = "A"; -> 위에 선언을 했기 때문에 오류가 나온다.
console.log(bloodType);
const PI = 3.14; // 프로그램 변하지 않는 값으로 선언.

myName ="김길동";

console.log("내 이름은 " + myName + "입니다. ");
console.log("내 연락처는" + myPh + "입니다. ");
console.log(`주소는 ${myAd} 입니다.`)

console.log(`반지름 5인 원의 넓이는 ${5 * 5 * PI}`);
console.log("----------------------------")
let myInfo = {
  name: "홍길동",
  age: 20
};
console.log(typeof myInfo);


let scores = [ 10, 20, 30]; // 배열.
console.log(typeof scores);

let specialType = null;
console.log(typeof specialType);




console.log(typeof myName); // 변수의 자료형을 출력.
console.log(typeof myPh);
console.log(typeof PI);
console.log(typeof (PI == 3)); // true 또는 false의 값을 가지는 타입은 boolean 이다.