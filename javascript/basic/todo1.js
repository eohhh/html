// todo1.js
// if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 
// 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.
// 입력받은 숫자가 0보다 큰 경우 1을 출력
// 입력받은 숫자가 0보다 작은 경우 -1을 출력
// 입력받은 숫자가 0인 경우 0을 출력

//1~99가지 랜덤숫자 1개 뽑아서 앞자리수를 더하라 92 / 10

let num = parseInt(Math.random() * 100) + 1;
console.log(num);
if (num >= 10) {
  console.log(num += parseInt(num / 10));
}