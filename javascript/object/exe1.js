// exe1.js
let myFriends = [];
myFriends.push({name:"홍길동", escore: 70, kscore: 78, gender: 'Female'});
myFriends.push({name:"신현욱", escore: 80, kscore: 88, gender: 'Female'});
myFriends.push({name:"김민식", escore: 90, kscore: 70, gender: 'Male'});
myFriends.push({name:"석지욱", escore: 95, kscore: 55, gender: 'Female'});
console.log(myFriends)

// forEach 콘솔에 출력 / 영어점수가 90점 이상인 사람만 출력.
// 평균 80점 이상 / 여학생의 영어평균
let sum = 0;
let fe = 0;
myFriends.forEach(function(item, idx, ary) {
  // console.log(item.name);
  if (item.escore >= 90) {
    console.log(`영어점수 90점이상: ${item.name}`);
  }
  if ((item.escore + item.kscore) / 2 >= 80)
    console.log(`평균80점 이상: ${item.name}`);
  if (item.gender == 'Female') {
    sum += item.escore;
    fe ++ // 여학생의 점수가 더해질때마다 fe의 숫자를 1씩 올리겠다.
  }
});
console.log (`여학생 영어평균: ${sum / fe}`);
let a = (sum / fe);
// filter: 여학생의 영어평균 미만 => underAvgAry 저장.

let underAvgAry = myFriends.filter(function(item, idx, ary) {
  if (item.escore < a) {
    return true;
  } else {
    return false;
  }
})
console.log(underAvgAry);