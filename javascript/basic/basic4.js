// 278 시간 => 11일 몇시간 입니다.
// let firstTime = parseInt(prompt());
// let firstTime1 = firstTime / 24;
// let firstTime3 = firstTime % 24;

// console.log(`${parseInt(firstTime1)}일, ${firstTime3}시간입니다.`);

// 89349 분 => ?일 ?시간 ?분 입니다.
let nn = parseInt(prompt());
let nn1 = nn / 1440;
let nn2 = nn % 1440/60;
let nn3 = nn % 1440%60;

console.log(`${parseInt(nn1)}일, ${parseInt(nn2)}시간, ${nn3}분 입니다.`);