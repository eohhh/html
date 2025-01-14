// basic.js
let myName = "user01";        // string(문자열) 변수선언. -> 문자열은 ""
let myAge = 20;   // number 변수 20 값 대입. (대입연산자)
let myObj ={name: "user02", age: 25};  // object 변수.

console.log(myName == "user01");
console.log(myAge == myAge);
console.log(myObj);

console.log(myObj.name); // "user02"
console.log(myObj.age +3); // 25

console.log("내 이름은 " + myObj.name + "입니다."); //"user02"