// object4.js
// 1일의 요일?, 마지막날? => 달력만들수 있음
let month = 4;
let date = 17;
let year = 2022;

let today = new Date();
today.setFullYear(year);
today.setMonth(month);
today.setDate(date);

today = new Date(2024, 4, 3, 15, 30, 22);

// console.log(today, today.getDate());
console.clear();
let a ={};
let b ={};
console.log(a == b);

today = new Date();
let now = new Date();
console.log(today.getTime() == now.getTime());

console.log(new Date(2000));
console.log(today.valueOf() == now.valueOf());
console.log(today.valueOf());

today = new Date();
// 2022년 5월 => 17일은 입력안했는데 오늘날짜가 25년 1월 '17일' 이여서 17일로 나타냄
today.setFullYear(2022);
today.setMonth(4);

// console.log(today);