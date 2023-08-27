//* 5. 자신의 이름에 종속적이지 않게 this 키워드를 사용
var o = {
    v1:'v1',
    v2:'v2',
    f1:function () {
        console.log(this.v1);//코드가 종속적에서 독립적으로 변경됨 
    },
    f2:function () {
        console.log(this.v2);
    }
}

o.f1();
o.f2();
