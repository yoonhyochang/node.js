//* 자바스크립트-객체의 반복
//* 1.배열에 저장된 데이터 순회
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

var i = 0;
while(i < members.length) {
  console.log('array loop', members[i]);
  i = i + 1;
}

/*
var roles = {
  'programmer':'egoing',
  'designer':'k8805',
  'manager':'hoya'
}
console.log(roles.designer);
console.log(roles['designer']);
*/
