// forloop1.js
let sum = 0;

// 1 ~ 10 까지 출력.
for (let i = 1; i <= 10; i++) {
  console.log(`현재 i의 값 : ${i}`);
  if (1 % 2 == 1);{
    sum = sum + i;
  }
}

console.log(`1~10까지의 홀수합 ${sum}`);
console.log('end of for');