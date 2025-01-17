// object3.js
// forEach() -> 반복문

let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let max = 0;
numAry.forEach(function (item, idx, ary) { // 각각의 값 / 0,1,2,3,4  /모든 배열[20,13,45,62,19]
  // console.log(`item => ${item}`);
  if (idx % 2 == 1) {
    sum += item;
  }

  //최고값 구하기
  if (max < item) {
    max = item;
  }
});
console.log(`홀수위치의 합계: ${sum}, 최고값 ${max}`);

// filter(function(item,idx,ary) {}) 조건을 만족하는 새로운 배열을 생성.
let filterAry = numAry.filter(function (item, idx, ary) {
  if(item % 2 == 1) {
    return true;
  } else {
    return false;
  }
});
console.log(filterAry);