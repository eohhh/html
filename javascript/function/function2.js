// function2.js
/**
 *  함수이름 :getMax
 *  매개변수: 배열(numAry)
 *  기능: 배열의 요소중에서 제일 큰값을 콘솔출력.
 */

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];
for (let i = 0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}

function getMax(e = []) {
  let sum = 0;
  for (let j = 0; j < e.length; j++) {
    if (sum < e[j]) {
      sum = e[j]
    }
  }
  // console.log(sum);
  return sum; // 함수를 호출한 영역으로 반환. (26번처럼 반환시켜서 화면에 보여줌)
} // end of getMax()

document.write(getMax(ary1)); // => return이 없으면 화면에 보여지지 않음        
alert(getMax(ary2)); // 위의 함수식에 ary2을 넣어서 조건을 실행시킴.
getMax(ary3); // 위의 함수식에 ary3을 넣어서 조건을 실행시킴.