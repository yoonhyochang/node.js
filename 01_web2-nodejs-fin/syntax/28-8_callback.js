//* 5. 처리 시간이 오래 걸린다고 가정한 함수를 콜백 함수로 만들기   
var a = function () {
    console.log('A');
}

function slowfunc(callback) {//여기
    callback();//여기
}

slowfunc(a);//여기
