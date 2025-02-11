// dom1.js

document.addEventListener('DOMContentLoaded', init);

function init() {
  
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단.
    // 사용자의 입력값을 변수에 저장.
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;

    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요.")
      return; //함수종료
    }

    let member = {memberId: mid, memberName: mname, point: mpoint};
    let tr = makeTr(member); // 값. (변수X)
    // let member = [mid, memberName, mpoint];
    // let tr = makeTrAry(member);

    // console.log(mid.length);
    // <tr><td>admin</td>.....</tr> 필요한함수: createElement, appendChild
    // let tr = document.createElement('tr'); //td*3을 자식요소로 가질 부모

    // for (let prop in member) {
    //   let td = document.createElement('td'); //회원ID
    //   td.innerText = member[prop];
    //   tr.appendChild(td);
    // }

    // let td = document.createElement('td'); //회원ID
    // td.innerText = mid;
    // tr.appendChild(td);

    // td = document.createElement('td'); // 회원이름
    // td.innerText = mname;
    // tr.appendChild(td);

    // td = document.createElement('td'); //회원점수
    // td.innerText = mpoint;
    // tr.appendChild(td);
    // console.log(tr);

    // tbody의 하위요소로 추가
    document.querySelector('#list').appendChild(tr); // 등록 누르면 리스트에 추가.
   
  }) // end of submit.
  let aa = document.querySelector('input[name="dd"]')
  aa.addEventListener('change', function() {
    let bb = document.querySelectorAll('input[name="cc"]')
    bb.forEach(function (item) {
      if (aa.checked ){
        item.checked = true;
      } else {
        item.checked = false;
      }
    })
    console.log(bb)
  })
  document.querySelectorAll('tbody input').forEach(function(item) {
    
  })
} // end of init().
// function makeTrAry(mbr = []) {
//   let tr = document.createElement('tr');
//   mbr.forEach(function(item) {
//     let td = document.createElement('td');
//     td.innerText = item;
//     tr.appendChild(td);
//   })
//    return tr;
// } // end of forEach.

function makeTr(mbr = {}) {
  let tr = document.createElement('tr'); //td*3을 자식요소로 가질 부모.
  let td1 = document.createElement('td');
  let inp = document.createElement('input');
  inp.type = "checkbox";
  inp.name = "cc"
  td1.appendChild(inp);
  tr.appendChild(td1);
  // tr.appendChild(td);
  
  for (let prop in mbr) {
    let td = document.createElement('td'); //회원ID
    td.innerText = mbr[prop];
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td>
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.style.backgroundColor = 'yellow';
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function () {
    btn.parentElement.parentElement.remove(); // parentElement.remove() -> btn의 상위요소를 지움.
  });

  


  td.appendChild(btn);
  tr.appendChild(td);

  return tr; // return만 쓰면 undefied 반환
} // end of makeTr().