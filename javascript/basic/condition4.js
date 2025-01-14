//condition 4

const obj = {
  name: "홍길동",
  age: 20,
  showName: function() { //메소드.
    console.log(obj.name);
  }
}
obj.showName();

// 1 ~ 10 사이의 임의수 출력.
console.log();
let num = parseInt(Math.random() * 10) + 1; // 0 <= x < 10 값의 범위를 출력.
let num2 = parseInt(Math.random() * 10) + 1; // 0 <= x < 10 값의 범위를 출력.

let sumEven = 10; // 짝수의 값은 sumEven에 합하기.
let sumOdd = 20; // 홀수의 값은 Odd에 합하기.

// truthy vs falsy (0, "", null, undefined)
if (num % 2 == 0) {
  console.log(sumEven += num);
} else {
  console.log(sumOdd += num);
}
if (num2 % 2 ==0) {
  console.log(sumEven += num2);
} else {
  console.log(sumOdd += num2);
}
