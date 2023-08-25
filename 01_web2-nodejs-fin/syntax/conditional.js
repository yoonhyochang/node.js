//* 자바스크립트-콘솔에서 입력받기
//* 1. 콘솔로 부터 입력값 받기
var args = process.argv; //여기
console.log(args[2]);//*2 콘솔로부터 입력한 값만 출력
console.log('A');
console.log('B');
if(args[2] === '1') { //*3 입력한 값에 따라 다르게 출력하기
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');
//* 1.1 콘솔에 명령 뒤에 입력값을 명시함 ex) node conditional engoing asfdfas