//* 내장 함수의 입력값 살펴보기
console.log(Math.round(1.6)); //2

//* 기존 명령문을 함수를 실행하는 명령으로 대체
function sum(first, second) {
    console.log('a');
    return first + second;
    
    //* return문 앞뒤로 출력문을 두고 테스트
    console.log('b');
}

console.log(sum(2, 4));
