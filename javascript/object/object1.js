// object1.js

let obj ={}; // 객체(인스턴스)
obj =  new Object();

obj.title = "이것이 자바다";
obj['price'] = 30000;

console.log(obj);

let today = new Date();
console.log(today.getFullYear() + '년도');

let numAry = [10, 20, 30]; //new Array();
numAry.push(40);
numAry.unshift(5);
numAry.splice(1, 1, 8); // 5, 10, 20, 30, 40

console.log(numAry);