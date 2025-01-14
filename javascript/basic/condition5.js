// condition5.js
// 두 수 : 1 ~ 100 까지의 임의의 값을 생성.
// 큰수에서 작은 수 빼서 결과값을 출력.

// let num1 = parseInt(Math.random() * 100) + 1;
// let num2 = parseInt(Math.random() * 100) + 1;

// if (num > num2) {
  //   console.log(num1 - num2);
  // } else {
    //   console.log(num2 - num1);
    // }
    


    // 세수중에서 제일 큰 값을 출력.

    let num1 = parseInt(Math.random() * 100) + 1;
    let num2 = parseInt(Math.random() * 100) + 1;
    let num3 = parseInt(Math.random() * 100) + 1;

    if (num1 > num2 && num1 > num3 ) {
      console.log(num1);
    } else if (num2 > num1 && num2 > num3 ) {
      console.log(num2);
    } else {
      console.log(num3);
    }