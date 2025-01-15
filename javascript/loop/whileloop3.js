// whileloop3.js
// object 타입.

let myInfo = {
  name: "홍길동",
  age: 20,
  height: 170,
  weight: 65
}; //object.
console.log(myInfo);
console.log("------------------");


console.log(`이름: ${myInfo.name}, 나이: ${myInfo['age']}`);
console.log(`키: ${myInfo.height}, 몸무게: ${myInfo['weight']}`);
console.log("------------------");
// for..in 반복문.
for(let i in myInfo) {
  console.log(`속성:${i}, 값: ${myInfo[i]}`);
}
console.log("------------------");

// for .. of 반복문.
let nameAry = ['홍길동', '김민석', '박석민'];
for (let name of nameAry) {
  console.log(`값: ${name}`);
}
console.log("------------------");

let myFriend1 = {
  name: "홍길동",
  phone: "010-1111-1111",
  address: "대구 중구 100번지"
}
let myFriend2 = {
  name: "김민수",
  phone: "010-2222-3333",
  address: "대구 중구 200번지"
}
let myFriend3 = {
  name: "박석민",
  phone: "010-4444-5555",
  address: "대구 중구 400번지"
}
// for(let b in myFriend1) {
//   console.log(`속성:${b}, 값:${myFriend1[b]}`);
// }

let friend = [myFriend1, myFriend2, myFriend3];
console.log(friend[0].name);
console.log(friend[1]['phone']);
console.log(friend[2]['address']);
for (let i = 0; i < friend.length; i++) {
  // 친구이름
  console.log(`이름: ${friend[i].name}, 연락처: ${friend[i]['phone']}`)
}