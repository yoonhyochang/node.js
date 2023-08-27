//*6 객체의 데이터에 변수 f를 이용
var f = function() {
    console.log(1+1);
    console.log(1+2);
}

var a = [f];
a[0]();

var o = {//여기
    func:f//여기 (func라는 이름의 속성에 f를 지정)
}
o.func();//여기(객체 o의 func 속성에 함수 호출 연산자인() 붙임)
