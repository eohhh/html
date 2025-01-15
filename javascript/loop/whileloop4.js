// whileloof4.js
// member_id: "user01", member_name: "홍길동", point: 80
// member_id: "user02", member_name: "신현욱", point: 90
// member_id: "user03", member_name: "김민식", point: 85
// let members = [user01, user02, user03];

// let user01 = {
//   id: 'user01',
//   name: '홍길동',
//   point: 80
// }
// let user02 = {
//   id: 'user02',
//   name: '신현욱',
//   point: 90
// }
// let user03 = {
//   id: 'user03',
//   name: '김민식',
//   point: 85
// }
// console.log(`member_id: ${user01}`)
let members = [];
members[0] = {member_id: "user01", member_name: "홍길동", point: 80};
members[1] = {member_id: "user02", member_name: "신현욱", point: 90};
members[2] = {member_id: "user03", member_name: "김민식", point: 85};
let max = members[0];
let maxId = '';
for(let i = 0; i < members.length; i++ ){
  if ( max.point < members[i]['point']) {
    max = members[i];
    // maxId = members[i]['member_id'];
  }
}
console.log(`${max.point}, ${max['member_name']}`);