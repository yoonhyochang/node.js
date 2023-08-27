//* 5. 함수를 변수에 대입
var f = function() {
    console.log(1+1);
    console.log(1+2);
}

var a = [f]; //여기
a[0]();//여기
