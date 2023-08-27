//* 4. 함수를 객체의 멤버로 추가
var o = {
    v1:'v1',
    v2:'v2',
    f1:function () {
        console.log(o.v1);
    },
    f2:function () {
        console.log(o.v2);
    }
}

o.f1();
o.f2();
