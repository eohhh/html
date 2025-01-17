// exe2.js

let numAry = [{name:'조카', age: 10},
              {name:'큰조카', age: 14},
              {name:'삼촌', age: 31},
              {name:'큰아버지', age: 45},
              {name:'나', age: 21}]
              
let filAry = numAry.filter(function(item, idx, ary) {
  if (item.name.indexOf('조카') != -1) {
    return false;
  }
    return true;
  // return true; // 전부 true니까 numAry의 모든 값을 filAry에 넣어줌.
});

// 0번째 값은 10
// 1번째 값은 14
numAry.forEach(function(item, idx, ary) {
    console.log (`${item.name}`);
});