// event1.js

let item = document.querySelector('button[name="add"]');
item.addEventListener('click', function () {
  let n1 = document.querySelector('#num1').valueAsNumber; //valueAsNumber -> 바로 숫자로 가져옴
  let n2 = document.querySelector('#num2').valueAsNumber; // parseInt를 한것과 동일
  document.querySelector('#result').value = n1 + n2; // 두개를 더한값을 value라는 속성에 넣어준다.
  console.dir(n1 + n2); // value라는 속성에 넣어주면 화면에 보여진다.
});

let item2 = document.querySelector('button[name="minus"]');
item2.addEventListener('click', function () {

  let n1 = document.querySelector('#num1').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  document.querySelector('#result').value = n1 - n2;
  console.dir(n1 - n2);
});